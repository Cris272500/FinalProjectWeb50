# mis modelos
from .models import Agente

from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class AgenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agente
        fields = '__all__'

class MytokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        token['nombre'] = user.nombre
        token['username'] = user.username
        token['departamento'] = user.departamento
        token['estado'] = user.estado
        token['is_admin'] = user.is_admin
        return token

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Agente
        fields = '__all__'

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields don't match."})

        return attrs

    def create(self, validated_data):
        agent = Agente.objects.create(
            nombre=validated_data['nombre'],
            username=validated_data['username'],
            password=validated_data['password'],
            departamento=validated_data['departamento'],
            estado=validated_data['estado'],
            is_admin=validated_data['is_admin']
        )
        agent.set_password(validated_data['password'])
        agent.save()


        return agent