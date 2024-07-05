from rest_framework_simplejwt.views import TokenRefreshView
from django.urls import path

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
    path("tickets/cliente/<int:id_cliente>/", views.TicketClienteView.as_view(), name="list_ticket_cliente"), # tickets de un cliente
    path("tickets/estado/<str:estado>/", views.TicketEstadoView.as_view(), name="list_ticket_estado"), # tickets por estado
    path("tickets/agente/<int:id_agente>/", views.TicketAgenteView.as_view(), name="list_ticket_agente"), # tickets por agente

    # productos de la empresa / planes pues
    path("servicios/", views.ServicioDisponibleView.as_view(), name="list_servicios"),
    # para crear contratos o planes
    path("contrato/", views.ServicioClienteView.as_view(), name="create_contrato"),
]