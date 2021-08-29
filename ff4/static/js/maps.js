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

	TRIGGERS = {
		"0": {
			"24": {
				"231": {
					"targetMap": 12487,
					"targetX": 10,
					"targetY": 4,
					"type": "warp"
				}
			},
			"34": {
				"81": {
					"targetMap": 12327,
					"targetX": 16,
					"targetY": 29,
					"type": "warp"
				},
				"82": {
					"targetMap": 12327,
					"targetX": 16,
					"targetY": 29,
					"type": "warp"
				},
				"101": {
					"targetMap": 12499,
					"targetX": 8,
					"targetY": 11,
					"type": "warp"
				}
			},
			"35": {
				"81": {
					"targetMap": 12327,
					"targetX": 16,
					"targetY": 29,
					"type": "warp"
				},
				"82": {
					"targetMap": 12327,
					"targetX": 16,
					"targetY": 29,
					"type": "warp"
				},
				"83": {
					"targetMap": 12293,
					"targetX": 16,
					"targetY": 28,
					"type": "warp"
				},
				"84": {
					"targetMap": 12293,
					"targetX": 16,
					"targetY": 28,
					"type": "warp"
				}
			},
			"36": {
				"84": {
					"targetMap": 12293,
					"targetX": 16,
					"targetY": 28,
					"type": "warp"
				}
			},
			"41": {
				"53": {
					"targetMap": 12321,
					"targetX": 8,
					"targetY": 30,
					"type": "warp"
				}
			},
			"45": {
				"235": {
					"targetMap": 12328,
					"targetX": 16,
					"targetY": 31,
					"type": "warp"
				},
				"236": {
					"targetMap": 12328,
					"targetX": 16,
					"targetY": 31,
					"type": "warp"
				}
			},
			"46": {
				"235": {
					"targetMap": 12328,
					"targetX": 16,
					"targetY": 31,
					"type": "warp"
				},
				"236": {
					"targetMap": 12328,
					"targetX": 16,
					"targetY": 31,
					"type": "warp"
				}
			},
			"74": {
				"53": {
					"targetMap": 12428,
					"targetX": 5,
					"targetY": 7,
					"type": "warp"
				}
			},
			"76": {
				"132": {
					"targetMap": 12396,
					"targetX": 2,
					"targetY": 28,
					"type": "warp"
				}
			},
			"84": {
				"119": {
					"targetMap": 12396,
					"targetX": 27,
					"targetY": 3,
					"type": "warp"
				}
			},
			"86": {
				"79": {
					"targetMap": 12500,
					"targetX": 8,
					"targetY": 11,
					"type": "warp"
				}
			},
			"89": {
				"163": {
					"targetMap": 12498,
					"targetX": 8,
					"targetY": 11,
					"type": "warp"
				}
			},
			"96": {
				"119": {
					"targetMap": 12289,
					"targetX": 3,
					"targetY": 16,
					"type": "warp"
				}
			},
			"97": {
				"119": {
					"targetMap": 12289,
					"targetX": 28,
					"targetY": 16,
					"type": "warp"
				}
			},
			"100": {
				"157": {
					"targetMap": 12288,
					"targetX": 16,
					"targetY": 30,
					"type": "warp"
				},
				"158": {
					"targetMap": 12288,
					"targetX": 16,
					"targetY": 30,
					"type": "warp"
				}
			},
			"101": {
				"156": {
					"targetMap": 12324,
					"targetX": 16,
					"targetY": 30,
					"type": "warp"
				},
				"157": {
					"targetMap": 12324,
					"targetX": 16,
					"targetY": 30,
					"type": "warp"
				}
			},
			"102": {
				"156": {
					"targetMap": 12324,
					"targetX": 16,
					"targetY": 30,
					"type": "warp"
				},
				"157": {
					"targetMap": 12324,
					"targetX": 16,
					"targetY": 30,
					"type": "warp"
				}
			},
			"103": {
				"157": {
					"targetMap": 12288,
					"targetX": 16,
					"targetY": 30,
					"type": "warp"
				},
				"158": {
					"targetMap": 12288,
					"targetX": 16,
					"targetY": 30,
					"type": "warp"
				}
			},
			"104": {
				"215": {
					"targetMap": 12294,
					"targetX": 16,
					"targetY": 31,
					"type": "warp"
				}
			},
			"105": {
				"216": {
					"targetMap": 12294,
					"targetX": 16,
					"targetY": 31,
					"type": "warp"
				}
			},
			"118": {
				"57": {
					"targetMap": 12325,
					"targetX": 16,
					"targetY": 30,
					"type": "warp"
				},
				"58": {
					"targetMap": 12325,
					"targetX": 16,
					"targetY": 30,
					"type": "warp"
				}
			},
			"119": {
				"57": {
					"targetMap": 12325,
					"targetX": 16,
					"targetY": 30,
					"type": "warp"
				},
				"58": {
					"targetMap": 12325,
					"targetX": 16,
					"targetY": 30,
					"type": "warp"
				},
				"62": {
					"event": 16,
					"type": "event"
				}
			},
			"125": {
				"66": {
					"targetMap": 12406,
					"targetX": 16,
					"targetY": 11,
					"type": "warp"
				},
				"104": {
					"targetMap": 12290,
					"targetX": 15,
					"targetY": 30,
					"type": "warp"
				}
			},
			"134": {
				"72": {
					"targetMap": 12404,
					"targetX": 16,
					"targetY": 9,
					"type": "warp"
				}
			},
			"136": {
				"56": {
					"targetMap": 12407,
					"targetX": 15,
					"targetY": 4,
					"type": "warp"
				}
			},
			"138": {
				"77": {
					"targetMap": 12403,
					"targetX": 24,
					"targetY": 9,
					"type": "warp"
				},
				"83": {
					"targetMap": 12399,
					"targetX": 26,
					"targetY": 29,
					"type": "warp"
				}
			},
			"152": {
				"49": {
					"targetMap": 12414,
					"targetX": 15,
					"targetY": 28,
					"type": "warp"
				}
			},
			"154": {
				"199": {
					"targetMap": 12291,
					"targetX": 16,
					"targetY": 31,
					"type": "warp"
				}
			},
			"155": {
				"199": {
					"targetMap": 12291,
					"targetX": 16,
					"targetY": 31,
					"type": "warp"
				}
			},
			"160": {
				"49": {
					"targetMap": 12416,
					"targetX": 21,
					"targetY": 30,
					"type": "warp"
				}
			},
			"210": {
				"130": {
					"targetMap": 12292,
					"targetX": 17,
					"targetY": 30,
					"type": "warp"
				}
			},
			"213": {
				"209": {
					"targetMap": 12497,
					"targetX": 8,
					"targetY": 11,
					"type": "warp"
				}
			},
			"214": {
				"57": {
					"targetMap": 12326,
					"targetX": 15,
					"targetY": 29,
					"type": "warp"
				},
				"58": {
					"targetMap": 12326,
					"targetX": 15,
					"targetY": 29,
					"type": "warp"
				}
			},
			"215": {
				"57": {
					"targetMap": 12326,
					"targetX": 15,
					"targetY": 29,
					"type": "warp"
				},
				"58": {
					"targetMap": 12326,
					"targetX": 15,
					"targetY": 29,
					"type": "warp"
				}
			},
			"218": {
				"199": {
					"targetMap": 12420,
					"targetX": 20,
					"targetY": 31,
					"type": "warp"
				}
			},
			"219": {
				"136": {
					"targetMap": 12448,
					"targetX": 7,
					"targetY": 20,
					"type": "warp"
				}
			},
			"221": {
				"56": {
					"event": 43,
					"type": "event"
				}
			},
			"228": {
				"47": {
					"targetMap": 12495,
					"targetX": 8,
					"targetY": 11,
					"type": "warp"
				}
			}
		},
		"4096": {
			"13": {
				"14": {
					"targetMap": 12613,
					"targetX": 16,
					"targetY": 2,
					"type": "warp"
				}
			},
			"27": {
				"86": {
					"targetMap": 12598,
					"targetX": 17,
					"targetY": 10,
					"type": "warp"
				}
			},
			"46": {
				"109": {
					"targetMap": 12612,
					"targetX": 4,
					"targetY": 10,
					"type": "warp"
				}
			},
			"48": {
				"15": {
					"event": 88,
					"type": "event"
				}
			},
			"49": {
				"15": {
					"event": 88,
					"type": "event"
				}
			},
			"51": {
				"16": {
					"event": 54,
					"type": "event"
				}
			},
			"54": {
				"17": {
					"event": 54,
					"type": "event"
				}
			},
			"55": {
				"20": {
					"event": 54,
					"type": "event"
				}
			},
			"62": {
				"121": {
					"targetMap": 12545,
					"targetX": 17,
					"targetY": 27,
					"type": "warp"
				}
			},
			"63": {
				"121": {
					"targetMap": 12545,
					"targetX": 17,
					"targetY": 27,
					"type": "warp"
				},
				"122": {
					"targetMap": 12545,
					"targetX": 17,
					"targetY": 27,
					"type": "warp"
				}
			},
			"91": {
				"83": {
					"targetMap": 12559,
					"targetX": 3,
					"targetY": 14,
					"type": "warp"
				}
			},
			"99": {
				"81": {
					"targetMap": 12551,
					"targetX": 15,
					"targetY": 30,
					"type": "warp"
				},
				"82": {
					"targetMap": 12551,
					"targetX": 15,
					"targetY": 30,
					"type": "warp"
				}
			},
			"100": {
				"81": {
					"targetMap": 12551,
					"targetX": 15,
					"targetY": 30,
					"type": "warp"
				},
				"82": {
					"targetMap": 12551,
					"targetX": 15,
					"targetY": 30,
					"type": "warp"
				}
			},
			"104": {
				"123": {
					"targetMap": 12544,
					"targetX": 6,
					"targetY": 11,
					"type": "warp"
				}
			}
		},
		"8192": {
			"18": {
				"14": {
					"targetMap": 12643,
					"targetX": 19,
					"targetY": 5,
					"type": "warp"
				},
				"20": {
					"targetMap": 12643,
					"targetX": 12,
					"targetY": 30,
					"type": "warp"
				}
			},
			"28": {
				"25": {
					"targetMap": 12640,
					"targetX": 16,
					"targetY": 28,
					"type": "warp"
				}
			},
			"33": {
				"39": {
					"targetMap": 12645,
					"targetX": 10,
					"targetY": 16,
					"type": "warp"
				}
			},
			"40": {
				"28": {
					"targetMap": 12644,
					"targetX": 9,
					"targetY": 25,
					"type": "warp"
				}
			},
			"41": {
				"24": {
					"targetMap": 12644,
					"targetX": 21,
					"targetY": 6,
					"type": "warp"
				}
			},
			"61": {
				"23": {
					"targetMap": 12634,
					"targetX": 136,
					"targetY": 7,
					"type": "warp"
				}
			}
		},
		"12288": {
			"3": {
				"6": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				},
				"19": {
					"targetMap": 12356,
					"targetX": 2,
					"targetY": 6,
					"type": "warp"
				}
			},
			"4": {
				"26": {
					"targetMap": 12439,
					"targetX": 5,
					"targetY": 11,
					"type": "warp"
				}
			},
			"6": {
				"0": {
					"targetMap": 0,
					"targetX": 102,
					"targetY": 158,
					"type": "warp"
				},
				"11": {
					"targetMap": 12301,
					"targetX": 10,
					"targetY": 8,
					"type": "warp"
				}
			},
			"8": {
				"2": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"9": {
				"26": {
					"targetMap": 12524,
					"targetX": 5,
					"targetY": 7,
					"type": "warp"
				}
			},
			"12": {
				"10": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"14": {
				"16": {
					"targetMap": 12300,
					"targetX": 7,
					"targetY": 9,
					"type": "warp"
				},
				"24": {
					"targetMap": 12465,
					"targetX": 7,
					"targetY": 14,
					"type": "warp"
				}
			},
			"15": {
				"31": {
					"targetMap": 0,
					"targetX": 102,
					"targetY": 158,
					"type": "warp"
				}
			},
			"16": {
				"31": {
					"targetMap": 0,
					"targetX": 102,
					"targetY": 158,
					"type": "warp"
				}
			},
			"17": {
				"31": {
					"targetMap": 0,
					"targetX": 102,
					"targetY": 158,
					"type": "warp"
				}
			},
			"18": {
				"19": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"20": {
				"20": {
					"targetMap": 12302,
					"targetX": 9,
					"targetY": 7,
					"type": "warp"
				},
				"26": {
					"targetMap": 12299,
					"targetX": 14,
					"targetY": 17,
					"type": "warp"
				}
			},
			"24": {
				"27": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"27": {
				"26": {
					"contents": 226,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"29": {
				"29": {
					"contents": 226,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"31": {
				"7": {
					"targetMap": 0,
					"targetX": 102,
					"targetY": 158,
					"type": "warp"
				}
			}
		},
		"12289": {
			"2": {
				"16": {
					"targetMap": 0,
					"targetX": 95,
					"targetY": 119,
					"type": "warp"
				}
			},
			"8": {
				"16": {
					"event": 12,
					"type": "event"
				}
			},
			"11": {
				"7": {
					"targetMap": 12303,
					"targetX": 4,
					"targetY": 13,
					"type": "warp"
				}
			},
			"14": {
				"25": {
					"targetMap": 12513,
					"targetX": 4,
					"targetY": 7,
					"type": "warp"
				}
			},
			"15": {
				"13": {
					"targetMap": 12512,
					"targetX": 14,
					"targetY": 7,
					"type": "warp"
				}
			},
			"16": {
				"25": {
					"targetMap": 12514,
					"targetX": 4,
					"targetY": 7,
					"type": "warp"
				}
			},
			"21": {
				"8": {
					"contents": 100,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"28": {
				"20": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"29": {
				"16": {
					"targetMap": 0,
					"targetX": 95,
					"targetY": 119,
					"type": "warp"
				},
				"20": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12290": {
			"9": {
				"18": {
					"targetMap": 12516,
					"targetX": 4,
					"targetY": 7,
					"type": "warp"
				},
				"25": {
					"targetMap": 12465,
					"targetX": 7,
					"targetY": 14,
					"type": "warp"
				}
			},
			"14": {
				"17": {
					"targetMap": 12304,
					"targetX": 20,
					"targetY": 14,
					"type": "warp"
				},
				"31": {
					"targetMap": 0,
					"targetX": 124,
					"targetY": 104,
					"type": "warp"
				}
			},
			"15": {
				"26": {
					"event": 13,
					"type": "event"
				},
				"31": {
					"targetMap": 0,
					"targetX": 125,
					"targetY": 105,
					"type": "warp"
				}
			},
			"16": {
				"31": {
					"targetMap": 0,
					"targetX": 126,
					"targetY": 104,
					"type": "warp"
				}
			},
			"23": {
				"23": {
					"targetMap": 12515,
					"targetX": 4,
					"targetY": 7,
					"type": "warp"
				}
			},
			"24": {
				"18": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"28": {
				"13": {
					"targetMap": 12306,
					"targetX": 4,
					"targetY": 15,
					"type": "warp"
				}
			}
		},
		"12291": {
			"2": {
				"24": {
					"targetMap": 12465,
					"targetX": 7,
					"targetY": 14,
					"type": "warp"
				}
			},
			"7": {
				"23": {
					"targetMap": 12517,
					"targetX": 4,
					"targetY": 7,
					"type": "warp"
				}
			},
			"9": {
				"23": {
					"targetMap": 12518,
					"targetX": 4,
					"targetY": 7,
					"type": "warp"
				}
			},
			"15": {
				"31": {
					"targetMap": 0,
					"targetX": 154,
					"targetY": 200,
					"type": "warp"
				}
			},
			"16": {
				"8": {
					"targetMap": 12310,
					"targetX": 14,
					"targetY": 9,
					"type": "warp"
				},
				"28": {
					"event": 73,
					"type": "event"
				},
				"31": {
					"targetMap": 0,
					"targetX": 154,
					"targetY": 200,
					"type": "warp"
				}
			},
			"17": {
				"31": {
					"targetMap": 0,
					"targetX": 154,
					"targetY": 200,
					"type": "warp"
				}
			},
			"23": {
				"24": {
					"targetMap": 12307,
					"targetX": 15,
					"targetY": 9,
					"type": "warp"
				}
			},
			"25": {
				"17": {
					"targetMap": 12425,
					"targetX": 4,
					"targetY": 7,
					"type": "warp"
				}
			},
			"27": {
				"26": {
					"targetMap": 12519,
					"targetX": 5,
					"targetY": 7,
					"type": "warp"
				}
			}
		},
		"12292": {
			"5": {
				"14": {
					"targetMap": 12523,
					"targetX": 5,
					"targetY": 7,
					"type": "warp"
				}
			},
			"12": {
				"13": {
					"targetMap": 12521,
					"targetX": 4,
					"targetY": 7,
					"type": "warp"
				},
				"24": {
					"targetMap": 12520,
					"targetX": 14,
					"targetY": 7,
					"type": "warp"
				}
			},
			"13": {
				"8": {
					"contents": 5000,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"16": {
				"13": {
					"targetMap": 12522,
					"targetX": 4,
					"targetY": 7,
					"type": "warp"
				}
			},
			"17": {
				"31": {
					"type": "return"
				}
			},
			"23": {
				"8": {
					"contents": 59,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"30": {
				"17": {
					"contents": 17,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12293": {
			"1": {
				"5": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				},
				"7": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"4": {
				"3": {
					"contents": 1000,
					"treasure": "gp",
					"type": "treasure"
				},
				"7": {
					"contents": 210,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"5": {
				"22": {
					"targetMap": 12296,
					"targetX": 4,
					"targetY": 7,
					"type": "warp"
				}
			},
			"8": {
				"24": {
					"targetMap": 12297,
					"targetX": 4,
					"targetY": 7,
					"type": "warp"
				}
			},
			"12": {
				"13": {
					"targetMap": 12312,
					"targetX": 12,
					"targetY": 12,
					"type": "warp"
				}
			},
			"16": {
				"29": {
					"type": "return"
				}
			},
			"17": {
				"17": {
					"targetMap": 12298,
					"targetX": 5,
					"targetY": 7,
					"type": "warp"
				}
			},
			"22": {
				"19": {
					"targetMap": 12295,
					"targetX": 14,
					"targetY": 7,
					"type": "warp"
				}
			},
			"26": {
				"4": {
					"targetMap": 12316,
					"targetX": 2,
					"targetY": 9,
					"type": "warp"
				}
			},
			"28": {
				"17": {
					"targetMap": 12465,
					"targetX": 7,
					"targetY": 14,
					"type": "warp"
				}
			}
		},
		"12294": {
			"5": {
				"25": {
					"targetMap": 12318,
					"targetX": 16,
					"targetY": 5,
					"type": "warp"
				}
			},
			"9": {
				"15": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"15": {
				"21": {
					"targetMap": 12427,
					"targetX": 9,
					"targetY": 11,
					"type": "warp"
				},
				"31": {
					"type": "return"
				}
			},
			"16": {
				"31": {
					"type": "return"
				}
			},
			"17": {
				"31": {
					"type": "return"
				}
			},
			"23": {
				"8": {
					"targetMap": 12357,
					"targetX": 4,
					"targetY": 7,
					"type": "warp"
				},
				"19": {
					"targetMap": 12320,
					"targetX": 14,
					"targetY": 15,
					"type": "warp"
				}
			},
			"25": {
				"8": {
					"targetMap": 12358,
					"targetX": 4,
					"targetY": 7,
					"type": "warp"
				}
			}
		},
		"12295": {
			"14": {
				"10": {
					"type": "return"
				}
			}
		},
		"12296": {
			"4": {
				"10": {
					"type": "return"
				}
			}
		},
		"12297": {
			"4": {
				"10": {
					"type": "return"
				}
			}
		},
		"12298": {
			"5": {
				"10": {
					"type": "return"
				}
			}
		},
		"12299": {
			"10": {
				"17": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"14": {
				"21": {
					"type": "return"
				}
			},
			"16": {
				"3": {
					"contents": 226,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"17": {
				"3": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"18": {
				"5": {
					"event": 1,
					"type": "event"
				}
			},
			"19": {
				"3": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12300": {
			"5": {
				"4": {
					"contents": 3,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"7": {
				"12": {
					"type": "return"
				}
			},
			"9": {
				"4": {
					"contents": 2000,
					"treasure": "gp",
					"type": "treasure"
				}
			}
		},
		"12301": {
			"10": {
				"11": {
					"type": "return"
				}
			}
		},
		"12302": {
			"1": {
				"3": {
					"contents": 226,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"5": {
				"3": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"9": {
				"10": {
					"type": "return"
				}
			}
		},
		"12303": {
			"4": {
				"16": {
					"type": "return"
				}
			},
			"22": {
				"5": {
					"contents": 123,
					"treasure": "item",
					"type": "treasure"
				},
				"25": {
					"contents": 11,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"23": {
				"5": {
					"contents": 141,
					"treasure": "item",
					"type": "treasure"
				},
				"7": {
					"contents": 168,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12304": {
			"20": {
				"9": {
					"targetMap": 12305,
					"targetX": 15,
					"targetY": 11,
					"type": "warp"
				},
				"17": {
					"type": "return"
				}
			}
		},
		"12305": {
			"15": {
				"13": {
					"type": "return"
				}
			}
		},
		"12306": {
			"4": {
				"6": {
					"event": 41,
					"type": "event"
				},
				"18": {
					"targetMap": 12290,
					"targetX": 28,
					"targetY": 14,
					"type": "warp"
				}
			}
		},
		"12307": {
			"15": {
				"3": {
					"targetMap": 12308,
					"targetX": 14,
					"targetY": 9,
					"type": "warp"
				},
				"12": {
					"type": "return"
				}
			}
		},
		"12308": {
			"14": {
				"10": {
					"type": "return"
				}
			}
		},
		"12309": {},
		"12310": {
			"14": {
				"0": {
					"targetMap": 12424,
					"targetX": 11,
					"targetY": 18,
					"type": "warp"
				},
				"12": {
					"targetMap": 12291,
					"targetX": 16,
					"targetY": 9,
					"type": "warp"
				}
			}
		},
		"12311": {
			"5": {
				"12": {
					"targetMap": 12424,
					"targetX": 11,
					"targetY": 5,
					"type": "warp"
				}
			}
		},
		"12312": {
			"1": {
				"1": {
					"targetMap": 12313,
					"targetX": 1,
					"targetY": 11,
					"type": "warp"
				}
			},
			"12": {
				"1": {
					"event": 1,
					"type": "event"
				},
				"15": {
					"type": "return"
				}
			},
			"25": {
				"6": {
					"targetMap": 12314,
					"targetX": 3,
					"targetY": 2,
					"type": "warp"
				}
			}
		},
		"12313": {
			"1": {
				"12": {
					"type": "return"
				}
			}
		},
		"12314": {
			"3": {
				"2": {
					"type": "return"
				}
			},
			"20": {
				"0": {
					"event": 1,
					"type": "event"
				},
				"3": {
					"event": 1,
					"type": "event"
				}
			}
		},
		"12316": {
			"2": {
				"2": {
					"targetMap": 12317,
					"targetX": 3,
					"targetY": 5,
					"type": "warp"
				},
				"12": {
					"type": "return"
				}
			},
			"8": {
				"3": {
					"event": 1,
					"type": "event"
				}
			}
		},
		"12317": {
			"3": {
				"5": {
					"type": "return"
				}
			},
			"6": {
				"1": {
					"event": 1,
					"type": "event"
				}
			}
		},
		"12318": {
			"1": {
				"3": {
					"targetMap": 12319,
					"targetX": 3,
					"targetY": 12,
					"type": "warp"
				}
			},
			"16": {
				"8": {
					"type": "return"
				}
			}
		},
		"12319": {
			"3": {
				"12": {
					"type": "return"
				}
			}
		},
		"12320": {
			"14": {
				"18": {
					"type": "return"
				}
			}
		},
		"12321": {
			"7": {
				"30": {
					"type": "return"
				}
			},
			"8": {
				"30": {
					"type": "return"
				}
			},
			"20": {
				"29": {
					"contents": 235,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"31": {
				"8": {
					"contents": 235,
					"treasure": "item",
					"type": "treasure"
				},
				"9": {
					"contents": 235,
					"treasure": "item",
					"type": "treasure"
				},
				"10": {
					"type": "return"
				},
				"11": {
					"type": "return"
				},
				"12": {
					"type": "return"
				}
			}
		},
		"12324": {
			"4": {
				"18": {
					"targetMap": 12335,
					"targetX": 2,
					"targetY": 5,
					"type": "warp"
				}
			},
			"6": {
				"9": {
					"targetMap": 12338,
					"targetX": 5,
					"targetY": 6,
					"type": "warp"
				},
				"13": {
					"event": 22,
					"type": "event"
				}
			},
			"8": {
				"13": {
					"targetMap": 12333,
					"targetX": 2,
					"targetY": 2,
					"type": "warp"
				},
				"17": {
					"targetMap": 12333,
					"targetX": 2,
					"targetY": 8,
					"type": "warp"
				}
			},
			"10": {
				"0": {
					"event": 46,
					"type": "event"
				},
				"9": {
					"targetMap": 12337,
					"targetX": 1,
					"targetY": 5,
					"type": "warp"
				}
			},
			"12": {
				"8": {
					"type": "return"
				},
				"13": {
					"targetMap": 12330,
					"targetX": 1,
					"targetY": 6,
					"type": "warp"
				}
			},
			"14": {
				"31": {
					"targetMap": 0,
					"targetX": 102,
					"targetY": 158,
					"type": "warp"
				}
			},
			"15": {
				"15": {
					"targetMap": 12330,
					"targetX": 8,
					"targetY": 12,
					"type": "warp"
				},
				"26": {
					"event": 1,
					"type": "event"
				},
				"31": {
					"targetMap": 0,
					"targetX": 102,
					"targetY": 158,
					"type": "warp"
				}
			},
			"16": {
				"15": {
					"targetMap": 12330,
					"targetX": 8,
					"targetY": 12,
					"type": "warp"
				},
				"26": {
					"event": 1,
					"type": "event"
				},
				"31": {
					"targetMap": 0,
					"targetX": 102,
					"targetY": 158,
					"type": "warp"
				}
			},
			"17": {
				"31": {
					"targetMap": 0,
					"targetX": 102,
					"targetY": 158,
					"type": "warp"
				}
			},
			"19": {
				"13": {
					"targetMap": 12330,
					"targetX": 16,
					"targetY": 10,
					"type": "warp"
				}
			},
			"25": {
				"9": {
					"targetMap": 12341,
					"targetX": 5,
					"targetY": 6,
					"type": "warp"
				}
			},
			"28": {
				"14": {
					"targetMap": 12334,
					"targetX": 18,
					"targetY": 2,
					"type": "warp"
				},
				"18": {
					"targetMap": 12334,
					"targetX": 18,
					"targetY": 8,
					"type": "warp"
				}
			}
		},
		"12325": {
			"16": {
				"11": {
					"targetMap": 12351,
					"targetX": 8,
					"targetY": 15,
					"type": "warp"
				}
			},
			"29": {
				"12": {
					"targetMap": 12354,
					"targetX": 13,
					"targetY": 8,
					"type": "warp"
				}
			}
		},
		"12326": {
			"13": {
				"7": {
					"targetMap": 12368,
					"targetX": 8,
					"targetY": 7,
					"type": "warp"
				}
			},
			"15": {
				"10": {
					"targetMap": 12360,
					"targetX": 4,
					"targetY": 13,
					"type": "warp"
				},
				"14": {
					"targetMap": 12359,
					"targetX": 11,
					"targetY": 11,
					"type": "warp"
				},
				"31": {
					"targetMap": 0,
					"targetX": 215,
					"targetY": 59,
					"type": "warp"
				}
			},
			"17": {
				"7": {
					"targetMap": 12365,
					"targetX": 2,
					"targetY": 7,
					"type": "warp"
				}
			}
		},
		"12327": {
			"7": {
				"4": {
					"targetMap": 12373,
					"targetX": 2,
					"targetY": 7,
					"type": "warp"
				}
			},
			"9": {
				"11": {
					"targetMap": 12376,
					"targetX": 2,
					"targetY": 5,
					"type": "warp"
				}
			},
			"15": {
				"30": {
					"targetMap": 0,
					"targetX": 35,
					"targetY": 82,
					"type": "warp"
				}
			},
			"16": {
				"10": {
					"targetMap": 12373,
					"targetX": 9,
					"targetY": 15,
					"type": "warp"
				},
				"30": {
					"targetMap": 0,
					"targetX": 35,
					"targetY": 82,
					"type": "warp"
				}
			},
			"17": {
				"30": {
					"targetMap": 0,
					"targetX": 35,
					"targetY": 82,
					"type": "warp"
				}
			},
			"23": {
				"11": {
					"targetMap": 12377,
					"targetX": 4,
					"targetY": 6,
					"type": "warp"
				}
			},
			"25": {
				"4": {
					"targetMap": 12373,
					"targetX": 16,
					"targetY": 7,
					"type": "warp"
				}
			}
		},
		"12328": {
			"10": {
				"12": {
					"targetMap": 12385,
					"targetX": 6,
					"targetY": 8,
					"type": "warp"
				}
			},
			"15": {
				"11": {
					"targetMap": 12382,
					"targetX": 7,
					"targetY": 12,
					"type": "warp"
				}
			},
			"16": {
				"11": {
					"targetMap": 12382,
					"targetX": 7,
					"targetY": 12,
					"type": "warp"
				}
			},
			"21": {
				"12": {
					"targetMap": 12387,
					"targetX": 7,
					"targetY": 8,
					"type": "warp"
				}
			}
		},
		"12330": {
			"1": {
				"5": {
					"targetMap": 12324,
					"targetX": 12,
					"targetY": 13,
					"type": "warp"
				}
			},
			"5": {
				"5": {
					"targetMap": 12390,
					"targetX": 4,
					"targetY": 8,
					"type": "warp"
				}
			},
			"6": {
				"10": {
					"event": 3,
					"type": "event"
				}
			},
			"8": {
				"0": {
					"targetMap": 12331,
					"targetX": 14,
					"targetY": 7,
					"type": "warp"
				},
				"15": {
					"targetMap": 12324,
					"targetX": 15,
					"targetY": 18,
					"type": "warp"
				}
			},
			"11": {
				"5": {
					"targetMap": 12391,
					"targetX": 4,
					"targetY": 8,
					"type": "warp"
				}
			},
			"13": {
				"3": {
					"contents": 300,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"14": {
				"3": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				},
				"5": {
					"event": 1,
					"type": "event"
				}
			},
			"15": {
				"3": {
					"contents": 226,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"16": {
				"10": {
					"targetMap": 12324,
					"targetX": 19,
					"targetY": 13,
					"type": "warp"
				}
			}
		},
		"12331": {
			"14": {
				"2": {
					"event": 34,
					"type": "event"
				},
				"9": {
					"targetMap": 12330,
					"targetX": 8,
					"targetY": 1,
					"type": "warp"
				}
			}
		},
		"12332": {
			"8": {
				"13": {
					"event": 35,
					"type": "event"
				}
			},
			"29": {
				"2": {
					"type": "return"
				},
				"3": {
					"type": "return"
				}
			},
			"30": {
				"3": {
					"type": "return"
				},
				"29": {
					"targetMap": 12483,
					"targetX": 25,
					"targetY": 8,
					"type": "warp"
				}
			}
		},
		"12333": {
			"2": {
				"2": {
					"targetMap": 12324,
					"targetX": 8,
					"targetY": 13,
					"type": "warp"
				},
				"6": {
					"event": 4,
					"type": "event"
				},
				"12": {
					"targetMap": 12324,
					"targetX": 8,
					"targetY": 18,
					"type": "warp"
				}
			}
		},
		"12334": {
			"2": {
				"15": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				},
				"16": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"3": {
				"15": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				},
				"16": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"4": {
				"15": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				},
				"16": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"14": {
				"4": {
					"event": 1,
					"type": "event"
				}
			},
			"18": {
				"2": {
					"targetMap": 12324,
					"targetX": 28,
					"targetY": 14,
					"type": "warp"
				},
				"12": {
					"targetMap": 12324,
					"targetX": 28,
					"targetY": 19,
					"type": "warp"
				}
			}
		},
		"12335": {
			"1": {
				"3": {
					"targetMap": 12336,
					"targetX": 1,
					"targetY": 1,
					"type": "warp"
				}
			},
			"2": {
				"8": {
					"type": "return"
				}
			}
		},
		"12336": {
			"1": {
				"0": {
					"type": "return"
				}
			}
		},
		"12337": {
			"1": {
				"8": {
					"type": "return"
				}
			},
			"11": {
				"7": {
					"targetMap": 12324,
					"targetX": 12,
					"targetY": 8,
					"type": "warp"
				}
			}
		},
		"12338": {
			"5": {
				"4": {
					"targetMap": 12339,
					"targetX": 5,
					"targetY": 4,
					"type": "warp"
				},
				"9": {
					"targetMap": 12324,
					"targetX": 6,
					"targetY": 10,
					"type": "warp"
				}
			}
		},
		"12339": {
			"5": {
				"4": {
					"targetMap": 12338,
					"targetX": 5,
					"targetY": 4,
					"type": "warp"
				}
			},
			"9": {
				"4": {
					"targetMap": 12340,
					"targetX": 9,
					"targetY": 4,
					"type": "warp"
				}
			}
		},
		"12340": {
			"3": {
				"4": {
					"event": 5,
					"type": "event"
				}
			},
			"9": {
				"4": {
					"targetMap": 12339,
					"targetX": 9,
					"targetY": 4,
					"type": "warp"
				}
			}
		},
		"12341": {
			"1": {
				"4": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				},
				"5": {
					"targetMap": 12344,
					"targetX": 1,
					"targetY": 5,
					"type": "warp"
				}
			},
			"2": {
				"4": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"3": {
				"3": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"5": {
				"9": {
					"type": "return"
				}
			},
			"8": {
				"4": {
					"contents": 226,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"9": {
				"4": {
					"targetMap": 12342,
					"targetX": 9,
					"targetY": 4,
					"type": "warp"
				}
			}
		},
		"12342": {
			"1": {
				"4": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				},
				"5": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"7": {
				"3": {
					"targetMap": 12343,
					"targetX": 7,
					"targetY": 3,
					"type": "warp"
				}
			},
			"9": {
				"4": {
					"type": "return"
				}
			}
		},
		"12343": {
			"4": {
				"5": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"5": {
				"5": {
					"contents": 226,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"6": {
				"5": {
					"contents": 226,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"7": {
				"3": {
					"type": "return"
				},
				"4": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12344": {
			"1": {
				"5": {
					"type": "return"
				}
			},
			"4": {
				"3": {
					"contents": 211,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"22": {
				"5": {
					"event": 7,
					"type": "event"
				}
			},
			"24": {
				"5": {
					"targetMap": 12345,
					"targetX": 1,
					"targetY": 1,
					"type": "warp"
				}
			}
		},
		"12345": {
			"1": {
				"0": {
					"type": "return"
				}
			},
			"8": {
				"7": {
					"event": 8,
					"type": "event"
				}
			}
		},
		"12346": {
			"3": {
				"3": {
					"targetMap": 12356,
					"targetX": 2,
					"targetY": 4,
					"type": "warp"
				}
			},
			"13": {
				"29": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"16": {
				"29": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"19": {
				"29": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"27": {
				"7": {
					"targetMap": 12347,
					"targetX": 1,
					"targetY": 5,
					"type": "warp"
				}
			}
		},
		"12347": {
			"1": {
				"6": {
					"targetMap": 12346,
					"targetX": 27,
					"targetY": 8,
					"type": "warp"
				},
				"12": {
					"contents": 500,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"7": {
				"19": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"20": {
				"17": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"30": {
				"3": {
					"targetMap": 12350,
					"targetX": 2,
					"targetY": 26,
					"type": "warp"
				}
			}
		},
		"12348": {
			"2": {
				"9": {
					"targetMap": 12349,
					"targetX": 4,
					"targetY": 11,
					"type": "warp"
				}
			},
			"6": {
				"17": {
					"targetMap": 12350,
					"targetX": 8,
					"targetY": 6,
					"type": "warp"
				}
			},
			"14": {
				"2": {
					"targetMap": 12324,
					"targetX": 10,
					"targetY": 0,
					"type": "warp"
				}
			}
		},
		"12349": {
			"4": {
				"12": {
					"type": "return"
				}
			},
			"17": {
				"5": {
					"contents": 32,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12350": {
			"2": {
				"7": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				},
				"27": {
					"targetMap": 12347,
					"targetX": 30,
					"targetY": 4,
					"type": "warp"
				}
			},
			"8": {
				"5": {
					"targetMap": 12348,
					"targetX": 6,
					"targetY": 16,
					"type": "warp"
				}
			}
		},
		"12351": {
			"8": {
				"7": {
					"targetMap": 12352,
					"targetX": 8,
					"targetY": 8,
					"type": "warp"
				},
				"16": {
					"type": "return"
				}
			}
		},
		"12352": {
			"8": {
				"8": {
					"type": "return"
				},
				"13": {
					"targetMap": 12353,
					"targetX": 13,
					"targetY": 13,
					"type": "warp"
				}
			},
			"11": {
				"4": {
					"contents": 226,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12353": {
			"13": {
				"11": {
					"event": 17,
					"type": "event"
				},
				"14": {
					"type": "return"
				}
			}
		},
		"12354": {
			"1": {
				"3": {
					"contents": 168,
					"treasure": "item",
					"type": "treasure"
				},
				"9": {
					"targetMap": 12355,
					"targetX": 4,
					"targetY": 1,
					"type": "warp"
				}
			},
			"4": {
				"3": {
					"contents": 120,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"5": {
				"3": {
					"contents": 78,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"13": {
				"4": {
					"event": 1,
					"type": "event"
				},
				"11": {
					"type": "return"
				}
			}
		},
		"12355": {
			"1": {
				"5": {
					"contents": 85,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"3": {
				"4": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				},
				"5": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"4": {
				"0": {
					"type": "return"
				},
				"4": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				},
				"5": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"5": {
				"4": {
					"contents": 300,
					"treasure": "gp",
					"type": "treasure"
				},
				"5": {
					"contents": 200,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"7": {
				"4": {
					"contents": 84,
					"treasure": "item",
					"type": "treasure"
				},
				"5": {
					"contents": 85,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12356": {
			"2": {
				"4": {
					"targetMap": 12346,
					"targetX": 3,
					"targetY": 4,
					"type": "warp"
				},
				"10": {
					"targetMap": 12288,
					"targetX": 3,
					"targetY": 20,
					"type": "warp"
				}
			},
			"14": {
				"5": {
					"contents": 1000,
					"treasure": "gp",
					"type": "treasure"
				}
			}
		},
		"12357": {
			"4": {
				"10": {
					"type": "return"
				}
			}
		},
		"12358": {
			"4": {
				"10": {
					"type": "return"
				}
			}
		},
		"12359": {
			"5": {
				"7": {
					"targetMap": 12364,
					"targetX": 20,
					"targetY": 7,
					"type": "warp"
				}
			},
			"11": {
				"3": {
					"targetMap": 12360,
					"targetX": 4,
					"targetY": 8,
					"type": "warp"
				},
				"15": {
					"targetMap": 12326,
					"targetX": 15,
					"targetY": 15,
					"type": "warp"
				}
			},
			"17": {
				"7": {
					"targetMap": 12363,
					"targetX": 4,
					"targetY": 7,
					"type": "warp"
				}
			}
		},
		"12360": {
			"4": {
				"0": {
					"targetMap": 12361,
					"targetX": 8,
					"targetY": 13,
					"type": "warp"
				},
				"9": {
					"targetMap": 12359,
					"targetX": 11,
					"targetY": 4,
					"type": "warp"
				},
				"16": {
					"targetMap": 12326,
					"targetX": 15,
					"targetY": 10,
					"type": "warp"
				}
			}
		},
		"12361": {
			"1": {
				"7": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"4": {
				"2": {
					"targetMap": 12362,
					"targetX": 11,
					"targetY": 25,
					"type": "warp"
				}
			},
			"8": {
				"12": {
					"event": 21,
					"type": "event"
				},
				"14": {
					"targetMap": 12360,
					"targetX": 4,
					"targetY": 1,
					"type": "warp"
				}
			},
			"14": {
				"2": {
					"event": 1,
					"type": "event"
				}
			},
			"15": {
				"7": {
					"event": 24,
					"type": "event"
				}
			},
			"28": {
				"7": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				},
				"8": {
					"contents": 99,
					"treasure": "item",
					"type": "treasure"
				},
				"9": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12362": {
			"11": {
				"26": {
					"type": "return"
				}
			}
		},
		"12363": {
			"4": {
				"10": {
					"type": "return"
				}
			}
		},
		"12364": {
			"17": {
				"5": {
					"event": 25,
					"type": "event"
				}
			},
			"20": {
				"10": {
					"type": "return"
				}
			}
		},
		"12365": {
			"1": {
				"4": {
					"targetMap": 12366,
					"targetX": 1,
					"targetY": 6,
					"type": "warp"
				}
			},
			"2": {
				"10": {
					"targetMap": 12326,
					"targetX": 17,
					"targetY": 8,
					"type": "warp"
				}
			}
		},
		"12366": {
			"1": {
				"4": {
					"targetMap": 12367,
					"targetX": 1,
					"targetY": 6,
					"type": "warp"
				},
				"6": {
					"targetMap": 12365,
					"targetX": 1,
					"targetY": 4,
					"type": "warp"
				}
			},
			"9": {
				"6": {
					"contents": 500,
					"treasure": "gp",
					"type": "treasure"
				}
			}
		},
		"12367": {
			"1": {
				"6": {
					"targetMap": 12366,
					"targetX": 1,
					"targetY": 4,
					"type": "warp"
				}
			},
			"3": {
				"7": {
					"contents": 226,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"6": {
				"3": {
					"event": 50,
					"type": "event"
				}
			}
		},
		"12368": {
			"1": {
				"4": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				},
				"5": {
					"contents": 226,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"2": {
				"3": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"6": {
				"3": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"8": {
				"10": {
					"type": "return"
				}
			},
			"9": {
				"4": {
					"targetMap": 12369,
					"targetX": 9,
					"targetY": 6,
					"type": "warp"
				}
			}
		},
		"12369": {
			"9": {
				"4": {
					"targetMap": 12370,
					"targetX": 9,
					"targetY": 6,
					"type": "warp"
				},
				"6": {
					"type": "return"
				}
			}
		},
		"12370": {
			"9": {
				"6": {
					"type": "return"
				}
			}
		},
		"12371": {},
		"12372": {
			"4": {
				"2": {
					"targetMap": 12400,
					"targetX": 2,
					"targetY": 11,
					"type": "warp"
				},
				"10": {
					"event": 23,
					"type": "event"
				},
				"12": {
					"targetMap": 12400,
					"targetX": 2,
					"targetY": 18,
					"type": "warp"
				}
			}
		},
		"12373": {
			"2": {
				"10": {
					"targetMap": 12327,
					"targetX": 7,
					"targetY": 5,
					"type": "warp"
				}
			},
			"9": {
				"0": {
					"targetMap": 12374,
					"targetX": 5,
					"targetY": 18,
					"type": "warp"
				},
				"18": {
					"targetMap": 12327,
					"targetX": 16,
					"targetY": 11,
					"type": "warp"
				}
			},
			"16": {
				"10": {
					"targetMap": 12327,
					"targetX": 25,
					"targetY": 5,
					"type": "warp"
				}
			}
		},
		"12374": {
			"5": {
				"6": {
					"targetMap": 12375,
					"targetX": 11,
					"targetY": 25,
					"type": "warp"
				},
				"16": {
					"event": 44,
					"type": "event"
				},
				"19": {
					"targetMap": 12373,
					"targetX": 9,
					"targetY": 2,
					"type": "warp"
				}
			}
		},
		"12375": {
			"11": {
				"26": {
					"type": "return"
				}
			}
		},
		"12376": {
			"2": {
				"8": {
					"type": "return"
				}
			},
			"8": {
				"4": {
					"event": 36,
					"type": "event"
				}
			}
		},
		"12377": {
			"2": {
				"3": {
					"targetMap": 12378,
					"targetX": 1,
					"targetY": 4,
					"type": "warp"
				}
			},
			"4": {
				"3": {
					"targetMap": 12379,
					"targetX": 3,
					"targetY": 5,
					"type": "warp"
				},
				"9": {
					"type": "return"
				}
			},
			"6": {
				"3": {
					"targetMap": 12380,
					"targetX": 11,
					"targetY": 10,
					"type": "warp"
				}
			}
		},
		"12378": {
			"1": {
				"4": {
					"type": "return"
				}
			},
			"7": {
				"1": {
					"event": 1,
					"type": "event"
				}
			},
			"12": {
				"4": {
					"targetMap": 12381,
					"targetX": 1,
					"targetY": 3,
					"type": "warp"
				}
			}
		},
		"12379": {
			"3": {
				"5": {
					"type": "return"
				}
			},
			"5": {
				"6": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12380": {
			"1": {
				"3": {
					"contents": 226,
					"treasure": "item",
					"type": "treasure"
				},
				"5": {
					"event": 1,
					"type": "event"
				}
			},
			"2": {
				"3": {
					"contents": 226,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"4": {
				"3": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				},
				"5": {
					"event": 1,
					"type": "event"
				}
			},
			"5": {
				"3": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"6": {
				"9": {
					"event": 1,
					"type": "event"
				}
			},
			"7": {
				"3": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				},
				"5": {
					"event": 1,
					"type": "event"
				}
			},
			"8": {
				"3": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"10": {
				"3": {
					"contents": 168,
					"treasure": "item",
					"type": "treasure"
				},
				"5": {
					"event": 1,
					"type": "event"
				}
			},
			"11": {
				"3": {
					"contents": 168,
					"treasure": "item",
					"type": "treasure"
				},
				"10": {
					"type": "return"
				}
			}
		},
		"12381": {
			"1": {
				"3": {
					"type": "return"
				}
			},
			"3": {
				"5": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				},
				"6": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"4": {
				"5": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				},
				"6": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"5": {
				"5": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				},
				"6": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"6": {
				"5": {
					"contents": 210,
					"treasure": "item",
					"type": "treasure"
				},
				"6": {
					"contents": 210,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"7": {
				"5": {
					"contents": 211,
					"treasure": "item",
					"type": "treasure"
				},
				"6": {
					"contents": 211,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"8": {
				"5": {
					"contents": 1000,
					"treasure": "gp",
					"type": "treasure"
				},
				"6": {
					"contents": 1000,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"9": {
				"5": {
					"contents": 79,
					"treasure": "item",
					"type": "treasure"
				},
				"6": {
					"contents": 87,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"10": {
				"5": {
					"contents": 86,
					"treasure": "item",
					"type": "treasure"
				},
				"6": {
					"contents": 87,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"11": {
				"5": {
					"contents": 86,
					"treasure": "item",
					"type": "treasure"
				},
				"6": {
					"contents": 88,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12382": {
			"7": {
				"0": {
					"targetMap": 12383,
					"targetX": 9,
					"targetY": 7,
					"type": "warp"
				},
				"15": {
					"type": "return"
				}
			},
			"13": {
				"4": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12383": {
			"1": {
				"3": {
					"type": "return"
				}
			},
			"4": {
				"3": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				},
				"4": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"9": {
				"0": {
					"targetMap": 12384,
					"targetX": 13,
					"targetY": 12,
					"type": "warp"
				},
				"8": {
					"type": "return"
				}
			},
			"14": {
				"3": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				},
				"4": {
					"contents": 227,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"15": {
				"4": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"17": {
				"3": {
					"type": "return"
				}
			}
		},
		"12384": {
			"0": {
				"4": {
					"targetMap": 12383,
					"targetX": 1,
					"targetY": 3,
					"type": "warp"
				}
			},
			"13": {
				"13": {
					"type": "return"
				}
			},
			"26": {
				"4": {
					"targetMap": 12383,
					"targetX": 17,
					"targetY": 3,
					"type": "warp"
				}
			}
		},
		"12385": {
			"1": {
				"5": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				},
				"7": {
					"type": "return"
				}
			},
			"6": {
				"5": {
					"targetMap": 12386,
					"targetX": 6,
					"targetY": 5,
					"type": "warp"
				},
				"11": {
					"type": "return"
				}
			},
			"11": {
				"5": {
					"contents": 448,
					"reward": 33,
					"treasure": "battle",
					"type": "treasure"
				}
			}
		},
		"12386": {
			"1": {
				"7": {
					"targetMap": 12385,
					"targetX": 1,
					"targetY": 6,
					"type": "warp"
				}
			},
			"4": {
				"4": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"6": {
				"5": {
					"type": "return"
				}
			},
			"8": {
				"8": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"10": {
				"5": {
					"contents": 2000,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"11": {
				"5": {
					"contents": 91,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12387": {
			"2": {
				"5": {
					"contents": 600,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"6": {
				"8": {
					"targetMap": 12388,
					"targetX": 5,
					"targetY": 8,
					"type": "warp"
				}
			},
			"7": {
				"11": {
					"type": "return"
				}
			},
			"11": {
				"7": {
					"targetMap": 12389,
					"targetX": 8,
					"targetY": 3,
					"type": "warp"
				}
			},
			"12": {
				"5": {
					"contents": 800,
					"treasure": "gp",
					"type": "treasure"
				}
			}
		},
		"12388": {
			"1": {
				"5": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				},
				"6": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"4": {
				"5": {
					"event": 1,
					"type": "event"
				}
			},
			"5": {
				"8": {
					"type": "return"
				}
			},
			"6": {
				"3": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"10": {
				"5": {
					"targetMap": 12387,
					"targetX": 11,
					"targetY": 5,
					"type": "warp"
				}
			},
			"11": {
				"5": {
					"contents": 449,
					"reward": 41,
					"treasure": "battle",
					"type": "treasure"
				},
				"6": {
					"contents": 227,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12389": {
			"2": {
				"11": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"3": {
				"11": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"8": {
				"12": {
					"contents": 450,
					"reward": 211,
					"treasure": "battle",
					"type": "treasure"
				}
			},
			"16": {
				"17": {
					"targetMap": 0,
					"targetX": 45,
					"targetY": 237,
					"type": "warp"
				}
			}
		},
		"12390": {
			"4": {
				"8": {
					"type": "return"
				}
			}
		},
		"12391": {
			"4": {
				"8": {
					"type": "return"
				}
			}
		},
		"12393": {
			"4": {
				"8": {
					"type": "return"
				}
			}
		},
		"12396": {
			"2": {
				"29": {
					"targetMap": 0,
					"targetX": 76,
					"targetY": 133,
					"type": "warp"
				}
			},
			"4": {
				"9": {
					"event": 9,
					"type": "event"
				}
			},
			"6": {
				"3": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"13": {
				"12": {
					"contents": 226,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"24": {
				"3": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"27": {
				"2": {
					"targetMap": 0,
					"targetX": 84,
					"targetY": 120,
					"type": "warp"
				},
				"4": {
					"event": 11,
					"type": "event"
				},
				"10": {
					"event": 10,
					"type": "event"
				}
			},
			"30": {
				"18": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12398": {},
		"12399": {
			"2": {
				"2": {
					"targetMap": 12400,
					"targetX": 26,
					"targetY": 28,
					"type": "warp"
				}
			},
			"4": {
				"28": {
					"contents": 226,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"10": {
				"17": {
					"targetMap": 12419,
					"targetX": 5,
					"targetY": 9,
					"type": "warp"
				}
			},
			"13": {
				"14": {
					"contents": 120,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"22": {
				"16": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"25": {
				"3": {
					"contents": 167,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"26": {
				"30": {
					"targetMap": 0,
					"targetX": 138,
					"targetY": 84,
					"type": "warp"
				}
			},
			"29": {
				"14": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12400": {
			"2": {
				"12": {
					"targetMap": 12372,
					"targetX": 4,
					"targetY": 3,
					"type": "warp"
				},
				"17": {
					"targetMap": 12372,
					"targetX": 4,
					"targetY": 11,
					"type": "warp"
				}
			},
			"9": {
				"18": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"13": {
				"3": {
					"contents": 8,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"16": {
				"7": {
					"targetMap": 12401,
					"targetX": 23,
					"targetY": 9,
					"type": "warp"
				}
			},
			"21": {
				"5": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"26": {
				"29": {
					"targetMap": 12399,
					"targetX": 2,
					"targetY": 3,
					"type": "warp"
				}
			}
		},
		"12401": {
			"6": {
				"9": {
					"targetMap": 12402,
					"targetX": 13,
					"targetY": 26,
					"type": "warp"
				}
			},
			"12": {
				"24": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"22": {
				"24": {
					"contents": 200,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"23": {
				"8": {
					"targetMap": 12400,
					"targetX": 16,
					"targetY": 8,
					"type": "warp"
				}
			}
		},
		"12402": {
			"5": {
				"17": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"7": {
				"10": {
					"targetMap": 12403,
					"targetX": 10,
					"targetY": 22,
					"type": "warp"
				}
			},
			"13": {
				"27": {
					"targetMap": 12401,
					"targetX": 6,
					"targetY": 10,
					"type": "warp"
				}
			},
			"19": {
				"22": {
					"contents": 120,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12403": {
			"3": {
				"15": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"5": {
				"10": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"10": {
				"23": {
					"targetMap": 12402,
					"targetX": 7,
					"targetY": 11,
					"type": "warp"
				}
			},
			"17": {
				"17": {
					"contents": 23,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"20": {
				"20": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"24": {
				"8": {
					"targetMap": 0,
					"targetX": 138,
					"targetY": 78,
					"type": "warp"
				},
				"10": {
					"event": 37,
					"type": "event"
				}
			}
		},
		"12404": {
			"16": {
				"8": {
					"type": "return"
				},
				"11": {
					"event": 14,
					"type": "event"
				}
			}
		},
		"12405": {
			"10": {
				"11": {
					"targetMap": 12406,
					"targetX": 5,
					"targetY": 23,
					"type": "warp"
				}
			},
			"12": {
				"27": {
					"contents": 111,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"16": {
				"27": {
					"contents": 158,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12406": {
			"5": {
				"22": {
					"targetMap": 12405,
					"targetX": 10,
					"targetY": 12,
					"type": "warp"
				}
			},
			"16": {
				"10": {
					"targetMap": 0,
					"targetX": 125,
					"targetY": 67,
					"type": "warp"
				},
				"12": {
					"event": 15,
					"type": "event"
				}
			},
			"24": {
				"23": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"25": {
				"22": {
					"contents": 131,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12407": {
			"2": {
				"23": {
					"contents": 226,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"3": {
				"7": {
					"contents": 190,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"6": {
				"17": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"10": {
				"4": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"14": {
				"26": {
					"targetMap": 12410,
					"targetX": 5,
					"targetY": 12,
					"type": "warp"
				}
			},
			"15": {
				"3": {
					"targetMap": 0,
					"targetX": 136,
					"targetY": 57,
					"type": "warp"
				}
			},
			"21": {
				"28": {
					"targetMap": 12408,
					"targetX": 21,
					"targetY": 8,
					"type": "warp"
				}
			},
			"23": {
				"9": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"27": {
				"4": {
					"contents": 210,
					"treasure": "gp",
					"type": "treasure"
				},
				"23": {
					"targetMap": 12408,
					"targetX": 27,
					"targetY": 3,
					"type": "warp"
				}
			}
		},
		"12408": {
			"8": {
				"5": {
					"contents": 250,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"14": {
				"29": {
					"targetMap": 12409,
					"targetX": 14,
					"targetY": 4,
					"type": "warp"
				}
			},
			"21": {
				"7": {
					"targetMap": 12407,
					"targetX": 21,
					"targetY": 27,
					"type": "warp"
				}
			},
			"23": {
				"4": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"25": {
				"23": {
					"targetMap": 12411,
					"targetX": 4,
					"targetY": 12,
					"type": "warp"
				}
			},
			"27": {
				"2": {
					"targetMap": 12407,
					"targetX": 27,
					"targetY": 22,
					"type": "warp"
				}
			},
			"29": {
				"23": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12409": {
			"14": {
				"3": {
					"targetMap": 12408,
					"targetX": 14,
					"targetY": 28,
					"type": "warp"
				},
				"19": {
					"event": 18,
					"type": "event"
				}
			}
		},
		"12410": {
			"1": {
				"4": {
					"contents": 226,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"5": {
				"13": {
					"type": "return"
				}
			},
			"6": {
				"3": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"8": {
				"7": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12411": {
			"3": {
				"4": {
					"contents": 69,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"4": {
				"13": {
					"type": "return"
				}
			}
		},
		"12414": {
			"8": {
				"9": {
					"targetMap": 12417,
					"targetX": 20,
					"targetY": 10,
					"type": "warp"
				}
			},
			"15": {
				"26": {
					"event": 19,
					"type": "event"
				},
				"30": {
					"targetMap": 0,
					"targetX": 152,
					"targetY": 50,
					"type": "warp"
				}
			},
			"22": {
				"7": {
					"targetMap": 12415,
					"targetX": 8,
					"targetY": 22,
					"type": "warp"
				}
			}
		},
		"12415": {
			"8": {
				"21": {
					"targetMap": 12414,
					"targetX": 22,
					"targetY": 8,
					"type": "warp"
				}
			},
			"19": {
				"9": {
					"targetMap": 12416,
					"targetX": 7,
					"targetY": 10,
					"type": "warp"
				}
			},
			"20": {
				"20": {
					"event": 20,
					"type": "event"
				},
				"24": {
					"contents": 85,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12416": {
			"7": {
				"9": {
					"targetMap": 12415,
					"targetX": 19,
					"targetY": 10,
					"type": "warp"
				}
			},
			"21": {
				"31": {
					"targetMap": 0,
					"targetX": 160,
					"targetY": 50,
					"type": "warp"
				}
			}
		},
		"12417": {
			"11": {
				"19": {
					"contents": 226,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"16": {
				"17": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"18": {
				"18": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"20": {
				"9": {
					"targetMap": 12414,
					"targetX": 8,
					"targetY": 10,
					"type": "warp"
				}
			},
			"22": {
				"18": {
					"contents": 350,
					"treasure": "gp",
					"type": "treasure"
				}
			}
		},
		"12419": {
			"1": {
				"7": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"2": {
				"8": {
					"contents": 211,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"3": {
				"10": {
					"type": "return"
				}
			},
			"4": {
				"10": {
					"type": "return"
				}
			},
			"5": {
				"10": {
					"type": "return"
				}
			},
			"6": {
				"10": {
					"type": "return"
				}
			},
			"7": {
				"6": {
					"contents": 1000,
					"treasure": "gp",
					"type": "treasure"
				},
				"10": {
					"type": "return"
				}
			}
		},
		"12420": {
			"11": {
				"28": {
					"event": 26,
					"type": "event"
				}
			},
			"19": {
				"9": {
					"targetMap": 12421,
					"targetX": 10,
					"targetY": 24,
					"type": "warp"
				}
			},
			"20": {
				"31": {
					"targetMap": 0,
					"targetX": 218,
					"targetY": 200,
					"type": "warp"
				}
			},
			"21": {
				"31": {
					"targetMap": 0,
					"targetX": 218,
					"targetY": 200,
					"type": "warp"
				}
			},
			"22": {
				"15": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"23": {
				"19": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12421": {
			"10": {
				"23": {
					"targetMap": 12420,
					"targetX": 19,
					"targetY": 10,
					"type": "warp"
				}
			},
			"18": {
				"12": {
					"event": 27,
					"type": "event"
				}
			},
			"21": {
				"7": {
					"targetMap": 12422,
					"targetX": 23,
					"targetY": 23,
					"type": "warp"
				}
			}
		},
		"12422": {
			"9": {
				"17": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"11": {
				"7": {
					"targetMap": 12423,
					"targetX": 15,
					"targetY": 22,
					"type": "warp"
				}
			},
			"16": {
				"13": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"23": {
				"22": {
					"targetMap": 12421,
					"targetX": 21,
					"targetY": 8,
					"type": "warp"
				}
			}
		},
		"12423": {
			"6": {
				"10": {
					"event": 31,
					"type": "event"
				}
			},
			"9": {
				"10": {
					"event": 33,
					"type": "event"
				}
			},
			"14": {
				"10": {
					"event": 30,
					"type": "event"
				}
			},
			"15": {
				"21": {
					"targetMap": 12422,
					"targetX": 11,
					"targetY": 8,
					"type": "warp"
				},
				"23": {
					"event": 28,
					"type": "event"
				}
			},
			"16": {
				"16": {
					"event": 29,
					"type": "event"
				}
			},
			"17": {
				"16": {
					"event": 29,
					"type": "event"
				}
			}
		},
		"12424": {
			"11": {
				"4": {
					"event": 60,
					"type": "event"
				},
				"19": {
					"targetMap": 12310,
					"targetX": 14,
					"targetY": 1,
					"type": "warp"
				}
			}
		},
		"12425": {
			"4": {
				"5": {
					"event": 32,
					"type": "event"
				},
				"11": {
					"targetMap": 12291,
					"targetX": 25,
					"targetY": 18,
					"type": "warp"
				}
			}
		},
		"12426": {
			"7": {
				"2": {
					"targetMap": 12332,
					"targetX": 8,
					"targetY": 10,
					"type": "warp"
				},
				"9": {
					"targetMap": 12331,
					"targetX": 14,
					"targetY": 3,
					"type": "warp"
				}
			},
			"23": {
				"2": {
					"targetMap": 12332,
					"targetX": 8,
					"targetY": 10,
					"type": "warp"
				},
				"9": {
					"targetMap": 12331,
					"targetX": 14,
					"targetY": 3,
					"type": "warp"
				}
			}
		},
		"12427": {
			"9": {
				"14": {
					"type": "return"
				}
			}
		},
		"12428": {
			"2": {
				"20": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"5": {
				"6": {
					"type": "return"
				},
				"8": {
					"event": 42,
					"type": "event"
				}
			},
			"6": {
				"19": {
					"targetMap": 12429,
					"targetX": 27,
					"targetY": 26,
					"type": "warp"
				}
			},
			"27": {
				"7": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12429": {
			"4": {
				"19": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"5": {
				"10": {
					"targetMap": 12431,
					"targetX": 27,
					"targetY": 6,
					"type": "warp"
				}
			},
			"26": {
				"8": {
					"targetMap": 12430,
					"targetX": 8,
					"targetY": 14,
					"type": "warp"
				}
			},
			"27": {
				"25": {
					"type": "return"
				}
			}
		},
		"12430": {
			"2": {
				"5": {
					"contents": 500,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"8": {
				"15": {
					"type": "return"
				}
			},
			"11": {
				"7": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12431": {
			"8": {
				"5": {
					"targetMap": 12433,
					"targetX": 14,
					"targetY": 13,
					"type": "warp"
				}
			},
			"21": {
				"9": {
					"targetMap": 12434,
					"targetX": 6,
					"targetY": 12,
					"type": "warp"
				}
			},
			"24": {
				"28": {
					"targetMap": 12432,
					"targetX": 8,
					"targetY": 13,
					"type": "warp"
				}
			},
			"27": {
				"5": {
					"type": "return"
				}
			}
		},
		"12432": {
			"4": {
				"6": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"8": {
				"5": {
					"contents": 208,
					"treasure": "item",
					"type": "treasure"
				},
				"14": {
					"type": "return"
				}
			},
			"12": {
				"6": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12433": {
			"5": {
				"14": {
					"targetMap": 12435,
					"targetX": 22,
					"targetY": 27,
					"type": "warp"
				}
			},
			"14": {
				"5": {
					"contents": 4,
					"treasure": "item",
					"type": "treasure"
				},
				"14": {
					"type": "return"
				}
			}
		},
		"12434": {
			"6": {
				"13": {
					"type": "return"
				}
			}
		},
		"12435": {
			"7": {
				"8": {
					"contents": 210,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"13": {
				"7": {
					"targetMap": 12436,
					"targetX": 11,
					"targetY": 25,
					"type": "warp"
				}
			},
			"22": {
				"26": {
					"type": "return"
				}
			},
			"27": {
				"15": {
					"targetMap": 12449,
					"targetX": 6,
					"targetY": 12,
					"type": "warp"
				}
			}
		},
		"12436": {
			"11": {
				"26": {
					"type": "return"
				}
			}
		},
		"12439": {
			"5": {
				"5": {
					"event": 6,
					"type": "event"
				},
				"7": {
					"event": 1,
					"type": "event"
				},
				"14": {
					"targetMap": 12288,
					"targetX": 4,
					"targetY": 27,
					"type": "warp"
				}
			}
		},
		"12440": {
			"3": {
				"4": {
					"contents": 135,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"8": {
				"26": {
					"event": 49,
					"type": "event"
				}
			},
			"26": {
				"4": {
					"targetMap": 12441,
					"targetX": 26,
					"targetY": 5,
					"type": "warp"
				}
			}
		},
		"12441": {
			"2": {
				"13": {
					"targetMap": 12442,
					"targetX": 2,
					"targetY": 14,
					"type": "warp"
				}
			},
			"7": {
				"15": {
					"contents": 451,
					"reward": 28,
					"treasure": "battle",
					"type": "treasure"
				}
			},
			"26": {
				"4": {
					"type": "return"
				}
			}
		},
		"12442": {
			"2": {
				"7": {
					"targetMap": 12444,
					"targetX": 5,
					"targetY": 5,
					"type": "warp"
				},
				"13": {
					"type": "return"
				}
			}
		},
		"12444": {
			"5": {
				"4": {
					"type": "return"
				}
			},
			"8": {
				"10": {
					"targetMap": 12445,
					"targetX": 8,
					"targetY": 9,
					"type": "warp"
				}
			},
			"16": {
				"7": {
					"targetMap": 12445,
					"targetX": 16,
					"targetY": 10,
					"type": "warp"
				}
			},
			"22": {
				"4": {
					"targetMap": 12445,
					"targetX": 22,
					"targetY": 7,
					"type": "warp"
				}
			},
			"24": {
				"15": {
					"targetMap": 12445,
					"targetX": 24,
					"targetY": 14,
					"type": "warp"
				}
			}
		},
		"12445": {
			"8": {
				"8": {
					"type": "return"
				}
			},
			"10": {
				"23": {
					"contents": 102,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"11": {
				"9": {
					"contents": 5,
					"treasure": "item",
					"type": "treasure"
				},
				"10": {
					"contents": 74,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"15": {
				"15": {
					"targetMap": 12446,
					"targetX": 7,
					"targetY": 16,
					"type": "warp"
				},
				"17": {
					"event": 38,
					"type": "event"
				}
			},
			"16": {
				"9": {
					"type": "return"
				}
			},
			"19": {
				"14": {
					"contents": 144,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"22": {
				"6": {
					"type": "return"
				},
				"21": {
					"targetMap": 12450,
					"targetX": 4,
					"targetY": 10,
					"type": "warp"
				}
			},
			"24": {
				"13": {
					"type": "return"
				}
			}
		},
		"12446": {
			"7": {
				"4": {
					"targetMap": 12447,
					"targetX": 7,
					"targetY": 18,
					"type": "warp"
				},
				"9": {
					"event": 39,
					"type": "event"
				},
				"15": {
					"type": "return"
				}
			}
		},
		"12447": {
			"7": {
				"10": {
					"event": 40,
					"type": "event"
				},
				"19": {
					"type": "return"
				}
			}
		},
		"12448": {
			"7": {
				"21": {
					"type": "return"
				}
			}
		},
		"12449": {
			"6": {
				"13": {
					"type": "return"
				}
			}
		},
		"12450": {
			"4": {
				"11": {
					"type": "return"
				}
			}
		},
		"12454": {
			"4": {
				"11": {
					"type": "return"
				}
			}
		},
		"12455": {
			"14": {
				"25": {
					"type": "return"
				}
			},
			"18": {
				"4": {
					"contents": 208,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"21": {
				"19": {
					"targetMap": 12456,
					"targetX": 21,
					"targetY": 20,
					"type": "warp"
				}
			},
			"25": {
				"6": {
					"event": 57,
					"type": "event"
				}
			},
			"26": {
				"12": {
					"contents": 208,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"28": {
				"6": {
					"event": 56,
					"type": "event"
				},
				"18": {
					"targetMap": 12490,
					"targetX": 22,
					"targetY": 3,
					"type": "warp"
				}
			}
		},
		"12456": {
			"7": {
				"19": {
					"targetMap": 12457,
					"targetX": 6,
					"targetY": 20,
					"type": "warp"
				}
			},
			"14": {
				"20": {
					"contents": 452,
				"reward": 58,
					"treasure": "battle",
					"type": "treasure"
				}
			},
			"21": {
				"19": {
					"targetMap": 12455,
					"targetX": 21,
					"targetY": 20,
					"type": "warp"
				}
			}
		},
		"12457": {
			"2": {
				"7": {
					"targetMap": 12458,
					"targetX": 3,
					"targetY": 8,
					"type": "warp"
				}
			},
			"6": {
				"19": {
					"targetMap": 12456,
					"targetX": 7,
					"targetY": 20,
					"type": "warp"
				}
			},
			"13": {
				"25": {
					"targetMap": 12458,
					"targetX": 14,
					"targetY": 26,
					"type": "warp"
				}
			},
			"20": {
				"9": {
					"targetMap": 12454,
					"targetX": 4,
					"targetY": 10,
					"type": "warp"
				},
				"21": {
					"contents": 2000,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"24": {
				"7": {
					"targetMap": 12458,
					"targetX": 23,
					"targetY": 8,
					"type": "warp"
				}
			}
		},
		"12458": {
			"3": {
				"7": {
					"targetMap": 12457,
					"targetX": 2,
					"targetY": 8,
					"type": "warp"
				}
			},
			"12": {
				"18": {
					"contents": 44,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"14": {
				"25": {
					"targetMap": 12457,
					"targetX": 13,
					"targetY": 26,
					"type": "warp"
				}
			},
			"20": {
				"7": {
					"targetMap": 12460,
					"targetX": 22,
					"targetY": 8,
					"type": "warp"
				}
			},
			"23": {
				"7": {
					"targetMap": 12457,
					"targetX": 24,
					"targetY": 8,
					"type": "warp"
				}
			}
		},
		"12459": {
			"16": {
				"3": {
					"targetMap": 12460,
					"targetX": 14,
					"targetY": 4,
					"type": "warp"
				},
				"20": {
					"event": 59,
					"type": "event"
				},
				"23": {
					"targetMap": 12460,
					"targetX": 14,
					"targetY": 16,
					"type": "warp"
				}
			}
		},
		"12460": {
			"5": {
				"15": {
					"contents": 82000,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"6": {
				"7": {
					"event": 0,
					"type": "event"
				}
			},
			"14": {
				"15": {
					"targetMap": 12459,
					"targetX": 16,
					"targetY": 22,
					"type": "warp"
				},
				"20": {
					"event": 58,
					"type": "event"
				}
			},
			"22": {
				"7": {
					"targetMap": 12458,
					"targetX": 20,
					"targetY": 8,
					"type": "warp"
				}
			}
		},
		"12465": {
			"7": {
				"17": {
					"type": "return"
				}
			},
			"14": {
				"0": {
					"targetMap": 12466,
					"targetX": 15,
					"targetY": 5,
					"type": "warp"
				}
			}
		},
		"12466": {
			"15": {
				"7": {
					"type": "return"
				}
			}
		},
		"12469": {
			"9": {
				"7": {
					"targetMap": 12470,
					"targetX": 7,
					"targetY": 4,
					"type": "warp"
				}
			}
		},
		"12470": {
			"7": {
				"4": {
					"targetMap": 12469,
					"targetX": 9,
					"targetY": 7,
					"type": "warp"
				},
				"7": {
					"targetMap": 12471,
					"targetX": 14,
					"targetY": 3,
					"type": "warp"
				}
			}
		},
		"12471": {
			"9": {
				"8": {
					"contents": 64,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"11": {
				"19": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"14": {
				"3": {
					"targetMap": 12470,
					"targetX": 7,
					"targetY": 7,
					"type": "warp"
				},
				"18": {
					"contents": 227,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"18": {
				"9": {
					"targetMap": 12473,
					"targetX": 17,
					"targetY": 20,
					"type": "warp"
				}
			},
			"21": {
				"20": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"27": {
				"6": {
					"contents": 93,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12473": {
			"3": {
				"4": {
					"targetMap": 12474,
					"targetX": 3,
					"targetY": 4,
					"type": "warp"
				}
			},
			"17": {
				"20": {
					"targetMap": 12471,
					"targetX": 18,
					"targetY": 9,
					"type": "warp"
				}
			},
			"19": {
				"9": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"26": {
				"6": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12474": {
			"3": {
				"4": {
					"targetMap": 12473,
					"targetX": 3,
					"targetY": 4,
					"type": "warp"
				}
			},
			"14": {
				"21": {
					"contents": 455,
					"reward": 211,
					"treasure": "battle",
					"type": "treasure"
				}
			},
			"21": {
				"4": {
					"targetMap": 12476,
					"targetX": 15,
					"targetY": 24,
					"type": "warp"
				}
			}
		},
		"12476": {
			"15": {
				"4": {
					"targetMap": 12477,
					"targetX": 8,
					"targetY": 18,
					"type": "warp"
				},
				"15": {
					"event": 79,
					"type": "event"
				},
				"24": {
					"targetMap": 12474,
					"targetX": 21,
					"targetY": 4,
					"type": "warp"
				}
			}
		},
		"12477": {
			"8": {
				"18": {
					"targetMap": 12476,
					"targetX": 15,
					"targetY": 4,
					"type": "warp"
				}
			},
			"9": {
				"13": {
					"event": 81,
					"type": "event"
				}
			}
		},
		"12487": {
			"3": {
				"30": {
					"targetMap": 12488,
					"targetX": 27,
					"targetY": 3,
					"type": "warp"
				}
			},
			"10": {
				"3": {
					"targetMap": 0,
					"targetX": 24,
					"targetY": 232,
					"type": "warp"
				}
			},
			"18": {
				"4": {
					"contents": 64,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"22": {
				"3": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"26": {
				"25": {
					"contents": 1200,
					"treasure": "gp",
					"type": "treasure"
				}
			}
		},
		"12488": {
			"4": {
				"12": {
					"targetMap": 12494,
					"targetX": 13,
					"targetY": 11,
					"type": "warp"
				}
			},
			"9": {
				"3": {
					"targetMap": 12489,
					"targetX": 7,
					"targetY": 29,
					"type": "warp"
				}
			},
			"17": {
				"7": {
					"targetMap": 12492,
					"targetX": 9,
					"targetY": 11,
					"type": "warp"
				}
			},
			"22": {
				"9": {
					"targetMap": 12491,
					"targetX": 17,
					"targetY": 10,
					"type": "warp"
				}
			},
			"27": {
				"2": {
					"targetMap": 12487,
					"targetX": 3,
					"targetY": 29,
					"type": "warp"
				}
			}
		},
		"12489": {
			"4": {
				"10": {
					"contents": 226,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"6": {
				"8": {
					"targetMap": 12490,
					"targetX": 3,
					"targetY": 27,
					"type": "warp"
				}
			},
			"7": {
				"30": {
					"targetMap": 12488,
					"targetX": 9,
					"targetY": 4,
					"type": "warp"
				}
			},
			"8": {
				"28": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"10": {
				"26": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"12": {
				"11": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"15": {
				"7": {
					"targetMap": 12490,
					"targetX": 11,
					"targetY": 26,
					"type": "warp"
				},
				"28": {
					"contents": 800,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"16": {
				"11": {
					"contents": 227,
					"treasure": "item",
					"type": "treasure"
				},
				"12": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"20": {
				"12": {
					"contents": 211,
					"treasure": "item",
					"type": "treasure"
				},
				"14": {
					"contents": 211,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"25": {
				"3": {
					"targetMap": 12490,
					"targetX": 26,
					"targetY": 25,
					"type": "warp"
				}
			},
			"27": {
				"27": {
					"contents": 850,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"28": {
				"27": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"29": {
				"27": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12490": {
			"3": {
				"28": {
					"targetMap": 12489,
					"targetX": 6,
					"targetY": 9,
					"type": "warp"
				}
			},
			"11": {
				"27": {
					"targetMap": 12489,
					"targetX": 15,
					"targetY": 8,
					"type": "warp"
				}
			},
			"14": {
				"8": {
					"contents": 208,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"17": {
				"9": {
					"contents": 210,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"18": {
				"16": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				},
				"22": {
					"contents": 64,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"22": {
				"2": {
					"targetMap": 12455,
					"targetX": 28,
					"targetY": 17,
					"type": "warp"
				}
			},
			"24": {
				"8": {
					"event": 55,
					"type": "event"
				}
			},
			"26": {
				"26": {
					"targetMap": 12489,
					"targetX": 25,
					"targetY": 4,
					"type": "warp"
				}
			},
			"29": {
				"23": {
					"targetMap": 12493,
					"targetX": 4,
					"targetY": 11,
					"type": "warp"
				}
			}
		},
		"12491": {
			"17": {
				"13": {
					"type": "return"
				}
			}
		},
		"12492": {
			"9": {
				"14": {
					"type": "return"
				}
			}
		},
		"12493": {
			"4": {
				"12": {
					"type": "return"
				}
			},
			"17": {
				"5": {
					"contents": 454,
					"reward": 31,
					"treasure": "battle",
					"type": "treasure"
				}
			}
		},
		"12494": {
			"2": {
				"5": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"13": {
				"14": {
					"type": "return"
				}
			},
			"14": {
				"7": {
					"contents": 206,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12495": {
			"7": {
				"12": {
					"type": "return"
				}
			},
			"8": {
				"12": {
					"type": "return"
				}
			},
			"9": {
				"7": {
					"contents": 235,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12497": {
			"7": {
				"12": {
					"type": "return"
				}
			},
			"8": {
				"12": {
					"type": "return"
				}
			},
			"9": {
				"7": {
					"contents": 235,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12498": {
			"7": {
				"12": {
					"type": "return"
				}
			},
			"8": {
				"12": {
					"type": "return"
				}
			},
			"9": {
				"7": {
					"contents": 235,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12499": {
			"7": {
				"12": {
					"type": "return"
				}
			},
			"8": {
				"12": {
					"type": "return"
				}
			},
			"9": {
				"7": {
					"contents": 235,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12500": {
			"7": {
				"12": {
					"type": "return"
				}
			},
			"8": {
				"12": {
					"type": "return"
				}
			},
			"9": {
				"7": {
					"contents": 235,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12512": {
			"14": {
				"10": {
					"type": "return"
				}
			}
		},
		"12513": {
			"4": {
				"10": {
					"type": "return"
				}
			}
		},
		"12514": {
			"4": {
				"10": {
					"type": "return"
				}
			}
		},
		"12515": {
			"4": {
				"10": {
					"type": "return"
				}
			}
		},
		"12516": {
			"4": {
				"10": {
					"type": "return"
				}
			}
		},
		"12517": {
			"4": {
				"10": {
					"type": "return"
				}
			}
		},
		"12518": {
			"4": {
				"10": {
					"type": "return"
				}
			}
		},
		"12519": {
			"5": {
				"10": {
					"type": "return"
				}
			}
		},
		"12520": {
			"14": {
				"10": {
					"type": "return"
				}
			}
		},
		"12521": {
			"4": {
				"10": {
					"type": "return"
				}
			}
		},
		"12522": {
			"4": {
				"10": {
					"type": "return"
				}
			}
		},
		"12523": {
			"5": {
				"10": {
					"type": "return"
				}
			}
		},
		"12524": {
			"5": {
				"10": {
					"type": "return"
				}
			}
		},
		"12544": {
			"0": {
				"12": {
					"type": "return"
				}
			},
			"1": {
				"12": {
					"type": "return"
				}
			},
			"2": {
				"12": {
					"type": "return"
				}
			},
			"3": {
				"12": {
					"type": "return"
				}
			},
			"4": {
				"12": {
					"type": "return"
				}
			},
			"5": {
				"12": {
					"type": "return"
				}
			},
			"6": {
				"6": {
					"targetMap": 12546,
					"targetX": 7,
					"targetY": 14,
					"type": "warp"
				},
				"12": {
					"type": "return"
				}
			},
			"7": {
				"12": {
					"type": "return"
				}
			},
			"8": {
				"12": {
					"type": "return"
				}
			},
			"9": {
				"12": {
					"type": "return"
				}
			},
			"10": {
				"12": {
					"type": "return"
				}
			},
			"11": {
				"12": {
					"type": "return"
				}
			},
			"12": {
				"12": {
					"type": "return"
				}
			},
			"13": {
				"0": {
					"type": "return"
				},
				"1": {
					"type": "return"
				},
				"2": {
					"type": "return"
				},
				"3": {
					"type": "return"
				},
				"4": {
					"type": "return"
				},
				"5": {
					"type": "return"
				},
				"6": {
					"type": "return"
				},
				"7": {
					"type": "return"
				},
				"8": {
					"type": "return"
				},
				"9": {
					"type": "return"
				},
				"10": {
					"type": "return"
				},
				"11": {
					"type": "return"
				},
				"12": {
					"type": "return"
				}
			}
		},
		"12545": {
			"6": {
				"5": {
					"targetMap": 12550,
					"targetX": 7,
					"targetY": 7,
					"type": "warp"
				}
			},
			"8": {
				"21": {
					"targetMap": 12594,
					"targetX": 4,
					"targetY": 7,
					"type": "warp"
				}
			},
			"16": {
				"28": {
					"targetMap": 4096,
					"targetX": 62,
					"targetY": 122,
					"type": "warp"
				}
			},
			"17": {
				"28": {
					"targetMap": 4096,
					"targetX": 62,
					"targetY": 122,
					"type": "warp"
				}
			},
			"19": {
				"10": {
					"targetMap": 12549,
					"targetX": 6,
					"targetY": 9,
					"type": "warp"
				}
			},
			"23": {
				"10": {
					"targetMap": 12549,
					"targetX": 25,
					"targetY": 9,
					"type": "warp"
				}
			},
			"24": {
				"19": {
					"targetMap": 12548,
					"targetX": 10,
					"targetY": 7,
					"type": "warp"
				}
			}
		},
		"12546": {
			"2": {
				"10": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"7": {
				"17": {
					"type": "return"
				}
			},
			"10": {
				"3": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"14": {
				"5": {
					"targetMap": 12547,
					"targetX": 9,
					"targetY": 4,
					"type": "warp"
				}
			},
			"25": {
				"5": {
					"contents": 1000,
					"treasure": "gp",
					"type": "treasure"
				}
			}
		},
		"12547": {
			"5": {
				"3": {
					"contents": 211,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"9": {
				"4": {
					"type": "return"
				}
			}
		},
		"12548": {
			"10": {
				"10": {
					"type": "return"
				}
			}
		},
		"12549": {
			"6": {
				"12": {
					"targetMap": 12545,
					"targetX": 19,
					"targetY": 10,
					"type": "warp"
				}
			},
			"25": {
				"12": {
					"targetMap": 12545,
					"targetX": 23,
					"targetY": 10,
					"type": "warp"
				}
			}
		},
		"12550": {
			"3": {
				"5": {
					"contents": 490,
					"treasure": "gp",
					"type": "treasure"
				},
				"6": {
					"contents": 470,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"4": {
				"6": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"7": {
				"10": {
					"type": "return"
				}
			},
			"10": {
				"4": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"11": {
				"5": {
					"contents": 227,
					"treasure": "item",
					"type": "treasure"
				},
				"6": {
					"contents": 480,
					"treasure": "gp",
					"type": "treasure"
				}
			}
		},
		"12551": {
			"7": {
				"8": {
					"targetMap": 12563,
					"targetX": 6,
					"targetY": 11,
					"type": "warp"
				}
			},
			"14": {
				"31": {
					"targetMap": 4096,
					"targetX": 100,
					"targetY": 83,
					"type": "warp"
				}
			},
			"15": {
				"19": {
					"targetMap": 12552,
					"targetX": 11,
					"targetY": 11,
					"type": "warp"
				},
				"31": {
					"targetMap": 4096,
					"targetX": 100,
					"targetY": 83,
					"type": "warp"
				}
			},
			"16": {
				"31": {
					"targetMap": 4096,
					"targetX": 100,
					"targetY": 83,
					"type": "warp"
				}
			},
			"23": {
				"8": {
					"targetMap": 12560,
					"targetX": 6,
					"targetY": 11,
					"type": "warp"
				}
			}
		},
		"12552": {
			"1": {
				"6": {
					"targetMap": 12561,
					"targetX": 16,
					"targetY": 12,
					"type": "warp"
				}
			},
			"11": {
				"1": {
					"targetMap": 12553,
					"targetX": 10,
					"targetY": 13,
					"type": "warp"
				},
				"15": {
					"targetMap": 12551,
					"targetX": 15,
					"targetY": 20,
					"type": "warp"
				}
			},
			"21": {
				"6": {
					"targetMap": 12558,
					"targetX": 1,
					"targetY": 13,
					"type": "warp"
				}
			}
		},
		"12553": {
			"8": {
				"1": {
					"event": 1,
					"type": "event"
				}
			},
			"10": {
				"1": {
					"targetMap": 12557,
					"targetX": 9,
					"targetY": 19,
					"type": "warp"
				},
				"11": {
					"event": 48,
					"type": "event"
				},
				"15": {
					"targetMap": 12552,
					"targetX": 11,
					"targetY": 3,
					"type": "warp"
				}
			}
		},
		"12554": {
			"1": {
				"8": {
					"targetMap": 12561,
					"targetX": 16,
					"targetY": 3,
					"type": "warp"
				}
			},
			"6": {
				"7": {
					"targetMap": 12562,
					"targetX": 9,
					"targetY": 7,
					"type": "warp"
				}
			},
			"11": {
				"0": {
					"targetMap": 12555,
					"targetX": 29,
					"targetY": 9,
					"type": "warp"
				}
			},
			"14": {
				"1": {
					"event": 1,
					"type": "event"
				}
			},
			"23": {
				"4": {
					"contents": 235,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"24": {
				"3": {
					"contents": 235,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"26": {
				"4": {
					"contents": 235,
					"treasure": "item",
					"type": "treasure"
				},
				"8": {
					"targetMap": 12558,
					"targetX": 1,
					"targetY": 4,
					"type": "warp"
				}
			}
		},
		"12555": {
			"2": {
				"27": {
					"targetMap": 12559,
					"targetX": 29,
					"targetY": 5,
					"type": "warp"
				}
			},
			"27": {
				"18": {
					"contents": 227,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"28": {
				"18": {
					"contents": 227,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"29": {
				"9": {
					"targetMap": 12554,
					"targetX": 11,
					"targetY": 0,
					"type": "warp"
				},
				"19": {
					"contents": 227,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12557": {
			"9": {
				"20": {
					"type": "return"
				}
			}
		},
		"12558": {
			"1": {
				"4": {
					"targetMap": 12554,
					"targetX": 26,
					"targetY": 8,
					"type": "warp"
				},
				"13": {
					"targetMap": 12552,
					"targetX": 21,
					"targetY": 6,
					"type": "warp"
				}
			},
			"8": {
				"0": {
					"targetMap": 12576,
					"targetX": 5,
					"targetY": 9,
					"type": "warp"
				}
			},
			"13": {
				"4": {
					"targetMap": 12560,
					"targetX": 10,
					"targetY": 10,
					"type": "warp"
				}
			}
		},
		"12559": {
			"3": {
				"14": {
					"targetMap": 4096,
					"targetX": 91,
					"targetY": 84,
					"type": "warp"
				}
			},
			"29": {
				"5": {
					"targetMap": 12555,
					"targetX": 2,
					"targetY": 27,
					"type": "warp"
				}
			}
		},
		"12560": {
			"6": {
				"3": {
					"contents": 57,
					"treasure": "item",
					"type": "treasure"
				},
				"5": {
					"targetMap": 12571,
					"targetX": 24,
					"targetY": 21,
					"type": "warp"
				},
				"14": {
					"targetMap": 12551,
					"targetX": 23,
					"targetY": 9,
					"type": "warp"
				}
			},
			"10": {
				"10": {
					"targetMap": 12558,
					"targetX": 13,
					"targetY": 4,
					"type": "warp"
				}
			}
		},
		"12561": {
			"1": {
				"12": {
					"targetMap": 12563,
					"targetX": 2,
					"targetY": 10,
					"type": "warp"
				}
			},
			"8": {
				"3": {
					"contents": 1000,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"16": {
				"3": {
					"targetMap": 12554,
					"targetX": 1,
					"targetY": 8,
					"type": "warp"
				},
				"12": {
					"targetMap": 12552,
					"targetX": 1,
					"targetY": 6,
					"type": "warp"
				}
			}
		},
		"12562": {
			"5": {
				"5": {
					"event": 63,
					"type": "event"
				}
			},
			"9": {
				"10": {
					"targetMap": 12554,
					"targetX": 6,
					"targetY": 8,
					"type": "warp"
				}
			}
		},
		"12563": {
			"2": {
				"10": {
					"targetMap": 12561,
					"targetX": 1,
					"targetY": 12,
					"type": "warp"
				}
			},
			"6": {
				"5": {
					"targetMap": 12571,
					"targetX": 6,
					"targetY": 5,
					"type": "warp"
				},
				"14": {
					"targetMap": 12551,
					"targetX": 7,
					"targetY": 9,
					"type": "warp"
				}
			}
		},
		"12564": {
			"4": {
				"8": {
					"type": "return"
				}
			},
			"27": {
				"8": {
					"type": "return"
				}
			}
		},
		"12565": {
			"5": {
				"4": {
					"contents": 480,
					"reward": 29,
					"treasure": "battle",
					"type": "treasure"
				},
				"8": {
					"type": "return"
				}
			}
		},
		"12566": {
			"5": {
				"4": {
					"contents": 481,
					"reward": 38,
					"treasure": "battle",
					"type": "treasure"
				},
				"8": {
					"type": "return"
				}
			}
		},
		"12567": {
			"5": {
				"4": {
					"contents": 482,
					"reward": 103,
					"treasure": "battle",
					"type": "treasure"
				},
				"8": {
					"type": "return"
				}
			}
		},
		"12568": {
			"5": {
				"4": {
					"contents": 483,
					"reward": 136,
					"treasure": "battle",
					"type": "treasure"
				},
				"8": {
					"type": "return"
				}
			}
		},
		"12569": {
			"1": {
				"7": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"6": {
				"3": {
					"contents": 170,
					"treasure": "item",
					"type": "treasure"
				},
				"7": {
					"type": "return"
				},
				"11": {
					"contents": 211,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"11": {
				"7": {
					"contents": 210,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12570": {
			"1": {
				"7": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"6": {
				"3": {
					"contents": 211,
					"treasure": "item",
					"type": "treasure"
				},
				"7": {
					"type": "return"
				},
				"11": {
					"contents": 153,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"11": {
				"7": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12571": {
			"6": {
				"5": {
					"type": "return"
				},
				"7": {
					"targetMap": 12570,
					"targetX": 6,
					"targetY": 7,
					"type": "warp"
				}
			},
			"8": {
				"10": {
					"contents": 500,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"21": {
				"24": {
					"contents": 500,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"24": {
				"21": {
					"type": "return"
				},
				"23": {
					"targetMap": 12569,
					"targetX": 6,
					"targetY": 7,
					"type": "warp"
				}
			}
		},
		"12573": {
			"2": {
				"20": {
					"targetMap": 12574,
					"targetX": 2,
					"targetY": 21,
					"type": "warp"
				}
			},
			"6": {
				"3": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"29": {
				"16": {
					"type": "return"
				}
			}
		},
		"12574": {
			"2": {
				"20": {
					"type": "return"
				}
			},
			"10": {
				"4": {
					"targetMap": 12575,
					"targetX": 10,
					"targetY": 5,
					"type": "warp"
				}
			},
			"14": {
				"4": {
					"type": "return"
				}
			}
		},
		"12575": {
			"9": {
				"21": {
					"event": 62,
					"type": "event"
				}
			},
			"10": {
				"4": {
					"type": "return"
				}
			},
			"25": {
				"5": {
					"type": "return"
				}
			},
			"28": {
				"11": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12576": {
			"5": {
				"13": {
					"type": "return"
				}
			}
		},
		"12577": {
			"5": {
				"10": {
					"contents": 87,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"6": {
				"20": {
					"contents": 87,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"15": {
				"4": {
					"targetMap": 12578,
					"targetX": 15,
					"targetY": 5,
					"type": "warp"
				},
				"21": {
					"event": 53,
					"type": "event"
				},
				"25": {
					"targetMap": 4096,
					"targetX": 48,
					"targetY": 16,
					"type": "warp"
				}
			},
			"26": {
				"12": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12578": {
			"8": {
				"7": {
					"contents": 126,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"15": {
				"4": {
					"targetMap": 12577,
					"targetX": 15,
					"targetY": 5,
					"type": "warp"
				},
				"22": {
					"targetMap": 12566,
					"targetX": 5,
					"targetY": 7,
					"type": "warp"
				}
			},
			"16": {
				"13": {
					"targetMap": 12579,
					"targetX": 16,
					"targetY": 14,
					"type": "warp"
				}
			},
			"23": {
				"16": {
					"targetMap": 12565,
					"targetX": 5,
					"targetY": 7,
					"type": "warp"
				}
			}
		},
		"12579": {
			"12": {
				"19": {
					"targetMap": 12580,
					"targetX": 12,
					"targetY": 20,
					"type": "warp"
				}
			},
			"13": {
				"11": {
					"contents": 6,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"15": {
				"25": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"16": {
				"13": {
					"targetMap": 12578,
					"targetX": 16,
					"targetY": 14,
					"type": "warp"
				}
			},
			"20": {
				"19": {
					"targetMap": 12580,
					"targetX": 20,
					"targetY": 20,
					"type": "warp"
				}
			},
			"26": {
				"19": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12580": {
			"3": {
				"8": {
					"targetMap": 12581,
					"targetX": 3,
					"targetY": 9,
					"type": "warp"
				}
			},
			"6": {
				"19": {
					"targetMap": 12564,
					"targetX": 4,
					"targetY": 7,
					"type": "warp"
				}
			},
			"12": {
				"19": {
					"targetMap": 12579,
					"targetX": 12,
					"targetY": 20,
					"type": "warp"
				}
			},
			"16": {
				"19": {
					"contents": 80,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"20": {
				"19": {
					"type": "return"
				}
			},
			"26": {
				"17": {
					"targetMap": 12567,
					"targetX": 5,
					"targetY": 7,
					"type": "warp"
				}
			},
			"27": {
				"8": {
					"targetMap": 12568,
					"targetX": 5,
					"targetY": 7,
					"type": "warp"
				}
			},
			"29": {
				"17": {
					"targetMap": 12564,
					"targetX": 27,
					"targetY": 7,
					"type": "warp"
				},
				"23": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12581": {
			"3": {
				"8": {
					"targetMap": 12580,
					"targetX": 3,
					"targetY": 9,
					"type": "warp"
				}
			},
			"6": {
				"12": {
					"contents": 2000,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"16": {
				"9": {
					"targetMap": 12589,
					"targetX": 5,
					"targetY": 11,
					"type": "warp"
				}
			},
			"25": {
				"5": {
					"targetMap": 12582,
					"targetX": 25,
					"targetY": 6,
					"type": "warp"
				}
			},
			"29": {
				"22": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12582": {
			"10": {
				"4": {
					"type": "return"
				}
			},
			"14": {
				"4": {
					"targetMap": 12583,
					"targetX": 14,
					"targetY": 5,
					"type": "warp"
				}
			},
			"25": {
				"5": {
					"type": "return"
				}
			},
			"28": {
				"11": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12583": {
			"2": {
				"20": {
					"type": "return"
				}
			},
			"14": {
				"4": {
					"type": "return"
				}
			},
			"16": {
				"24": {
					"contents": 210,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"27": {
				"8": {
					"targetMap": 12564,
					"targetX": 4,
					"targetY": 7,
					"type": "warp"
				}
			},
			"29": {
				"16": {
					"targetMap": 12584,
					"targetX": 29,
					"targetY": 17,
					"type": "warp"
				}
			}
		},
		"12584": {
			"6": {
				"3": {
					"contents": 90,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"16": {
				"20": {
					"event": 51,
					"type": "event"
				}
			},
			"29": {
				"16": {
					"type": "return"
				}
			}
		},
		"12589": {
			"5": {
				"10": {
					"event": 52,
					"type": "event"
				}
			}
		},
		"12591": {
			"2": {
				"13": {
					"type": "return"
				}
			},
			"4": {
				"21": {
					"event": 83,
					"type": "event"
				},
				"24": {
					"event": 83,
					"type": "event"
				}
			},
			"6": {
				"23": {
					"event": 83,
					"type": "event"
				}
			},
			"8": {
				"23": {
					"event": 83,
					"type": "event"
				}
			},
			"10": {
				"21": {
					"event": 83,
					"type": "event"
				},
				"24": {
					"event": 83,
					"type": "event"
				}
			},
			"12": {
				"13": {
					"type": "return"
				}
			}
		},
		"12594": {
			"4": {
				"11": {
					"type": "return"
				}
			}
		},
		"12598": {
			"3": {
				"17": {
					"targetMap": 12599,
					"targetX": 4,
					"targetY": 19,
					"type": "warp"
				}
			},
			"8": {
				"6": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"17": {
				"9": {
					"type": "return"
				},
				"12": {
					"event": 64,
					"type": "event"
				}
			},
			"25": {
				"21": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"26": {
				"6": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12599": {
			"4": {
				"18": {
					"type": "return"
				}
			},
			"9": {
				"5": {
					"contents": 227,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"24": {
				"25": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"28": {
				"16": {
					"targetMap": 12600,
					"targetX": 11,
					"targetY": 2,
					"type": "warp"
				}
			}
		},
		"12600": {
			"3": {
				"21": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"4": {
				"21": {
					"contents": 71,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"5": {
				"21": {
					"contents": 46,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"11": {
				"1": {
					"type": "return"
				},
				"23": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"18": {
				"6": {
					"contents": 484,
					"reward": 30,
					"treasure": "battle",
					"type": "treasure"
				},
				"14": {
					"targetMap": 12602,
					"targetX": 12,
					"targetY": 14,
					"type": "warp"
				}
			},
			"25": {
				"21": {
					"contents": 208,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12601": {
			"3": {
				"1": {
					"type": "return"
				}
			},
			"10": {
				"1": {
					"type": "return"
				}
			}
		},
		"12602": {
			"5": {
				"10": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"6": {
				"3": {
					"contents": 2000,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"12": {
				"14": {
					"type": "return"
				}
			},
			"14": {
				"4": {
					"targetMap": 12604,
					"targetX": 28,
					"targetY": 11,
					"type": "warp"
				}
			},
			"18": {
				"21": {
					"contents": 3000,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"19": {
				"15": {
					"targetMap": 12603,
					"targetX": 16,
					"targetY": 21,
					"type": "warp"
				}
			},
			"20": {
				"8": {
					"contents": 246,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"25": {
				"12": {
					"contents": 2000,
					"treasure": "gp",
					"type": "treasure"
				}
			}
		},
		"12603": {
			"15": {
				"9": {
					"contents": 82,
					"treasure": "item",
					"type": "treasure"
				},
				"10": {
					"contents": 93,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"16": {
				"9": {
					"contents": 210,
					"treasure": "item",
					"type": "treasure"
				},
				"10": {
					"contents": 211,
					"treasure": "item",
					"type": "treasure"
				},
				"21": {
					"type": "return"
				},
				"24": {
					"targetMap": 4096,
					"targetX": 27,
					"targetY": 87,
					"type": "warp"
				}
			}
		},
		"12604": {
			"8": {
				"20": {
					"targetMap": 12609,
					"targetX": 6,
					"targetY": 9,
					"type": "warp"
				}
			},
			"11": {
				"5": {
					"targetMap": 12605,
					"targetX": 5,
					"targetY": 10,
					"type": "warp"
				}
			},
			"12": {
				"12": {
					"targetMap": 12606,
					"targetX": 6,
					"targetY": 8,
					"type": "warp"
				}
			},
			"19": {
				"24": {
					"targetMap": 12610,
					"targetX": 5,
					"targetY": 6,
					"type": "warp"
				}
			},
			"22": {
				"5": {
					"targetMap": 12611,
					"targetX": 14,
					"targetY": 10,
					"type": "warp"
				}
			},
			"28": {
				"11": {
					"type": "return"
				}
			}
		},
		"12605": {
			"1": {
				"6": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"4": {
				"10": {
					"event": 2,
					"type": "event"
				}
			},
			"5": {
				"9": {
					"event": 2,
					"type": "event"
				},
				"13": {
					"type": "return"
				}
			},
			"6": {
				"10": {
					"event": 2,
					"type": "event"
				}
			},
			"9": {
				"6": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12606": {
			"1": {
				"8": {
					"targetMap": 12607,
					"targetX": 7,
					"targetY": 9,
					"type": "warp"
				}
			},
			"6": {
				"11": {
					"type": "return"
				}
			}
		},
		"12607": {
			"2": {
				"5": {
					"targetMap": 12608,
					"targetX": 6,
					"targetY": 9,
					"type": "warp"
				}
			},
			"7": {
				"9": {
					"type": "return"
				}
			}
		},
		"12608": {
			"6": {
				"9": {
					"type": "return"
				}
			}
		},
		"12609": {
			"6": {
				"12": {
					"type": "return"
				}
			}
		},
		"12610": {
			"5": {
				"9": {
					"type": "return"
				}
			}
		},
		"12611": {
			"14": {
				"13": {
					"type": "return"
				}
			}
		},
		"12612": {
			"4": {
				"2": {
					"targetMap": 12618,
					"targetX": 24,
					"targetY": 1,
					"type": "warp"
				},
				"4": {
					"event": 72,
					"type": "event"
				},
				"11": {
					"type": "return"
				}
			}
		},
		"12613": {
			"3": {
				"18": {
					"contents": 227,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"4": {
				"18": {
					"contents": 1000,
					"treasure": "gp",
					"type": "treasure"
				}
			},
			"5": {
				"4": {
					"contents": 86,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"6": {
				"4": {
					"contents": 87,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"7": {
				"4": {
					"contents": 88,
					"treasure": "item",
					"type": "treasure"
				},
				"19": {
					"type": "return"
				},
				"29": {
					"targetMap": 12614,
					"targetX": 6,
					"targetY": 27,
					"type": "warp"
				}
			},
			"10": {
				"5": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				},
				"6": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"16": {
				"1": {
					"type": "return"
				},
				"19": {
					"targetMap": 12614,
					"targetX": 17,
					"targetY": 18,
					"type": "warp"
				},
				"27": {
					"type": "return"
				}
			},
			"28": {
				"5": {
					"contents": 92,
					"treasure": "item",
					"type": "treasure"
				},
				"6": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"29": {
				"5": {
					"contents": 81,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12614": {
			"4": {
				"8": {
					"targetMap": 12615,
					"targetX": 5,
					"targetY": 7,
					"type": "warp"
				},
				"17": {
					"targetMap": 12613,
					"targetX": 7,
					"targetY": 18,
					"type": "warp"
				}
			},
			"6": {
				"26": {
					"type": "return"
				}
			},
			"11": {
				"6": {
					"contents": 485,
					"reward": 50,
					"treasure": "battle",
					"type": "treasure"
				},
				"15": {
					"targetMap": 12615,
					"targetX": 13,
					"targetY": 12,
					"type": "warp"
				}
			},
			"14": {
				"25": {
					"targetMap": 12613,
					"targetX": 16,
					"targetY": 26,
					"type": "warp"
				}
			},
			"17": {
				"17": {
					"type": "return"
				}
			},
			"18": {
				"8": {
					"type": "return"
				}
			},
			"23": {
				"13": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				},
				"15": {
					"contents": 2000,
					"treasure": "gp",
					"type": "treasure"
				},
				"27": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				},
				"29": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"25": {
				"13": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				},
				"15": {
					"contents": 3000,
					"treasure": "gp",
					"type": "treasure"
				},
				"28": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"28": {
				"29": {
					"targetMap": 12615,
					"targetX": 29,
					"targetY": 28,
					"type": "warp"
				}
			},
			"29": {
				"28": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				},
				"29": {
					"contents": 208,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12615": {
			"1": {
				"9": {
					"contents": 211,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"5": {
				"6": {
					"type": "return"
				}
			},
			"10": {
				"4": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"11": {
				"4": {
					"contents": 12,
					"treasure": "item",
					"type": "treasure"
				},
				"5": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"13": {
				"11": {
					"type": "return"
				}
			},
			"19": {
				"1": {
					"targetMap": 12614,
					"targetX": 18,
					"targetY": 7,
					"type": "warp"
				},
				"8": {
					"targetMap": 12616,
					"targetX": 2,
					"targetY": 6,
					"type": "warp"
				}
			},
			"21": {
				"19": {
					"targetMap": 12617,
					"targetX": 11,
					"targetY": 7,
					"type": "warp"
				}
			}
		},
		"12616": {
			"7": {
				"5": {
					"contents": 486,
					"reward": 211,
					"treasure": "battle",
					"type": "treasure"
				},
				"7": {
					"contents": 487,
					"reward": 67,
					"treasure": "battle",
					"type": "treasure"
				}
			},
			"9": {
				"5": {
					"contents": 486,
					"reward": 211,
					"treasure": "battle",
					"type": "treasure"
				},
				"7": {
					"contents": 488,
					"reward": 76,
					"treasure": "battle",
					"type": "treasure"
				}
			},
			"11": {
				"5": {
					"contents": 486,
					"reward": 211,
					"treasure": "battle",
					"type": "treasure"
				},
				"7": {
					"contents": 489,
					"reward": 94,
					"treasure": "battle",
					"type": "treasure"
				}
			},
			"16": {
				"6": {
					"targetMap": 4096,
					"targetX": 13,
					"targetY": 15,
					"type": "warp"
				}
			}
		},
		"12617": {
			"9": {
				"4": {
					"targetMap": 12617,
					"targetX": 27,
					"targetY": 8,
					"type": "warp"
				}
			},
			"11": {
				"10": {
					"type": "return"
				}
			},
			"13": {
				"3": {
					"contents": 5,
					"treasure": "item",
					"type": "treasure"
				},
				"5": {
					"contents": 6,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"27": {
				"4": {
					"targetMap": 4096,
					"targetX": 13,
					"targetY": 15,
					"type": "warp"
				},
				"8": {
					"type": "return"
				}
			}
		},
		"12618": {
			"8": {
				"7": {
					"targetMap": 12620,
					"targetX": 5,
					"targetY": 13,
					"type": "warp"
				}
			},
			"9": {
				"9": {
					"event": 65,
					"type": "event"
				},
				"15": {
					"event": 66,
					"type": "event"
				}
			},
			"18": {
				"28": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"24": {
				"2": {
					"type": "return"
				}
			},
			"25": {
				"22": {
					"targetMap": 12619,
					"targetX": 9,
					"targetY": 13,
					"type": "warp"
				}
			},
			"26": {
				"9": {
					"event": 65,
					"type": "event"
				},
				"15": {
					"event": 66,
					"type": "event"
				}
			}
		},
		"12619": {
			"2": {
				"5": {
					"contents": 45,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"9": {
				"14": {
					"type": "return"
				}
			},
			"14": {
				"5": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12620": {
			"2": {
				"6": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"5": {
				"14": {
					"type": "return"
				}
			},
			"6": {
				"3": {
					"targetMap": 12632,
					"targetX": 5,
					"targetY": 8,
					"type": "warp"
				}
			},
			"12": {
				"4": {
					"targetMap": 12632,
					"targetX": 5,
					"targetY": 8,
					"type": "warp"
				}
			},
			"14": {
				"13": {
					"targetMap": 12621,
					"targetX": 20,
					"targetY": 21,
					"type": "warp"
				}
			},
			"16": {
				"7": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12621": {
			"4": {
				"26": {
					"targetMap": 12625,
					"targetX": 11,
					"targetY": 12,
					"type": "warp"
				}
			},
			"5": {
				"3": {
					"targetMap": 12622,
					"targetX": 6,
					"targetY": 11,
					"type": "warp"
				}
			},
			"9": {
				"6": {
					"targetMap": 12632,
					"targetX": 26,
					"targetY": 9,
					"type": "warp"
				}
			},
			"12": {
				"12": {
					"event": 67,
					"type": "event"
				}
			},
			"14": {
				"4": {
					"targetMap": 12632,
					"targetX": 5,
					"targetY": 8,
					"type": "warp"
				}
			},
			"18": {
				"3": {
					"targetMap": 12623,
					"targetX": 7,
					"targetY": 17,
					"type": "warp"
				}
			},
			"20": {
				"20": {
					"type": "return"
				},
				"23": {
					"event": 65,
					"type": "event"
				},
				"29": {
					"event": 66,
					"type": "event"
				}
			},
			"22": {
				"23": {
					"event": 70,
					"type": "event"
				}
			},
			"23": {
				"6": {
					"targetMap": 12624,
					"targetX": 6,
					"targetY": 11,
					"type": "warp"
				}
			},
			"29": {
				"6": {
					"targetMap": 12632,
					"targetX": 5,
					"targetY": 8,
					"type": "warp"
				},
				"26": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"30": {
				"19": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12622": {
			"3": {
				"5": {
					"contents": 45,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"6": {
				"12": {
					"type": "return"
				}
			},
			"9": {
				"5": {
					"contents": 127,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12623": {
			"3": {
				"5": {
					"contents": 211,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"4": {
				"7": {
					"contents": 65,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"7": {
				"18": {
					"type": "return"
				}
			},
			"19": {
				"9": {
					"contents": 5000,
					"treasure": "gp",
					"type": "treasure"
				}
			}
		},
		"12624": {
			"6": {
				"3": {
					"contents": 26,
					"treasure": "item",
					"type": "treasure"
				},
				"12": {
					"type": "return"
				}
			}
		},
		"12625": {
			"2": {
				"14": {
					"targetMap": 12627,
					"targetX": 7,
					"targetY": 4,
					"type": "warp"
				}
			},
			"9": {
				"5": {
					"contents": 209,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"11": {
				"13": {
					"type": "return"
				}
			}
		},
		"12626": {
			"4": {
				"6": {
					"type": "return"
				}
			},
			"7": {
				"21": {
					"targetMap": 12630,
					"targetX": 6,
					"targetY": 4,
					"type": "warp"
				}
			},
			"16": {
				"8": {
					"event": 68,
					"type": "event"
				},
				"28": {
					"event": 69,
					"type": "event"
				}
			},
			"22": {
				"11": {
					"targetMap": 12632,
					"targetX": 5,
					"targetY": 8,
					"type": "warp"
				}
			},
			"25": {
				"9": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				},
				"25": {
					"targetMap": 12628,
					"targetX": 6,
					"targetY": 11,
					"type": "warp"
				}
			}
		},
		"12627": {
			"3": {
				"5": {
					"targetMap": 12632,
					"targetX": 5,
					"targetY": 8,
					"type": "warp"
				}
			},
			"6": {
				"13": {
					"targetMap": 12626,
					"targetX": 4,
					"targetY": 7,
					"type": "warp"
				}
			},
			"7": {
				"3": {
					"type": "return"
				}
			},
			"10": {
				"10": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"12": {
				"8": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12628": {
			"3": {
				"10": {
					"contents": 210,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"6": {
				"12": {
					"type": "return"
				}
			},
			"9": {
				"5": {
					"contents": 208,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12629": {
			"9": {
				"8": {
					"event": 70,
					"type": "event"
				}
			},
			"15": {
				"3": {
					"type": "return"
				},
				"11": {
					"targetMap": 12631,
					"targetX": 15,
					"targetY": 22,
					"type": "warp"
				}
			},
			"21": {
				"8": {
					"event": 70,
					"type": "event"
				}
			}
		},
		"12630": {
			"6": {
				"3": {
					"type": "return"
				},
				"18": {
					"targetMap": 12629,
					"targetX": 15,
					"targetY": 4,
					"type": "warp"
				}
			}
		},
		"12631": {
			"15": {
				"3": {
					"targetMap": 12633,
					"targetX": 9,
					"targetY": 19,
					"type": "warp"
				},
				"6": {
					"event": 71,
					"type": "event"
				},
				"21": {
					"type": "return"
				}
			}
		},
		"12632": {
			"5": {
				"9": {
					"type": "return"
				}
			},
			"26": {
				"10": {
					"type": "return"
				}
			}
		},
		"12633": {
			"9": {
				"20": {
					"type": "return"
				}
			}
		},
		"12634": {
			"8": {
				"6": {
					"type": "return"
				},
				"24": {
					"contents": 164,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"23": {
				"26": {
					"targetMap": 12635,
					"targetX": 25,
					"targetY": 28,
					"type": "warp"
				}
			},
			"28": {
				"11": {
					"contents": 106,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12635": {
			"6": {
				"11": {
					"contents": 138,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"17": {
				"12": {
					"event": 86,
					"type": "event"
				}
			},
			"20": {
				"6": {
					"targetMap": 12636,
					"targetX": 25,
					"targetY": 11,
					"type": "warp"
				}
			},
			"25": {
				"27": {
					"type": "return"
				}
			},
			"26": {
				"13": {
					"contents": 116,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12636": {
			"8": {
				"26": {
					"event": 87,
					"type": "event"
				}
			},
			"25": {
				"10": {
					"type": "return"
				},
				"16": {
					"event": 89,
					"type": "event"
				}
			}
		},
		"12640": {
			"4": {
				"17": {
					"event": 75,
					"type": "event"
				}
			},
			"16": {
				"5": {
					"targetMap": 12641,
					"targetX": 16,
					"targetY": 28,
					"type": "warp"
				},
				"21": {
					"event": 74,
					"type": "event"
				},
				"29": {
					"type": "return"
				}
			},
			"28": {
				"17": {
					"event": 76,
					"type": "event"
				}
			}
		},
		"12641": {
			"16": {
				"16": {
					"event": 77,
					"type": "event"
				},
				"29": {
					"type": "return"
				}
			}
		},
		"12643": {
			"12": {
				"31": {
					"targetMap": 8192,
					"targetX": 18,
					"targetY": 21,
					"type": "warp"
				}
			},
			"19": {
				"4": {
					"targetMap": 8192,
					"targetX": 18,
					"targetY": 15,
					"type": "warp"
				}
			},
			"26": {
				"22": {
					"contents": 490,
					"reward": 211,
					"treasure": "battle",
					"type": "treasure"
				}
			},
			"28": {
				"6": {
					"contents": 207,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"29": {
				"7": {
					"contents": 221,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12644": {
			"9": {
				"26": {
					"targetMap": 8192,
					"targetX": 40,
					"targetY": 29,
					"type": "warp"
				}
			},
			"21": {
				"5": {
					"targetMap": 8192,
					"targetX": 41,
					"targetY": 25,
					"type": "warp"
				}
			}
		},
		"12645": {
			"10": {
				"17": {
					"type": "return"
				}
			}
		},
		"12647": {
			"6": {
				"18": {
					"targetMap": 12647,
					"targetX": 24,
					"targetY": 20,
					"type": "warp"
				},
				"24": {
					"contents": 491,
					"reward": 155,
					"treasure": "battle",
					"type": "treasure"
				}
			},
			"13": {
				"13": {
					"type": "return"
				}
			},
			"16": {
				"24": {
					"targetMap": 12648,
					"targetX": 19,
					"targetY": 25,
					"type": "warp"
				}
			},
			"24": {
				"17": {
					"targetMap": 12648,
					"targetX": 26,
					"targetY": 20,
					"type": "warp"
				},
				"20": {
					"type": "return"
				}
			}
		},
		"12648": {
			"4": {
				"26": {
					"targetMap": 12649,
					"targetX": 4,
					"targetY": 27,
					"type": "warp"
				}
			},
			"10": {
				"4": {
					"contents": 107,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"14": {
				"15": {
					"type": "return"
				}
			},
			"15": {
				"4": {
					"targetMap": 12649,
					"targetX": 15,
					"targetY": 5,
					"type": "warp"
				}
			},
			"19": {
				"24": {
					"type": "return"
				}
			},
			"22": {
				"19": {
					"targetMap": 12648,
					"targetX": 14,
					"targetY": 15,
					"type": "warp"
				}
			},
			"25": {
				"23": {
					"contents": 54,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"26": {
				"12": {
					"contents": 492,
					"reward": 20,
					"treasure": "battle",
					"type": "treasure"
				},
				"19": {
					"type": "return"
				}
			}
		},
		"12649": {
			"4": {
				"26": {
					"type": "return"
				}
			},
			"14": {
				"28": {
					"contents": 165,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"15": {
				"4": {
					"type": "return"
				}
			},
			"16": {
				"15": {
					"targetMap": 12650,
					"targetX": 9,
					"targetY": 7,
					"type": "warp"
				}
			},
			"23": {
				"24": {
					"contents": 139,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"25": {
				"16": {
					"contents": 117,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12650": {
			"6": {
				"24": {
					"contents": 499,
					"reward": 13,
					"treasure": "battle",
					"type": "treasure"
				}
			},
			"8": {
				"13": {
					"targetMap": 12659,
					"targetX": 3,
					"targetY": 9,
					"type": "warp"
				}
			},
			"9": {
				"6": {
					"type": "return"
				}
			},
			"10": {
				"20": {
					"type": "return"
				}
			},
			"16": {
				"31": {
					"targetMap": 12651,
					"targetX": 16,
					"targetY": 2,
					"type": "warp"
				}
			},
			"25": {
				"24": {
					"targetMap": 12660,
					"targetX": 24,
					"targetY": 19,
					"type": "warp"
				}
			},
			"28": {
				"7": {
					"contents": 95,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12651": {
			"1": {
				"15": {
					"contents": 500,
					"reward": 174,
					"treasure": "battle",
					"type": "treasure"
				},
				"28": {
					"type": "return"
				}
			},
			"3": {
				"6": {
					"targetMap": 12664,
					"targetX": 3,
					"targetY": 4,
					"type": "warp"
				}
			},
			"5": {
				"20": {
					"contents": 498,
					"reward": 118,
					"treasure": "battle",
					"type": "treasure"
				}
			},
			"7": {
				"9": {
					"contents": 494,
					"reward": 108,
					"treasure": "battle",
					"type": "treasure"
				}
			},
			"11": {
				"13": {
					"targetMap": 12661,
					"targetX": 5,
					"targetY": 15,
					"type": "warp"
				}
			},
			"14": {
				"20": {
					"targetMap": 12662,
					"targetX": 9,
					"targetY": 15,
					"type": "warp"
				},
				"27": {
					"type": "return"
				}
			},
			"16": {
				"1": {
					"type": "return"
				}
			},
			"19": {
				"8": {
					"type": "return"
				}
			},
			"20": {
				"14": {
					"type": "return"
				},
				"31": {
					"targetMap": 12652,
					"targetX": 20,
					"targetY": 1,
					"type": "warp"
				}
			},
			"22": {
				"21": {
					"type": "return"
				}
			},
			"23": {
				"27": {
					"targetMap": 12663,
					"targetX": 2,
					"targetY": 9,
					"type": "warp"
				}
			},
			"26": {
				"11": {
					"contents": 496,
					"reward": 140,
					"treasure": "battle",
					"type": "treasure"
				}
			},
			"27": {
				"16": {
					"contents": 497,
					"reward": 166,
					"treasure": "battle",
					"type": "treasure"
				}
			}
		},
		"12652": {
			"1": {
				"4": {
					"targetMap": 12651,
					"targetX": 1,
					"targetY": 28,
					"type": "warp"
				},
				"17": {
					"type": "return"
				}
			},
			"6": {
				"27": {
					"contents": 212,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"8": {
				"8": {
					"targetMap": 12652,
					"targetX": 8,
					"targetY": 20,
					"type": "warp"
				},
				"19": {
					"type": "return"
				}
			},
			"15": {
				"5": {
					"contents": 95,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"18": {
				"17": {
					"contents": 227,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"20": {
				"0": {
					"type": "return"
				}
			},
			"22": {
				"21": {
					"targetMap": 12665,
					"targetX": 5,
					"targetY": 13,
					"type": "warp"
				}
			},
			"25": {
				"5": {
					"contents": 65,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"30": {
				"23": {
					"targetMap": 12652,
					"targetX": 1,
					"targetY": 17,
					"type": "warp"
				}
			}
		},
		"12653": {
			"3": {
				"7": {
					"type": "return"
				}
			},
			"13": {
				"20": {
					"targetMap": 12667,
					"targetX": 3,
					"targetY": 14,
					"type": "warp"
				}
			},
			"17": {
				"7": {
					"targetMap": 12654,
					"targetX": 17,
					"targetY": 8,
					"type": "warp"
				}
			},
			"19": {
				"20": {
					"targetMap": 12666,
					"targetX": 3,
					"targetY": 10,
					"type": "warp"
				}
			},
			"25": {
				"20": {
					"targetMap": 12668,
					"targetX": 3,
					"targetY": 10,
					"type": "warp"
				}
			}
		},
		"12654": {
			"7": {
				"11": {
					"contents": 65,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"17": {
				"7": {
					"type": "return"
				},
				"19": {
					"targetMap": 12655,
					"targetX": 15,
					"targetY": 8,
					"type": "warp"
				}
			}
		},
		"12655": {
			"13": {
				"24": {
					"contents": 237,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"15": {
				"7": {
					"type": "return"
				}
			},
			"21": {
				"10": {
					"contents": 211,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"22": {
				"23": {
					"targetMap": 12656,
					"targetX": 21,
					"targetY": 7,
					"type": "warp"
				}
			}
		},
		"12656": {
			"7": {
				"15": {
					"contents": 65,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"21": {
				"7": {
					"type": "return"
				}
			},
			"23": {
				"24": {
					"targetMap": 12657,
					"targetX": 25,
					"targetY": 8,
					"type": "warp"
				}
			},
			"24": {
				"14": {
					"contents": 65,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12657": {
			"6": {
				"20": {
					"targetMap": 12658,
					"targetX": 15,
					"targetY": 23,
					"type": "warp"
				}
			},
			"25": {
				"8": {
					"type": "return"
				}
			}
		},
		"12658": {
			"15": {
				"15": {
					"event": 85,
					"type": "event"
				},
				"23": {
					"type": "return"
				}
			}
		},
		"12659": {
			"3": {
				"6": {
					"contents": 211,
					"treasure": "item",
					"type": "treasure"
				},
				"10": {
					"type": "return"
				}
			}
		},
		"12660": {
			"2": {
				"14": {
					"contents": 208,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"6": {
				"13": {
					"targetMap": 12650,
					"targetX": 10,
					"targetY": 21,
					"type": "warp"
				}
			},
			"23": {
				"5": {
					"contents": 208,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"24": {
				"20": {
					"type": "return"
				}
			}
		},
		"12661": {
			"5": {
				"16": {
					"type": "return"
				}
			},
			"13": {
				"4": {
					"contents": 174,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"20": {
				"21": {
					"targetMap": 12651,
					"targetX": 20,
					"targetY": 15,
					"type": "warp"
				}
			},
			"22": {
				"7": {
					"targetMap": 12651,
					"targetX": 22,
					"targetY": 22,
					"type": "warp"
				}
			}
		},
		"12662": {
			"3": {
				"14": {
					"contents": 147,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"6": {
				"3": {
					"targetMap": 12651,
					"targetX": 14,
					"targetY": 28,
					"type": "warp"
				}
			},
			"9": {
				"16": {
					"type": "return"
				}
			}
		},
		"12663": {
			"2": {
				"10": {
					"type": "return"
				}
			},
			"7": {
				"5": {
					"contents": 227,
					"treasure": "item",
					"type": "treasure"
				}
			}
		},
		"12664": {
			"3": {
				"4": {
					"type": "return"
				},
				"11": {
					"targetMap": 12651,
					"targetX": 19,
					"targetY": 9,
					"type": "warp"
				}
			}
		},
		"12665": {
			"2": {
				"4": {
					"contents": 493,
					"reward": 149,
					"treasure": "battle",
					"type": "treasure"
				}
			},
			"5": {
				"14": {
					"type": "return"
				}
			},
			"10": {
				"4": {
					"targetMap": 12653,
					"targetX": 3,
					"targetY": 8,
					"type": "warp"
				}
			}
		},
		"12666": {
			"3": {
				"11": {
					"type": "return"
				}
			}
		},
		"12667": {
			"3": {
				"15": {
					"type": "return"
				}
			}
		},
		"12668": {
			"2": {
				"5": {
					"contents": 124,
					"treasure": "item",
					"type": "treasure"
				}
			},
			"3": {
				"8": {
					"event": 80,
					"type": "event"
				},
				"11": {
					"type": "return"
				}
			},
			"4": {
				"5": {
					"contents": 124,
					"treasure": "item",
					"type": "treasure"
				}
			}
		}
	};

	var EVENTS = {
		0x01: 'Open a Door',
		0x02: 'No Event (Cut Content?)',
		0x03: 'Baigan Battle',
		0x04: 'Rosa Greeting Cecil',
		0x05: 'Prologue',
		0x06: 'Take Serpent Road to Mysidia',
		0x07: 'Sealed with Unknown Power',
		0x08: 'Odin Battle',
		0x09: 'Misty Cave Message 1',
		0x0A: 'Misty Cave Message 2',
		0x0B: 'D.Mist Battle',
		0x0C: 'Mist Events',
		0x0D: 'Kaipo Events, Rydia Joining',
		0x0E: 'Waterfalls Jump',
		0x0F: 'Octomamm Battle',
		0x10: 'Damcyan Bombing',
		0x11: 'Tellah Raging, Edward Joining',
		0x12: 'Antlion Battle',
		0x13: 'Rydia Learns Fire1',
		0x14: 'Yang Joins, MomBomb Battle',
		0x15: 'Fabul Gauntlet',
		0x16: 'Cid Greeting Cecil',
		0x17: 'Watery Pass Camping Scene',
		0x18: 'Open a Remote Door',
		0x19: 'Fabul Strategy Meeting',
		0x1A: 'Palom Extinguishes a Fire',
		0x1B: 'Tellah Joins on Mt.Ordeals',
		0x1C: 'Mt.Ordeals Summit Message 1',
		0x1D: 'Mt.Ordeals Summit Message 2',
		0x1E: 'Milon Battle',
		0x1F: 'Cecil Becomes a Paladin, Tellah Remembers',
		0x20: 'Take Serpent Road to Baron',
		0x21: 'Milon Z. Battle',
		0x22: 'Warp to Castle Baron 3F Bottom',
		0x23: 'Warp to Castle Baron 3F Top',
		0x24: 'Finding Edward in Toroia',
		0x25: 'Conversation Exiting Watery Pass-North',
		0x26: 'Magus Sisters Battle',
		0x27: 'Tellah Dies, Kain and Rosa Join',
		0x28: 'Valvalis Battle',
		0x29: 'Finding Rosa Sick in Bed',
		0x2A: 'Cave Magnes Entrance Message',
		0x2B: 'Fabul Boat',
		0x2C: 'Talking to Clerics with Earth Crystal',
		0x2E: 'Warp to Castle Baron B1F',
		0x30: 'Various Giott Events',
		0x31: 'Exit the Tower of Zot',
		0x32: 'Resting in King of Fabul\'s Bed',
		0x33: 'Dr. Lugae Battles',
		0x34: 'Super Cannon Destruction, Yang Leaves',
		0x35: 'Jump from Tower of Bab-il',
		0x36: 'Bab-il and Tank Combat',
		0x37: 'Was it Flame? Edge Gets Shown How...',
		0x38: 'Ninja into Bab-il',
		0x39: 'Ninja Out of Bab-il',
		0x3A: 'K.Eblan/Q.Eblan Battle',
		0x3B: 'Fall to Lower Bab-il',
		0x3C: 'Warp to Mysidia Room of Wishes',
		0x3E: 'Finding the Falcon',
		0x3F: 'Cid Meets Edge, Falcon Gets Heat Shield',
		0x40: 'Land of Monsters Dialogue',
		0x41: 'Climbing a Rope Down',
		0x42: 'Climbing a Rope Up',
		0x43: 'Climbing a Long Rope to Nowhere and Returning',
		0x44: 'Climbing a Long Rope Down',
		0x45: 'Climbing a Long Rope Up',
		0x46: 'Climbing a Short Rope to Nowhere and Returning',
		0x47: 'EvilWall Battle',
		0x48: 'Kain Steals the Darkness Crystal',
		0x49: 'Big Whale Surfacing',
		0x4A: 'FuSoYa Joins',
		0x4B: 'Restore HP',
		0x4C: 'Restore MP',
		0x4D: 'Warp to Lunar Subterrane',
		0x4F: 'Elements Battle',
		0x50: 'Obtaining Ribbon',
		0x51: 'CPU Battle',
		0x53: 'Resting for Free',
		0x55: 'Zeromus Battle, Ending',
		0x56: 'Cave Bahamut Behemoth Battle 1',
		0x57: 'Cave Bahamut Behemoth Battle 3',
		0x58: 'Warp to Tower of Bab-il 1F',
		0x59: 'Cave Bahamut Behemoth Battle 2',
	};

	var EVENTWARPS = {
		0x06: {
			targetMap: 0x3089,
			targetX: 4,
			targetY: 5
		},
		0x20: {
			targetMap: 0x3097,
			targetX: 5,
			targetY: 5
		},
		0x22: {
			targetMap: 0x308A,
			targetX: 23,
			targetY: 6
		},
		0x23: {
			targetMap: 0x308A,
			targetX: 23,
			targetY: 3
		},
		0x2E: {
			targetMap: 0x303C,
			targetX: 14,
			targetY: 3
		},
		0x3B: {
			targetMap: 0x311D,
			targetX: 6,
			targetY: 4
		},
		0x3C: {
			targetMap: 0x3017,
			targetX: 5,
			targetY: 12
		},
		0x4D: {
			targetMap: 0x3167,
			targetX: 13,
			targetY: 13
		},
		0x58: {
			targetMap: 0x3121,
			targetX: 15,
			targetY: 24
		},
	};

	var FORMATIONS = {
		0x000: 'Imp x3',
		0x001: 'FloatEye x2',
		0x002: 'FloatEye x1, Eagle x2',
		0x003: 'Eagle x3',
		0x004: 'Imp x3, SwordRat x1',
		0x005: 'SwordRat x2, Imp x2',
		0x006: 'Imp x4',
		0x007: 'Larva x3',
		0x008: 'SandMoth x2, Larva x2',
		0x009: 'Sand Man x4',
		0x00A: 'Sandpede x1, Sand Man x2',
		0x00B: 'SandWorm x1',
		0x00C: 'EvilShel x3, WaterBug x1',
		0x00D: 'Pike x3',
		0x00E: 'CaveToad x3',
		0x00F: 'Pike x2, EvilShel x2',
		0x010: 'Zombie x4',
		0x011: 'Pike x2, EvilShel x2, WaterBug x2',
		0x012: 'Jelly x4',
		0x013: 'TinyMage x2, WaterHag x4',
		0x014: 'CaveToad x4',
		0x015: 'CaveToad x2, Mad Toad x2',
		0x016: 'Aligator x1, Pike x2',
		0x017: 'Aligator x2',
		0x018: 'Zombie x6',
		0x019: 'Aligator x1, WaterBug x2',
		0x01A: 'Mad Toad x4',
		0x01B: 'TinyMage x4',
		0x01C: 'Imp x8',
		0x01D: 'SwordRat x2, Imp x2, TinyMage x2',
		0x01E: 'SandWorm x1, Sandpede x1',
		0x01F: 'SandWorm x2',
		0x020: 'Imp x3, Imp Cap. x1',
		0x021: 'Turtle x1, Imp x2',
		0x022: 'Cream x4',
		0x023: 'Basilisk x1, Imp x3',
		0x024: 'Turtle x2',
		0x025: 'Weeper x1, Turtle x1, Basilisk x1',
		0x026: 'Basilisk x1, Turtle x1',
		0x027: 'Weeper x2',
		0x028: 'Skelton x4',
		0x029: 'Spirit x2',
		0x02A: 'Gargoyle x1, Cocktric x2',
		0x02B: 'Bomb x3',
		0x02C: 'Cocktric x3',
		0x02D: 'Gargoyle x2',
		0x02E: 'GrayBomb x2, Bomb x2',
		0x02F: 'Spirit x2, Skelton x2',
		0x031: 'Red Bone x1, Skelton x3',
		0x032: 'GrayBomb x2, Bomb x4',
		0x033: 'Spirit x3, Skelton x2, Red Bone x1',
		0x034: 'Imp Cap. x3, Needler x1',
		0x035: 'Imp Cap. x3, Needler x3',
		0x036: 'Imp Cap. x4, Imp x2',
		0x037: 'SwordRat x3, Needler x3',
		0x038: 'Raven x1',
		0x039: 'Raven x1, Cocktric x3',
		0x03A: 'Needler x2, SwordRat x2',
		0x03C: 'Spirit x3, Soul x1',
		0x03D: 'Soul x2, Red Bone x2',
		0x03E: 'Skelton x3, Red Bone x2',
		0x03F: 'Lilith x1, Red Bone x2',
		0x040: 'Ghoul x1, Red Bone x2, Skelton x2',
		0x041: 'Spirit x2, Soul x2, Red Bone x2',
		0x042: 'Zombie x2, Ghoul x2',
		0x043: 'Ghoul x2, Soul x2',
		0x044: 'Revenant x1, Ghoul x3',
		0x045: 'Zombie x3, Ghoul x2, Revenant x2',
		0x046: 'Lilith x1',
		0x047: 'Soul x2, Ghoul x2, Revenant x2',
		0x048: 'Soul x3, Ghoul x1, Revenant x1',
		0x049: 'Lilith x2',
		0x04A: 'Piranha x2, FangShel x1, EvilShel x1',
		0x04B: 'Pike x3, Piranha x3',
		0x04C: 'Crocdile x1, Piranha x2',
		0x04D: 'FangShel x3, Aligator x1, Crocdile x1',
		0x04E: 'Piranha x2, ElecFish x2',
		0x04F: 'Crocdile x1, ElecFish x3',
		0x050: 'AquaWorm x1, Piranha x3',
		0x051: 'Hydra x2',
		0x052: 'Crocdile x2',
		0x053: 'AquaWorm x1, ElecFish x3',
		0x054: 'AquaWorm x1, Hydra x1, Crocdile x1',
		0x055: 'Guard x2',
		0x056: 'Guard x1, Hydra x2',
		0x057: 'AquaWorm x2',
		0x058: 'StingRat x3, Treant x2',
		0x059: 'Panther x1, StingRat x3',
		0x05A: 'Cannibal x1, Treant x2',
		0x05B: 'Python x1, StingRat x2',
		0x05C: 'Ogre x1, Panther x2',
		0x05D: 'Ogre x2',
		0x05E: 'Cave Bat x3',
		0x05F: 'Panther x2',
		0x060: 'Mage x2',
		0x061: 'CaveNaga x1, Ogre x1',
		0x062: 'CaveNaga x1, Python x2',
		0x063: 'Ogre x3',
		0x064: 'VampGirl x1, Cave Bat x3',
		0x065: 'Mage x1, Panther x1, Ogre x1',
		0x066: 'Panther x2, Ogre x2',
		0x067: 'CaveNaga x2, Python x2',
		0x068: 'VampGirl x2, Cave Bat x3',
		0x069: 'Panther x2, Ogre x1, CaveNaga x1',
		0x06A: 'VampGirl x1, Cave Bat x6',
		0x06B: 'Marion (summons Puppet) x1, Puppet x2',
		0x06C: 'Marion (summons Puppet) x1, Puppet x3',
		0x06D: 'Centaur x1, IceBeast x2',
		0x06E: 'Centaur x2, IceBeast x2',
		0x06F: 'Centaur x3',
		0x070: 'Centaur x1, Gremlin x2',
		0x071: 'Slime x4',
		0x072: 'Ice Liz x1, Slime x3',
		0x073: 'Jelly x1, Slime x2, Cream x1',
		0x074: 'Gremlin x2, Ice Liz x2',
		0x075: 'Carapace x2, Ice Liz x2',
		0x076: 'SwordMan x2',
		0x077: 'SwordMan x1, Ice Liz x2',
		0x079: 'SwordMan x1, IceBeast x2',
		0x07A: 'EpeeGirl x2, SwordMan x2',
		0x07B: 'EpeeGirl x3',
		0x07D: 'EpeeGirl x1, Ice Liz x1, IceBeast x1',
		0x07F: 'Witch x1, IceBeast x2, EpeeGirl x1',
		0x080: 'Witch x1, SwordMan x2, EpeeGirl x1',
		0x081: 'Witch x1, EpeeGirl x2',
		0x088: 'Roc x1, Roc Baby x2',
		0x089: 'Roc x1, Roc Baby x3',
		0x08A: 'HugeCell x4',
		0x08B: 'HugeCell x3',
		0x08C: 'GiantBat x3',
		0x08D: 'GiantBat x4',
		0x08E: 'GiantBat x3, Cave Bat x3',
		0x08F: 'Ironback x2',
		0x090: 'Ironback x1, Armadilo x1, BlackLiz x1',
		0x091: 'Ironback x2, BlackLiz x2',
		0x092: 'Skull x3',
		0x093: 'Skull x4',
		0x094: 'Red Bone x3, Skull x2',
		0x095: 'Staleman x1',
		0x096: 'Staleman x1, Skull x2',
		0x097: 'Staleman x1, Skull x2, Red Bone x2',
		0x098: 'Mad Ogre x2',
		0x099: 'Mad Ogre x3',
		0x09B: 'BlackCat x2',
		0x09C: 'BlackCat x3',
		0x09D: 'Lamia x1, BlackCat x1, Mad Ogre x1',
		0x09E: 'Mad Ogre x1, BlackCat x2',
		0x09F: 'Mad Ogre x2, BlackCat x2',
		0x0A0: 'Egg (Lamia) x1',
		0x0A4: 'BlackCat x2, Lamia x1',
		0x0A5: 'BlackCat x2, Lamia x2',
		0x0A6: 'Balloon x3',
		0x0A7: 'Balloon x4',
		0x0A8: 'Mad Ogre x1, BlackCat x1, Balloon x2',
		0x0A9: 'Grudger x1, Mad Ogre x1, Balloon x2',
		0x0AA: 'Grudger x2',
		0x0AC: 'Balloon x3, Grudger x1',
		0x0AE: 'BladeMan x3',
		0x0B2: 'Egg (Green D.)  x1',
		0x0B3: 'Sorcerer (summons Mad Ogre) x1, BladeMan x2',
		0x0B4: 'Sorcerer (summons BlackCat) x1, BladeMan x2',
		0x0B5: 'Sorcerer (summons BladeMan) x1, BladeMan x2',
		0x0B6: 'Sorcerer (summons Green D.) x1, BladeMan x2',
		0x0B8: 'Searcher (summons Machine) x1',
		0x0B9: 'Searcher (summons Machine) x1, Machine x2',
		0x0BA: 'Machine x2, Beamer x1',
		0x0BB: 'Machine x2, Beamer x2',
		0x0BC: 'Searcher (summons Horseman) x1, Machine x2',
		0x0BD: 'Horseman x1, Machine x2',
		0x0BE: 'MacGiant x1',
		0x0BF: 'MacGiant x1',
		0x0C0: 'Horseman x1, Beamer x2',
		0x0C1: 'Horseman x1, Beamer x1, Machine x1',
		0x0C2: 'Searcher (summons MacGiant) x1',
		0x0C3: 'MacGiant x1, Horseman x1',
		0x0C4: 'Searcher (summons Horseman) x1, Beamer x2',
		0x0C5: 'Machine x2, Beamer x3',
		0x0C6: 'Horseman x2',
		0x0C7: 'D.Machin x1',
		0x0C8: 'Searcher (summons D.Machin) x1, Beamer x2',
		0x0C9: 'MacGiant x1, Machine x1, Beamer x1',
		0x0CA: 'MacGiant x1, Horseman x1, Beamer x1',
		0x0CC: 'Machine x3, Beamer x2',
		0x0CD: 'Beamer x1, Machine x2, Horseman x1',
		0x0CE: 'MacGiant x2',
		0x0D0: 'Imp x6',
		0x0D1: 'SwordRat x6',
		0x0D2: 'FlameDog x2, BlackLiz x2',
		0x101: 'Armadilo x2',
		0x102: 'Dark Imp x3, Armadilo x1, BlackLiz x1',
		0x103: 'Armadilo x1, Tortoise x2',
		0x104: 'Dark Imp x4',
		0x105: 'Tortoise x1, Dark Imp x2',
		0x106: 'Tortoise x2, Armadilo x1, BlackLiz x1',
		0x107: 'BlackLiz x3',
		0x108: 'Marion (summons EvilDoll) x1, EvilDoll x2',
		0x109: 'Marion (summons EvilDoll) x1, EvilDoll x3',
		0x10A: 'FlameDog x2',
		0x10B: 'FlameDog x3',
		0x10C: 'FlameDog x4',
		0x10D: 'FlameMan x1, FlameDog x2',
		0x10E: 'FlameMan x2, FlameDog x2',
		0x10F: 'BlackLiz x2',
		0x110: 'BlackLiz x3',
		0x111: 'Egg (BlackLiz) x1',
		0x112: 'Tortoise x2, BlackLiz x1',
		0x113: 'Tortoise x2, BlackLiz x2',
		0x114: 'Tofu x4',
		0x115: 'Tofu x6',
		0x116: 'Chimera x1, Tofu x3',
		0x117: 'Chimera x1',
		0x118: 'Chimera x2',
		0x119: 'Chimera x1, FlameMan x1',
		0x11A: 'Chimera x1, FlameMan x2',
		0x11B: 'Chimera x1, FlameDog x2',
		0x11C: 'Stoneman x1, Medusa x1',
		0x11D: 'Medusa x2',
		0x11E: 'Stoneman x2',
		0x11F: 'Alert (summons Chimera) x1',
		0x120: 'Alert (summons Stoneman) x1',
		0x121: 'Alert (summons Naga) x1',
		0x122: 'Alert (summons FlameDog) x1',
		0x128: 'Egg (Lamia) x1, Q.Lamia x1',
		0x129: 'Egg (Lamia) x3, Q.Lamia x1',
		0x12A: 'Q.Lamia x1, Egg (Lamia) x1, BlackCat x2',
		0x12B: 'Q.Lamia x1, Egg (Lamia) x3',
		0x12C: 'Ironman x1',
		0x12D: 'Ironman x2',
		0x12E: 'Ironman x1, BladeMan x2',
		0x12F: 'Green D. x1',
		0x130: 'BladeMan x1, BlackCat x1, Q.Lamia x1',
		0x131: 'Ironman x1, BlackCat x2',
		0x132: 'Sorcerer (summons Q.Lamia) x1, BlackCat x2',
		0x133: 'Sorcerer (summons Ironman) x1, BlackCat x2',
		0x134: 'Sorcerer (summons Q.Lamia) x1, BlackCat x2',
		0x135: 'Grudger x2, BladeMan x2',
		0x136: 'Grudger x1, BladeMan x2',
		0x137: 'Grudger x1, BlackCat x2, BladeMan x1',
		0x138: 'Centpede x1',
		0x139: 'TrapRose x1, Centpede x2',
		0x13A: 'TrapRose x2',
		0x13B: 'RocLarva x4',
		0x13C: 'RockMoth x2',
		0x13D: 'RockMoth x2, RocLarva x2',
		0x13E: 'TrapRose x1, RockMoth x2',
		0x13F: 'TrapRose x1, RockMoth x2, RocLarva x2',
        0x140: 'ToadLady x1, TinyToad x3',
        0x141: 'ToadLady x1, TinyToad x6',
        0x142: 'Molbol x2',
        0x143: 'Molbol x3',
        0x144: 'Molbol x1, Ghost x2',
        0x145: 'Ghost x3',
        0x146: 'Ghost x4',
        0x147: 'Molbol x1, Ghost x1, DarkTree x1',
        0x148: 'Ghost x3, DarkTree x2',
        0x149: 'DarkTree x2, Molbol x1, Ghost x1',
        0x14A: 'Centpede x1, Molbol x2',
        0x14B: 'DarkTree x2, Molbol x2',
		0x14C: 'Red Eye x2',
		0x14D: 'Red Eye x3',
		0x14F: 'Hooligan x1',
		0x150: 'Hooligan x2',
		0x151: 'Warrior x2, Fiend x2',
		0x152: 'Warrior x2, Fiend x4',
		0x153: 'Conjurer (summons Imp) x1',
		0x154: 'Conjurer (summons RockMoth) x1',
		0x155: 'Conjurer (summons Arachne) x1',
		0x156: 'Conjurer (summons HugeNaga) x1',
		0x157: 'Conjurer (summons Clapper) x1',
		0x158: 'Arachne x1',
		0x159: 'Arachne x2',
		0x15A: 'Clapper x1',
		0x15B: 'Clapper x2',
		0x160: 'Were Bat x4',
		0x161: 'Were Bat x3',
		0x162: 'VampLady x1, Were Bat x3',
		0x163: 'VampLady x1, Were Bat x6',
		0x164: 'VampLady x2, Were Bat x3',
		0x166: 'Screamer x2',
		0x167: 'Mantcore x1, Screamer x1',
		0x168: 'HugeNaga x2',
		0x169: 'Screamer x1, HugeNaga x1',
		0x16A: 'HugeNaga x1, Screamer x2',
		0x170: 'MoonCell x2, Pudding x2',
		0x172: 'Juclyote x2, MoonCell x2, Grenade x1',
		0x173: 'Procyote x1, Juclyote x2',
		0x174: 'Procyote x1, Pudding x2',
		0x175: 'Juclyote x1, Procyote x2',
		0x176: 'Red Worm x1, Procyote x1, Juclyote x1',
		0x177: 'Red Worm x2',
		0x180: 'Warlock x1',
		0x181: 'Warlock x1, Kary x1',
		0x182: 'Warlock x1, Kary x2',
		0x183: 'RedGiant x1',
		0x184: 'Warlock x1, Kary x1, RedGiant x1',
		0x185: 'RedGiant x2',
		0x186: 'Warlock x2, RedGiant x1',
		0x187: 'D.Bone x1',
		0x188: 'Ging-Ryu x1',
		0x189: 'D.Bone x1, Warlock x1',
		0x18A: 'King-Ryu x2',
		0x18B: 'Warlock x3',
		0x18C: 'Blue D. x1',
		0x18D: 'FatalEye x1',
		0x18E: 'Blue D. x2',
		0x18F: 'Ging-Ryu x1, RedGiant x1',
		0x190: 'FatalEye x2',
		0x191: 'D.Fossil x1',
		0x192: 'King-Ryu x1',
		0x193: 'King-Ryu x1, Ging-Ryu x1',
		0x194: 'Tricker x1',
		0x195: 'Tricker x1',
		0x196: 'PinkPuff x5',
		0x197: 'EvilMask x1',
		0x199: 'Red D. x1',
		0x19A: 'Red D. x2',
		0x19B: 'Red D. x1, Behemoth x1',
		0x19C: 'EvilMask x1',
		0x19D: 'Behemoth x2',
		0x19E: 'EvilMask x2',
		0x19F: 'Red D. x3',
		0x1A1: 'Breath x1',
		0x1A2: 'Mind x1',
		0x1A3: 'Behemoth x1',
		0x1BB: 'Pudding x4',
		0x1BC: 'Pudding x2, Grenade x2',
		0x1BD: 'Balloon x2, Grenade x2',
		0x1BE: 'Slime x1, Tofu x1, Pudding x1',
		0x1BF: 'Red Worm x1, Grenade x3',
		0x1C0: 'Staleman x1, Skull x4',
		0x1C1: 'BlackCat x2, Lamia x1',
		0x1C2: 'Mad Ogre x3',
		0x1C3: 'FlameDog x1',
		0x1C4: 'Mad Ogre x4',
		0x1C6: 'Staleman x2',
		0x1C7: 'Last Arm x1',
        0x1D8: 'TrapRose x1, GlomWing x2, Crawler x2',
        0x1D9: 'Medusa x1, Gorgon x1, Stoneman x1',
        0x1DA: 'Talantla x1, BlackCat x2',
        0x1DB: 'Egg (BlackLiz) x1',
        0x1DC: 'Egg (Lamia) x1',
        0x1DD: 'Egg (HugeNaga) x1',
        0x1DE: 'Egg (Green D.) x1',
        0x1DF: 'Egg (Yellow D) x1',
		0x1E0: 'Alert (summons Chimera) x1',
		0x1E1: 'Alert (summons Stoneman) x1',
		0x1E2: 'Alert (summons Naga) x1',
		0x1E3: 'Alert (summons FlameDog) x1',
		0x1E4: 'Warrior x5',
		0x1E5: 'ToadLady x1, TinyToad x6',
		0x1E6: 'Ghost x6',
		0x1E7: 'DarkTree x2, Molbol x2',
		0x1E8: 'Molbol x2',
		0x1E9: 'Centpede x2',
		0x1EA: 'Procyote x2, Juclyote x2',
		0x1EB: 'RedGiant x2',
		0x1EC: 'Warlock x2, Kary x2',
		0x1ED: 'Warlock x1, Kary x3',
		0x1EE: 'Red D. x1, Blue D. x1',
		0x1EF: 'Blue D. x2',
		0x1F0: 'Behemoth x1',
		0x1F1: 'Red D. x2',
		0x1F2: 'D.Fossil x1, Warlock x1',
		0x1F3: 'Behemoth x1',
		0x1F4: 'Behemoth x1',
	};

	var FORMATION_RATES = [
		43,
		43,
		43,
		43,
		32,
		32,
		16,
		4,
	];

	var ITEMS = {
		0x01: 'FireClaw',
		0x02: 'IceClaw',
		0x03: 'Thunder (claw)',
		0x04: 'Charm (claw)',
		0x05: 'Poison (claw)',
		0x06: 'CatClaw',
		0x07: 'Rod',
		0x08: 'IceRod',
		0x09: 'FlameRod',
		0x0A: 'Thunder (rod)',
		0x0B: 'Change (rod)',
		0x0C: 'Charm (rod)',
		0x0D: 'Stardust (rod)',
		0x0E: 'Lilith (rod)',
		0x0F: 'Staff',
		0x10: 'Cure (staff)',
		0x11: 'Silver (staff)',
		0x12: 'Power (staff)',
		0x13: 'Lunar (staff)',
		0x14: 'Life (staff)',
		0x15: 'Silence (staff)',
		0x16: 'Shadow (sword)',
		0x17: 'Darkness (sword)',
		0x18: 'Black (sword)',
		0x19: 'Legend',
		0x1A: 'Light',
		0x1B: 'Excalbur',
		0x1C: 'Fire (sword)',
		0x1D: 'IceBrand',
		0x1E: 'Defense',
		0x1F: 'Drain (sword)',
		0x20: 'Ancient',
		0x21: 'Sleep (sword)',
		0x22: 'Medusa',
		0x23: 'Spear',
		0x24: 'Wind (spear)',
		0x25: 'Flame (spear)',
		0x26: 'Blizzard (spear)',
		0x27: 'Dragoon (spear)',
		0x28: 'White (spear)',
		0x29: 'Drain (spear)',
		0x2A: 'Gungnir',
		0x2B: 'Short',
		0x2C: 'Middle',
		0x2D: 'Long',
		0x2E: 'Ninja (sword)',
		0x2F: 'Murasame',
		0x30: 'Masamune',
		0x31: 'Assassin (dagger)',
		0x32: 'Mute (dagger)',
		0x33: 'Whip',
		0x34: 'Chain (whip)',
		0x35: 'Blitz (whip)',
		0x36: 'Flame (whip)',
		0x37: 'Dragon (whip)',
		0x38: 'HandAxe',
		0x39: 'Dwarf (axe)',
		0x3A: 'Ogre (axe)',
		0x3B: 'Silver (dagger)',
		0x3C: 'Dancing (dagger)',
		0x3D: 'Silver (sword)',
		0x3E: 'Spoon',
		0x3F: 'Crystal (sword)',
		0x40: 'Shuriken',
		0x41: 'Ninja (star)',
		0x42: 'Boomrang',
		0x43: 'FullMoon',
		0x44: 'Dreamer',
		0x45: 'Charm (harp)',
		0x47: 'Poison (axe)',
		0x48: 'RuneAxe',
		0x49: 'Silver (hammer)',
		0x4A: 'Earth (hammer)',
		0x4B: 'Wooden (hammer)',
		0x4C: 'Avenger',
		0x4D: 'ShortBow',
		0x4E: 'CrossBow',
		0x4F: 'GreatBow',
		0x50: 'Archer',
		0x51: 'ElvenBow',
		0x52: 'Samurai (bow)',
		0x53: 'Artemis (bow)',
		0x54: 'Iron (arrow)',
		0x55: 'White (arrow)',
		0x56: 'Fire (arrow)',
		0x57: 'Ice (arrow)',
		0x58: 'Lit (arrow)',
		0x59: 'Darkness (arrow)',
		0x5A: 'Poison (arrow)',
		0x5B: 'Mute (arrow)',
		0x5C: 'Charm (arrow)',
		0x5D: 'Samurai (arrow)',
		0x5E: 'Medusa (arrow)',
		0x5F: 'Artemis (arrow)',
		0x61: 'Iron (shield)',
		0x62: 'Shadow (shield)',
		0x63: 'Black (shield)',
		0x64: 'Paladin (shield)',
		0x65: 'Silver (shield)',
		0x66: 'Fire (shield)',
		0x67: 'Ice (shield)',
		0x68: 'Diamond (shield)',
		0x69: 'Aegis (shield)',
		0x6A: 'Samurai (shield)',
		0x6B: 'Dragoon (shield)',
		0x6C: 'Crystal (shield)',
		0x6D: 'Iron (helm)',
		0x6E: 'Shadow (helm)',
		0x6F: 'Darkness (helm)',
		0x70: 'Black (helm)',
		0x71: 'Paladin (helm)',
		0x72: 'Silver (helm)',
		0x73: 'Diamond (helm)',
		0x74: 'Samurai (helm)',
		0x75: 'Dragoon (helm)',
		0x76: 'Crystal (helm)',
		0x77: 'Cap',
		0x78: 'Leather (helm)',
		0x79: 'Gaea (helm)',
		0x7A: 'Wizard (helm)',
		0x7B: 'Tiara',
		0x7C: 'Ribbon',
		0x7D: 'Headband',
		0x7E: 'Bandanna',
		0x7F: 'Ninja (helm)',
		0x80: 'Glass',
		0x81: 'Iron (armor)',
		0x82: 'Shadow (armor)',
		0x83: 'Darkness (armor)',
		0x84: 'Black (armor)',
		0x85: 'Paladin (armor)',
		0x86: 'Silver (armor)',
		0x87: 'Fire (armor)',
		0x88: 'Ice (armor)',
		0x89: 'Diamond (armor)',
		0x8A: 'Genji (armor)',
		0x8B: 'Dragoon (armor)',
		0x8C: 'Crystal (armor)',
		0x8D: 'Cloth',
		0x8E: 'Leather (robe)',
		0x8F: 'Gaea (robe)',
		0x90: 'Wizard (robe)',
		0x91: 'Black (robe)',
		0x92: 'Sorceror (robe)',
		0x93: 'White (robe)',
		0x94: 'Power (robe)',
		0x95: 'Heroine (robe)',
		0x96: 'Prisoner',
		0x97: 'Bard',
		0x98: 'Karate',
		0x99: 'Bl.Belt',
		0x9A: 'Adamant (armor)',
		0x9B: 'Ninja (armor)',
		0x9C: 'Iron (gauntlet)',
		0x9D: 'Shadow (gauntlet)',
		0x9E: 'Darkness (gauntlet)',
		0x9F: 'Black (gauntlet)',
		0xA0: 'Paladin (gauntlet)',
		0xA1: 'Silver (gauntlet)',
		0xA2: 'Diamond (gauntlet)',
		0xA3: 'Zeus',
		0xA4: 'Samurai (gauntlet)',
		0xA5: 'Dragoon (gauntlet)',
		0xA6: 'Crystal (gauntlet)',
		0xA7: 'IronRing',
		0xA8: 'RubyRing',
		0xA9: 'Silver (ring)',
		0xAA: 'Strength (ring)',
		0xAB: 'Rune (ring)',
		0xAC: 'Crystal (ring)',
		0xAD: 'Diamond (ring)',
		0xAE: 'Protect',
		0xAF: 'Cursed',
		0xCE: 'Cure1',
		0xCF: 'Cure2',
		0xD0: 'Cure3',
		0xD1: 'Ether1',
		0xD2: 'Ether2',
		0xD3: 'Elixir',
		0xD4: 'Life',
		0xDD: 'Heal',
		0xE2: 'Tent',
		0xE3: 'Cabin',
		0xEB: 'Carrot',
		0xED: 'Whistle',
	};

	var MAPS = {
		0x0000: "Overworld",
		0x1000: "Underworld",
		0x2000: "Moon",
		0x3000: "Town of Baron",
		0x3001: "Village Mist",
		0x3002: "Kaipo",
		0x3003: "Mysidia",
		0x3004: "Silvera",
		0x3005: "Town of Toroia",
		0x3006: "Agart",
		0x3007: "Town of Toroia Inn",
		0x3008: "Town of Toroia Weapon Shop",
		0x3009: "Town of Toroia Armor Shop",
		0x300A: "Town of Toroia Item Shop",
		0x300B: "Town of Baron Inn",
		0x300C: "Town of Baron Weapon Shop",
		0x300D: "Town of Baron House (Cid)",
		0x300E: "Town of Baron House (Rosa)",
		0x300F: "Village Mist House",
		0x3010: "Kaipo Inn",
		0x3011: "Kaipo Cafe",
		0x3012: "Kaipo House",
		0x3013: "Mysidia Cafe",
		0x3014: "Mysidia Inn",
		0x3015: "Mt.Ordeals Tomb",
		0x3016: "Mysidia House of Wishes",
		0x3017: "Mysidia Room of Wishes",
		0x3018: "Town of Toroia Cafe 1F",
		0x3019: "Town of Toroia Cafe 2F",
		0x301A: "Town of Toroia Cafe Saloon KING",
		0x301C: "Town of Toroia Black Chocobo Farm",
		0x301D: "Town of Toroia Black Chocobo Farm Basement",
		0x301E: "Agart Astro Tower",
		0x301F: "Agart Astro Tower Observatory",
		0x3020: "Agart Inn",
		0x3021: "Chocobo's Village",
		0x3024: "Castle Baron",
		0x3025: "Damcyan",
		0x3026: "Fabul",
		0x3027: "Toroian Castle",
		0x3028: "Eblan",
		0x302A: "Castle Baron 1F",
		0x302B: "Castle Baron 2F",
		0x302C: "Castle Baron King's Room",
		0x302D: "Castle Baron Left Passage",
		0x302E: "Castle Baron Right Passage",
		0x302F: "Castle Baron Dungeon Antechamber",
		0x3030: "Castle Baron Dungeon",
		0x3031: "Castle Baron Infirmary",
		0x3032: "Castle Baron Left Tower 1F",
		0x3033: "Castle Baron Left Tower 2F",
		0x3034: "Castle Baron Left Tower Room",
		0x3035: "Castle Baron Right Tower 1F",
		0x3036: "Castle Baron Right Tower 2F",
		0x3037: "Castle Baron Right Tower 3F",
		0x3038: "Castle Baron Right Tower B1F",
		0x3039: "Castle Baron Right Tower B2F",
		0x303A: "Old Water-way",
		0x303B: "Castle Baron B3F",
		0x303C: "Castle Baron B1F",
		0x303D: "Castle Baron B1F Save Room",
		0x303E: "Castle Baron B2F",
		0x303F: "Damcyan 1F",
		0x3040: "Damcyan 2F",
		0x3041: "Damcyan 3F",
		0x3042: "Damcyan Basement",
		0x3043: "Damcyan B1F",
		0x3044: "Old Water-way Antechamber",
		0x3045: "Agart Weapon Shop",
		0x3046: "Agart Armor Shop",
		0x3047: "Fabul 1F",
		0x3048: "Fabul 2F",
		0x3049: "Fabul King's Room",
		0x304A: "Fabul Crystal Room",
		0x304B: "Fabul Weapons/Armors",
		0x304C: "Fabul Inn",
		0x304D: "Fabul Right Tower 1F",
		0x304E: "Fabul Right Tower 2F",
		0x304F: "Fabul Right Tower 3F",
		0x3050: "Fabul Left Tower 1F",
		0x3051: "Fabul Left Tower 2F",
		0x3052: "Fabul Left Tower 3F",
		0x3053: "Village Mist Clearing",
		0x3054: "Watery Pass-South B2F Save Room",
		0x3055: "Toroian Castle 1F",
		0x3056: "Toroian Castle 2F",
		0x3057: "Toroian Castle Crystal Room",
		0x3058: "Toroian Castle Infirmary",
		0x3059: "Toroian Castle B1F Antechamber",
		0x305A: "Toroian Castle B1F Left",
		0x305B: "Toroian Castle B1F Center",
		0x305C: "Toroian Castle B1F Right",
		0x305D: "Toroian Castle B2F",
		0x305E: "Eblan 1F",
		0x305F: "Eblan 2F",
		0x3060: "Eblan King's Room",
		0x3061: "Eblan Left Tower 1F",
		0x3062: "Eblan Left Tower 2F",
		0x3063: "Eblan Right Tower 1F",
		0x3064: "Eblan Right Tower 2F",
		0x3065: "Eblan Basement",
		0x3066: "Castle Baron Black Magic Class",
		0x3067: "Castle Baron White Magic Class",
		0x3068: "Beach (outside Mysidia)",
		0x306A: "Waterfalls Waterfall",
		0x306C: "Misty Cave",
		0x306F: "Watery Pass-South B1F",
		0x3070: "Watery Pass-South B2F",
		0x3071: "Watery Pass-South B3F",
		0x3072: "Watery Pass-North B2F",
		0x3073: "Watery Pass-North B1F",
		0x3074: "Waterfalls B1F",
		0x3075: "Waterfalls B2F",
		0x3076: "Waterfalls Lake",
		0x3077: "Antlion B1F",
		0x3078: "Antlion B2F",
		0x3079: "Antlion's Nest",
		0x307A: "Antlion B1F Save Room",
		0x307B: "Antlion B2F Treasure Room",
		0x307C: "(black background)",
		0x307E: "Mt.Hobs-West",
		0x307F: "Mt.Hobs Summit",
		0x3080: "Mt.Hobs-East",
		0x3081: "Mt.Hobs-West Treasure Area",
		0x3083: "Watery Pass-South B1F Treasure Room",
		0x3084: "Mt.Ordeals",
		0x3085: "Mt.Ordeals-3rd station",
		0x3086: "Mt.Ordeals-7th station",
		0x3087: "Mt.Ordeals Summit",
		0x3088: "Mysidia Crystal Room",
		0x3089: "Mysidia Serpent Road",
		0x308A: "Castle Baron 3F",
		0x308B: "Agart Well",
		0x308C: "Cave Magnes B1F",
		0x308D: "Cave Magnes B2F",
		0x308E: "Cave Magnes B2F Treasure Room",
		0x308F: "Cave Magnes B3F",
		0x3090: "Cave Magnes B3F Treasure Room",
		0x3091: "Cave Magnes B3F Passage",
		0x3092: "Cave Magnes B3F Save Room",
		0x3093: "Cave Magnes B4F",
		0x3094: "Cave Magnes Crystal Room",
		0x3096: "Watery Pass-South B2F Save Room Camp",
		0x3097: "Town of Baron Serpent Road",
		0x3098: "Tower of Zot 1F",
		0x3099: "Tower of Zot 2F",
		0x309A: "Tower of Zot 3F",
		0x309B: "(falling black background)",
		0x309C: "Tower of Zot 4F",
		0x309D: "Tower of Zot 5F",
		0x309E: "Tower of Zot 6F",
		0x309F: "Tower of Zot 7F",
		0x30A0: "Grotto Adamant",
		0x30A1: "Cave Magnes B4F Save Room",
		0x30A2: "Tower of Zot 5F Save Room",
		0x30A3: "Airship (Giant of Bab-il scene/Baron)",
		0x30A4: "Airship (Giant of Bab-il scene/Mysidia)",
		0x30A5: "Airship (Giant of Bab-il scene/Toroia)",
		0x30A6: "Tower of Bab-il B3F Save Room",
		0x30A7: "Tower of Bab-il 1F",
		0x30A8: "Tower of Bab-il B2F",
		0x30A9: "Tower of Bab-il B3F",
		0x30AA: "Tower of Bab-il B4F",
		0x30AB: "Tower of Bab-il Crystal Room",
		0x30AC: "Tower of Bab-il B5F",
		0x30AD: "(falling cliff background)",
		0x30B1: "Training Room 1F",
		0x30B2: "Training Room 2F",
		0x30B5: "Giant of Bab-il Mouth",
		0x30B6: "Giant of Bab-il Neck",
		0x30B7: "Giant of Bab-il Chest",
		0x30B9: "Giant of Bab-il Stomach",
		0x30BA: "Giant of Bab-il Passage",
		0x30BC: "Giant of Bab-il Lung",
		0x30BD: "Giant of Bab-il CPU",
		0x30C0: "Airship (flying above Overworld)",
		0x30C1: "Port of Fabul",
		0x30C2: "Ship (at sea)",
		0x30C3: "Airship (docked)",
		0x30C4: "Two Airships (hovering above Overworld)",
		0x30C6: "Airship (flying above Underworld)",
		0x30C7: "Cave Eblana B1F",
		0x30C8: "Cave Eblana B2F",
		0x30C9: "Pass to Bab-il (south)",
		0x30CA: "Pass to Bab-il (north)",
		0x30CB: "Cave Eblana B2F Inn",
		0x30CC: "Cave Eblana B2F Weapons/Armors",
		0x30CD: "Pass to Bab-il (north) Save Room",
		0x30CE: "Cave Eblana B2F Infirmarmy",
		0x30CF: "Chocobo's Forest (Fabul)",
		0x30D0: "Airship (hovering above Overworld near Baron)",
		0x30D1: "Chocobo's Forest (Mt.Ordeals)",
		0x30D2: "Chocobo's Forest (Baron)",
		0x30D3: "Chocobo's Forest (Toroia)",
		0x30D4: "Chocobo's Forest (Chocobo Island)",
		0x30D5: "Castle Baron King's Room (hidden passage)",
		0x30D6: "Airship (remodeling)",
		0x30D7: "Airship (hovering above Overworld near Agart)",
		0x30D9: "Airship (landed)",
		0x30DA: "Mysidia Room of Wishes (final boss scene)",
		0x30E0: "Village Mist Inn",
		0x30E1: "Village Mist Weapon Shop",
		0x30E2: "Village Mist Armor Shop",
		0x30E3: "Kaipo Weapon Shop",
		0x30E4: "Kaipo Armor Shop",
		0x30E5: "Mysidia Weapon Shop",
		0x30E6: "Mysidia Armor Shop",
		0x30E7: "Mysidia Item Shop",
		0x30E8: "Silvera Inn",
		0x30E9: "Silvera Weapon Shop",
		0x30EA: "Silvera Armor Shop",
		0x30EB: "Silvera Item Shop",
		0x30EC: "Town of Baron Item Shop",
		0x30ED: "House of Wishes (ending)",
		0x30EE: "Pond (ending)",
		0x30EF: "Eblan King's Room (ending)",
		0x30F0: "Town of Monsters King's Room (ending)",
		0x30F1: "Damcyan 3F (ending)",
		0x30F2: "Castle of Dwarves (ending)",
		0x30F3: "Mt.Ordeals-7th station (ending)",
		0x30F4: "Agart Astro Tower Observatory (ending)",
		0x30F5: "Castle Baron Left Tower Room (ending)",
		0x30F6: "Castle Baron King's Room (ending)",
		0x30F7: "Fabul King's Room (ending)",
		0x3100: "Kokkol, the Smith's",
		0x3101: "Tomra",
		0x3102: "Kokkol, the Smith's 1F",
		0x3103: "Kokkol, the Smith's 2F",
		0x3104: "Tomra Inn",
		0x3105: "Tomra Weapons/Armors",
		0x3106: "Tomra Treasure Room",
		0x3107: "Castle of Dwarves",
		0x3108: "Castle of Dwarves 1F",
		0x3109: "Castle of Dwarves King's Room",
		0x310A: "Castle of Dwarves B1F",
		0x310B: "Castle of Dwarves B2F",
		0x310D: "Castle of Dwarves Crystal Room",
		0x310E: "Castle of Dwarves Right Tower 2F",
		0x310F: "Castle of Dwarves Dwarf Base",
		0x3110: "Castle of Dwarves Right Tower 3F",
		0x3111: "Castle of Dwarves Left Tower 2F",
		0x3112: "Castle of Dwarves Infirmary",
		0x3113: "Castle of Dwarves Left Tower 3F",
		0x3114: "Tower of Bab-il Save Room/Empty Room",
		0x3115: "Tower of Bab-il 2F Treasure Room B (IceBrand)",
		0x3116: "Tower of Bab-il 2F Treasure Room A (Blizzard)",
		0x3117: "Tower of Bab-il 4F Treasure Room A (Ice Shield)",
		0x3118: "Tower of Bab-il 4F Treasure Room B (Ice Armor)",
		0x3119: "Castle of Dwarves Right Tower 5F",
		0x311A: "Castle of Dwarves Left Tower 5F",
		0x311B: "Castle of Dwarves 4F",
		0x311D: "Tower of Bab-il 8F (revisit)",
		0x311E: "Tower of Bab-il 7F (revisit)",
		0x311F: "Tower of Bab-il 6F (revisit)",
		0x3120: "Castle of Dwarves Cafe HOWDY!",
		0x3121: "Tower of Bab-il 1F",
		0x3122: "Tower of Bab-il 2F",
		0x3123: "Tower of Bab-il 3F",
		0x3124: "Tower of Bab-il 4F",
		0x3125: "Tower of Bab-il 5F",
		0x3126: "Tower of Bab-il 6F",
		0x3127: "Tower of Bab-il 7F",
		0x3128: "Tower of Bab-il 8F",
		0x312C: "The Big Whale (Giant of Bab-il scene)",
		0x312D: "Tower of Bab-il 5F Super Cannon",
		0x312E: "Dwarf Tank",
		0x312F: "The Big Whale",
		0x3132: "Tomra Item Shop",
		0x3136: "Land of Monsters B1F",
		0x3137: "Land of Monsters B2F",
		0x3138: "Land of Monsters B3F",
		0x313A: "Land of Monsters B4F",
		0x313B: "Land of Monsters Treasure Room",
		0x313C: "Town of Monsters",
		0x313D: "Town of Monsters Save Room",
		0x313E: "Town of Monsters Library",
		0x313F: "Town of Monsters Library Downstairs",
		0x3140: "Town of Monsters King's Room",
		0x3141: "Town of Monsters Weapon Shop",
		0x3142: "Town of Monsters Armor Shop",
		0x3143: "Town of Monsters Inn",
		0x3144: "Sealed Cave",
		0x3145: "Sylvan Cave B1F",
		0x3146: "Sylvan Cave B2F",
		0x3147: "Sylvan Cave B3F",
		0x3148: "Sylvan Cave Treasure Room",
		0x3149: "Sylvan House",
		0x314A: "Sealed Cave B1F",
		0x314B: "Sealed Cave B1F Treasure Room",
		0x314C: "Sealed Cave B1F Passage",
		0x314D: "Sealed Cave B2F",
		0x314E: "Sealed Cave B2F Treasure Room C (Long/Ninja)",
		0x314F: "Sealed Cave B2F Treasure Room B (various)",
		0x3150: "Sealed Cave B2F Treasure Room A (Light)",
		0x3151: "Sealed Cave B2F Passage",
		0x3152: "Sealed Cave B3F",
		0x3153: "Sealed Cave B3F Passage",
		0x3154: "Sealed Cave B3F Treasure Room",
		0x3155: "Sealed Cave B4F",
		0x3156: "Sealed Cave B4F Save Room",
		0x3157: "Sealed Cave B5F",
		0x3158: "Sealed Cave Save Room/Empty Room",
		0x3159: "Sealed Cave Crystal Room",
		0x315A: "Cave Bahamut B1F",
		0x315B: "Cave Bahamut B2F",
		0x315C: "Cave Bahamut B3F",
		0x3160: "Lunair's Lair 1F",
		0x3161: "Lunar's Lair 2F",
		0x3163: "Lunar Path (west)",
		0x3164: "Lunar Path (east)",
		0x3165: "Hummingway Cave",
		0x3167: "Lunar Subterrane B1",
		0x3168: "Lunar Subterrane B2",
		0x3169: "Lunar Subterrane B3",
		0x316A: "Lunar Subterrane B4",
		0x316B: "Lunar Subterrane B5",
		0x316C: "Lunar Subterrane B6",
		0x316D: "Lunar Subterrane B7",
		0x316E: "Lunar Core B1",
		0x316F: "Lunar Core B2",
		0x3170: "Lunar Core B3",
		0x3171: "Lunar Core B4",
		0x3172: "Lunar Core B5",
		0x3173: "Lunar Subterrane B4 Treasure Room",
		0x3174: "Lunar Subterrane B4 Passage",
		0x3175: "Lunar Subterrane B5 Passage A",
		0x3176: "Lunar Subterrane B5 Passage B",
		0x3177: "Lunar Subterrane B5 Pink Puff Room",
		0x3178: "Lunar Subterrane B5 Save Room",
		0x3179: "Lunar Subterrane B6 Passage",
		0x317A: "Lunar Subterrane B7 Treasure Room A (White)",
		0x317B: "Lunar Subterrane B7 Save Room",
		0x317C: "Lunar Subterrane B7 Treasure Room B (Ribbon)",
	};

	var MAP_FORMATION_GROUPS = {
		0x0000: 0,
		0x0001: 1,
		0x0002: 1,
		0x0003: 2,
		0x0004: 3,
		0x0005: 4,
		0x0006: 4,
		0x0007: 5,
		0x0008: 1,
		0x0009: 5,
		0x000A: 6,
		0x1000: 7,
		0x1001: 8,
		0x1002: 10,
		0x2000: 9,
		0x303A: 30,
		0x303B: 31,
		0x303C: 32,
		0x303E: 32,
		0x306C: 16,
		0x306F: 17,
		0x3070: 17,
		0x3071: 18,
		0x3072: 18,
		0x3073: 19,
		0x3075: 20,
		0x3076: 20,
		0x3077: 21,
		0x3078: 22,
		0x3079: 22,
		0x307E: 23,
		0x307F: 24,
		0x3080: 25,
		0x3081: 24,
		0x3084: 26,
		0x3085: 27,
		0x3086: 28,
		0x3087: 28,
		0x308C: 33,
		0x308D: 34,
		0x308E: 34,
		0x308F: 35,
		0x3090: 35,
		0x3091: 36,
		0x3093: 36,
		0x3098: 37,
		0x3099: 38,
		0x309A: 39,
		0x309C: 40,
		0x309D: 41,
		0x30A7: 52,
		0x30A8: 53,
		0x30A9: 54,
		0x30AA: 55,
		0x30AC: 56,
		0x30AD: 57,
		0x30B5: 74,
		0x30B6: 74,
		0x30B7: 75,
		0x30B9: 76,
		0x30BA: 77,
		0x30BC: 78,
		0x30C7: 42,
		0x30C9: 43,
		0x30CA: 29,
		0x3115: 45,
		0x3116: 46,
		0x3117: 47,
		0x3118: 48,
		0x311D: 59,
		0x311E: 60,
		0x311F: 61,
		0x3121: 44,
		0x3122: 45,
		0x3123: 46,
		0x3124: 47,
		0x3125: 48,
		0x3126: 49,
		0x3127: 50,
		0x3128: 51,
		0x3136: 67,
		0x3137: 68,
		0x3138: 69,
		0x3145: 62,
		0x3146: 63,
		0x3147: 62,
		0x3148: 63,
		0x314A: 64,
		0x314B: 64,
		0x314C: 64,
		0x314D: 64,
		0x314E: 65,
		0x314F: 65,
		0x3150: 65,
		0x3151: 65,
		0x3152: 65,
		0x3153: 66,
		0x3154: 66,
		0x315A: 71,
		0x315B: 72,
		0x315C: 82,
		0x3163: 90,
		0x3164: 91,
		0x3167: 80,
		0x3168: 81,
		0x3169: 82,
		0x316A: 83,
		0x316B: 84,
		0x316C: 85,
		0x316D: 86,
		0x316E: 88,
		0x316F: 88,
		0x3170: 89,
		0x3171: 79,
		0x3173: 84,
		0x3174: 86,
		0x3175: 86,
		0x3176: 87,
		0x3177: 92,
		0x3179: 87,
		0x317A: 87,
		0x317C: 87,
	}

	var MAP_ENCOUNTER_RATES = {
		0x0000: 7,
		0x0001: 7,
		0x0002: 8,
		0x0003: 8,
		0x0004: 10,
		0x0005: 8,
		0x0006: 10,
		0x0007: 10,
		0x0008: 10,
		0x0009: 8,
		0x000A: 8,
		0x1000: 8,
		0x1001: 8,
		0x1002: 8,
		0x2000: 8,
		0x303A: 8,
		0x303B: 8,
		0x303C: 8,
		0x303E: 8,
		0x306C: 7,
		0x306F: 7,
		0x3070: 7,
		0x3071: 7,
		0x3072: 8,
		0x3073: 8,
		0x3075: 8,
		0x3076: 8,
		0x3077: 8,
		0x3078: 8,
		0x3079: 8,
		0x307E: 8,
		0x307F: 8,
		0x3080: 8,
		0x3081: 8,
		0x3084: 8,
		0x3085: 8,
		0x3086: 8,
		0x3087: 8,
		0x308C: 8,
		0x308D: 8,
		0x308E: 8,
		0x308F: 8,
		0x3090: 8,
		0x3091: 8,
		0x3093: 8,
		0x3098: 8,
		0x3099: 8,
		0x309A: 8,
		0x309C: 8,
		0x309D: 8,
		0x30A7: 8,
		0x30A8: 8,
		0x30A9: 8,
		0x30AA: 8,
		0x30AC: 8,
		0x30AD: 8,
		0x30B5: 9,
		0x30B6: 9,
		0x30B7: 9,
		0x30B9: 9,
		0x30BA: 9,
		0x30BC: 9,
		0x30C7: 8,
		0x30C9: 8,
		0x30CA: 8,
		0x3115: 63,
		0x3116: 63,
		0x3117: 63,
		0x3118: 63,
		0x311D: 8,
		0x311E: 8,
		0x311F: 8,
		0x3121: 7,
		0x3122: 7,
		0x3123: 7,
		0x3124: 7,
		0x3125: 7,
		0x3126: 7,
		0x3127: 7,
		0x3128: 7,
		0x3136: 9,
		0x3137: 9,
		0x3138: 9,
		0x3145: 8,
		0x3146: 8,
		0x3147: 8,
		0x3148: 8,
		0x314A: 4,
		0x314B: 4,
		0x314C: 4,
		0x314D: 4,
		0x314E: 4,
		0x314F: 4,
		0x3150: 4,
		0x3151: 4,
		0x3152: 4,
		0x3153: 4,
		0x3154: 4,
		0x315A: 9,
		0x315B: 9,
		0x315C: 9,
		0x3163: 8,
		0x3164: 8,
		0x3167: 7,
		0x3168: 7,
		0x3169: 7,
		0x316A: 8,
		0x316B: 8,
		0x316C: 8,
		0x316D: 8,
		0x316E: 8,
		0x316F: 8,
		0x3170: 8,
		0x3171: 8,
		0x3173: 10,
		0x3174: 10,
		0x3175: 10,
		0x3176: 10,
		0x3177: 5,
		0x3179: 10,
		0x317A: 10,
		0x317C: 10,
	}

	var FORMATION_GROUPS = {
		0: [0x000, 0x001, 0x002, 0x004, 0x003, 0x006, 0x004, 0x0D0],
		1: [0x008, 0x009, 0x00A, 0x006, 0x009, 0x008, 0x00B, 0x00B],
		2: [0x00B, 0x01C, 0x01D, 0x01E, 0x00B, 0x01D, 0x01C, 0x01F],
		3: [0x034, 0x035, 0x036, 0x02C, 0x02A, 0x02E, 0x037, 0x037],
		4: [0x038, 0x01D, 0x034, 0x036, 0x038, 0x03A, 0x039, 0x039],
		5: [0x058, 0x059, 0x05A, 0x05B, 0x058, 0x059, 0x05A, 0x05B],
		6: [0x088, 0x08B, 0x0D2, 0x091, 0x089, 0x08A, 0x0D2, 0x091],
		7: [0x101, 0x102, 0x103, 0x104, 0x105, 0x106, 0x107, 0x107],
		8: [0x13A, 0x13B, 0x13C, 0x13D, 0x13E, 0x13F, 0x139, 0x138],
		9: [0x170, 0x174, 0x1BE, 0x1BD, 0x173, 0x172, 0x175, 0x177],
		10: [0x1D8, 0x1D9, 0x1DA, 0x1DB, 0x1DC, 0x1DD, 0x1DE, 0x1DF],
		16: [0x000, 0x004, 0x006, 0x007, 0x005, 0x008, 0x0D0, 0x0D1],
		17: [0x00C, 0x00D, 0x00E, 0x00F, 0x00C, 0x00D, 0x010, 0x010],
		18: [0x00D, 0x00E, 0x00F, 0x010, 0x011, 0x012, 0x013, 0x013],
		19: [0x010, 0x011, 0x012, 0x014, 0x015, 0x016, 0x013, 0x013],
		20: [0x012, 0x016, 0x013, 0x018, 0x017, 0x019, 0x01A, 0x01B],
		21: [0x000, 0x020, 0x021, 0x022, 0x023, 0x024, 0x025, 0x025],
		22: [0x022, 0x023, 0x024, 0x025, 0x026, 0x027, 0x01F, 0x01E],
		23: [0x028, 0x029, 0x02A, 0x02B, 0x02C, 0x02D, 0x02E, 0x02E],
		24: [0x02A, 0x029, 0x02E, 0x028, 0x02C, 0x02F, 0x02D, 0x033],
		25: [0x02F, 0x02D, 0x02E, 0x02A, 0x031, 0x024, 0x02D, 0x032],
		26: [0x02F, 0x031, 0x033, 0x03C, 0x03D, 0x03E, 0x03F, 0x03F],
		27: [0x040, 0x041, 0x042, 0x043, 0x044, 0x045, 0x03F, 0x03F],
		28: [0x043, 0x044, 0x045, 0x047, 0x03F, 0x046, 0x048, 0x049],
		29: [0x08D, 0x090, 0x094, 0x0A0, 0x08E, 0x091, 0x097, 0x095],
		30: [0x04A, 0x04B, 0x04C, 0x04D, 0x04E, 0x04F, 0x050, 0x050],
		31: [0x051, 0x04D, 0x04F, 0x052, 0x050, 0x053, 0x054, 0x054],
		32: [0x055, 0x056, 0x051, 0x056, 0x054, 0x054, 0x057, 0x057],
		33: [0x059, 0x05B, 0x05C, 0x05D, 0x05E, 0x05F, 0x060, 0x060],
		34: [0x05C, 0x061, 0x062, 0x063, 0x05E, 0x05F, 0x060, 0x060],
		35: [0x062, 0x063, 0x05F, 0x060, 0x05E, 0x064, 0x065, 0x065],
		36: [0x066, 0x064, 0x067, 0x068, 0x069, 0x06A, 0x065, 0x065],
		37: [0x06B, 0x06D, 0x071, 0x06F, 0x074, 0x075, 0x070, 0x073],
		38: [0x06B, 0x06D, 0x06F, 0x075, 0x072, 0x070, 0x06C, 0x073],
		39: [0x06B, 0x06E, 0x072, 0x076, 0x06C, 0x077, 0x073, 0x07F],
		40: [0x06C, 0x07A, 0x06E, 0x071, 0x07B, 0x074, 0x079, 0x07F],
		41: [0x06C, 0x081, 0x080, 0x07D, 0x06D, 0x079, 0x073, 0x07F],
		42: [0x08C, 0x08F, 0x092, 0x091, 0x093, 0x08E, 0x096, 0x095],
		43: [0x08D, 0x090, 0x093, 0x091, 0x092, 0x08E, 0x096, 0x095],
		44: [0x108, 0x109, 0x105, 0x104, 0x10A, 0x10B, 0x107, 0x107],
		45: [0x108, 0x10C, 0x10D, 0x10E, 0x10F, 0x110, 0x107, 0x107],
		46: [0x10D, 0x10F, 0x110, 0x111, 0x112, 0x113, 0x107, 0x115],
		47: [0x111, 0x112, 0x113, 0x116, 0x117, 0x118, 0x107, 0x115],
		48: [0x116, 0x117, 0x118, 0x119, 0x11A, 0x11B, 0x107, 0x115],
		49: [0x121, 0x122, 0x118, 0x11C, 0x11B, 0x11D, 0x107, 0x115],
		50: [0x11C, 0x11D, 0x121, 0x122, 0x11E, 0x11F, 0x115, 0x115],
		51: [0x121, 0x11B, 0x118, 0x11E, 0x120, 0x11F, 0x114, 0x118],
		52: [0x098, 0x0B3, 0x0A0, 0x0A6, 0x0A7, 0x09B, 0x0B6, 0x0B2],
		53: [0x0B4, 0x0A7, 0x09E, 0x0A0, 0x0A8, 0x09C, 0x0B6, 0x0B2],
		54: [0x0B5, 0x09F, 0x0A8, 0x0A0, 0x099, 0x0A9, 0x0B6, 0x0B2],
		55: [0x0B3, 0x0A4, 0x0AC, 0x0A0, 0x09D, 0x0A6, 0x0B6, 0x0B2],
		56: [0x0B4, 0x0AC, 0x0A5, 0x0A0, 0x0AE, 0x0AA, 0x0B6, 0x0B2],
		57: [0x0B5, 0x0AF, 0x0A3, 0x0A0, 0x0B1, 0x0AD, 0x0B6, 0x0B2],
		59: [0x128, 0x134, 0x136, 0x129, 0x130, 0x12C, 0x132, 0x12F],
		60: [0x133, 0x135, 0x12A, 0x12B, 0x137, 0x12E, 0x132, 0x12F],
		61: [0x133, 0x12A, 0x137, 0x135, 0x12D, 0x131, 0x132, 0x12F],
		62: [0x140, 0x145, 0x148, 0x142, 0x146, 0x141, 0x14A, 0x143],
		63: [0x141, 0x14B, 0x148, 0x149, 0x140, 0x147, 0x143, 0x144],
		64: [0x160, 0x162, 0x166, 0x161, 0x163, 0x168, 0x168, 0x168],
		65: [0x161, 0x163, 0x167, 0x168, 0x164, 0x169, 0x160, 0x162],
		66: [0x160, 0x164, 0x167, 0x16A, 0x162, 0x169, 0x164, 0x169],
		67: [0x14C, 0x158, 0x151, 0x153, 0x154, 0x156, 0x157, 0x15A],
		68: [0x14F, 0x158, 0x151, 0x154, 0x155, 0x156, 0x157, 0x15A],
		69: [0x14D, 0x159, 0x152, 0x150, 0x155, 0x156, 0x157, 0x15B],
		71: [0x180, 0x180, 0x181, 0x183, 0x181, 0x182, 0x184, 0x185],
		72: [0x187, 0x187, 0x188, 0x188, 0x189, 0x185, 0x186, 0x18A],
		74: [0x0B8, 0x0B9, 0x0BA, 0x0BB, 0x0BC, 0x0BD, 0x0BE, 0x0BF],
		75: [0x0BC, 0x0BB, 0x0C0, 0x0C1, 0x0C2, 0x0BE, 0x0BF, 0x0C3],
		76: [0x0C0, 0x0C1, 0x0C4, 0x0C5, 0x0C2, 0x0C6, 0x0C3, 0x0C7],
		77: [0x0C4, 0x0C8, 0x0BD, 0x0C9, 0x0BF, 0x0CA, 0x0C7, 0x0CE],
		78: [0x0CC, 0x0CD, 0x0C4, 0x0C8, 0x0CE, 0x0C7, 0x0CA, 0x0CE],
		79: [0x1A2, 0x1A1, 0x1A1, 0x1A2, 0x1A1, 0x1A2, 0x1A2, 0x1A1],
		80: [0x180, 0x180, 0x181, 0x183, 0x181, 0x182, 0x184, 0x185],
		81: [0x181, 0x182, 0x183, 0x184, 0x184, 0x185, 0x185, 0x186],
		82: [0x187, 0x187, 0x188, 0x188, 0x189, 0x185, 0x186, 0x18A],
		83: [0x187, 0x188, 0x189, 0x189, 0x18A, 0x18A, 0x185, 0x18B],
		84: [0x18C, 0x18C, 0x18D, 0x18D, 0x18B, 0x18A, 0x18E, 0x18F],
		85: [0x18B, 0x18C, 0x18D, 0x18F, 0x18E, 0x18F, 0x190, 0x18A],
		86: [0x191, 0x191, 0x192, 0x192, 0x193, 0x193, 0x194, 0x195],
		87: [0x191, 0x192, 0x193, 0x194, 0x193, 0x194, 0x195, 0x194],
		88: [0x197, 0x197, 0x1A3, 0x1A3, 0x199, 0x199, 0x199, 0x19A],
		89: [0x1A3, 0x19F, 0x19B, 0x19C, 0x19D, 0x19D, 0x19E, 0x19E],
		90: [0x176, 0x1BF, 0x1BE, 0x1BD, 0x174, 0x173, 0x177, 0x177],
		91: [0x1BC, 0x1BB, 0x175, 0x175, 0x176, 0x177, 0x177, 0x177],
		92: [0x191, 0x192, 0x193, 0x194, 0x193, 0x194, 0x195, 0x196],
	}

	var OVERWORLD_MAP_GRID = [
		7, 7, 7, 3, 3, 4, 4, 4,
		7, 7, 7, 3, 3, 4, 4, 4,
		7, 7, 8, 2, 2, 4, 4, 4,
		7, 7, 1, 2, 2, 2, 4, 4,
		9, 9, 0, 0, 2, 2, 7, 4,
		10, 10, 0, 0, 5, 6, 6, 6,
		10, 10, 10, 10, 5, 6, 6, 6,
		10, 10, 10, 10, 5, 6, 6, 6,
	];

	var UNDERWORLD_MAP_GRID = [
		1, 0, 0, 0,
		2, 0, 0, 0,
		1, 0, 0, 0,
		1, 1, 1, 1,
	];


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

	var mapStack = [];

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

	var getFullMapIndex = function(tileX, tileY) {
        let delta = 0;

		if (currentMapIndex == MAP_OVERWORLD) {
			delta = OVERWORLD_MAP_GRID[Math.floor(tileY / 32) * 8 + Math.floor(tileX / 32)];
		} else if (currentMapIndex == MAP_UNDERWORLD) {
			delta = UNDERWORLD_MAP_GRID[Math.floor(tileY / 32) * 4 + Math.floor(tileX / 32)];
		}

        return currentMapIndex + delta;
	}

	var getEncounterRate = function(mapIndex) {
		if (mapIndex in MAP_ENCOUNTER_RATES) {
			return MAP_ENCOUNTER_RATES[mapIndex];
		}

		return 0;
	}

	var getEncounterFormations = function(mapIndex) {
		if (mapIndex in MAP_FORMATION_GROUPS) {
			return FORMATION_GROUPS[MAP_FORMATION_GROUPS[mapIndex]];
		}

		return null;
	}

	var getTrigger = function(x, y) {
		if (currentMapIndex in TRIGGERS) {
			if (x in TRIGGERS[currentMapIndex]) {
				if (y in TRIGGERS[currentMapIndex][x]) {
					return TRIGGERS[currentMapIndex][x][y];
				}
			}
		}

		return null;
	}

	var getEventText = function(id) {
		if (id in EVENTS) {
			return EVENTS[id];
		} else {
			return "Unknown Event Call: 0x" + id.toString(16).padStart(2, '0').toUpperCase();
		}
	}

	var getFormationText = function(id) {
		if (id in FORMATIONS) {
			return FORMATIONS[id];
		} else {
			return "Unknown Formation: 0x" + id.toString(16).padStart(4, '0').toUpperCase();
		}
	}

	var getItemText = function(id) {
		if (id in ITEMS) {
			return ITEMS[id];
		} else {
			return "Unknown Item: 0x" + id.toString(16).padStart(2, '0').toUpperCase();
		}
	}

	var getMapText = function(id) {
		if (id in MAPS) {
			return MAPS[id];
		} else {
			return "Unknown Map: 0x" + id.toString(16).padStart(4, '0').toUpperCase();
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

	var onMapMouseLeave = function(e) {
		document.getElementById('information').innerHTML = '';
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
		} else {
			var tileX = Math.floor(((e.offsetX * currentSize / 512) + currentStartX) / 16) % (getMapSize() / 16);
			var tileY = Math.floor(((e.offsetY * currentSize / 512) + currentStartY) / 16) % (getMapSize() / 16);

			var div = document.getElementById('information');

			var trigger = getTrigger(tileX, tileY);

			contents = "";

			contents += '<h3>Cursor Coordinates</h3>';
			contents += '<dl class="dl-horizontal">';
			contents += '<dt>X</dt><dd>' + tileX + '</dd>';
			contents += '<dt>Y</dt><dd>' + tileY + '</dd>';
			contents += '</dl>';

			var fullMapIndex = getFullMapIndex(tileX, tileY);
			var encounterRate = getEncounterRate(fullMapIndex);

			if (encounterRate > 0) {
				contents += '<h3>Encounters</h3>'
				contents += '<dl class="dl-horizontal">'
				contents += '<dt>Encounter Rate</dt><dd>' + encounterRate + '</dd>'

				formations = getEncounterFormations(fullMapIndex)

				for (i = 0; i < 8; i++) {
					var rate = FORMATION_RATES[i];
					contents += '<dt>' + rate + '/256 (' + (100 * rate / 256).toFixed(1) + '%)</dt><dd>' + getFormationText(formations[i]) + '</dd>'
				}
			}

			if (trigger !== null) {
				if (trigger.type == 'warp') {
					contents += '<h3>Warp</h3>';
					contents += '<dl class="dl-horizontal">';
					contents += '<dt>Target Map</dt><dd>' + getMapText(trigger.targetMap) + '</dd>';
					contents += '<dt>Coordinates</dt><dd>' + trigger.targetX + ', ' + trigger.targetY + '</dd>';
					contents += '</dl>';
					contents += '<p>Click to view that map.</p>'
				} else if (trigger.type == 'return') {
					contents += '<h3>Return</h3>';
					contents += '<p>Returns to the previously-visited map and coordinates.</p>';
					contents += '<p>Click to return to your most recently visited map.</p>';
				} else if (trigger.type == 'event') {
					contents += '<h3>Event Call</h3>';
					contents += '<dl class="dl-horizontal">';
					contents += '<dt>Event Call ID</dt><dd>0x' + trigger.event.toString(16).padStart(2, '0').toUpperCase() + '</dd>';
					contents += '<dt>Description</dt><dd>' + getEventText(trigger.event) + '</dd>';
					contents += '</dl>';

					if (trigger.event in EVENTWARPS) {
						contents += '<h3>Event Warp</h3>';
						contents += '<dl class="dl-horizontal">';
						contents += '<dt>Target Map</dt><dd>' + getMapText(EVENTWARPS[trigger.event].targetMap) + '</dd>';
						contents += '<dt>Coordinates</dt><dd>' + EVENTWARPS[trigger.event].targetX + ', ' + EVENTWARPS[trigger.event].targetY + '</dd>';
						contents += '</dl>';
						contents += '<p>Click to view that map.</p>'
					}
				} else if (trigger.type == 'treasure') {
					var type = 'Item';
					var contentsLabel = 'Contents';
					var contentsText = '';

					if (trigger.treasure == 'battle') {
						type = 'Trapped Chest';
						contentsLabel = 'Formation';
						contentsText = getFormationText(trigger.contents);
					} else if (trigger.treasure == 'gp') {
						contentsText = trigger.contents + ' GP';
					} else if (trigger.treasure == 'item') {
						contentsText = getItemText(trigger.contents)
					}

					contents += '<h3>Treasure</h3>';
					contents += '<dl class="dl-horizontal">';
					contents += '<dt>Type</dt><dd>' + type + '</dd>';
					contents += '<dt>' + contentsLabel + '</dt><dd>' + contentsText + '</dd>';

					if (trigger.treasure == 'battle') {
						contents += '<dt>Reward</dt><dd>' + getItemText(trigger.reward) + '</dd>';
					}

					contents += '</dl>';
				}
			}

			div.innerHTML = contents;
		}
	}

	var onMapMouseUp = function(e) {
		if (dragStartX !== null) {
			if (Math.sqrt(Math.pow(e.offsetX - dragStartX, 2) + Math.pow(e.offsetY - dragStartY, 2)) < 5) {
				var tileX = Math.floor(((e.offsetX * currentSize / 512) + currentStartX) / 16);
				var tileY = Math.floor(((e.offsetY * currentSize / 512) + currentStartY) / 16);

				var div = document.getElementById('information');

				var trigger = getTrigger(tileX, tileY);

				if (trigger !== null) {
					var eventWarpData = null;

					if (trigger.type == 'event' && trigger.event in EVENTWARPS) {
						eventWarpData = EVENTWARPS[trigger.event];
					}

					if (trigger.type == 'warp' || eventWarpData !== null) {
						var targetMap = null;

						if (eventWarpData !== null) {
							targetMap = eventWarpData.targetMap;
						} else {
							targetMap = trigger.targetMap;
						}

						div.innerHTML = '';

						if (targetMap >= 0x3000) {
							mapStack.push(currentMapIndex);
						} else {
							mapStack = [];
						}

						updateMap(targetMap);
					} else if (trigger.type == 'return') {
						if (mapStack.length > 0) {
							div.innerHTML = '';
							updateMap(mapStack.pop());
						}
					}
				}
			}

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

	var onMapWheel = function(e) {
		var factor = Math.min(ZOOM_FACTOR, getMapSize() / currentSize);

		if (e.deltaY < 0) {
			factor = Math.max(1 / ZOOM_FACTOR, 512 / currentSize);
		}

		if ((factor > 1 && currentSize < getMapSize()) || (factor < 1 && currentSize > 512)) {
			var offsetX = (e.offsetX / 512) * currentSize + currentStartX;
			var offsetY = (e.offsetY / 512) * currentSize + currentStartY;

			var oldCurrentSize = currentSize;
			currentSize = Math.round(Math.max(512, Math.min(getMapSize(), currentSize * factor)));

			var actualFactor = currentSize / oldCurrentSize

			var dx = Math.round((offsetX - currentStartX) * (1 - actualFactor));
			var dy = Math.round((offsetY - currentStartY) * (1 - actualFactor));

			currentStartX += dx;
			currentStartY += dy;
		}

		updateDisplay();

		e.preventDefault();
	}

	var setGoButtons = function(target) {
		document.getElementById('button-base-overworld').classList.remove('active');
		document.getElementById('button-base-zot').classList.remove('active');
		document.getElementById('button-base-giant').classList.remove('active');
		document.getElementById('button-base-underworld').classList.remove('active');
		document.getElementById('button-base-moon').classList.remove('active');

		document.getElementById('button-base-' + target).classList.add('active');
	}

	var onButtonGoOverworld = function(e) {
		setGoButtons('overworld');
		mapStack = [];
		updateMap(MAP_OVERWORLD);
	}

	var onButtonGoZot = function(e) {
		setGoButtons('zot');
		mapStack = [];
		updateMap(0x3098);
	}

	var onButtonGoGiant = function(e) {
		setGoButtons('giant');
		mapStack = [];
		updateMap(0x30B5);
	}

	var onButtonGoUnderworld = function(e) {
		setGoButtons('underworld');
		mapStack = [];
		updateMap(MAP_UNDERWORLD);
	}

	var onButtonGoMoon = function(e) {
		setGoButtons('moon');
		mapStack = [];
		updateMap(MAP_MOON);
	}

	var onButtonBack = function(e) {
		if (mapStack.length > 0) {
			updateMap(mapStack.pop());
		}
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

		currentImage.src = '/static/img/maps/' + (drawOverlay ? 'composite' : 'base') + '/' + currentMapIndex.toString(16).padStart(4, '0').toUpperCase() + '-0.png';
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
		canvas.addEventListener('mouseleave', onMapMouseLeave);

		var button = document.getElementById('button-base-overworld');
		button.addEventListener('click', onButtonGoOverworld);

		var button = document.getElementById('button-base-zot');
		button.addEventListener('click', onButtonGoZot);

		var button = document.getElementById('button-base-giant');
		button.addEventListener('click', onButtonGoGiant);

		var button = document.getElementById('button-base-underworld');
		button.addEventListener('click', onButtonGoUnderworld);

		var button = document.getElementById('button-base-moon');
		button.addEventListener('click', onButtonGoMoon);

		var button = document.getElementById('button-back');
		button.addEventListener('click', onButtonBack);

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
