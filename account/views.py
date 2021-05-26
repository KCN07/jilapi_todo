from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics, permissions
from .serializers import  LoginSerializer
from django.contrib.auth import login 
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view, renderer_classes
from rest_framework.renderers import JSONRenderer, TemplateHTMLRenderer
from rest_framework.parsers import JSONParser
from django.db import IntegrityError
from rest_framework.response import Response
from .serializers import UserSerializer
# Create your views here.


# class CreateUserView(generics.CreateAPIView):
#     permission_classes = [
#         permissions.AllowAny
#     ]
#     serializer_class = UserSerializer


# @renderer_classes(( JSONRenderer))

class LoginApi(generics.GenericAPIView):
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = LoginSerializer
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data["user"]
        login(request, user)
        token, created = Token.objects.get_or_create(user=user)
        return Response({"token": token.key, "username": user.username}, status=200)


@api_view(('POST',))
# @renderer_classes(( JSONRenderer))
@csrf_exempt
def signup(request):
    print(request)
    if request.method == 'POST':
        try:
            data = JSONParser().parse(request)
            user = User.objects.create_user(
                username=data['username'],
                first_name=data['first_name'],
                password=data['password'])
            user.save()
            token = Token.objects.create(user=user)
            return Response({'token':str(token), "username": user.username}, status=201)
        except IntegrityError:
            return Response({'error':'That username has already been taken. Please choose a new username'}, status=400)

