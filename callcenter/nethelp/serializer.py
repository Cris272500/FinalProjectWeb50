# mis modelos
from .models import Agente, Usuario, Ticket, Servicio, Subservicio, Area, ServicioDisponible, ServicioCliente

from django.contrib.auth.password_validation import validate_password
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from django.contrib.auth import authenticate
from rest_framework_simplejwt.tokens import RefreshToken
from django.utils import timezone

from datetime import timedelta

# serializadores
class AgenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Agente
        fields = '__all__'

class UsuarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Usuario
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

class VerifyPasswordSerializer(serializers.Serializer):
    username = serializers.CharField(required=True)
    password = serializers.CharField(required=True, write_only=True)

# Register usuario y login  
class RegisterUsuarioSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Usuario
        fields = ('nombre', 'username','numero_cuenta', 'password', 'password2', 'telefono', 'direccion', 'moroso' )

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields don't match."})

        return attrs

    def create(self, validated_data):
        validated_data.pop('password2')
        user = Usuario.objects.create_user(**validated_data)
        return user

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Agente
        fields = ('nombre', 'username', 'password', 'password2', 'departamento', 'estado', 'is_admin')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields don't match."})

        return attrs

    def create(self, validated_data):
        # anteriormente
        validated_data.pop('password2')
        user = Agente.objects.create_user(**validated_data)
        return user

# login para usuario y agente
class AgenteLoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only = True)
    access_token = serializers.CharField(read_only=True)
    refresh_token = serializers.CharField(read_only=True)

    '''class Meta:
        model = Agente
        fields = ('username', 'password', 'access_token', 'refresh_token')'''


    def validate(self, data):
        username = data.get("username")
        password = data.get("password")

        print(f"user: {username}, p: {password}")
        
        if not username or not password:
            raise serializers.ValidationError("Must include username and password")
        
        user = authenticate(request=self.context.get('request'), username=username, password=password)
        print(f"u: {user}")
        
        if not user:
            raise serializers.ValidationError("Incorrect Credentials")
        
        if not isinstance(user, Agente) or not user.is_active:
            raise serializers.ValidationError("User is not an active agent")
        
        # Generar tokens
        refresh = RefreshToken()
        refresh['username'] = user.username
        refresh['id'] = user.id

        print(f"refresh: {refresh}")
        access = refresh.access_token

        data['refresh'] = str(refresh)
        data['access'] = str(access)

        return data
        
# esto lo hace pero para ambos
'''class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField(write_only = True)
    access_token = serializers.CharField(read_only=True)
    refresh_token = serializers.CharField(read_only=True)

    class Meta:
        model = Agente
        fields = ('username', 'password', 'access_token', 'refresh_token')


    def validate(self, data):
        username = data.get("username")
        password = data.get("password")

        if username and password:
            user = authenticate(username=username, password=password)
            if user is None:
                raise serializers.ValidationError("Incorrect Credentials")
        else:
            raise serializers.ValidationError("Must include username and password")
        
        refresh = RefreshToken.for_user(user)
        data['access_token'] = str(refresh.access_token)
        data['refresh_token'] = str(refresh)

        return user'''

# serializer para los tickets
class TicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = '__all__'
    
    # validar que la fecha de vencimiento no este en el pasado
    def validate_fecha_vencimiento(self, value):
        if value < timezone.now():
            raise serializers.ValidationError("La fecha de vencimiento no puede ser en el pasado")
        return value
    
    def create(self, validated_data):
        print(f"Ticket: {validated_data}")
        fecha_creacion = timezone.now()
        validated_data['fecha_vencimiento'] = fecha_creacion + timedelta(days=4)


        return Ticket.objects.create(**validated_data)

class TicketListSerializer(serializers.ModelSerializer):
    agente_nombre = serializers.CharField(source='id_agente.nombre', read_only=True)
    cliente_nombre = serializers.CharField(source='id_cliente.nombre', read_only=True)

    class Meta:
        model = Ticket
        fields = ['id', 'asunto', 'estado', 'fecha_creacion', 'agente_nombre', 'cliente_nombre']

class TicketDetailSerializer(serializers.ModelSerializer):
    agente_nombre = serializers.CharField(source='id_agente.nombre', read_only=True)
    cliente_nombre = serializers.CharField(source='id_cliente.nombre', read_only=True)

    class Meta:
        model = Ticket
        fields = ['id', 'asunto', 'descripcion', 'estado', 'fecha_creacion', 'agente_nombre', 'cliente_nombre']
# serializer para editar, actualizar un ticket
class TicketDetailUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ['descripcion', 'estado', 'asignacion_actual', 'nombre_area', 'servicio', 'sub_servicio']

class TicketClienteSerialier(serializers.ModelSerializer):
    agente_nombre = serializers.CharField(source='id_agente.nombre', read_only=True)
    cliente_nombre = serializers.CharField(source='id_cliente.nombre', read_only=True)
    class Meta:
        model = Ticket
        fields = ['id', 'asunto', 'estado', 'fecha_creacion', 'id_agente', 'agente_nombre', 'id_cliente', 'cliente_nombre']

# serializer para mostrar todos los servicios de la empresa
class ServicioDisponibleSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServicioDisponible
        fields = '__all__'

class TicketAsignarAgenteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ['id', 'id_agente']
    
    def update(self, instance, validated_data):
        instance.id_agente = validated_data.get('id_agente', instance.id_agente)
        instance.save()
        return instance
    

# serializers para servicios del usuario o contratos
class ServicioClienteSerializer(serializers.ModelSerializer):
    numero_de_cuenta = serializers.CharField(write_only=True) 

    print(f"Hola: {numero_de_cuenta}") 
    class Meta:
        model = ServicioCliente
        exclude = ('fecha_fin', 'id_cliente')
    
    def create(self, validated_data):
        fecha_inicio = timezone.now()
        fecha_fin = fecha_inicio + timedelta(days=30)

        validated_data['fecha_fin'] = fecha_fin
        
        # Extrae el número de cuenta del validated_data
        numero_de_cuenta = validated_data.pop('numero_de_cuenta', None)
        print(f"H: {numero_de_cuenta}")

        if numero_de_cuenta is None:
            raise serializers.ValidationError("El campo 'numero_de_cuenta' es requerido.")

        # Encuentra el usuario por el número de cuenta
        try:
            usuario = Usuario.objects.get(numero_cuenta=numero_de_cuenta)
        except Usuario.DoesNotExist:
            raise serializers.ValidationError("Usuario con el número de cuenta proporcionado no encontrado.")

        # Asigna el usuario encontrado al campo id_cliente
        validated_data['id_cliente'] = usuario

        # Crea la instancia de ServicioCliente con los datos validados
        servicio_cliente = ServicioCliente.objects.create(**validated_data)
        return servicio_cliente


class UsuarioTicketSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ticket
        fields = ['id', 'nombre']  # Ajusta los campos según tus necesidades

class AgenteTicketSerializer(serializers.ModelSerializer):
    model = Agente
    fields = ['id', 'nombre']  # Ajusta los campos según tus necesidades

class AreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = Area
        fields = ['id', 'nombre']  # Ajusta los campos según tus necesidades

class ServicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Servicio
        fields = ['id', 'nombre']  # Ajusta los campos según tus necesidades

class SubservicioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subservicio
        fields = ['id', 'nombre']  # Ajusta los campos según tus necesidades