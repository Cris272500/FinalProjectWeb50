from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializer import AgenteSerializer, UsuarioSerializer
from .models import Agente, Usuario

# Create your views here.
def hola(request):
    return render(request, 'nethelp/index.html')

class AgenteView(viewsets.ModelViewSet):
    serializer_class = AgenteSerializer
    queryset = Agente.objects.all()

class UsuarioView(viewsets.ModelViewSet):
    serializer_class = UsuarioSerializer
    queryset = Usuario.objects.all()