from django.conf import settings
from django.contrib import admin
from django.urls import include, path

urlpatterns = [
	path('admin/', admin.site.urls),
	path('routes/', include('ff4.routes.urls')),
	path('tools/', include('ff4.tools.urls')),
]

if settings.DEBUG:
	import debug_toolbar

	urlpatterns = [
		path('__debug__/', include(debug_toolbar.urls)),
	] + urlpatterns
