from django.urls import path, include
# aqui mandamos todas las vistas de mis modelos serializadas 
from .views import hola, AgenteView, UsuarioView, AreaView, ServicioView, SubservicioView, TicketView, ServicioDisponibleView, ServicioClienteView
from .views import register, index, login_view
from nethelp import views
from rest_framework import routers
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'agentes', AgenteView, 'agentes')
router.register(r'usuarios', UsuarioView, 'usuarios')
router.register(r'areas', AreaView, 'areas')
router.register(r'servicios', ServicioView, 'servicios')
router.register(r'subservicios', SubservicioView, 'subservicios')
router.register(r'tickets', TicketView, 'tickets')
router.register(r'servicios_disponibles', ServicioDisponibleView, 'servicios_disponibles')
router.register(r'servicioclientes', ServicioClienteView, 'servicioclientes')

urlpatterns = [
    path('', index, name='index'),
    path('api/login/', login_view, name='login'),
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="CallCenter API")),
    path('register/', register, name='register'),
]