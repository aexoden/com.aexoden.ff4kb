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
		ANNOTATE: 0x08,
		VEHICLE:  0x10
	};

	var VariableFlags = {
		NONE:   0x00,
		EXTRA:  0x01,
		CHOICE: 0x02
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
			"watery-pass-south-b2f-1",
			"watery-pass-south-b3f-0",
			"watery-pass-north-b2f-0",
			"watery-pass-north-b1f-0",
			"overworld-kaipo-2",
			"waterfalls-b1f-0",
			"waterfalls-b2f-0",
			"waterfalls-lake-0",
			"waterfalls-lake-1",
			"overworld-damcyan-0",
			"damcyan-0",
			"damcyan-1f-0",
			"damcyan-2f-0",
			"damcyan-3f-0",
			"overworld-damcyan-1",
			"antlion-b1f-0",
			"antlion-b2f-0",
			"antlion-b2f-1",
			"antlion-b2f-charm-room-0",
			"antlion-b2f-2",
			"antlions-nest-0",
			"antlions-nest-1",
			"antlion-b2f-3",
			"antlion-b2f-4",
			"antlion-b2f-charm-room-1",
			"antlion-b2f-5",
			"antlion-b1f-1"
		]
	};

	data.variableData = {
		"damcyan-0": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"damcyan-1f-0": {
					"index": "0",
					"location": "Damcyan 1F",
					"disambiguation": "",
				},
				"damcyan-2f-0": {
					"index": "0",
					"location": "Damcyan 2F",
					"disambiguation": "",
				}
			},
		},
		"antlion-b1f-0": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"antlion-b1f-0": {
					"index": "0",
					"location": "Antlion B1F [before Antlion]",
					"disambiguation": ""
				}
			}
		},
		"antlion-b1f-1": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"antlion-b1f-1": {
					"index": "0",
					"location": "Antlion B1F [after Antlion]",
					"disambiguation": ""
				}
			}
		},
		"antlion-b2f-0": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"antlion-b2f-0": {
					"index": "0",
					"location": "Antlion B2F [before Antlion]",
					"disambiguation": ""
				}
			}
		},
		"antlion-b2f-1": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"antlion-b2f-1": {
					"index": "0",
					"location": "Antlion B2F [before Antlion] [before Charm Room]",
					"disambiguation": ""
				}
			}
		},
		"antlion-b2f-2": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"antlion-b2f-2": {
					"index": "0",
					"location": "Antlion B2F [before Antlion] [after Charm Room]",
					"disambiguation": ""
				}
			}
		},
		"antlion-b2f-3": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"antlion-b2f-3": {
					"index": "0",
					"location": "Antlion B2F [after Antlion]",
					"disambiguation": ""
				}
			}
		},
		"antlion-b2f-4": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"antlion-b2f-4": {
					"index": "0",
					"location": "Antlion B2F [after Antlion] [before Charm Room]",
					"disambiguation": ""
				}
			}
		},
		"antlion-b2f-5": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"antlion-b2f-5": {
					"index": "0",
					"location": "Antlion B2F [after Antlion] [after Charm Room]",
					"disambiguation": ""
				}
			}
		},
		"antlion-b2f-charm-room-0": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"antlion-b2f-charm-room-0": {
					"index": "0",
					"location": "Antlion B2F Charm Room [before Antlion]",
					"disambiguation": ""
				}
			}
		},
		"antlion-b2f-charm-room-1": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"antlion-b2f-charm-room-1": {
					"index": "0",
					"location": "Antlion B2F Charm Room [after Antlion]",
					"disambiguation": ""
				}
			}
		},
		"antlion-b2f-choice-0": {
			"type": VariableFlags.CHOICE,
			"paths": {
				0: {
					"antlion-b2f-1": { "enabled": false },
					"antlion-b2f-charm-room-0": { "enabled": false },
					"antlion-b2f-2": { "enabled": false }
				},
				1: {
					"antlion-b2f-0": { "enabled": false },
					"antlion-b2f-1": {
						"enabled": true,
						"index": "0",
						"location": "Antlion B2F [before Antlion]",
						"instruction": "Enter the Charm Room"
					}
				}
			}
		},
		"antlion-b2f-choice-1": {
			"type": VariableFlags.CHOICE,
			"paths": {
				0: {
					"antlion-b2f-4": { "enabled": false },
					"antlion-b2f-charm-room-1": { "enabled": false },
					"antlion-b2f-5": { "enabled": false }
				},
				1: {
					"antlion-b2f-3": { "enabled": false },
					"antlion-b2f-4": {
						"enabled": true,
						"index": "0",
						"location": "Antlion B2F [after Antlion]",
						"instruction": "Enter the Charm Room"
					}
				}
			}
		},
		"antlions-nest-0": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"antlions-nest-0": {
					"index": "0",
					"location": "Antlion's Nest [before Antlion]",
					"disambiguation": ""
				}
			}
		},
		"antlions-nest-1": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"antlions-nest-1": {
					"index": "0",
					"location": "Antlion's Nest [after Antlion]",
					"disambiguation": ""
				}
			}
		},
		"overworld-damcyan-0": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"overworld-damcyan-0": {
					"index": "1",
					"location": "Overworld (Damcyan)",
					"disambiguation": " just before entering the castle"
				}
			}
		},
		/*"overworld-damcyan-1": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"overworld-damcyan-1": {
					"index": "0",
					"location": "Overworld (Damcyan)",
					"disambiguation": " after parking the hovercraft, just before entering the cave"
				}
			}
		},*/
		"overworld-kaipo-2": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"overworld-kaipo-2": {
					"index": "0",
					"location": "Overworld (Kaipo) [before Waterfalls]",
					"disambiguation": ""
				}
			}
		},
		"overworld-kaipo-3": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"overworld-damcyan-0": {
					"index": "0",
					"location": "Overworld (Kaipo) [after Octomamm]",
					"disambiguation": " immediately after exiting the cave"
				}
			}
		},
		"waterfalls-b1f-0": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"waterfalls-b1f-0": {
					"index": "0",
					"location": "Waterfalls B1F",
					"disambiguation": ""
				}
			}
		},
		"waterfalls-b2f-0": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"waterfalls-b2f-0": {
					"index": "0",
					"location": "Waterfalls B2F",
					"disambiguation": ""
				}
			}
		},
		"waterfalls-lake-0": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"waterfalls-lake-0": {
					"index": "0",
					"location": "Waterfalls Lake [before Octomamm]",
					"disambiguation": ""
				}
			}
		},
		"waterfalls-lake-1": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"waterfalls-lake-1": {
					"index": "0",
					"location": "Waterfalls Lake [after Octomamm]",
					"disambiguation": ""
				}
			}
		},
		"watery-pass-north-b1f-0": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"watery-pass-north-b1f-0": {
					"index": "0",
					"location": "Watery Pass-North B1F",
					"disambiguation": ""
				}
			}
		},
		"watery-pass-north-b2f-0": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"watery-pass-north-b2f-0": {
					"index": "0",
					"location": "Watery Pass-North B2F",
					"disambiguation": ""
				}
			}
		},
		"watery-pass-south-b2f-1": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"watery-pass-south-b2f-1": {
					"index": "0",
					"location": "Watery Pass-South B2F [after Save Room]",
					"disambiguation": ""
				}
			}
		},
		"watery-pass-south-b2f-save-room-0": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"watery-pass-south-b2f-save-room-0": {
					"index": "0",
					"location": "Watery Pass-South B2F Save Room",
					"disambiguation": " after the scene"
				}
			}
		},
		"watery-pass-south-b3f-0": {
			"type": VariableFlags.EXTRA,
			"paths": {
				"watery-pass-south-b3f-0": {
					"index": "0",
					"location": "Watery Pass-South B3F",
					"disambiguation": ""
				}
			}
		}
	}

	data.variables = {
		"paladin": {
			0: ["watery-pass-south-b2f-save-room-0"],
			1: ["watery-pass-south-b2f-1"],
			2: ["watery-pass-south-b3f-0"],
			3: ["watery-pass-north-b2f-0"],
			4: ["watery-pass-north-b1f-0"],
			5: ["overworld-kaipo-2"],
			6: ["waterfalls-b1f-0"],
			7: ["waterfalls-b2f-0"],
			8: ["waterfalls-lake-0"],
			9: ["waterfalls-lake-1"],
			10: ["overworld-kaipo-3"],
			11: ["overworld-damcyan-0"],
			12: ["damcyan-0"],
			13: ["antlion-b1f-0"],
			14: ["antlion-b2f-choice-0"],
			15: ["antlion-b2f-0", "antlion-b2f-1"],
			16: ["antlion-b2f-charm-room-0"],
			17: ["antlion-b2f-2"],
			18: ["antlions-nest-0"],
			19: ["antlions-nest-1"],
			20: ["antlion-b2f-choice-1"],
			21: ["antlion-b2f-4"],
			22: ["antlion-b2f-charm-room-1"],
			23: ["antlion-b2f-3", "antlion-b2f-5"],
			24: ["antlion-b1f-1"]
		}
	};

	data.paths = {
		"antlion-b1f-0": {
			"flags": PathFlags.STEPS,
			"map": "3077-0",
			"segments": {
				"base-0": [
					[15, 4, SegmentFlags.START],
					[15, 8, SegmentFlags.NONE],
					[14, 8, SegmentFlags.NONE],
					[14, 13, SegmentFlags.NONE],
					[17, 13, SegmentFlags.NONE],
					[17, 15, SegmentFlags.NONE],
					[19, 15, SegmentFlags.NONE],
					[19, 12, SegmentFlags.NONE],
					[25, 12, SegmentFlags.NONE],
					[25, 14, SegmentFlags.NONE],
					[27, 14, SegmentFlags.NONE],
					[27, 23, SegmentFlags.END],
				],
				"extra-2-0": [
					[27, 21, SegmentFlags.NONE],
					[28, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		},
		"antlion-b1f-1": {
			"flags": PathFlags.STEPS,
			"map": "3077-0",
			"segments": {
				"base-0": [
					[27, 22, SegmentFlags.START],
					[27, 14, SegmentFlags.NONE],
					[25, 14, SegmentFlags.NONE],
					[25, 12, SegmentFlags.NONE],
					[19, 12, SegmentFlags.NONE],
					[19, 15, SegmentFlags.NONE],
					[17, 15, SegmentFlags.NONE],
					[17, 10, SegmentFlags.NONE],
					[14, 10, SegmentFlags.NONE],
					[14, 5, SegmentFlags.NONE],
					[15, 5, SegmentFlags.NONE],
					[15, 3, SegmentFlags.END]
				],
				"extra-2-0": [
					[27, 21, SegmentFlags.NONE],
					[28, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		},
		"antlion-b2f-0": {
			"flags": PathFlags.STEPS,
			"map": "3078-0",
			"segments": {
				"base-0": [
					[27, 3, SegmentFlags.START],
					[27, 4, SegmentFlags.NONE],
					[28, 4, SegmentFlags.NONE],
					[28, 13, SegmentFlags.NONE],
					[29, 13, SegmentFlags.NONE],
					[29, 18, SegmentFlags.NONE],
					[28, 18, SegmentFlags.NONE],
					[28, 24, SegmentFlags.NONE],
					[29, 24, SegmentFlags.END],
					[29, 26, SegmentFlags.NONE],
					[25, 26, SegmentFlags.NONE],
					[25, 28, SegmentFlags.NONE],
					[22, 28, SegmentFlags.NONE],
					[22, 31, SegmentFlags.NONE],
					[3, 31, SegmentFlags.NONE],
					[3, 23, SegmentFlags.NONE],
					[14, 23, SegmentFlags.NONE],
					[14, 29, SegmentFlags.END]
				],
				"extra-2-0": [
					[29, 13, SegmentFlags.NONE],
					[30, 13, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		},
		"antlion-b2f-1": {
			"flags": PathFlags.STEPS,
			"map": "3078-0",
			"segments": {
				"base-0": [
					[27, 3, SegmentFlags.START],
					[27, 4, SegmentFlags.NONE],
					[28, 4, SegmentFlags.NONE],
					[28, 13, SegmentFlags.NONE],
					[29, 13, SegmentFlags.NONE],
					[29, 18, SegmentFlags.NONE],
					[28, 18, SegmentFlags.NONE],
					[28, 24, SegmentFlags.NONE],
					[29, 24, SegmentFlags.END],
					[29, 26, SegmentFlags.NONE],
					[25, 26, SegmentFlags.NONE],
				],
				"alternate-0": [
					[25, 26, SegmentFlags.NONE],
					[25, 23, SegmentFlags.END]
				],
				"extra-2-0": [
					[29, 13, SegmentFlags.NONE],
					[30, 13, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		},
		"antlion-b2f-2": {
			"flags": PathFlags.STEPS,
			"map": "3078-0",
			"segments": {
				"base-0": [
					[25, 23, SegmentFlags.START],
					[25, 28, SegmentFlags.NONE],
					[22, 28, SegmentFlags.NONE],
					[22, 31, SegmentFlags.NONE],
					[3, 31, SegmentFlags.NONE],
					[3, 23, SegmentFlags.NONE],
					[14, 23, SegmentFlags.NONE],
					[14, 29, SegmentFlags.END]
				],
				"extra-2-0": [
					[14, 27, SegmentFlags.NONE],
					[15, 27, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		},
		"antlion-b2f-3": {
			"flags": PathFlags.STEPS,
			"map": "3078-0",
			"segments": {
				"base-0": [
					[14, 28, SegmentFlags.START],
					[14, 23, SegmentFlags.NONE],
					[3, 23, SegmentFlags.NONE],
					[3, 31, SegmentFlags.NONE],
					[22, 31, SegmentFlags.NONE],
					[22, 28, SegmentFlags.NONE],
					[25, 28, SegmentFlags.NONE],
					[25, 26, SegmentFlags.NONE],
					[29, 26, SegmentFlags.NONE],
					[29, 24, SegmentFlags.NONE],
					[28, 24, SegmentFlags.NONE],
					[28, 16, SegmentFlags.NONE],
					[29, 16, SegmentFlags.NONE],
					[29, 5, SegmentFlags.NONE],
					[28, 5, SegmentFlags.NONE],
					[28, 4, SegmentFlags.NONE],
					[27, 4, SegmentFlags.NONE],
					[27, 2, SegmentFlags.END]
				],
				"extra-2-0": [
					[29, 13, SegmentFlags.NONE],
					[30, 13, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		},
		"antlion-b2f-4": {
			"flags": PathFlags.STEPS,
			"map": "3078-0",
			"segments": {
				"base-0": [
					[14, 28, SegmentFlags.START],
					[14, 23, SegmentFlags.NONE],
					[3, 23, SegmentFlags.NONE],
					[3, 31, SegmentFlags.NONE],
					[22, 31, SegmentFlags.NONE],
					[22, 28, SegmentFlags.NONE],
					[25, 28, SegmentFlags.NONE],
					[25, 26, SegmentFlags.NONE],
				],
				"alternate-0": [
					[25, 26, SegmentFlags.NONE],
					[25, 23, SegmentFlags.END]
				],
				"extra-2-0": [
					[29, 13, SegmentFlags.NONE],
					[30, 13, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		},
		"antlion-b2f-5": {
			"flags": PathFlags.STEPS,
			"map": "3078-0",
			"segments": {
				"base-0": [
					[25, 23, SegmentFlags.START],
					[25, 26, SegmentFlags.NONE],
					[29, 26, SegmentFlags.NONE],
					[29, 24, SegmentFlags.NONE],
					[28, 24, SegmentFlags.NONE],
					[28, 16, SegmentFlags.NONE],
					[29, 16, SegmentFlags.NONE],
					[29, 5, SegmentFlags.NONE],
					[28, 5, SegmentFlags.NONE],
					[28, 4, SegmentFlags.NONE],
					[27, 4, SegmentFlags.NONE],
					[27, 2, SegmentFlags.END]
				],
				"extra-2-0": [
					[29, 13, SegmentFlags.NONE],
					[30, 13, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		},
		"antlion-b2f-charm-room-0": {
			"flags": PathFlags.STEPS,
			"map": "307B-0",
			"segments": {
				"base-0": [
					[4, 12, SegmentFlags.START],
					[4, 13, SegmentFlags.END]
				],
				"extra-2-0": [
					[4, 12, SegmentFlags.NONE],
					[4, 11, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		},
		"antlion-b2f-charm-room-1": {
			"flags": PathFlags.STEPS,
			"map": "307B-0",
			"segments": {
				"base-0": [
					[4, 12, SegmentFlags.START],
					[4, 13, SegmentFlags.END]
				],
				"extra-2-0": [
					[4, 12, SegmentFlags.NONE],
					[4, 11, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		},
		"antlions-nest-0": {
			"flags": PathFlags.STEPS,
			"map": "3079-0",
			"segments": {
				"base-0": [
					[14, 4, SegmentFlags.START],
					[14, 19, SegmentFlags.END]
				],
				"extra-2-0": [
					[14, 17, SegmentFlags.NONE],
					[15, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		},
		"antlions-nest-1": {
			"flags": PathFlags.STEPS,
			"map": "3079-0",
			"segments": {
				"base-0": [
					[14, 20, SegmentFlags.START],
					[14, 3, SegmentFlags.END],
				],
				"extra-2-0": [
					[14, 17, SegmentFlags.NONE],
					[15, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		},
		"damcyan-0": {
			"flags": PathFlags.NONE,
			"map": "3025-0",
			"segments": {
				"base-0": [
					[16, 30, SegmentFlags.START],
					[16, 11, SegmentFlags.END]
				]
			}
		},
		"damcyan-1f-0": {
			"flags": PathFlags.STEPS,
			"map": "303F-0",
			"segments": {
				"base-0": [
					[8, 15, SegmentFlags.START],
					[8, 7, SegmentFlags.END]
				],
				"extra-2-0": [
					[8, 13, SegmentFlags.NONE],
					[9, 13, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		},
		"damcyan-2f-0": {
			"flags": PathFlags.STEPS,
			"map": "3040-0",
			"segments": {
				"base-0": [
					[8, 8, SegmentFlags.START],
					[8, 10, SegmentFlags.NONE],
					[7, 10, SegmentFlags.NONE],
					[7, 13, SegmentFlags.NONE],
					[8, 13, SegmentFlags.END]
				],
				"extra-1-0": [
					[8, 10, SegmentFlags.NONE],
					[9, 10, SegmentFlags.NONE | SegmentFlags.ANNOTATE],
					[9, 13, SegmentFlags.NONE],
					[8, 13, SegmentFlags.END]
				]
			}
		},
		"damcyan-3f-0": {
			"flags": PathFlags.STEPS,
			"map": "3041-0",
			"segments": {
				"base-0": [
					[13, 13, SegmentFlags.START],
					[13, 11, SegmentFlags.END]
				]
			}
		},
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
		"overworld-damcyan-0": {
			"flags": PathFlags.STEPS,
			"map": "0000-0",
			"mapRange": [106, 47, 32, 32],
			"segments": {
				"base-0": [
					[125, 67, SegmentFlags.START],
					[123, 67, SegmentFlags.NONE],
					[123, 68, SegmentFlags.NONE],
					[120, 68, SegmentFlags.NONE],
					[120, 64, SegmentFlags.NONE],
					[119, 64, SegmentFlags.NONE],
					[119, 58, SegmentFlags.END]
				],
				"extra-2-0": [
					[125, 67, SegmentFlags.NONE],
					[126, 67, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				],
				"extra-2-1": [
					[119, 59, SegmentFlags.NONE],
					[120, 59, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		},
		"overworld-damcyan-1": {
			"flags": PathFlags.STEPS,
			"map": "0000-0",
			"mapRange": [110, 35, 32, 32],
			"segments": {
				"base-0": [
					[117, 57, SegmentFlags.START | SegmentFlags.VEHICLE],
					[117, 50, SegmentFlags.VEHICLE],
					[124, 50, SegmentFlags.VEHICLE],
					[124, 48, SegmentFlags.VEHICLE],
					[127, 48, SegmentFlags.VEHICLE],
					[127, 46, SegmentFlags.VEHICLE],
					[131, 46, SegmentFlags.VEHICLE],
					[131, 49, SegmentFlags.VEHICLE],
					[132, 49, SegmentFlags.VEHICLE],
					[132, 57, SegmentFlags.VEHICLE],
					[136, 57, SegmentFlags.VEHICLE],
					[136, 56, SegmentFlags.START | SegmentFlags.END]
				/*],
				"extra-2-0": [
					[136, 57, SegmentFlags.NONE],
					[137, 57, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]*/
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
		"overworld-kaipo-2": {
			"flags": PathFlags.STEPS,
			"map": "0000-0",
			"mapRange": [120, 59, 32, 32],
			"segments": {
				"base-0": [
					[138, 78, SegmentFlags.START],
					[135, 78, SegmentFlags.NONE],
					[135, 77, SegmentFlags.NONE],
					[134, 77, SegmentFlags.NONE],
					[134, 72, SegmentFlags.END]
				],
				"extra-2-0": [
					[134, 73, SegmentFlags.NONE],
					[135, 73, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
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
		"waterfalls-b1f-0": {
			"flags": PathFlags.STEPS,
			"map": "3074-0",
			"segments": {
				"base-0": [
					[16, 9, SegmentFlags.START],
					[16, 11, SegmentFlags.END]
				],
				"extra-2-0": [
					[16, 9, SegmentFlags.NONE],
					[17, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		},
		"waterfalls-b2f-0": {
			"flags": PathFlags.STEPS,
			"map": "3075-0",
			"segments": {
				"base-0": [
					[16, 7, SegmentFlags.START],
					[18, 7, SegmentFlags.NONE],
					[18, 5, SegmentFlags.NONE],
					[21, 5, SegmentFlags.NONE],
					[21, 8, SegmentFlags.NONE],
					[22, 8, SegmentFlags.NONE],
					[22, 10, SegmentFlags.NONE],
					[20, 10, SegmentFlags.NONE],
					[20, 21, SegmentFlags.NONE],
					[11, 21, SegmentFlags.NONE],
					[11, 13, SegmentFlags.NONE],
					[10, 13, SegmentFlags.NONE],
					[10, 11, SegmentFlags.END]
				],
				"extra-2-0": [
					[10, 12, SegmentFlags.NONE],
					[11, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		},
		"waterfalls-lake-0": {
			"flags": PathFlags.STEPS,
			"map": "3076-0",
			"segments": {
				"base-0": [
					[4, 23, SegmentFlags.START],
					[13, 23, SegmentFlags.NONE],
					[13, 22, SegmentFlags.NONE],
					[21, 22, SegmentFlags.NONE],
					[21, 17, SegmentFlags.NONE],
					[19, 17, SegmentFlags.NONE],
					[19, 20, SegmentFlags.NONE],
					[16, 20, SegmentFlags.NONE],
					[16, 12, SegmentFlags.END]
				],
				"extra-2-0": [
					[13, 22, SegmentFlags.NONE],
					[13, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		},
		"waterfalls-lake-1": {
			"flags": PathFlags.STEPS,
			"map": "3076-1",
			"segments": {
				"base-0": [
					[16, 12, SegmentFlags.START],
					[16, 10, SegmentFlags.END]
				],
				"extra-1-0": [
					[16, 12, SegmentFlags.NONE],
					[17, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		},
		"watery-pass-north-b1f-0": {
			"flags": PathFlags.STEPS,
			"map": "3073-0",
			"segments": {
				"base-0": [
					[10, 22, SegmentFlags.START],
					[10, 16, SegmentFlags.NONE],
					[13, 16, SegmentFlags.NONE],
					[13, 9, SegmentFlags.NONE],
					[21, 9, SegmentFlags.NONE],
					[21, 11, SegmentFlags.NONE],
					[23, 11, SegmentFlags.NONE],
					[23, 19, SegmentFlags.NONE],
					[21, 19, SegmentFlags.NONE],
					[21, 17, SegmentFlags.NONE],
					[18, 17, SegmentFlags.RETURN],
					[21, 17, SegmentFlags.NONE],
					[21, 19, SegmentFlags.NONE],
					[23, 19, SegmentFlags.NONE],
					[23, 11, SegmentFlags.NONE],
					[24, 11, SegmentFlags.NONE],
					[24, 8, SegmentFlags.END]
				],
				"extra-1-0": [
					[24, 10, SegmentFlags.NONE],
					[24, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				],
				"extra-2-0": [
					[24, 11, SegmentFlags.NONE],
					[25, 11, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
				]
			}
		},
		"watery-pass-north-b2f-0": {
			"flags": PathFlags.STEPS,
			"map": "3072-0",
			"segments": {
				"base-0": [
					[13, 26, SegmentFlags.START],
					[13, 17, SegmentFlags.NONE],
					[11, 17, SegmentFlags.NONE],
					[11, 14, SegmentFlags.NONE],
					[7, 14, SegmentFlags.NONE],
					[7, 10, SegmentFlags.END]
				],
				"extra-2-0": [
					[7, 12, SegmentFlags.NONE],
					[8, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
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
		"watery-pass-south-b2f-1": {
			"flags": PathFlags.STEPS,
			"map": "3070-0",
			"segments": {
				"base-0": [
					[2, 11, SegmentFlags.START],
					[2, 8, SegmentFlags.NONE],
					[10, 8, SegmentFlags.NONE],
					[10, 12, SegmentFlags.NONE],
					[8, 12, SegmentFlags.NONE],
					[8, 15, SegmentFlags.NONE],
					[12, 15, SegmentFlags.NONE],
					[12, 16, SegmentFlags.NONE],
					[13, 16, SegmentFlags.NONE],
					[13, 17, SegmentFlags.NONE],
					[16, 17, SegmentFlags.NONE],
					[16, 7, SegmentFlags.END]
				],
				"extra-2-0": [
					[16, 8, SegmentFlags.NONE],
					[17, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
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
		},
		"watery-pass-south-b3f-0": {
			"flags": PathFlags.STEPS,
			"map": "3071-0",
			"segments": {
				"base-0": [
					[23, 9, SegmentFlags.START],
					[22, 9, SegmentFlags.NONE],
					[22, 13, SegmentFlags.NONE],
					[15, 13, SegmentFlags.NONE],
					[15, 18, SegmentFlags.NONE],
					[7, 18, SegmentFlags.NONE],
					[7, 17, SegmentFlags.NONE],
					[6, 17, SegmentFlags.NONE],
					[6, 9, SegmentFlags.END]
				],
				"extra-2-0": [
					[6, 10, SegmentFlags.NONE],
					[7, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
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

	var drawPath = function(canvas, path, route, vars, activeVars) {
		var ctx = canvas.getContext("2d");

		var img = new Image();

		img.onload = function() {
			if (data.paths[path].mapRange) {
				ctx.drawImage(img, data.paths[path].mapRange[0] * 16, data.paths[path].mapRange[1] * 16, data.paths[path].mapRange[2] * 16, data.paths[path].mapRange[3] * 16, 0, 0, data.paths[path].mapRange[2] * 16, data.paths[path].mapRange[3] * 16);
			} else {
				ctx.drawImage(img, 0, 0);
			}

			var offScreenCanvas = document.createElement("canvas");
			offScreenCanvas.width = canvas.width;
			offScreenCanvas.height = canvas.height;

			var offScreenCtx = offScreenCanvas.getContext("2d");

			drawSegments(offScreenCtx, path, route, vars, activeVars);

			ctx.drawImage(offScreenCanvas, 0, 0);
		}

		var drawOverlay = document.getElementById("option-overlay").checked;

		img.src = "/static/img/maps/" + (drawOverlay ? "composite" : "base") + "/" + data.paths[path].map + ".png";
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

	var drawSegments = function(ctx, path, route, vars, activeVars) {
		var xOffset = 0;
		var yOffset = 0;

		if (data.paths[path].mapRange) {
			xOffset = data.paths[path].mapRange[0] * -16;
			yOffset = data.paths[path].mapRange[1] * -16;
		}

		Object.entries(data.paths[path].segments).forEach(
			([key, segments]) => {
				var fields = key.split("-");
				var draw = false;
				var fillStyle = "#FFFFFF";

				if (fields[0] == "extra" || fields[0] == "alternate") {
					fillStyle = "#00FF00";

					if (vars && activeVars) {
						for (var i = 0; i < activeVars.length; i++) {
							var index = activeVars[i];
							for (var j = 0; j < data.variables[route][index].length; j++) {
								var varData = data.variableData[data.variables[route][index][j]];
								var value = vars[index];

								if (varData.type == VariableFlags.EXTRA) {
									if (path in varData.paths) {
										if (varData.paths[path].index == fields[2]) {
											if (fields[1] == "2" && (value - value % 2) > 0) {
												draw = true;
											} else if (fields[1] == "1" && value % 2 == 1) {
												draw = true;
											}
										}
									}
								} else if (varData.type == VariableFlags.CHOICE) {
									if (path in varData.paths[value]) {
										if (varData.paths[value][path].index == fields[1]) {
											draw = true;
										}
									}
								}
							}
						}
					}
				} else {
					draw = true;
				}

				if (draw) {
					for (var i = 0; i < segments.length; i++) {
						if ((segments[i][2] & SegmentFlags.VEHICLE)> 0) {
							ctx.fillStyle = "#FFFF00";
						} else {
							ctx.fillStyle = fillStyle;
						}

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
		var invisibleMaps = {};

		Object.keys(data.variables[route]).forEach(
			(key) => {
				var value = 0;

				if (key in vars) {
					value = vars[key];
				}

				if (key in data.variables[route]) {
					for (var i = 0; i < data.variables[route][key].length; i++) {
						var varData = data.variableData[data.variables[route][key][i]];
						var entries = varData.paths;

						if (varData.type == VariableFlags.CHOICE) {
							entries = varData.paths[value];
						}

						Object.entries(entries).forEach(
							([path, pathData]) => {
								if ((varData.type == VariableFlags.CHOICE && pathData.enabled) || (varData.type == VariableFlags.EXTRA && value > 0)) {
									if (!(path in activeMaps)) {
										activeMaps[path] = [];
									}

									activeMaps[path].push(key);
								}

								if (varData.type == VariableFlags.CHOICE && !pathData.enabled) {
									invisibleMaps[path] = true;
								}
							}
						);
					}
				}
			}
		);

		for (var i = 0; i < data.routes[route].length; i++) {
			var path = data.routes[route][i];

			if ((drawAll || path in activeMaps) && !(path in invisibleMaps)) {
				var canvas_id = "path-" + i;
				var canvas = document.getElementById(canvas_id);
				var caption = document.getElementById(canvas_id + "-caption");
				var cancelPath = false;

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

					if ((data.paths[path].flags & PathFlags.STEPS) == 0) {
						caption.innerHTML += '<p><em>Steps on this map do not matter.</em></p>';
					}

					if (path in activeMaps) {
						caption.innerHTML += '<dl class="dl">';

						for (var j = 0; j < activeMaps[path].length; j++) {
							var index = activeMaps[path][j];
							for (var k = 0; k < data.variables[route][index].length; k++) {
								var varData = data.variableData[data.variables[route][index][k]];
								var value = vars[index];

								if (varData.type == VariableFlags.EXTRA) {
									var extraEven = false;
									var extraOdd = false;

									Object.entries(data.paths[path].segments).forEach(
										([key, segments]) => {
											var fields = key.split("-");

											if (path in varData.paths) {
												if (fields[0] == "extra" && fields[2] == varData.paths[path].index) {
													if (fields[1] == "2") {
														extraEven = true;
													} else if (fields[1] == "1") {
														extraOdd = true;
													}
												}
											}
										}
									);
								}

								if (varData) {
									if (varData.type == VariableFlags.EXTRA) {
										if (!extraEven) {
											value = value % 2;
										}

										if (!extraOdd) {
											value = value - (value % 2);
										}

										if (value > 0) {
											caption.innerHTML += "<dt>" + varData.paths[path].location + "</dt><dd>Take " + value + " extra step" + (value > 1 ? "s" : "") + varData.paths[path].disambiguation + ".</dd>";
										} else {
											cancelPath = true;
										}
									} else if (varData.type == VariableFlags.CHOICE) {
										if (path in varData.paths[value]) {
											caption.innerHTML += "<dt>" + varData.paths[value][path].location + "</dt><dd>" + varData.paths[value][path].instruction + ".</dd>";
										}
									}
								}
							}
						}

						caption.innerHTML += '</dl>';
					}

					if (!cancelPath) {
						canvas_container.appendChild(canvas);
						row.appendChild(canvas_container);
						row.appendChild(caption);
						container.appendChild(row);
					}
				}

				if (!cancelPath) {
					drawPath(canvas, path, route, vars, activeMaps[path]);
				}
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
