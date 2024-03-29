# Generated by Django 4.2.1 on 2023-06-12 08:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('lead', '0009_lead_brand_name_lead_product_design_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='lead',
            name='contact_person',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='lead',
            name='email',
            field=models.EmailField(blank=True, max_length=254),
        ),
        migrations.AlterField(
            model_name='lead',
            name='phone',
            field=models.CharField(blank=True, max_length=255),
        ),
        migrations.AlterField(
            model_name='lead',
            name='website',
            field=models.CharField(blank=True, max_length=255),
        ),
    ]
