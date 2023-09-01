from django.urls import path, include
from django.conf.urls.static import static
from rest_framework import routers
from django.conf import settings
from . import views

router = routers.SimpleRouter()

router.register('clientes', views.ClientesViewSet)
router.register('produtos', views.ProdutosViewSet)
router.register('pedidos', views.PedidosViewSet)

urlpatterns = [] + router.urls
