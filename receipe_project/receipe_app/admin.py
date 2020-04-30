from django.contrib import admin

# Register your models here.
from .models import Dish, Comment



admin.site.register(Dish)
admin.site.register(Comment)
