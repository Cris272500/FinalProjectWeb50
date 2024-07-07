# FinalProjectWeb50
Proyecto final de web 50

## Introducción
NetHelp Connect es una API diseñada para facilitar las operaciones de atención al cliente a los desarrolladores. Inicialmente concebido como un sistema completo de atención al cliente, el proyecto se ha orientado hacia el suministro de una API que agiliza las funciones de atención al cliente para los equipos de desarrollo. 

Este cambio permite a los desarrolladores integrar sin problemas sólidas funciones de atención al cliente en sus propias aplicaciones. Este README.md cubre los detalles del proyecto, incluyendo su estructura, funcionalidad y complejidad.

## Distinciones
NetHelp Connect destaca por su amplio conjunto de funciones diseñadas específicamente para desarrolladores que desean integrar funciones de atención al cliente en sus aplicaciones. 

La API se ha diseñado pensando en la flexibilidad y la escalabilidad, lo que le permite adaptarse a una amplia gama de casos de uso, desde sencillos sistemas de emisión de tickets hasta complejos flujos de trabajo de atención al cliente.

## Complejidad
La complejidad de NetHelp Connect reside en su enfoque polifacético para gestionar diversos aspectos del servicio al cliente. Esto incluye:

* __Gestión de usuario__: Gestión de diferentes tipos de usuarios, como clientes (Usuario) y agentes (Agente), cada uno con su propio conjunto de permisos y funciones.
* __Gestión de tickets__: Gestión de servicios, subservicios y áreas, que son fundamentales para categorizar y resolver los problemas de los clientes.
* __Sistema de tickets__: Implementar un sistema de tickets robusto que incluya funcionalidades como la creación de tickets, asignación, actualizaciones de estado y gestión de prioridades.
* __Suscripción a servicios__: Permitir a los clientes suscribirse a diferentes servicios y gestionar sus suscripciones a lo largo del tiempo.

Esta complejidad se refleja en las sofisticadas relaciones entre modelos y en la lógica empresarial necesaria para gestionar diversas operaciones sin problemas.

## Estructura del proyecto
### models.py
#### Usuario
El modelo `Usuario` representa a un cliente e incluye campos como `nombre, nombre_usuario, numero_cuenta, telefono, direccion y moroso`. Extiende AbstractUser para aprovechar el sistema de autenticación de usuarios integrado en Django.

#### Agente
El modelo `Agente` representa a un agente de un centro de llamadas e incluye campos como `nombre, nombre de usuario, contraseña, departamento y estado`. También extiende AbstractUser e incluye campos adicionales para departamento y estado.

#### Area, Servicio, Subservicio
Estos modelos representan diferentes áreas, servicios y subservicios dentro del ecosistema de atención al cliente.Cada modelo incluye campos para capturar los detalles necesarios y establecer relaciones entre ellos.

#### Ticket
El modelo `Ticket` es el núcleo del sistema de tickets. Incluye campos como `asunto, descripcion, fecha_creacion, estado, prioridad y asignacion_actual`. También establece relaciones con `Usuario, Agente, Área, Servicio y Subservicio`.

#### ServicioDisponible
Este modelo representa los servicios disponibles para `suscripción, incluyendo campos para nombre_servicio, descripcion, y precio.`

#### ServicioCliente
El modelo `ServicioCliente` representa los servicios suscritos por los clientes. Incluye campos para `fecha_inicio, fecha_fin, y relaciones con Usuario y ServicioDisponible`.

___
## settings.py
1. __Aplicaciones instaladas__: Incluye las aplicaciones esenciales de `Django` y aplicaciones adicionales de terceros como `jazzmin` para mejorar la interfaz de administración, `corsheaders` para manejar Cross-Origin Resource Sharing (CORS), y `rest_framework` para construir APIs.


2. __Middleware__: Especifica el middleware utilizado por el proyecto, incluyendo el middleware de seguridad, sesión, autenticación y CORS.


3. __Configuración CORS__: Permite todos los orígenes para CORS. Esto puede restringirse a dominios específicos en un entorno de producción.

4. __Configuración de REST Framework y JWT__: Configura `Django REST Framework` con `JWT authentication`, incluyendo la duración del token y los ajustes de seguridad, ademas de incluir las configuraciones de `corsheaders` para manejar CORS.


5. _Modelo de usuario personalizado_: Utiliza un modelo de usuario personalizado `(Usuario)`definido en la aplicación nethelp.


___
## urls.py para NetHelp Connect API

1. __Ruta de Admin__: La primera ruta `('admin/')` dirige a la interfaz de administración de Django. Accede a ella navegando a `http://127.0.0.1:8000/admin/`.


2. __Ruta de la API__: La segunda ruta `('nethelp/')` incluye las configuraciones de URL de la aplicación nethelp. Esto significa que cualquier endpoint que comience con `http://127.0.0.1:8000/nethelp/` será manejado por los patrones de URL definidos en `nethelp/urls.py.`

> **Nota**: Para probar dichos endpoints se decidio utilizar la interfaz de **django rest framework** y servicios como **postman** que nos permite realizar peticiones de una manera simple para testear APIs de tipo REST propias o de terceros.

___
## admin.py
En el archivo `admin.py` de mi aplicación Django, he personalizado la configuración del panel de administración para varios modelos. Primero, importé los modelos `Agente, Usuario, Ticket, ServicioDisponible, ServicioCliente, Subservicio`, y Servicio desde el archivo models.py. Inicialmente, había registrado estos modelos directamente usando admin.site.register, pero luego comenté esta parte para usar clases personalizadas de administración.

Para el modelo `Agente`, creé la clase `AgenteAdmin` extendiendo `admin.ModelAdmin` y configuré el atributo `list_display` para mostrar las columnas `id, nombre, username, departamento, estado, y is_admin` en la vista de lista de agentes. De manera similar, para el modelo `Usuario`, creé la clase `UsuarioAdmin` y configuré `list_display` para mostrar `id, nombre, username, numero_cuenta, telefono, direccion, y moroso` en la vista de lista de usuarios.

Para el modelo `Ticket`, creé la clase `TicketAdmin` con `list_display` configurado para mostrar `id, get_agente_nombre, get_usuario_nombre, asunto, estado, fecha_creacion, fecha_actualizacion, y fecha_vencimiento`. También definí métodos personalizados `get_agente_nombre` y `get_usuario_nombre` para obtener el nombre del agente y del usuario asociado al `ticket`, respectivamente, y asigné descripciones más descriptivas a estas columnas.

En el caso del modelo `ServicioDisponible`, creé la clase `ServicioDisponibleAdmin` y configuré `list_display` para mostrar` id, nombre_servicio, descripcion, y precio`. Para el modelo `ServicioCliente`, creé `ServicioClienteAdmin` y configuré `list_display` para mostrar `id, get_cliente_nombre, get_servicio_nombre, fecha_inicio, fecha_fin, y vencido`, definiendo métodos personalizados `get_cliente_nombre` y `get_servicio_nombre` para obtener los nombres correspondientes y asignando descripciones más descriptivas a estas columnas.

Asimismo, para el modelo `Servicio`, creé `ServicioAdmin` y configuré `list_display` para mostrar `id, nombre_servicio, y area`. Para el modelo `Subservicio`, creé `SubservicioAdmin` y configuré `list_display` para mostrar `id, servicio, y nombre`.

Finalmente, registré los modelos `Agente, Usuario, Ticket, ServicioDisponible, ServicioCliente, Servicio, y Subservicio` en el sitio de administración de Django utilizando sus respectivas clases personalizadas. Esto mejora la usabilidad y claridad del panel de administración al mostrar campos específicos y más descriptivos para cada modelo.

___

## authentication.py
Este código define un backend de autenticación (`UsuarioAgenteBackend`) que puede manejar la autenticación tanto para usuarios estándar como para agentes personalizados en mi aplicación Django, mejorando así la flexibilidad y la capacidad de autenticación del sistema según los requisitos específicos del proyecto.

___

## managers.py
Estos managers personalizados (`UsuarioManager y AgenteManager`) facilitan la creación de usuarios estándar y superusuarios tanto para el modelo de usuario estándar como para el modelo personalizado Agente en mi aplicación Django. 

Estos managers aseguran que los usuarios creados cumplan con los requisitos específicos del proyecto y mejoran la eficiencia en la gestión de usuarios dentro del sistema de autenticación.

## serializer.py
En mi archivo `serializer.py`, he definido varios serializadores que se encargan de convertir los objetos de mis modelos Django en formatos `JSON` compatibles con `API REST`, y viceversa, cada uno verificado y autenticado con JWT. Aquí te explico para qué sirve cada uno:

1. **AgenteSerializer**: Serializa instancias del modelo Agente para convertirlas en `JSON` y viceversa. Incluye todos los campos del modelo Agente.

2. **UsuarioSerializer**: Serializa instancias del modelo Usuario para convertirlas en `JSON` y viceversa. Incluye todos los campos del modelo Usuario.

3. **MytokenObtainPairSerializer**: Extiende `TokenObtainPairSerializer` de `rest_framework_simplejwt` para personalizar los tokens `JWT` obtenidos al autenticar un usuario. Añade campos adicionales como` nombre, username, departamento, estado, y is_admin al token.`

4. **VerifyPasswordSerializer**: Utilizado para verificar la contraseña de un usuario mediante su nombre de usuario.

5. **RegisterUsuarioSerializer**: Permite registrar nuevos usuarios (`Usuario`) con validaciones de contraseña y confirmación de contraseña (`password` y `password2`). Crea un usuario Usuario utilizando los datos validados.

6. **RegisterSerializer**: Similar a `RegisterUsuarioSerializer`, pero para registrar agentes (`Agente`). Incluye validaciones de contraseña y crea un agente Agente utilizando los datos validados.

7. **AgenteLoginSerializer**: Serializa los datos necesarios para autenticar a un agente (`Agente`) mediante su nombre de usuario y contraseña. Genera tokens de acceso y actualización (`access_token` y `refresh_token`) para el agente autenticado.

8. **TicketSerializer**: Serializa instancias del modelo `Ticket`, asegurando que la fecha de vencimiento no esté en el pasado al validarla.

9. **TicketListSerializer**: Serializa instancias del modelo `Ticket` para listar tickets con información adicional como el nombre del agente y el nombre del cliente.

10. **TicketDetailSerializer**: Serializa detalles completos de un ticket, incluyendo el nombre del agente y el nombre del cliente.

11. **TicketDetailUpdateSerializer**: Serializa datos para actualizar un ticket, permitiendo modificar campos como `descripcion, estado, asignacion_actual, nombre_area, servicio, y sub_servicio.`

12. **TicketClienteSerializer**: Serializa datos relacionados con los tickets para clientes, incluyendo el nombre del agente y el nombre del cliente.

13. **ServicioDisponibleSerializer**: Serializa instancias del modelo `ServicioDisponible` para listar todos los servicios disponibles de la empresa.

14. **TicketAsignarAgenteSerializer**: Serializa datos para asignar un agente a un ticket específico mediante su `id_agente`.

15. **ServicioClienteSerializer**: Serializa datos para crear un servicio de cliente (`ServicioCliente`), asegurando que se asocie correctamente con el usuario (`Usuario`) mediante su número de cuenta.

16. **UsuarioTicketSerializer, AgenteTicketSerializer, AreaSerializer, ServicioSerializer, SubservicioSerializer**: Serializadores adicionales para listar y mostrar información específica relacionada con tickets, áreas, servicios y subservicios.

___
## urls.py

1. **TokenObtainPairView**: Genera tokens JWT para autenticación.
2. **RegisterView** y RegisterUsuarioView: Vistas para registrar agentes y usuarios respectivamente.
3. **AgenteLoginView**: Permite a los agentes iniciar sesión.
4. **TicketCreateView**: Crea un nuevo ticket.
5. **TicketListView**: Lista todos los tickets.
6. **TicketDetailView**: Detalle de un ticket específico.
7. **TicketDetailUpdateView**: Actualiza un ticket existente.
8. **TicketClienteView**: Lista todos los tickets de un cliente específico.
9. **TicketEstadoView** y TicketAgenteView: Listan tickets por estado y por agente respectivamente.
10. **TicketAsignarAgenteView**: Asigna un agente a un ticket existente.
11. **ServicioDisponibleView**: Lista todos los servicios disponibles.
12. **ServicioClienteView**: Crea contratos o planes de servicio.
13. **dashboard**: Vista de ejemplo que muestra un mensaje personalizado para el usuario autenticado.
14. **get_agentes**: Obtiene la lista de todos los agentes.
15. **verify_password**: Verifica la contraseña de un usuario.
16. **clientes_list**, agentes_list, areas_list, servicios_list, subservicios_list: Listan clientes, agentes, áreas, servicios y subservicios respectivamente.


___

## urls.py
### Autenticacion y registro
* `path("token/", views.MyTokenObtainPairView.as_view(), name="token_obtain_pair")`: Obtiene el token JWT para autenticación.

* `path("token/refresh/", TokenRefreshView.as_view(), name="token_refresh")`: Refresca el token JWT.

* `path("register/", views.RegisterView.as_view(), name="register")`: Registro de nuevos agentes.

* `path("register_client/", views.RegisterUsuarioView.as_view(), name="register_client")`: Registro de nuevos clientes (usuarios).

* `path("agente/login/", views.AgenteLoginView.as_view(), name="login")`: Login de agentes.


### Gestion de tickets

* `path("tickets/create/", views.TicketCreateView.as_view(), name="create_ticket")`: Crear un nuevo ticket.

* `path("tickets/", views.TicketListView.as_view(), name="list_ticket")`: Lista todos los tickets.

* `path("tickets/<int:pk>/", views.TicketDetailView.as_view(), name="ticket_detail")`: Detalle de un ticket específico.

* `path("tickets/<int:pk>/update/", views.TicketDetailUpdateView.as_view(), name="update_ticket")`: Actualizar un ticket existente.

* `path("tickets/cliente/<str:numero_cuenta>/", views.TicketClienteView.as_view(), name="list_ticket_cliente")`: Lista todos los tickets de un cliente específico.

* `path("tickets/estado/<str:estado>/", views.TicketEstadoView.as_view(), name="list_ticket_estado")`: Lista los tickets por estado.

* `path("tickets/agente/<int:id_agente>/", views.TicketAgenteView.as_view(), name="list_ticket_agente")`: Lista los tickets asignados a un agente específico.

* `path("tickets/<int:pk>/asignar-agente/", views.TicketAsignarAgenteView.as_view(), name="ticket_asignar_agente")`: Asigna un agente a un ticket existente


### Lista de entidades relacionadas
* `path("tickets/clientes/", views.clientes_list, name="list_clientes")`: Lista todos los clientes.
<br>

* `path("tickets/agentes/", views.agentes_list, name="list_agentes")`: Lista todos los agentes.
<br>

* `path("tickets/areas/", views.areas_list, name="list_areas"): Lista todas las áreas.
path("tickets/servicios/", views.servicios_list, name="list_servicios")`: Lista todos los servicios.
<br>

* `path("tickets/subservicios/", views.subservicios_list, name="list_subservicios")`: Lista todos los subservicios.


### Gestion de servicios y contratos
* `path("servicios/", views.ServicioDisponibleView.as_view(), name="list_servicios")`: Lista todos los servicios disponibles.
<br>

* `path("contrato/", views.ServicioClienteView.as_view(), name="create_contrato")`: Crear contratos o planes de servicio.

### Documentacion y esquema de API
* `path('api/schema/', schema_view)`: Vista para el esquema de la API.
<br>

* `path('docs/', include_docs_urls(title="Nethelp docs"))`: Documentación de la API utilizando include_docs_urls.

___
## frontend


En el frontend de nuestro proyecto NetHelp Connect, optamos por usar React debido a la facilidad que ofrece para la creación y gestión de componentes. 

React nos permite construir interfaces de usuario de manera modular y reutilizable, lo cual es esencial para un proyecto de la magnitud de un centro de llamadas. Gracias a su arquitectura basada en componentes, podemos desarrollar cada parte de la interfaz de usuario de forma aislada y luego integrarlas, lo que mejora la mantenibilidad y escalabilidad del código.

Para manejar las llamadas a las URLs del backend desarrollado con Django, creamos un archivo denominado `api.js`. Este archivo centraliza todas las funciones necesarias para interactuar con las diferentes endpoints de nuestra API, facilitando así la gestión de las operaciones `CRUD` (Crear, Leer, Actualizar, Eliminar). 

La centralización de estas funciones en un solo archivo no solo organiza mejor nuestro código, sino que también permite reutilizar estas funciones en diferentes partes de la aplicación, garantizando coherencia y reduciendo la duplicación de código.

___

## Instalacion y configuracion de NetHelp Connect

### Pre-requisitos
* Python 3.8 o superior
* Node.js 14x o superior
* npm 7.0 o superior
* Entorno virtual de Python 3.8 o superior

### Configuracion del backend
Una vez clonado el repositorio y activado el entorno virtual, ejecutamos los siguientes comandos:
`pip install -r requirements.txt`

Luego nos dirigimos a la siguiente carpeta:
`cd callcenter\`

Y ejecutamos
`python manage.py makemigrations`

Y luego
`python manage.py migrate`

Una vez hecho estos pasos ejecutamos el servidor
`python manage.py runserver`

Para acceder al panel de administración de Django ejecutamos
`python manage.py createsuperuser`

Una vez creado el usuario, accedemos a 
`http://127.0.0.1:8000/admin/`

Si nosotros deseamos probar los diferentes endpoints de la API hacemos uso de django-rest-framework, y para ello nos dirigimos a la siguiente url
`http://127.0.0.1:8000/end_point_example/` dependiendo de cada endpoint, cada uno de estos tiene metodo `GET`, `POST`, `PUT` y `DELETE` de la misma manera los invitamos a probarlas con servicios como postman.

Si deseamos acceder a la documentacion o que tipo de peticion existe, podemos acceder con
`http://127.0.0.1:8000/nethelp/docs/`

Si deseamos visualizar algunos de estos endpoints visualmente con react, nos dirigimos a la carpeta frontend y ejecutamos
`npm install` y por ultimo `npm run dev` de ahi para ver los endpoints creados tenemos las siguientes urls

* `http://localhost:5173/register`: para crear un usuario
* `http://localhost:5173/login`: para iniciar sesion con un agente
* `http://localhost:5173/tickets`: para gestionar tickets, dentro de ella hay diferentes tipos de filtros, que cada uno de ellos es un endpoint de la API.
* `http://localhost:5173/create-ticket`: para crear un ticket

___

## Cierre/conclusion
El proyecto NetHelp Connect ha sido diseñado y desarrollado con una arquitectura modular y escalable, utilizando Django para el backend y React para el frontend. 

Esta combinación de tecnologías nos permite construir una solución robusta y flexible que se adapta a las necesidades de un centro de llamadas moderno.

### Proyecto a largo plazo
NetHelp Connect no es solo una solución a corto plazo, sino un proyecto pensado para el largo plazo. 

Nuestro objetivo es seguir expandiendo y mejorando la plataforma mediante la adición de nuevas funcionalidades y endpoints en el backend, así como mejoras y características adicionales en el frontend. Esto incluye, pero no se limita a:

* **Nuevos Endpoints**: Creación de más endpoints para soportar funcionalidades avanzadas de gestión de tickets, agentes y clientes.
<br>

* **Funcionalidades Adicionales**: Incorporación de características avanzadas como análisis de datos, reportes detallados, y automatización de procesos.
<br>

* **Mejoras en la Interfaz de Usuario**: Continuar mejorando la interfaz de usuario para hacerla más intuitiva y fácil de usar, incluyendo la implementación de nuevas herramientas y componentes React.
<br>

* **Integración con Otros Sistemas**: Ampliar la capacidad del sistema para integrarse con otros servicios y plataformas, mejorando la interoperabilidad y la eficiencia operativa.


### Ayuda a desarrolladores y Sistema de Call Center completo 

El propósito de NetHelp Connect es doble. Por un lado, sirve como una herramienta útil para desarrolladores que deseen implementar una solución de centro de llamadas en sus propios proyectos, proporcionándoles una base sólida y bien documentada. 

Por otro lado, está diseñado para funcionar como un sistema completo de call center, capaz de manejar todas las necesidades diarias de un equipo de soporte.

### Agradecimientos

Quiero expresar mi más profundo agradecimiento a **Ernesto Vargas (xsarcov)** por su invaluable ayuda y orientación en este proyecto. Su apoyo ha sido fundamental para llevar NetHelp Connect a buen puerto.

También quiero agradecer al staff, a mis amigos y a mi familia por su constante apoyo y aliento durante todo el desarrollo del proyecto. Su paciencia y confianza me han motivado a seguir adelante y superar los desafíos que se presentaron en el camino.

Siguiendo esta visión, NetHelp Connect se establece como una solución integral y extensible para la gestión de centros de llamadas, preparada para crecer y adaptarse a las necesidades cambiantes del mercado y de los usuarios. 

Con su diseño modular y su arquitectura escalable, estamos seguros de que será una herramienta valiosa tanto para desarrolladores como para empresas de soporte técnico.

<div style="
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vpx;
    background-color: #f0f8ff;
    color: #1e90ff;
    font-size: 2em;
    font-family: Arial, sans-serif;
    border: 2px solid #1e90ff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 255, 0.2);
    padding: 20px;
    text-align: center;
">
    Esto fue Web50
</div>