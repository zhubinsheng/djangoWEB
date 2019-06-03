from django.urls import path
from . import views

urlpatterns = [
    path('', views.getlogin, name='userlogin'),
    path('register', views.getregister, name='userregister'),
    path('forget', views.getforget, name='userforget')
]
