# Generated by Django 5.1.3 on 2024-11-12 12:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_product_image'),
    ]

    operations = [
        migrations.RenameField(
            model_name='product',
            old_name='discreption',
            new_name='description',
        ),
    ]