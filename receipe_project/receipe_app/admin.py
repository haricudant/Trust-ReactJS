from django.contrib import admin

# Register your models here.
from .models import Dish, Comment, UserProfileInfo



admin.site.register(Dish)
admin.site.register(Comment)
admin.site.register(UserProfileInfo)