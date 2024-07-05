from django.contrib import admin
from .models import Agente, Usuario, Ticket, ServicioDisponible, ServicioCliente
# Register your models here.

'''admin.site.register(Agente)
admin.site.register(Usuario)
admin.site.register(Area)
admin.site.register(Servicio)
admin.site.register(Subservicio)
admin.site.register(Ticket)
admin.site.register(ServicioDisponible)
admin.site.register(ServicioCliente)'''

class AgenteAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre', 'username', 'departamento', 'estado', 'is_admin')

class UsuarioAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre', 'username', 'numero_cuenta', 'telefono', 'direccion', 'moroso')

class TicketAdmin(admin.ModelAdmin):
    list_display = ('id', 'get_agente_nombre', 'get_usuario_nombre', 'asunto', 'estado', 'fecha_creacion', 'fecha_actualizacion', 'fecha_vencimiento')

    def get_agente_nombre(self, obj):
        return obj.id_agente.nombre
    
    def get_usuario_nombre(self, obj):
        return obj.id_cliente.nombre
    
    # Definir un nombre más descriptivo para la columna de fecha_creacion
    get_agente_nombre.short_description = 'Agente'
    get_usuario_nombre.short_description = 'Usuario'

class ServicioDisponibleAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre_servicio', 'descripcion', 'precio')

class ServicioClienteAdmin(admin.ModelAdmin):
    list_display = ('id', 'get_cliente_nombre', 'get_servicio_nombre', 'fecha_inicio', 'fecha_fin', 'vencido')

    def get_cliente_nombre(self, obj):
        return obj.id_cliente.nombre
    
    def get_servicio_nombre(self, obj):
        return obj.id_servicio.nombre_servicio
    
    # Definir un nombre más descriptivo para las columnas
    get_cliente_nombre.short_description = 'Cliente'
    get_servicio_nombre.short_description = 'Servicio'

#admin.site.register(ServicioCliente)

admin.site.register(Agente, AgenteAdmin)
admin.site.register(Usuario, UsuarioAdmin)
admin.site.register(Ticket, TicketAdmin)
admin.site.register(ServicioDisponible, ServicioDisponibleAdmin)
admin.site.register(ServicioCliente, ServicioClienteAdmin)