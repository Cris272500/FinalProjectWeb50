from django.shortcuts import render
from django.contrib.auth import authenticate

from .models import Agente, Usuario, Ticket, ServicioDisponible
from .serializer import AgenteSerializer, UsuarioSerializer ,MytokenObtainPairSerializer, RegisterSerializer, VerifyPasswordSerializer, RegisterUsuarioSerializer, AgenteLoginSerializer, TicketSerializer, TicketListSerializer, ServicioDisponibleSerializer, ServicioClienteSerializer, TicketDetailSerializer, TicketDetailUpdateSerializer
from .serializer import TicketClienteSerialier

from rest_framework.views import APIView
from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MytokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = Agente.objects.all()
    permission_classes = ([AllowAny])
    serializer_class = RegisterSerializer

class RegisterUsuarioView(generics.CreateAPIView):
    queryset = Usuario.objects.all()
    permission_classes = ([AllowAny])
    serializer_class = RegisterUsuarioSerializer

class AgenteLoginView(APIView):
    def post(self, request):
        serializer = AgenteLoginSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            return Response(serializer.validated_data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# vistas para los tickets
class TicketCreateView(generics.CreateAPIView):
    serializer_class = TicketSerializer  # Define el serializador a utilizar

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

    def perform_create(self, serializer):
        serializer.save()

class TicketListView(generics.ListAPIView): # muestra todos los tickets
    serializer_class = TicketListSerializer
    queryset = Ticket.objects.all()

class TicketDetailView(generics.RetrieveAPIView): # muestra un ticket
    serializer_class = TicketDetailSerializer
    queryset = Ticket.objects.all()

class TicketDetailUpdateView(generics.RetrieveUpdateAPIView): # actualiza un ticket
    serializer_class = TicketDetailUpdateSerializer
    queryset = Ticket.objects.all()

class TicketClienteView(generics.ListAPIView): # muestra todos los tickets de un cliente
    serializer_class = TicketClienteSerialier
    # permission_classes = [IsAuthenticated]

    def get_queryset(self):
        id_cliente = self.kwargs['id_cliente']
        return Ticket.objects.filter(id_cliente=id_cliente)

class TicketEstadoView(generics.ListAPIView): # muestra los tickets por estado
    serializer_class = TicketListSerializer
    
    def get_queryset(self):
        estado = self.kwargs['estado']
        return Ticket.objects.filter(estado=estado)

class TicketAgenteView(generics.ListAPIView): # muestra los tickets de un agente
    serializer_class = TicketListSerializer
    # permission_classes = [IsAuthenticated]

    def get_queryset(self):
        id_agente = self.kwargs['id_agente']
        return Ticket.objects.filter(id_agente=id_agente)

# vistas para los servicios disponibles de la 
class ServicioDisponibleView(generics.ListAPIView):
    serializer_class = ServicioDisponibleSerializer
    queryset = ServicioDisponible.objects.all()

# crear contratos o planes
class ServicioClienteView(generics.CreateAPIView):
    serializer_class = ServicioClienteSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def dashboard(request):
    if request.method == 'GET':
        response = f"Hey, {request.user} estas haciendo una peticion GET"
        return Response({'response': response}, status.HTTP_200_OK)
    '''elif request.method == 'POST':
        response = f"Hey, {request.user} estas haciendo una peticion POST"
        return Response({'response': response}, status.HTTP_200_OK)'''
    
    # si es otra peticion
    return Response({'response': 'Error'}, status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
# @permission_classes([IsAuthenticated])
def get_agentes(request):
    if request.method == 'GET':
        agentes = Agente.objects.all()
        serializer = AgenteSerializer(agentes, many=True)
        return Response(serializer.data, status.HTTP_200_OK)

@api_view(['POST'])
#   @permission_classes([IsAuthenticated])
def verify_password(request):
    serializer = VerifyPasswordSerializer(data=request.data)

    if serializer.is_valid():
        username = request.data.get('username')
        password = request.data.get('password')

        print(f"U: {username} || P: {password}")

        user = authenticate(request, username=username, password=password)

        if user is not None:
            return Response({"message": "Password is correct"}, status=status.HTTP_200_OK)
        else:
            return Response({"message": "Password is incorrect"}, status=status.HTTP_400_BAD_REQUEST)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
