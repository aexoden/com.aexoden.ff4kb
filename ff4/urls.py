from django.conf import settings
from django.contrib import admin
from django.templatetags.static import static
from django.urls import include, path
from django.views.generic import RedirectView, TemplateView

urlpatterns = [
    path('', TemplateView.as_view(template_name='index.html'), name='index'),
    path('admin/', admin.site.urls),
    path('guides/', include('ff4.guides.urls')),
    path('info/', include('ff4.info.urls')),
    path('routes/', include('ff4.routes.urls')),
    path('tools/', include('ff4.tools.urls')),

    path('seed-step-list.txt', RedirectView.as_view(url=static('txt/seed-step-list.txt'), permanent=True)),
    path('seed-step-list-sorted.txt', RedirectView.as_view(url=static('txt/seed-step-list-sorted.txt'), permanent=True)),
    path('octomamm-seed-step-list.txt', RedirectView.as_view(url=static('txt/octomamm-seed-step-list.txt'), permanent=True)),

    path('myself086/YellowChocobo.PNG', RedirectView.as_view(url=static('myself086/YellowChocobo.PNG'), permanent=True)),
    path('myself086/BlackChocoboLanding.PNG', RedirectView.as_view(url=static('myself086/BlackChocoboLanding.PNG'), permanent=True)),
    path('myself086/Yes64_FireclawRoute.txt', RedirectView.as_view(url=static('myself086/Yes64_FireclawRoute.txt'), permanent=True)),
    path('myself086/YangVSimps.txt', RedirectView.as_view(url=static('myself086/YangVSimps.txt'), permanent=True)),
    path('myself086/GrindFightManip.txt', RedirectView.as_view(url=static('myself086/GrindFightManip.txt'), permanent=True)),
    path('myself086/GrindFightManip.PNG', RedirectView.as_view(url=static('myself086/GrindFightManip.PNG'), permanent=True)),
    path('myself086/GrindFightManip2.txt', RedirectView.as_view(url=static('myself086/GrindFightManip2.txt'), permanent=True)),
]

if settings.DEBUG:
    import debug_toolbar  # type: ignore

    urlpatterns = [
        path('__debug__/', include(debug_toolbar.urls)),
    ] + urlpatterns
