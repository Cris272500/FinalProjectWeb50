from django.db import models
from django.contrib.auth.models import AbstractUser, Group, Permission, UserManager
from .managers import UsuarioManager, AgenteManager

# Create your models here.
class Usuario(AbstractUser):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, null=False, blank=False)
    username = models.CharField(max_length=20, unique=True, null=False, blank=False)
    numero_cuenta = models.CharField(max_length=10, unique=True, null=False, blank=False)
    password = models.CharField(max_length=80, null=False, blank=False)
    telefono = models.CharField(max_length=10, unique=True, null=False, blank=False)
    direccion = models.TextField(null=False, blank=False)
    moroso = models.BooleanField(default=False)

    objects = UsuarioManager()

    def __str__(self):
        return f"Nombre: {self.nombre}, username: {self.username}, tel: {self.telefono} "
    
    class Meta:
        verbose_name = 'Usuario'
        verbose_name_plural = 'Usuarios'
    

class Agente(AbstractUser):
    ESTADO = [
        ('Disponible', 'Disponible'),
        ('En llamada', 'En llamada'),
        ('Pausado', 'Pausado'),
    ]

    DEPARTAMENTOS = [
        ('Atencion al cliente', 'Atencion al cliente'),
        ('Soporte Tecnico', 'Soporte Tecnico'),
        ('Ventas', 'Ventas'), 
        ('Desarrollo de productos', 'Desarrollo de productos'),
        ('Administracion de redes', 'Administracion de redes'),
    ]

    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, null=False, blank=False)
    username = models.CharField(max_length=20, unique=True, null=False, blank=False)
    password = models.CharField(max_length=120, null=False, blank=False) #null=False, blank=False eso va luego
    departamento = models.CharField(max_length=140, choices=DEPARTAMENTOS)
    estado = models.CharField(max_length=140, choices=ESTADO)
    is_admin = models.BooleanField(default=False)

    # Especificar related_name para evitar conflictos
    groups = models.ManyToManyField(Group, related_name='agentes')
    user_permissions = models.ManyToManyField(Permission, related_name='agentes')

    objects = AgenteManager()

    def __str__(self):
        return f"nombre: {self.nombre} username: {self.username}"
    
    class Meta:
        verbose_name = 'Agente'
        verbose_name_plural = 'Agentes'

# este seria para la parte de solicitantes
class Area(models.Model):
    id = models.AutoField(primary_key=True)
    nombre_area = models.CharField(max_length=40, null=False, blank=False)

    def __str__(self):
        return f"{self.nombre_area}"

class Servicio(models.Model):
    id = models.AutoField(primary_key=True)
    nombre_servicio = models.CharField(max_length=100, null=False, blank=False)
    area = models.ForeignKey(Area, on_delete=models.CASCADE, related_name='servicios', default=1)

    def __str__(self):
        return f"Area: {self.area} || Servicio: {self.nombre_servicio}"
    
class Subservicio(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, null=False, blank=False)
    servicio = models.ForeignKey(Servicio, on_delete=models.CASCADE, related_name='subservicios')

    def __str__(self):
        return f"{self.servicio} || Subservicio: {self.nombre}"


class Ticket(models.Model):
    ESTADO = [
        ('Abierto', 'Abierto'),
        ('Cerrado', 'Cerrado'),
        ('Vencido', 'Vencido'),
    ]
    PRIORIDAD = [
        ('Baja', 'Baja'),
        ('Media', 'Media'),
        ('Alta', 'Alta'),
    ]
    ASIGNACION = [
        ('Administracion de redes', 'Administracion de redes'),
        ('Soporte en campo', 'Soporte en campo'),
        ('Ventas', 'Ventas'),
        ('Soporte Tecnico', 'Soporte Tecnico'),
        ('Atencion al cliente', 'Atencion al cliente'),
    ]

    id = models.AutoField(primary_key=True)
    asunto = models.CharField(max_length=100, null=False, blank=False)
    descripcion = models.TextField(null=False, blank=False)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateTimeField(auto_now=True)
    fecha_vencimiento = models.DateTimeField(null=False, blank=False)
    estado = models.CharField(max_length=20, choices=ESTADO)
    prioridad = models.CharField(max_length=20, choices=PRIORIDAD)
    asignacion_actual = models.CharField(max_length=100, choices=ASIGNACION, default='Atencion al cliente')

    # relaciones con otros modelos
    nombre_area = models.ForeignKey(Area, on_delete=models.CASCADE, related_name='tickets')
    servicio = models.ForeignKey(Servicio, on_delete=models.CASCADE, related_name='tickets')
    sub_servicio = models.ForeignKey(Subservicio, on_delete=models.CASCADE, related_name='tickets')

    id_cliente = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='tickets_cliente')
    id_agente = models.ForeignKey(Agente, on_delete=models.CASCADE, related_name='tickets_agente')

    def __str__(self):
        return f"{self.asunto}, {self.id_cliente.nombre}, {self.id_agente}"

class ServicioDisponible(models.Model):
    id = models.AutoField(primary_key=True)
    nombre_servicio = models.CharField(max_length=100, null=False, blank=False, unique=True)
    descripcion = models.TextField(null=False, blank=False)
    precio = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False)

    def __str__(self):
        return f"{self.nombre_servicio} || {self.precio}"

# este modelo es para los servicios que el cliente solicita
class ServicioCliente(models.Model):
    id = models.AutoField(primary_key=True)
    #descripcion = models.TextField(null=False, blank=False)
    fecha_inicio = models.DateTimeField(auto_now_add=True)
    fecha_fin = models.DateTimeField(null=False, blank=False)
    vencido = models.BooleanField(default=False)
    # relaciones con los otros modelos
    id_servicio = models.ForeignKey(ServicioDisponible, on_delete=models.CASCADE)
    id_cliente = models.ForeignKey(Usuario, on_delete=models.CASCADE, related_name='servicios_contratados')

    def __str__(self):
        return f"ID: {self.id}, Cliente: {self.id_cliente.nombre}, Servicio: {self.id_servicio.nombre_servicio}, Inicio: {self.fecha_inicio}, Fin: {self.fecha_fin}"

