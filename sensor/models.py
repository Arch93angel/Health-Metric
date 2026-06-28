from django.db import models


class SensorReading(models.Model):
    device_id = models.CharField(max_length=100)
    heart_rate = models.IntegerField()
    spo2 = models.FloatField(null=True, blank=True)
    temperature = models.FloatField(null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-created_at"]

    def __str__(self):
        return f"{self.device_id} - {self.heart_rate} BPM"