from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Product
from .serializer import ProductSerializer

from .products import products

# Create your views here.

@api_view(['GET'])
def getRoute(request):
    routes = [
        'api/products/',
        'api/products/create/',

        'api/products/upload/',
        'api/products/<id>/reviews/',

        'api/products/top/',
        'api/products/<id>/',

        'api/products/delete/<id>',
        'api/products/<update>/<id>',

    ]
    return Response(routes)


@api_view(['GET'])
def getProducts(request):
    products = Product.objects.all()
    
    serializer = ProductSerializer(products, many=True)
  
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
    product = Product.objects.get(_id=pk)
    serializer = ProductSerializer(product, many=False) 
    W  = '\033[0m'  # white (normal)
    R  = '\033[31m' # red
    G  = '\033[32m' # green
    O  = '\033[33m' # orange
    B  = '\033[34m' # blue
    P  = '\033[35m' # purple

    print(G)
    print(f'8888888888888888 {serializer.data} 8888888888888888888')
    print(W)
    return Response(serializer.data)
