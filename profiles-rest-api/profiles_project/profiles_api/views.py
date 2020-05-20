from rest_framework.views import APIView 
from rest_framework.views import Response
from profiles_api import serializers
from rest_framework import status
from rest_framework import viewsets


class HelloAPIView(APIView):
    """ Test API View """

    serializer_class = serializers.HelloSerializers

    def get(self, request, format=None):
        """ Return a list if API views"""

        an_apiview = [
            'I am Hari',
            'This is my First Rest API',
            'Uses HTTP Methods as functions(get, post, patch, put, delete)',
        ]

        return Response({'message': 'Hello!', 'an_apiview': an_apiview})

    def post(self, request):
        """ Create a hello message with our name """
        serializers = self.serializer_class(data=request.data)

        if serializers.is_valid():
            name = serializers.validated_data.get('name')
            message = f'Hello {name}'
            return Response({'message': message})
        else:
            return Response(
                serializers.errors,
                status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, pk=None):
        """ Handle updating object """
        return Response({'method': 'PUT'})

    def patch(self, request, pk=None):
        """ Update the patches """
        return Response({'method': 'PATCH'})

    def delete(self, request, pk=None):
        """ Delete an object """
        return Response({'method': 'DELETE'})


# Create your views here.
class HelloViewset(viewsets.ViewSet):
    """ Sample Viewset """
    def list(self, request):
        
        a_viewset = ['Hello',
        'I am View set', 'I maps URL automatically using routers',
        'Provides functionalities with less code'
        ]
        
        return Response({'message':'Hello!', 'a_viewset':a_viewset})
    
