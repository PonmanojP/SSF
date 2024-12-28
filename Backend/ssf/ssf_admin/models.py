from django.db import models

# Create your models here.
class Query(models.Model):
    name = models.CharField(max_length=100)
    phone_number = models.CharField(max_length=15)
    description = models.TextField()

class About(models.Model):
    description = models.TextField()

class Service(models.Model):
    title = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    delivery_days = models.IntegerField()

class Project(models.Model):
    picture = models.ImageField(upload_to='projects/')
    description = models.TextField()

class Feedback(models.Model):
    name = models.CharField(max_length=100)
    feedback = models.TextField()

class Appointment(models.Model):
    mobile_number = models.CharField(max_length=15)

class StandardPrice(models.Model):
    price = models.IntegerField()

class StandardCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Socials(models.Model):
    mobile = models.IntegerField()
    whatsapp = models.CharField(max_length=150)
    mail = models.CharField(max_length=150)
    instagram = models.CharField(max_length=150)
    facebook = models.CharField(max_length=150)


class StandardItem(models.Model):
    category = models.ForeignKey(StandardCategory, related_name='items', on_delete=models.CASCADE)
    value = models.TextField()  # To store a single value for the array.

    def __str__(self):
        return f"{self.value}"

class PremiumPrice(models.Model):
    price = models.IntegerField()

class PremiumCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class PremiumItem(models.Model):
    category = models.ForeignKey(PremiumCategory, related_name='items', on_delete=models.CASCADE)
    value = models.TextField()

    def __str__(self):
        return f"{self.value}"
