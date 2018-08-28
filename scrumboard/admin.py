from django.contrib import admin
from .models import List,Card
# Register your models here.

# for the ui
admin.site.register(List)
admin.site.register(Card)