from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Schedule(models.Model):

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, max_length=100)
    start_time = models.DateTimeField(auto_now_add=False)
    duration = models.DurationField()
    is_done = models.BooleanField(default=False)
    important = models.BooleanField(default=False)
    reminder_before = models.DurationField()

def __str__(self):
        return self.title   
    
    

