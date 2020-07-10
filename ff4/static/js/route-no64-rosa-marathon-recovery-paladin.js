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
        { name: "mt-ordeals-summit--after-paladin" },
        { name: "mt-ordeals-7th-station--after-paladin" },
        { name: "mt-ordeals-3rd-station--after-paladin" },
        { name: "mt-ordeals--after-paladin" },
        { name: "overworld-mt-ordeals--mt-ordeals-to-chocobos-forest" },
        { name: "chocobos-forest-mt-ordeals" },
        { name: "overworld-mt-ordeals--chocobos-forest-to-mysidia" },
        { name: "overworld-mysidia--chocobos-forest-to-mysidia" },
        { name: "mysidia--entrance-to-house-of-wishes" },
        { name: "mysidia-house-of-wishes--after-mt-ordeals" },
        { name: "mysidia--house-of-wishes-to-serpent-road" },
        { name: "mysidia-serpent-road" },
        { name: "town-of-baron-serpent-road" },
        { name: "town-of-baron--serpent-road-to-inn" },
        { name: "town-of-baron-inn" },
        { name: "town-of-baron--inn-to-weapon-armor-shop" },
        { name: "town-of-baron-weapon-armor-shop" },
        { name: "town-of-baron--weapon-armor-shop-to-old-water-way" },
        { name: "old-water-way-antechamber" },
        { name: "old-water-way" },
        { name: "castle-baron-b3f" },
        { name: "castle-baron-b2f" },
        { name: "castle-baron-b1f--before-save-room" },
        { name: "castle-baron-b1f-save-room" },
        { name: "castle-baron-b1f--after-save-room" },
        { name: "castle-baron--b1f-to-left-passage" },
        { name: "castle-baron-left-passage" },
        { name: "castle-baron--left-passage-to-1f" },
        { name: "castle-baron-1f--before-kainazzo" },
        { name: "castle-baron-2f" },
        { name: "castle-baron-3f" },
        { name: "castle-baron-kings-room" },
        { name: "overworld-airship--castle-baron-to-toroian-castle-a" },
        { name: "overworld-airship--castle-baron-to-toroian-castle-b" },
        { name: "overworld-airship--castle-baron-to-toroian-castle-c" },
        { name: "overworld-airship--castle-baron-to-toroian-castle-d" },
        { name: "overworld-toroia--castle-baron-to-toroian-castle" },
        { name: "toroian-castle--entrance-to-1f" },
        { name: "toroian-castle-1f--before-cave-magnes" },
        { name: "toroian-castle--1f-to-infirmary" },
        { name: "toroian-castle-infirmary" },
        { name: "overworld-toroia--toroian-castle-to-chocobos-village" },
        { name: "chocobos-village--before-cave-magnes" },
        { name: "overworld-toroia--chocobos-village-to-cave-magnes-a" },
        { name: "overworld-toroia--chocobos-village-to-cave-magnes-b" },
        { name: "cave-magnes-b1f" },
        { name: "cave-magnes-b2f" },
        { name: "cave-magnes-b3f--direct", condition: { variable: "C308F00", values: [0] } },
        { name: "cave-magnes-b3f--before-save-room", condition: { variable: "C308F00", values: [1] } },
        { name: "cave-magnes-b3f-save-room", condition: { variable: "C308F00", values: [1] } },
        { name: "cave-magnes-b3f--after-save-room", condition: { variable: "C308F00", values: [1] } },
        { name: "cave-magnes-b3f-passage" },
        { name: "cave-magnes-b4f--direct", condition: { variable: "C309300", values: [0] } },
        { name: "cave-magnes-b4f--before-save-room", condition: { variable: "C309300", values: [1] } },
        { name: "cave-magnes-b4f-save-room", condition: { variable: "C309300", values: [1] } },
        { name: "cave-magnes-b4f--after-save-room", condition: { variable: "C309300", values: [1] } },
        { name: "cave-magnes-crystal-room--before-dark-elf" },
        { name: "cave-magnes-crystal-room--after-dark-elf" },
        { name: "overworld-toroia--cave-magnes-to-chocobos-village" },
        { name: "chocobos-village--after-cave-magnes" },
        { name: "overworld-toroia--chocobos-village-to-toroian-castle" },
        { name: "toroian-castle--entrance-to-1f" },
        { name: "toroian-castle-1f--after-cave-magnes--direct", condition: { variable: "C305500", values: [0] } },
        { name: "toroian-castle-1f--after-cave-magnes--extra-step-area", condition: { variable: "C305500", values: [1] } },
        { name: "toroian-castle-2f" },
        { name: "overworld-toroia--toroian-castle-to-tower-of-zot" },
        { name: "tower-of-zot-1f" },
        { name: "tower-of-zot-2f" },
        { name: "tower-of-zot-3f" },
        { name: "tower-of-zot-4f" },
        { name: "tower-of-zot-5f--before-save-room" },
        { name: "tower-of-zot-5f-save-room" },
        { name: "tower-of-zot-5f--after-save-room" },
        { name: "tower-of-zot-6f" },
        { name: "tower-of-zot-7f" },
        { name: "castle-baron-left-tower-room" },
        { name: "castle-baron-left-tower-2f" },
        { name: "castle-baron-left-tower-1f" },
        { name: "castle-baron--left-tower-to-left-passage" },
        { name: "castle-baron-left-passage" },
        { name: "castle-baron--left-passage-to-1f--after-valvalis" },
        { name: "castle-baron-1f--after-valvalis" },
        { name: "castle-baron--1f-to-exit" },
        { name: "overworld-baron--castle-baron-to-agart" },
        { name: "overworld-agart--castle-baron-to-agart" },
        { name: "agart--entrance-to-well" },
        { name: "agart-well" },
        { name: "agart--well-to-exit" },
        { name: "overworld-agart--agart-to-castle-of-dwarves" },
        { name: "underworld-castle-of-dwarves--agart-to-castle-of-dwarves" },
        { name: "castle-of-dwarves--entrance-to-1f" },
        { name: "castle-of-dwarves-1f--before-golbez" },
        { name: "castle-of-dwarves-kings-room--before-golbez" },
        { name: "castle-of-dwarves-crystal-room" },
        { name: "castle-of-dwarves-kings-room--after-golbez--direct", condition: { variable: "C310700", values: [0, 1] } },
        { name: "castle-of-dwarves-kings-room--after-golbez--warp", condition: { variable: "C310700", values: [2, 3] } },
        { name: "castle-of-dwarves-1f--after-golbez--direct", condition: { variable: "C310700", values: [0, 1] } },
        { name: "castle-of-dwarves-1f--after-golbez--warp", condition: { variable: "C310700", values: [2, 3] } },
        { name: "castle-of-dwarves-right-tower-2f--1f-to-3f" },
        { name: "castle-of-dwarves-right-tower-3f--2f-to-4f" },
        { name: "castle-of-dwarves-4f--3f-to-5f" },
        { name: "castle-of-dwarves-5f" },
        { name: "castle-of-dwarves-4f--5f-to-3f--direct", condition: { variable: "C310700", values: [0, 1, 2] } },
        { name: "castle-of-dwarves-4f--5f-to-3f--warp", condition: { variable: "C310700", values: [3] } },
        { name: "castle-of-dwarves-right-tower-3f--4f-to-2f--direct", condition: { variable: "C310700", values: [0] } },
        { name: "castle-of-dwarves-right-tower-3f--4f-to-2f--warp", condition: { variable: "C310700", values: [1, 2, 3] } },
        { name: "castle-of-dwarves-right-tower-2f--3f-to-b1f" },
        { name: "castle-of-dwarves-b1f--2f-to-b2f" },
        { name: "castle-of-dwarves-b2f" },
        { name: "castle-of-dwarves-dwarf-base" },
        { name: "underworld-castle-of-dwarves--castle-of-dwarves-to-tower-of-babil-a" },
        { name: "underworld-castle-of-dwarves--castle-of-dwarves-to-tower-of-babil-b" },
        { name: "underworld-castle-of-dwarves--castle-of-dwarves-to-tower-of-babil-c" },
        { name: "tower-of-babil-1f--before-lugae" },
        { name: "tower-of-babil-2f--before-lugae" },
        { name: "tower-of-babil-3f--before-lugae" },
        { name: "tower-of-babil-4f--before-lugae--before-save-room" },
        { name: "tower-of-babil-4f-save-room" },
        { name: "tower-of-babil-4f--before-lugae--after-save-room" },
        { name: "tower-of-babil-5f--before-lugae" },
        { name: "tower-of-babil-6f--before-lugae" },
        { name: "tower-of-babil-7f--before-lugae" },
        { name: "tower-of-babil-8f--before-lugae" },
        { name: "tower-of-babil-8f--after-lugae" },
        { name: "tower-of-babil-7f--after-lugae" },
        { name: "tower-of-babil-6f--after-lugae" },
        { name: "tower-of-babil-5f--before-dark-imps" },
        { name: "tower-of-babil-5f-super-cannon" },
        { name: "tower-of-babil-5f--after-dark-imps" },
        { name: "tower-of-babil-4f--after-dark-imps" },
        { name: "tower-of-babil-3f--after-dark-imps" },
        { name: "tower-of-babil-2f--after-dark-imps" },
        { name: "tower-of-babil-1f--after-dark-imps" },
        { name: "overworld-airship--agart-to-castle-baron" },
        { name: "overworld-baron--agart-to-castle-baron" },
        { name: "castle-baron--entrance-to-1f" },
        { name: "castle-baron-1f--before-hook" },
        { name: "castle-baron--1f-to-right-passage" },
        { name: "castle-baron-right-passage" },
        { name: "castle-baron--right-passage-to-engineers" },
        { name: "overworld-airship--castle-baron-to-cave-eblana-a" },
        { name: "overworld-airship--castle-baron-to-cave-eblana-b" },
        { name: "overworld-airship--castle-baron-to-cave-eblana-c" },
        { name: "overworld-airship--castle-baron-to-cave-eblana-d" },
        { name: "overworld-airship--castle-baron-to-cave-eblana-e" },
        { name: "overworld-airship--castle-baron-to-cave-eblana-f" },
        { name: "overworld-airship--castle-baron-to-cave-eblana-g" },
        { name: "overworld-airship--castle-baron-to-cave-eblana-h" },
        { name: "overworld-airship--castle-baron-to-cave-eblana-i" },
        { name: "overworld-airship--castle-baron-to-cave-eblana-j" },
        { name: "overworld-eblan" },
        { name: "cave-eblana-b1f" },
        { name: "cave-eblana-b2f--before-shop" },
        { name: "cave-eblana-b2f-weapons-armors--direct", condition: { variable: "C30C800", values: [0] } },
        { name: "cave-eblana-b2f-weapons-armors--warp", condition: { variable: "C30C800", values: [1] } },
        { name: "cave-eblana-b2f--after-shop" },
        { name: "pass-to-babil-south--west-side" },
        { name: "pass-to-babil-north--west-side" },
        { name: "pass-to-babil-south--east-side" },
        { name: "pass-to-babil-north--east-side--direct", condition: { variable: "C30CA00", values: [0] } },
        { name: "pass-to-babil-north--east-side--before-save-room", condition: { variable: "C30CA00", values: [1] } },
        { name: "pass-to-babil-north-save-room", condition: { variable: "C30CA00", values: [1] } },
        { name: "pass-to-babil-north--east-side--after-save-room", condition: { variable: "C30CA00", values: [1] } },
        { name: "tower-of-babil-1f-upper" },
        { name: "tower-of-babil-b2f" },
        { name: "tower-of-babil-b3f--south" },
        { name: "tower-of-babil-b4f--south" },
        { name: "tower-of-babil-b3f--north--before-save-room" },
        { name: "tower-of-babil-b3f-save-room" },
        { name: "tower-of-babil-b3f--north--after-save-room" },
        { name: "tower-of-babil-b4f--north" },
        { name: "tower-of-babil-b5f" },
        { name: "tower-of-babil-crystal-room" },
        { name: "tower-of-babil-8f-revisit" },
        { name: "tower-of-babil-7f-revisit" },
        { name: "tower-of-babil-6f-revisit" },
        { name: "underworld-airship--tower-of-babil-to-castle-of-dwarves-a" },
        { name: "underworld-airship--tower-of-babil-to-castle-of-dwarves-b" },
        { name: "underworld-castle-of-dwarves--tower-of-babil-to-castle-of-dwarves" },
        { name: "castle-of-dwarves--entrance-to-1f" },
        { name: "castle-of-dwarves-1f--after-rubicant" },
        { name: "castle-of-dwarves-left-tower-2f" },
        { name: "castle-of-dwarves-b1f--2f-to-infirmary" },
        { name: "castle-of-dwarves-infirmary" },
        { name: "underworld-castle-of-dwarves--castle-of-dwarves-to-sealed-cave" },
        { name: "underworld-sealed-cave--castle-of-dwarves-to-sealed-cave" },
        { name: "sealed-cave" },
        { name: "underworld-sealed-cave--sealed-cave-to-castle-of-dwarves" },
        { name: "underworld-castle-of-dwarves--sealed-cave-to-castle-of-dwarves" },
        { name: "castle-of-dwarves--entrance-to-1f" },
        { name: "castle-of-dwarves-1f--after-sealed-cave" },
        { name: "castle-of-dwarves-kings-room--after-sealed-cave" },
        { name: "underworld-castle-of-dwarves--castle-of-dwarves-to-overworld" },
        { name: "underworld-airship--castle-of-dwarves-to-overworld-a" },
        { name: "underworld-airship--castle-of-dwarves-to-overworld-b" },
        { name: "overworld-airship--underworld-to-mysidia" },
        { name: "overworld-mysidia--before-big-whale" },
        { name: "mysidia--entrance-to-big-whale" },
        { name: "overworld-mysidia--after-big-whale--walk", condition: { variable: "C000500", values: [0] } },
        { name: "overworld-mysidia--after-big-whale--fly", condition: { variable: "C000500", values: [1] } },
        { name: "big-whale--entrance-to-crystal" },
        { name: "lunar-overworld-big-whale--initial-to-hummingway-cave", condition: { variable: "C200000", values: [0]} },
        { name: "lunar-overworld-big-whale--initial-to-lunar-path-landing", condition: { variable: "C200000", values: [1] } },
        { name: "big-whale--console-to-exit", condition: { variable: "C200000", values: [0]} },
        { name: "lunar-overworld--before-hummingway-cave", condition: { variable: "C200000", values: [0]} },
        { name: "hummingway-cave", condition: { variable: "C200000", values: [0]} },
        { name: "lunar-overworld--after-hummingway-cave", condition: { variable: "C200000", values: [0]} },
        { name: "big-whale--entrance-to-console", condition: { variable: "C200000", values: [0]} },
        { name: "lunar-overworld-big-whale--hummingway-cave-to-lunar-path-landing", condition: { variable: "C200000", values: [0] } },
        { name: "big-whale--console-to-exit" },
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
        { name: "big-whale--entrance-to-console", condition: { variable: "C200000", values: [1]} },
        { name: "lunar-overworld-big-whale--lunar-path-landing-to-hummingway-cave", condition: { variable: "C200000", values: [1] } },
        { name: "big-whale--console-to-exit", condition: { variable: "C200000", values: [1] } },
        { name: "lunar-overworld--before-hummingway-cave", condition: { variable: "C200000", values: [1] } },
        { name: "hummingway-cave", condition: { variable: "C200000", values: [1] } },
        { name: "lunar-overworld--after-hummingway-cave", condition: { variable: "C200000", values: [1] } },
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
        "agart--entrance-to-well": {
            flags: PathFlags.NONE,
            map: "3006-0",
            segments: {
                "base-0": [
                    [16, 31, SegmentFlags.START],
                    [16, 22, SegmentFlags.NONE],
                    [15, 22, SegmentFlags.NONE],
                    [15, 21, SegmentFlags.END],
                ],
            },
        },
        "agart--well-to-exit": {
            flags: PathFlags.NONE,
            map: "3006-0",
            segments: {
                "base-0": [
                    [15, 21, SegmentFlags.START],
                    [15, 31, SegmentFlags.END],
                ],
            },
        },
        "agart-well": {
            flags: PathFlags.NONE,
            map: "308B-0",
            segments: {
                "base-0": [
                    [9, 11, SegmentFlags.START],
                    [9, 10, SegmentFlags.RETURN],
                    [9, 14, SegmentFlags.END],
                ],
            },
        },
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
        "castle-baron--1f-to-exit": {
            flags: PathFlags.NONE,
            map: "3024-2",
            segments: {
                "base-0": [
                    [15, 18, SegmentFlags.START],
                    [15, 31, SegmentFlags.END],
                ],
            },
        },
        "castle-baron--1f-to-right-passage": {
            flags: PathFlags.NONE,
            map: "3024-2",
            segments: {
                "base-0": [
                    [19, 13, SegmentFlags.START],
                    [23, 13, SegmentFlags.NONE],
                    [23, 14, SegmentFlags.NONE],
                    [28, 14, SegmentFlags.END],
                ],
            },
        },
        "castle-baron--b1f-to-left-passage": {
            flags: PathFlags.NONE,
            map: "3024-1",
            segments: {
                "base-0": [
                    [10, 0, SegmentFlags.START],
                    [10, 2, SegmentFlags.NONE],
                    [0, 2, SegmentFlags.NONE],
                    [0, 30, SegmentFlags.NONE],
                    [3, 30, SegmentFlags.NONE],
                    [3, 19, SegmentFlags.NONE],
                    [8, 19, SegmentFlags.NONE],
                    [8, 17, SegmentFlags.END],
                ],
            },
        },
        "castle-baron--entrance-to-1f": {
            flags: PathFlags.NONE,
            map: "3024-2",
            segments: {
                "base-0": [
                    [16, 30, SegmentFlags.START],
                    [16, 29, SegmentFlags.NONE],
                    [14, 29, SegmentFlags.RETURN],
                    [15, 29, SegmentFlags.NONE],
                    [15, 18, SegmentFlags.NONE],
                    [14, 18, SegmentFlags.RETURN],
                    [15, 18, SegmentFlags.NONE],
                    [15, 15, SegmentFlags.END],
                ],
            },
        },
        "castle-baron--left-passage-to-1f": {
            flags: PathFlags.NONE,
            map: "3024-1",
            segments: {
                "base-0": [
                    [8, 13, SegmentFlags.START],
                    [12, 13, SegmentFlags.END],
                ],
            },
        },
        "castle-baron--left-passage-to-1f--after-valvalis": {
            flags: PathFlags.NONE,
            map: "3024-2",
            segments: {
                "base-0": [
                    [8, 13, SegmentFlags.START],
                    [12, 13, SegmentFlags.END],
                ],
            },
        },
        "castle-baron--left-tower-to-left-passage": {
            flags: PathFlags.NONE,
            map: "3024-2",
            segments: {
                "base-0": [
                    [6, 10, SegmentFlags.START],
                    [6, 18, SegmentFlags.NONE],
                    [8, 18, SegmentFlags.NONE],
                    [8, 17, SegmentFlags.END],
                ],
            },
        },
        "castle-baron--right-passage-to-engineers": {
            flags: PathFlags.NONE,
            map: "3024-2",
            segments: {
                "base-0": [
                    [28, 19, SegmentFlags.START],
                    [24, 19, SegmentFlags.END],
                ],
            },
        },
        "castle-baron-1f--after-valvalis": {
            flags: PathFlags.STEPS,
            map: "302A-1",
            segments: {
                "base-0": [
                    [1, 6, SegmentFlags.START],
                    [1, 10, SegmentFlags.NONE],
                    [8, 10, SegmentFlags.NONE],
                    [8, 15, SegmentFlags.END],
                ],
            },
        },
        "castle-baron-1f--before-hook": {
            flags: PathFlags.STEPS,
            map: "302A-0",
            segments: {
                "base-0": [
                    [8, 12, SegmentFlags.START],
                    [8, 10, SegmentFlags.NONE],
                    [16, 10, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [8, 12, SegmentFlags.NONE],
                    [8, 13, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [8, 12, SegmentFlags.NONE],
                    [9, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "castle-baron-1f--before-kainazzo": {
            flags: PathFlags.STEPS,
            map: "302A-1",
            segments: {
                "base-0": [
                    [1, 6, SegmentFlags.START],
                    [1, 10, SegmentFlags.NONE],
                    [6, 10, SegmentFlags.END],
                ],
                "base-1": [
                    [8, 4, SegmentFlags.START],
                    [8, 0, SegmentFlags.END],
                ],
                "extra-1-1": [
                    [8, 3, SegmentFlags.NONE],
                    [9, 3, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-1": [
                    [8, 4, SegmentFlags.NONE],
                    [9, 4, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "castle-baron-2f": {
            flags: PathFlags.STEPS,
            map: "302B-1",
            segments: {
                "base-0": [
                    [14, 7, SegmentFlags.START],
                    [14, 2, SegmentFlags.END],
                ],
            },
        },
        "castle-baron-3f": {
            flags: PathFlags.STEPS,
            map: "308A-0",
            segments: {
                "base-0": [
                    [7, 6, SegmentFlags.START],
                    [7, 2, SegmentFlags.END],
                ],
            },
        },
        "castle-baron-b1f--after-save-room": {
            flags: PathFlags.STEPS,
            map: "303C-0",
            segments: {
                "base-0": [
                    [2, 9, SegmentFlags.START],
                    [2, 11, SegmentFlags.NONE],
                    [6, 11, SegmentFlags.NONE],
                    [6, 12, SegmentFlags.NONE],
                    [12, 12, SegmentFlags.NONE],
                    [12, 10, SegmentFlags.NONE],
                    [14, 10, SegmentFlags.NONE],
                    [14, 2, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [14, 4, SegmentFlags.NONE],
                    [15, 4, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "castle-baron-b1f--before-save-room": {
            flags: PathFlags.STEPS,
            map: "303C-0",
            segments: {
                "base-0": [
                    [6, 16, SegmentFlags.START],
                    [6, 12, SegmentFlags.NONE],
                    [6, 11, SegmentFlags.NONE],
                    [2, 11, SegmentFlags.NONE],
                    [2, 9, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [6, 12, SegmentFlags.NONE],
                    [7, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "castle-baron-b1f-save-room": {
            flags: PathFlags.STEPS,
            map: "303D-0",
            segments: {
                "base-0": [
                    [4, 11, SegmentFlags.START],
                    [4, 6, SegmentFlags.RETURN],
                    [4, 12, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [4, 11, SegmentFlags.NONE],
                    [4, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "castle-baron-b2f": {
            flags: PathFlags.STEPS,
            map: "303E-0",
            segments: {
                "base-0": [
                    [2, 26, SegmentFlags.START],
                    [2, 23, SegmentFlags.NONE],
                    [8, 23, SegmentFlags.NONE],
                    [8, 5, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [8, 7, SegmentFlags.NONE],
                    [9, 7, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "castle-baron-b3f": {
            flags: PathFlags.STEPS,
            map: "303B-0",
            segments: {
                "base-0": [
                    [1, 5, SegmentFlags.START],
                    [1, 3, SegmentFlags.NONE],
                    [4, 3, SegmentFlags.NONE],
                    [4, 8, SegmentFlags.NONE],
                    [13, 8, SegmentFlags.NONE],
                    [13, 6, SegmentFlags.NONE],
                    [16, 6, SegmentFlags.NONE],
                    [16, 10, SegmentFlags.NONE],
                    [25, 10, SegmentFlags.NONE],
                    [25, 12, SegmentFlags.NONE],
                    [26, 12, SegmentFlags.NONE],
                    [26, 13, SegmentFlags.NONE],
                    [30, 13, SegmentFlags.NONE],
                    [30, 3, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [30, 13, SegmentFlags.NONE],
                    [30, 14, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "castle-baron-kings-room": {
            flags: PathFlags.STEPS,
            map: "302C-1",
            segments: {
                "base-0": [
                    [8, 10, SegmentFlags.START],
                    [8, 4, SegmentFlags.END],
                ],
            },
        },
        "castle-baron-left-passage": {
            flags: PathFlags.STEPS,
            map: "302D-0",
            segments: {
                "base-0": [
                    [2, 8, SegmentFlags.START],
                    [2, 2, SegmentFlags.END],
                ],
            },
        },
        "castle-baron-left-tower-1f": {
            flags: PathFlags.STEPS,
            map: "3032-0",
            segments: {
                "base-0": [
                    [5, 4, SegmentFlags.START],
                    [5, 9, SegmentFlags.END],
                ],
            },
        },
        "castle-baron-left-tower-2f": {
            flags: PathFlags.STEPS,
            map: "3033-1",
            segments: {
                "base-0": [
                    [9, 4, SegmentFlags.START],
                    [5, 4, SegmentFlags.END],
                ],
            },
        },
        "castle-baron-left-tower-room": {
            flags: PathFlags.STEPS,
            map: "3034-0",
            segments: {
                "base-0": [
                    [6, 4, SegmentFlags.START],
                    [9, 4, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [7, 4, SegmentFlags.NONE],
                    [7, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [6, 4, SegmentFlags.NONE],
                    [6, 3, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "optional-3-0": [
                    [6, 4, SegmentFlags.NONE],
                    [6, 5, SegmentFlags.NONE],
                    [8, 5, SegmentFlags.ANNOTATE],
                    [8, 4, SegmentFlags.NONE],
                ],
            },
        },
        "castle-baron-right-passage": {
            flags: PathFlags.STEPS,
            map: "302E-1",
            segments: {
                "base-0": [
                    [18, 2, SegmentFlags.START],
                    [18, 12, SegmentFlags.END],
                ],
            },
        },
        "castle-of-dwarves--entrance-to-1f": {
            flags: PathFlags.NONE,
            map: "3107-0",
            segments: {
                "base-0": [
                    [15, 30, SegmentFlags.START],
                    [15, 19, SegmentFlags.END],
                ],
            },
        },
        "castle-of-dwarves-1f--after-golbez--direct": {
            flags: PathFlags.STEPS,
            map: "3108-1",
            segments: {
                "base-0": [
                    [11, 3, SegmentFlags.START],
                    [11, 8, SegmentFlags.NONE],
                    [21, 8, SegmentFlags.NONE],
                    [21, 6, SegmentFlags.END],
                ],
                "optional-1-0": [
                    [11, 7, SegmentFlags.NONE],
                    [16, 7, SegmentFlags.ANNOTATE],
                    [16, 8, SegmentFlags.NONE],
                ],
            },
        },
        "castle-of-dwarves-1f--after-golbez--warp": {
            flags: PathFlags.STEPS,
            map: "3108-1",
            segments: {
                "base-0": [
                    [11, 1, SegmentFlags.START],
                    [11, 8, SegmentFlags.NONE],
                    [21, 8, SegmentFlags.NONE],
                    [21, 6, SegmentFlags.END],
                ],
                "optional-1-0": [
                    [11, 7, SegmentFlags.NONE],
                    [16, 7, SegmentFlags.ANNOTATE],
                    [16, 8, SegmentFlags.NONE],
                ],
            },
        },
        "castle-of-dwarves-1f--after-rubicant": {
            flags: PathFlags.STEPS,
            map: "3108-1",
            segments: {
                "base-0": [
                    [11, 11, SegmentFlags.START],
                    [11, 8, SegmentFlags.NONE],
                    [1, 8, SegmentFlags.NONE],
                    [1, 6, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [6, 8, SegmentFlags.NONE],
                    [6, 7, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "optional-1-0": [
                    [11, 9, SegmentFlags.NONE],
                    [8, 9, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [8, 8, SegmentFlags.NONE],
                ],
                "optional-2-0": [
                    [11, 10, SegmentFlags.NONE],
                    [8, 10, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [8, 8, SegmentFlags.NONE],
                ],
                "optional-3-0": [
                    [11, 11, SegmentFlags.NONE],
                    [8, 11, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [8, 8, SegmentFlags.NONE],
                ],
                "optional-4-0": [
                    [11, 11, SegmentFlags.NONE],
                    [6, 11, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [6, 8, SegmentFlags.NONE],
                ],
            },
        },
        "castle-of-dwarves-1f--after-sealed-cave": {
            flags: PathFlags.STEPS,
            map: "3108-1",
            segments: {
                "base-0": [
                    [11, 11, SegmentFlags.START],
                    [11, 1, SegmentFlags.END],
                ],
            },
        },
        "castle-of-dwarves-1f--before-golbez": {
            flags: PathFlags.STEPS,
            map: "3108-0",
            segments: {
                "base-0": [
                    [11, 11, SegmentFlags.START],
                    [11, 1, SegmentFlags.END],
                ],
            },
        },
        "castle-of-dwarves-4f--3f-to-5f": {
            flags: PathFlags.STEPS,
            map: "311B-0",
            segments: {
                "base-0": [
                    [24, 21, SegmentFlags.START],
                    [24, 23, SegmentFlags.END],
                ],
            },
        },
        "castle-of-dwarves-4f--5f-to-3f--direct": {
            flags: PathFlags.STEPS,
            map: "311B-0",
            segments: {
                "base-0": [
                    [24, 23, SegmentFlags.START],
                    [24, 21, SegmentFlags.END],
                ],
            },
        },
        "castle-of-dwarves-4f--5f-to-3f--warp": {
            flags: PathFlags.STEPS,
            map: "311B-0",
            segments: {
                "base-0": [
                    [24, 23, SegmentFlags.START],
                ],
            },
        },
        "castle-of-dwarves-5f": {
            flags: PathFlags.STEPS,
            map: "3119-0",
            segments: {
                "base-0": [
                    [6, 7, SegmentFlags.START],
                    [6, 4, SegmentFlags.RETURN],
                    [6, 7, SegmentFlags.END],
                ],
            },
        },
        "castle-of-dwarves-b1f--2f-to-b2f": {
            flags: PathFlags.STEPS,
            map: "310A-0",
            segments: {
                "base-0": [
                    [26, 8, SegmentFlags.START],
                    [15, 8, SegmentFlags.NONE],
                    [15, 4, SegmentFlags.NONE],
                    [14, 4, SegmentFlags.END],
                    [14, 0, SegmentFlags.NONE],
                    [11, 0, SegmentFlags.END],
                ],
            },
        },
        "castle-of-dwarves-b1f--2f-to-infirmary": {
            flags: PathFlags.STEPS,
            map: "310A-0",
            segments: {
                "base-0": [
                    [1, 8, SegmentFlags.START],
                    [6, 8, SegmentFlags.NONE],
                    [6, 7, SegmentFlags.END],
                ],
            },
        },
        "castle-of-dwarves-b2f": {
            flags: PathFlags.STEPS,
            map: "310B-0",
            segments: {
                "base-0": [
                    [29, 9, SegmentFlags.START],
                    [28, 9, SegmentFlags.NONE],
                    [28, 8, SegmentFlags.NONE],
                    [25, 8, SegmentFlags.NONE],
                    [25, 9, SegmentFlags.NONE],
                    [23, 9, SegmentFlags.NONE],
                    [23, 10, SegmentFlags.NONE],
                    [22, 10, SegmentFlags.NONE],
                    [22, 11, SegmentFlags.NONE],
                    [10, 11, SegmentFlags.NONE],
                    [10, 17, SegmentFlags.NONE],
                    [11, 17, SegmentFlags.NONE],
                    [11, 26, SegmentFlags.NONE],
                    [5, 26, SegmentFlags.NONE],
                    [5, 27, SegmentFlags.NONE],
                    [2, 27, SegmentFlags.END],
                ],
                "optional-1-0": [
                    [11, 11, SegmentFlags.NONE],
                    [11, 12, SegmentFlags.ANNOTATE],
                    [10, 12, SegmentFlags.NONE],
                ],
                "optional-2-0": [
                    [11, 11, SegmentFlags.NONE],
                    [11, 12, SegmentFlags.NONE],
                    [10, 12, SegmentFlags.NONE],
                    [10, 14, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [11, 14, SegmentFlags.NONE],
                    [11, 17, SegmentFlags.NONE],
                ],
            },
        },
        "castle-of-dwarves-crystal-room": {
            flags: PathFlags.NONE,
            map: "310D-0",
            segments: {
                "base-0": [
                    [9, 9, SegmentFlags.START],
                    [9, 8, SegmentFlags.RETURN],
                    [9, 20, SegmentFlags.END],
                ],
            },
        },
        "castle-of-dwarves-dwarf-base": {
            flags: PathFlags.STEPS,
            map: "310F-0",
            segments: {
                "base-0": [
                    [29, 5, SegmentFlags.START],
                    [28, 5, SegmentFlags.NONE],
                    [28, 8, SegmentFlags.NONE],
                    [26, 8, SegmentFlags.NONE],
                    [10, 8, SegmentFlags.NONE],
                    [10, 12, SegmentFlags.NONE],
                    [3, 12, SegmentFlags.NONE],
                    [3, 7, SegmentFlags.RETURN],
                    [3, 14, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [10, 12, SegmentFlags.NONE],
                    [11, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "optional-1-0": [
                    [29, 5, SegmentFlags.NONE],
                    [29, 6, SegmentFlags.NONE | SegmentFlags.ANNOTATE],
                    [28, 6, SegmentFlags.NONE],
                ],
                "optional-2-0": [
                    [29, 5, SegmentFlags.NONE],
                    [29, 6, SegmentFlags.NONE | SegmentFlags.ANNOTATE],
                    [27, 6, SegmentFlags.NONE],
                    [27, 8, SegmentFlags.NONE],
                ],
            },
        },
        "castle-of-dwarves-infirmary": {
            flags: PathFlags.STEPS,
            map: "3112-0",
            segments: {
                "base-0": [
                    [9, 7, SegmentFlags.START],
                    [9, 5, SegmentFlags.NONE],
                    [5, 5, SegmentFlags.END],
                ],
            },
        },
        "castle-of-dwarves-kings-room--after-golbez--direct": {
            flags: PathFlags.STEPS,
            map: "3109-0",
            segments: {
                "base-0": [
                    [9, 1, SegmentFlags.START],
                    [8, 1, SegmentFlags.NONE],
                    [8, 6, SegmentFlags.NONE],
                    [10, 6, SegmentFlags.NONE],
                    [10, 10, SegmentFlags.NONE],
                    [10, 15, SegmentFlags.END],
                ],
                "optional-1-0": [
                    [9, 6, SegmentFlags.NONE],
                    [9, 10, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [10, 10, SegmentFlags.NONE],
                ],
                "optional-2-0": [
                    [8, 6, SegmentFlags.NONE],
                    [8, 10, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [10, 10, SegmentFlags.NONE],
                ],
            },
        },
        "castle-of-dwarves-kings-room--after-golbez--warp": {
            flags: PathFlags.STEPS,
            map: "3109-0",
            segments: {
                "base-0": [
                    [9, 1, SegmentFlags.START],
                ],
            },
        },
        "castle-of-dwarves-kings-room--after-sealed-cave": {
            flags: PathFlags.STEPS,
            map: "3109-0",
            segments: {
                "base-0": [
                    [10, 13, SegmentFlags.START],
                    [10, 11, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [10, 13, SegmentFlags.NONE],
                    [10, 14, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [10, 13, SegmentFlags.NONE],
                    [10, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "castle-of-dwarves-kings-room--before-golbez": {
            flags: PathFlags.STEPS,
            map: "3109-0",
            segments: {
                "base-0": [
                    [10, 13, SegmentFlags.START],
                    [10, 11, SegmentFlags.END],
                ],
            },
        },
        "castle-of-dwarves-left-tower-2f": {
            flags: PathFlags.STEPS,
            map: "3111-0",
            segments: {
                "base-0": [
                    [16, 12, SegmentFlags.START],
                    [16, 3, SegmentFlags.END],
                ],
            },
        },
        "castle-of-dwarves-right-tower-2f--1f-to-3f": {
            flags: PathFlags.STEPS,
            map: "310E-0",
            segments: {
                "base-0": [
                    [1, 13, SegmentFlags.START],
                    [1, 9, SegmentFlags.NONE],
                    [4, 9, SegmentFlags.NONE],
                    [4, 6, SegmentFlags.NONE],
                    [13, 6, SegmentFlags.NONE],
                    [13, 4, SegmentFlags.END],
                ],
                "optional-1-0": [
                    [3, 9, SegmentFlags.NONE],
                    [3, 8, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [4, 8, SegmentFlags.NONE],
                ],
                "optional-2-0": [
                    [4, 9, SegmentFlags.NONE],
                    [5, 9, SegmentFlags.ANNOTATE],
                    [5, 6, SegmentFlags.NONE],
                ],
                "optional-3-0": [
                    [4, 9, SegmentFlags.NONE],
                    [6, 9, SegmentFlags.ANNOTATE],
                    [6, 6, SegmentFlags.NONE],
                ],
                "optional-4-0": [
                    [4, 9, SegmentFlags.NONE],
                    [7, 9, SegmentFlags.ANNOTATE],
                    [7, 6, SegmentFlags.NONE],
                ],
                "optional-5-0": [
                    [3, 9, SegmentFlags.NONE],
                    [3, 7, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [7, 7, SegmentFlags.NONE],
                    [7, 6, SegmentFlags.NONE],
                ],
                "optional-6-0": [
                    [4, 9, SegmentFlags.NONE],
                    [9, 9, SegmentFlags.ANNOTATE],
                    [9, 6, SegmentFlags.NONE],
                ],
                "optional-7-0": [
                    [4, 9, SegmentFlags.NONE],
                    [10, 9, SegmentFlags.ANNOTATE],
                    [10, 6, SegmentFlags.NONE],
                ],
                "optional-8-0": [
                    [4, 9, SegmentFlags.NONE],
                    [11, 9, SegmentFlags.ANNOTATE],
                    [11, 6, SegmentFlags.NONE],
                ],
                "optional-9-0": [
                    [4, 9, SegmentFlags.NONE],
                    [13, 9, SegmentFlags.ANNOTATE],
                    [13, 6, SegmentFlags.NONE],
                ],
                "optional-10-0": [
                    [4, 9, SegmentFlags.NONE],
                    [11, 9, SegmentFlags.NONE],
                    [11, 7, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [13, 7, SegmentFlags.NONE],
                    [13, 6, SegmentFlags.NONE],
                ],
            },
        },
        "castle-of-dwarves-right-tower-2f--3f-to-b1f": {
            flags: PathFlags.STEPS,
            map: "310E-0",
            segments: {
                "base-0": [
                    [13, 4, SegmentFlags.START],
                    [13, 6, SegmentFlags.NONE],
                    [10, 6, SegmentFlags.END],
                    [1, 6, SegmentFlags.NONE],
                    [1, 4, SegmentFlags.END],
                ],
                "optional-1-0": [
                    [2, 6, SegmentFlags.NONE],
                    [2, 5, SegmentFlags.ANNOTATE],
                    [1, 5, SegmentFlags.NONE],
                ],
            },
        },
        "castle-of-dwarves-right-tower-3f--2f-to-4f": {
            flags: PathFlags.STEPS,
            map: "3110-0",
            segments: {
                "base-0": [
                    [10, 10, SegmentFlags.START],
                    [10, 6, SegmentFlags.NONE],
                    [9, 6, SegmentFlags.NONE],
                    [9, 4, SegmentFlags.NONE],
                    [6, 4, SegmentFlags.END],
                    [6, 5, SegmentFlags.END],
                ],
                "optional-1-0": [
                    [10, 6, SegmentFlags.NONE],
                    [10, 5, SegmentFlags.ANNOTATE],
                    [9, 5, SegmentFlags.NONE],
                ],
                "optional-2-0": [
                    [10, 8, SegmentFlags.NONE],
                    [8, 8, SegmentFlags.VERTICAL | SegmentFlags.ANNOTATE],
                    [8, 4, SegmentFlags.NONE],
                ],
            },
        },
        "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": {
            flags: PathFlags.STEPS,
            map: "3110-0",
            segments: {
                "base-0": [
                    [6, 5, SegmentFlags.START],
                    [6, 8, SegmentFlags.NONE],
                    [8, 8, SegmentFlags.NONE],
                    [10, 8, SegmentFlags.NONE],
                    [10, 10, SegmentFlags.END],
                ],
                "optional-1-0": [
                    [6, 6, SegmentFlags.NONE],
                    [8, 6, SegmentFlags.ANNOTATE],
                    [8, 8, SegmentFlags.NONE],
                ],
            },
        },
        "castle-of-dwarves-right-tower-3f--4f-to-2f--warp": {
            flags: PathFlags.STEPS,
            map: "3110-0",
            segments: {
                "base-0": [
                    [6, 5, SegmentFlags.START],
                ],
            },
        },
        "cave-eblana-b1f": {
            flags: PathFlags.STEPS,
            map: "30C7-0",
            segments: {
                "base-0": [
                    [10, 4, SegmentFlags.START],
                    [10, 10, SegmentFlags.NONE],
                    [12, 10, SegmentFlags.NONE],
                    [12, 12, SegmentFlags.NONE],
                    [8, 12, SegmentFlags.NONE],
                    [8, 15, SegmentFlags.NONE],
                    [11, 15, SegmentFlags.NONE],
                    [11, 23, SegmentFlags.NONE],
                    [10, 23, SegmentFlags.NONE],
                    [10, 24, SegmentFlags.NONE],
                    [9, 24, SegmentFlags.NONE],
                    [9, 28, SegmentFlags.NONE],
                    [3, 28, SegmentFlags.NONE],
                    [3, 30, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [3, 28, SegmentFlags.NONE],
                    [2, 28, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "cave-eblana-b2f--after-shop": {
            flags: PathFlags.STEPS,
            map: "30C8-0",
            segments: {
                "base-0": [
                    [17, 7, SegmentFlags.START],
                    [17, 13, SegmentFlags.NONE],
                    [13, 13, SegmentFlags.NONE],
                    [13, 9, SegmentFlags.NONE],
                    [9, 9, SegmentFlags.NONE],
                    [9, 3, SegmentFlags.END],
                ],
            },
        },
        "cave-eblana-b2f--before-shop": {
            flags: PathFlags.STEPS,
            map: "30C8-0",
            segments: {
                "base-0": [
                    [27, 3, SegmentFlags.START],
                    [27, 9, SegmentFlags.NONE],
                    [25, 9, SegmentFlags.NONE],
                    [25, 10, SegmentFlags.NONE],
                    [17, 10, SegmentFlags.NONE],
                    [17, 7, SegmentFlags.END],
                ],
            },
        },
        "cave-eblana-b2f-weapons-armors--direct": {
            flags: PathFlags.STEPS,
            map: "30CC-0",
            segments: {
                "base-0": [
                    [9, 11, SegmentFlags.START],
                    [9, 5, SegmentFlags.END],
                    [5, 5, SegmentFlags.RETURN],
                    [9, 5, SegmentFlags.NONE],
                    [9, 14, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [9, 9, SegmentFlags.NONE],
                    [8, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
                "optional-1-0": [
                    [8, 5, SegmentFlags.NONE],
                    [8, 6, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL | SegmentFlags.END],
                    [9, 6, SegmentFlags.NONE],
                ],
                "optional-2-0": [
                    [7, 5, SegmentFlags.NONE],
                    [7, 6, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [8, 6, SegmentFlags.END],
                    [9, 6, SegmentFlags.NONE],
                ],
            },
        },
        "cave-eblana-b2f-weapons-armors--warp": {
            flags: PathFlags.STEPS,
            map: "30CC-0",
            segments: {
                "base-0": [
                    [9, 11, SegmentFlags.START],
                    [9, 5, SegmentFlags.END],
                    [5, 5, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [9, 9, SegmentFlags.NONE],
                    [8, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "cave-magnes-b1f": {
            flags: PathFlags.STEPS,
            map: "308C-0",
            segments: {
                "base-0": [
                    [5, 7, SegmentFlags.START],
                    [5, 8, SegmentFlags.NONE],
                    [9, 8, SegmentFlags.NONE],
                    [9, 5, SegmentFlags.NONE],
                    [16, 5, SegmentFlags.NONE],
                    [16, 14, SegmentFlags.NONE],
                    [24, 14, SegmentFlags.NONE],
                    [24, 24, SegmentFlags.NONE],
                    [24, 26, SegmentFlags.NONE],
                    [10, 26, SegmentFlags.NONE],
                    [10, 18, SegmentFlags.NONE],
                    [6, 18, SegmentFlags.NONE],
                    [6, 19, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [5, 8, SegmentFlags.NONE],
                    [5, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [6, 18, SegmentFlags.NONE],
                    [5, 18, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "cave-magnes-b2f": {
            flags: PathFlags.STEPS,
            map: "308D-0",
            segments: {
                "base-0": [
                    [27, 26, SegmentFlags.START],
                    [27, 27, SegmentFlags.NONE],
                    [18, 27, SegmentFlags.NONE],
                    [18, 18, SegmentFlags.NONE],
                    [13, 18, SegmentFlags.NONE],
                    [13, 9, SegmentFlags.NONE],
                    [5, 9, SegmentFlags.NONE],
                    [5, 10, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [27, 27, SegmentFlags.NONE],
                    [27, 26, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [5, 9, SegmentFlags.NONE],
                    [5, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "cave-magnes-b3f--after-save-room": {
            flags: PathFlags.STEPS,
            map: "308F-0",
            segments: {
                "base-0": [
                    [21, 9, SegmentFlags.START],
                    [22, 9, SegmentFlags.NONE],
                    [22, 16, SegmentFlags.NONE],
                    [29, 16, SegmentFlags.NONE],
                    [29, 20, SegmentFlags.NONE],
                    [28, 20, SegmentFlags.NONE],
                    [21, 20, SegmentFlags.NONE],
                    [21, 25, SegmentFlags.NONE],
                    [8, 25, SegmentFlags.NONE],
                    [8, 5, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [29, 20, SegmentFlags.NONE],
                    [30, 20, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [22, 12, SegmentFlags.NONE],
                    [23, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "cave-magnes-b3f--before-save-room": {
            flags: PathFlags.STEPS,
            map: "308F-0",
            segments: {
                "alternate-0": [
                    [22, 9, SegmentFlags.NONE],
                    [21, 9, SegmentFlags.END],
                ],
                "base-0": [
                    [27, 6, SegmentFlags.START],
                    [27, 9, SegmentFlags.NONE],
                    [22, 9, SegmentFlags.NONE],
                ],
                "extra-1-0": [
                    [27, 7, SegmentFlags.NONE],
                    [27, 6, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [27, 9, SegmentFlags.NONE],
                    [28, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "cave-magnes-b3f--direct": {
            flags: PathFlags.STEPS,
            map: "308F-0",
            segments: {
                "base-0": [
                    [27, 6, SegmentFlags.START],
                    [27, 9, SegmentFlags.NONE],
                    [22, 9, SegmentFlags.NONE],
                    [22, 16, SegmentFlags.NONE],
                    [29, 16, SegmentFlags.NONE],
                    [29, 20, SegmentFlags.NONE],
                    [28, 20, SegmentFlags.NONE],
                    [21, 20, SegmentFlags.NONE],
                    [21, 25, SegmentFlags.NONE],
                    [8, 25, SegmentFlags.NONE],
                    [8, 5, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [29, 20, SegmentFlags.NONE],
                    [30, 20, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [22, 12, SegmentFlags.NONE],
                    [23, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "cave-magnes-b3f-passage": {
            flags: PathFlags.STEPS,
            map: "3091-0",
            segments: {
                "base-0": [
                    [14, 13, SegmentFlags.START],
                    [14, 12, SegmentFlags.NONE],
                    [5, 12, SegmentFlags.NONE],
                    [5, 14, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [5, 13, SegmentFlags.NONE],
                    [6, 13, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "cave-magnes-b3f-save-room": {
            flags: PathFlags.STEPS,
            map: "3092-0",
            segments: {
                "base-0": [
                    [6, 12, SegmentFlags.START],
                    [6, 13, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [6, 12, SegmentFlags.NONE],
                    [6, 11, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "cave-magnes-b4f--after-save-room": {
            flags: PathFlags.STEPS,
            map: "3093-0",
            segments: {
                "base-0": [
                    [27, 15, SegmentFlags.START],
                    [27, 16, SegmentFlags.NONE],
                    [24, 16, SegmentFlags.NONE],
                    [24, 15, SegmentFlags.NONE],
                    [13, 15, SegmentFlags.NONE],
                    [13, 7, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [13, 8, SegmentFlags.NONE],
                    [14, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "cave-magnes-b4f--before-save-room": {
            flags: PathFlags.STEPS,
            map: "3093-0",
            segments: {
                "alternate-0": [
                    [13, 15, SegmentFlags.NONE],
                    [24, 15, SegmentFlags.NONE],
                    [24, 16, SegmentFlags.NONE],
                    [27, 16, SegmentFlags.NONE],
                    [27, 15, SegmentFlags.END],
                ],
                "base-0": [
                    [22, 27, SegmentFlags.START],
                    [22, 28, SegmentFlags.NONE],
                    [20, 28, SegmentFlags.NONE],
                    [20, 27, SegmentFlags.NONE],
                    [19, 27, SegmentFlags.NONE],
                    [19, 25, SegmentFlags.NONE],
                    [13, 25, SegmentFlags.NONE],
                    [13, 15, SegmentFlags.NONE],
                ],
                "extra-1-0": [
                    [22, 28, SegmentFlags.NONE],
                    [22, 27, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [27, 16, SegmentFlags.NONE],
                    [28, 16, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "cave-magnes-b4f--direct": {
            flags: PathFlags.STEPS,
            map: "3093-0",
            segments: {
                "base-0": [
                    [22, 27, SegmentFlags.START],
                    [22, 28, SegmentFlags.NONE],
                    [20, 28, SegmentFlags.NONE],
                    [20, 27, SegmentFlags.NONE],
                    [19, 27, SegmentFlags.NONE],
                    [19, 25, SegmentFlags.NONE],
                    [13, 25, SegmentFlags.NONE],
                    [13, 7, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [22, 28, SegmentFlags.NONE],
                    [22, 27, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [13, 8, SegmentFlags.NONE],
                    [14, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "cave-magnes-b4f-save-room": {
            flags: PathFlags.STEPS,
            map: "30A1-0",
            segments: {
                "base-0": [
                    [6, 12, SegmentFlags.START],
                    [6, 13, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [6, 12, SegmentFlags.NONE],
                    [6, 11, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "cave-magnes-crystal-room--after-dark-elf": {
            flags: PathFlags.NONE,
            map: "3094-1",
            segments: {
                "base-0": [
                    [11, 12, SegmentFlags.START],
                    [11, 9, SegmentFlags.RETURN],
                    [11, 26, SegmentFlags.END],
                ],
            },
        },
        "cave-magnes-crystal-room--before-dark-elf": {
            flags: PathFlags.NONE,
            map: "3094-0",
            segments: {
                "base-0": [
                    [11, 25, SegmentFlags.START],
                    [11, 12, SegmentFlags.END],
                ],
            },
        },
        "chocobos-forest-mt-ordeals": {
            flags: PathFlags.YELLOW_CHOCOBO,
            map: "30D1-0",
            segments: {},
        },
        "chocobos-village--after-cave-magnes": {
            flags: PathFlags.BLACK_CHOCOBO | PathFlags.YELLOW_CHOCOBO,
            map: "3021-0",
            segments: {
                "base-0": [
                    [8, 30, SegmentFlags.START],
                    [8, 28, SegmentFlags.NONE],
                    [9, 28, SegmentFlags.NONE],
                    [9, 27, SegmentFlags.NONE],
                    [10, 27, SegmentFlags.NONE],
                    [10, 26, SegmentFlags.END],
                ],
            },
        },
        "chocobos-village--before-cave-magnes": {
            flags: PathFlags.BLACK_CHOCOBO,
            map: "3021-0",
            segments: {
                "base-0": [
                    [8, 30, SegmentFlags.START],
                    [8, 28, SegmentFlags.NONE],
                    [9, 28, SegmentFlags.NONE],
                    [9, 27, SegmentFlags.NONE],
                    [10, 27, SegmentFlags.NONE],
                    [10, 26, SegmentFlags.END],
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
        "lunar-overworld-big-whale--initial-to-hummingway-cave": {
            flags: PathFlags.STEPS,
            map: "2000-0",
            mapRange: [33, 36, 32, 32],
            segments: {
                "base-0": [
                    [64, 64, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [64, 40, SegmentFlags.VEHICLE],
                    [33, 40, SegmentFlags.END | SegmentFlags.VEHICLE],
                ],
            },
        },
        "lunar-overworld-big-whale--initial-to-lunar-path-landing": {
            flags: PathFlags.STEPS,
            map: "2000-0",
            mapRange: [58, 57, 32, 32],
            segments: {
                "base-0": [
                    [64, 64, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [85, 64, SegmentFlags.VEHICLE],
                    [85, 83, SegmentFlags.END | SegmentFlags.VEHICLE],
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
        "mt-ordeals--after-paladin": {
            flags: PathFlags.STEPS,
            map: "3084-1",
            segments: {
                "base-0": [
                    [19, 10, SegmentFlags.START],
                    [19, 12, SegmentFlags.NONE],
                    [14, 12, SegmentFlags.NONE],
                    [14, 18, SegmentFlags.NONE],
                    [17, 18, SegmentFlags.NONE],
                    [17, 23, SegmentFlags.NONE],
                    [11, 23, SegmentFlags.NONE],
                    [11, 24, SegmentFlags.NONE],
                    [10, 24, SegmentFlags.NONE],
                    [10, 28, SegmentFlags.NONE],
                    [17, 28, SegmentFlags.NONE],
                    [17, 30, SegmentFlags.NONE],
                    [20, 30, SegmentFlags.NONE],
                    [20, 31, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [11, 28, SegmentFlags.NONE],
                    [11, 27, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [17, 23, SegmentFlags.NONE],
                    [18, 23, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "mt-ordeals-3rd-station--after-paladin": {
            flags: PathFlags.STEPS,
            map: "3085-1",
            segments: {
                "base-0": [
                    [21, 8, SegmentFlags.START],
                    [18, 8, SegmentFlags.NONE],
                    [18, 17, SegmentFlags.NONE],
                    [8, 17, SegmentFlags.NONE],
                    [8, 24, SegmentFlags.NONE],
                    [10, 24, SegmentFlags.NONE],
                    [10, 23, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [18, 12, SegmentFlags.NONE],
                    [18, 11, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [18, 16, SegmentFlags.NONE],
                    [19, 16, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "mt-ordeals-7th-station--after-paladin": {
            flags: PathFlags.STEPS,
            map: "3086-0",
            segments: {
                "base-0": [
                    [11, 8, SegmentFlags.START],
                    [24, 8, SegmentFlags.NONE],
                    [24, 17, SegmentFlags.NONE],
                    [18, 17, SegmentFlags.NONE],
                    [18, 23, SegmentFlags.NONE],
                    [19, 23, SegmentFlags.NONE],
                    [19, 25, SegmentFlags.NONE],
                    [23, 25, SegmentFlags.NONE],
                    [23, 22, SegmentFlags.END],
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
        "mt-ordeals-summit--after-paladin": {
            flags: PathFlags.STEPS,
            map: "3087-0",
            segments: {
                "base-0": [
                    [25, 16, SegmentFlags.START],
                    [18, 16, SegmentFlags.NONE],
                    [18, 23, SegmentFlags.NONE],
                    [15, 23, SegmentFlags.NONE],
                    [15, 21, SegmentFlags.END],
                ],
            },
        },
        "mysidia--entrance-to-big-whale": {
            flags: PathFlags.NONE,
            map: "3003-1",
            segments: {
                "base-0": [
                    [16, 31, SegmentFlags.START],
                    [16, 28, SegmentFlags.END],
                ],
            },
        },
        "mysidia--entrance-to-house-of-wishes": {
            flags: PathFlags.NONE,
            map: "3003-0",
            segments: {
                "base-0": [
                    [16, 31, SegmentFlags.START],
                    [16, 8, SegmentFlags.END],
                ],
            },
        },
        "mysidia--house-of-wishes-to-serpent-road": {
            flags: PathFlags.NONE,
            map: "3003-0",
            segments: {
                "base-0": [
                    [16, 9, SegmentFlags.START],
                    [16, 20, SegmentFlags.NONE],
                    [19, 20, SegmentFlags.NONE],
                    [19, 19, SegmentFlags.NONE],
                    [25, 19, SegmentFlags.NONE],
                    [25, 17, SegmentFlags.END],
                ],
            },
        },
        "mysidia-house-of-wishes--after-mt-ordeals": {
            flags: PathFlags.NONE,
            map: "3016-0",
            segments: {
                "base-0": [
                    [14, 9, SegmentFlags.START],
                    [14, 6, SegmentFlags.END],
                ],
                "base-1": [
                    [14, 9, SegmentFlags.START],
                    [14, 12, SegmentFlags.END],
                ],
            },
        },
        "mysidia-serpent-road": {
            flags: PathFlags.STEPS,
            map: "3089-0",
            segments: {
                "base-0": [
                    [4, 7, SegmentFlags.START],
                    [4, 5, SegmentFlags.END],
                ],
            },
        },
        "old-water-way": {
            flags: PathFlags.STEPS,
            map: "303A-0",
            segments: {
                "base-0": [
                    [3, 4, SegmentFlags.START],
                    [3, 15, SegmentFlags.NONE],
                    [7, 15, SegmentFlags.NONE],
                    [7, 24, SegmentFlags.NONE],
                    [16, 24, SegmentFlags.NONE],
                    [16, 17, SegmentFlags.NONE],
                    [12, 17, SegmentFlags.NONE],
                    [12, 7, SegmentFlags.NONE],
                    [14, 7, SegmentFlags.NONE],
                    [14, 5, SegmentFlags.NONE],
                    [18, 5, SegmentFlags.NONE],
                    [18, 7, SegmentFlags.NONE],
                    [20, 7, SegmentFlags.NONE],
                    [20, 16, SegmentFlags.NONE],
                    [27, 16, SegmentFlags.NONE],
                    [27, 7, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [27, 12, SegmentFlags.NONE],
                    [28, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "old-water-way-antechamber": {
            flags: PathFlags.NONE,
            map: "3044-0",
            segments: {
                "base-0": [
                    [2, 6, SegmentFlags.START],
                    [2, 4, SegmentFlags.END],
                ],
            },
        },
        "overworld-agart--agart-to-castle-of-dwarves": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [89, 198, 32, 32],
            segments: {
                "base-0": [
                    [105, 216, SegmentFlags.START],
                    [105, 215, SegmentFlags.NONE],
                    [105, 212, SegmentFlags.START | SegmentFlags.END | SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-agart--castle-baron-to-agart": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [88, 187, 32, 32],
            segments: {
                "base-0": [
                    [102, 186, SegmentFlags.VEHICLE],
                    [102, 187, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 215, SegmentFlags.VEHICLE],
                    [105, 215, SegmentFlags.VEHICLE],
                    [105, 216, SegmentFlags.START | SegmentFlags.END],
                ],
                "extra-2-0": [
                    [105, 215, SegmentFlags.NONE],
                    [106, 215, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-airship--agart-to-castle-baron": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [88, 184, 32, 32],
            segments: {
                "base-0": [
                    [106, 212, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [102, 212, SegmentFlags.VEHICLE],
                    [102, 184, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 183, SegmentFlags.NONE | SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-airship--castle-baron-to-cave-eblana-a": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [86, 133, 32, 32],
            segments: {
                "base-0": [
                    [102, 155, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [102, 133, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 132, SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-airship--castle-baron-to-cave-eblana-b": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [95, 103, 32, 32],
            segments: {
                "base-0": [
                    [102, 135, SegmentFlags.VEHICLE],
                    [102, 134, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 119, SegmentFlags.VEHICLE],
                    [126, 119, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [127, 119, SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-airship--castle-baron-to-cave-eblana-c": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [127, 103, 32, 32],
            segments: {
                "base-0": [
                    [126, 119, SegmentFlags.VEHICLE],
                    [127, 119, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [151, 119, SegmentFlags.VEHICLE],
                    [151, 103, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [151, 102, SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-airship--castle-baron-to-cave-eblana-d": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [127, 72, 32, 32],
            segments: {
                "base-0": [
                    [151, 104, SegmentFlags.VEHICLE],
                    [151, 103, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [151, 72, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [151, 71, SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-airship--castle-baron-to-cave-eblana-e": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [127, 41, 32, 32],
            segments: {
                "base-0": [
                    [151, 73, SegmentFlags.VEHICLE],
                    [151, 72, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [151, 49, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [127, 49, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [126, 49, SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-airship--castle-baron-to-cave-eblana-f": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [96, 31, 32, 32],
            segments: {
                "base-0": [
                    [128, 49, SegmentFlags.VEHICLE],
                    [127, 49, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [96, 49, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [95, 49, SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-airship--castle-baron-to-cave-eblana-g": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [65, 31, 32, 32],
            segments: {
                "base-0": [
                    [97, 49, SegmentFlags.VEHICLE],
                    [96, 49, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [65, 49, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [64, 49, SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-airship--castle-baron-to-cave-eblana-h": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [34, 31, 32, 32],
            segments: {
                "base-0": [
                    [66, 49, SegmentFlags.VEHICLE],
                    [65, 49, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [34, 49, SegmentFlags.VEHICLE],
                    [34, 31, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [34, 30, SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-airship--castle-baron-to-cave-eblana-i": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [18, 0, 32, 32],
            segments: {
                "base-0": [
                    [34, 32, SegmentFlags.VEHICLE],
                    [34, 31, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [34, 0, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [34, -1, SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-airship--castle-baron-to-cave-eblana-j": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [18, 224, 32, 32],
            segments: {
                "base-0": [
                    [34, 256, SegmentFlags.VEHICLE],
                    [34, 255, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [34, 237, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [35, 237, SegmentFlags.END | SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-airship--castle-baron-to-toroian-castle-a": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [86, 127, 32, 32],
            segments: {
                "base-0": [
                    [102, 155, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [102, 127, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 126, SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-airship--castle-baron-to-toroian-castle-b": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [86, 96, 32, 32],
            segments: {
                "base-0": [
                    [102, 128, SegmentFlags.VEHICLE],
                    [102, 127, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 96, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 95, SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-airship--castle-baron-to-toroian-castle-c": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [86, 66, 32, 32],
            segments: {
                "base-0": [
                    [102, 98, SegmentFlags.VEHICLE],
                    [102, 96, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 83, SegmentFlags.VEHICLE],
                    [86, 83, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [85, 83, SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-airship--castle-baron-to-toroian-castle-d": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [55, 66, 32, 32],
            segments: {
                "base-0": [
                    [87, 83, SegmentFlags.VEHICLE],
                    [86, 83, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [55, 83, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [54, 83, SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-airship--underworld-to-mysidia": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [97, 189, 32, 32],
            segments: {
                "base-0": [
                    [106, 212, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [128, 212, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [129, 212, SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-baron--agart-to-castle-baron": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [86, 154, 32, 32],
            segments: {
                "base-0": [
                    [102, 186, SegmentFlags.VEHICLE],
                    [102, 184, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 158, SegmentFlags.VEHICLE],
                    [102, 157, SegmentFlags.START | SegmentFlags.END],
                ],
                "extra-2-0": [
                    [102, 158, SegmentFlags.NONE],
                    [101, 158, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "overworld-baron--castle-baron-to-agart": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [88, 155, 32, 32],
            segments: {
                "base-0": [
                    [102, 158, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [102, 186, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 187, SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-eblan": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [14, 219, 32, 32],
            segments: {
                "base-0": [
                    [35, 237, SegmentFlags.START],
                    [34, 237, SegmentFlags.NONE],
                    [34, 239, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [28, 239, SegmentFlags.VEHICLE],
                    [28, 237, SegmentFlags.VEHICLE],
                    [24, 237, SegmentFlags.VEHICLE],
                    [24, 232, SegmentFlags.VEHICLE],
                    [24, 231, SegmentFlags.START | SegmentFlags.END],
                ],
                "extra-2-0": [
                    [35, 237, SegmentFlags.NONE],
                    [36, 237, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-mt-ordeals--chocobos-forest-to-mysidia": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [183, 184, 32, 32],
            segments: {
                "base-0": [
                    [213, 209, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [211, 209, SegmentFlags.VEHICLE],
                    [211, 192, SegmentFlags.VEHICLE],
                    [183, 192, SegmentFlags.VEHICLE | SegmentFlags.END],
                    [182, 192, SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-mt-ordeals--mt-ordeals-to-chocobos-forest": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [199, 188, 32, 32],
            segments: {
                "base-0": [
                    [218, 200, SegmentFlags.START],
                    [218, 209, SegmentFlags.NONE],
                    [213, 209, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [218, 200, SegmentFlags.NONE],
                    [219, 200, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-mysidia--after-big-whale--fly": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [128, 189, 32, 32],
            segments: {
                "base-0": [
                    [153, 199, SegmentFlags.START],
                    [151, 199, SegmentFlags.VEHICLE],
                    [150, 199, SegmentFlags.START | SegmentFlags.END],
                ],
                "extra-2-0": [
                    [153, 199, SegmentFlags.NONE],
                    [153, 198, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-mysidia--after-big-whale--walk": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [128, 189, 32, 32],
            segments: {
                "base-0": [
                    [153, 199, SegmentFlags.START],
                    [150, 199, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [153, 199, SegmentFlags.NONE],
                    [153, 198, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-mysidia--before-big-whale": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [128, 189, 32, 32],
            segments: {
                "base-0": [
                    [127, 212, SegmentFlags.VEHICLE],
                    [128, 212, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [153, 212, SegmentFlags.VEHICLE],
                    [153, 199, SegmentFlags.VEHICLE],
                    [154, 199, SegmentFlags.START | SegmentFlags.END],
                ],
            },
        },
        "overworld-mysidia--chocobos-forest-to-mysidia": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [152, 185, 32, 32],
            segments: {
                "base-0": [
                    [184, 192, SegmentFlags.VEHICLE],
                    [183, 192, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [182, 192, SegmentFlags.VEHICLE],
                    [182, 211, SegmentFlags.VEHICLE],
                    [175, 211, SegmentFlags.VEHICLE],
                    [175, 203, SegmentFlags.VEHICLE],
                    [157, 203, SegmentFlags.VEHICLE],
                    [157, 199, SegmentFlags.VEHICLE],
                    [156, 199, SegmentFlags.VEHICLE],
                    [155, 199, SegmentFlags.START | SegmentFlags.END],
                ],
                "boundary-0": [
                    [160, 185, SegmentFlags.NONE],
                    [160, 216, SegmentFlags.NONE],
                ],
                "extra-2-0": [
                    [156, 199, SegmentFlags.NONE],
                    [156, 198, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-toroia--castle-baron-to-toroian-castle": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [24, 66, 32, 32],
            segments: {
                "base-0": [
                    [56, 83, SegmentFlags.VEHICLE],
                    [55, 83, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [36, 83, SegmentFlags.VEHICLE],
                    [36, 82, SegmentFlags.START],
                    [35, 82, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [36, 82, SegmentFlags.NONE],
                    [37, 82, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-toroia--cave-magnes-to-chocobos-village": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [58, 38, 32, 32],
            segments: {
                "base-0": [
                    [74, 53, SegmentFlags.START],
                    [74, 55, SegmentFlags.NONE],
                    [58, 55, SegmentFlags.VEHICLE | SegmentFlags.START | SegmentFlags.END],
                    [57, 55, SegmentFlags.VEHICLE],
                ],
                "extra-2-0": [
                    [74, 54, SegmentFlags.NONE],
                    [75, 54, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-toroia--chocobos-village-to-cave-magnes-a": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [33, 41, 32, 32],
            segments: {
                "base-0": [
                    [41, 53, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [41, 61, SegmentFlags.VEHICLE],
                    [64, 61, SegmentFlags.VEHICLE | SegmentFlags.END],
                    [65, 61, SegmentFlags.VEHICLE],
                ],
            },
        },
        "overworld-toroia--chocobos-village-to-cave-magnes-b": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [53, 42, 32, 32],
            segments: {
                "base-0": [
                    [52, 61, SegmentFlags.VEHICLE],
                    [64, 61, SegmentFlags.VEHICLE | SegmentFlags.END],
                    [68, 61, SegmentFlags.VEHICLE],
                    [68, 56, SegmentFlags.VEHICLE],
                    [74, 56, SegmentFlags.VEHICLE],
                    [74, 55, SegmentFlags.VEHICLE],
                    [74, 53, SegmentFlags.START | SegmentFlags.END],
                ],
                "extra-2-0": [
                    [74, 54, SegmentFlags.NONE],
                    [75, 54, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "overworld-toroia--chocobos-village-to-toroian-castle": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [23, 52, 32, 32],
            segments: {
                "base-0": [
                    [41, 53, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [41, 61, SegmentFlags.VEHICLE],
                    [43, 61, SegmentFlags.VEHICLE],
                    [43, 81, SegmentFlags.VEHICLE],
                    [36, 81, SegmentFlags.VEHICLE],
                    [35, 81, SegmentFlags.START | SegmentFlags.END],
                ],
            },
        },
        "overworld-toroia--toroian-castle-to-chocobos-village": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [23, 52, 32, 32],
            segments: {
                "base-0": [
                    [35, 82, SegmentFlags.START],
                    [35, 70, SegmentFlags.NONE],
                    [43, 70, SegmentFlags.NONE],
                    [43, 54, SegmentFlags.NONE],
                    [41, 54, SegmentFlags.NONE],
                    [41, 53, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [43, 70, SegmentFlags.NONE],
                    [44, 70, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "optional-1-0": [
                    [35, 82, SegmentFlags.NONE],
                    [36, 82, SegmentFlags.NONE | SegmentFlags.ANNOTATE],
                    [36, 70, SegmentFlags.NONE],
                ],
            },
        },
        "overworld-toroia--toroian-castle-to-tower-of-zot": {
            flags: PathFlags.STEPS,
            map: "0000-0",
            mapRange: [20, 67, 32, 32],
            segments: {
                "base-0": [
                    [35, 81, SegmentFlags.START],
                    [35, 83, SegmentFlags.NONE],
                    [36, 83, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [36, 82, SegmentFlags.NONE],
                    [37, 82, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "optional-1-0": [
                    [35, 82, SegmentFlags.NONE],
                    [36, 82, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [36, 83, SegmentFlags.NONE],
                ],
                "optional-2-0": [
                    [35, 81, SegmentFlags.NONE],
                    [36, 81, SegmentFlags.ANNOTATE],
                    [36, 83, SegmentFlags.NONE],
                ],
            },
        },
        "pass-to-babil-north--east-side--after-save-room": {
            flags: PathFlags.STEPS,
            map: "30CA-0",
            segments: {
                "base-0": [
                    [29, 23, SegmentFlags.START],
                    [29, 24, SegmentFlags.NONE],
                    [27, 24, SegmentFlags.NONE],
                    [27, 18, SegmentFlags.NONE],
                    [26, 18, SegmentFlags.NONE],
                    [26, 12, SegmentFlags.NONE],
                    [27, 12, SegmentFlags.NONE],
                    [27, 8, SegmentFlags.NONE],
                    [24, 8, SegmentFlags.END],
                ],
                "base-1": [
                    [22, 6, SegmentFlags.START],
                    [22, 2, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [27, 8, SegmentFlags.NONE],
                    [28, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-1": [
                    [22, 4, SegmentFlags.NONE],
                    [23, 4, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "pass-to-babil-north--east-side--before-save-room": {
            flags: PathFlags.STEPS,
            map: "30CA-0",
            segments: {
                "alternate-0": [
                    [27, 24, SegmentFlags.NONE],
                    [29, 24, SegmentFlags.NONE],
                    [29, 23, SegmentFlags.END],
                ],
                "base-0": [
                    [26, 25, SegmentFlags.START],
                    [26, 24, SegmentFlags.NONE],
                    [27, 24, SegmentFlags.NONE],
                ],
                "extra-2-0": [
                    [29, 24, SegmentFlags.NONE],
                    [30, 24, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "pass-to-babil-north--east-side--direct": {
            flags: PathFlags.STEPS,
            map: "30CA-0",
            segments: {
                "base-0": [
                    [26, 25, SegmentFlags.START],
                    [26, 24, SegmentFlags.NONE],
                    [27, 24, SegmentFlags.NONE],
                    [27, 18, SegmentFlags.NONE],
                    [26, 18, SegmentFlags.NONE],
                    [26, 12, SegmentFlags.NONE],
                    [27, 12, SegmentFlags.NONE],
                    [27, 8, SegmentFlags.NONE],
                    [24, 8, SegmentFlags.END],
                ],
                "base-1": [
                    [22, 6, SegmentFlags.START],
                    [22, 2, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [27, 8, SegmentFlags.NONE],
                    [28, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-1": [
                    [22, 4, SegmentFlags.NONE],
                    [23, 4, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "pass-to-babil-north--west-side": {
            flags: PathFlags.STEPS,
            map: "30CA-0",
            segments: {
                "base-0": [
                    [3, 27, SegmentFlags.START],
                    [3, 25, SegmentFlags.NONE],
                    [2, 25, SegmentFlags.NONE],
                    [2, 20, SegmentFlags.NONE],
                    [6, 20, SegmentFlags.NONE],
                    [6, 17, SegmentFlags.NONE],
                    [12, 17, SegmentFlags.NONE],
                    [12, 18, SegmentFlags.NONE],
                    [13, 18, SegmentFlags.NONE],
                    [13, 24, SegmentFlags.NONE],
                    [11, 24, SegmentFlags.NONE],
                    [11, 27, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [13, 23, SegmentFlags.NONE],
                    [12, 23, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "pass-to-babil-north-save-room": {
            flags: PathFlags.STEPS,
            map: "30CD-0",
            segments: {
                "base-0": [
                    [4, 11, SegmentFlags.START],
                    [4, 12, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [4, 11, SegmentFlags.NONE],
                    [4, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "pass-to-babil-south--east-side": {
            flags: PathFlags.STEPS,
            map: "30C9-0",
            segments: {
                "base-0": [
                    [15, 8, SegmentFlags.START],
                    [15, 20, SegmentFlags.NONE],
                    [22, 20, SegmentFlags.NONE],
                    [22, 28, SegmentFlags.NONE],
                    [24, 28, SegmentFlags.NONE],
                    [24, 29, SegmentFlags.NONE],
                    [26, 29, SegmentFlags.NONE],
                    [26, 17, SegmentFlags.NONE],
                    [25, 17, SegmentFlags.NONE],
                    [25, 15, SegmentFlags.NONE],
                    [23, 15, SegmentFlags.NONE],
                    [23, 7, SegmentFlags.NONE],
                    [22, 7, SegmentFlags.NONE],
                    [22, 5, SegmentFlags.NONE],
                    [25, 5, SegmentFlags.NONE],
                    [25, 3, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [25, 5, SegmentFlags.NONE],
                    [26, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "pass-to-babil-south--west-side": {
            flags: PathFlags.STEPS,
            map: "30C9-0",
            segments: {
                "base-0": [
                    [7, 29, SegmentFlags.START],
                    [7, 28, SegmentFlags.NONE],
                    [4, 28, SegmentFlags.NONE],
                    [4, 25, SegmentFlags.NONE],
                    [2, 25, SegmentFlags.NONE],
                    [2, 22, SegmentFlags.NONE],
                    [1, 22, SegmentFlags.NONE],
                    [1, 18, SegmentFlags.NONE],
                    [2, 18, SegmentFlags.NONE],
                    [2, 11, SegmentFlags.NONE],
                    [6, 11, SegmentFlags.NONE],
                    [6, 8, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [6, 11, SegmentFlags.NONE],
                    [6, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "sealed-cave": {
            flags: PathFlags.STEPS,
            map: "3144-0",
            segments: {
                "base-0": [
                    [4, 10, SegmentFlags.START],
                    [4, 4, SegmentFlags.END],
                ],
                "base-1": [
                    [4, 8, SegmentFlags.START],
                    [4, 11, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [4, 9, SegmentFlags.NONE],
                    [5, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "toroian-castle--1f-to-infirmary": {
            flags: PathFlags.NONE,
            map: "3027-0",
            segments: {
                "base-0": [
                    [7, 5, SegmentFlags.START],
                    [6, 5, SegmentFlags.NONE],
                    [6, 12, SegmentFlags.NONE],
                    [9, 12, SegmentFlags.NONE],
                    [9, 11, SegmentFlags.END],
                ],
            },
        },
        "toroian-castle--entrance-to-1f": {
            flags: PathFlags.NONE,
            map: "3027-0",
            segments: {
                "base-0": [
                    [16, 29, SegmentFlags.START],
                    [16, 10, SegmentFlags.END],
                ],
            },
        },
        "toroian-castle-1f--after-cave-magnes--direct": {
            flags: PathFlags.STEPS,
            map: "3055-0",
            segments: {
                "base-0": [
                    [9, 17, SegmentFlags.START],
                    [9, 0, SegmentFlags.END],
                ],
            },
        },
        "toroian-castle-1f--after-cave-magnes--extra-step-area": {
            flags: PathFlags.STEPS,
            map: "3055-0",
            segments: {
                "base-0": [
                    [9, 17, SegmentFlags.START],
                    [9, 7, SegmentFlags.NONE],
                    [7, 7, SegmentFlags.RETURN],
                    [9, 7, SegmentFlags.NONE],
                    [9, 0, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [7, 7, SegmentFlags.NONE],
                    [6, 7, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
                "optional-1-0": [
                    [9, 8, SegmentFlags.NONE],
                    [7, 8, SegmentFlags.NONE | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [7, 7, SegmentFlags.NONE],
                ],
                "optional-2-0": [
                    [9, 9, SegmentFlags.NONE],
                    [7, 9, SegmentFlags.NONE | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [7, 7, SegmentFlags.NONE],
                ],
                "optional-3-0": [
                    [9, 10, SegmentFlags.NONE],
                    [7, 10, SegmentFlags.NONE | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [7, 7, SegmentFlags.NONE],
                ],
            },
        },
        "toroian-castle-1f--before-cave-magnes": {
            flags: PathFlags.STEPS,
            map: "3055-0",
            segments: {
                "base-0": [
                    [9, 17, SegmentFlags.START],
                    [9, 7, SegmentFlags.NONE],
                    [2, 7, SegmentFlags.NONE],
                    [2, 10, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [2, 7, SegmentFlags.NONE],
                    [1, 7, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
                "optional-1-0": [
                    [9, 8, SegmentFlags.NONE],
                    [7, 8, SegmentFlags.NONE | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [7, 7, SegmentFlags.NONE],
                ],
                "optional-2-0": [
                    [9, 9, SegmentFlags.NONE],
                    [7, 9, SegmentFlags.NONE | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [7, 7, SegmentFlags.NONE],
                ],
                "optional-3-0": [
                    [9, 10, SegmentFlags.NONE],
                    [7, 10, SegmentFlags.NONE | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [7, 7, SegmentFlags.NONE],
                ],
            },
        },
        "toroian-castle-2f": {
            flags: PathFlags.STEPS,
            map: "3056-0",
            segments: {
                "base-0": [
                    [5, 18, SegmentFlags.START],
                    [5, 16, SegmentFlags.END],
                ],
            },
        },
        "toroian-castle-infirmary": {
            flags: PathFlags.STEPS,
            map: "3058-0",
            segments: {
                "base-0": [
                    [2, 5, SegmentFlags.START],
                    [3, 5, SegmentFlags.NONE],
                    [3, 3, SegmentFlags.NONE],
                    [8, 3, SegmentFlags.NONE],
                    [8, 4, SegmentFlags.END],
                ],
            },
        },
        "tower-of-babil-1f--after-dark-imps": {
            flags: PathFlags.STEPS,
            map: "3121-0",
            segments: {
                "base-0": [
                    [15, 5, SegmentFlags.START],
                    [15, 21, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [15, 10, SegmentFlags.NONE],
                    [16, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-1f--before-lugae": {
            flags: PathFlags.STEPS,
            map: "3121-0",
            segments: {
                "base-0": [
                    [15, 24, SegmentFlags.START],
                    [15, 4, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [15, 20, SegmentFlags.NONE],
                    [15, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [15, 10, SegmentFlags.NONE],
                    [16, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-1f-upper": {
            flags: PathFlags.STEPS,
            map: "30A7-0",
            segments: {
                "base-0": [
                    [28, 17, SegmentFlags.START],
                    [28, 6, SegmentFlags.END],
                ],
                "base-1": [
                    [25, 6, SegmentFlags.START],
                    [22, 6, SegmentFlags.NONE],
                    [22, 10, SegmentFlags.NONE],
                    [14, 10, SegmentFlags.NONE],
                    [14, 6, SegmentFlags.NONE],
                    [12, 6, SegmentFlags.NONE],
                    [12, 4, SegmentFlags.NONE],
                    [6, 4, SegmentFlags.NONE],
                    [6, 5, SegmentFlags.NONE],
                    [4, 5, SegmentFlags.NONE],
                    [4, 6, SegmentFlags.NONE],
                    [3, 6, SegmentFlags.NONE],
                    [3, 10, SegmentFlags.NONE],
                    [7, 10, SegmentFlags.NONE],
                    [7, 13, SegmentFlags.NONE],
                    [5, 13, SegmentFlags.NONE],
                    [5, 21, SegmentFlags.NONE],
                    [12, 21, SegmentFlags.NONE],
                    [12, 20, SegmentFlags.NONE],
                    [21, 20, SegmentFlags.NONE],
                    [21, 19, SegmentFlags.END],
                ],
                "extra-2-1": [
                    [21, 20, SegmentFlags.NONE],
                    [22, 20, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-2f--after-dark-imps": {
            flags: PathFlags.STEPS,
            map: "3122-0",
            segments: {
                "base-0": [
                    [16, 14, SegmentFlags.START],
                    [17, 14, SegmentFlags.NONE],
                    [17, 17, SegmentFlags.NONE],
                    [18, 17, SegmentFlags.NONE],
                    [18, 23, SegmentFlags.NONE],
                    [12, 23, SegmentFlags.NONE],
                    [12, 6, SegmentFlags.NONE],
                    [15, 6, SegmentFlags.NONE],
                    [15, 4, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [15, 5, SegmentFlags.NONE],
                    [16, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-2f--before-lugae": {
            flags: PathFlags.STEPS,
            map: "3122-0",
            segments: {
                "base-0": [
                    [15, 5, SegmentFlags.START],
                    [15, 6, SegmentFlags.NONE],
                    [12, 6, SegmentFlags.NONE],
                    [12, 23, SegmentFlags.NONE],
                    [18, 23, SegmentFlags.NONE],
                    [18, 17, SegmentFlags.NONE],
                    [17, 17, SegmentFlags.NONE],
                    [17, 16, SegmentFlags.NONE],
                    [16, 16, SegmentFlags.NONE],
                    [16, 13, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [16, 14, SegmentFlags.NONE],
                    [17, 14, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-3f--after-dark-imps": {
            flags: PathFlags.STEPS,
            map: "3123-0",
            segments: {
                "base-0": [
                    [12, 20, SegmentFlags.START],
                    [7, 20, SegmentFlags.NONE],
                    [7, 17, SegmentFlags.NONE],
                    [6, 17, SegmentFlags.NONE],
                    [6, 10, SegmentFlags.NONE],
                    [8, 10, SegmentFlags.NONE],
                    [8, 7, SegmentFlags.NONE],
                    [9, 7, SegmentFlags.NONE],
                    [9, 6, SegmentFlags.NONE],
                    [13, 6, SegmentFlags.NONE],
                    [13, 5, SegmentFlags.NONE],
                    [19, 5, SegmentFlags.NONE],
                    [19, 6, SegmentFlags.NONE],
                    [21, 6, SegmentFlags.NONE],
                    [21, 14, SegmentFlags.NONE],
                    [16, 14, SegmentFlags.NONE],
                    [16, 13, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [16, 14, SegmentFlags.NONE],
                    [15, 14, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "tower-of-babil-3f--before-lugae": {
            flags: PathFlags.STEPS,
            map: "3123-0",
            segments: {
                "base-0": [
                    [16, 14, SegmentFlags.START],
                    [21, 14, SegmentFlags.NONE],
                    [21, 6, SegmentFlags.NONE],
                    [19, 6, SegmentFlags.NONE],
                    [19, 5, SegmentFlags.NONE],
                    [13, 5, SegmentFlags.NONE],
                    [13, 10, SegmentFlags.RETURN],
                    [13, 6, SegmentFlags.NONE],
                    [9, 6, SegmentFlags.NONE],
                    [9, 7, SegmentFlags.NONE],
                    [8, 7, SegmentFlags.NONE],
                    [8, 10, SegmentFlags.NONE],
                    [6, 10, SegmentFlags.NONE],
                    [6, 19, SegmentFlags.NONE],
                    [7, 19, SegmentFlags.NONE],
                    [7, 20, SegmentFlags.NONE],
                    [12, 20, SegmentFlags.NONE],
                    [12, 19, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [12, 20, SegmentFlags.NONE],
                    [13, 20, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-4f--after-dark-imps": {
            flags: PathFlags.STEPS,
            map: "3124-0",
            segments: {
                "base-0": [
                    [3, 9, SegmentFlags.START],
                    [6, 9, SegmentFlags.NONE],
                    [6, 7, SegmentFlags.NONE],
                    [10, 7, SegmentFlags.NONE],
                    [10, 6, SegmentFlags.NONE],
                    [21, 6, SegmentFlags.NONE],
                    [21, 4, SegmentFlags.NONE],
                    [24, 4, SegmentFlags.NONE],
                    [24, 10, SegmentFlags.NONE],
                    [8, 10, SegmentFlags.NONE],
                    [8, 20, SegmentFlags.NONE],
                    [12, 20, SegmentFlags.NONE],
                    [12, 19, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [12, 20, SegmentFlags.NONE],
                    [12, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-4f--before-lugae--after-save-room": {
            flags: PathFlags.STEPS,
            map: "3124-0",
            segments: {
                "base-0": [
                    [6, 19, SegmentFlags.START],
                    [6, 20, SegmentFlags.NONE],
                    [8, 20, SegmentFlags.NONE],
                    [8, 10, SegmentFlags.NONE],
                    [24, 10, SegmentFlags.NONE],
                    [24, 4, SegmentFlags.NONE],
                    [21, 4, SegmentFlags.NONE],
                    [21, 6, SegmentFlags.NONE],
                    [7, 6, SegmentFlags.NONE],
                    [7, 7, SegmentFlags.NONE],
                    [6, 7, SegmentFlags.NONE],
                    [6, 9, SegmentFlags.NONE],
                    [3, 9, SegmentFlags.NONE],
                    [3, 8, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [3, 9, SegmentFlags.NONE],
                    [3, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-4f--before-lugae--before-save-room": {
            flags: PathFlags.STEPS,
            map: "3124-0",
            segments: {
                "base-0": [
                    [12, 20, SegmentFlags.START],
                    [6, 20, SegmentFlags.NONE],
                    [6, 19, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [6, 20, SegmentFlags.NONE],
                    [6, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "tower-of-babil-4f-save-room": {
            flags: PathFlags.NONE,
            map: "3114-0",
            segments: {
                "base-0": [
                    [4, 7, SegmentFlags.START],
                    [4, 5, SegmentFlags.RETURN],
                    [4, 8, SegmentFlags.END],
                ],
            },
        },
        "tower-of-babil-5f--after-dark-imps": {
            flags: PathFlags.STEPS,
            map: "3125-0",
            segments: {
                "base-0": [
                    [16, 10, SegmentFlags.START],
                    [16, 24, SegmentFlags.NONE],
                    [7, 24, SegmentFlags.NONE],
                    [7, 22, SegmentFlags.NONE],
                    [2, 22, SegmentFlags.NONE],
                    [2, 9, SegmentFlags.NONE],
                    [3, 9, SegmentFlags.NONE],
                    [3, 8, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [3, 9, SegmentFlags.NONE],
                    [4, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-5f--before-dark-imps": {
            flags: PathFlags.STEPS,
            map: "3125-0",
            segments: {
                "base-0": [
                    [25, 5, SegmentFlags.START],
                    [25, 22, SegmentFlags.NONE],
                    [23, 22, SegmentFlags.NONE],
                    [23, 24, SegmentFlags.NONE],
                    [16, 24, SegmentFlags.NONE],
                    [16, 10, SegmentFlags.END],
                    [16, 9, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [16, 18, SegmentFlags.NONE],
                    [17, 18, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-5f--before-lugae": {
            flags: PathFlags.STEPS,
            map: "3125-0",
            segments: {
                "base-0": [
                    [3, 9, SegmentFlags.START],
                    [2, 9, SegmentFlags.NONE],
                    [2, 22, SegmentFlags.NONE],
                    [9, 22, SegmentFlags.NONE],
                    [9, 24, SegmentFlags.NONE],
                    [23, 24, SegmentFlags.NONE],
                    [23, 19, SegmentFlags.NONE],
                    [25, 19, SegmentFlags.NONE],
                    [25, 5, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [25, 6, SegmentFlags.NONE],
                    [26, 6, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-5f-super-cannon": {
            flags: PathFlags.STEPS,
            map: "312D-0",
            segments: {
                "base-0": [
                    [5, 11, SegmentFlags.START],
                    [5, 10, SegmentFlags.END],
                ],
            },
        },
        "tower-of-babil-6f--after-lugae": {
            flags: PathFlags.STEPS,
            map: "3126-0",
            segments: {
                "base-0": [
                    [14, 4, SegmentFlags.START],
                    [14, 6, SegmentFlags.NONE],
                    [25, 6, SegmentFlags.NONE],
                    [25, 5, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [25, 6, SegmentFlags.NONE],
                    [26, 6, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-6f--before-lugae": {
            flags: PathFlags.STEPS,
            map: "3126-0",
            segments: {
                "base-0": [
                    [25, 6, SegmentFlags.START],
                    [14, 6, SegmentFlags.NONE],
                    [14, 4, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [14, 5, SegmentFlags.NONE],
                    [15, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-6f-revisit": {
            flags: PathFlags.STEPS,
            map: "311F-0",
            segments: {
                "base-0": [
                    [10, 5, SegmentFlags.START],
                    [10, 10, SegmentFlags.NONE],
                    [12, 10, SegmentFlags.NONE],
                    [12, 11, SegmentFlags.NONE],
                    [16, 11, SegmentFlags.NONE],
                    [16, 12, SegmentFlags.NONE],
                    [19, 12, SegmentFlags.NONE],
                    [19, 13, SegmentFlags.NONE],
                    [21, 13, SegmentFlags.NONE],
                    [21, 27, SegmentFlags.NONE],
                    [9, 27, SegmentFlags.NONE],
                    [9, 21, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [18, 27, SegmentFlags.NONE],
                    [18, 26, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-7f--after-lugae": {
            flags: PathFlags.STEPS,
            map: "3127-0",
            segments: {
                "base-0": [
                    [29, 16, SegmentFlags.START],
                    [29, 19, SegmentFlags.NONE],
                    [26, 19, SegmentFlags.NONE],
                    [26, 25, SegmentFlags.NONE],
                    [21, 25, SegmentFlags.NONE],
                    [21, 14, SegmentFlags.NONE],
                    [17, 14, SegmentFlags.NONE],
                    [17, 11, SegmentFlags.NONE],
                    [14, 11, SegmentFlags.NONE],
                    [14, 4, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [14, 5, SegmentFlags.NONE],
                    [15, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-7f--before-lugae": {
            flags: PathFlags.STEPS,
            map: "3127-0",
            segments: {
                "base-0": [
                    [14, 5, SegmentFlags.START],
                    [18, 5, SegmentFlags.NONE],
                    [18, 15, SegmentFlags.NONE],
                    [21, 15, SegmentFlags.NONE],
                    [21, 25, SegmentFlags.NONE],
                    [27, 25, SegmentFlags.NONE],
                    [27, 18, SegmentFlags.NONE],
                    [29, 18, SegmentFlags.NONE],
                    [29, 16, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [29, 17, SegmentFlags.NONE],
                    [30, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-7f-revisit": {
            flags: PathFlags.STEPS,
            map: "311E-0",
            segments: {
                "base-0": [
                    [2, 21, SegmentFlags.START],
                    [7, 21, SegmentFlags.NONE],
                    [7, 12, SegmentFlags.NONE],
                    [10, 12, SegmentFlags.NONE],
                    [10, 4, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [10, 5, SegmentFlags.NONE],
                    [11, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-8f--after-lugae": {
            flags: PathFlags.STEPS,
            map: "3128-1",
            segments: {
                "base-0": [
                    [16, 19, SegmentFlags.START],
                    [16, 25, SegmentFlags.NONE],
                    [28, 25, SegmentFlags.NONE],
                    [28, 17, SegmentFlags.NONE],
                    [29, 17, SegmentFlags.NONE],
                    [29, 16, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [16, 20, SegmentFlags.NONE],
                    [17, 20, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [29, 17, SegmentFlags.NONE],
                    [30, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-8f--before-lugae": {
            flags: PathFlags.STEPS,
            map: "3128-0",
            segments: {
                "base-0": [
                    [29, 17, SegmentFlags.START],
                    [25, 17, SegmentFlags.NONE],
                    [25, 25, SegmentFlags.NONE],
                    [16, 25, SegmentFlags.NONE],
                    [16, 20, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [16, 24, SegmentFlags.NONE],
                    [17, 24, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-8f-revisit": {
            flags: PathFlags.STEPS,
            map: "311D-0",
            segments: {
                "base-0": [
                    [6, 9, SegmentFlags.START],
                    [6, 21, SegmentFlags.NONE],
                    [2, 21, SegmentFlags.NONE],
                    [2, 20, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [2, 21, SegmentFlags.NONE],
                    [1, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "tower-of-babil-b2f": {
            flags: PathFlags.STEPS,
            map: "30A8-0",
            segments: {
                "base-0": [
                    [21, 20, SegmentFlags.START],
                    [27, 20, SegmentFlags.NONE],
                    [27, 8, SegmentFlags.NONE],
                    [25, 8, SegmentFlags.NONE],
                    [25, 6, SegmentFlags.NONE],
                    [24, 6, SegmentFlags.NONE],
                    [24, 5, SegmentFlags.NONE],
                    [22, 5, SegmentFlags.NONE],
                    [22, 4, SegmentFlags.NONE],
                    [16, 4, SegmentFlags.NONE],
                    [16, 6, SegmentFlags.NONE],
                    [12, 6, SegmentFlags.NONE],
                    [12, 4, SegmentFlags.NONE],
                    [6, 4, SegmentFlags.NONE],
                    [6, 5, SegmentFlags.NONE],
                    [4, 5, SegmentFlags.NONE],
                    [4, 6, SegmentFlags.NONE],
                    [3, 6, SegmentFlags.NONE],
                    [3, 8, SegmentFlags.NONE],
                    [1, 8, SegmentFlags.NONE],
                    [1, 20, SegmentFlags.NONE],
                    [7, 20, SegmentFlags.NONE],
                    [7, 19, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [7, 20, SegmentFlags.NONE],
                    [8, 20, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-b3f--north--after-save-room": {
            flags: PathFlags.STEPS,
            map: "30A9-0",
            segments: {
                "base-0": [
                    [20, 9, SegmentFlags.START],
                    [20, 10, SegmentFlags.NONE],
                    [24, 10, SegmentFlags.NONE],
                    [24, 7, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [24, 8, SegmentFlags.NONE],
                    [25, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-b3f--north--before-save-room": {
            flags: PathFlags.STEPS,
            map: "30A9-0",
            segments: {
                "base-0": [
                    [2, 8, SegmentFlags.START],
                    [5, 8, SegmentFlags.NONE],
                    [5, 4, SegmentFlags.NONE],
                    [8, 4, SegmentFlags.NONE],
                    [8, 10, SegmentFlags.NONE],
                    [10, 10, SegmentFlags.NONE],
                    [10, 6, SegmentFlags.NONE],
                    [17, 6, SegmentFlags.NONE],
                    [17, 10, SegmentFlags.NONE],
                    [20, 10, SegmentFlags.NONE],
                    [20, 9, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [20, 10, SegmentFlags.NONE],
                    [21, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-b3f--south": {
            flags: PathFlags.STEPS,
            map: "30A9-0",
            segments: {
                "base-0": [
                    [6, 20, SegmentFlags.START],
                    [6, 26, SegmentFlags.NONE],
                    [13, 26, SegmentFlags.NONE],
                    [13, 25, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [13, 26, SegmentFlags.NONE],
                    [14, 26, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-b3f-save-room": {
            flags: PathFlags.NONE,
            map: "30A6-0",
            segments: {
                "base-0": [
                    [4, 10, SegmentFlags.START],
                    [4, 7, SegmentFlags.RETURN],
                    [4, 11, SegmentFlags.END],
                ],
            },
        },
        "tower-of-babil-b4f--north": {
            flags: PathFlags.STEPS,
            map: "30AA-0",
            segments: {
                "base-0": [
                    [23, 8, SegmentFlags.START],
                    [20, 8, SegmentFlags.NONE],
                    [20, 7, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [20, 8, SegmentFlags.NONE],
                    [19, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "tower-of-babil-b4f--south": {
            flags: PathFlags.STEPS,
            map: "30AA-0",
            segments: {
                "base-0": [
                    [14, 26, SegmentFlags.START],
                    [20, 26, SegmentFlags.NONE],
                    [20, 24, SegmentFlags.NONE],
                    [23, 24, SegmentFlags.NONE],
                    [23, 14, SegmentFlags.NONE],
                    [16, 14, SegmentFlags.NONE],
                    [16, 6, SegmentFlags.NONE],
                    [11, 6, SegmentFlags.NONE],
                    [11, 11, SegmentFlags.NONE],
                    [10, 11, SegmentFlags.NONE],
                    [10, 16, SegmentFlags.NONE],
                    [3, 16, SegmentFlags.NONE],
                    [3, 7, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [10, 16, SegmentFlags.NONE],
                    [11, 16, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-b5f": {
            flags: PathFlags.STEPS,
            map: "30AC-0",
            segments: {
                "base-0": [
                    [22, 8, SegmentFlags.START],
                    [21, 8, SegmentFlags.NONE],
                    [21, 24, SegmentFlags.NONE],
                    [14, 24, SegmentFlags.NONE],
                    [14, 20, SegmentFlags.END],
                ],
                "base-1": [
                    [14, 17, SegmentFlags.START],
                    [14, 15, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [14, 24, SegmentFlags.NONE],
                    [13, 24, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
                "extra-2-1": [
                    [14, 17, SegmentFlags.NONE],
                    [15, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-babil-crystal-room": {
            flags: PathFlags.STEPS,
            map: "30AB-0",
            segments: {
                "base-0": [
                    [16, 22, SegmentFlags.START],
                    [16, 20, SegmentFlags.END],
                ],
            },
        },
        "tower-of-zot-1f": {
            flags: PathFlags.STEPS,
            map: "3098-0",
            segments: {
                "base-0": [
                    [15, 24, SegmentFlags.START],
                    [17, 24, SegmentFlags.NONE],
                    [17, 26, SegmentFlags.NONE],
                    [28, 26, SegmentFlags.NONE],
                    [28, 5, SegmentFlags.NONE],
                    [26, 5, SegmentFlags.NONE],
                    [26, 4, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [26, 5, SegmentFlags.NONE],
                    [26, 6, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-zot-2f": {
            flags: PathFlags.STEPS,
            map: "3099-0",
            segments: {
                "base-0": [
                    [26, 5, SegmentFlags.START],
                    [26, 14, SegmentFlags.NONE],
                    [19, 14, SegmentFlags.NONE],
                    [19, 21, SegmentFlags.NONE],
                    [17, 21, SegmentFlags.NONE],
                    [17, 27, SegmentFlags.NONE],
                    [8, 27, SegmentFlags.NONE],
                    [8, 15, SegmentFlags.RETURN],
                    [8, 20, SegmentFlags.NONE],
                    [2, 20, SegmentFlags.NONE],
                    [2, 13, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [8, 19, SegmentFlags.NONE],
                    [9, 19, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-1": [
                    [2, 18, SegmentFlags.NONE],
                    [1, 18, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "tower-of-zot-3f": {
            flags: PathFlags.STEPS,
            map: "309A-0",
            segments: {
                "base-0": [
                    [2, 14, SegmentFlags.START],
                    [1, 14, SegmentFlags.NONE],
                    [1, 22, SegmentFlags.NONE],
                    [5, 22, SegmentFlags.NONE],
                    [5, 26, SegmentFlags.NONE],
                    [12, 26, SegmentFlags.NONE],
                    [12, 24, SegmentFlags.NONE],
                    [18, 24, SegmentFlags.NONE],
                    [18, 25, SegmentFlags.NONE],
                    [22, 25, SegmentFlags.NONE],
                    [22, 24, SegmentFlags.NONE],
                    [23, 24, SegmentFlags.NONE],
                    [23, 22, SegmentFlags.NONE],
                    [24, 22, SegmentFlags.NONE],
                    [24, 9, SegmentFlags.NONE],
                    [22, 9, SegmentFlags.NONE],
                    [22, 7, SegmentFlags.NONE],
                    [21, 7, SegmentFlags.NONE],
                    [21, 5, SegmentFlags.NONE],
                    [20, 5, SegmentFlags.NONE],
                    [20, 4, SegmentFlags.NONE],
                    [5, 4, SegmentFlags.NONE],
                    [5, 8, SegmentFlags.NONE],
                    [2, 8, SegmentFlags.NONE],
                    [2, 7, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [2, 8, SegmentFlags.NONE],
                    [1, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "tower-of-zot-4f": {
            flags: PathFlags.STEPS,
            map: "309C-0",
            segments: {
                "base-0": [
                    [5, 5, SegmentFlags.START],
                    [4, 5, SegmentFlags.NONE],
                    [4, 8, SegmentFlags.NONE],
                    [1, 8, SegmentFlags.NONE],
                    [1, 21, SegmentFlags.NONE],
                    [2, 21, SegmentFlags.NONE],
                    [2, 22, SegmentFlags.NONE],
                    [3, 22, SegmentFlags.NONE],
                    [3, 23, SegmentFlags.NONE],
                    [4, 23, SegmentFlags.NONE],
                    [4, 24, SegmentFlags.NONE],
                    [5, 24, SegmentFlags.NONE],
                    [5, 25, SegmentFlags.NONE],
                    [12, 25, SegmentFlags.NONE],
                    [12, 23, SegmentFlags.NONE],
                    [20, 23, SegmentFlags.NONE],
                    [20, 25, SegmentFlags.NONE],
                    [24, 25, SegmentFlags.NONE],
                    [24, 15, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [5, 5, SegmentFlags.NONE],
                    [6, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-zot-5f--after-save-room": {
            flags: PathFlags.STEPS,
            map: "309D-0",
            segments: {
                "base-0": [
                    [22, 21, SegmentFlags.START],
                    [22, 22, SegmentFlags.NONE],
                    [19, 22, SegmentFlags.NONE],
                    [19, 19, SegmentFlags.NONE],
                    [15, 19, SegmentFlags.NONE],
                    [15, 17, SegmentFlags.END],
                ],
                "base-1": [
                    [15, 17, SegmentFlags.NONE],
                    [15, 15, SegmentFlags.END],
                ],
                "extra-1-1": [
                    [15, 17, SegmentFlags.NONE],
                    [16, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [15, 19, SegmentFlags.NONE],
                    [15, 20, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
                "extra-2-1": [
                    [15, 16, SegmentFlags.NONE],
                    [16, 16, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-zot-5f--before-save-room": {
            flags: PathFlags.STEPS,
            map: "309D-0",
            segments: {
                "base-0": [
                    [24, 14, SegmentFlags.START],
                    [25, 14, SegmentFlags.NONE],
                    [25, 22, SegmentFlags.NONE],
                    [22, 22, SegmentFlags.NONE],
                    [22, 21, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [22, 22, SegmentFlags.NONE],
                    [22, 23, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "tower-of-zot-5f-save-room": {
            flags: PathFlags.NONE,
            map: "30A2-0",
            segments: {
                "base-0": [
                    [4, 10, SegmentFlags.START],
                    [4, 7, SegmentFlags.RETURN],
                    [4, 11, SegmentFlags.END],
                ],
            },
        },
        "tower-of-zot-6f": {
            flags: PathFlags.STEPS,
            map: "309E-0",
            segments: {
                "base-0": [
                    [7, 16, SegmentFlags.START],
                    [10, 16, SegmentFlags.NONE],
                    [10, 10, SegmentFlags.NONE],
                    [7, 10, SegmentFlags.NONE],
                    [7, 9, SegmentFlags.END],
                ],
                "base-1": [
                    [7, 6, SegmentFlags.START],
                    [5, 6, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [10, 16, SegmentFlags.NONE],
                    [11, 16, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "tower-of-zot-7f": {
            flags: PathFlags.STEPS,
            map: "309F-0",
            segments: {
                "base-0": [
                    [7, 9, SegmentFlags.START],
                    [7, 10, SegmentFlags.END],
                ],
            },
        },
        "town-of-baron--inn-to-weapon-armor-shop": {
            flags: PathFlags.NONE,
            map: "3000-0",
            segments: {
                "base-0": [
                    [20, 26, SegmentFlags.START],
                    [20, 27, SegmentFlags.NONE],
                    [17, 27, SegmentFlags.NONE],
                    [17, 20, SegmentFlags.NONE],
                    [14, 20, SegmentFlags.NONE],
                    [14, 17, SegmentFlags.END],
                    [14, 16, SegmentFlags.END],
                ],
            },
        },
        "town-of-baron--serpent-road-to-inn": {
            flags: PathFlags.NONE,
            map: "3000-0",
            segments: {
                "base-0": [
                    [4, 27, SegmentFlags.START],
                    [20, 27, SegmentFlags.NONE],
                    [20, 26, SegmentFlags.END],
                ],
            },
        },
        "town-of-baron--weapon-armor-shop-to-old-water-way": {
            flags: PathFlags.NONE,
            map: "3000-0",
            segments: {
                "base-0": [
                    [14, 16, SegmentFlags.START],
                    [14, 20, SegmentFlags.NONE],
                    [7, 20, SegmentFlags.NONE],
                    [7, 21, SegmentFlags.NONE],
                    [3, 21, SegmentFlags.NONE],
                    [3, 20, SegmentFlags.END],
                    [3, 19, SegmentFlags.END],
                ],
            },
        },
        "town-of-baron-inn": {
            flags: PathFlags.NONE,
            map: "300B-0",
            segments: {
                "base-0": [
                    [14, 17, SegmentFlags.START],
                    [18, 17, SegmentFlags.NONE],
                    [18, 8, SegmentFlags.NONE],
                    [12, 8, SegmentFlags.NONE],
                    [12, 4, SegmentFlags.NONE],
                    [13, 4, SegmentFlags.END],
                ],
                "base-1": [
                    [14, 15, SegmentFlags.START],
                    [14, 21, SegmentFlags.END],
                ],
            },
        },
        "town-of-baron-serpent-road": {
            flags: PathFlags.STEPS,
            map: "3097-0",
            segments: {
                "base-0": [
                    [5, 5, SegmentFlags.START],
                    [5, 14, SegmentFlags.END],
                ],
                "extra-1-0": [
                    [5, 10, SegmentFlags.NONE],
                    [5, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
                "extra-2-0": [
                    [5, 10, SegmentFlags.NONE],
                    [6, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "town-of-baron-weapon-armor-shop": {
            flags: PathFlags.NONE,
            map: "300C-0",
            segments: {
                "base-0": [
                    [7, 9, SegmentFlags.START],
                    [10, 9, SegmentFlags.NONE],
                    [10, 7, SegmentFlags.RETURN],
                    [10, 8, SegmentFlags.NONE],
                    [5, 8, SegmentFlags.NONE],
                    [5, 7, SegmentFlags.RETURN],
                    [5, 9, SegmentFlags.NONE],
                    [7, 9, SegmentFlags.NONE],
                    [7, 12, SegmentFlags.END],
                ],
            },
        },
        "underworld-airship--castle-of-dwarves-to-overworld-a": {
            flags: PathFlags.STEPS,
            map: "1000-0",
            mapRange: [96, 35, 32, 32],
            segments: {
                "base-0": [
                    [112, 67, SegmentFlags.VEHICLE],
                    [112, 66, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [112, 35, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [112, 34, SegmentFlags.VEHICLE],
                ],
            },
        },
        "underworld-airship--castle-of-dwarves-to-overworld-b": {
            flags: PathFlags.STEPS,
            map: "1000-0",
            mapRange: [96, 4, 32, 32],
            segments: {
                "base-0": [
                    [112, 36, SegmentFlags.VEHICLE],
                    [112, 35, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [112, 17, SegmentFlags.END | SegmentFlags.VEHICLE],
                ],
            },
        },
        "underworld-airship--tower-of-babil-to-castle-of-dwarves-a": {
            flags: PathFlags.STEPS,
            map: "1000-0",
            mapRange: [32, 15, 32, 32],
            segments: {
                "base-0": [
                    [48, 16, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [48, 46, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [48, 47, SegmentFlags.VEHICLE],
                ],
            },
        },
        "underworld-airship--tower-of-babil-to-castle-of-dwarves-b": {
            flags: PathFlags.STEPS,
            map: "1000-0",
            mapRange: [48, 46, 32, 32],
            segments: {
                "base-0": [
                    [48, 45, SegmentFlags.VEHICLE],
                    [48, 46, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [48, 62, SegmentFlags.VEHICLE],
                    [55, 62, SegmentFlags.VEHICLE],
                    [55, 76, SegmentFlags.VEHICLE],
                    [79, 76, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [80, 76, SegmentFlags.VEHICLE],
                ],
            },
        },
        "underworld-castle-of-dwarves--agart-to-castle-of-dwarves": {
            flags: PathFlags.STEPS,
            map: "1000-0",
            mapRange: [85, 65, 32, 32],
            segments: {
                "base-0": [
                    [102, 82, SegmentFlags.START],
                    [100, 82, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [102, 82, SegmentFlags.NONE],
                    [102, 81, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "underworld-castle-of-dwarves--castle-of-dwarves-to-overworld": {
            flags: PathFlags.STEPS,
            map: "1000-0",
            mapRange: [90, 66, 32, 32],
            segments: {
                "base-0": [
                    [100, 82, SegmentFlags.START],
                    [100, 83, SegmentFlags.NONE],
                    [112, 83, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [112, 66, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [112, 65, SegmentFlags.VEHICLE],
                ],
                "extra-2-0": [
                    [100, 83, SegmentFlags.NONE],
                    [99, 83, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
        "underworld-castle-of-dwarves--castle-of-dwarves-to-sealed-cave": {
            flags: PathFlags.STEPS,
            map: "1000-0",
            mapRange: [69, 66, 32, 32],
            segments: {
                "base-0": [
                    [99, 82, SegmentFlags.START],
                    [98, 82, SegmentFlags.NONE],
                    [69, 82, SegmentFlags.START | SegmentFlags.END | SegmentFlags.VEHICLE],
                    [68, 82, SegmentFlags.VEHICLE],
                ],
                "extra-2-0": [
                    [98, 82, SegmentFlags.NONE],
                    [98, 81, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "underworld-castle-of-dwarves--castle-of-dwarves-to-tower-of-babil-a": {
            flags: PathFlags.STEPS,
            map: "1000-0",
            mapRange: [60, 64, 32, 32],
            segments: {
                "base-0": [
                    [91, 84, SegmentFlags.START],
                    [91, 85, SegmentFlags.NONE],
                    [82, 85, SegmentFlags.NONE],
                    [82, 83, SegmentFlags.NONE],
                    [80, 83, SegmentFlags.NONE],
                    [80, 79, SegmentFlags.NONE],
                    [71, 79, SegmentFlags.NONE],
                    [71, 78, SegmentFlags.NONE],
                    [70, 78, SegmentFlags.NONE],
                    [70, 76, SegmentFlags.NONE],
                    [60, 76, SegmentFlags.END],
                    [59, 76, SegmentFlags.NONE],
                ],
            },
        },
        "underworld-castle-of-dwarves--castle-of-dwarves-to-tower-of-babil-b": {
            flags: PathFlags.STEPS,
            map: "1000-0",
            mapRange: [38, 45, 32, 32],
            segments: {
                "base-0": [
                    [70, 76, SegmentFlags.NONE],
                    [60, 76, SegmentFlags.END],
                    [54, 76, SegmentFlags.NONE],
                    [54, 53, SegmentFlags.NONE],
                    [48, 53, SegmentFlags.NONE],
                    [48, 45, SegmentFlags.END],
                    [48, 44, SegmentFlags.NONE],
                ],
            },
        },
        "underworld-castle-of-dwarves--castle-of-dwarves-to-tower-of-babil-c": {
            flags: PathFlags.STEPS,
            map: "1000-0",
            mapRange: [35, 14, 32, 32],
            segments: {
                "base-0": [
                    [48, 46, SegmentFlags.NONE],
                    [48, 45, SegmentFlags.END],
                    [48, 24, SegmentFlags.NONE],
                    [54, 24, SegmentFlags.NONE],
                    [54, 21, SegmentFlags.NONE],
                    [55, 21, SegmentFlags.NONE],
                    [55, 18, SegmentFlags.NONE],
                    [54, 18, SegmentFlags.NONE],
                    [54, 16, SegmentFlags.NONE],
                    [49, 16, SegmentFlags.NONE],
                    [49, 15, SegmentFlags.END],
                ],
                "extra-2-0": [
                    [49, 16, SegmentFlags.NONE],
                    [49, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "underworld-castle-of-dwarves--sealed-cave-to-castle-of-dwarves": {
            flags: PathFlags.STEPS,
            map: "1000-0",
            mapRange: [74, 66, 32, 32],
            segments: {
                "base-0": [
                    [73, 83, SegmentFlags.VEHICLE],
                    [74, 83, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [100, 83, SegmentFlags.VEHICLE],
                    [100, 82, SegmentFlags.START | SegmentFlags.END],
                ],
            },
        },
        "underworld-castle-of-dwarves--tower-of-babil-to-castle-of-dwarves": {
            flags: PathFlags.STEPS,
            map: "1000-0",
            mapRange: [72, 63, 32, 32],
            segments: {
                "base-0": [
                    [71, 76, SegmentFlags.VEHICLE],
                    [79, 76, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [86, 76, SegmentFlags.VEHICLE],
                    [86, 82, SegmentFlags.VEHICLE],
                    [98, 82, SegmentFlags.VEHICLE],
                    [99, 82, SegmentFlags.START | SegmentFlags.END],
                ],
                "extra-2-0": [
                    [98, 82, SegmentFlags.NONE],
                    [98, 83, SegmentFlags.RETURN | SegmentFlags.ANNOTATE],
                ],
            },
        },
        "underworld-sealed-cave--castle-of-dwarves-to-sealed-cave": {
            flags: PathFlags.STEPS,
            map: "1000-0",
            mapRange: [38, 80, 32, 32],
            segments: {
                "base-0": [
                    [70, 82, SegmentFlags.VEHICLE],
                    [69, 82, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [48, 82, SegmentFlags.VEHICLE],
                    [48, 110, SegmentFlags.VEHICLE],
                    [46, 110, SegmentFlags.VEHICLE],
                    [46, 109, SegmentFlags.START | SegmentFlags.END],
                ],
            },
        },
        "underworld-sealed-cave--sealed-cave-to-castle-of-dwarves": {
            flags: PathFlags.STEPS,
            map: "1000-0",
            mapRange: [43, 80, 32, 32],
            segments: {
                "base-0": [
                    [46, 109, SegmentFlags.START],
                    [46, 110, SegmentFlags.NONE],
                    [50, 110, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [50, 83, SegmentFlags.VEHICLE],
                    [74, 83, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [75, 83, SegmentFlags.VEHICLE],
                ],
                "extra-2-0": [
                    [46, 110, SegmentFlags.NONE],
                    [45, 110, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                ],
            },
        },
    };

    data.variables = {
        C000500: {
            descriptions: {
                0: "Walk to the Big Whale.",
                1: "Fly the Falcon to the Big Whale.",
            },
            paths: {
                0: {
                    "overworld-mysidia--after-big-whale--walk": {
                        index: "0",
                        instruction: "Walk to the Big Whale",
                        location: "Overworld (Mysidia) [before Moon]",
                    },
                },
                1: {
                    "overworld-mysidia--after-big-whale--fly": {
                        index: "0",
                        instruction: "Fly the Falcon to the Big Whale",
                        location: "Overworld (Mysidia) [before Moon]",
                    },
                },
            },
            type: VariableFlags.CHOICE,
        },
        C200000: {
            descriptions: {
                0: "Visit the Hummingway Cave before recruiting FuSoYa.",
                1: "Recruit FuSoYa before visiting the Hummingway Cave.",
            },
            paths: {
                0: {
                    "lunar-overworld-big-whale--initial-to-hummingway-cave": {
                        index: "0",
                        instruction: "Visit the Hummingway Cave before recruiting FuSoYa",
                        location: "Lunar Overworld [first visit]",
                    },
                },
                1: {
                    "lunar-overworld-big-whale--initial-to-lunar-path-landing": {
                        index: "0",
                        instruction: "Recruit FuSoYa before visiting the Hummingway cave",
                        location: "Lunar Overworld [first visit]",
                    },
                },
            },
            type: VariableFlags.CHOICE,
        },
        C305500: {
            descriptions: {
                1: "Enter the Extra Step Area in Toroian Castle 1F [after Cave Magnes].",
            },
            paths: {
                1: {
                    "toroian-castle-1f--after-cave-magnes--extra-step-area": {
                        index: "0",
                        instruction: "Enter the Extra Step Area",
                        location: "Toroian Castle 1F [after Cave Magnes]",
                    },
                },
            },
            type: VariableFlags.CHOICE,
        },
        C308F00: { // eslint-disable-line
            descriptions: {
                1: "Enter the Save Room in Cave Magnes B3F.",
            },
            paths: {
                1: {
                    "cave-magnes-b3f--before-save-room": {
                        index: "0",
                        instruction: "Enter the Save Room",
                        location: "Cave Magnes B3F",
                    },
                },
            },
            type: VariableFlags.CHOICE,
        },
        C309300: {
            descriptions: {
                1: "Enter the Save Room in Cave Magnes B4F.",
            },
            paths: {
                1: {
                    "cave-magnes-b4f--before-save-room": {
                        index: "0",
                        instruction: "Enter the Save Room",
                        location: "Cave Magnes B4F",
                    },
                },
            },
            type: VariableFlags.CHOICE,
        },
        C30C800: { // eslint-disable-line
            descriptions: {
                0: "Walk out of Cave Eblana B2F Weapons/Armors.",
                1: "Cast Warp to leave Cave Eblana B2F Weapons/Armors.",
            },
            paths: {
                0: {
                    "cave-eblana-b2f-weapons-armors--direct": {
                        index: "0",
                        instruction: "Walk out of the room",
                        location: "Cave Eblana B2F Weapons/Armors",
                    },
                },
                1: {
                    "cave-eblana-b2f-weapons-armors--warp": {
                        index: "0",
                        instruction: "Cast Warp to leave the room",
                        location: "Cave Eblana B2F Weapons/Armors",
                    },
                },
            },
            type: VariableFlags.CHOICE,
        },
        C30AC00: { // eslint-disable-line
            descriptions: {
                0: "Equip the Dwarf Axe when removing the Strength Ring.",
                1: "Equip the Dwarf Axe immediately after the Rubicant battle.",
            },
            paths: {
                0: {
                    "castle-of-dwarves-infirmary": {
                        index: "0",
                        instruction: "Equip the Dwarf Axe when removing the Strength Ring",
                        location: "Castle of Dwarves Infirmary",
                    },
                },
                1: {
                    "tower-of-babil-b5f": {
                        index: "1",
                        instruction: "Equip the Dwarf Axe immediately after the Rubicant battle",
                        location: "Tower of Bab-il B5F",
                    },
                },
            },
            type: VariableFlags.CHOICE,
        },
        C30CA00: {
            descriptions: {
                1: "Enter the Save Room in Pass to Bab-il (north).",
            },
            paths: {
                1: {
                    "pass-to-babil-north--east-side--before-save-room": {
                        index: "0",
                        instruction: "Enter the Save Room",
                        location: "Pass to Bab-il (north) [east side]",
                    },
                },
            },
            type: VariableFlags.CHOICE,
        },
        C30CA01: {
            descriptions: {
                0: "Unequip the Dwarf Axe during the menu after Edge joins.",
                1: "Unequip the Dwarf Axe immediately before the K.Eblan/Q.Eblan battle.",
            },
            paths: {
                0: {
                    "pass-to-babil-north--east-side--direct": {
                        index: "1",
                        instruction: "Unequip the Dwarf Axe during the menu after Edge joins",
                        location: "Pass to Bab-il (north) [east side]",
                    },
                    "pass-to-babil-north--east-side--after-save-room": {
                        index: "1",
                        instruction: "Unequip the Dwarf Axe during the menu after Edge joins",
                        location: "Pass to Bab-il (north) [east side]",
                    },
                },
                1: {
                    "tower-of-babil-b5f": {
                        index: "0",
                        instruction: "Unequip the Dwarf Axe immediately before the K.Eblan/Q.Eblan battle",
                        location: "Tower of Bab-il B5F",
                    },
                },
            },
            type: VariableFlags.CHOICE,
        },
        C310700: {
            descriptions: {
                0: "Walk through the Castle of Dwarves (no extra Warp casts).",
                1: "Cast Warp in the Castle of Dwarves one additional time.",
                2: "Cast Warp in the Castle of Dwarves two additional times.",
                3: "Cast Warp in the Castle of Dwarves three additional times.",
            },
            paths: {
                0: {
                    "castle-of-dwarves-kings-room--after-golbez--direct": {
                        index: "0",
                        instruction: "Walk through the Castle of Dwarves (no extra Warp casts)",
                        location: "Castle of Dwarves",
                    },
                },
                1: {
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--warp": {
                        index: "0",
                        instruction: "Cast Warp to leave the room",
                        location: "Castle of Dwarves Right Tower 3F [after Strength Ring]",
                    },
                },
                2: {
                    "castle-of-dwarves-kings-room--after-golbez--warp": {
                        index: "0",
                        instruction: "Cast Warp to leave the room (second time you've used Warp in this room)",
                        location: "Castle of Dwarves King's Room [after Darkness]",
                    },
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--warp": {
                        index: "0",
                        instruction: "Cast Warp to leave the room",
                        location: "Castle of Dwarves Right Tower 3F [after Strength Ring]",
                    },
                },
                3: {
                    "castle-of-dwarves-4f--5f-to-3f--warp": {
                        index: "0",
                        instruction: "Cast Warp to leave the room",
                        location: "Castle of Dwarves 4F",
                    },
                    "castle-of-dwarves-kings-room--after-golbez--warp": {
                        index: "0",
                        instruction: "Cast Warp to leave the room (second time you've used Warp in this room)",
                        location: "Castle of Dwarves King's Room [after Darkness]",
                    },
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--warp": {
                        index: "0",
                        instruction: "Cast Warp to leave the room",
                        location: "Castle of Dwarves Right Tower 3F [after Strength Ring]",
                    },
                },
            },
            type: VariableFlags.CHOICE,
        },
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
        E000000: {
            paths: {
                "overworld-baron--agart-to-castle-baron": {
                    disambiguation: "",
                    index: "0",
                    location: "Overworld (Baron) [before Hook Installation]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E000503: {
            paths: {
                "overworld-mysidia--after-big-whale--fly": {
                    disambiguation: "",
                    index: "0",
                    location: "Overworld (Mysidia) [before Moon]",
                },
                "overworld-mysidia--after-big-whale--walk": {
                    disambiguation: "",
                    index: "0",
                    location: "Overworld (Mysidia) [before Moon]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E000700: {
            paths: {
                "overworld-toroia--castle-baron-to-toroian-castle": {
                    disambiguation: "",
                    index: "0",
                    location: "Overworld (Toroia) [before Toroian Castle]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E000701: {
            paths: {
                "overworld-toroia--toroian-castle-to-chocobos-village": {
                    disambiguation: "",
                    index: "0",
                    location: "Overworld (Toroia) [before Black Chocobo]",
                },
            },
            routes: {
                1: {
                    "overworld-toroia--toroian-castle-to-chocobos-village": 1,
                },
            },
            type: VariableFlags.EXTRA,
        },
        E000702: {
            paths: {
                "overworld-toroia--cave-magnes-to-chocobos-village": {
                    disambiguation: " before boarding the black chocobo",
                    index: "0",
                    location: "Overworld (Toroia) [after Cave Magnes]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E000703: {
            paths: {
                "overworld-toroia--toroian-castle-to-tower-of-zot": {
                    disambiguation: "",
                    index: "0",
                    location: "Overworld (Toroia) [before Tower of Zot]",
                },
            },
            routes: {
                1: { "overworld-toroia--toroian-castle-to-tower-of-zot": 1 },
                2: { "overworld-toroia--toroian-castle-to-tower-of-zot": 2 },
            },
            type: VariableFlags.EXTRA,
        },
        E000A00: {
            paths: {
                "overworld-agart--castle-baron-to-agart": {
                    disambiguation: "",
                    index: "0",
                    location: "Overworld (Agart)",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E000A01: {
            paths: {
                "overworld-eblan": {
                    disambiguation: "",
                    index: "0",
                    location: "Overworld (Eblan)",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E100000: {
            paths: {
                "underworld-castle-of-dwarves--agart-to-castle-of-dwarves": {
                    disambiguation: "",
                    index: "0",
                    location: "Underworld (Castle of Dwarves) [before Castle of Dwarves]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E100001: {
            paths: {
                "underworld-castle-of-dwarves--castle-of-dwarves-to-tower-of-babil-c": {
                    disambiguation: "",
                    index: "0",
                    location: "Underworld (Castle of Dwarves) [after Castle of Dwarves]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E100002: {
            paths: {
                "underworld-castle-of-dwarves--tower-of-babil-to-castle-of-dwarves": {
                    disambiguation: "",
                    index: "0",
                    location: "Underworld (Castle of Dwarves) [after getting Falcon]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E100003: {
            paths: {
                "underworld-castle-of-dwarves--castle-of-dwarves-to-sealed-cave": {
                    disambiguation: "",
                    index: "0",
                    location: "Underworld (Castle of Dwarves) [after infirmary visit]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E100004: {
            paths: {
                "underworld-castle-of-dwarves--castle-of-dwarves-to-overworld": {
                    disambiguation: "",
                    index: "0",
                    location: "Underworld (Castle of Dwarves) [after drill installation]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E100101: {
            paths: {
                "underworld-sealed-cave--sealed-cave-to-castle-of-dwarves": {
                    disambiguation: "",
                    index: "0",
                    location: "Underworld (Sealed Cave) [after Sealed Cave]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
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
        E200001: {
            paths: {
                "lunar-overworld--lunar-path-landing-to-lunar-path-west--before-fusoya": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Overworld [before FuSoYa before Lunar Path (west)]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E200002: {
            paths: {
                "lunar-overworld--lunar-path-west-to-lunar-path-east--before-fusoya": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Overworld [before FuSoYa before Lunar Path (east)]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E200003: {
            paths: {
                "lunar-overworld--lunar-path-east-to-lunars-lair--before-fusoya": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Overworld [before FuSoYa after Lunar Path (east)]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E200004: {
            paths: {
                "lunar-overworld--lunars-lair-to-lunar-path-east": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Overworld [after FuSoYa before Lunar Path (east)]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E200005: {
            paths: {
                "lunar-overworld--lunar-path-east-to-lunar-path-west": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Overworld [after FuSoYa after Lunar Path (east)]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E200006: {
            paths: {
                "lunar-overworld--lunar-path-west-to-lunar-path-landing": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Overworld [after FuSoYa after Lunar Path (west)]",
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
        E302400: {
            description: "Castle Baron [before Kainazzo]",
            paths: {
                "castle-baron-1f--before-kainazzo": {
                    disambiguation: "",
                    index: "1",
                    location: "Castle Baron 1F [before Kainazzo]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E302401: {
            description: "Castle Baron [after Valvalis]",
            paths: {
                "castle-baron-left-tower-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Castle Baron Left Tower Room [after Valvalis]",
                },
            },
            routes: {
                3: { "castle-baron-left-tower-room": 3 },
            },
            type: VariableFlags.EXTRA,
        },
        E302402: {
            description: "Castle Baron [before Hook Installation]",
            paths: {
                "castle-baron-1f--before-hook": {
                    disambiguation: "",
                    index: "0",
                    location: "Castle Baron 1F [before Hook Installation]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E302700: {
            paths: {
                "toroian-castle-1f--before-cave-magnes": {
                    disambiguation: "",
                    index: "0",
                    location: "Toroian Castle 1F [before Cave Magnes]",
                },
            },
            routes: {
                1: { "toroian-castle-1f--before-cave-magnes": 1 },
                2: { "toroian-castle-1f--before-cave-magnes": 2 },
                3: { "toroian-castle-1f--before-cave-magnes": 3 },
            },
            type: VariableFlags.EXTRA,
        },
        E303C00: { // eslint-disable-line
            paths: {
                "castle-baron-b1f--before-save-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Castle Baron B1F [before Save Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E303C01: {
            paths: {
                "castle-baron-b1f--after-save-room": {
                    disambiguation: "",
                    index :"0",
                    location: "Castle Baron B1F [after Save Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E303D00: {
            paths: {
                "castle-baron-b1f-save-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Castle Baron B1F Save Room",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E303E00: {
            paths: {
                "castle-baron-b2f": {
                    disambiguation: "",
                    index: "0",
                    location: "Castle Baron B2F",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E305500: {
            lowPriority: true,
            minSteps: 1,
            paths: {
                "toroian-castle-1f--after-cave-magnes--extra-step-area": {
                    disambiguation: " in the Extra Step Area",
                    index: "0",
                    location: "Toroian Castle 1F [after Cave Magnes]",
                },
            },
            routes: {
                1: { "toroian-castle-1f--after-cave-magnes--extra-step-area": 1 },
                2: { "toroian-castle-1f--after-cave-magnes--extra-step-area": 2 },
                3: { "toroian-castle-1f--after-cave-magnes--extra-step-area": 3 },
            },
            type: VariableFlags.EXTRA,
        },
        E308C00: { // eslint-disable-line
            paths: {
                "cave-magnes-b1f": {
                    disambiguation: "",
                    index: "0",
                    location: "Cave Magnes B1F",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E308D00: {
            paths: {
                "cave-magnes-b2f": {
                    disambiguation: "",
                    index: "0",
                    location: "Cave Magnes B2F",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E308F00: {
            paths: {
                "cave-magnes-b3f--before-save-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Cave Magnes B3F [before Save Room]",
                },
                "cave-magnes-b3f--direct": {
                    disambiguation: "",
                    index: "0",
                    location: "Cave Magnes B3F",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E308F01: {
            paths: {
                "cave-magnes-b3f--after-save-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Cave Magnes B3F [after Save Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E309100: {
            paths: {
                "cave-magnes-b3f-passage": {
                    disambiguation: "",
                    index: "0",
                    location: "Cave Magnes B3F Passage",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E309200: {
            paths: {
                "cave-magnes-b3f-save-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Cave Magnes B3F Save Room",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E309300: {
            paths: {
                "cave-magnes-b4f--before-save-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Cave Magnes B4F [before Save Room]",
                },
                "cave-magnes-b4f--direct": {
                    disambiguation: "",
                    index: "0",
                    location: "Cave Magnes B4F",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E309301: {
            paths: {
                "cave-magnes-b4f--after-save-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Cave Magnes B4F [after Save Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E309800: {
            paths: {
                "tower-of-zot-1f": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Zot 1F",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E309900: {
            paths: {
                "tower-of-zot-2f": {
                    disambiguation: " before the FlameDog battle",
                    index: "0",
                    location: "Tower of Zot 2F",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E309901: {
            paths: {
                "tower-of-zot-2f": {
                    disambiguation: " after the FlameDog battle",
                    index: "1",
                    location: "Tower of Zot 2F",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E309A00: { // eslint-disable-line
            paths: {
                "tower-of-zot-3f": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Zot 3F",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E309C00: {
            paths: {
                "tower-of-zot-4f": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Zot 4F",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E309D00: {
            paths: {
                "tower-of-zot-5f--before-save-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Zot 5F [before Save Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E309D01: {
            paths: {
                "tower-of-zot-5f--after-save-room": {
                    disambiguation: " after fighting the Magus Sisters",
                    index: "1",
                    location: "Tower of Zot 5F [after Save Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E309D02: {
            paths: {
                "tower-of-zot-5f--after-save-room": {
                    disambiguation: " before fighting the Magus Sisters",
                    index: "0",
                    location: "Tower of Zot 5F [after Save Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E309E00: {
            paths: {
                "tower-of-zot-6f": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Zot 6F",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30A100: { // eslint-disable-line
            paths: {
                "cave-magnes-b4f-save-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Cave Magnes B4F Save Room",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30A700: {
            paths: {
                "tower-of-babil-1f-upper": {
                    disambiguation: "",
                    index: "1",
                    location: "Tower of Bab-il 1F [after Edge joins]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30A800: {
            paths: {
                "tower-of-babil-b2f": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il B2F",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30A900: {
            paths: {
                "tower-of-babil-b3f--south": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il B3F [south side]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30A901: {
            paths: {
                "tower-of-babil-b3f--north--before-save-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il B3F [north side before Save Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30A902: {
            paths: {
                "tower-of-babil-b3f--north--after-save-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il B3F [north side after Save Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30AA00: {
            paths: {
                "tower-of-babil-b4f--south": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il B4F [large southwest room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30AA01: {
            paths: {
                "tower-of-babil-b4f--north": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il B4F [small northeast room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30AC00: {
            paths: {
                "tower-of-babil-b5f": {
                    disambiguation: " before the boss battles",
                    index: "0",
                    location: "Tower of Bab-il B5F",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30AC01: {
            paths: {
                "tower-of-babil-b5f": {
                    disambiguation: " after the boss battles",
                    index: "1",
                    location: "Tower of Bab-il B5F",
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
        E30C700: {
            paths: {
                "cave-eblana-b1f": {
                    disambiguation: "",
                    index: "0",
                    location: "Cave Eblana B1F",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30C800: {
            description: "Cave Eblana B2F",
            maxOptional: {
                variable: "C30C800",
                values: {
                    0: 2,
                    1: 0,
                },
            },
            paths: {
                "cave-eblana-b2f-weapons-armors--direct": {
                    disambiguation: "",
                    index: "0",
                    location: "Cave Eblana B2F Weapons/Armors",
                },
                "cave-eblana-b2f-weapons-armors--warp": {
                    disambiguation: "",
                    index: "0",
                    location: "Cave Eblana B2F Weapons/Armors",
                },
            },
            routes: {
                1: {
                    "cave-eblana-b2f-weapons-armors--direct": 1,
                },
                2: {
                    "cave-eblana-b2f-weapons-armors--direct": 2,
                },
            },
            type: VariableFlags.EXTRA,
        },
        E30C900: {
            paths: {
                "pass-to-babil-south--west-side": {
                    disambiguation: "",
                    index: "0",
                    location: "Pass to Bab-il (south) [west side]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30C901: {
            paths: {
                "pass-to-babil-south--east-side": {
                    disambiguation: "",
                    index: "0",
                    location: "Pass to Bab-il (south) [east side]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30CA00: {
            paths: {
                "pass-to-babil-north--west-side": {
                    disambiguation: "",
                    index: "0",
                    location: "Pass to Bab-il (north) [west side]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30CA01: {
            paths: {
                "pass-to-babil-north--east-side--direct": {
                    disambiguation: " before Edge joins",
                    index: "0",
                    location: "Pass to Bab-il (north) [east side]",
                },
                "pass-to-babil-north--east-side--before-save-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Pass to Bab-il (north) [east side] [before Save Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30CA02: {
            paths: {
                "pass-to-babil-north--east-side--after-save-room": {
                    disambiguation: " before Edge joins",
                    index: "0",
                    location: "Pass to Bab-il (north) [east side] [after Save Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30CA03: {
            lowPriority: true,
            paths: {
                "pass-to-babil-north--east-side--direct": {
                    disambiguation: " after Edge joins",
                    index: "1",
                    location: "Pass to Bab-il (north) [east side]",
                },
                "pass-to-babil-north--east-side--after-save-room": {
                    disambiguation: " after Edge joins",
                    index: "1",
                    location: "Pass to Bab-il (north) [east side] [after Save Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E30CD00: {
            paths: {
                "pass-to-babil-north-save-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Pass to Bab-il (north) Save Room",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E310700: {
            description: "the Castle of Dwarves [after Golbez]",
            lowPriority: true,
            maxOptional: {
                variable: "C310700",
                values: {
                    0: 21,
                    1: 20,
                    2: 18,
                    3: 18,
                },
            },
            paths: {
                "castle-of-dwarves-1f--after-golbez--direct": {
                    disambiguation: "",
                    index: "0",
                    location: "Castle of Dwarves 1F [after Golbez]",
                },
                "castle-of-dwarves-1f--after-golbez--warp": {
                    disambiguation: "",
                    index: "0",
                    location: "Castle of Dwarves 1F [after Golbez]",
                },
                "castle-of-dwarves-b2f": {
                    disambiguation: "",
                    index: "0",
                    location: "Castle of Dwarves B2F",
                },
                "castle-of-dwarves-dwarf-base": {
                    disambiguation: "",
                    index: "0",
                    location: "Castle of Dwarves Dwarf Base",
                },
                "castle-of-dwarves-kings-room--after-golbez--direct": {
                    disambiguation: "",
                    index: "0",
                    location: "Castle of Dwarves King's Room [after Golbez]",
                },
                "castle-of-dwarves-right-tower-2f--1f-to-3f": {
                    disambiguation: "",
                    index: "0",
                    location: "Castle of Dwarves Right Tower 2F [before Strength Ring]",
                },
                "castle-of-dwarves-right-tower-2f--3f-to-b1f": {
                    disambiguation: "",
                    index: "0",
                    location: "Castle of Dwarves Right Tower 2F [after Strength Ring]",
                },
                "castle-of-dwarves-right-tower-3f--2f-to-4f": {
                    disambiguation: "",
                    index: "0",
                    location: "Castle of Dwarves Right Tower 3F [before Strength Ring]",
                },
                "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": {
                    disambiguation: "",
                    index: "0",
                    location: "Castle of Dwarves Right Tower 3F [after Strength Ring]",
                },
            },
            routes: {
                1: {
                    "castle-of-dwarves-1f--after-golbez--direct": 0,
                    "castle-of-dwarves-1f--after-golbez--warp": 0,
                    "castle-of-dwarves-b2f": 0,
                    "castle-of-dwarves-dwarf-base": 1,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 0,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 0,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 0,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 0,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                2: {
                    "castle-of-dwarves-1f--after-golbez--direct": 0,
                    "castle-of-dwarves-1f--after-golbez--warp": 0,
                    "castle-of-dwarves-b2f": 0,
                    "castle-of-dwarves-dwarf-base": 2,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 0,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 0,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 0,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 0,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                3: {
                    "castle-of-dwarves-1f--after-golbez--direct": 0,
                    "castle-of-dwarves-1f--after-golbez--warp": 0,
                    "castle-of-dwarves-b2f": 1,
                    "castle-of-dwarves-dwarf-base": 2,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 0,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 0,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 0,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 0,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                4: {
                    "castle-of-dwarves-1f--after-golbez--direct": 0,
                    "castle-of-dwarves-1f--after-golbez--warp": 0,
                    "castle-of-dwarves-b2f": 2,
                    "castle-of-dwarves-dwarf-base": 2,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 0,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 0,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 0,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 0,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                5: {
                    "castle-of-dwarves-1f--after-golbez--direct": 0,
                    "castle-of-dwarves-1f--after-golbez--warp": 0,
                    "castle-of-dwarves-b2f": 2,
                    "castle-of-dwarves-dwarf-base": 2,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 0,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 0,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 1,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 0,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                6: {
                    "castle-of-dwarves-1f--after-golbez--direct": 0,
                    "castle-of-dwarves-1f--after-golbez--warp": 0,
                    "castle-of-dwarves-b2f": 2,
                    "castle-of-dwarves-dwarf-base": 2,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 0,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 0,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 1,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 1,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                7: {
                    "castle-of-dwarves-1f--after-golbez--direct": 0,
                    "castle-of-dwarves-1f--after-golbez--warp": 0,
                    "castle-of-dwarves-b2f": 2,
                    "castle-of-dwarves-dwarf-base": 2,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 0,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 0,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 1,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 2,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                8: {
                    "castle-of-dwarves-1f--after-golbez--direct": 1,
                    "castle-of-dwarves-1f--after-golbez--warp": 1,
                    "castle-of-dwarves-b2f": 2,
                    "castle-of-dwarves-dwarf-base": 2,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 0,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 0,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 1,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 2,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                9: {
                    "castle-of-dwarves-1f--after-golbez--direct": 1,
                    "castle-of-dwarves-1f--after-golbez--warp": 1,
                    "castle-of-dwarves-b2f": 2,
                    "castle-of-dwarves-dwarf-base": 2,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 0,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 1,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 1,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 2,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                10: {
                    "castle-of-dwarves-1f--after-golbez--direct": 0,
                    "castle-of-dwarves-1f--after-golbez--warp": 0,
                    "castle-of-dwarves-b2f": 0,
                    "castle-of-dwarves-dwarf-base": 0,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 0,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 10,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 0,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 0,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                11: {
                    "castle-of-dwarves-1f--after-golbez--direct": 0,
                    "castle-of-dwarves-1f--after-golbez--warp": 0,
                    "castle-of-dwarves-b2f": 0,
                    "castle-of-dwarves-dwarf-base": 1,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 0,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 10,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 0,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 0,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                12: {
                    "castle-of-dwarves-1f--after-golbez--direct": 0,
                    "castle-of-dwarves-1f--after-golbez--warp": 0,
                    "castle-of-dwarves-b2f": 0,
                    "castle-of-dwarves-dwarf-base": 2,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 0,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 10,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 0,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 0,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                13: {
                    "castle-of-dwarves-1f--after-golbez--direct": 0,
                    "castle-of-dwarves-1f--after-golbez--warp": 0,
                    "castle-of-dwarves-b2f": 1,
                    "castle-of-dwarves-dwarf-base": 2,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 0,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 10,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 0,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 0,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                14: {
                    "castle-of-dwarves-1f--after-golbez--direct": 0,
                    "castle-of-dwarves-1f--after-golbez--warp": 0,
                    "castle-of-dwarves-b2f": 2,
                    "castle-of-dwarves-dwarf-base": 2,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 0,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 10,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 0,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 0,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                15: {
                    "castle-of-dwarves-1f--after-golbez--direct": 0,
                    "castle-of-dwarves-1f--after-golbez--warp": 0,
                    "castle-of-dwarves-b2f": 2,
                    "castle-of-dwarves-dwarf-base": 2,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 0,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 10,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 1,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 0,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                16: {
                    "castle-of-dwarves-1f--after-golbez--direct": 0,
                    "castle-of-dwarves-1f--after-golbez--warp": 0,
                    "castle-of-dwarves-b2f": 2,
                    "castle-of-dwarves-dwarf-base": 2,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 0,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 10,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 1,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 1,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                17: {
                    "castle-of-dwarves-1f--after-golbez--direct": 0,
                    "castle-of-dwarves-1f--after-golbez--warp": 0,
                    "castle-of-dwarves-b2f": 2,
                    "castle-of-dwarves-dwarf-base": 2,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 0,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 10,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 1,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 2,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                18: {
                    "castle-of-dwarves-1f--after-golbez--direct": 1,
                    "castle-of-dwarves-1f--after-golbez--warp": 1,
                    "castle-of-dwarves-b2f": 2,
                    "castle-of-dwarves-dwarf-base": 2,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 0,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 10,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 1,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 2,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                19: {
                    "castle-of-dwarves-1f--after-golbez--direct": 1,
                    "castle-of-dwarves-1f--after-golbez--warp": 1,
                    "castle-of-dwarves-b2f": 2,
                    "castle-of-dwarves-dwarf-base": 2,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 1,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 10,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 1,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 2,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                20: {
                    "castle-of-dwarves-1f--after-golbez--direct": 1,
                    "castle-of-dwarves-1f--after-golbez--warp": 1,
                    "castle-of-dwarves-b2f": 2,
                    "castle-of-dwarves-dwarf-base": 2,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 2,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 10,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 1,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 2,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 0,
                },
                21: {
                    "castle-of-dwarves-1f--after-golbez--direct": 1,
                    "castle-of-dwarves-1f--after-golbez--warp": 1,
                    "castle-of-dwarves-b2f": 2,
                    "castle-of-dwarves-dwarf-base": 2,
                    "castle-of-dwarves-kings-room--after-golbez--direct": 2,
                    "castle-of-dwarves-right-tower-2f--1f-to-3f": 10,
                    "castle-of-dwarves-right-tower-2f--3f-to-b1f": 1,
                    "castle-of-dwarves-right-tower-3f--2f-to-4f": 2,
                    "castle-of-dwarves-right-tower-3f--4f-to-2f--direct": 1,
                },
            },
            type: VariableFlags.EXTRA,
        },
        E310701: {
            description: "the Castle of Dwarves [after Rubicant]",
            paths: {
                "castle-of-dwarves-1f--after-rubicant": {
                    disambiguation: "",
                    index: "0",
                    location: "Castle of Dwarves 1F [after Rubicant]",
                },
            },
            routes: {
                1: {
                    "castle-of-dwarves-1f--after-rubicant": 1,
                },
                2: {
                    "castle-of-dwarves-1f--after-rubicant": 2,
                },
                3: {
                    "castle-of-dwarves-1f--after-rubicant": 3,
                },
                4: {
                    "castle-of-dwarves-1f--after-rubicant": 4,
                },
            },
            type: VariableFlags.EXTRA,
        },
        E310702: {
            description: "the Castle of Dwarves [after Sealed Cave]",
            paths: {
                "castle-of-dwarves-kings-room--after-sealed-cave": {
                    disambiguation: "",
                    index: "0",
                    location: "Castle of Dwarves 1F [after Sealed Cave]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E311D00: { // eslint-disable-line
            paths: {
                "tower-of-babil-8f-revisit": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 8F [after Rubicant]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E311E00: {
            paths: {
                "tower-of-babil-7f-revisit": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 7F [after Rubicant]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E311F00: {
            paths: {
                "tower-of-babil-6f-revisit": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 6F [after Rubicant]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E312100: {
            paths: {
                "tower-of-babil-1f--before-lugae": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 1F [before Lugae]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E312101: {
            paths: {
                "tower-of-babil-1f--after-dark-imps": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 1F [after Dark Imps]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E312200: {
            paths: {
                "tower-of-babil-2f--before-lugae": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 2F [before Lugae]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E312201: {
            paths: {
                "tower-of-babil-2f--after-dark-imps": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 2F [after Dark Imps]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E312300: {
            paths: {
                "tower-of-babil-3f--before-lugae": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 3F [before Lugae]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E312301: {
            paths: {
                "tower-of-babil-3f--after-dark-imps": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 3F [after Dark Imps]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E312400: {
            paths: {
                "tower-of-babil-4f--before-lugae--before-save-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 4F [before Lugae before Save Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E312401: {
            paths: {
                "tower-of-babil-4f--after-dark-imps": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 4F [after Dark Imps]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E312402: {
            paths: {
                "tower-of-babil-4f--before-lugae--after-save-room": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 4F [before Lugae after Save Room]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E312500: {
            paths: {
                "tower-of-babil-5f--before-lugae": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 5F [before Lugae]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E312501: {
            paths: {
                "tower-of-babil-5f--before-dark-imps": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 5F [before Dark Imps]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E312502: {
            paths: {
                "tower-of-babil-5f--after-dark-imps": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 5F [after Dark Imps]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E312600: {
            paths: {
                "tower-of-babil-6f--before-lugae": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 6F [before Lugae]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E312601: {
            paths: {
                "tower-of-babil-6f--after-lugae": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 6F [after Lugae]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E312700: {
            paths: {
                "tower-of-babil-7f--before-lugae": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 7F [before Lugae]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E312701: {
            paths: {
                "tower-of-babil-7f--after-lugae": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 7F [after Lugae]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E312800: {
            paths: {
                "tower-of-babil-8f--before-lugae": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 8F [before Lugae]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E312801: {
            paths: {
                "tower-of-babil-8f--after-lugae": {
                    disambiguation: "",
                    index: "0",
                    location: "Tower of Bab-il 8F [after Lugae]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E314400: {
            paths: {
                "sealed-cave": {
                    disambiguation: "",
                    index: "0",
                    location: "Sealed Cave",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316300: {
            paths: {
                "lunar-path-west--before-fusoya": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Path (west) [before FuSoYa]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316301: {
            paths: {
                "lunar-path-west--after-fusoya": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Path (west) [after FuSoYa]",
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
        E316400: {
            paths: {
                "lunar-path-east--before-fusoya": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Path (east) [before FuSoYa]",
                },
            },
            routes: {},
            type: VariableFlags.EXTRA,
        },
        E316401: {
            paths: {
                "lunar-path-east--after-fusoya": {
                    disambiguation: "",
                    index: "0",
                    location: "Lunar Path (east) [after FuSoYa]",
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
