from django.shortcuts import render
from django.contrib.auth import authenticate

from .models import Agente
from .serializer import AgenteSerializer, UsuarioSerializer ,MytokenObtainPairSerializer, RegisterSerializer, VerifyPasswordSerializer, RegisterUsuarioSerializer

from rest_framework.decorators import api_view, permission_classes
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics, status
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MytokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = Agente.objects.all()
    permission_classes = ([AllowAny])
    serializer_class = RegisterSerializer

class RegisterUsuarioView(generics.CreateAPIView):
    queryset = Agente.objects.all()
    permission_classes = ([AllowAny])
    serializer_class = RegisterUsuarioSerializer

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
