from rest_framework import serializers
from .models import Query, About, Service, Project, Feedback, Appointment, StandardCategory, StandardItem, PremiumCategory, PremiumItem,StandardPrice, PremiumPrice, Socials

class QuerySerializer(serializers.ModelSerializer):
    class Meta:
        model = Query
        fields = '__all__'

class AboutSerializer(serializers.ModelSerializer):
    class Meta:
        model = About
        fields = '__all__'

class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'

class FeedbackSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feedback
        fields = '__all__'

class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = '__all__'

class StandardPriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = StandardPrice
        fields = '__all__'

class PremiumPriceSerializer(serializers.ModelSerializer):
    class Meta:
        model = PremiumPrice
        fields = '__all__'

class StandardCategorySerializer(serializers.ModelSerializer):
    items = serializers.StringRelatedField(many=True)

    class Meta:
        model = StandardCategory
        fields = ['id', 'name', 'items']

class PremiumCategorySerializer(serializers.ModelSerializer):
    items = serializers.StringRelatedField(many=True)

    class Meta:
        model = PremiumCategory
        fields = ['id', 'name', 'items']

class SocialsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Socials
        fields = '__all__'

