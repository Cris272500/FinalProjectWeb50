from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def hola(request):
    return render(request, 'nethelp/index.html')