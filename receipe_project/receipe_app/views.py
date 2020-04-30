from django.shortcuts import render, HttpResponse, redirect, HttpResponseRedirect, reverse, get_object_or_404
from django.contrib.auth import login,logout,authenticate
from django.contrib.auth.decorators import login_required
from django.contrib.sites.shortcuts import get_current_site
from django.utils.http import urlsafe_base64_decode, urlsafe_base64_encode
from django.template.loader import render_to_string
from .tokens import account_activation_token
from django.contrib.auth.models import User
from django.core.mail import send_mail,EmailMultiAlternatives,get_connection
from django.contrib.auth.forms import AuthenticationForm
from django.contrib import messages
from .models import Dish, Comment
from .forms import DishForm, UserRegisterForm, CommentForm
from django.template.loader import get_template




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




# def register(request):
#     if request.method == 'POST':
#         form = UserRegisterForm(request.POST)
#         if form.is_valid():
#             form.save()
#             username = form.cleaned_data.get('username')
#             email = form.cleaned_data.get('email')
#             ######################### mail system ####################################
#             htmly = get_template('Email.html')
#             d = {'username': username}
#             subject, from_email, to = 'welcome', 'hnarayanan5@gmail.com', email
#             html_content = htmly.render(d)
#             msg = EmailMultiAlternatives(subject, html_content, from_email, [to])
#             msg.attach_alternative(html_content, "text / html")
#             msg.send()
#             ##################################################################
#             messages.success(request, f'Your account has been created ! You are now able to log in')
#             return redirect('receipe_app:home')
#     else:
#         form = UserRegisterForm()
#     return render(request, 'register.html', {'form': form, 'title': 'reqister here'})

def register(request):
    if request.method == 'POST':
        form = UserRegisterForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            email = form.cleaned_data.get('email')
            ######################### mail system ####################################
            htmly = get_template('user / Email.html')
            d = { 'username': username }
            subject, from_email, to = 'welcome', 'your_email@gmail.com', email
            html_content = htmly.render(d)
            msg = EmailMultiAlternatives(subject, html_content, from_email, [to])
            msg.attach_alternative(html_content, "text / html")
            msg.send()
            ##################################################################
            messages.success(request, f'Your account has been created ! You are now able to log in')
            return redirect('login')
    else:
        form = UserRegisterForm()
    return render(request, 'register.html', {'form': form, 'title':'reqister here'})
################ login forms###################################################

# def Login(request):
#     if request.method == 'POST':
#
#         # AuthenticationForm_can_also_be_used__
#
#         username = request.POST['username']
#         password = request.POST['password']
#         user = authenticate(request, username=username, password=password)
#         if user is not None:
#             form = login(request, user)
#             messages.success(request, f' wecome {username} !!')
#             return redirect('receipe_app: ')
#         else:
#             messages.info(request, f'account done not exit plz sign in')
#     form = AuthenticationForm()
#     return render(request, 'login.html', {'form': form, 'title': 'log in'})


def Login(request):
    if request.method == 'POST':

        # AuthenticationForm_can_also_be_used__

        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            form = login(request, user)
            messages.success(request, f' welcome {username} !!')
            return redirect('home')
            print(username)
        else:
            messages.info(request, f'account done not exit plz sign in')
    form = AuthenticationForm()
    return render(request, 'login.html', {'form': form, 'title': 'log in'})
