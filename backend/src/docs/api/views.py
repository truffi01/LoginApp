from rest_framework.generics import (ListAPIView, RetrieveAPIView, CreateAPIView, DestroyAPIView, UpdateAPIView )  
from docs.models import Docs 
from .serializers import DocsSerializer

class DocsListView(ListAPIView):
    queryset = Docs.objects.all()
    serializer_class = DocsSerializer 

class DocsDetailView(RetrieveAPIView):
    queryset = Docs.objects.all()
    serializer_class = DocsSerializer

class DocsCreateView(CreateAPIView):
    queryset = Docs.objects.all()
    serializer_class = DocsSerializer

class DocsUpdateView(UpdateAPIView):
    queryset = Docs.objects.all()
    serializer_class = DocsSerializer

class DocsDeleteView(DestroyAPIView):
    queryset = Docs.objects.all()
    serializer_class = DocsSerializer