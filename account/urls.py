from django.urls import path, include
from . import views

# for djoser: https://djoser.readthedocs.io/en/latest/authentication_backends.html

urlpatterns = [
    path('login/', views.LoginApi.as_view()),
    path('signup/', views.signup),
    # path('register', views.CreateUserView.as_views
    path('auth/', include('djoser.urls')),
    path('auth/', include('djoser.urls.authtoken')),
]
