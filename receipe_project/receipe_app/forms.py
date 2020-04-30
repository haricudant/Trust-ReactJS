from . models import Dish, Comment
from django import forms
from django.core import validators
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User



class DishForm(forms.ModelForm):
    class Meta:
        model = Dish
        fields = ['name', 'ingredient', 'procedure']


class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['body']



class UserRegisterForm(UserCreationForm):
    email = forms.EmailField()
    phone_no = forms.CharField(max_length = 20)
    first_name = forms.CharField(max_length = 20)
    last_name = forms.CharField(max_length = 20)

    class Meta:
        model = User
        fields = ['username', 'email', 'phone_no', 'password1', 'password2']


