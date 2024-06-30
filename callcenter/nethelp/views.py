from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializer import AgenteSerializer, UsuarioSerializer, AreaSerializer, ServicioSerializer, SubservicioSerializer, TicketSerializer
from .models import Agente, Usuario, Area, Servicio, Subservicio, Ticket

# Create your views here.
def hola(request):
    return render(request, 'nethelp/index.html')

class AgenteView(viewsets.ModelViewSet):
    serializer_class = AgenteSerializer
    queryset = Agente.objects.all()

class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()

class AreaView(viewsets.ModelViewSet):
    serializer_class = AreaSerializer
    queryset = Area.objects.all()

class ServicioView(viewsets.ModelViewSet):
    serializer_class = ServicioSerializer
    queryset = Servicio.objects.all()

class SubservicioView(viewsets.ModelViewSet):
    serializer_class = SubservicioSerializer
    queryset = Subservicio.objects.all()

class TicketView(viewsets.ModelViewSet):
    serializer_class = TicketSerializer
    queryset = Ticket.objects.all()