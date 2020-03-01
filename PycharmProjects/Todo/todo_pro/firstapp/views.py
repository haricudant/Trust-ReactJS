from django.shortcuts import render, redirect
from django.http import HttpResponseRedirect, HttpResponse

from .models import Task
from .forms import Taskform
def index(request):

    tasks = Task.objects.all()
    form = Taskform()
    
    
    if request.method =='POST':
        form = Taskform(request.POST)
        if form.is_valid():
            form.save()
        return redirect('/')


    context = {'tasks': tasks,'form':form}
    return render(request,'index.html',context)

# Create your views here.

def update(request, pk):
    update_task = Task.objects.get(id = pk)
    form = Taskform(instance = update_task)


    if request.method == 'POST':
        form = Taskform(request.POST, instance = update_task)
        if form.is_valid():
            form.save()
            return redirect('/')

    context = {'form': form}

    return render(request,'update.html', context)



def delete(request, pk):
    delete = Task.objects.get(id = pk)


    if request.method == 'POST':
        delete = delete.delete()
        return redirect('/')
    context = {'delete' :delete}
    return render(request, 'delete.html', context)
