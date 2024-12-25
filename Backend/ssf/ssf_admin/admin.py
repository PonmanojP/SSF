from django.contrib import admin
from .models import (
    Query, About, Service, Project, Feedback, Appointment,
    StandardCategory, StandardItem, PremiumCategory, PremiumItem
)

@admin.register(Query)
class QueryAdmin(admin.ModelAdmin):
    list_display = ('name', 'phone_number', 'description')
    search_fields = ('name', 'phone_number')

@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
    list_display = ('description',)

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    list_display = ('title', 'price', 'delivery_days')
    search_fields = ('title',)

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('description',)
    search_fields = ('description',)
    readonly_fields = ('picture_preview',)

    def picture_preview(self, obj):
        return f'<img src="{obj.picture.url}" style="width: 200px;" />'
    picture_preview.allow_tags = True

@admin.register(Feedback)
class FeedbackAdmin(admin.ModelAdmin):
    list_display = ('name', 'feedback')
    search_fields = ('name',)

@admin.register(Appointment)
class AppointmentAdmin(admin.ModelAdmin):
    list_display = ('mobile_number',)
    search_fields = ('mobile_number',)

class StandardItemInline(admin.TabularInline):
    model = StandardItem
    extra = 1

@admin.register(StandardCategory)
class StandardCategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    inlines = [StandardItemInline]

class PremiumItemInline(admin.TabularInline):
    model = PremiumItem
    extra = 1

@admin.register(PremiumCategory)
class PremiumCategoryAdmin(admin.ModelAdmin):
    list_display = ('name',)
    inlines = [PremiumItemInline]
