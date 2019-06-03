from django.contrib import admin
from . import models


admin.site.register(models.UserInfo)
admin.site.register(models.moneyin)
admin.site.register(models.paymoneyin)
admin.site.register(models.borrowmoneyin)
admin.site.register(models.lendmoneyin)
