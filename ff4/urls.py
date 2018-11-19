from django.conf import settings
from django.contrib import admin
from django.urls import include, path
from django.views.generic import TemplateView

urlpatterns = [
	path('', TemplateView.as_view(template_name='index.html'), name='index'),
	path('admin/', admin.site.urls),
	path('routes/', include('ff4.routes.urls')),
	path('tools/', include('ff4.tools.urls')),
]

if settings.DEBUG:
	import debug_toolbar

	urlpatterns = [
		path('__debug__/', include(debug_toolbar.urls)),
	] + urlpatterns
