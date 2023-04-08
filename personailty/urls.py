from django.urls import path, include
from .views import *

urlpatterns = [
    path('', personality.as_view() , name='personality')
]