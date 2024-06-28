from django.shortcuts import render
from django.http import HttpResponse
from rest_framework import viewsets
from .serializer import AgenteSerializer
from .models import Agente

# Create your views here.
def hola(request):
    return render(request, 'nethelp/index.html')

class AgenteView(viewsets.ModelViewSet):
    serializer_class = AgenteSerializer
    queryset = Agente.objects.all()