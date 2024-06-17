from django.db import models

# Create your models here.
class Usuario(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, null=False, blank=False)
    username = models.CharField(max_length=20, unique=True, null=False, blank=False)
    numero_cuenta = models.CharField(max_length=10, unique=True, null=False, blank=False)
    password = models.CharField(max_length=80, null=False, blank=False)
    telefono = models.CharField(max_length=10, unique=True, null=False, blank=False)
    direccion = models.TextField(null=False, blank=False)
    moroso = models.BooleanField(default=False)

    def __str__(self):
        return f"Nombre: {self.nombre}, username: {self.username}, tel: {self.telefono} "

class Agente(models.Model):
    id = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=100, null=False, blank=False)
    username = models.CharField(max_length=20, unique=True, null=False, blank=False)
    departamento = models.CharField(max_length=50, null=False, blank=False)
    estado = models.CharField(max_length=15, null=False, blank=False)
    is_admin = models.BooleanField(default=False)

    def __str__(self):
        return f"nombre: {self.nombre} username: {self.username}"

class Solicitante(models.Model):
    id = models.AutoField(primary_key=True)
    nombre_area = models.CharField(max_length=40, null=False, blank=False)
    servicio_solucion = models.CharField(max_length=50, null=False, blank=False)

    def __str__(self):
        return f"Area: {self.nombre_area}"

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
    id = models.AutoField(primary_key=True)
    asunto = models.CharField(max_length=100, null=False, blank=False)
    descripcion = models.TextField(null=False, blank=False)
    fecha_creacion = models.DateTimeField(auto_now_add=True)
    fecha_actualizacion = models.DateField(auto_now=True)
    fecha_vencimiento = models.DateTimeField(null=False, blank=False)
    estado = models.CharField(max_length=20, choices=ESTADO)
    prioridad = models.CharField(max_length=20, choices=PRIORIDAD)
    sub_servicio = models.CharField(max_length=100, null=False, blank=False)
    id_cliente = models.ForeignKey(Usuario, on_delete=models.CASCADE)
    id_agente = models.ForeignKey(Agente, on_delete=models.CASCADE)
    id_solicitante = models.ForeignKey(Solicitante, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.asunto}, {self.id_cliente.nombre}, {self.id_agente}"

class Servicio(models.Model):
    id = models.AutoField(primary_key=True)
    nombre_servicio = models.CharField(max_length=100, null=False, blank=False)
    descripcion = models.TextField(null=False, blank=False)
    fecha_inicio = models.DateTimeField(auto_now_add=True)
    fecha_fin = models.DateTimeField(null=False, blank=False)
    vencido = models.BooleanField(default=False)
    precio = models.DecimalField(max_digits=10, decimal_places=2, null=False, blank=False)
    id_cliente = models.ForeignKey(Usuario, on_delete=models.CASCADE)

    def __str__(self):
        return f"{self.nombre_servicio}, {self.id_cliente.nombre}, {self.fecha_inicio}, {self.fecha_fin}"

