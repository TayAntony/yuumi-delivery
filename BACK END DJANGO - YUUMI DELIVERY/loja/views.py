from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.generics import ListCreateAPIView, RetrieveDestroyAPIView
from rest_framework import viewsets
from rest_framework.permissions import IsAuthenticated
from .serializer import *

class ProdutosViewSet(viewsets.ModelViewSet):
    queryset = Produtos.objects.all()
    serializer_class = ProdutosSerializer


class ClientesViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )
    queryset = Clientes.objects.all()
    serializer_class = ClientesSerializer

class PedidosViewSet(viewsets.ModelViewSet):
    permission_classes = (IsAuthenticated, )
    queryset = Pedidos.objects.all()
    serializer_class = PedidosSerializer
    