from django.urls import path 
from .views import (DocsDetailView, DocsListView, DocsCreateView, DocsDeleteView, DocsUpdateView)


urlpatterns = [
    path('', DocsListView.as_view()), 
    path('create/', DocsCreateView.as_view()),
    path('<pk>', DocsDetailView.as_view()),
    path('<pk>/update/', DocsUpdateView.as_view()),
    path('<pk>/delete/', DocsDeleteView.as_view()),
]