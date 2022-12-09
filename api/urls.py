
from django.urls import path
from . import views

urlpatterns = [

    path('todos/', views.getData),
    path('add/', views.addItem),

]
