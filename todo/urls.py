from django.urls import path
from . import views

urlpatterns = [
    path('todos/create', views.TodoListCreate.as_view()),
    path('todos/gettodo/<int:pk>', views.Gettodo.as_view()),
    path('todos/Update/<int:pk>', views.TodoUpdate.as_view()),
    path('todos/destroy/<int:pk>', views.TodoDestroy.as_view()),

]