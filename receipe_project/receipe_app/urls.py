from django.contrib import admin
from django.urls import path
from receipe_app.views import index, home, list, details
from . import views as user_view
from django.contrib.auth import views as auth


app_name = 'receipe_app'

urlpatterns = [
    path('index', index, name="index"),
    path('',home, name='home'),
    path('list',list, name = 'list'),
    path('details/<str:id>', details, name = 'details'),
    path('login/', user_view.Login, name='login'),
    path('logout/', auth.LogoutView.as_view(template_name='home.html'), name='logout'),
    path('register/', user_view.register, name='register'),
]