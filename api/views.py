from django.shortcuts import redirect, render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import TodoSerializer
from.models import Todo
# Create your views here.
    

@api_view(['GET'])
def getData(request):
    to_dos = Todo.objects.all()
    serializer = TodoSerializer(to_dos, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def addItem(request):
    serializer = TodoSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    return Response(serializer.data)