from django.urls import path 
from.views import DocsDetailView, DocsListView


urlpatterns = [
    path('', DocsListView.as_view()), 
    path('<pk>', DocsDetailView.as_view()) 
]