from .serializers import TodoSerializer
from rest_framework import generics, permissions
from .models import Todo
# Create your views here.
class TodoListCreate(generics.ListCreateAPIView):

    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(user=user)

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class Gettodo(generics.RetrieveAPIView):
    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(user=user)

# class TodoRetrieveUpdateDestroy(generics.RetrieveUpdateDestroyAPIView):
#     serializer_class = TodoSerializer
#     permission_classes = [permissions.IsAuthenticated]

#     def get_queryset(self):
#         user = self.request.user
#         return Todo.objects.filter(user=user)

class TodoUpdate(generics.UpdateAPIView):
    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(user=user)

class TodoDestroy(generics.DestroyAPIView):
    serializer_class = TodoSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        return Todo.objects.filter(user=user)

    


