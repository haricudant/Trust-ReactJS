from django.shortcuts import render, HttpResponse, redirect, HttpResponseRedirect, reverse, get_object_or_404

from .models import Dish, Comment
from .forms import DishForm, CommentForm, CreateUserForm
from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponseRedirect, HttpResponse
from django.urls import reverse
from django.contrib import  messages
from django.contrib.auth.forms import  UserCreationForm




def home(request):
       return render(request, 'home.html')



def index(request):
    form = DishForm()
    if request.method == 'POST':
        form = DishForm(request.POST)
        if form.is_valid():
            form.save()
            return HttpResponseRedirect('list')
    context = {'form':form}
    return render(request,"index.html", context)




def list(request):
    search_term = ''
    dish = Dish.objects.all()
    if 'search' in request.GET:
        search_term = request.GET['search']
        dish = Dish.objects.filter(name__icontains = search_term)
    context = {'dish':dish,'search_term':search_term}
    return render(request, 'list_dish.html', context)



def details(request, id):
    dish = get_object_or_404(Dish, id =id)
    comment = Comment.objects.filter(dish = dish).order_by('-id')
    # comm = Comment.objects.get(id =  dish.pk)
    commentform = CommentForm()
    if request.method == 'POST':
        commentform = CommentForm(request.POST)
        if commentform.is_valid():
            new_comment = commentform.save(commit=False)
            new_comment.dish = dish
            new_comment.save()

    context = {'dish':dish, 'commentform':commentform, 'comment':comment}
    return render(request,'details.html',context)



def register(request):
    form = CreateUserForm()
    if request.method =='POST':
        form = CreateUserForm(request.POST)
        if form.is_valid():
            form.save()
            user= form.cleaned_data.get('username')
            messages.success(request, 'Account was created for ' + user)
            return redirect('login')
    context = {'form': form}
    return render(request, 'register.html',context)




def user_login(request):


    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username = username, password = password)

        if user is not None:
            login(request, user)
            return redirect( "/")
        else:
            messages.info(request, 'Username OR password is incorrect')
            return render (request,'login.html')
    context = {}
    return render(request, 'login.html', {})



def logoutUser(request):
    logout(request)
    return redirect('login')