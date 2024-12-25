from rest_framework import generics
from .models import Query, About, Service, Project, Feedback, Appointment, StandardCategory, PremiumCategory
from .serializers import QuerySerializer, AboutSerializer, ServiceSerializer, ProjectSerializer, FeedbackSerializer, AppointmentSerializer, StandardCategorySerializer, PremiumCategorySerializer

class QueryList(generics.ListAPIView):
    queryset = Query.objects.all()
    serializer_class = QuerySerializer

class AboutList(generics.ListAPIView):
    queryset = About.objects.all()
    serializer_class = AboutSerializer

class ServiceList(generics.ListAPIView):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer

class ProjectList(generics.ListAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer

class FeedbackList(generics.ListAPIView):
    queryset = Feedback.objects.all()
    serializer_class = FeedbackSerializer

class AppointmentList(generics.ListAPIView):
    queryset = Appointment.objects.all()
    serializer_class = AppointmentSerializer

class StandardCategoryList(generics.ListAPIView):
    queryset = StandardCategory.objects.all()
    serializer_class = StandardCategorySerializer

class PremiumCategoryList(generics.ListAPIView):
    queryset = PremiumCategory.objects.all()
    serializer_class = PremiumCategorySerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Query, About, Service, Project, Feedback, Appointment, StandardCategory, PremiumCategory
from .serializers import QuerySerializer, AboutSerializer, ServiceSerializer, ProjectSerializer, FeedbackSerializer, AppointmentSerializer, StandardCategorySerializer, PremiumCategorySerializer

@api_view(['POST'])
def create_query(request):
    """
    Handle POST request to create a new query.
    """
    serializer = QuerySerializer(data=request.data)
    
    if serializer.is_valid():
        serializer.save()  # Save the validated data to the database
        return Response({'message': 'Query submitted successfully!'}, status=201)
    return Response(serializer.errors, status=400)

@api_view(['POST'])
def create_appointment(request):
    """
    Handle POST request to create a new appointment (email or phone).
    """
    # Instantiate the serializer with the incoming data
    serializer = AppointmentSerializer(data=request.data)

    # Check if the provided data is valid
    if serializer.is_valid():
        # Save the validated data to the database
        serializer.save()
        return Response({'message': 'Appointment saved successfully!'}, status=201)
    
    # If the data is invalid, return the errors
    return Response(serializer.errors, status=400)


