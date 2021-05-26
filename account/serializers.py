from rest_framework import serializers
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
# from account.models import Account
from rest_framework import exceptions


# class UserSerializer(serializers.ModelSerializer):
#     class Meta:
#         model = User
#         fields = ('username', 'email' 'password')

# class RegisterSerializer(serializers.ModelSerializer):
#     user = UserSerializer(required=True)
#     class Meta:
#         model = Account
#         fields = [ 'name',  'user' ]
#     # def save(self):

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password', 'email', 'first_name', 'last_name']
        write_only_fields = ['password']
        read_only_fields = ['id']

    def create(self, validated_data):
        print(validated_data)
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email'],
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
        )
        user.set_password(validated_data['password'])
        user.save()

        return user

class LoginSerializer(serializers.Serializer):
    username = serializers.CharField()
    password = serializers.CharField()

    def validate(self, data):
        username = data.get("username", "")
        password = data.get("password", "")

        if username and password:
            user = authenticate(username=username, password=password)
            if user:
                if user.is_active:
                    data["user"] = user
                else:
                    ermsg = "User is deactivated." 
                    raise exceptions.ValidationError(ermsg)           
            else:
                ermsg = 'Wrong credential provided'
                raise exceptions.ValidationError(ermsg)
        else:
            ermsg = "Must provide username and password both"
            raise exceptions.ValidationError(ermsg)
        return data

 