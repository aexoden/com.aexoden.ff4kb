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

	var PathFlags = {
		NONE:   0x00,
		STEPS:  0x01
	};

	var SegmentFlags = {
		NONE:     0x00,
		START:    0x01,
		END:      0x02,
		RETURN:   0x04,
		ANNOTATE: 0x08
	};

	var VariableFlags = {
		NONE:  0x00,
		EXTRA: 0x01
	};

	/*
	 * Data
	 */

	var data = {};

	data.routes = {
		"paladin": [
			"overworld-mist-0",
			"village-mist-0",
			"village-mist-weapon-0",
			"village-mist-1",
			"village-mist-house-0",
			"village-mist-2",
			"overworld-kaipo-0",
			"kaipo-0",
			"kaipo-inn-0",
			"kaipo-1",
			"kaipo-house-0",
			"kaipo-2",
			"overworld-kaipo-1",
			"watery-pass-south-b1f-0",
			"watery-pass-south-b2f-0",
			"watery-pass-south-b2f-save-room-0",
		]
	};

	data.variables = {
		"paladin": {
			0: {
				"type": VariableFlags.EXTRA,
				"location": "Watery Pass-South B2F Save Room",
				"disambiguation": " after the scene",
				"path": "watery-pass-south-b2f-save-room-0",
				"index": "0"
			}
		}
	};

	data.paths = {
		"kaipo-0": {
			"flags": PathFlags.NONE,
			"map": "3002-0",
			"segments": {
				"base-0": [
					[15, 30, SegmentFlags.START],
					[15, 26, SegmentFlags.END]
				]
			}
		},
		"kaipo-1": {
			"flags": PathFlags.NONE,
			"map": "3002-0",
			"segments": {
				"base-0": [
					[14, 17, SegmentFlags.START],
					[14, 18, SegmentFlags.NONE],
					[18, 18, SegmentFlags.NONE],
					[18, 17, SegmentFlags.NONE],
					[21, 17, SegmentFlags.NONE],
					[21, 16, SegmentFlags.NONE],
					[24, 16, SegmentFlags.NONE],
					[24, 15, SegmentFlags.NONE],
					[27, 15, SegmentFlags.NONE],
					[28, 15, SegmentFlags.NONE],
					[28, 13, SegmentFlags.END]
				]
			}
		},
		"kaipo-2": {
			"flags": PathFlags.NONE,
			"map": "3002-0",
			"segments": {
				"base-0": [
					[28, 14, SegmentFlags.START],
					[28, 15, SegmentFlags.NONE],
					[23, 15, SegmentFlags.NONE],
					[23, 19, SegmentFlags.NONE],
					[20, 19, SegmentFlags.NONE],
					[20, 26, SegmentFlags.NONE],
					[15, 26, SegmentFlags.NONE],
					[15, 30, SegmentFlags.NONE],
					[16, 30, SegmentFlags.NONE],
					[16, 31, SegmentFlags.END]
				]
			}
		},
		"kaipo-house-0": {
			"flags": PathFlags.NONE,
			"map": "3012-0",
			"segments": {
				"base-0": [
					[4, 15, SegmentFlags.START],
					[4, 6, SegmentFlags.END],
				],
				"base-1": [
					[6, 3, SegmentFlags.START],
					[6, 5, SegmentFlags.NONE],
					[4, 5, SegmentFlags.NONE],
					[4, 18, SegmentFlags.END]
				]
			}
		},
		"kaipo-inn-0": {
			"flags": PathFlags.NONE,
			"map": "3010-0",
			"segments": {
				"base-0": [
					[14, 12, SegmentFlags.START],
					[18, 12, SegmentFlags.NONE],
					[18, 14, SegmentFlags.NONE],
					[20, 14, SegmentFlags.NONE],
					[20, 17, SegmentFlags.END]
				]
			}
		},
		"overworld-kaipo-0": {
			"flags": PathFlags.STEPS,
			"map": "0000-0",
			"mapRange": [98, 95, 32, 32],
			"segments": {
				"base-0": [
					[103, 119, SegmentFlags.START],
					[103, 117, SegmentFlags.NONE],
					[104, 117, SegmentFlags.NONE],
					[104, 109, SegmentFlags.NONE],
					[125, 109, SegmentFlags.NONE],
					[125, 104, SegmentFlags.END]
				]
			}
		},
		"overworld-kaipo-1": {
			"flags": PathFlags.STEPS,
			"map": "0000-0",
			"mapRange": [116, 77, 32, 32],
			"segments": {
				"base-0": [
					[126, 104, SegmentFlags.START],
					[127, 104, SegmentFlags.NONE],
					[127, 90, SegmentFlags.NONE],
					[136, 90, SegmentFlags.NONE],
					[136, 84, SegmentFlags.NONE],
					[138, 84, SegmentFlags.NONE],
					[138, 83, SegmentFlags.END]
				]
			}
		},
		"overworld-mist-0": {
			"flags": PathFlags.STEPS,
			"map": "0000-0",
			"mapRange": [81, 103, 32, 32],
			"segments": {
				"base-0": [
					[96, 119, SegmentFlags.START],
					[98, 119, SegmentFlags.RETURN],
					[97, 119, SegmentFlags.END]
				]
			}
		},
		"village-mist-0": {
			"flags": PathFlags.NONE,
			"map": "3001-0",
			"segments": {
				"base-0": [
					[28, 16, SegmentFlags.START],
					[19, 16, SegmentFlags.NONE],
					[19, 24, SegmentFlags.NONE],
					[18, 24, SegmentFlags.NONE],
					[18, 26, SegmentFlags.NONE],
					[14, 26, SegmentFlags.NONE],
					[14, 25, SegmentFlags.END]
				]
			}
		},
		"village-mist-1": {
			"flags": PathFlags.NONE,
			"map": "3001-0",
			"segments": {
				"base-0": [
					[14, 25, SegmentFlags.START],
					[14, 26, SegmentFlags.NONE],
					[12, 26, SegmentFlags.NONE],
					[12, 8, SegmentFlags.NONE],
					[11, 8, SegmentFlags.NONE],
					[11, 7, SegmentFlags.END]
				]
			}
		},
		"village-mist-2": {
			"flags": PathFlags.NONE,
			"map": "3001-0",
			"segments": {
				"base-0": [
					[11, 7, SegmentFlags.START],
					[11, 10, SegmentFlags.NONE],
					[12, 10, SegmentFlags.NONE],
					[12, 16, SegmentFlags.NONE],
					[8, 16, SegmentFlags.END]
				]
			}
		},
		"village-mist-house-0": {
			"flags": PathFlags.NONE,
			"map": "300F-0",
			"segments": {
				"base-0": [
					[4, 13, SegmentFlags.START],
					[4, 12, SegmentFlags.NONE],
					[3, 12, SegmentFlags.NONE],
					[3, 10, SegmentFlags.NONE],
					[4, 10, SegmentFlags.NONE],
					[4, 6, SegmentFlags.NONE],
					[22, 6, SegmentFlags.END],
					[26, 6, SegmentFlags.NONE],
					[26, 10, SegmentFlags.NONE],
					[22, 10, SegmentFlags.NONE],
					[22, 24, SegmentFlags.RETURN],
					[22, 10, SegmentFlags.NONE],
					[26, 10, SegmentFlags.NONE],
					[26, 6, SegmentFlags.NONE],
					[4, 6, SegmentFlags.NONE],
					[4, 10, SegmentFlags.NONE],
					[3, 10, SegmentFlags.NONE],
					[3, 12, SegmentFlags.NONE],
					[4, 12, SegmentFlags.NONE],
					[4, 16, SegmentFlags.END]
				]
			}
		},
		"village-mist-weapon-0": {
			"flags": PathFlags.NONE,
			"map": "30E1-0",
			"segments": {
				"base-0": [
					[4, 7, SegmentFlags.START],
					[4, 5, SegmentFlags.RETURN],
					[4, 10, SegmentFlags.END]
				]
			}
		},
		"watery-pass-south-b1f-0": {
			"flags": PathFlags.STEPS,
			"map": "306F-0",
			"segments": {
				"base-0": [
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
		},
		"watery-pass-south-b2f-0": {
			"flags": PathFlags.STEPS,
			"map": "3070-0",
			"segments": {
				"base-0": [
					[26, 29, SegmentFlags.START],
					[26, 21, SegmentFlags.NONE],
					[29, 21, SegmentFlags.NONE],
					[29, 13, SegmentFlags.NONE],
					[28, 13, SegmentFlags.NONE],
					[28, 9, SegmentFlags.NONE],
					[26, 9, SegmentFlags.NONE],
					[26, 12, SegmentFlags.NONE],
					[23, 12, SegmentFlags.NONE],
					[23, 19, SegmentFlags.NONE],
					[24, 19, SegmentFlags.NONE],
					[24, 25, SegmentFlags.NONE],
					[22, 25, SegmentFlags.NONE],
					[22, 20, SegmentFlags.NONE],
					[18, 20, SegmentFlags.NONE],
					[18, 25, SegmentFlags.NONE],
					[12, 25, SegmentFlags.NONE],
					[12, 27, SegmentFlags.NONE],
					[10, 27, SegmentFlags.NONE],
					[10, 28, SegmentFlags.NONE],
					[5, 28, SegmentFlags.NONE],
					[5, 19, SegmentFlags.NONE],
					[2, 19, SegmentFlags.NONE],
					[2, 17, SegmentFlags.END]
				]
			}
		},
		"watery-pass-south-b2f-save-room-0": {
			"flags": PathFlags.STEPS,
			"map": "3054-0",
			"segments": {
				"base-0": [
					[4, 11, SegmentFlags.START],
					[4, 10, SegmentFlags.END]
				],
				"base-1": [
					[4, 7, SegmentFlags.START],
					[4, 2, SegmentFlags.END]
				],
				"extra-2-0": [
					[4, 4, SegmentFlags.NONE],
					[5, 4, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		}
	};

	/*
	 * Functions
	 */

	var drawArrow = function(ctx, previous, current, xOffset, yOffset) {
		var x = current[0] * 16 + 8 + xOffset;
		var y = current[1] * 16 + 8 + yOffset;

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
			if (path.mapRange) {
				ctx.drawImage(img, path.mapRange[0] * 16, path.mapRange[1] * 16, path.mapRange[2] * 16, path.mapRange[3] * 16, 0, 0, path.mapRange[2] * 16, path.mapRange[3] * 16);
			} else {
				ctx.drawImage(img, 0, 0);
			}

			var offScreenCanvas = document.createElement("canvas");
			offScreenCanvas.width = canvas.width;
			offScreenCanvas.height = canvas.height;

			var offScreenCtx = offScreenCanvas.getContext("2d");

			drawSegments(offScreenCtx, path);

			ctx.drawImage(offScreenCanvas, 0, 0);
		}

		var drawOverlay = document.getElementById("option-overlay").checked;

		img.src = "/static/img/maps/" + (drawOverlay ? "composite" : "base") + "/" + path.map + ".png";
	};

	var drawSegment = function(ctx, previous, current, xOffset, yOffset) {
		if ((current[2] & SegmentFlags.START) > 0) {
			ctx.fillRect(previous[0] * 16 - 3 + 8 + xOffset, previous[1] * 16 - 3 + 8 + yOffset, 6, 6);
		}

		if (current[0] < previous[0]) {
			ctx.fillRect(current[0] * 16 - 1 + 8 + xOffset, current[1] * 16 - 1 + 8 + yOffset, (previous[0] - current[0]) * 16, 2);
		} else if (current[1] < previous[1]) {
			ctx.fillRect(current[0] * 16 - 1 + 8 + xOffset, current[1] * 16 - 1 + 8 + yOffset, 2, (previous[1] - current[1]) * 16);
		} else if (current[0] > previous[0]) {
			ctx.fillRect(previous[0] * 16 + 1 + 8 + xOffset, previous[1] * 16 - 1 + 8 + yOffset, (current[0] - previous[0]) * 16, 2);
		} else if (current[1] > previous[1]) {
			ctx.fillRect(previous[0] * 16 - 1 + 8 + xOffset, previous[1] * 16 + 1 + 8 + yOffset, 2, (current[1] - previous[1]) * 16);
		}

		if ((previous[2] & SegmentFlags.RETURN) > 0) {
			ctx.clearRect(previous[0] * 16 - 2 + 8 + xOffset, previous[1] * 16 - 2 + 8 + yOffset, 4, 4);
		}

		if ((current[2] & SegmentFlags.RETURN) > 0) {
			ctx.fillRect(current[0] * 16 - 3 + 8 + xOffset, current[1] * 16 - 3 + 8 + yOffset, 6, 6);
			ctx.clearRect(current[0] * 16 - 2 + 8 + xOffset, current[1] * 16 - 2 + 8 + yOffset, 4, 4);
		}

		if ((current[2] & SegmentFlags.END) > 0) {
			drawArrow(ctx, previous, current, xOffset, yOffset);
		}
	};

	var drawSegments = function(ctx, path) {
		var xOffset = 0;
		var yOffset = 0;

		if (path.mapRange) {
			xOffset = path.mapRange[0] * -16;
			yOffset = path.mapRange[1] * -16;
		}

		Object.entries(path.segments).forEach(
			([key, segments]) => {
				var fields = key.split("-");

				if (fields[0] == "extra") {
					ctx.fillStyle = "#00FF00";
				} else {
					ctx.fillStyle = "#FFFFFF";
				}

				for (var i = 0; i < segments.length; i++) {
					drawSegment(ctx, i > 0 ? segments[i-1] : segments[i], segments[i], xOffset, yOffset);

					if ((segments[i][2] & SegmentFlags.ANNOTATE) > 0) {
						var x = segments[i][0] * 16 + xOffset + 12;
						var y = segments[i][1] * 16 + yOffset + 2;
						var style = ctx.fillStyle;
						ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
						ctx.fillRect(x, y, 13, 11);

						ctx.fillStyle = style;
						ctx.textBaseline = "top";
						ctx.fillText("+" + fields[1], x + 0.5, y);
					}
				}
			}
		);
	};

	var drawMaps = function(parent, route, vars, repaint) {
		var drawAll = document.getElementById("option-show-all").checked;
		var container = document.createDocumentFragment();

		if (repaint) {
			parent.innerHTML = '';
		}

		var activeMaps = {};

		Object.entries(vars).forEach(
			([key, value]) => {
				if (value > 0 && key in data.variables[route]) {
					var path = data.variables[route][key].path;

					if (!(path in activeMaps)) {
						activeMaps[path] = [];
					}

					activeMaps[path].push(key);
				}
			}
		);

		for (var i = 0; i < data.routes[route].length; i++) {
			var path = data.routes[route][i];

			if (drawAll || path in activeMaps) {
				var canvas_id = "path-" + i;
				var canvas = document.getElementById(canvas_id);
				var caption = document.getElementById(canvas_id + "-caption");

				if (!canvas) {
					var row = document.createElement("div");
					var caption = document.createElement("div");
					var canvas_container = document.createElement("div");

					row.className = "row align-items-center";
					caption.className = "col";
					canvas_container.className = "col";

					var canvas = document.createElement("canvas");

					canvas.id = canvas_id;
					canvas.width = 512;
					canvas.height = 512;

					caption.id = canvas_id + "-caption";

					if (path in activeMaps) {
						caption.innerHTML += '<dl class="dl">';

						for (var j = 0; j < activeMaps[path].length; j++) {
							var index = activeMaps[path][j];
							var varData = data.variables[route][index]
							var value = vars[index];

							if (varData) {
								if (varData.type == VariableFlags.EXTRA) {
									if (value > 0) {
										caption.innerHTML += "<dt>" + varData.location + "</dt><dd>Take " + value + " extra steps" + varData.disambiguation + ".</dd>";
									}
								}
							}
						}

						caption.innerHTML += '</dl>';
					}

					canvas_container.appendChild(canvas);
					row.appendChild(canvas_container);
					row.appendChild(caption);
					container.appendChild(row);
				}

				drawPath(canvas, data.paths[path]);
			}
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
