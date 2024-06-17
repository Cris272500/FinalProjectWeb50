from django.contrib import admin
from .models import Agente, Usuario, Solicitante, Ticket, Servicio
# Register your models here.

admin.site.register(Agente)
admin.site.register(Usuario)
admin.site.register(Solicitante)
admin.site.register(Servicio)
admin.site.register(Ticket)