from django.urls import path, include
from .views import hola, AgenteView
from rest_framework import routers
from rest_framework.documentation import include_docs_urls

router = routers.DefaultRouter()
router.register(r'agentes', AgenteView, 'agentes')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('docs/', include_docs_urls(title="Agentes API")),
]