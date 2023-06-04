from django.contrib.auth.models import User
from django.db import models


class Lead(models.Model):
    NEW = 'new'
    # CONTACTED ='contacted'
    INPROGRESS = 'inprogress'
    INCOMPLETE = 'incomplete'
    COMPLETED = 'completed'

    CHOICES_STATUS = (
        (NEW, 'New'),
        (INPROGRESS, 'In progress'),
        (INCOMPLETE, 'Incomplete'),
        (COMPLETED, 'Completed')
    )

    LOW = 'low'
    MEDIUM = 'medium'
    HIGH = 'high'

    CHOICES_PRIORITY = (
        (LOW, 'Low'),
        (MEDIUM, 'Medium'),
        (HIGH, 'High')
    )

    DEFAULT_TEXT = 'default_text'

    CHOICES_LESSON = (
        (DEFAULT_TEXT, 'first')
    )


    lesson = models.CharField(max_length=255, default=DEFAULT_TEXT)
    contact_person = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=255)
    website = models.CharField(max_length=255)
    estimated_value = models.IntegerField(blank=True, null=True)
    status = models.CharField(max_length=255, choices=CHOICES_STATUS, default=NEW)
    priority = models.CharField(max_length=255, choices=CHOICES_PRIORITY, default=MEDIUM)
    created_by = models.ForeignKey(User, related_name='leads', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    modified_at = models.DateTimeField(auto_now=True)
# Create your models here.
