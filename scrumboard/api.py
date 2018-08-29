from rest_framework.viewsets import ModelViewSet
from .serializers import ListSerializer, CardSerializer
from .models import List, Card
# for login auth
from rest_framework import permissions

class ListViewSet(ModelViewSet):
	queryset=List.objects.all()
	serializer_class=ListSerializer
	# ristructs without login
	permission_classes=(permissions.IsAuthenticated,)

class CardViewSet(ModelViewSet):
	queryset=Card.objects.all()
	serializer_class=CardSerializer
	permission_classes=(permissions.IsAuthenticated,)