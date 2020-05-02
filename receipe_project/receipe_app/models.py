from django.db import models
from django.contrib.auth.models import  User



class UserProfileInfo(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    profile_pic = models.ImageField(upload_to = 'profile_pics',blank=True)

    def __str__(self):
        return self.user.username

class Dish(models.Model):
    name = models.CharField(max_length=200)
    ingredient = models.CharField(max_length=2000)
    procedure = models.TextField(max_length=20000)
    created_at = models.DateTimeField(auto_now_add= True)
    image = models.ImageField(default=False)

    class Meta:
        verbose_name = "Dish"
        verbose_name_plural = "Dishes"

        def __str__(self):
            return self.name

# Create your models here.
class Comment(models.Model):
    dish = models.ForeignKey(Dish, on_delete=models.CASCADE, related_name='comments')
    body = models.TextField()
    created_on = models.DateTimeField(auto_now_add=True)
    active = models.BooleanField(default=False)


    class Meta:
        ordering = ['created_on']

    def __str__(self):
        return 'Commnent {} on  {}'.format(self.body, self.user.username )



