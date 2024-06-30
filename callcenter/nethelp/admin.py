from django.contrib import admin
from .models import Agente, Usuario, Area, Servicio, Subservicio, Ticket
# Register your models here.

admin.site.register(Agente)
admin.site.register(Usuario)
admin.site.register(Area)
admin.site.register(Servicio)
admin.site.register(Subservicio)
admin.site.register(Ticket)
