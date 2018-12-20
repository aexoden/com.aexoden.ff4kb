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
					"targetX": 138,
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
					"targetX": 133,
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
					"targetX": 155,
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
					"targetX": 67,
					"targetY": 16,
					"type": "warp"
				}
			},
			"97": {
				"119": {
					"targetMap": 12289,
					"targetX": 220,
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
					"targetX": 144,
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
					"targetX": 144,
					"targetY": 9,
					"type": "warp"
				}
			},
			"136": {
				"56": {
					"targetMap": 12407,
					"targetX": 143,
					"targetY": 4,
					"type": "warp"
				}
			},
			"138": {
				"77": {
					"targetMap": 12403,
					"targetX": 152,
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
					"targetX": 144,
					"targetY": 2,
					"type": "warp"
				}
			},
			"27": {
				"86": {
					"targetMap": 12598,
					"targetX": 145,
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
					"targetX": 147,
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
					"targetX": 149,
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
					"targetX": 156,
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
					"targetX": 144,
					"targetY": 9,
					"type": "warp"
				}
			}
		},
		"12311": {
			"5": {
				"12": {
					"targetMap": 12424,
					"targetX": 139,
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
					"targetX": 195,
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
					"targetX": 195,
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
					"targetX": 130,
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
					"targetX": 129,
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
					"targetX": 208,
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
					"targetX": 146,
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
					"targetX": 204,
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
					"targetX": 143,
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
					"targetX": 83,
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
					"targetX": 136,
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
					"targetX": 217,
					"targetY": 8,
					"type": "warp"
				}
			}
		},
		"12333": {
			"2": {
				"2": {
					"targetMap": 12324,
					"targetX": 72,
					"targetY": 13,
					"type": "warp"
				},
				"6": {
					"event": 4,
					"type": "event"
				},
				"12": {
					"targetMap": 12324,
					"targetX": 136,
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
					"targetX": 220,
					"targetY": 14,
					"type": "warp"
				},
				"12": {
					"targetMap": 12324,
					"targetX": 156,
					"targetY": 19,
					"type": "warp"
				}
			}
		},
		"12335": {
			"1": {
				"3": {
					"targetMap": 12336,
					"targetX": 129,
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
					"targetX": 76,
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
					"targetX": 134,
					"targetY": 10,
					"type": "warp"
				}
			}
		},
		"12339": {
			"5": {
				"4": {
					"targetMap": 12338,
					"targetX": 133,
					"targetY": 4,
					"type": "warp"
				}
			},
			"9": {
				"4": {
					"targetMap": 12340,
					"targetX": 201,
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
					"targetX": 201,
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
					"targetX": 201,
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
					"targetX": 135,
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
					"targetX": 129,
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
					"targetX": 130,
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
					"targetX": 155,
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
					"targetX": 136,
					"targetY": 6,
					"type": "warp"
				}
			},
			"14": {
				"2": {
					"targetMap": 12324,
					"targetX": 138,
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
					"targetX": 158,
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
					"targetX": 132,
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
					"targetX": 131,
					"targetY": 4,
					"type": "warp"
				},
				"10": {
					"targetMap": 12288,
					"targetX": 131,
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
					"targetX": 143,
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
					"targetX": 139,
					"targetY": 4,
					"type": "warp"
				},
				"16": {
					"targetMap": 12326,
					"targetX": 143,
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
					"targetX": 132,
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
					"targetX": 145,
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
					"targetX": 129,
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
					"targetX": 129,
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
					"targetX": 130,
					"targetY": 18,
					"type": "warp"
				}
			}
		},
		"12373": {
			"2": {
				"10": {
					"targetMap": 12327,
					"targetX": 135,
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
					"targetX": 144,
					"targetY": 11,
					"type": "warp"
				}
			},
			"16": {
				"10": {
					"targetMap": 12327,
					"targetX": 153,
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
					"targetX": 137,
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
					"targetX": 129,
					"targetY": 4,
					"type": "warp"
				}
			},
			"4": {
				"3": {
					"targetMap": 12379,
					"targetX": 131,
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
					"targetX": 129,
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
					"targetX": 129,
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
					"targetX": 145,
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
					"contents": 449,
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
					"targetX": 200,
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
					"targetX": 139,
					"targetY": 5,
					"type": "warp"
				}
			},
			"11": {
				"5": {
					"contents": 450,
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
					"contents": 451,
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
					"targetX": 132,
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
					"targetX": 151,
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
					"targetX": 130,
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
					"targetX": 144,
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
					"targetX": 134,
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
					"targetX": 135,
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
					"targetX": 133,
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
					"targetX": 138,
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
					"targetX": 149,
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
					"targetX": 155,
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
					"targetX": 142,
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
					"targetX": 212,
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
					"targetX": 136,
					"targetY": 22,
					"type": "warp"
				}
			}
		},
		"12415": {
			"8": {
				"21": {
					"targetMap": 12414,
					"targetX": 150,
					"targetY": 8,
					"type": "warp"
				}
			},
			"19": {
				"9": {
					"targetMap": 12416,
					"targetX": 135,
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
					"targetX": 147,
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
					"targetX": 136,
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
					"targetX": 138,
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
					"targetX": 147,
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
					"targetX": 151,
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
					"targetX": 143,
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
					"targetX": 149,
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
					"targetX": 139,
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
					"targetX": 142,
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
					"targetX": 153,
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
					"targetX": 142,
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
					"targetX": 142,
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
					"targetX": 155,
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
					"targetX": 155,
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
					"targetX": 150,
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
					"targetX": 132,
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
					"targetX": 154,
					"targetY": 5,
					"type": "warp"
				}
			}
		},
		"12441": {
			"2": {
				"13": {
					"targetMap": 12442,
					"targetX": 130,
					"targetY": 14,
					"type": "warp"
				}
			},
			"7": {
				"15": {
					"contents": 452,
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
					"targetX": 133,
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
					"targetX": 136,
					"targetY": 9,
					"type": "warp"
				}
			},
			"16": {
				"7": {
					"targetMap": 12445,
					"targetX": 144,
					"targetY": 10,
					"type": "warp"
				}
			},
			"22": {
				"4": {
					"targetMap": 12445,
					"targetX": 150,
					"targetY": 7,
					"type": "warp"
				}
			},
			"24": {
				"15": {
					"targetMap": 12445,
					"targetX": 152,
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
					"targetX": 135,
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
					"targetX": 149,
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
					"targetX": 150,
					"targetY": 3,
					"type": "warp"
				}
			}
		},
		"12456": {
			"7": {
				"19": {
					"targetMap": 12457,
					"targetX": 134,
					"targetY": 20,
					"type": "warp"
				}
			},
			"14": {
				"20": {
					"contents": 453,
					"treasure": "battle",
					"type": "treasure"
				}
			},
			"21": {
				"19": {
					"targetMap": 12455,
					"targetX": 149,
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
					"targetX": 135,
					"targetY": 20,
					"type": "warp"
				}
			},
			"13": {
				"25": {
					"targetMap": 12458,
					"targetX": 142,
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
					"targetX": 151,
					"targetY": 8,
					"type": "warp"
				}
			}
		},
		"12458": {
			"3": {
				"7": {
					"targetMap": 12457,
					"targetX": 130,
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
					"targetX": 141,
					"targetY": 26,
					"type": "warp"
				}
			},
			"20": {
				"7": {
					"targetMap": 12460,
					"targetX": 150,
					"targetY": 8,
					"type": "warp"
				}
			},
			"23": {
				"7": {
					"targetMap": 12457,
					"targetX": 152,
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
					"targetX": 142,
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
					"targetX": 148,
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
					"targetX": 135,
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
					"targetX": 142,
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
					"targetX": 131,
					"targetY": 4,
					"type": "warp"
				}
			},
			"17": {
				"20": {
					"targetMap": 12471,
					"targetX": 146,
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
					"targetX": 131,
					"targetY": 4,
					"type": "warp"
				}
			},
			"14": {
				"21": {
					"contents": 456,
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
					"targetX": 143,
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
					"targetX": 155,
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
					"targetX": 137,
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
					"targetX": 134,
					"targetY": 9,
					"type": "warp"
				}
			},
			"11": {
				"27": {
					"targetMap": 12489,
					"targetX": 143,
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
					"targetX": 153,
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
					"contents": 455,
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
					"targetX": 201,
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
					"targetX": 147,
					"targetY": 10,
					"type": "warp"
				}
			},
			"25": {
				"12": {
					"targetMap": 12545,
					"targetX": 151,
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
					"targetX": 143,
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
					"targetX": 139,
					"targetY": 3,
					"type": "warp"
				}
			}
		},
		"12554": {
			"1": {
				"8": {
					"targetMap": 12561,
					"targetX": 144,
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
					"targetX": 129,
					"targetY": 4,
					"type": "warp"
				}
			}
		},
		"12555": {
			"2": {
				"27": {
					"targetMap": 12559,
					"targetX": 221,
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
					"targetX": 139,
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
					"targetX": 149,
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
					"targetX": 66,
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
					"targetX": 151,
					"targetY": 9,
					"type": "warp"
				}
			},
			"10": {
				"10": {
					"targetMap": 12558,
					"targetX": 141,
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
					"targetX": 65,
					"targetY": 8,
					"type": "warp"
				},
				"12": {
					"targetMap": 12552,
					"targetX": 129,
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
					"targetX": 134,
					"targetY": 8,
					"type": "warp"
				}
			}
		},
		"12563": {
			"2": {
				"10": {
					"targetMap": 12561,
					"targetX": 65,
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
					"targetX": 135,
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
					"contents": 449,
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
					"contents": 450,
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
					"contents": 451,
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
					"contents": 452,
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
					"targetX": 134,
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
					"targetX": 134,
					"targetY": 7,
					"type": "warp"
				}
			}
		},
		"12573": {
			"2": {
				"20": {
					"targetMap": 12574,
					"targetX": 130,
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
					"targetX": 138,
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
					"targetX": 143,
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
					"targetX": 143,
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
					"targetX": 144,
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
					"targetX": 140,
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
					"targetX": 144,
					"targetY": 14,
					"type": "warp"
				}
			},
			"20": {
				"19": {
					"targetMap": 12580,
					"targetX": 148,
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
					"targetX": 131,
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
					"targetX": 140,
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
					"targetX": 131,
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
					"targetX": 153,
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
					"targetX": 142,
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
					"targetX": 157,
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
					"targetX": 132,
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
					"targetX": 139,
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
					"contents": 453,
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
					"targetX": 134,
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
					"targetX": 145,
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
					"targetX": 133,
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
					"contents": 454,
					"treasure": "battle",
					"type": "treasure"
				},
				"15": {
					"targetMap": 12615,
					"targetX": 141,
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
					"targetX": 93,
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
					"targetX": 66,
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
					"contents": 455,
					"treasure": "battle",
					"type": "treasure"
				},
				"7": {
					"contents": 456,
					"treasure": "battle",
					"type": "treasure"
				}
			},
			"9": {
				"5": {
					"contents": 455,
					"treasure": "battle",
					"type": "treasure"
				},
				"7": {
					"contents": 457,
					"treasure": "battle",
					"type": "treasure"
				}
			},
			"11": {
				"5": {
					"contents": 455,
					"treasure": "battle",
					"type": "treasure"
				},
				"7": {
					"contents": 458,
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
					"targetX": 148,
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
					"targetX": 135,
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
					"targetX": 134,
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
					"targetX": 132,
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
					"targetX": 143,
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
					"targetX": 143,
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
					"targetX": 153,
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
					"targetX": 153,
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
					"contents": 459,
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
					"contents": 460,
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
					"targetX": 147,
					"targetY": 25,
					"type": "warp"
				}
			},
			"24": {
				"17": {
					"targetMap": 12648,
					"targetX": 154,
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
					"targetX": 132,
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
					"targetX": 143,
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
					"targetX": 206,
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
					"contents": 461,
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
					"targetX": 137,
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
					"contents": 468,
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
					"targetX": 144,
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
					"contents": 469,
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
					"targetX": 131,
					"targetY": 4,
					"type": "warp"
				}
			},
			"5": {
				"20": {
					"contents": 467,
					"treasure": "battle",
					"type": "treasure"
				}
			},
			"7": {
				"9": {
					"contents": 463,
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
					"targetX": 148,
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
					"contents": 465,
					"treasure": "battle",
					"type": "treasure"
				}
			},
			"27": {
				"16": {
					"contents": 466,
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
					"targetX": 136,
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
					"targetX": 145,
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
					"targetX": 143,
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
					"targetX": 149,
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
					"targetX": 217,
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
					"targetX": 138,
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
					"targetX": 148,
					"targetY": 15,
					"type": "warp"
				}
			},
			"22": {
				"7": {
					"targetMap": 12651,
					"targetX": 150,
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
					"targetX": 142,
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
					"targetX": 147,
					"targetY": 9,
					"type": "warp"
				}
			}
		},
		"12665": {
			"2": {
				"4": {
					"contents": 462,
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
					"targetX": 131,
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
	}

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
		} else {
			var tileX = Math.floor(((e.offsetX * currentSize / 512) + currentStartX) / 16);
			var tileY = Math.floor(((e.offsetY * currentSize / 512) + currentStartY) / 16);

			var div = document.getElementById('information');

			var trigger = getTrigger(tileX, tileY);

			if (trigger !== null) {
				if (trigger.type == 'warp') {
					div.innerHTML = 'Warps to map ' + trigger.targetMap.toString(16) + ' at ' + trigger.targetX + ', ' + trigger.targetY + '.';
				}
			} else {
				div.innerHTML = '';
			}
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
					if (trigger.type == 'warp') {
						div.innerHTML = '';

						if (trigger.targetMap >= 0x3000) {
							mapStack.push(currentMapIndex);
						} else {
							mapStack = [];
						}

						updateMap(trigger.targetMap);
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

		mapStack = [];

		updateMap(MAP_OVERWORLD);
	}

	var onButtonGoUnderworld = function(e) {
		document.getElementById('button-base-overworld').classList.remove('active');
		document.getElementById('button-base-underworld').classList.add('active');
		document.getElementById('button-base-moon').classList.remove('active');

		mapStack = [];

		updateMap(MAP_UNDERWORLD);
	}

	var onButtonGoMoon = function(e) {
		document.getElementById('button-base-overworld').classList.remove('active');
		document.getElementById('button-base-underworld').classList.remove('active');
		document.getElementById('button-base-moon').classList.add('active');

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

		var button = document.getElementById('button-base-overworld');
		button.addEventListener('click', onButtonGoOverworld);

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
