# Generated by Django 5.0.6 on 2024-07-05 06:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nethelp', '0021_alter_ticket_fecha_actualizacion'),
    ]

    operations = [
        migrations.AlterField(
            model_name='agente',
            name='departamento',
            field=models.CharField(choices=[('Atencion al cliente', 'Atencion al cliente'), ('Soporte Tecnico', 'Soporte Tecnico'), ('Ventas', 'Ventas'), ('Soporte en campo', 'Soporte en campo'), ('Administracion de redes', 'Administracion de redes')], max_length=140),
        ),
    ]
