from django.urls import path, include
from .models import Messages
from rest_framework import routers, serializers, viewsets

# Serializers define the API representation.
class messageSerializers(serializers.ModelSerializer):
    class Meta:
        model = Messages
        fields = "__all__"

# ViewSets define the view behavior.
class messageViewSet(viewsets.ModelViewSet):
    queryset = Messages.objects.all()
    serializer_class = messageSerializers

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
router.register("api", messageViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('messenger/', include(router.urls)),
]