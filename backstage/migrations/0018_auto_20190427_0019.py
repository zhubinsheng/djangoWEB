# Generated by Django 2.1.8 on 2019-04-27 00:19

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backstage', '0017_auto_20190101_1459'),
    ]

    operations = [
        migrations.AlterField(
            model_name='userinfo',
            name='birth',
            field=models.DateField(blank=True, default='2019-04-27', null=True, verbose_name='出生日期'),
        ),
    ]
