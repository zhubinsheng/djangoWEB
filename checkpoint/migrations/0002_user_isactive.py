# Generated by Django 2.1.4 on 2018-12-24 18:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('checkpoint', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='isActive',
            field=models.BooleanField(default=False, verbose_name='是否是活跃用户'),
        ),
    ]
