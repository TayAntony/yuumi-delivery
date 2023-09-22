from rest_framework import serializers
from .models import *

class ProdutosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Produtos
        fields = ['id', 'nome', 'preco', 'descricao', 'foto']

class ClientesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Clientes
        fields = ['id', 'nome', 'email', 'senha', 'cpf', 'transportador']


class PedidosSerializer(serializers.ModelSerializer):
    class Meta:
        model = Pedidos
        fields = ['id', 'nome_do_entregador', 'cliente', 'codigo_rastreio', 'endereco', 'data_pedido', 'itens_pedido', 'preco_total', 'metodo', 'status_pagamento', 'status_pedido']
