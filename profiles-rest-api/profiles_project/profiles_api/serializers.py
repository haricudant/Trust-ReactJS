from rest_framework import serializers


class HelloSerializers(serializers.Serializer):
    """Serailizers for testing out name view """
    name = serializers.CharField(max_length = 10)
