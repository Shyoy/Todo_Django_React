# Generated by Django 4.1.3 on 2022-11-21 11:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='todo',
            name='content',
            field=models.TextField(blank=True, max_length=800, null=True),
        ),
    ]