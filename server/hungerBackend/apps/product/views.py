from django.shortcuts import render
from . models import Product
from django.http import JsonResponse
import json

# Create your views here.

def list_products(request):

    if request.method == 'GET':
        products = Product.objects.all()
        print(products)
        products_list = list(products.values('product_name', 'product_price', 'product_pic', 'product_likes'))
        return JsonResponse({'products': products_list}, status = 200)
    
    else:
        return JsonResponse({'error': 'Invalid request method'}, status = 405)