from django.db import models

# Create your models here.


class Todo(models.Model):
    title = models.CharField(max_length=110, unique=True)
    content = models.TextField(max_length=800, null=True, blank=True)
    date = models.DateField(auto_now_add=True)
