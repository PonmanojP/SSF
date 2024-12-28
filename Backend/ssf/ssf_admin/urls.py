from django.urls import path
from .views import QueryList, AboutList, ServiceList, ProjectList, FeedbackList, AppointmentList, StandardCategoryList, PremiumCategoryList,create_query,create_appointment, PremiumPriceList, StandardPriceList, SocialsList

urlpatterns = [
    path('queries/', create_query, name='query-list'),
    path('about/', AboutList.as_view(), name='about-list'),
    path('services/', ServiceList.as_view(), name='service-list'),
    path('projects/', ProjectList.as_view(), name='project-list'),
    path('feedbacks/', FeedbackList.as_view(), name='feedback-list'),
    path('create-appointment/', create_appointment, name='create_appointment'),
    path('standard-categories/', StandardCategoryList.as_view(), name='standard-category-list'),
    path('premium-categories/', PremiumCategoryList.as_view(), name='premium-category-list'),
    path('premium-price/', PremiumPriceList.as_view(), name='premium-price-list'),
    path('standard-price/',StandardPriceList.as_view(), name = 'standard-price-list'),
    path('socials/', SocialsList.as_view(), name = 'socials-list')
]
