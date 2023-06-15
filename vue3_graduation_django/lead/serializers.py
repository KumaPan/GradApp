from rest_framework import serializers

from .models import Lead

class LeadSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lead

        read_only_fields =(
            'created_by',
            'created_at',
            'modified_at',
            'goals',
        

            # 'contact_person',
            # 'email',
            # 'phone',
            # 'website',
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
            'bio',
            'goals',
            
            'team_members',
            'brand_description',
            'brand_name',
            'product_name',
            'product_function',
            'product_packaging',
            'product_quality',
            'product_service',
            'product_design', 

            'created_at',
            'modified_at',
            'keyword'
        )

     