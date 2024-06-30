# Generated by Django 5.0.6 on 2024-06-30 17:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('nethelp', '0007_alter_agente_departamento'),
    ]

    operations = [
        migrations.CreateModel(
            name='Area',
            fields=[
                ('id', models.AutoField(primary_key=True, serialize=False)),
                ('nombre_area', models.CharField(max_length=40)),
            ],
        ),
        migrations.RenameModel(
            old_name='Servicio',
            new_name='ServicioCliente',
        ),
        migrations.RemoveField(
            model_name='ticket',
            name='id_solicitante',
        ),
        migrations.RemoveField(
            model_name='ticket',
            name='id_agente',
        ),
        migrations.RemoveField(
            model_name='ticket',
            name='id_cliente',
        ),
        migrations.DeleteModel(
            name='Solicitante',
        ),
        migrations.DeleteModel(
            name='Ticket',
        ),
    ]