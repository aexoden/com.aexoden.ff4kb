import json
import os

from django.conf import settings
from django.http import Http404, HttpRequest
from django.shortcuts import redirect, render


def map_viewer(request: HttpRequest, map: str = '0000'):
    try:
        map_int = int(map, 16)
        map_str = f'{map_int:04X}'

        if map != map_str:
            return redirect('tools:map-viewer-map', map=map_str, permanent=True)
    except ValueError:
        raise Http404

    if map_int == 0 and request.resolver_match.view_name == 'map-viwer-map':
        return redirect('tools:map-viewer', permanent=True)

    base_filename = os.path.join(settings.BASE_DIR, 'ff4', 'static', 'img', 'maps', 'composite', map_str)

    if not os.path.exists(f'{base_filename}-0.png') and not os.path.exists(f'{base_filename}-1.png'):
        raise Http404

    context = {
        'map': int(map, 16),
    }

    return render(request, 'tools/map-viewer.html', context)


def seed_finder(request: HttpRequest):
    from ff4.routes.views import ROUTES, get_colors

    colors = {}

    for route in ROUTES:
        if ROUTES[route]['seed_finder']:
            colors[route] = get_colors(route)

    context = {
        'routes': ROUTES,
        'colors': json.dumps(colors)
    }

    return render(request, 'tools/seed-finder.html', context)
