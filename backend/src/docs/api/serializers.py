from rest_framework import routers, serializers, viewsets

from docs.models import Docs

class DocsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Docs
        fields = ('title', 'content') 