# Generated by Django 5.0.6 on 2024-06-17 06:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nethelp', '0005_servicio'),
    ]

    operations = [
        migrations.AlterField(
            model_name='agente',
            name='estado',
            field=models.CharField(choices=[('Disponible', 'Disponible'), ('En llamada', 'En llamada'), ('Pausado', 'Pausado')], max_length=140),
        ),
    ]