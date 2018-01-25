/*
 * Global Variables
 */

var com = com || {};
com.aexoden = com.aexoden || {};

/*
 * Module Definition
 */

com.aexoden.ff4 = function()
{
	/*
	 * Constants
	 */

	var SegmentFlags = {
		NONE:  0x00,
		START: 0x01,
		END:   0x02
	};

	/*
	 * Data
	 */

	var data = {};

	data.routes = {
		"paladin": [
			"watery-pass-south-b1f"
		]
	};

	data.paths = {
		"watery-pass-south-b1f": {
			"map": "06F-0",
			"segments": [
				[26, 30, SegmentFlags.START],
				[26, 28, SegmentFlags.NONE],
				[21, 28, SegmentFlags.NONE],
				[21, 25, SegmentFlags.NONE],
				[15, 25, SegmentFlags.NONE],
				[15, 22, SegmentFlags.NONE],
				[7, 22, SegmentFlags.NONE],
				[7, 16, SegmentFlags.END],
				[7, 13, SegmentFlags.NONE],
				[6, 13, SegmentFlags.NONE],
				[6, 10, SegmentFlags.NONE],
				[7, 10, SegmentFlags.NONE],
				[7, 7, SegmentFlags.NONE],
				[4, 7, SegmentFlags.NONE],
				[4, 6, SegmentFlags.NONE],
				[2, 6, SegmentFlags.NONE],
				[2, 2, SegmentFlags.END]
			]
		}
	};

	/*
	 * Functions
	 */

	var drawArrow = function(ctx, previous, current) {
		var x = current[0] * 16 + 8;
		var y = current[1] * 16 + 8;

		if (current[0] < previous[0]) {
			ctx.fillRect(x + 2, y - 6, 1, 12);
			ctx.fillRect(x + 1, y - 5, 1, 10);
			ctx.fillRect(x + 0, y - 4, 1, 8);
			ctx.fillRect(x - 1, y - 3, 1, 6);
			ctx.fillRect(x - 2, y - 2, 1, 4);
			ctx.fillRect(x - 3, y - 1, 1, 2);
		} else if (current[1] < previous[1]) {
			ctx.fillRect(x - 6, y + 2, 12, 1);
			ctx.fillRect(x - 5, y + 1, 10, 1);
			ctx.fillRect(x - 4, y + 0, 8, 1);
			ctx.fillRect(x - 3, y - 1, 6, 1);
			ctx.fillRect(x - 2, y - 2, 4, 1);
			ctx.fillRect(x - 1, y - 3, 2, 1);
		} else if (previous[0] < current[0]) {
			ctx.fillRect(x - 2, y - 6, 1, 12);
			ctx.fillRect(x - 1, y - 5, 1, 10);
			ctx.fillRect(x + 0, y - 4, 1, 8);
			ctx.fillRect(x + 1, y - 3, 1, 6);
			ctx.fillRect(x + 2, y - 2, 1, 4);
			ctx.fillRect(x + 3, y - 1, 1, 2);
		} else {
			ctx.fillRect(x - 6, y - 2, 12, 1);
			ctx.fillRect(x - 5, y - 1, 10, 1);
			ctx.fillRect(x - 4, y + 0, 8, 1);
			ctx.fillRect(x - 3, y + 1, 6, 1);
			ctx.fillRect(x - 2, y + 2, 4, 1);
			ctx.fillRect(x - 1, y + 3, 2, 1);
		}
	};

	var drawPath = function(canvas, path) {
		var ctx = canvas.getContext("2d");

		var img = new Image();

		img.onload = function() {
			ctx.drawImage(img, 0, 0);
			drawSegments(ctx, path);
		}

		var drawOverlay = document.getElementById("option-overlay").checked;

		img.src = "/static/img/maps/" + (drawOverlay ? "composite" : "base") + "/" + path.map + ".png";
	};

	var drawSegment = function(ctx, previous, current) {
		if ((current[2] & SegmentFlags.START) > 0) {
			ctx.fillRect(previous[0] * 16 - 3 + 8, previous[1] * 16 - 3 + 8, 6, 6);
		}

		if (current[0] < previous[0]) {
			ctx.fillRect(current[0] * 16 - 1 + 8, current[1] * 16 - 1 + 8, (previous[0] - current[0]) * 16, 2);
		} else if (current[1] < previous[1]) {
			ctx.fillRect(current[0] * 16 - 1 + 8, current[1] * 16 - 1 + 8, 2, (previous[1] - current[1]) * 16);
		} else if (current[0] > previous[0]) {
			ctx.fillRect(previous[0] * 16 + 1 + 8, previous[1] * 16 - 1 + 8, (current[0] - previous[0]) * 16, 2);
		} else if (current[1] > previous[1]) {
			ctx.fillRect(previous[0] * 16 - 1 + 8, previous[1] * 16 + 1 + 8, 2, (current[1] - previous[1]) * 16);
		}

		if ((current[2] & SegmentFlags.END) > 0) {
			drawArrow(ctx, previous, current);
		}
	};

	var drawSegments = function(ctx, path) {
		ctx.fillStyle = "#FFFFFF";

		for (var i = 0; i < path.segments.length; i++) {
			drawSegment(ctx, i > 0 ? path.segments[i-1] : path.segments[i], path.segments[i]);
		}
	};

	var drawMaps = function(parent, route, vars) {
		var container = document.createDocumentFragment();

		for (var i = 0; i < data.routes[route].length; i++) {
			var canvas_id = "path-" + i;
			var canvas = document.getElementById(canvas_id);

			if (!canvas) {
				var canvas = document.createElement("canvas");

				canvas.id = canvas_id;
				canvas.width = 512;
				canvas.height = 512;

				container.appendChild(canvas);
			}

			drawPath(canvas, data.paths[data.routes[route][i]]);
		}

		parent.appendChild(container);
	};

	/*
	 * Public Definition
	 */

	return {
		drawMaps: drawMaps
	};
}();
