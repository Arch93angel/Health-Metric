from django.contrib import admin
from .models import SensorReading

@admin.register(SensorReading)
class SensorReadingAdmin(admin.ModelAdmin):
    list_display = (
        "device_id",
        "heart_rate",
        "spo2",
        "temperature",
        "created_at",
    )