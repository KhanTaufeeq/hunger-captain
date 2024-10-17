from django.db import models

# Create your models here.

class Product(models.Model):

    product_name = models.CharField('Name', blank = False, null=False, max_length = 50)

    product_price = models.DecimalField("Price", max_digits=5, decimal_places=2, blank = False, null = False) 

    product_likes = models.PositiveIntegerField('Likes', default = 0, blank = False, null = False) 

    product_pic = models.ImageField('Image', blank=True, null = True) 

    def __str__(self):
        return self.product_name