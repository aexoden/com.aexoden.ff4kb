/*
 * Global Variables
 */

var com = com || {};
com.aexoden = com.aexoden || {};
com.aexoden.ff4 = com.aexoden.ff4 || {};

/*
 * Module Definition
 */

com.aexoden.ff4.route_data = function()
{
    /*
     * Constants
     */

    let PathFlags = com.aexoden.ff4.constants.PathFlags;
    let SegmentFlags = com.aexoden.ff4.constants.SegmentFlags;
    let VariableFlags = com.aexoden.ff4.constants.VariableFlags;

    /*
	 * Data
	 */

    var data = {};

    data.route = [
        { name: "lunar-overworld--lunar-path-landing-to-lunar-path-west--before-fusoya" },
        { name: "lunar-path-west--before-fusoya" },
        { name: "lunar-overworld--lunar-path-west-to-lunar-path-east--before-fusoya" },
        { name: "lunar-path-east--before-fusoya" },
        { name: "lunar-overworld--lunar-path-east-to-lunars-lair--before-fusoya" },
        { name: "lunars-lair-1f--fusoya" },
        { name: "lunar-overworld--lunars-lair-to-lunar-path-east" },
        { name: "lunar-path-east--after-fusoya" },
        { name: "lunar-overworld--lunar-path-east-to-lunar-path-west" },
        { name: "lunar-path-west--after-fusoya" },
        { name: "lunar-overworld--lunar-path-west-to-lunar-path-landing" },
        { name: "big-whale--entrance-to-console" },
        { name: "lunar-overworld-big-whale--lunar-path-landing-to-hummingway-cave" },
        { name: "big-whale--console-to-exit" },
        { name: "lunar-overworld--before-hummingway-cave" },
        { name: "hummingway-cave" },
        { name: "lunar-overworld--after-hummingway-cave" },
        { name: "big-whale--entrance-to-crystal" },
        { name: "giant-of-babil-mouth" },
        { name: "giant-of-babil-neck" },
        { name: "giant-of-babil-chest" },
        { name: "giant-of-babil-stomach" },
        { name: "giant-of-babil-passage" },
        { name: "giant-of-babil-lung" },
        { name: "giant-of-babil-cpu" },
        { name: "big-whale--entrance-to-console" },
        { name: "lunar-overworld-big-whale--post-giant-to-lunar-path-landing" },
        { name: "big-whale--console-to-exit" },
        { name: "lunar-overworld--lunar-path-landing-to-lunar-path-west--before-zeromus" },
        { name: "lunar-path-west--before-zeromus" },
        { name: "lunar-overworld--lunar-path-west-to-lunar-path-east--before-zeromus" },
        { name: "lunar-path-east--before-zeromus" },
        { name: "lunar-overworld--lunar-path-east-to-lunars-lair--before-zeromus" },
        { name: "lunars-lair-1f--descent" },
        { name: "lunars-lair-2f" },
        { name: "lunar-subterrane-b1" },
        { name: "lunar-subterrane-b2" },
        { name: "lunar-subterrane-b3" },
        { name: "lunar-subterrane-b4--upper" },
        { name: "lunar-subterrane-b4-passage" },
        { name: "lunar-subterrane-b4--lower" },
        { name: "lunar-subterrane-b5--upper" },
        { name: "lunar-subterrane-b5-passage-a" },
        { name: "lunar-subterrane-b5--middle" },
        { name: "lunar-subterrane-b5-passage-b" },
        { name: "lunar-subterrane-b5--lower--direct", condition: { variable: "C316B00", values: [0] } },
        { name: "lunar-subterrane-b5--lower--before-pink-puff-room", condition: { variable: "C316B00", values: [1] } },
        { name: "lunar-subterrane-b5-pink-puff-room", condition: { variable: "C316B00", values: [1] } },
        { name: "lunar-subterrane-b5--lower--after-pink-puff-room", condition: { variable: "C316B00", values: [1] } },
        { name: "lunar-subterrane-b6--direct", condition: { variable: "C316C00", values: [1, 2] } },
        { name: "lunar-subterrane-b6--ninja", condition: { variable: "C316C00", values: [0] } },
        { name: "lunar-subterrane-b6-passage" },
        { name: "lunar-subterrane-b7--before-save-room" },
        { name: "lunar-subterrane-b7-save-room" },
        { name: "lunar-subterrane-b7--after-save-room" },
        { name: "lunar-core-b1--direct", condition: { variable: "C316C00", values: [0, 2] } },
        { name: "lunar-core-b1--ninja", condition: { variable: "C316C00", values: [1] } },
        { name: "lunar-core-b2" },
        { name: "lunar-core-b3--direct", condition: { variable: "C316C00", values: [0, 1] } },
        { name: "lunar-core-b3--ninja", condition: { variable: "C316C00", values: [2] } },
        { name: "lunar-core-b4" },
        { name: "lunar-core-b5" },
    ];

    data.paths = {
        "big-whale--console-to-exit": {
            flags: PathFlags.NONE,
            map: "312F-0",
            segments: {
                "base-0": [
                    [7, 7, SegmentFlags.START],
                    [5, 7, SegmentFlags.NONE],
                    [5, 13, SegmentFlags.NONE],
                    [2, 13, SegmentFlags.END],
                ],
            },
        },
        "big-whale--entrance-to-console": {
            flags: PathFlags.NONE,
            map: "312F-0",
            segments: {
                "base-0": [
                    [3, 13, SegmentFlags.START],
                    [5, 13, SegmentFlags.NONE],
                    [5, 7, SegmentFlags.NONE],
                    [7, 7, SegmentFlags.END],
                ],
            },
        },
        "big-whale--entrance-to-crystal": {
            flags: PathFlags.NONE,
            map: "312F-0",
            segments: {
                "base-0": [
                    [3, 13, SegmentFlags.START],
                    [7, 13, SegmentFlags.NONE],
                    [7, 11, SegmentFlags.END],
                ],
            },
        },
        "giant-of-babil-chest": {
            flags: PathFlags.STEPS,
            map: "30B7-0",
            segments: {
                "base-0": [
                    [14, 3, SegmentFlags.START],
                    [14, 9, SegmentFlags.NONE],
                    [13, 9, SegmentFlags.NONE],
                    [13, 10, SegmentFlags.NONE],
                    [9, 10, SegmentFlags.NONE],
                    [9, 16, SegmentFlags.NONE],
                    [6, 16, SegmentFlags.NONE],
                    [6, 15, SegmentFlags.NONE],
                    [5, 15, SegmentFlags.NONE],
                    [5, 11, SegmentFlags.NONE],
                    [2, 11, SegmentFlags.NONE],
                    [2, 19, SegmentFlags.NONE],
                    [3, 19, SegmentFlags.NONE],
                    [3, 22, SegmentFlags.NONE],
                    [5, 22, SegmentFlags.NONE],
                    [5, 25, SegmentFlags.NONE],
                    [9, 25, SegmentFlags.NONE],
                    [9, 21, SegmentFlags.NONE],
                    [14, 21, SegmentFlags.NONE],
                    [14, 25, SegmentFlags.NONE],
                    [17, 25, SegmentFlags.NONE],
                    [17, 26, SegmentFlags.NONE],
                    [24, 26, SegmentFlags.NONE],
                    [24, 18, SegmentFlags.NONE],
                    [23, 18, SegmentFlags.NONE],
                    [23, 15, SegmentFlags.NONE],
                    [19, 15, SegmentFlags.NONE],
                    [19, 9, SegmentFlags.NONE],
                    [18, 9, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [23, 16, SegmentFlags.NONE],
                    [22, 16, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
                "extra-2-0": [
                    [19, 14, SegmentFlags.NONE],
                    [18, 14, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "giant-of-babil-cpu": {
            flags: PathFlags.STEPS,
            map: "30BD-0",
            segments: {
                "base-0": [
                    [8, 18, SegmentFlags.START],
                    [9, 18, SegmentFlags.NONE],
                    [9, 13, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [9, 16, SegmentFlags.NONE],
                    [9, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [9, 18, SegmentFlags.NONE],
                    [10, 18, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "giant-of-babil-lung": {
            description: "Giant of Bab-il Lung",
            flags: PathFlags.STEPS,
            map: "30BC-0",
            segments: {
                "base-0": [
                    [15, 24, SegmentFlags.START],
                    [15, 15, SegmentFlags.END],
                ],
                "base-1": [
                    [15, 15, SegmentFlags.NONE],
                    [15, 4, SegmentFlags.END],
                ],
                "extra-1-1": [
                    [15, 5, SegmentFlags.NONE],
                    [16, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [15, 22, SegmentFlags.NONE],
                    [16, 22, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-1": [
                    [15, 8, SegmentFlags.NONE],
                    [15, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "giant-of-babil-mouth": {
            flags: PathFlags.STEPS,
            map: "30B5-0",
            segments: {
                "base-0": [
                    [9, 20, SegmentFlags.START],
                    [9, 15, SegmentFlags.NONE],
                    [10, 15, SegmentFlags.NONE],
                    [10, 10, SegmentFlags.NONE],
                    [11, 10, SegmentFlags.NONE],
                    [11, 9, SegmentFlags.NONE],
                    [12, 9, SegmentFlags.NONE],
                    [12, 6, SegmentFlags.NONE],
                    [11, 6, SegmentFlags.NONE],
                    [11, 5, SegmentFlags.NONE],
                    [9, 5, SegmentFlags.NONE],
                    [9, 7, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [9, 5, SegmentFlags.NONE],
                    [8, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
                "optional-1-0": [
                    [9, 16, SegmentFlags.NONE],
                    [10, 16, SegmentFlags.ANNOTATE],
                    [10, 15, SegmentFlags.NONE],
                ],
            },
        },
        "giant-of-babil-neck": {
            flags: PathFlags.STEPS,
            map: "30B6-0",
            segments: {
                "base-0": [
                    [7, 4, SegmentFlags.START],
                    [7, 7, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [7, 6, SegmentFlags.NONE],
                    [8, 6, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "giant-of-babil-passage": {
            description: "Giant of Bab-il Passage",
            flags: PathFlags.STEPS,
            map: "30BA-0",
            segments: {
                "base-0": [
                    [3, 4, SegmentFlags.START],
                    [3, 23, SegmentFlags.NONE],
                    [4, 23, SegmentFlags.NONE],
                    [4, 25, SegmentFlags.NONE],
                    [6, 25, SegmentFlags.NONE],
                    [6, 26, SegmentFlags.NONE],
                    [11, 26, SegmentFlags.NONE],
                    [11, 25, SegmentFlags.NONE],
                    [17, 25, SegmentFlags.NONE],
                    [17, 26, SegmentFlags.NONE],
                    [24, 26, SegmentFlags.NONE],
                    [24, 23, SegmentFlags.NONE],
                    [25, 23, SegmentFlags.NONE],
                    [25, 15, SegmentFlags.NONE],
                    [14, 15, SegmentFlags.RETURN],
                    [21, 15, SegmentFlags.NONE],
                    [21, 4, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [21, 8, SegmentFlags.NONE],
                    [22, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [21, 5, SegmentFlags.NONE],
                    [22, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "giant-of-babil-stomach": {
            flags: PathFlags.STEPS,
            map: "30B9-0",
            segments: {
                "base-0": [
                    [17, 20, SegmentFlags.START],
                    [22, 20, SegmentFlags.NONE],
                    [22, 19, SegmentFlags.NONE],
                    [23, 19, SegmentFlags.NONE],
                    [23, 14, SegmentFlags.NONE],
                    [23, 6, SegmentFlags.NONE],
                    [21, 6, SegmentFlags.NONE],
                    [21, 5, SegmentFlags.NONE],
                    [14, 5, SegmentFlags.NONE],
                    [14, 8, SegmentFlags.NONE],
                    [11, 8, SegmentFlags.NONE],
                    [11, 10, SegmentFlags.NONE],
                    [5, 10, SegmentFlags.NONE],
                    [5, 6, SegmentFlags.NONE],
                    [3, 6, SegmentFlags.NONE],
                    [3, 4, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [23, 14, SegmentFlags.NONE],
                    [23, 13, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [3, 5, SegmentFlags.NONE],
                    [4, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "hummingway-cave": {
            flags: PathFlags.STEPS | PathFlags.HUMMINGWAY,
            map: "3165-0",
            segments: {
                "base-0": [
                    [10, 16, SegmentFlags.START],
                    [10, 11, SegmentFlags.NONE],
                    [12, 11, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [10, 16, SegmentFlags.NONE],
                    [11, 16, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-core-b1--direct": {
            description: "Lunar Core B1",
            flags: PathFlags.STEPS,
            map: "316E-0",
            segments: {
                "base-0": [
                    [17, 8, SegmentFlags.START],
                    [17, 9, SegmentFlags.NONE],
                    [24, 9, SegmentFlags.NONE],
                    [24, 12, SegmentFlags.NONE],
                    [26, 12, SegmentFlags.NONE],
                    [26, 16, SegmentFlags.NONE],
                    [24, 16, SegmentFlags.NONE],
                    [24, 15, SegmentFlags.NONE],
                    [23, 15, SegmentFlags.NONE],
                    [23, 14, SegmentFlags.NONE],
                    [21, 14, SegmentFlags.NONE],
                    [21, 13, SegmentFlags.NONE],
                    [13, 13, SegmentFlags.NONE],
                    [13, 15, SegmentFlags.NONE],
                    [9, 15, SegmentFlags.NONE],
                    [9, 20, SegmentFlags.NONE],
                    [12, 20, SegmentFlags.NONE],
                    [12, 19, SegmentFlags.NONE],
                    [14, 19, SegmentFlags.NONE],
                    [14, 20, SegmentFlags.NONE],
                    [15, 20, SegmentFlags.NONE],
                    [15, 21, SegmentFlags.NONE],
                    [19, 21, SegmentFlags.NONE],
                    [19, 20, SegmentFlags.NONE],
                    [20, 20, SegmentFlags.NONE],
                    [20, 16, SegmentFlags.NONE],
                    [17, 16, SegmentFlags.NONE],
                    [17, 19, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [17, 21, SegmentFlags.NONE],
                    [17, 22, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-core-b1--ninja": {
            description: "Lunar Core B1",
            flags: PathFlags.STEPS,
            map: "316E-0",
            segments: {
                "base-0": [
                    [17, 8, SegmentFlags.START],
                    [17, 9, SegmentFlags.NONE],
                    [24, 9, SegmentFlags.NONE],
                    [24, 12, SegmentFlags.NONE],
                    [26, 12, SegmentFlags.NONE],
                    [26, 16, SegmentFlags.NONE],
                    [24, 16, SegmentFlags.NONE],
                    [24, 15, SegmentFlags.NONE],
                    [23, 15, SegmentFlags.NONE],
                    [23, 14, SegmentFlags.NONE],
                    [21, 14, SegmentFlags.NONE],
                    [21, 13, SegmentFlags.NONE],
                    [13, 13, SegmentFlags.NONE],
                    [13, 15, SegmentFlags.NONE],
                    [8, 15, SegmentFlags.NONE],
                    [8, 13, SegmentFlags.NONE],
                    [7, 13, SegmentFlags.NONE],
                    [7, 12, SegmentFlags.RETURN],
                    [7, 13, SegmentFlags.NONE],
                    [8, 13, SegmentFlags.NONE],
                    [8, 15, SegmentFlags.NONE],
                    [9, 15, SegmentFlags.NONE],
                    [9, 20, SegmentFlags.NONE],
                    [12, 20, SegmentFlags.NONE],
                    [12, 19, SegmentFlags.NONE],
                    [14, 19, SegmentFlags.NONE],
                    [14, 20, SegmentFlags.NONE],
                    [15, 20, SegmentFlags.NONE],
                    [15, 21, SegmentFlags.NONE],
                    [19, 21, SegmentFlags.NONE],
                    [19, 20, SegmentFlags.NONE],
                    [20, 20, SegmentFlags.NONE],
                    [20, 16, SegmentFlags.NONE],
                    [17, 16, SegmentFlags.NONE],
                    [17, 19, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [17, 21, SegmentFlags.NONE],
                    [17, 22, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-core-b2": {
            description: "Lunar Core B2",
            flags: PathFlags.STEPS,
            map: "316F-0",
            segments: {
                "base-0": [
                    [15, 8, SegmentFlags.START],
                    [15, 11, SegmentFlags.NONE],
                    [17, 11, SegmentFlags.NONE],
                    [17, 15, SegmentFlags.NONE],
                    [21, 15, SegmentFlags.NONE],
                    [21, 18, SegmentFlags.NONE],
                    [13, 18, SegmentFlags.NONE],
                    [13, 16, SegmentFlags.NONE],
                    [9, 16, SegmentFlags.NONE],
                    [9, 15, SegmentFlags.NONE],
                    [7, 15, SegmentFlags.NONE],
                    [7, 22, SegmentFlags.NONE],
                    [22, 22, SegmentFlags.NONE],
                    [22, 23, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [22, 22, SegmentFlags.NONE],
                    [23, 22, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-core-b3--direct": {
            description: "Lunar Core B3",
            flags: PathFlags.STEPS,
            map: "3170-0",
            segments: {
                "base-0": [
                    [21, 7, SegmentFlags.START],
                    [21, 9, SegmentFlags.NONE],
                    [14, 9, SegmentFlags.NONE],
                    [14, 12, SegmentFlags.NONE],
                    [17, 12, SegmentFlags.NONE],
                    [17, 11, SegmentFlags.NONE],
                    [19, 11, SegmentFlags.NONE],
                    [19, 12, SegmentFlags.NONE],
                    [22, 12, SegmentFlags.NONE],
                    [22, 15, SegmentFlags.NONE],
                    [13, 15, SegmentFlags.NONE],
                    [13, 18, SegmentFlags.NONE],
                    [14, 18, SegmentFlags.NONE],
                    [14, 19, SegmentFlags.NONE],
                    [16, 19, SegmentFlags.NONE],
                    [16, 20, SegmentFlags.NONE],
                    [23, 20, SegmentFlags.NONE],
                    [23, 24, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [23, 21, SegmentFlags.NONE],
                    [24, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-core-b3--ninja": {
            description: "Lunar Core B3",
            flags: PathFlags.STEPS,
            map: "3170-0",
            segments: {
                "base-0": [
                    [21, 7, SegmentFlags.START],
                    [21, 9, SegmentFlags.NONE],
                    [14, 9, SegmentFlags.NONE],
                    [14, 12, SegmentFlags.NONE],
                    [17, 12, SegmentFlags.NONE],
                    [17, 11, SegmentFlags.NONE],
                    [19, 11, SegmentFlags.NONE],
                    [19, 12, SegmentFlags.NONE],
                    [22, 12, SegmentFlags.NONE],
                    [22, 15, SegmentFlags.NONE],
                    [24, 15, SegmentFlags.RETURN],
                    [22, 15, SegmentFlags.NONE],
                    [13, 15, SegmentFlags.NONE],
                    [13, 18, SegmentFlags.NONE],
                    [14, 18, SegmentFlags.NONE],
                    [14, 19, SegmentFlags.NONE],
                    [16, 19, SegmentFlags.NONE],
                    [16, 20, SegmentFlags.NONE],
                    [23, 20, SegmentFlags.NONE],
                    [23, 24, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [23, 21, SegmentFlags.NONE],
                    [24, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-core-b4": {
            description: "Lunar Core B4",
            flags: PathFlags.STEPS,
            map: "3171-0",
            segments: {
                "base-0": [
                    [25, 8, SegmentFlags.START],
                    [6, 8, SegmentFlags.NONE],
                    [6, 15, SegmentFlags.NONE],
                    [25, 15, SegmentFlags.NONE],
                    [25, 20, SegmentFlags.NONE],
                    [9, 20, SegmentFlags.NONE],
                    [9, 19, SegmentFlags.NONE],
                    [7, 19, SegmentFlags.NONE],
                    [7, 20, SegmentFlags.NONE],
                    [6, 20, SegmentFlags.END],
                ],
            },
        },
        "lunar-core-b5": {
            flags: PathFlags.STEPS,
            map: "3172-0",
            segments: {
                "base-0": [
                    [15, 23, SegmentFlags.START],
                    [15, 15, SegmentFlags.END],
                ],
            },
        },
        "lunar-overworld--after-hummingway-cave": {
            flags: PathFlags.STEPS,
            map: "2000-0",
            mapRange: [17, 23, 32, 32],
            segments: {
                "base-0": [
                    [33, 39, SegmentFlags.START],
                    [33, 40, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [33, 40, SegmentFlags.NONE],
                    [34, 40, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-overworld--before-hummingway-cave": {
            flags: PathFlags.STEPS,
            map: "2000-0",
            mapRange: [17, 23, 32, 32],
            segments: {
                "base-0": [
                    [33, 40, SegmentFlags.START],
                    [33, 39, SegmentFlags.END],
                ],
            },
        },
        "lunar-overworld--lunar-path-east-to-lunar-path-west": {
            flags: PathFlags.STEPS,
            map: "2000-0",
            mapRange: [13, 3, 32, 32],
            segments: {
                "base-0": [
                    [41, 25, SegmentFlags.START],
                    [37, 25, SegmentFlags.NONE],
                    [37, 16, SegmentFlags.NONE],
                    [33, 16, SegmentFlags.NONE],
                    [33, 14, SegmentFlags.NONE],
                    [22, 14, SegmentFlags.NONE],
                    [22, 15, SegmentFlags.NONE],
                    [18, 15, SegmentFlags.NONE],
                    [18, 14, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [22, 15, SegmentFlags.NONE],
                    [23, 15, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-overworld--lunar-path-east-to-lunars-lair--before-fusoya": {
            flags: PathFlags.STEPS,
            map: "2000-0",
            mapRange: [17, 11, 32, 32],
            segments: {
                "base-0": [
                    [40, 29, SegmentFlags.START],
                    [37, 29, SegmentFlags.NONE],
                    [37, 30, SegmentFlags.NONE],
                    [33, 30, SegmentFlags.NONE],
                    [33, 28, SegmentFlags.NONE],
                    [28, 28, SegmentFlags.NONE],
                    [28, 25, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [28, 26, SegmentFlags.NONE],
                    [29, 26, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-overworld--lunar-path-east-to-lunars-lair--before-zeromus": {
            flags: PathFlags.STEPS,
            map: "2000-0",
            mapRange: [17, 11, 32, 32],
            segments: {
                "base-0": [
                    [40, 29, SegmentFlags.START],
                    [37, 29, SegmentFlags.NONE],
                    [37, 30, SegmentFlags.NONE],
                    [33, 30, SegmentFlags.NONE],
                    [33, 28, SegmentFlags.NONE],
                    [28, 28, SegmentFlags.NONE],
                    [28, 25, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [28, 26, SegmentFlags.NONE],
                    [29, 26, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-overworld--lunar-path-landing-to-lunar-path-west--before-fusoya": {
            flags: PathFlags.STEPS,
            map: "2000-0",
            mapRange: [3, 4, 32, 32],
            segments: {
                "base-0": [
                    [21, 19, SegmentFlags.START],
                    [21, 21, SegmentFlags.NONE],
                    [18, 21, SegmentFlags.NONE],
                    [18, 20, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [18, 21, SegmentFlags.NONE],
                    [17, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "lunar-overworld--lunar-path-landing-to-lunar-path-west--before-zeromus": {
            flags: PathFlags.STEPS,
            map: "2000-0",
            mapRange: [3, 4, 32, 32],
            segments: {
                "base-0": [
                    [21, 19, SegmentFlags.START],
                    [21, 21, SegmentFlags.NONE],
                    [18, 21, SegmentFlags.NONE],
                    [18, 20, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [18, 21, SegmentFlags.NONE],
                    [17, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "lunar-overworld--lunar-path-west-to-lunar-path-east--before-fusoya": {
            flags: PathFlags.STEPS,
            map: "2000-0",
            mapRange: [14, 3, 32, 32],
            segments: {
                "base-0": [
                    [18, 15, SegmentFlags.START],
                    [23, 15, SegmentFlags.NONE],
                    [23, 14, SegmentFlags.NONE],
                    [33, 14, SegmentFlags.NONE],
                    [33, 16, SegmentFlags.NONE],
                    [37, 16, SegmentFlags.NONE],
                    [37, 25, SegmentFlags.NONE],
                    [41, 25, SegmentFlags.NONE],
                    [41, 24, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [41, 25, SegmentFlags.NONE],
                    [42, 25, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-overworld--lunar-path-west-to-lunar-path-east--before-zeromus": {
            flags: PathFlags.STEPS,
            map: "2000-0",
            mapRange: [14, 3, 32, 32],
            segments: {
                "base-0": [
                    [18, 15, SegmentFlags.START],
                    [23, 15, SegmentFlags.NONE],
                    [23, 14, SegmentFlags.NONE],
                    [33, 14, SegmentFlags.NONE],
                    [33, 16, SegmentFlags.NONE],
                    [37, 16, SegmentFlags.NONE],
                    [37, 25, SegmentFlags.NONE],
                    [41, 25, SegmentFlags.NONE],
                    [41, 24, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [41, 25, SegmentFlags.NONE],
                    [42, 25, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-overworld--lunar-path-west-to-lunar-path-landing": {
            flags: PathFlags.STEPS,
            map: "2000-0",
            mapRange: [13, 3, 32, 32],
            segments: {
                "base-0": [
                    [18, 21, SegmentFlags.START],
                    [21, 21, SegmentFlags.NONE],
                    [21, 19, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [21, 19, SegmentFlags.NONE],
                    [22, 19, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-overworld--lunars-lair-to-lunar-path-east": {
            flags: PathFlags.STEPS,
            map: "2000-0",
            mapRange: [17, 11, 32, 32],
            segments: {
                "base-0": [
                    [28, 25, SegmentFlags.START],
                    [28, 29, SegmentFlags.NONE],
                    [34, 29, SegmentFlags.NONE],
                    [34, 30, SegmentFlags.NONE],
                    [37, 30, SegmentFlags.NONE],
                    [37, 29, SegmentFlags.NONE],
                    [40, 29, SegmentFlags.NONE],
                    [40, 28, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [40, 29, SegmentFlags.NONE],
                    [41, 29, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-overworld-big-whale--hummingway-cave-to-lunar-path-landing": {
            flags: PathFlags.STEPS,
            map: "2000-0",
            mapRange: [11, 13, 32, 32],
            segments: {
                "base-0": [
                    [33, 40, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [21, 40, SegmentFlags.VEHICLE],
                    [21, 19, SegmentFlags.END | SegmentFlags.VEHICLE],
                ],
            },
        },
        "lunar-overworld-big-whale--lunar-path-landing-to-hummingway-cave": {
            flags: PathFlags.STEPS,
            map: "2000-0",
            mapRange: [11, 13, 32, 32],
            segments: {
                "base-0": [
                    [21, 19, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [21, 40, SegmentFlags.VEHICLE],
                    [33, 40, SegmentFlags.END | SegmentFlags.VEHICLE],
                ],
            },
        },
        "lunar-overworld-big-whale--post-giant-to-lunar-path-landing": {
            flags: PathFlags.STEPS,
            map: "2000-0",
            mapRange: [4, 13, 32, 32],
            segments: {
                "base-0": [
                    [19, 39, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [21, 39, SegmentFlags.VEHICLE],
                    [21, 19, SegmentFlags.END | SegmentFlags.VEHICLE],
                ],
            },
        },
        "lunar-path-east--after-fusoya": {
            flags: PathFlags.STEPS,
            map: "3164-0",
            segments: {
                "base-0": [
                    [9, 25, SegmentFlags.START],
                    [9, 18, SegmentFlags.NONE],
                    [14, 18, SegmentFlags.NONE],
                    [14, 6, SegmentFlags.NONE],
                    [21, 6, SegmentFlags.NONE],
                    [21, 5, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [21, 6, SegmentFlags.NONE],
                    [21, 7, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-path-east--before-fusoya": {
            flags: PathFlags.STEPS,
            map: "3164-0",
            segments: {
                "base-0": [
                    [21, 6, SegmentFlags.START],
                    [14, 6, SegmentFlags.NONE],
                    [14, 19, SegmentFlags.NONE],
                    [9, 19, SegmentFlags.NONE],
                    [9, 26, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [9, 25, SegmentFlags.NONE],
                    [10, 25, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-path-east--before-zeromus": {
            flags: PathFlags.STEPS,
            map: "3164-0",
            segments: {
                "base-0": [
                    [21, 6, SegmentFlags.START],
                    [14, 6, SegmentFlags.NONE],
                    [14, 19, SegmentFlags.NONE],
                    [9, 19, SegmentFlags.NONE],
                    [9, 26, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [9, 25, SegmentFlags.NONE],
                    [10, 25, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-path-west--after-fusoya": {
            flags: PathFlags.STEPS,
            map: "3163-0",
            segments: {
                "base-0": [
                    [19, 5, SegmentFlags.START],
                    [19, 10, SegmentFlags.NONE],
                    [12, 10, SegmentFlags.NONE],
                    [12, 15, SegmentFlags.NONE],
                    [11, 15, SegmentFlags.NONE],
                    [11, 23, SegmentFlags.NONE],
                    [14, 23, SegmentFlags.NONE],
                    [14, 29, SegmentFlags.NONE],
                    [12, 29, SegmentFlags.NONE],
                    [12, 31, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [12, 29, SegmentFlags.NONE],
                    [11, 29, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "lunar-path-west--before-fusoya": {
            flags: PathFlags.STEPS,
            map: "3163-0",
            segments: {
                "base-0": [
                    [12, 30, SegmentFlags.START],
                    [12, 29, SegmentFlags.NONE],
                    [14, 29, SegmentFlags.NONE],
                    [14, 23, SegmentFlags.NONE],
                    [11, 23, SegmentFlags.NONE],
                    [11, 15, SegmentFlags.NONE],
                    [14, 15, SegmentFlags.NONE],
                    [14, 10, SegmentFlags.NONE],
                    [19, 10, SegmentFlags.NONE],
                    [19, 4, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [19, 5, SegmentFlags.NONE],
                    [20, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-path-west--before-zeromus": {
            flags: PathFlags.STEPS,
            map: "3163-0",
            segments: {
                "base-0": [
                    [12, 30, SegmentFlags.START],
                    [12, 29, SegmentFlags.NONE],
                    [14, 29, SegmentFlags.NONE],
                    [14, 23, SegmentFlags.NONE],
                    [11, 23, SegmentFlags.NONE],
                    [11, 15, SegmentFlags.NONE],
                    [14, 15, SegmentFlags.NONE],
                    [14, 10, SegmentFlags.NONE],
                    [19, 10, SegmentFlags.NONE],
                    [19, 4, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [19, 5, SegmentFlags.NONE],
                    [20, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-subterrane-b1": {
            flags: PathFlags.STEPS,
            map: "3167-0",
            segments: {
                "base-0": [
                    [13, 13, SegmentFlags.START],
                    [13, 8, SegmentFlags.NONE],
                    [17, 8, SegmentFlags.NONE],
                    [17, 19, SegmentFlags.NONE],
                    [13, 19, SegmentFlags.NONE],
                    [13, 25, SegmentFlags.NONE],
                    [16, 25, SegmentFlags.NONE],
                    [16, 24, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [16, 25, SegmentFlags.NONE],
                    [17, 25, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-subterrane-b2": {
            flags: PathFlags.STEPS,
            map: "3168-0",
            segments: {
                "base-0": [
                    [19, 25, SegmentFlags.START],
                    [19, 30, SegmentFlags.NONE],
                    [30, 30, SegmentFlags.NONE],
                    [31, 30, SegmentFlags.NONE],
                    [31, 4, SegmentFlags.NONE],
                    [23, 4, SegmentFlags.NONE],
                    [23, 5, SegmentFlags.NONE],
                    [15, 5, SegmentFlags.NONE],
                    [15, 4, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [19, 5, SegmentFlags.NONE],
                    [20, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
                "extra-2-0": [
                    [15, 5, SegmentFlags.NONE],
                    [14, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "lunar-subterrane-b3": {
            flags: PathFlags.STEPS,
            map: "3169-0",
            segments: {
                "base-0": [
                    [15, 5, SegmentFlags.START],
                    [14, 5, SegmentFlags.NONE],
                    [14, 16, SegmentFlags.NONE],
                    [16, 16, SegmentFlags.NONE],
                    [16, 15, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [16, 16, SegmentFlags.NONE],
                    [16, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-subterrane-b4--lower": {
            flags: PathFlags.STEPS,
            map: "316A-0",
            segments: {
                "base-0": [
                    [10, 21, SegmentFlags.START],
                    [10, 27, SegmentFlags.NONE],
                    [16, 27, SegmentFlags.NONE],
                    [16, 31, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [16, 27, SegmentFlags.NONE],
                    [16, 26, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-subterrane-b4--upper": {
            flags: PathFlags.STEPS,
            map: "316A-0",
            segments: {
                "base-0": [
                    [9, 7, SegmentFlags.START],
                    [13, 7, SegmentFlags.NONE],
                    [13, 5, SegmentFlags.NONE],
                    [18, 5, SegmentFlags.NONE],
                    [18, 18, SegmentFlags.NONE],
                    [29, 18, SegmentFlags.NONE],
                    [29, 16, SegmentFlags.NONE],
                    [31, 16, SegmentFlags.NONE],
                    [31, 24, SegmentFlags.NONE],
                    [28, 24, SegmentFlags.NONE],
                    [28, 26, SegmentFlags.NONE],
                    [25, 26, SegmentFlags.NONE],
                    [25, 24, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [25, 26, SegmentFlags.NONE],
                    [24, 26, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "lunar-subterrane-b4-passage": {
            flags: PathFlags.STEPS,
            map: "3174-0",
            segments: {
                "base-0": [
                    [24, 19, SegmentFlags.START],
                    [24, 14, SegmentFlags.NONE],
                    [18, 14, SegmentFlags.NONE],
                    [18, 12, SegmentFlags.NONE],
                    [12, 12, SegmentFlags.NONE],
                    [12, 14, SegmentFlags.NONE],
                    [9, 14, SegmentFlags.NONE],
                    [9, 12, SegmentFlags.NONE],
                    [6, 12, SegmentFlags.NONE],
                    [6, 13, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [6, 12, SegmentFlags.NONE],
                    [5, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "lunar-subterrane-b5--lower--after-pink-puff-room": {
            flags: PathFlags.STEPS,
            map: "316B-0",
            segments: {
                "base-0": [
                    [23, 27, SegmentFlags.START],
                    [23, 28, SegmentFlags.NONE],
                    [20, 28, SegmentFlags.NONE],
                    [20, 31, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [20, 28, SegmentFlags.NONE],
                    [20, 27, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-subterrane-b5--lower--before-pink-puff-room": {
            flags: PathFlags.STEPS,
            map: "316B-0",
            segments: {
                "alternate-0": [
                    [20, 28, SegmentFlags.NONE],
                    [23, 28, SegmentFlags.NONE],
                    [23, 27, SegmentFlags.END],
                ],
                "base-0": [
                    [14, 28, SegmentFlags.START],
                    [18, 28, SegmentFlags.NONE],
                    [18, 26, SegmentFlags.NONE],
                    [20, 26, SegmentFlags.NONE],
                    [20, 28, SegmentFlags.NONE],
                ],
                "extra-2-0": [
                    [23, 28, SegmentFlags.NONE],
                    [24, 28, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-subterrane-b5--lower--direct": {
            flags: PathFlags.STEPS,
            map: "316B-0",
            segments: {
                "base-0": [
                    [14, 28, SegmentFlags.START],
                    [18, 28, SegmentFlags.NONE],
                    [18, 26, SegmentFlags.NONE],
                    [20, 26, SegmentFlags.NONE],
                    [20, 31, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [20, 28, SegmentFlags.NONE],
                    [21, 28, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-subterrane-b5--middle": {
            flags: PathFlags.STEPS,
            map: "316B-0",
            segments: {
                "base-0": [
                    [22, 22, SegmentFlags.START],
                    [19, 22, SegmentFlags.NONE],
                    [19, 21, SegmentFlags.NONE],
                    [14, 21, SegmentFlags.NONE],
                    [14, 20, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [14, 21, SegmentFlags.NONE],
                    [13, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "lunar-subterrane-b5--upper": {
            flags: PathFlags.STEPS,
            map: "316B-0",
            segments: {
                "base-0": [
                    [16, 2, SegmentFlags.START],
                    [16, 14, SegmentFlags.NONE],
                    [11, 14, SegmentFlags.NONE],
                    [11, 13, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [11, 14, SegmentFlags.NONE],
                    [10, 14, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "lunar-subterrane-b5-passage-a": {
            flags: PathFlags.STEPS,
            map: "3175-0",
            segments: {
                "base-0": [
                    [5, 15, SegmentFlags.START],
                    [5, 5, SegmentFlags.NONE],
                    [17, 5, SegmentFlags.NONE],
                    [17, 8, SegmentFlags.NONE],
                    [14, 8, SegmentFlags.NONE],
                    [14, 13, SegmentFlags.NONE],
                    [22, 13, SegmentFlags.NONE],
                    [22, 7, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [16, 5, SegmentFlags.NONE],
                    [17, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
                "extra-2-0": [
                    [22, 8, SegmentFlags.NONE],
                    [23, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-subterrane-b5-passage-b": {
            flags: PathFlags.STEPS,
            map: "3176-0",
            segments: {
                "base-0": [
                    [9, 15, SegmentFlags.START],
                    [9, 7, SegmentFlags.NONE],
                    [6, 7, SegmentFlags.NONE],
                    [3, 7, SegmentFlags.NONE],
                    [3, 13, SegmentFlags.RETURN],
                    [3, 7, SegmentFlags.NONE],
                    [6, 7, SegmentFlags.NONE],
                    [6, 3, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [6, 4, SegmentFlags.NONE],
                    [7, 4, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-subterrane-b5-pink-puff-room": {
            flags: PathFlags.STEPS,
            map: "3177-0",
            segments: {
                "base-0": [
                    [2, 9, SegmentFlags.START],
                    [2, 10, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [2, 9, SegmentFlags.NONE],
                    [3, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-subterrane-b6--direct": {
            description: "Lunar Subterrane B6",
            flags: PathFlags.STEPS,
            map: "316C-0",
            segments: {
                "base-0": [
                    [20, 1, SegmentFlags.START],
                    [20, 10, SegmentFlags.NONE],
                    [21, 10, SegmentFlags.NONE],
                    [21, 14, SegmentFlags.NONE],
                    [23, 14, SegmentFlags.NONE],
                    [23, 12, SegmentFlags.NONE],
                    [27, 12, SegmentFlags.NONE],
                    [27, 20, SegmentFlags.NONE],
                    [26, 20, SegmentFlags.NONE],
                    [26, 21, SegmentFlags.NONE],
                    [25, 21, SegmentFlags.NONE],
                    [25, 22, SegmentFlags.NONE],
                    [22, 22, SegmentFlags.NONE],
                    [22, 21, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [22, 22, SegmentFlags.NONE],
                    [21, 22, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "lunar-subterrane-b6--ninja": {
            description: "Lunar Subterrane B6",
            flags: PathFlags.STEPS,
            map: "316C-0",
            segments: {
                "base-0": [
                    [20, 1, SegmentFlags.START],
                    [20, 8, SegmentFlags.NONE],
                    [25, 8, SegmentFlags.NONE],
                    [25, 6, SegmentFlags.RETURN],
                    [25, 8, SegmentFlags.NONE],
                    [21, 8, SegmentFlags.NONE],
                    [21, 10, SegmentFlags.NONE],
                    [21, 10, SegmentFlags.NONE],
                    [21, 14, SegmentFlags.NONE],
                    [23, 14, SegmentFlags.NONE],
                    [23, 12, SegmentFlags.NONE],
                    [27, 12, SegmentFlags.NONE],
                    [27, 20, SegmentFlags.NONE],
                    [26, 20, SegmentFlags.NONE],
                    [26, 21, SegmentFlags.NONE],
                    [25, 21, SegmentFlags.NONE],
                    [25, 22, SegmentFlags.NONE],
                    [22, 22, SegmentFlags.NONE],
                    [22, 21, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [22, 22, SegmentFlags.NONE],
                    [21, 22, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "lunar-subterrane-b6-passage": {
            flags: PathFlags.STEPS,
            map: "3179-0",
            segments: {
                "base-0": [
                    [5, 13, SegmentFlags.START],
                    [5, 11, SegmentFlags.NONE],
                    [10, 11, SegmentFlags.NONE],
                    [10, 4, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [10, 5, SegmentFlags.NONE],
                    [11, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-subterrane-b7--after-save-room": {
            flags: PathFlags.STEPS,
            map: "316D-0",
            segments: {
                "base-0": [
                    [13, 20, SegmentFlags.START],
                    [13, 21, SegmentFlags.NONE],
                    [30, 21, SegmentFlags.NONE],
                    [30, 2, SegmentFlags.NONE],
                    [21, 2, SegmentFlags.NONE],
                    [21, 9, SegmentFlags.NONE],
                    [17, 9, SegmentFlags.NONE],
                    [17, 7, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [17, 8, SegmentFlags.NONE],
                    [18, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-subterrane-b7--before-save-room": {
            flags: PathFlags.STEPS,
            map: "316D-0",
            segments: {
                "base-0": [
                    [3, 8, SegmentFlags.START],
                    [3, 13, SegmentFlags.NONE],
                    [8, 13, SegmentFlags.NONE],
                    [8, 21, SegmentFlags.NONE],
                    [13, 21, SegmentFlags.NONE],
                    [13, 20, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [13, 21, SegmentFlags.NONE],
                    [13, 22, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunar-subterrane-b7-save-room": {
            flags: PathFlags.STEPS,
            map: "317B-0",
            segments: {
                "base-0": [
                    [3, 14, SegmentFlags.START],
                    [3, 9, SegmentFlags.RETURN],
                    [3, 15, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [3, 10, SegmentFlags.NONE],
                    [4, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [3, 14, SegmentFlags.NONE],
                    [4, 14, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "lunars-lair-1f--descent": {
            flags: PathFlags.NONE,
            map: "3160-0",
            segments: {
                "base-0": [
                    [16, 28, SegmentFlags.START],
                    [16, 21, SegmentFlags.NONE],
                    [19, 21, SegmentFlags.NONE],
                    [19, 8, SegmentFlags.NONE],
                    [16, 8, SegmentFlags.NONE],
                    [16, 5, SegmentFlags.END],
                ],
            },
        },
        "lunars-lair-1f--fusoya": {
            flags: PathFlags.NONE,
            map: "3160-0",
            segments: {
                "base-0": [
                    [16, 28, SegmentFlags.START],
                    [16, 21, SegmentFlags.END],
                ],
                "base-1": [
                    [16, 15, SegmentFlags.START],
                    [16, 29, SegmentFlags.END],
                ],
            },
        },
        "lunars-lair-2f": {
            flags: PathFlags.NONE,
            map: "3161-0",
            segments: {
                "base-0": [
                    [16, 28, SegmentFlags.START],
                    [16, 27, SegmentFlags.NONE],
                    [23, 27, SegmentFlags.NONE],
                    [23, 23, SegmentFlags.NONE],
                    [26, 23, SegmentFlags.NONE],
                    [26, 16, SegmentFlags.NONE],
                    [16, 16, SegmentFlags.END],
                ],
            },
        },
    };

    data.variables = {
        C316B00: { // eslint-disable-line
            descriptions: {
                1: "Enter the Pink Puff Room on Lunar Subterrane B5 (lower).",
            },
            paths: {
                1: {
                    "lunar-subterrane-b5--lower--before-pink-puff-room": {
                        index: "0",
                        instruction: "Enter the Pink Puff Room",
                        location: "Lunar Subterrane B5 (lower)",
                    },
                },
            },
            type: VariableFlags.CHOICE,
        },
        C316C00: {
            descriptions: {
                0: "Get the Ninja star on Lunar Subterrane B6",
                1: "Get the Ninja star on Lunar Core B1",
                2: "Get the Ninja star on Lunar Core B3",
            },
            paths: {
                0: {
                    "lunar-subterrane-b6--ninja": {
                        index: "0",
                        instruction: "Get the Ninja star",
                        location: "Lunar Subterrane B6",
                    },
                },
                1: {
                    "lunar-core-b1--ninja": {
                        index: "0",
                        instruction: "Get the Ninja star",
                        location: "Lunar Core B1",
                    },
                },
                2: {
                    "lunar-core-b3--ninja": {
                        index: "0",
                        instruction: "Get the Ninja star",
                        location: "Lunar Core B3",
                    },
                },
            },
            type: VariableFlags.CHOICE,
        },
        E200000: {
            paths: {
                "lunar-overworld--after-hummingway-cave": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Overworld [after Hummingway Cave]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E200007: {
            paths: {
                "lunar-overworld--lunar-path-landing-to-lunar-path-west--before-zeromus": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Overworld [final descent before Lunar Path (west)]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E200008: {
            paths: {
                "lunar-overworld--lunar-path-west-to-lunar-path-east--before-zeromus": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Overworld [final descent before Lunar Path (east)]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E200009: {
            paths: {
                "lunar-overworld--lunar-path-east-to-lunars-lair--before-zeromus": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Overworld [final descent after Lunar Path (east)]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30B500: {
            paths: {
                "giant-of-babil-mouth": {
                    disambiguation: "",
                    index: "0",
                    location: "Giant of Bab-il Mouth",
                },
            },
            routes: {
                1: { "giant-of-babil-mouth": 1 },
            },
            type: VariableFlags.EXTRA,
        },
        E30B600: {
            paths: {
                "giant-of-babil-neck": {
                    disambiguation: "",
                    index: "0",
                    location: "Giant of Bab-il Neck",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30B700: {
            paths: {
                "giant-of-babil-chest": {
                    disambiguation: "",
                    index: "0",
                    location: "Giant of Bab-il Chest",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30B900: {
            paths: {
                "giant-of-babil-stomach": {
                    disambiguation: "",
                    index: "0",
                    location: "Giant of Bab-il Stomach",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30BA00: {
            paths: {
                "giant-of-babil-passage": {
                    disambiguation: "",
                    index: "0",
                    location: "Giant of Bab-il Passage",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30BC00: {
            paths: {
                "giant-of-babil-lung": {
                    disambiguation: " before the Elements battle",
                    index: "0",
                    location: "Giant of Bab-il Lung",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30BC01: {
            paths: {
                "giant-of-babil-lung": {
                    disambiguation: " after the Elements battle",
                    index: "1",
                    location: "Giant of Bab-il Lung",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30BD00: {
            paths: {
                "giant-of-babil-cpu": {
                    disambiguation: "",
                    index: "0",
                    location: "Giant of Bab-il CPU",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316302: {
            paths: {
                "lunar-path-west--before-zeromus": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Path (west) [final descent]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316402: {
            paths: {
                "lunar-path-east--before-zeromus": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Path (east) [final descent]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316500: {
            minSteps: 16,
            paths: {
                "hummingway-cave": {
                    disambiguation: "",
                    index: "0",
                    location: "Hummingway Cave",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316700: {
            paths: {
                "lunar-subterrane-b1": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B1",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316800: {
            paths: {
                "lunar-subterrane-b2": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B2",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316900: {
            paths: {
                "lunar-subterrane-b3": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B3",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316A00: { // eslint-disable-line
            paths: {
                "lunar-subterrane-b4--upper": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B4 (upper)",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316A01: {
            paths: {
                "lunar-subterrane-b4--lower": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B4 (lower)",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316B00: {
            paths: {
                "lunar-subterrane-b5--upper": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B5 (upper)",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316B01: {
            paths: {
                "lunar-subterrane-b5--middle": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B5 (middle)",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316B02: {
            paths: {
                "lunar-subterrane-b5--lower--before-pink-puff-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B5 (lower) [before Pink Puff Room]",
                },
                "lunar-subterrane-b5--lower--direct": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B5 (lower)",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316B03: {
            paths: {
                "lunar-subterrane-b5--lower--after-pink-puff-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B5 (lower) [after Pink Puff Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316C00: {
            paths: {
                "lunar-subterrane-b6--direct": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B6",
                },
                "lunar-subterrane-b6--ninja": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B6",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316D00: {
            paths: {
                "lunar-subterrane-b7--before-save-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B7 [before Save Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316D01: {
            paths: {
                "lunar-subterrane-b7--after-save-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B7 [after Save Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316E00: {
            paths: {
                "lunar-core-b1--direct": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Core B1",
                },
                "lunar-core-b1--ninja": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Core B1",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316F00: {
            paths: {
                "lunar-core-b2": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Core B2",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E317000: {
            paths: {
                "lunar-core-b3--direct": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Core B3",
                },
                "lunar-core-b3--ninja": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Core B3",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E317400: {
            paths: {
                "lunar-subterrane-b4-passage": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B4 Passage",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E317500: {
            paths: {
                "lunar-subterrane-b5-passage-a": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B5 Passage A",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E317600: {
            paths: {
                "lunar-subterrane-b5-passage-b": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B5 Passage B",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E317700: {
            paths: {
                "lunar-subterrane-b5-pink-puff-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B5 Pink Puff Room",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E317900: {
            paths: {
                "lunar-subterrane-b6-passage": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B6 Passage",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E317B00: { // eslint-disable-line
            paths: {
                "lunar-subterrane-b7-save-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Subterrane B7 Save Room",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
    };

    /*
	 * Public Definition
	 */

    return {
        data: data,
    };
}();
