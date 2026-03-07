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
        { name: "overworld-mist--after-mist-clip" },
        { name: "village-mist--entrance-to-weapon" },
        { name: "village-mist-weapon" },
        { name: "village-mist--weapon-to-house" },
        { name: "village-mist-house" },
        { name: "village-mist--house-to-trigger" },
        { name: "overworld-kaipo--mist-to-kaipo" },
        { name: "kaipo--entrance-to-trigger" },
        { name: "kaipo-inn" },
        { name: "kaipo--inn-to-house" },
        { name: "kaipo-house--finding-rosa" },
        { name: "kaipo--house-to-right-exit" },
        { name: "overworld-kaipo--kaipo-to-watery-pass" },
        { name: "watery-pass-south-b1f" },
        { name: "watery-pass-south-b2f--before-save-room" },
        { name: "watery-pass-south-b2f-save-room" },
        { name: "watery-pass-south-b2f--after-save-room" },
        { name: "watery-pass-south-b3f" },
        { name: "watery-pass-north-b2f" },
        { name: "watery-pass-north-b1f" },
        { name: "overworld-kaipo--watery-pass-to-waterfalls" },
        { name: "waterfalls-b1f" },
        { name: "waterfalls-b2f" },
        { name: "waterfalls-lake--before-octomamm" },
        { name: "waterfalls-lake--after-octomamm" },
        { name: "overworld-damcyan--waterfalls-to-damcyan" },
        { name: "damcyan" },
        { name: "damcyan-1f" },
        { name: "damcyan-2f" },
        { name: "damcyan-3f" },
        { name: "overworld-damcyan--damcyan-to-antlion" },
        { name: "antlion-b1f--before-antlion" },
        { name: "antlion-b2f--before-antlion--direct", condition: { variable: "C307800", values: [0] } },
        { name: "antlion-b2f--before-antlion--before-charm-room", condition: { variable: "C307800", values: [1] } },
        { name: "antlion-b2f-charm-room--before-antlion", condition: { variable: "C307800", values: [1] } },
        { name: "antlion-b2f--before-antlion--after-charm-room", condition: { variable: "C307800", values: [1] } },
        { name: "antlions-nest--before-antlion" },
        { name: "antlions-nest--after-antlion" },
        { name: "antlion-b2f--after-antlion--direct", condition: { variable: "C307801", values: [0] } },
        { name: "antlion-b2f--after-antlion--before-charm-room", condition: { variable: "C307801", values: [1] } },
        { name: "antlion-b2f-charm-room--after-antlion", condition: { variable: "C307801", values: [1] } },
        { name: "antlion-b2f--after-antlion--after-charm-room", condition: { variable: "C307801", values: [1] } },
        { name: "antlion-b1f--after-antlion" },
        { name: "overworld-damcyan--antlion-to-kaipo" },
        { name: "overworld-kaipo--antlion-to-kaipo-a" },
        { name: "overworld-kaipo--antlion-to-kaipo-b" },
        { name: "kaipo--entrance-to-house" },
        { name: "kaipo-house--healing-rosa" },
        { name: "kaipo--house-to-left-exit" },
        { name: "overworld-kaipo--kaipo-to-mt-hobs" },
        { name: "overworld-damcyan--kaipo-to-mt-hobs-a" },
        { name: "overworld-damcyan--kaipo-to-mt-hobs-b" },
        { name: "mt-hobs-west" },
        { name: "mt-hobs-summit" },
        { name: "mt-hobs-east" },
        { name: "overworld-fabul--mt-hobs-to-fabul-a" },
        { name: "overworld-fabul--mt-hobs-to-fabul-b" },
        { name: "fabul--before-gauntlet" },
        { name: "fabul-1f--before-gauntlet" },
        { name: "fabul-2f--before-gauntlet" },
        { name: "fabul-kings-room--before-gauntlet" },
        { name: "fabul-crystal-room" },
        { name: "fabul-kings-room--after-dragoon" },
        { name: "fabul-2f--after-dragoon" },
        { name: "fabul-1f--after-dragoon" },
        { name: "fabul-inn" },
        { name: "fabul-right-tower-3f" },
        { name: "fabul-right-tower-2f" },
        { name: "fabul-right-tower-1f" },
        { name: "fabul--right-tower-to-2f" },
        { name: "fabul-2f--after-right-tower" },
        { name: "fabul-1f--after-right-tower" },
        { name: "fabul--1f-to-exit" },
        { name: "overworld-fabul--fabul-to-ship" },
        { name: "overworld-mysidia--before-mysidia" },
        { name: "mysidia--entrance-to-item-shop" },
        { name: "mysidia-item-shop" },
        { name: "mysidia--item-shop-to-house-of-wishes" },
        { name: "mysidia-house-of-wishes" },
        { name: "mysidia--house-of-wishes-to-armor-shop" },
        { name: "mysidia-armor-shop" },
        { name: "mysidia--armor-shop-to-exit" },
        { name: "overworld-mysidia--after-mysidia" },
        { name: "overworld-mt-ordeals--mysidia-to-mt-ordeals-a" },
        { name: "overworld-mt-ordeals--mysidia-to-mt-ordeals-b" },
        { name: "mt-ordeals" },
        { name: "mt-ordeals-3rd-station" },
        { name: "mt-ordeals-7th-station" },
        { name: "mt-ordeals-summit" },
    ];

    data.paths = {
        "antlion-b1f--after-antlion": {
            flags: PathFlags.STEPS,
            map: "3077-0",
            segments: {
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
                    [15, 3, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [27, 21, SegmentFlags.NONE],
                    [28, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "antlion-b1f--before-antlion": {
            flags: PathFlags.STEPS,
            map: "3077-0",
            segments: {
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
                    [28, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "antlion-b2f--after-antlion--after-charm-room": {
            flags: PathFlags.STEPS,
            map: "3078-0",
            segments: {
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
                    [27, 2, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [29, 13, SegmentFlags.NONE],
                    [30, 13, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "antlion-b2f--after-antlion--before-charm-room": {
            flags: PathFlags.STEPS,
            map: "3078-0",
            segments: {
                "alternate-0": [
                    [25, 26, SegmentFlags.NONE],
                    [25, 23, SegmentFlags.END],
                ],
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
                "extra-1-0": [
                    [22, 28, SegmentFlags.NONE],
                    [22, 29, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [25, 24, SegmentFlags.NONE],
                    [26, 24, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "antlion-b2f--after-antlion--direct": {
            flags: PathFlags.STEPS,
            map: "3078-0",
            segments: {
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
                    [27, 2, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [22, 28, SegmentFlags.NONE],
                    [22, 29, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [29, 13, SegmentFlags.NONE],
                    [30, 13, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "antlion-b2f--before-antlion--after-charm-room": {
            flags: PathFlags.STEPS,
            map: "3078-0",
            segments: {
                "base-0": [
                    [25, 23, SegmentFlags.START],
                    [25, 28, SegmentFlags.NONE],
                    [22, 28, SegmentFlags.NONE],
                    [22, 31, SegmentFlags.NONE],
                    [3, 31, SegmentFlags.NONE],
                    [3, 23, SegmentFlags.NONE],
                    [14, 23, SegmentFlags.NONE],
                    [14, 29, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [22, 28, SegmentFlags.NONE],
                    [22, 29, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [14, 27, SegmentFlags.NONE],
                    [15, 27, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "antlion-b2f--before-antlion--before-charm-room": {
            flags: PathFlags.STEPS,
            map: "3078-0",
            segments: {
                "alternate-0": [
                    [25, 26, SegmentFlags.NONE],
                    [25, 23, SegmentFlags.END],
                ],
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
                "extra-2-0": [
                    [29, 13, SegmentFlags.NONE],
                    [30, 13, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "antlion-b2f--before-antlion--direct": {
            flags: PathFlags.STEPS,
            map: "3078-0",
            segments: {
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
                    [14, 29, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [22, 28, SegmentFlags.NONE],
                    [22, 29, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [14, 27, SegmentFlags.NONE],
                    [15, 27, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "antlion-b2f-charm-room--after-antlion": {
            flags: PathFlags.STEPS,
            map: "307B-0",
            segments: {
                "base-0": [
                    [4, 12, SegmentFlags.START],
                    [4, 13, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [4, 12, SegmentFlags.NONE],
                    [4, 11, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "antlion-b2f-charm-room--before-antlion": {
            flags: PathFlags.STEPS,
            map: "307B-0",
            segments: {
                "base-0": [
                    [4, 12, SegmentFlags.START],
                    [4, 13, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [4, 12, SegmentFlags.NONE],
                    [4, 11, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "antlions-nest--after-antlion": {
            flags: PathFlags.STEPS,
            map: "3079-0",
            segments: {
                "base-0": [
                    [14, 20, SegmentFlags.START],
                    [14, 3, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [14, 19, SegmentFlags.NONE],
                    [15, 19, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [14, 17, SegmentFlags.NONE],
                    [15, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "antlions-nest--before-antlion": {
            flags: PathFlags.STEPS,
            map: "3079-0",
            segments: {
                "base-0": [
                    [14, 4, SegmentFlags.START],
                    [14, 19, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [14, 17, SegmentFlags.NONE],
                    [15, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        damcyan: {
            flags: PathFlags.NONE,
            map: "3025-0",
            segments: {
                "base-0": [
                    [16, 30, SegmentFlags.START],
                    [16, 11, SegmentFlags.END],
                ],
            },
        },
        "damcyan-1f": {
            flags: PathFlags.STEPS,
            map: "303F-0",
            segments: {
                "base-0": [
                    [8, 15, SegmentFlags.START],
                    [8, 7, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [8, 13, SegmentFlags.NONE],
                    [9, 13, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "damcyan-2f": {
            flags: PathFlags.STEPS,
            map: "3040-0",
            segments: {
                "base-0": [
                    [8, 8, SegmentFlags.START],
                    [8, 10, SegmentFlags.NONE],
                    [7, 10, SegmentFlags.NONE],
                    [7, 13, SegmentFlags.NONE],
                    [8, 13, SegmentFlags.END],
                ],
                "optional-1-0": [
                    [8, 10, SegmentFlags.NONE],
                    [9, 10, SegmentFlags.NONE | SegmentFlags.ANNOTATE],
                    [9, 13, SegmentFlags.NONE],
                    [8, 13, SegmentFlags.END],
                ],
            },
        },
        "damcyan-3f": {
            flags: PathFlags.STEPS,
            map: "3041-0",
            segments: {
                "base-0": [
                    [13, 13, SegmentFlags.START],
                    [13, 11, SegmentFlags.END],
                ],
            },
        },
        "fabul--1f-to-exit": {
            flags: PathFlags.NONE,
            map: "3026-0",
            segments: {
                "base-0": [
                    [15, 15, SegmentFlags.START],
                    [15, 31, SegmentFlags.END],
                ],
            },
        },
        "fabul--before-gauntlet": {
            flags: PathFlags.NONE,
            map: "3026-0",
            segments: {
                "base-0": [
                    [15, 29, SegmentFlags.START],
                    [15, 14, SegmentFlags.END],
                ],
            },
        },
        "fabul--right-tower-to-2f": {
            flags: PathFlags.NONE,
            map: "3026-0",
            segments: {
                "base-0": [
                    [17, 8, SegmentFlags.START],
                    [17, 11, SegmentFlags.NONE],
                    [15, 11, SegmentFlags.NONE],
                    [15, 10, SegmentFlags.END],
                ],
            },
        },
        "fabul-1f--after-dragoon": {
            flags: PathFlags.STEPS,
            map: "3047-0",
            segments: {
                "base-0": [
                    [11, 4, SegmentFlags.START],
                    [11, 11, SegmentFlags.NONE],
                    [6, 11, SegmentFlags.NONE],
                    [6, 10, SegmentFlags.NONE],
                    [5, 10, SegmentFlags.NONE],
                    [5, 7, SegmentFlags.END],
                ],
                "optional-1-0": [
                    [6, 11, SegmentFlags.NONE],
                    [5, 11, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [5, 10, SegmentFlags.NONE],
                ],
            },
        },
        "fabul-1f--after-right-tower": {
            flags: PathFlags.STEPS,
            map: "3047-0",
            segments: {
                "base-0": [
                    [11, 4, SegmentFlags.START],
                    [11, 15, SegmentFlags.END],
                ],
            },
        },
        "fabul-1f--before-gauntlet": {
            flags: PathFlags.STEPS,
            map: "3047-0",
            segments: {
                "base-0": [
                    [11, 11, SegmentFlags.START],
                    [11, 3, SegmentFlags.END],
                ],
            },
        },
        "fabul-2f--after-dragoon": {
            flags: PathFlags.STEPS,
            map: "3048-0",
            segments: {
                "base-0": [
                    [4, 1, SegmentFlags.START],
                    [4, 9, SegmentFlags.END],
                ],
            },
        },
        "fabul-2f--after-right-tower": {
            flags: PathFlags.STEPS,
            map: "3048-0",
            segments: {
                "base-0": [
                    [4, 13, SegmentFlags.START],
                    [6, 13, SegmentFlags.NONE],
                    [6, 6, SegmentFlags.NONE],
                    [4, 6, SegmentFlags.NONE],
                    [4, 9, SegmentFlags.END],
                ],
            },
        },
        "fabul-2f--before-gauntlet": {
            flags: PathFlags.STEPS,
            map: "3048-0",
            segments: {
                "base-0": [
                    [4, 8, SegmentFlags.START],
                    [4, 0, SegmentFlags.END],
                ],
            },
        },
        "fabul-crystal-room": {
            flags: PathFlags.NONE,
            map: "304A-0",
            segments: {
                "base-0": [
                    [12, 15, SegmentFlags.START],
                    [11, 15, SegmentFlags.NONE],
                    [11, 26, SegmentFlags.END],
                ],
            },
        },
        "fabul-inn": {
            flags: PathFlags.STEPS,
            map: "304C-0",
            segments: {
                "base-0": [
                    [20, 7, SegmentFlags.START],
                    [20, 5, SegmentFlags.NONE],
                    [17, 5, SegmentFlags.END],
                ],
                "optional-2-0": [
                    [20, 7, SegmentFlags.NONE],
                    [18, 7, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [18, 5, SegmentFlags.NONE],
                ],
            },
        },
        "fabul-kings-room--after-dragoon": {
            flags: PathFlags.STEPS,
            map: "3049-0",
            segments: {
                "base-0": [
                    [4, 3, SegmentFlags.START],
                    [4, 7, SegmentFlags.NONE],
                    [8, 7, SegmentFlags.NONE],
                    [8, 14, SegmentFlags.END],
                ],
                "optional-1-0": [
                    [4, 7, SegmentFlags.NONE],
                    [4, 8, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [8, 8, SegmentFlags.NONE],
                ],
                "optional-6-0": [
                    [4, 7, SegmentFlags.NONE],
                    [4, 11, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [8, 11, SegmentFlags.NONE],
                ],
            },
        },
        "fabul-kings-room--before-gauntlet": {
            flags: PathFlags.STEPS,
            map: "3049-0",
            segments: {
                "base-0": [
                    [8, 13, SegmentFlags.START],
                    [8, 12, SegmentFlags.END],
                ],
            },
        },
        "fabul-right-tower-1f": {
            flags: PathFlags.STEPS,
            map: "304D-0",
            segments: {
                "base-0": [
                    [1, 4, SegmentFlags.START],
                    [1, 6, SegmentFlags.NONE],
                    [2, 6, SegmentFlags.NONE],
                    [2, 10, SegmentFlags.END],
                ],
            },
        },
        "fabul-right-tower-2f": {
            flags: PathFlags.STEPS,
            map: "304E-0",
            segments: {
                "base-0": [
                    [1, 4, SegmentFlags.START],
                    [1, 6, SegmentFlags.END],
                ],
            },
        },
        "fabul-right-tower-3f": {
            flags: PathFlags.STEPS,
            map: "304F-0",
            segments: {
                "base-0": [
                    [5, 4, SegmentFlags.START],
                    [5, 5, SegmentFlags.NONE],
                    [1, 5, SegmentFlags.NONE],
                    [1, 6, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [1, 5, SegmentFlags.NONE],
                    [1, 4, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "optional-1-0": [
                    [5, 4, SegmentFlags.NONE],
                    [3, 4, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [3, 5, SegmentFlags.NONE],
                ],
            },
        },
        "kaipo--entrance-to-house": {
            flags: PathFlags.NONE,
            map: "3002-0",
            segments: {
                "base-0": [
                    [15, 30, SegmentFlags.START],
                    [15, 25, SegmentFlags.NONE],
                    [20, 25, SegmentFlags.NONE],
                    [20, 19, SegmentFlags.NONE],
                    [23, 19, SegmentFlags.NONE],
                    [23, 15, SegmentFlags.NONE],
                    [28, 15, SegmentFlags.NONE],
                    [28, 13, SegmentFlags.END],
                ],
            },
        },
        "kaipo--entrance-to-trigger": {
            flags: PathFlags.NONE,
            map: "3002-0",
            segments: {
                "base-0": [
                    [15, 30, SegmentFlags.START],
                    [15, 26, SegmentFlags.END],
                ],
            },
        },
        "kaipo--house-to-left-exit": {
            flags: PathFlags.NONE,
            map: "3002-0",
            segments: {
                "base-0": [
                    [28, 14, SegmentFlags.START],
                    [28, 15, SegmentFlags.NONE],
                    [23, 15, SegmentFlags.NONE],
                    [23, 19, SegmentFlags.NONE],
                    [20, 19, SegmentFlags.NONE],
                    [20, 26, SegmentFlags.NONE],
                    [15, 26, SegmentFlags.NONE],
                    [15, 30, SegmentFlags.NONE],
                    [14, 30, SegmentFlags.NONE],
                    [14, 31, SegmentFlags.END],
                ],
            },
        },
        "kaipo--house-to-right-exit": {
            flags: PathFlags.NONE,
            map: "3002-0",
            segments: {
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
                    [16, 31, SegmentFlags.END],
                ],
            },
        },
        "kaipo--inn-to-house": {
            flags: PathFlags.NONE,
            map: "3002-0",
            segments: {
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
                    [28, 13, SegmentFlags.END],
                ],
            },
        },
        "kaipo-house--finding-rosa": {
            flags: PathFlags.NONE,
            map: "3012-0",
            segments: {
                "base-0": [
                    [4, 15, SegmentFlags.START],
                    [4, 6, SegmentFlags.END],
                ],
                "base-1": [
                    [6, 3, SegmentFlags.START],
                    [6, 5, SegmentFlags.NONE],
                    [4, 5, SegmentFlags.NONE],
                    [4, 18, SegmentFlags.END],
                ],
            },
        },
        "kaipo-house--healing-rosa": {
            flags: PathFlags.NONE,
            map: "3012-0",
            segments: {
                "base-0": [
                    [4, 15, SegmentFlags.START],
                    [4, 5, SegmentFlags.NONE],
                    [6, 5, SegmentFlags.NONE],
                    [6, 3, SegmentFlags.END],
                ],
                "base-1": [
                    [4, 5, SegmentFlags.START],
                    [4, 18, SegmentFlags.END],
                ],
            },
        },
        "kaipo-inn": {
            flags: PathFlags.NONE,
            map: "3010-0",
            segments: {
                "base-0": [
                    [14, 12, SegmentFlags.START],
                    [18, 12, SegmentFlags.NONE],
                    [18, 14, SegmentFlags.NONE],
                    [20, 14, SegmentFlags.NONE],
                    [20, 17, SegmentFlags.END],
                ],
            },
        },
        "mt-hobs-east": {
            flags: PathFlags.STEPS,
            map: "3080-0",
            segments: {
                "base-0": [
                    [7, 10, SegmentFlags.START],
                    [20, 10, SegmentFlags.NONE],
                    [20, 14, SegmentFlags.NONE],
                    [14, 14, SegmentFlags.NONE],
                    [14, 15, SegmentFlags.NONE],
                    [11, 15, SegmentFlags.NONE],
                    [11, 17, SegmentFlags.NONE],
                    [10, 17, SegmentFlags.NONE],
                    [10, 21, SegmentFlags.NONE],
                    [18, 21, SegmentFlags.NONE],
                    [18, 27, SegmentFlags.NONE],
                    [21, 27, SegmentFlags.NONE],
                    [21, 31, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [10, 10, SegmentFlags.NONE],
                    [11, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [21, 27, SegmentFlags.NONE],
                    [22, 27, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "mt-hobs-summit": {
            flags: PathFlags.STEPS,
            map: "307F-0",
            segments: {
                "base-0": [
                    [8, 22, SegmentFlags.START],
                    [8, 23, SegmentFlags.NONE],
                    [16, 23, SegmentFlags.NONE],
                    [16, 20, SegmentFlags.NONE],
                    [20, 20, SegmentFlags.END],
                ],
                "base-1": [
                    [21, 14, SegmentFlags.START],
                    [19, 14, SegmentFlags.NONE],
                    [19, 9, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [16, 23, SegmentFlags.NONE],
                    [17, 23, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-1": [
                    [21, 14, SegmentFlags.NONE],
                    [22, 14, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "mt-hobs-west": {
            flags: PathFlags.STEPS,
            map: "307E-0",
            segments: {
                "base-0": [
                    [15, 28, SegmentFlags.START],
                    [15, 26, SegmentFlags.END],
                ],
                "base-1": [
                    [15, 25, SegmentFlags.START],
                    [15, 17, SegmentFlags.NONE],
                    [8, 17, SegmentFlags.NONE],
                    [8, 11, SegmentFlags.NONE],
                    [22, 11, SegmentFlags.NONE],
                    [22, 7, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [15, 25, SegmentFlags.NONE],
                    [15, 26, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [22, 8, SegmentFlags.NONE],
                    [23, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "mt-ordeals": {
            flags: PathFlags.STEPS,
            map: "3084-0",
            segments: {
                "base-0": [
                    [20, 31, SegmentFlags.START],
                    [20, 29, SegmentFlags.NONE],
                    [12, 29, SegmentFlags.NONE],
                    [12, 28, SegmentFlags.NONE],
                    [11, 28, SegmentFlags.END],
                ],
                "base-1": [
                    [9, 26, SegmentFlags.START],
                    [9, 24, SegmentFlags.NONE],
                    [11, 24, SegmentFlags.NONE],
                    [11, 23, SegmentFlags.NONE],
                    [17, 23, SegmentFlags.NONE],
                    [17, 18, SegmentFlags.NONE],
                    [14, 18, SegmentFlags.NONE],
                    [14, 12, SegmentFlags.NONE],
                    [19, 12, SegmentFlags.NONE],
                    [19, 9, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [20, 29, SegmentFlags.NONE],
                    [21, 29, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "mt-ordeals-3rd-station": {
            flags: PathFlags.STEPS,
            map: "3085-0",
            segments: {
                "base-0": [
                    [10, 24, SegmentFlags.START],
                    [8, 24, SegmentFlags.NONE],
                    [8, 17, SegmentFlags.NONE],
                    [18, 17, SegmentFlags.NONE],
                    [18, 12, SegmentFlags.END],
                ],
                "base-1": [
                    [18, 10, SegmentFlags.START],
                    [18, 8, SegmentFlags.NONE],
                    [21, 8, SegmentFlags.NONE],
                    [21, 7, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [18, 16, SegmentFlags.NONE],
                    [19, 16, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-1": [
                    [21, 8, SegmentFlags.NONE],
                    [22, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "mt-ordeals-7th-station": {
            flags: PathFlags.STEPS,
            map: "3086-0",
            segments: {
                "base-0": [
                    [23, 23, SegmentFlags.START],
                    [23, 25, SegmentFlags.NONE],
                    [19, 25, SegmentFlags.NONE],
                    [19, 23, SegmentFlags.NONE],
                    [18, 23, SegmentFlags.NONE],
                    [18, 17, SegmentFlags.NONE],
                    [24, 17, SegmentFlags.NONE],
                    [24, 8, SegmentFlags.NONE],
                    [11, 8, SegmentFlags.NONE],
                    [11, 7, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [18, 8, SegmentFlags.NONE],
                    [19, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [24, 8, SegmentFlags.NONE],
                    [25, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "mt-ordeals-summit": {
            flags: PathFlags.STEPS,
            map: "3087-0",
            segments: {
                "base-0": [
                    [15, 22, SegmentFlags.START],
                    [15, 23, SegmentFlags.NONE],
                    [18, 23, SegmentFlags.NONE],
                    [18, 16, SegmentFlags.NONE],
                    [17, 16, SegmentFlags.NONE],
                    [16, 16, SegmentFlags.NONE],
                    [16, 15, SegmentFlags.NONE],
                    [16, 10, SegmentFlags.NONE],
                    [14, 10, SegmentFlags.END],
                ],
                "base-1": [
                    [14, 10, SegmentFlags.NONE],
                    [9, 10, SegmentFlags.END],
                    [8, 10, SegmentFlags.NONE],
                    [8, 11, SegmentFlags.NONE],
                    [6, 11, SegmentFlags.NONE],
                    [6, 10, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [16, 10, SegmentFlags.NONE],
                    [17, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "optional-1-0": [
                    [17, 16, SegmentFlags.NONE],
                    [17, 15, SegmentFlags.ANNOTATE],
                    [16, 15, SegmentFlags.NONE],
                ],
            },
        },
        "mysidia--armor-shop-to-exit": {
            flags: PathFlags.NONE,
            map: "3003-0",
            segments: {
                "base-0": [
                    [9, 23, SegmentFlags.START],
                    [9, 24, SegmentFlags.NONE],
                    [8, 24, SegmentFlags.NONE],
                    [8, 26, SegmentFlags.NONE],
                    [16, 26, SegmentFlags.NONE],
                    [16, 31, SegmentFlags.END],
                ],
            },
        },
        "mysidia--entrance-to-item-shop": {
            flags: PathFlags.NONE,
            map: "3003-0",
            segments: {
                "base-0": [
                    [16, 31, SegmentFlags.START],
                    [16, 27, SegmentFlags.NONE],
                    [27, 27, SegmentFlags.NONE],
                    [27, 26, SegmentFlags.END],
                ],
            },
        },
        "mysidia--house-of-wishes-to-armor-shop": {
            flags: PathFlags.NONE,
            map: "3003-0",
            segments: {
                "base-0": [
                    [16, 9, SegmentFlags.START],
                    [16, 26, SegmentFlags.NONE],
                    [8, 26, SegmentFlags.NONE],
                    [8, 24, SegmentFlags.NONE],
                    [9, 24, SegmentFlags.NONE],
                    [9, 23, SegmentFlags.END],
                ],
            },
        },
        "mysidia--item-shop-to-house-of-wishes": {
            flags: PathFlags.NONE,
            map: "3003-0",
            segments: {
                "base-0": [
                    [27, 26, SegmentFlags.START],
                    [27, 27, SegmentFlags.NONE],
                    [16, 27, SegmentFlags.NONE],
                    [16, 8, SegmentFlags.END],
                ],
            },
        },
        "mysidia-armor-shop": {
            flags: PathFlags.NONE,
            map: "30E6-0",
            segments: {
                "base-0": [
                    [4, 7, SegmentFlags.START],
                    [4, 5, SegmentFlags.RETURN],
                    [4, 10, SegmentFlags.END],
                ],
            },
        },
        "mysidia-house-of-wishes": {
            flags: PathFlags.NONE,
            map: "3016-0",
            segments: {
                "base-0": [
                    [14, 9, SegmentFlags.START],
                    [14, 6, SegmentFlags.END],
                ],
                "base-1": [
                    [14, 7, SegmentFlags.START],
                    [14, 12, SegmentFlags.END],
                ],
            },
        },
        "mysidia-item-shop": {
            flags: PathFlags.NONE,
            map: "30E7-0",
            segments: {
                "base-0": [
                    [5, 7, SegmentFlags.START],
                    [5, 5, SegmentFlags.RETURN],
                    [5, 10, SegmentFlags.END],
                ],
            },
        },
        "overworld-damcyan--antlion-to-kaipo": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [107, 41, 32, 32],
            segments: {
                "base-0": [
                    [136, 57, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [132, 57, SegmentFlags.VEHICLE],
                    [132, 49, SegmentFlags.VEHICLE],
                    [131, 49, SegmentFlags.VEHICLE],
                    [131, 46, SegmentFlags.VEHICLE],
                    [126, 46, SegmentFlags.VEHICLE],
                    [126, 49, SegmentFlags.VEHICLE],
                    [122, 49, SegmentFlags.VEHICLE],
                    [122, 62, SegmentFlags.VEHICLE],
                    [115, 62, SegmentFlags.VEHICLE],
                    [115, 68, SegmentFlags.VEHICLE],
                    [107, 68, SegmentFlags.VEHICLE | SegmentFlags.END],
                    [106, 68, SegmentFlags.VEHICLE],
                ],
                "extra-2-0": [
                    [136, 57, SegmentFlags.NONE],
                    [137, 57, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-damcyan--damcyan-to-antlion": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [110, 35, 32, 32],
            segments: {
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
                    [136, 56, SegmentFlags.START | SegmentFlags.END],
                ],
                "extra-2-0": [
                    [136, 57, SegmentFlags.NONE],
                    [137, 57, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-damcyan--kaipo-to-mt-hobs-a": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [98, 44, 32, 32],
            segments: {
                "base-0": [
                    [99, 76, SegmentFlags.VEHICLE],
                    [99, 74, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [99, 68, SegmentFlags.VEHICLE],
                    [115, 68, SegmentFlags.VEHICLE],
                    [115, 62, SegmentFlags.VEHICLE],
                    [124, 62, SegmentFlags.VEHICLE],
                    [124, 48, SegmentFlags.VEHICLE],
                    [127, 48, SegmentFlags.VEHICLE],
                    [127, 46, SegmentFlags.VEHICLE],
                    [129, 46, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [130, 46, SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-damcyan--kaipo-to-mt-hobs-b": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [124, 31, 32, 32],
            segments: {
                "base-0": [
                    [115, 62, SegmentFlags.VEHICLE],
                    [124, 62, SegmentFlags.VEHICLE],
                    [124, 48, SegmentFlags.VEHICLE],
                    [127, 48, SegmentFlags.VEHICLE],
                    [127, 46, SegmentFlags.VEHICLE],
                    [129, 46, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [131, 46, SegmentFlags.VEHICLE],
                    [131, 49, SegmentFlags.VEHICLE],
                    [143, 49, SegmentFlags.VEHICLE],
                    [143, 48, SegmentFlags.VEHICLE],
                    [150, 48, SegmentFlags.VEHICLE],
                    [150, 49, SegmentFlags.VEHICLE],
                    [151, 49, SegmentFlags.VEHICLE],
                    [152, 49, SegmentFlags.START | SegmentFlags.END],
                ],
                "extra-2-0": [
                    [151, 49, SegmentFlags.NONE],
                    [151, 50, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-damcyan--waterfalls-to-damcyan": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [106, 47, 32, 32],
            segments: {
                "base-0": [
                    [125, 67, SegmentFlags.START],
                    [123, 67, SegmentFlags.NONE],
                    [123, 68, SegmentFlags.NONE],
                    [120, 68, SegmentFlags.NONE],
                    [120, 64, SegmentFlags.NONE],
                    [119, 64, SegmentFlags.NONE],
                    [119, 58, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [125, 67, SegmentFlags.NONE],
                    [126, 67, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-1": [
                    [119, 59, SegmentFlags.NONE],
                    [120, 59, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-fabul--fabul-to-ship": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [202, 41, 32, 32],
            segments: {
                "base-0": [
                    [215, 59, SegmentFlags.START],
                    [216, 59, SegmentFlags.NONE],
                    [216, 58, SegmentFlags.NONE],
                    [220, 58, SegmentFlags.NONE],
                    [220, 56, SegmentFlags.NONE],
                    [221, 56, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [216, 58, SegmentFlags.NONE],
                    [217, 58, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [220, 58, SegmentFlags.NONE],
                    [221, 58, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-fabul--mt-hobs-to-fabul-a": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [159, 28, 32, 32],
            segments: {
                "base-0": [
                    [160, 50, SegmentFlags.START],
                    [162, 50, SegmentFlags.NONE],
                    [162, 49, SegmentFlags.NONE],
                    [171, 49, SegmentFlags.NONE],
                    [171, 38, SegmentFlags.NONE],
                    [185, 38, SegmentFlags.NONE],
                    [185, 45, SegmentFlags.NONE],
                    [190, 45, SegmentFlags.END],
                    [191, 45, SegmentFlags.NONE],
                ],
            },
        },
        "overworld-fabul--mt-hobs-to-fabul-b": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [186, 35, 32, 32],
            segments: {
                "base-0": [
                    [185, 45, SegmentFlags.NONE],
                    [190, 45, SegmentFlags.END],
                    [200, 45, SegmentFlags.NONE],
                    [200, 48, SegmentFlags.NONE],
                    [207, 48, SegmentFlags.NONE],
                    [207, 58, SegmentFlags.NONE],
                    [214, 58, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [212, 58, SegmentFlags.NONE],
                    [213, 58, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
                "extra-2-0": [
                    [209, 58, SegmentFlags.NONE],
                    [209, 59, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-kaipo--antlion-to-kaipo-a": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [92, 67, 32, 32],
            segments: {
                "base-0": [
                    [115, 66, SegmentFlags.VEHICLE],
                    [115, 68, SegmentFlags.VEHICLE],
                    [107, 68, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [99, 68, SegmentFlags.VEHICLE],
                    [99, 77, SegmentFlags.VEHICLE],
                    [98, 77, SegmentFlags.VEHICLE],
                    [98, 80, SegmentFlags.VEHICLE],
                    [100, 80, SegmentFlags.VEHICLE],
                    [100, 83, SegmentFlags.VEHICLE],
                    [118, 83, SegmentFlags.VEHICLE],
                    [118, 98, SegmentFlags.VEHICLE | SegmentFlags.END],
                    [118, 99, SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-kaipo--antlion-to-kaipo-b": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [105, 85, 32, 32],
            segments: {
                "base-0": [
                    [118, 83, SegmentFlags.VEHICLE],
                    [118, 98, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [118, 104, SegmentFlags.VEHICLE],
                    [124, 104, SegmentFlags.VEHICLE],
                    [125, 104, SegmentFlags.START | SegmentFlags.END],
                ],
                "extra-2-0": [
                    [124, 104, SegmentFlags.NONE],
                    [124, 105, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-kaipo--kaipo-to-mt-hobs": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [95, 74, 32, 32],
            segments: {
                "base-0": [
                    [124, 104, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [107, 104, SegmentFlags.VEHICLE],
                    [107, 83, SegmentFlags.VEHICLE],
                    [99, 83, SegmentFlags.VEHICLE],
                    [99, 79, SegmentFlags.VEHICLE],
                    [98, 79, SegmentFlags.VEHICLE],
                    [98, 76, SegmentFlags.VEHICLE],
                    [99, 76, SegmentFlags.VEHICLE],
                    [99, 74, SegmentFlags.VEHICLE | SegmentFlags.END],
                    [99, 73, SegmentFlags.VEHICLE],
                ],
                "extra-2-0": [
                    [124, 104, SegmentFlags.NONE],
                    [124, 105, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-kaipo--kaipo-to-watery-pass": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [116, 77, 32, 32],
            segments: {
                "base-0": [
                    [126, 104, SegmentFlags.START],
                    [127, 104, SegmentFlags.NONE],
                    [127, 90, SegmentFlags.NONE],
                    [136, 90, SegmentFlags.NONE],
                    [136, 84, SegmentFlags.NONE],
                    [138, 84, SegmentFlags.NONE],
                    [138, 83, SegmentFlags.END],
                ],
            },
        },
        "overworld-kaipo--mist-to-kaipo": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [98, 95, 32, 32],
            segments: {
                "base-0": [
                    [103, 119, SegmentFlags.START],
                    [103, 117, SegmentFlags.NONE],
                    [104, 117, SegmentFlags.NONE],
                    [104, 109, SegmentFlags.NONE],
                    [125, 109, SegmentFlags.NONE],
                    [125, 104, SegmentFlags.END],
                ],
            },
        },
        "overworld-kaipo--watery-pass-to-waterfalls": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [120, 59, 32, 32],
            segments: {
                "base-0": [
                    [138, 78, SegmentFlags.START],
                    [135, 78, SegmentFlags.NONE],
                    [135, 77, SegmentFlags.NONE],
                    [134, 77, SegmentFlags.NONE],
                    [134, 72, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [134, 73, SegmentFlags.NONE],
                    [135, 73, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-mist--after-mist-clip": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [81, 103, 32, 32],
            segments: {
                "base-0": [
                    [96, 119, SegmentFlags.START],
                    [98, 119, SegmentFlags.RETURN],
                    [97, 119, SegmentFlags.END],
                ],
            },
        },
        "overworld-mt-ordeals--mysidia-to-mt-ordeals-a": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [159, 185, 32, 32],
            segments: {
                "base-0": [
                    [158, 205, SegmentFlags.NONE],
                    [160, 205, SegmentFlags.END],
                    [175, 205, SegmentFlags.NONE],
                    [175, 211, SegmentFlags.NONE],
                    [182, 211, SegmentFlags.NONE],
                    [182, 192, SegmentFlags.NONE],
                    [190, 192, SegmentFlags.END],
                    [191, 192, SegmentFlags.NONE],
                ],
                "boundary-0": [
                    [160, 185, SegmentFlags.NONE],
                    [160, 216, SegmentFlags.NONE],
                ],
            },
        },
        "overworld-mt-ordeals--mysidia-to-mt-ordeals-b": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [189, 180, 32, 32],
            segments: {
                "base-0": [
                    [188, 192, SegmentFlags.NONE],
                    [190, 192, SegmentFlags.END],
                    [211, 192, SegmentFlags.NONE],
                    [211, 201, SegmentFlags.NONE],
                    [218, 201, SegmentFlags.NONE],
                    [218, 199, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [218, 200, SegmentFlags.NONE],
                    [219, 200, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-mysidia--after-mysidia": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [141, 185, 32, 32],
            segments: {
                "base-0": [
                    [154, 200, SegmentFlags.START],
                    [157, 200, SegmentFlags.NONE],
                    [157, 205, SegmentFlags.NONE],
                    [160, 205, SegmentFlags.END],
                    [173, 205, SegmentFlags.NONE],
                ],
                "boundary-0": [
                    [160, 185, SegmentFlags.NONE],
                    [160, 216, SegmentFlags.NONE],
                ],
                "extra-2-0": [
                    [157, 200, SegmentFlags.NONE],
                    [157, 199, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-mysidia--before-mysidia": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [133, 183, 32, 32],
            segments: {
                "base-0": [
                    [145, 200, SegmentFlags.START],
                    [145, 199, SegmentFlags.NONE],
                    [154, 199, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [153, 199, SegmentFlags.NONE],
                    [153, 198, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "village-mist--entrance-to-weapon": {
            flags: PathFlags.NONE,
            map: "3001-0",
            segments: {
                "base-0": [
                    [28, 16, SegmentFlags.START],
                    [19, 16, SegmentFlags.NONE],
                    [19, 24, SegmentFlags.NONE],
                    [18, 24, SegmentFlags.NONE],
                    [18, 26, SegmentFlags.NONE],
                    [14, 26, SegmentFlags.NONE],
                    [14, 25, SegmentFlags.END],
                ],
            },
        },
        "village-mist--house-to-trigger": {
            flags: PathFlags.NONE,
            map: "3001-0",
            segments: {
                "base-0": [
                    [11, 7, SegmentFlags.START],
                    [11, 10, SegmentFlags.NONE],
                    [12, 10, SegmentFlags.NONE],
                    [12, 16, SegmentFlags.NONE],
                    [8, 16, SegmentFlags.END],
                ],
            },
        },
        "village-mist--weapon-to-house": {
            flags: PathFlags.NONE,
            map: "3001-0",
            segments: {
                "base-0": [
                    [14, 25, SegmentFlags.START],
                    [14, 26, SegmentFlags.NONE],
                    [12, 26, SegmentFlags.NONE],
                    [12, 8, SegmentFlags.NONE],
                    [11, 8, SegmentFlags.NONE],
                    [11, 7, SegmentFlags.END],
                ],
            },
        },
        "village-mist-house": {
            flags: PathFlags.NONE,
            map: "300F-0",
            segments: {
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
                    [4, 16, SegmentFlags.END],
                ],
            },
        },
        "village-mist-weapon": {
            flags: PathFlags.NONE,
            map: "30E1-0",
            segments: {
                "base-0": [
                    [4, 7, SegmentFlags.START],
                    [4, 5, SegmentFlags.RETURN],
                    [4, 10, SegmentFlags.END],
                ],
            },
        },
        "waterfalls-b1f": {
            flags: PathFlags.STEPS,
            map: "3074-0",
            segments: {
                "base-0": [
                    [16, 9, SegmentFlags.START],
                    [16, 11, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [16, 9, SegmentFlags.NONE],
                    [17, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "waterfalls-b2f": {
            flags: PathFlags.STEPS,
            map: "3075-0",
            segments: {
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
                    [10, 11, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [10, 12, SegmentFlags.NONE],
                    [11, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "waterfalls-lake--after-octomamm": {
            flags: PathFlags.STEPS | PathFlags.SINGLE,
            map: "3076-1",
            segments: {
                "base-0": [
                    [16, 12, SegmentFlags.START],
                    [16, 10, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [16, 12, SegmentFlags.NONE],
                    [17, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "waterfalls-lake--before-octomamm": {
            flags: PathFlags.STEPS,
            map: "3076-0",
            segments: {
                "base-0": [
                    [4, 23, SegmentFlags.START],
                    [13, 23, SegmentFlags.NONE],
                    [13, 22, SegmentFlags.NONE],
                    [21, 22, SegmentFlags.NONE],
                    [21, 17, SegmentFlags.NONE],
                    [19, 17, SegmentFlags.NONE],
                    [19, 20, SegmentFlags.NONE],
                    [16, 20, SegmentFlags.NONE],
                    [16, 12, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [13, 22, SegmentFlags.NONE],
                    [13, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "watery-pass-north-b1f": {
            flags: PathFlags.STEPS,
            map: "3073-0",
            segments: {
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
                    [24, 8, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [24, 10, SegmentFlags.NONE],
                    [24, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [24, 11, SegmentFlags.NONE],
                    [25, 11, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "watery-pass-north-b2f": {
            flags: PathFlags.STEPS,
            map: "3072-0",
            segments: {
                "base-0": [
                    [13, 26, SegmentFlags.START],
                    [13, 17, SegmentFlags.NONE],
                    [11, 17, SegmentFlags.NONE],
                    [11, 14, SegmentFlags.NONE],
                    [7, 14, SegmentFlags.NONE],
                    [7, 10, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [7, 12, SegmentFlags.NONE],
                    [8, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "watery-pass-south-b1f": {
            flags: PathFlags.STEPS,
            map: "306F-0",
            segments: {
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
                    [2, 2, SegmentFlags.END],
                ],
            },
        },
        "watery-pass-south-b2f--after-save-room": {
            flags: PathFlags.STEPS,
            map: "3070-0",
            segments: {
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
                    [16, 7, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [16, 8, SegmentFlags.NONE],
                    [17, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "watery-pass-south-b2f--before-save-room": {
            flags: PathFlags.STEPS,
            map: "3070-0",
            segments: {
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
                    [2, 17, SegmentFlags.END],
                ],
            },
        },
        "watery-pass-south-b2f-save-room": {
            flags: PathFlags.STEPS,
            map: "3054-0",
            segments: {
                "base-0": [
                    [4, 11, SegmentFlags.START],
                    [4, 10, SegmentFlags.END],
                ],
                "base-1": [
                    [4, 7, SegmentFlags.START],
                    [4, 2, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [4, 4, SegmentFlags.NONE],
                    [5, 4, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "watery-pass-south-b3f": {
            flags: PathFlags.STEPS,
            map: "3071-0",
            segments: {
                "base-0": [
                    [23, 9, SegmentFlags.START],
                    [22, 9, SegmentFlags.NONE],
                    [22, 13, SegmentFlags.NONE],
                    [15, 13, SegmentFlags.NONE],
                    [15, 18, SegmentFlags.NONE],
                    [7, 18, SegmentFlags.NONE],
                    [7, 17, SegmentFlags.NONE],
                    [6, 17, SegmentFlags.NONE],
                    [6, 9, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [6, 10, SegmentFlags.NONE],
                    [7, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
    };

    data.variables = {
        C307800: {
            descriptions: {
                1: "Enter the Charm Room in Antlion B2F [before Antlion].",
            },
            paths: {
                1: {
                    "antlion-b2f--before-antlion--before-charm-room": {
                        index: "0",
                        instruction: "Enter the Charm Room",
                        location: "Antlion B2F [before Antlion]",
                    },
                },
            },
            type: VariableFlags.CHOICE,
        },
        C307801: {
            descriptions: {
                1: "Enter the Charm Room in Antlion B2F [after Antlion].",
            },
            paths: {
                1: {
                    "antlion-b2f--after-antlion--before-charm-room": {
                        index: "0",
                        instruction: "Enter the Charm Room",
                        location: "Antlion B2F [after Antlion]",
                    },
                },
            },
            type: VariableFlags.CHOICE,
        },
        E000200: {
            paths: {
                "overworld-kaipo--watery-pass-to-waterfalls": {
                    disambiguation: "",
                    index: "0",
                    location: "Overworld (Kaipo) [before Waterfalls]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E000201: {
            paths: {
                "overworld-damcyan--waterfalls-to-damcyan": {
                    disambiguation: " immediately after exiting the cave",
                    index: "0",
                    location: "Overworld (Kaipo) [after Octomamm]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E000202: {
            paths: {
                "overworld-kaipo--antlion-to-kaipo-b": {
                    disambiguation: "",
                    index: "0",
                    location: "Overworld (Kaipo) [after Antlion]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E000203: {
            paths: {
                "overworld-kaipo--kaipo-to-mt-hobs": {
                    disambiguation: "",
                    index: "0",
                    location: "Overworld (Kaipo) [after WaterHag]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E000300: {
            paths: {
                "overworld-damcyan--waterfalls-to-damcyan": {
                    disambiguation: " just before entering the castle",
                    index: "1",
                    location: "Overworld (Damcyan) [before Damcyan]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E000301: {
            paths: {
                "overworld-damcyan--damcyan-to-antlion": {
                    disambiguation: " after parking the hovercraft, just before entering the cave",
                    index: "0",
                    location: "Overworld (Damcyan) [before Antlion]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E000302: {
            paths: {
                "overworld-damcyan--antlion-to-kaipo": {
                    disambiguation: " after exiting the cave before boarding the hovercraft",
                    index: "0",
                    location: "Overworld (Damcyan) [after Antlion]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E000304: {
            paths: {
                "overworld-damcyan--kaipo-to-mt-hobs-b": {
                    disambiguation: " after parking the hovercraft, just before entering Mt.Hobs",
                    index: "0",
                    location: "Overworld (Damcyan) [after WaterHag]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E000400: {
            paths: {
                "overworld-fabul--mt-hobs-to-fabul-b": {
                    disambiguation: "",
                    index: "0",
                    location: "Overworld (Fabul) [before Fabul]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E000401: {
            paths: {
                "overworld-fabul--fabul-to-ship": {
                    disambiguation: "",
                    index: "0",
                    location: "Overworld (Fabul) [after Fabul]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E000500: {
            paths: {
                "overworld-mysidia--before-mysidia": {
                    disambiguation: "",
                    index: "0",
                    location: "Overworld (Mysidia) [before Mysidia]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E000501: {
            paths: {
                "overworld-mysidia--after-mysidia": {
                    disambiguation: " before heading more than five tiles east, because the encounter rate goes up",
                    index: "0",
                    location: "Overworld (Mysidia) [after Mysidia]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E000600: {
            paths: {
                "overworld-mt-ordeals--mysidia-to-mt-ordeals-b": {
                    disambiguation: "",
                    index: "0",
                    location: "Overworld (Mt.Ordeals)",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E302500: {
            description: "Damcyan",
            paths: {
                "damcyan-1f": {
                    disambiguation: "",
                    index: "0",
                    location: "Damcyan 1F",
                },
                "damcyan-2f": {
                    disambiguation: "",
                    index: "0",
                    location: "Damcyan 2F",
                },
            },
            routes: {
                1: {
                    "damcyan-1f": 0,
                    "damcyan-2f": 1,
                },
            },
            type: VariableFlags.EXTRA,
        },
        E302600: {
            description: "Fabul",
            paths: {
                "fabul-1f--after-dragoon": {
                    disambiguation: "",
                    index: "0",
                    location: "Fabul 1F [after Dragoon]",
                },
                "fabul-inn": {
                    disambiguation: "",
                    index: "0",
                    location: "Fabul Inn",
                },
                "fabul-kings-room--after-dragoon": {
                    disambiguation: "",
                    index: "0",
                    location: "Fabul King's Room [after Dragoon]",
                },
                "fabul-right-tower-3f": {
                    disambiguation: " after talking to the King",
                    index: "0",
                    location: "Fabul Right Tower 3F",
                },
            },
            routes: {
                1: {
                    "fabul-1f--after-dragoon": 1,
                    "fabul-inn": 0,
                    "fabul-kings-room--after-dragoon": 0,
                    "fabul-right-tower-3f": 0,
                },
                2: {
                    "fabul-1f--after-dragoon": 0,
                    "fabul-inn": 2,
                    "fabul-kings-room--after-dragoon": 0,
                    "fabul-right-tower-3f": 0,
                },
                3: {
                    "fabul-1f--after-dragoon": 1,
                    "fabul-inn": 2,
                    "fabul-kings-room--after-dragoon": 0,
                    "fabul-right-tower-3f": 0,
                },
                4: {
                    "fabul-1f--after-dragoon": 1,
                    "fabul-inn": 2,
                    "fabul-kings-room--after-dragoon": 0,
                    "fabul-right-tower-3f": 1,
                },
                5: {
                    "fabul-1f--after-dragoon": 1,
                    "fabul-inn": 2,
                    "fabul-kings-room--after-dragoon": 1,
                    "fabul-right-tower-3f": 1,
                },
                6: {
                    "fabul-1f--after-dragoon": 0,
                    "fabul-inn": 0,
                    "fabul-kings-room--after-dragoon": 6,
                    "fabul-right-tower-3f": 0,
                },
                7: {
                    "fabul-1f--after-dragoon": 1,
                    "fabul-inn": 0,
                    "fabul-kings-room--after-dragoon": 6,
                    "fabul-right-tower-3f": 0,
                },
                8: {
                    "fabul-1f--after-dragoon": 0,
                    "fabul-inn": 2,
                    "fabul-kings-room--after-dragoon": 6,
                    "fabul-right-tower-3f": 0,
                },
                9: {
                    "fabul-1f--after-dragoon": 1,
                    "fabul-inn": 2,
                    "fabul-kings-room--after-dragoon": 6,
                    "fabul-right-tower-3f": 0,
                },
                10: {
                    "fabul-1f--after-dragoon": 1,
                    "fabul-inn": 2,
                    "fabul-kings-room--after-dragoon": 6,
                    "fabul-right-tower-3f": 1,
                },
            },
            type: VariableFlags.EXTRA,
        },
        E305400: {
            paths: {
                "watery-pass-south-b2f-save-room": {
                    disambiguation: " after the scene",
                    index: "0",
                    location: "Watery Pass-South B2F Save Room",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307000: {
            paths: {
                "watery-pass-south-b2f--after-save-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Watery Pass-South B2F [after Save Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307100: {
            paths: {
                "watery-pass-south-b3f": {
                    disambiguation: "",
                    index: "0",
                    location: "Watery Pass-South B3F",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307200: {
            paths: {
                "watery-pass-north-b2f": {
                    disambiguation: "",
                    index: "0",
                    location: "Watery Pass-North B2F",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307300: {
            paths: {
                "watery-pass-north-b1f": {
                    disambiguation: "",
                    index: "0",
                    location: "Watery Pass-North B1F",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307400: {
            paths: {
                "waterfalls-b1f": {
                    disambiguation: "",
                    index: "0",
                    location: "Waterfalls B1F",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307500: {
            paths: {
                "waterfalls-b2f": {
                    disambiguation: "",
                    index: "0",
                    location: "Waterfalls B2F",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307600: {
            paths: {
                "waterfalls-lake--before-octomamm": {
                    disambiguation: "",
                    index: "0",
                    location: "Waterfalls Lake [before Octomamm]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307601: {
            paths: {
                "waterfalls-lake--after-octomamm": {
                    disambiguation: "",
                    index: "0",
                    location: "Waterfalls Lake [after Octomamm]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307700: {
            paths: {
                "antlion-b1f--before-antlion": {
                    disambiguation: "",
                    index: "0",
                    location: "Antlion B1F [before Antlion]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307701: {
            paths: {
                "antlion-b1f--after-antlion": {
                    disambiguation: "",
                    index: "0",
                    location: "Antlion B1F [after Antlion]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307800: {
            paths: {
                "antlion-b2f--before-antlion--before-charm-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Antlion B2F [before Antlion] [before Charm Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307801: {
            paths: {
                "antlion-b2f--before-antlion--direct": {
                    disambiguation: "",
                    index: "0",
                    location: "Antlion B2F [before Antlion]",
                },
                "antlion-b2f--before-antlion--after-charm-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Antlion B2F [before Antlion] [after Charm Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307802: {
            paths: {
                "antlion-b2f--after-antlion--before-charm-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Antlion B2F [after Antlion] [before Charm Room]",
                },
                "antlion-b2f--after-antlion--direct": {
                    disambiguation: "",
                    index: "0",
                    location: "Antlion B2F [after Antlion]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307803: {
            paths: {
                "antlion-b2f--after-antlion--after-charm-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Antlion B2F [after Antlion] [after Charm Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307900: {
            paths: {
                "antlions-nest--before-antlion": {
                    disambiguation: "",
                    index: "0",
                    location: "Antlion's Nest [before Antlion]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307901: {
            paths: {
                "antlions-nest--after-antlion": {
                    disambiguation: "",
                    index: "0",
                    location: "Antlion's Nest [after Antlion]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307B00: { // eslint-disable-line
            paths: {
                "antlion-b2f-charm-room--before-antlion": {
                    disambiguation: "",
                    index: "0",
                    location: "Antlion B2F Charm Room [before Antlion]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307B01: {
            paths: {
                "antlion-b2f-charm-room--after-antlion": {
                    disambiguation: "",
                    index: "0",
                    location: "Antlion B2F Charm Room [after Antlion]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307E00: {
            paths: {
                "mt-hobs-west": {
                    disambiguation: "",
                    index: "0",
                    location: "Mt.Hobs-West",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307F00: {
            paths: {
                "mt-hobs-summit": {
                    disambiguation: " before fighting MomBomb",
                    index: "0",
                    location: "Mt.Hobs Summit",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E307F01: {
            paths: {
                "mt-hobs-summit": {
                    disambiguation: " after fighting MomBomb",
                    index: "1",
                    location: "Mt.Hobs Summit",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E308000: {
            paths: {
                "mt-hobs-east": {
                    disambiguation: "",
                    index: "0",
                    location: "Mt.Hobs-East",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E308400: {
            paths: {
                "mt-ordeals": {
                    disambiguation: "",
                    index: "0",
                    location: "Mt.Ordeals",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E308500: {
            paths: {
                "mt-ordeals-3rd-station": {
                    disambiguation: " before Tellah joins your party",
                    index: "0",
                    location: "Mt.Ordeals-3rd station",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E308501: {
            paths: {
                "mt-ordeals-3rd-station": {
                    disambiguation: " after Tellah joins your party",
                    index: "1",
                    location: "Mt.Ordeals-3rd station",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E308600: {
            paths: {
                "mt-ordeals-7th-station": {
                    disambiguation: "",
                    index: "0",
                    location: "Mt.Ordeals-7th station",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E308700: {
            paths: {
                "mt-ordeals-summit": {
                    disambiguation: " before fighting Milon",
                    index: "0",
                    location: "Mt.Ordeals Summit",
                },
            },
            routes: {
                1: {
                    "mt-ordeals-summit": 1,
                },
            },
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
