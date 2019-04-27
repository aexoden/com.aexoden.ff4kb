/*
 * Global Variables
 */

var com = com || {};
com.aexoden = com.aexoden || {};
com.aexoden.ff4 = com.aexoden.ff4 || {};

/*
 * Module Definition
 */

com.aexoden.ff4.nocw = function()
{
	/*
	 * Constants
	 */

	var MapResult = {
		BACON:          0,
		AUTO:           1,
		WARP:           2,
		STUCK:          3,
		WALK_LEFT:      4,
		WALK_RIGHT:     5,
		WALK_UP:        6,
		WALK_DOWN:      7,
		WALK_SOMEWHERE: 8,
		OVERWORLD:      9,
		UNDERWORLD:    10,
		MOON:          11,
		CURRENT:       12,
		RANDOM:        13
 	};

    /*
     * Data
     */

	maps = {
		0: [true, false, false, false],
		1: [true, false, false, false],
		2: [true, false, false, true],
		3: [true, false, false, true],
		4: [true, false, false, true],
		5: [true, false, false, true],
		6: [true, false, false, true],
		7: [true, false, false, false],
		8: [true, false, false, true],
		9: [true, false, false, true],
		10: [true, false, true, true],
		11: [true, false, true, true],
		12: [true, true, false, false],
		13: [true, false, false, true],
		14: [true, false, true, true],
		15: [true, false, true, true],
		16: [true, false, true, true],
		17: [true, false, true, true],
		18: [true, false, false, false],
		19: [true, false, true, true],
		20: [true, false, false, true],
		21: [true, false, false, true],
		22: [true, false, false, true],
		23: [true, false, false, true],
		24: [true, false, false, true],
		25: [true, false, true, true],
		26: [true, false, true, true],
		27: [true, false, true, true],
		28: [true, false, false, false],
		29: [true, false, false, false],
		30: [true, false, false, true],
		31: [true, false, false, true],
		32: [true, false, true, true],
		33: [true, false, false, false],
		34: [true, false, false, false],
		35: [true, false, false, false],
		36: [true, false, false, false],
		37: [true, false, false, false],
		38: [true, false, false, false],
		39: [true, false, false, false],
		40: [true, false, false, false],
		41: [true, false, true, true],
		42: [true, false, true, true],
		43: [true, false, true, true],
		44: [true, false, false, false],
		45: [true, false, false, false],
		46: [true, false, false, false],
		47: [true, false, false, false],
		48: [true, false, false, false],
		49: [true, false, false, false],
		50: [true, false, false, true],
		51: [true, false, true, false],
		52: [true, true, false, false],
		53: [true, false, false, false],
		54: [true, false, true, true],
		55: [true, false, true, true],
		56: [true, false, true, true],
		57: [true, false, false, true],
		58: [true, false, false, true],
		59: [true, false, false, true],
		60: [true, false, false, true],
		61: [true, false, false, true],
		62: [true, false, false, true],
		63: [true, false, false, true],
		64: [true, false, false, true],
		65: [true, false, false, true],
		66: [true, false, false, true],
		67: [true, false, false, true],
		68: [true, false, false, false],
		69: [true, false, true, true],
		70: [true, false, true, true],
		71: [true, false, true, true],
		72: [true, false, true, true],
		73: [true, false, true, true],
		74: [true, false, true, true],
		75: [true, false, false, true],
		76: [true, false, false, true],
		77: [true, false, false, true],
		78: [true, false, false, true],
		79: [true, false, false, true],
		80: [true, false, false, true],
		81: [true, false, false, true],
		82: [true, false, true, true],
		83: [true, false, false, true],
		84: [true, false, false, true],
		85: [true, false, false, true],
		86: [true, false, false, true],
		87: [true, false, false, false],
		88: [true, false, false, false],
		89: [true, false, false, false],
		90: [true, false, true, true],
		91: [true, false, true, true],
		92: [true, false, true, true],
		93: [true, false, false, false],
		94: [true, false, false, false],
		95: [true, false, false, false],
		96: [true, false, false, false],
		97: [true, false, false, false],
		98: [true, true, false, false],
		99: [true, false, false, true],
		100: [true, false, false, true],
		101: [true, false, true, true],
		102: [true, false, false, false],
		103: [true, false, true, true],
		104: [true, false, true, true],
		105: [true, false, true, true],
		106: [true, false, true, true],
		107: [true, false, true, true],
		108: [true, false, true, true],
		109: [true, false, true, true],
		110: [true, false, true, false],
		111: [true, false, true, false],
		112: [true, false, true, false],
		113: [true, false, true, false],
		114: [true, false, true, false],
		115: [true, false, true, true],
		116: [true, false, true, true],
		117: [true, false, true, true],
		118: [true, false, true, true],
		119: [true, false, true, true],
		120: [true, false, true, true],
		121: [true, false, true, true],
		122: [true, false, true, true],
		123: [true, false, true, true],
		124: [true, false, true, true],
		125: [true, true, false, false],
		126: [true, false, true, true],
		127: [true, true, false, false],
		128: [true, false, true, false],
		129: [true, false, true, false],
		130: [true, false, true, false],
		131: [false, false, false, false],
		132: [false, false, false, false],
		133: [true, false, true, false],
		134: [false, false, false, false],
		135: [false, false, false, false],
		136: [true, true, false, false],
		137: [true, false, true, false],
		138: [false, false, false, false],
		139: [true, false, false, true],
		140: [false, false, false, false],
		141: [false, false, false, false],
		142: [false, false, false, false],
		143: [false, false, false, false],
		144: [true, false, true, false],
		145: [true, false, true, false],
		146: [true, false, false, false],
		147: [true, false, false, false],
		148: [true, false, false, true],
		149: [false, false, false, false],
		150: [false, false, false, false],
		151: [true, false, false, false],
		152: [false, false, false, false],
		153: [true, false, false, false],
		154: [true, false, false, false],
		155: [true, false, false, false],
		156: [false, false, false, false],
		157: [true, true, true, false],
		158: [false, false, false, false],
		159: [true, false, false, false],
		160: [true, true, false, true],
		161: [false, false, false, false],
		162: [true, false, true, false],
		163: [true, false, true, false],
		164: [false, false, false, false],
		165: [true, false, true, false],
		166: [false, false, false, false],
		167: [false, false, false, false],
		168: [true, false, false, false],
		169: [true, false, false, false],
		170: [false, false, false, false],
		171: [true, true, true, false],
		172: [false, false, false, false],
		173: [true, true, true, false],
		174: [false, false, false, false],
		175: [false, false, false, false],
		176: [false, false, false, false],
		177: [false, false, false, false],
		178: [false, false, false, false],
		179: [true, true, true, false],
		180: [false, false, false, false],
		181: [false, false, false, false],
		182: [true, false, true, false],
		183: [false, false, false, false],
		184: [false, false, false, false],
		185: [false, false, false, false],
		186: [true, true, false, true],
		187: [true, false, false, false],
		188: [false, false, false, false],
		189: [true, false, true, false],
		190: [false, false, false, false],
		191: [false, false, false, false],
		192: [false, false, false, false],
		193: [true, false, false, false],
		194: [false, false, false, false],
		195: [false, false, false, false],
		196: [false, false, false, false],
		197: [true, false, false, false],
		198: [true, true, true, false],
		199: [false, false, false, false],
		200: [true, false, false, false],
		201: [true, false, false, false],
		202: [false, false, false, false],
		203: [true, false, false, false],
		204: [true, false, true, false],
		// Warp is only possible in SNES version. Erring on the side of safety.
		//205: [true, true, true, true],
		205: [true, true, true, false],
		206: [true, false, false, false],
		207: [false, false, false, false],
		208: [true, false, true, false],
		209: [false, false, false, false],
		210: [true, false, true, false],
		211: [true, false, true, false],
		212: [false, false, false, false],
		213: [true, true, true, false],
		214: [true, false, false, false],
		215: [false, false, false, false],
		216: [false, false, false, false],
		217: [false, false, false, false],
		218: [false, false, false, false],
		219: [false, false, false, false],
		220: [true, false, false, false],
		221: [true, false, true, false],
		222: [true, false, true, false],
		223: [true, true, false, false],
		224: [true, false, false, true],
		225: [true, true, false, true],
		226: [true, false, false, false],
		227: [true, true, true, false],
		228: [true, true, false, false],
		229: [false, false, false, false],
		230: [false, false, false, false],
		231: [false, false, false, false],
		// Warp is only possible in SNES version. Erring on the side of safety.
		//232: [true, false, false, true],
		232: [true, false, false, false],
		233: [false, false, false, false],
		234: [true, false, false, false],
		235: [true, false, false, true],
		236: [false, false, false, false],
		237: [false, false, false, false],
		238: [false, false, false, false],
		239: [true, true, true, false],
		240: [true, true, true, false],
		241: [true, true, false, false],
		242: [false, false, false, false],
		243: [false, false, false, false],
		244: [false, false, false, false],
		245: [true, true, true, false],
		246: [true, false, false, true],
		247: [true, false, false, false],
		248: [false, false, false, false],
		249: [false, false, false, false],
		250: [false, false, false, false]
	};

	var mapResultBooleans = {
		[MapResult.AUTO]:           true,
		[MapResult.BACON]:          false,
		[MapResult.CURRENT]:        false,
		[MapResult.OVERWORLD]:      false,
		[MapResult.UNDERWORLD]:     false,
		[MapResult.MOON]:           false,
		[MapResult.RANDOM]:         false,
		[MapResult.STUCK]:          false,
		[MapResult.WALK_LEFT]:      true,
		[MapResult.WALK_RIGHT]:     true,
		[MapResult.WALK_UP]:        true,
		[MapResult.WALK_DOWN]:      true,
		[MapResult.WALK_SOMEWHERE]: false,
		[MapResult.WARP]:           true
	};

	var mapResultStrings = {
		[MapResult.AUTO]:           "Safe (pushed through automatically)",
		[MapResult.BACON]:          "Crispy, Crispy Bacon",
		[MapResult.CURRENT]:        "Stuck Going in Circles",
		[MapResult.OVERWORLD]:      "Stuck on the Overworld",
		[MapResult.UNDERWORLD]:     "Stuck on the Underworld",
		[MapResult.MOON]:           "Stuck on the Lunar Overworld",
		[MapResult.RANDOM]:         "Probably Stuck or Bacon",
		[MapResult.STUCK]:          "Stuck",
		[MapResult.WALK_LEFT]:      "Safe (walk left)",
		[MapResult.WALK_RIGHT]:     "Safe (walk right)",
		[MapResult.WALK_UP]:        "Safe (walk up)",
		[MapResult.WALK_DOWN]:      "Safe (walk down)",
		[MapResult.WALK_SOMEWHERE]: "Probably Stuck (but you can try walking around if you want...)",
		[MapResult.WARP]:           "Safe (cast Warp)"
	};

    /*
     * Global Variables
     */

    /*
     * Functions
     */

	var testMap = function(map, x, y) {
		var mapData = maps[map];

		// X coordinate is calculated mod 64 (the other 2 bits are used for direction)
		x = x % 64;

		// Several maps have fixed results.
		if (map == 251) {
			return MapResult.OVERWORLD;
		} else if (map == 252) {
			return MapResult.UNDERWORLD;
		} else if (map == 253) {
			return MapResult.MOON;
		} else if (map == 254) {
			return MapResult.CURRENT;
		} else if (map == 255) {
			return MapResult.RANDOM;
		}

		// If the map is not stable, the result is bacon.
		if (!mapData[0]) {
			return MapResult.BACON;
		}

		// If the player lands out of bounds, they are automatically pushed through.
		if (x >= 32 || y >= 32) {
			return MapResult.AUTO;
		}

		// Test if the map has a boundary or not.
		if (mapData[2]) {
			if (mapData[3]) {
				return MapResult.WARP;
			} else {
				return MapResult.STUCK;
			}
		} else {
			if (x == 0) {
				return MapResult.WALK_LEFT;
			} else if (y == 0) {
				return MapResult.WALK_UP;
			} else if (x == 31) {
				return MapResult.WALK_RIGHT;
			} else if (y == 31) {
				return MapResult.WALK_DOWN;
			} else if (mapData[1] && x < y && x < 16) {
				return MapResult.WALK_LEFT;
			} else if (mapData[1] && y <= x && y < 16) {
				return MapResult.WALK_UP;
			} else if (mapData[1] && x < y && y >= 16) {
				return MapResult.WALK_DOWN;
			} else if (mapData[1] && y <= x && x >= 16) {
				return MapResult.WALK_RIGHT;
			} else if (mapData[3]) {
				return MapResult.WARP;
			} else {
				return MapResult.WALK_SOMEWHERE;
			}
		}
	}

	var getFloor47Result = function(gp) {
		var map = Math.floor(gp / 256) % 256;
		var mapData = maps[map];
		var x = Math.floor(gp / 65536) % 64;
		// y depends on the frame counter and is essentially random from 0-59.

		if (!mapData) {
			return "Unknown";
		}

		if (map == 251) {
			return mapResultStrings[MapResult.OVERWORLD];
		} else if (map == 252) {
			return mapResultStrings[MapResult.UNDERWORLD];
		} else if (map == 253) {
			return mapResultStrings[MapResult.MOON];
		} else if (map == 254) {
			return mapResultStrings[MapResult.CURRENT];
		} else if (map == 255) {
			return mapResultStrings[MapResult.RANDOM];
		} else {
			if (mapData[0]) {
				if (x >= 32) {
					return mapResultStrings[MapResult.AUTO];
				} else if (mapData[2]) {
					if (mapData[3]) {
						return "Safe (cast Warp if not pushed through automatically)";
					} else {
						return "47% Safe (pushed through automatically), 53% Stuck without Bacon";
					}
				} else {
					if (x == 0) {
						return "Safe (walk left if not pushed through automatically)";
					} else if (x == 31) {
						return "Safe (walk right if not pushed through automatically)";
					} else if (mapData[1]) {
						return "Safe (pick a direction and walk until you leave the map if not pushed through automatically)";
					} else if (mapData[3]) {
						return "Safe (cast Warp if not pushed through automatically)";
					} else {
						return "47% Safe (pushed through automatically), 53% Possibly Stuck (but feel free to try walking around first, since if you reach the edge of the map, you're clear)";
					}
				}
			} else {
				return "Crispy, Crispy Bacon";
			}
		}
	}

	var testFloor47 = function(gp) {
		var mapData = maps[Math.floor(gp / 256) % 256];
		var x = Math.floor(gp / 65536) % 64;
		// y depends on the frame counter and is essentially random from 0-59.

		if (mapData && mapData[0] == true) {
			if (mapData[2] && x >= 32) {
				return true;
			} else if (!mapData[2] && (mapData[1] || x == 0 || x >= 31)) {
				return true;
			}
		}

		return false;
	}

	var getGPFix = function(gp, value) {
		var count = 0;

		while (gp > 0 && count < 100 && !testFloor47(gp)) {
			gp -= value;
			count++;
		}

		if (gp < 0) {
			count = 100;
		}

		return count;
	}

	var onSubmitGP = function() {
		var battle = document.getElementById("battle").value;
		var gp = parseInt(document.getElementById("gp").value);

		if (isNaN(gp)) {
			gp = 0;
		}

		var warning = "";

		if (battle == "valvalis") {
			gp += 19500;
			warning = "If you fight the Calbrena big doll, these results will be inaccurate.";
		} else if (battle == "calbrena") {
			gp += 14000;
			warning = "if you fight the Calbrena big doll, these results will be inaccurate.";
		}

		var fixEther = getGPFix(gp, 10000);
		var fixDwarf = getGPFix(gp, 15000);

		var fix = "N/A";
		var newResult = "N/A";

		if (fixEther == 0) {
			fix = "N/A";
			newResult = "N/A";
		} else if (fixEther == 100 && fixDwarf == 100) {
			fix = "Unable to find one. (This is almost certainly a bug in the solver. Please report this.)";
			newResult = "...reset? Kappa (Someone on Discord may be able to help.)";
		} else if (fixEther == 100) {
			fix = "Buy " + fixDwarf + " Dwarf axe" + (fixDwarf > 1 ? "s" : "");
			newResult = getFloor47Result(gp - 15000 * fixDwarf);
		} else if (fixDwarf == 100) {
			fix = "Buy " + fixEther + " ether" + (fixEther > 1 ? "s" : "");
			newResult = getFloor47Result(gp - 10000 * fixEther);
		} else {
			fix = "Either buy " + fixDwarf + " Dwarf axe" + (fixDwarf > 1 ? "s" : "") + " or buy " + fixEther + " ether" + (fixEther > 1 ? "s" : "");
			resultDwarf = getFloor47Result(gp - 15000 * fixDwarf);
			resultEther = getFloor47Result(gp - 10000 * fixEther);

			if (resultDwarf == resultEther) {
				newResult = resultDwarf;
			} else {
				newResult = "Dwarf: " + resultDwarf + "<br>Ether: " + resultEther;
			}
		}

		if (warning == "") {
			document.getElementById("warning-box").hidden = true;
		} else {
			document.getElementById("warning-box").hidden = false;
		}

		document.getElementById("current-result").innerHTML = getFloor47Result(gp);
		document.getElementById("warning-text").innerHTML = warning;
		document.getElementById("suggested-fix").innerHTML = fix;
		document.getElementById("fixed-result").innerHTML = newResult;
	}

	var onSubmitIGT = function() {
		var fields = document.getElementById("igt").value.split(':');
		var seconds = (parseInt(fields[0]) * 60 + parseInt(fields[1])) * 60;

		if (isNaN(seconds)) {
			return;
		}

		var canvas = document.getElementById("bacon");
		var ctx = canvas.getContext("2d");

		ctx.fillStyle = "#FFFFFF";
		ctx.fillRect(0, 0, 729, 253);

		ctx.fillStyle = "#C3C3C3";
		ctx.fillRect(126, 30, 603, 223);
		ctx.fillRect(0, 0, 729, 1);
		ctx.fillRect(0, 0, 1, 253);
		ctx.fillRect(728, 0, 1, 253);
		ctx.fillRect(0, 252, 729, 1);
		ctx.fillRect(0, 20, 729, 1);
		ctx.fillRect(0, 30, 729, 1);
		ctx.fillRect(80, 0, 1, 253);
		ctx.fillRect(34, 20, 1, 233);
		ctx.fillRect(185, 7, 7, 7);
		ctx.fillRect(223, 7, 7, 7);

		ctx.fillStyle = "#FFAEC9";
		ctx.fillRect(186, 8, 5, 5);

		ctx.fillStyle = "#B97A57";
		ctx.fillRect(224, 8, 5, 5);

		ctx.fillStyle = "#00A2E8";
		ctx.font = "9px monospace";
		ctx.fillText("Floor -46", 15, 9);
		ctx.fillText("Minute Range", 7, 19);
		ctx.fillText("Hex", 9, 29);
		ctx.fillText("Decimal", 37, 29);
		ctx.fillText("Game Time Results", 87, 14);
		ctx.fillText("Safe", 194, 14);
		ctx.fillText("Extra-Crispy Bacon", 232, 14);
		ctx.fillText("Template by chuckolator", 472, 14);

		var output = "";

		for (i = 0; i < 22 * 60; i++) {
			var map = seconds % 256;
			var x = Math.floor(seconds / 256) % 256;
			var y = Math.floor(seconds / 65536);

			var testResult = testMap(map, x, y);

			var h = Math.floor(seconds / 3600);
			var m = (Math.floor(seconds / 60) % 60);
			var s = seconds % 60;

			if (i % 60 == 0) {
				ctx.fillStyle = "#00A2E8";
				ctx.fillText(h + ":" + (m < 10 ? "0" : "") + m, 94, 39 + Math.floor(i / 60) * 10)

				var map2 = (map + 59) % 256;
				ctx.fillText((map < 100 ? (map < 10 ? "00" : "0") : "") + map + "〜" + (map2 < 100 ? (map2 < 10 ? "00" : "0") : "") + map2, 36, 40 + Math.floor(i / 60) * 10);
				ctx.fillText((map < 16 ? "0" : "") + map.toString(16).toUpperCase() + "〜" + (map2 < 16 ? "0" : "") + map2.toString(16).toUpperCase(), 2, 40 + Math.floor(i / 60) * 10);

				if (i > 0) {
					ctx.fillStyle = "#C3C3C3";
					ctx.fillRect(0, 31 + Math.floor(i / 60) * 10, 729, 1);
				}
			}

			if (i < 60 && (i % 5 == 0 || i == 59)) {
				ctx.fillStyle = "#00A2E8";
				ctx.fillText((s < 10 ? "0" : "") + s, 127 + (i % 60) * 10, 29);
			}

			if (i < 300) {
				output += (h < 10 ? "0" : "") + h + ":";
				output += (m < 10 ? "0" : "") + m + ":";
				output += (s < 10 ? "0" : "") + s + "\t";

				output += mapResultStrings[testResult] + "\n";
			}

			if (mapResultBooleans[testResult]) {
				ctx.fillStyle = "#FFAEC9";
			} else {
				ctx.fillStyle = "#B97A57";
			}

			ctx.fillRect(129 + (i % 60) * 10, 33 + Math.floor(i / 60) * 10, 7, 7);

			seconds++;
		}

		document.getElementById("output").innerHTML = output;
		document.getElementById("output").style.display = "block";
		document.getElementById("bacon").style.display = "block";
	}

    /*
     * Public Definition
     */

    return {
		onSubmitGP: onSubmitGP,
		onSubmitIGT: onSubmitIGT
    };
}();
