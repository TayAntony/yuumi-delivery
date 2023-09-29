from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils.translation import gettext_lazy as _

from .manager import CustomUserManager

class CustomUser(AbstractUser):
    username = None
    email = models.EmailField(_("email address"), unique=True)

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    objects = CustomUserManager()

    def __str__(self):
        return self.email

class Produtos(models.Model):
    nome = models.CharField(max_length=100)
    descricao = models.TextField()
    preco = models.DecimalField(max_digits=6, decimal_places=2)
    foto = models.ImageField(upload_to="produtos")
    descricao = models.CharField(max_length=200)

class Clientes(models.Model):
    nome = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    senha = models.CharField(max_length=100)    
    cpf = models.CharField(max_length=14)
    transportador = models.BooleanField(default=False)

class Pedidos(models.Model):
    STATUS_PEDIDO_TRANSPORTE = 'A'
    STATUS_PEDIDO_ENTREGUE = 'T'

    LISTA_STATUS_PEDIDO = [
        (STATUS_PEDIDO_ENTREGUE, 'Entregue'),
        (STATUS_PEDIDO_TRANSPORTE, 'Transporte'),
    ]
    
    nome_do_entregador = models.CharField(max_length=100, default=False)
    cliente = models.CharField(max_length=100)
    codigo_rastreio = models.CharField(max_length=10, default=0)
    endereco = models.CharField(max_length=100)
    data_pedido = models.DateField(auto_now=True)
    itens_pedido = models.CharField(max_length=100)
    preco_total = models.DecimalField(max_digits=10, decimal_places=2)
    status_pedido = models.CharField(max_length=1, choices=LISTA_STATUS_PEDIDO, default=STATUS_PEDIDO_TRANSPORTE)
