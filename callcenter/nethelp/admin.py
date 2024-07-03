from django.contrib import admin
from .models import Agente, Usuario, Area, Servicio, Subservicio, Ticket, ServicioDisponible,ServicioCliente
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

#admin.site.register(ServicioCliente)

admin.site.register(Agente, AgenteAdmin)