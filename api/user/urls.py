from django.urls import path, include
from django.http import JsonResponse
from rest_framework_simplejwt.views import TokenRefreshView, TokenObtainPairView
from .views import UserRegisterationView,verifyOTPView,UserLoginView,UserProfileView,UserChangePasswordView,SendPasswordResetEmailView,UserPasswordResetView,LogOutAPIView,verifyTokenView,UserUpdateProfileView,UserProfileViewById
# Create your views here.


urlpatterns = [
    path('register/', UserRegisterationView.as_view(),name='register'),
    path('verify-email/', verifyOTPView.as_view(),name='verify-email'),
    path('verify-token/', verifyTokenView.as_view(),name='verify-token'),
    path('login/', UserLoginView.as_view(),name='login'),
    path('logout/', LogOutAPIView.as_view(),name='logout'),
    path('profile/', UserProfileView.as_view(),name='profile'),
    path('<int:pk>/', UserProfileViewById.as_view(),name='profileId'),
    path('', UserProfileViewById.as_view(),name='users'),
    path('update-profile/', UserUpdateProfileView.as_view(),name='update-profile'),
    path('changepassword/', UserChangePasswordView.as_view(),name='changepassword'),
    path('send-reset-password-email/', SendPasswordResetEmailView.as_view(), name='send-reset-password-email'),
    path('reset-password/', UserPasswordResetView.as_view(), name='reset-password'),
]