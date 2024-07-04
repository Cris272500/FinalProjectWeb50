from django.contrib import admin
from .models import Agente, Usuario
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

#admin.site.register(ServicioCliente)

admin.site.register(Agente, AgenteAdmin)
admin.site.register(Usuario, UsuarioAdmin)