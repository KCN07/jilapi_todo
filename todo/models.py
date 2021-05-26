from django.db import models
from django.contrib.auth.models import User
from django.utils.translation import gettext_lazy as _

# Create your models here.

class Todo(models.Model):

    class State_Choices(models.TextChoices):
        TODO = 'TD', _('Todo')
        IN_PROGRESS = 'IP', _('In Progress')
        DONE = 'DN', _('Done')

    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField(blank=True, max_length=300)
    deadline = models.DateTimeField(auto_now=False)
    todo_state = models.CharField(
        max_length=50,
        choices=State_Choices.choices,
        default=State_Choices.TODO,
        )
    important = models.BooleanField(default=False)
    
    
def __str__(self):
    return self.title
