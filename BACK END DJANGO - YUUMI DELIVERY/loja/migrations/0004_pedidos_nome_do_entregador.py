# Generated by Django 4.1.7 on 2023-09-22 18:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('loja', '0003_pedidos_codigo_rastreio_alter_pedidos_status_pedido'),
    ]

    operations = [
        migrations.AddField(
            model_name='pedidos',
            name='nome_do_entregador',
            field=models.CharField(default=False, max_length=100),
        ),
    ]