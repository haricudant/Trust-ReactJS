import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE','receipe_project.settings')


import django
django.setup()

import random


from receipe_app.models import Dish
from faker import Faker

fakegen = Faker()
topics = ['Search', 'Social', 'Marketplace', 'News', 'Games']

def add_topic():
    t = Dish.objects.get_or_create(name = random.choice(topics))
    t.save()
    return t