from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.schemas import get_schema_view
from django.urls import path
from rest_framework.documentation import include_docs_urls

API_TITLE = 'NetHelp Connect API'
API_DESCRIPTION = 'Documentación de la API de NetHelp Connect'
schema_view = get_schema_view(
    title=API_TITLE,
    description=API_DESCRIPTION,
    version='1.0.0'
)


# mis vistas
from nethelp import views

urlpatterns = [
    path("token/", views.MyTokenObtainPairView.as_view(), name="token_obtain_pair"),
    path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh"),
    path("register/", views.RegisterView.as_view(), name="register"),
    path("dashboard", views.dashboard, name="dashboard"),
    path("agentes/", views.get_agentes, name="list_agentes"),
    path("verify/", views.verify_password, name="verify_password"),
    path("register_client/", views.RegisterUsuarioView.as_view(), name="register_client"),
    path("agente/login/", views.AgenteLoginView.as_view(), name="login"),

    # tickets
    # crear ticket
    path("tickets/create/", views.TicketCreateView.as_view(), name="create_ticket"),
    path("tickets/", views.TicketListView.as_view(), name="list_ticket"),
    path("tickets/<int:pk>/", views.TicketDetailView.as_view(), name="ticket_detail"), # detalles de un ticket
    path("tickets/<int:pk>/update/", views.TicketDetailUpdateView.as_view(), name="update_ticket"), # actualizar un ticket
    path("tickets/cliente/<str:numero_cuenta>/", views.TicketClienteView.as_view(), name="list_ticket_cliente"), # tickets de un cliente
    path("tickets/estado/<str:estado>/", views.TicketEstadoView.as_view(), name="list_ticket_estado"), # tickets por estado
    path("tickets/agente/<int:id_agente>/", views.TicketAgenteView.as_view(), name="list_ticket_agente"), # tickets por agente
    path("tickets/<int:pk>/asignar-agente/", views.TicketAsignarAgenteView.as_view(), name="ticket_asignar_agente"), # asignar, reasignar un ticket a un agente


    path("tickets/clientes/", views.clientes_list, name="list_clientes"),
    path("tickets/agentes/", views.agentes_list, name="list_agentes"),
    path("tickets/areas/", views.areas_list, name="list_areas"),
    path("tickets/servicios/", views.servicios_list, name="list_servicios"),
    path("tickets/subservicios/", views.subservicios_list, name="list_subservicios"),

    # productos de la empresa / planes pues
    path("servicios/", views.ServicioDisponibleView.as_view(), name="list_servicios"),
    # para crear contratos o planes
    path("contrato/", views.ServicioClienteView.as_view(), name="create_contrato"),

    path('api/schema/', schema_view),
    path('docs/', include_docs_urls(title="Nethelp docs")),

]