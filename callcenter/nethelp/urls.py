from django.urls import path, include
# aqui mandamos todas las vistas de mis modelos serializadas 
from .views import hola, AgenteView, UsuarioView
from rest_framework import routers
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'agentes', AgenteView, 'agentes')
router.register(r'usuarios', UsuarioView, 'usuarios')


urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="CallCenter API")),
]