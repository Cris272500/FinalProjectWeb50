from django.contrib.auth.backends import BaseBackend
from django.contrib.auth import get_user_model
from .models import Agente

class UsuarioAgenteBackend(BaseBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        User = get_user_model()
        try:
            user = User.objects.get(username=username)
            if user.check_password(password):
                return user
        except User.DoesNotExist:
            pass

        try:
            agente = Agente.objects.get(username=username)
            if agente.check_password(password):
                return agente
        except Agente.DoesNotExist:
            pass
        
        return None

    def get_user(self, user_id):
        User = get_user_model()
        try:
            return User.objects.get(pk=user_id)
        except User.DoesNotExist:
            pass

        try:
            return Agente.objects.get(pk=user_id)
        except Agente.DoesNotExist:
            return None
