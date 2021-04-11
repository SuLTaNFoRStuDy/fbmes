from django.db import models
from django.utils import timezone

# Create your models here.
class Messages(models.Model):

    userName =models.CharField(max_length=200, default="User",null=False)
    message=models.TextField(null= False)
    timeStamps=models.TimeField(null=False,auto_now=True)

    def __str__(self):
        return self.userName



