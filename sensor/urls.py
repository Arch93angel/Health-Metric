from django.urls import path
from .views import SensorReadingCreateView

urlpatterns = [
    path(
        "readings/",
        SensorReadingCreateView.as_view(),
        name="create-reading",
    ),
]