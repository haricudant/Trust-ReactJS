from django.contrib import admin
from django.urls import path
from receipe_app.views import index, home, list, details,register, user_login
from django.contrib.auth import views as auth_views


app_name = 'receipe_app'

urlpatterns = [
    path('index', index, name="index"),
    path('',home, name='home'),
    path('list',list, name = 'list'),
    path('details/<str:id>', details, name = 'details'),



]