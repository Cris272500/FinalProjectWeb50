from django.shortcuts import render, redirect
from django.http import HttpResponse
from rest_framework import viewsets
from .serializer import AgenteSerializer, UsuarioSerializer, AreaSerializer, ServicioSerializer, SubservicioSerializer, TicketSerializer, ServicioDisponibleSerializer, ServicioClienteSerializer
from .models import Agente, Usuario, Area, Servicio, Subservicio, Ticket, ServicioDisponible, ServicioCliente
from django.db import IntegrityError
from django.urls import reverse
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate, login as auth_login
from django.contrib.auth.decorators import login_required

from django.contrib import messages

# Create your views here.
def hola(request):
    return render(request, 'nethelp/index.html')

# vistas

def index(request):
    return render(request, "nethelp/index.html")

def register(request):
    if request.method == "POST":
        nombre = request.POST['nombre']
        username = request.POST['username']
        numero_cuenta = request.POST['numero_cuenta']
        telefono = request.POST['telefono']
        direccion = request.POST['direccion']

        # Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]

        if not nombre or not username or not numero_cuenta or not telefono or not direccion or not telefono or not password or not confirmation:
            messages.error(request, "Campos vacio", extra_tags="danger")
            return redirect(reverse("register"))

        if password != confirmation:
            messages.error(request, "Las contraseñas deben coincidir", extra_tags="danger")
            return redirect(reverse("register"))

        # creamos a un nuevo usuario
        try:
            user = Usuario.objects.create(
                nombre = nombre,
                username = username,
                numero_cuenta = numero_cuenta,
                telefono = telefono,
                direccion = direccion,
                password = password
            )
            user.save()
            messages.success(request, "Registro creado", extra_tags="success")
            #login(request, user)
            return redirect(reverse("index"))

        except IntegrityError:
            messages.error(request, "Username o numero de cuenta tomados", extra_tags="danger")
            return redirect(reverse("register"))
    else:
        return render(request, "nethelp/register.html")


# Serializadores
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

class ServicioDisponibleView(viewsets.ModelViewSet):
    serializer_class = ServicioDisponibleSerializer
    queryset = ServicioDisponible.objects.all()

class ServicioClienteView(viewsets.ModelViewSet):
    serializer_class = ServicioClienteSerializer
    queryset = ServicioCliente.objects.all()