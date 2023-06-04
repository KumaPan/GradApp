from rest_framework import serializers

from .models import Lead

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead

        read_only_fields =(
            'created_by',
            'created_at',
            'modified_at',
        ),

        fields = (
            'id',
            'lesson',
            'contact_person',
            'email',
            'phone',
            'website',
            'estimated_value',
            'status',
            'priority',
            
        )