# Generated by Django 4.1.7 on 2023-08-25 17:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loja', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='clientes',
            name='informacoes_usuario',
        ),
        migrations.AddField(
            model_name='clientes',
            name='transportador',
            field=models.BooleanField(default=False),
        ),
    ]
