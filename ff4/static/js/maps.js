/*
 * Global Variables
 */

var com = com || {};
com.aexoden = com.aexoden || {};
com.aexoden.ff4 = com.aexoden.ff4 || {};

/*
 * Module Definition
 */

com.aexoden.ff4.maps = function()
{
	/*
	 * Constants
	 */

	var ZOOM_FACTOR = 1.1;

	var MAP_OVERWORLD =  0x0000;
	var MAP_UNDERWORLD = 0x1000;
	var MAP_MOON =       0x2000;
	var MAP_DUNGEON =    0x3000;

    /*
     * Data
     */

    /*
     * Global Variables
     */

	var drawOverlay = true;

	var currentMapIndex = null;

	var currentImage = null;
	var currentImageReady = false;

	var currentStartX = null;
	var currentStartY = null;
	var currentSize = null;

	var dragStartX = null;
	var dragStartY = null;
	var dragLastX = null;
	var dragLastY = null;

    /*
     * Functions
     */

	var canWrap = function() {
		return currentMapIndex == MAP_OVERWORLD || currentMapIndex == MAP_MOON;
	}

	var fixBounds = function() {
		if (canWrap()) {
			if (currentStartX < 0) {
				currentStartX += getMapSize();
			} else if (currentStartX >= getMapSize()) {
				currentStartX -= getMapSize();
			}

			if (currentStartY < 0) {
				currentStartY += getMapSize();
			} else if (currentStartY >= getMapSize()) {
				currentStartY -= getMapSize();
			}
		} else {
			currentStartX = Math.max(0, Math.min(getMapSize() - currentSize, currentStartX));
			currentStartY = Math.max(0, Math.min(getMapSize() - currentSize, currentStartY));
		}
	}

	var getMapSize = function() {
		if (currentMapIndex == 0) {
			return 4096;
		} else if (currentMapIndex == 4096) {
			return 2048;
		} else if (currentMapIndex == 8192) {
			return 1024;
		} else {
			return 512;
		}
	}

	var onMapMouseDown = function(e) {
		if (e.buttons == 1) {
			dragStartX = e.offsetX;
			dragStartY = e.offsetY;
			dragLastX = e.offsetX;
			dragLastY = e.offsetY;

			e.preventDefault();
		}
	}

	var onMapMouseMove = function(e) {
		if (dragStartX !== null) {
			dx = e.offsetX - dragLastX;
			dy = e.offsetY - dragLastY;

			dragLastX = e.offsetX;
			dragLastY = e.offsetY;

			currentStartX -= dx * (currentSize / 512);
			currentStartY -= dy * (currentSize / 512);

			drawMap();
		}
	}

	var onMapMouseUp = function(e) {
		if (dragStartX !== null) {
			dragStartX = null;
			dragStartY = null;
			dragLastX = null;
			dragLastY = null;

			currentStartX = Math.floor(currentStartX);
			currentStartY = Math.floor(currentStartY);

			drawMap();

			e.preventDefault();
		}
	}

	var onMapClick = function(e) {
		currentCenterX = Math.floor(e.offsetX * currentZoomLevel / 16) + (currentStartX() * (currentZoomLevel / 16));
		currentCenterY = Math.floor(e.offsetY * currentZoomLevel / 16) + (currentStartY() * (currentZoomLevel / 16));

		updateDisplay();
 	}

	var onMapWheel = function(e) {
		var factor = Math.min(ZOOM_FACTOR, getMapSize() / currentSize);

		if (e.deltaY < 0) {
			factor = Math.max(1 / ZOOM_FACTOR, 512 / currentSize);
		}

		if ((factor > 1 && currentSize < getMapSize()) || (factor < 1 && currentSize > 512)) {
			var offsetX = (e.offsetX / 512) * currentSize + currentStartX;
			var offsetY = (e.offsetY / 512) * currentSize + currentStartY;

			currentSize = Math.floor(Math.max(512, Math.min(getMapSize(), currentSize * factor)));

			var dx = Math.floor((offsetX - currentStartX) * (1 - factor));
			var dy = Math.floor((offsetY - currentStartY) * (1 - factor));

			currentStartX += dx;
			currentStartY += dy;
		}

		updateDisplay();

		e.preventDefault();
	}

	var onButtonGoOverworld = function(e) {
		document.getElementById('button-base-overworld').classList.add('active');
		document.getElementById('button-base-underworld').classList.remove('active');
		document.getElementById('button-base-moon').classList.remove('active');

		updateMap(MAP_OVERWORLD);
	}

	var onButtonGoUnderworld = function(e) {
		document.getElementById('button-base-overworld').classList.remove('active');
		document.getElementById('button-base-underworld').classList.add('active');
		document.getElementById('button-base-moon').classList.remove('active');

		updateMap(MAP_UNDERWORLD);
	}

	var onButtonGoMoon = function(e) {
		document.getElementById('button-base-overworld').classList.remove('active');
		document.getElementById('button-base-underworld').classList.remove('active');
		document.getElementById('button-base-moon').classList.add('active');

		updateMap(MAP_MOON);
	}

	var onButtonShowOverlay = function(e) {
		drawOverlay = !drawOverlay;
		updateMap(currentMapIndex, false);
	}

	var drawMap = function() {
		if (currentImageReady) {
			var canvas = document.getElementById('map');
			var ctx = canvas.getContext('2d');

			fixBounds();

			var pwidth = Math.min(currentSize, getMapSize() - currentStartX);
			var nwidth = currentSize - pwidth;
			var pheight = Math.min(currentSize, getMapSize() - currentStartY);
			var nheight = currentSize - pheight;

			var spwidth = pwidth * 512 / currentSize;
			var snwidth = 512 - spwidth;
			var spheight = pheight * 512 / currentSize;
			var snheight = 512 - spheight;

			ctx.imageSmoothingQuality = "high";

			ctx.drawImage(currentImage, currentStartX, currentStartY, pwidth, pheight, 0, 0, spwidth, spheight);

			if (snwidth > 0) {
				ctx.drawImage(currentImage, 0, currentStartY, nwidth, pheight, spwidth, 0, snwidth, spheight);
			}

			if (snheight > 0) {
				ctx.drawImage(currentImage, currentStartX, 0, pwidth, nheight, 0, spheight, spwidth, snheight);
			}

			if (snwidth > 0 && snheight > 0) {
				ctx.drawImage(currentImage, 0, 0, nwidth, nheight, spwidth, spheight, snwidth, snheight);
			}
		}
	}

	var updateMap = function(mapIndex, fullUpdate = true) {
		currentMapIndex = mapIndex;
		currentImage = new Image();
		currentImageReady = false;

		currentImage.onload = function() {
			currentImageReady = true;

			if (fullUpdate) {
				currentStartX = 0;
				currentStartY = 0;
				currentSize = getMapSize();
			}

			drawMap();
		}

		currentImage.src = '/static/img/maps/' + (drawOverlay ? 'composite' : 'base') + '/' + currentMapIndex.toString(16).padStart(4, '0') + '-0.png';
	}

	var updateDisplay = function() {
		fixBounds();
		drawMap();
	}

	var init = function() {
		var canvas = document.getElementById('map');
		canvas.addEventListener('wheel', onMapWheel);
		canvas.addEventListener('DOMMouseScroll', onMapWheel);

		canvas.addEventListener('mousedown', onMapMouseDown);
		canvas.addEventListener('mousemove', onMapMouseMove);
		canvas.addEventListener('mouseup', onMapMouseUp);

		var button = document.getElementById('button-base-overworld');
		button.addEventListener('click', onButtonGoOverworld);

		var button = document.getElementById('button-base-underworld');
		button.addEventListener('click', onButtonGoUnderworld);

		var button = document.getElementById('button-base-moon');
		button.addEventListener('click', onButtonGoMoon);

		var button = document.getElementById('button-show-overlay');
		button.addEventListener('click', onButtonShowOverlay);

		updateMap(MAP_OVERWORLD);
		updateDisplay();
	}

    /*
     * Public Definition
     */

    return {
		init: init
    };
}();
