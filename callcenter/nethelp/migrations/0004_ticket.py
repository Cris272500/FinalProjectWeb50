# Generated by Django 5.0.6 on 2024-06-17 06:34

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nethelp', '0003_solicitante'),
    ]

    operations = [
        migrations.CreateModel(
            name='Ticket',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('asunto', models.CharField(max_length=100)),
                ('descripcion', models.TextField()),
                ('fecha_creacion', models.DateTimeField(auto_now_add=True)),
                ('fecha_actualizacion', models.DateField(auto_now=True)),
                ('fecha_vencimiento', models.DateTimeField()),
                ('estado', models.CharField(choices=[('Abierto', 'Abierto'), ('Cerrado', 'Cerrado'), ('Vencido', 'Vencido')], max_length=20)),
                ('prioridad', models.CharField(choices=[('Baja', 'Baja'), ('Media', 'Media'), ('Alta', 'Alta')], max_length=20)),
                ('sub_servicio', models.CharField(max_length=100)),
                ('id_agente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nethelp.agente')),
                ('id_cliente', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nethelp.usuario')),
                ('id_solicitante', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='nethelp.solicitante')),
            ],
        ),
    ]
