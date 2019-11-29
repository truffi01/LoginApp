from rest_framework.generics import ListAPIView, RetrieveAPIView 
from docs.models import Docs 
from .serializers import DocsSerializer

class DocsListView(ListAPIView):
    queryset = Docs.objects.all()
    serializer_class = DocsSerializer 

class DocsDetailView(RetrieveAPIView):
    queryset = Docs.objects.all()
    serializer_class = DocsSerializer