# Generated by Django 4.0.3 on 2022-04-20 17:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0003_alter_user_otp'),
    ]

    operations = [
        migrations.AlterField(
            model_name='user',
            name='otp',
            field=models.CharField(default=114548, max_length=20, null=True),
        ),
    ]
