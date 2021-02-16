from rest_framework import routers

from blog_backend.blog_backend.apps.blog.api.views import PostViewSet

router = routers.DefaultRouter()

router.register('posts', PostViewSet)

