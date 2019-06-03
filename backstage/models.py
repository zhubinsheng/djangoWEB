from django.db import models
from django.contrib.auth.models import AbstractUser
import datetime


class UserInfo(AbstractUser):
    sexs = (
        ('male', u'男'),
        ('female', u'女')
    )
    introduction = models.TextField(max_length=200, null=True, blank=False, verbose_name=u'个人简介')
    qq = models.CharField(max_length=16, null=True, blank=False, verbose_name=u'QQ')
    phone = models.CharField(max_length=11, null=True, blank=False, verbose_name=u'手机号')
    sex = models.CharField(max_length=6, null=False, blank=False, verbose_name=u'性别', default='male', choices=sexs)
    birth = models.DateField(null=True, blank=True, verbose_name=u'出生日期',
                             default=datetime.datetime.now().strftime('%Y-%m-%d'))

    def __str__(self):
        return self.first_name


class moneyin(models.Model):
    amount = models.CharField(max_length=100, verbose_name=u'金额')
    article = models.CharField(max_length=111, verbose_name=u'项目', null=True)
    datetime = models.DateField(verbose_name=u'日期', default=datetime.datetime.now().strftime('%Y-%m-%d'))
    creatUser = models.CharField(max_length=100, verbose_name=u'创建人', null=True)

    def __str__(self):
        return self.creatUser


class paymoneyin(models.Model):
    amount = models.CharField(max_length=100, verbose_name=u'金额')
    article = models.CharField(max_length=111, verbose_name=u'项目', null=True)
    datetime = models.DateField(verbose_name=u'日期', default=datetime.datetime.now().strftime('%Y-%m-%d'))
    creatUser = models.CharField(max_length=100, verbose_name=u'创建人', null=True)

    def __str__(self):
        return self.creatUser

class borrowmoneyin(models.Model):
    amount = models.CharField(max_length=100, verbose_name=u'金额')
    article = models.CharField(max_length=111, verbose_name=u'项目', null=True)
    datetime = models.DateField(verbose_name=u'日期', default=datetime.datetime.now().strftime('%Y-%m-%d'))
    creatUser = models.CharField(max_length=100, verbose_name=u'创建人', null=True)

    def __str__(self):
        return self.creatUser

class lendmoneyin(models.Model):
    amount = models.CharField(max_length=100, verbose_name=u'金额')
    article = models.CharField(max_length=111, verbose_name=u'项目', null=True)
    datetime = models.DateField(verbose_name=u'日期', default=datetime.datetime.now().strftime('%Y-%m-%d'))
    creatUser = models.CharField(max_length=100, verbose_name=u'创建人', null=True)

    def __str__(self):
        return self.creatUser