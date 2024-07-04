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
    path("register_client", views.RegisterUsuarioView.as_view(), name="register_client"),
    path("login/", views.LoginView.as_view(), name="login"),
]