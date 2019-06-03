from django.urls import path
from . import views

urlpatterns = [
    path('', views.getBackstage, name="userAccoundAll"),
    path('logout/', views.userLoginOut, name="userLoginOut"),
    path('getUser/<str:name>/', views.getUserInformation, name="getUserInfo"),
    path('getUserInfo/', views.getUserInfo, name="userInfo"),
    path('addmoney/', views.addmoney, name="addmoney"),
    path('paymoney/', views.paymoney, name="paymoney"),
    path('borrowmoney/', views.borrowmoney, name="borrowmoney"),
    path('lendmoney/', views.lendmoney, name="lendmoney"),
    path('getMessage/', views.getMessage, name="getMessage"),
    path('delUser/<str:name>/', views.delUser, name="delUser"),
]
