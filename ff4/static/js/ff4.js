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
        NONE:           0x00,
        STEPS:          0x01,
        YELLOW_CHOCOBO: 0x02,
        BLACK_CHOCOBO:  0x04,
        HUMMINGWAY:     0x08,
        SINGLE:         0x10
    };

    var SegmentFlags = {
        NONE:     0x00,
        START:    0x01,
        END:      0x02,
        RETURN:   0x04,
        ANNOTATE: 0x08,
        VEHICLE:  0x10,
        VERTICAL: 0x20
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
            "antlion-b1f-1",
            "overworld-damcyan-2",
            "overworld-kaipo-3",
            "overworld-kaipo-4",
            "kaipo-3",
            "kaipo-house-1",
            "kaipo-4",
            "overworld-kaipo-5",
            "overworld-damcyan-3",
            "overworld-damcyan-4",
            "mt-hobs-west-0",
            "mt-hobs-summit-0",
            "mt-hobs-east-0",
            "overworld-fabul-0",
            "overworld-fabul-1",
            "fabul-0",
            "fabul-1f-0",
            "fabul-2f-0",
            "fabul-kings-room-0",
            "fabul-crystal-room-0",
            "fabul-kings-room-1",
            "fabul-2f-1",
            "fabul-1f-1",
            "fabul-inn-0",
            "fabul-right-tower-3f-0",
            "fabul-right-tower-2f-0",
            "fabul-right-tower-1f-0",
            "fabul-1",
            "fabul-2f-2",
            "fabul-1f-2",
            "fabul-2",
            "overworld-fabul-2",
            "overworld-mysidia-0",
            "mysidia-0",
            "mysidia-armor-shop-0",
            "mysidia-1",
            "mysidia-house-of-wishes-0",
            "mysidia-2",
            "mysidia-item-shop-0",
            "mysidia-3",
            "overworld-mysidia-1",
            "overworld-mt-ordeals-0",
            "overworld-mt-ordeals-1",
            "mt-ordeals-0",
            "mt-ordeals-3rd-station-0",
            "mt-ordeals-7th-station-0",
            "mt-ordeals-summit-0"
        ],
        "nocw": [
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
            "antlion-b1f-1",
            "overworld-damcyan-2",
            "overworld-kaipo-3",
            "overworld-kaipo-4",
            "kaipo-3",
            "kaipo-house-1",
            "kaipo-4",
            "overworld-kaipo-5",
            "overworld-damcyan-3",
            "overworld-damcyan-4",
            "mt-hobs-west-0",
            "mt-hobs-summit-0",
            "mt-hobs-east-0",
            "overworld-fabul-0",
            "overworld-fabul-1",
            "fabul-0",
            "fabul-1f-0",
            "fabul-2f-0",
            "fabul-kings-room-0",
            "fabul-crystal-room-0",
            "fabul-kings-room-1",
            "fabul-2f-1",
            "fabul-1f-1",
            "fabul-inn-0",
            "fabul-right-tower-3f-0",
            "fabul-right-tower-2f-0",
            "fabul-right-tower-1f-0",
            "fabul-1",
            "fabul-2f-2",
            "fabul-1f-2",
            "fabul-2",
            "overworld-fabul-2",
            "overworld-mysidia-0",
            "mysidia-0",
            "mysidia-armor-shop-0",
            "mysidia-1",
            "mysidia-house-of-wishes-0",
            "mysidia-2",
            "mysidia-item-shop-0",
            "mysidia-3",
            "overworld-mysidia-1",
            "overworld-mt-ordeals-0",
            "overworld-mt-ordeals-1",
            "mt-ordeals-0",
            "mt-ordeals-3rd-station-0",
            "mt-ordeals-7th-station-0",
            "mt-ordeals-summit-0",
            "mt-ordeals-summit-1",
            "mt-ordeals-7th-station-1",
            "mt-ordeals-3rd-station-1",
            "mt-ordeals-1",
            "overworld-mt-ordeals-2",
            "chocobos-forest-mt-ordeals-0",
            "overworld-mt-ordeals-3",
            "overworld-mysidia-2",
            "mysidia-4",
            "mysidia-house-of-wishes-1",
            "mysidia-5",
            "mysidia-serpent-road-0",
            "baron-town-serpent-road-0",
            "baron-town-0",
            "baron-town-inn-0",
            "baron-town-1",
            "baron-town-weapon-shop-0",
            "baron-town-2",
            "old-water-way-antechamber-0",
            "old-water-way-0",
            "castle-baron-b3f-0",
            "castle-baron-b2f-0",
            "castle-baron-b1f-0",
            "castle-baron-b1f-1",
            "castle-baron-b1f-save-room-0",
            "castle-baron-b1f-2",
            "castle-baron-0",
            "castle-baron-left-passage-0",
            "castle-baron-1",
            "castle-baron-1f-0",
            "castle-baron-2f-0",
            "castle-baron-3f-0",
            "castle-baron-kings-room-0",
            "overworld-airship-0-0",
            "overworld-airship-0-1",
            "overworld-airship-0-2",
            "overworld-airship-0-3",
            "overworld-toroia-0",
            "toroian-castle-0",
            "toroian-castle-1f-0",
            "toroian-castle-1",
            "toroian-castle-infirmary-0",
            "overworld-toroia-1",
            "chocobos-village-0",
            "overworld-toroia-2",
            "overworld-toroia-3",
            "cave-magnes-b1f-0",
            "cave-magnes-b2f-0",
            "cave-magnes-b3f-0",
            "cave-magnes-b3f-1",
            "cave-magnes-b3f-save-room-0",
            "cave-magnes-b3f-2",
            "cave-magnes-b3f-passage-0",
            "cave-magnes-b4f-0",
            "cave-magnes-b4f-1",
            "cave-magnes-b4f-save-room-0",
            "cave-magnes-b4f-2",
            "cave-magnes-crystal-room-0",
            "cave-magnes-crystal-room-1",
            "overworld-toroia-4",
            "chocobos-village-0",
            "overworld-toroia-5",
            "toroian-castle-2",
            "toroian-castle-1f-1",
            "toroian-castle-1f-2",
            "toroian-castle-2f-0",
            "overworld-toroia-6",
            "tower-of-zot-1f-0",
            "tower-of-zot-2f-0",
            "tower-of-zot-3f-0",
            "tower-of-zot-4f-0",
            "tower-of-zot-5f-0",
            "tower-of-zot-6f-0",
            "tower-of-zot-7f-0",
            "castle-baron-left-tower-room-0",
            "castle-baron-left-tower-2f-0",
            "castle-baron-left-tower-1f-0",
            "castle-baron-2",
            "castle-baron-left-passage-0",
            "castle-baron-3",
            "castle-baron-1f-1",
            "castle-baron-4",
            "overworld-airship-1-0",
            "overworld-agart-0",
            "agart-0",
            "agart-well-0",
            "agart-1",
            "overworld-agart-1",
            "underworld-castle-of-dwarves-0"
        ],
        "no64-excalbur": [
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
            "antlion-b1f-1",
            "overworld-damcyan-2",
            "overworld-kaipo-3",
            "overworld-kaipo-4",
            "kaipo-3",
            "kaipo-house-1",
            "kaipo-4",
            "overworld-kaipo-5",
            "overworld-damcyan-3",
            "overworld-damcyan-4",
            "mt-hobs-west-0",
            "mt-hobs-summit-0",
            "mt-hobs-east-0",
            "overworld-fabul-0",
            "overworld-fabul-1",
            "fabul-0",
            "fabul-1f-0",
            "fabul-2f-0",
            "fabul-kings-room-0",
            "fabul-crystal-room-0",
            "fabul-kings-room-1",
            "fabul-2f-1",
            "fabul-1f-1",
            "fabul-inn-0",
            "fabul-right-tower-3f-0",
            "fabul-right-tower-2f-0",
            "fabul-right-tower-1f-0",
            "fabul-1",
            "fabul-2f-2",
            "fabul-1f-2",
            "fabul-2",
            "overworld-fabul-2",
            "overworld-mysidia-0",
            "mysidia-0",
            "mysidia-armor-shop-0",
            "mysidia-1",
            "mysidia-house-of-wishes-0",
            "mysidia-2",
            "mysidia-item-shop-0",
            "mysidia-3",
            "overworld-mysidia-1",
            "overworld-mt-ordeals-0",
            "overworld-mt-ordeals-1",
            "mt-ordeals-0",
            "mt-ordeals-3rd-station-0",
            "mt-ordeals-7th-station-0",
            "mt-ordeals-summit-0",
            "mt-ordeals-summit-1",
            "mt-ordeals-7th-station-1",
            "mt-ordeals-3rd-station-1",
            "mt-ordeals-1",
            "overworld-mt-ordeals-2",
            "chocobos-forest-mt-ordeals-0",
            "overworld-mt-ordeals-3",
            "overworld-mysidia-2",
            "mysidia-4",
            "mysidia-house-of-wishes-1",
            "mysidia-5",
            "mysidia-serpent-road-0",
            "baron-town-serpent-road-0",
            "baron-town-0",
            "baron-town-inn-0",
            "baron-town-1",
            "baron-town-weapon-shop-0",
            "baron-town-2",
            "old-water-way-antechamber-0",
            "old-water-way-0",
            "castle-baron-b3f-0",
            "castle-baron-b2f-0",
            "castle-baron-b1f-0",
            "castle-baron-b1f-1",
            "castle-baron-b1f-save-room-0",
            "castle-baron-b1f-2",
            "castle-baron-0",
            "castle-baron-left-passage-0",
            "castle-baron-1",
            "castle-baron-1f-0",
            "castle-baron-2f-0",
            "castle-baron-3f-0",
            "castle-baron-kings-room-0",
            "overworld-airship-0-0",
            "overworld-airship-0-1",
            "overworld-airship-0-2",
            "overworld-airship-0-3",
            "overworld-toroia-0",
            "toroian-castle-0",
            "toroian-castle-1f-0",
            "toroian-castle-1",
            "toroian-castle-infirmary-0",
            "overworld-toroia-1",
            "chocobos-village-0",
            "overworld-toroia-2",
            "overworld-toroia-3",
            "cave-magnes-b1f-0",
            "cave-magnes-b2f-0",
            "cave-magnes-b3f-0",
            "cave-magnes-b3f-1",
            "cave-magnes-b3f-save-room-0",
            "cave-magnes-b3f-2",
            "cave-magnes-b3f-passage-0",
            "cave-magnes-b4f-0",
            "cave-magnes-b4f-1",
            "cave-magnes-b4f-save-room-0",
            "cave-magnes-b4f-2",
            "cave-magnes-crystal-room-0",
            "cave-magnes-crystal-room-1",
            "overworld-toroia-4",
            "chocobos-village-1",
            "overworld-toroia-7",
            "toroian-castle-2",
            "toroian-castle-1f-1",
            "toroian-castle-1f-2",
            "toroian-castle-2f-0",
            "overworld-toroia-6",
            "tower-of-zot-1f-0",
            "tower-of-zot-2f-0",
            "tower-of-zot-3f-0",
            "tower-of-zot-4f-0",
            "tower-of-zot-5f-0",
            "tower-of-zot-6f-0",
            "tower-of-zot-7f-0",
            "castle-baron-left-tower-room-0",
            "castle-baron-left-tower-2f-0",
            "castle-baron-left-tower-1f-0",
            "castle-baron-2",
            "castle-baron-left-passage-0",
            "castle-baron-3",
            "castle-baron-1f-1",
            "castle-baron-4",
            "overworld-airship-1-0",
            "overworld-agart-0",
            "agart-0",
            "agart-well-0",
            "agart-1",
            "overworld-agart-1",
            "underworld-castle-of-dwarves-0",
            "castle-of-dwarves-0",
            "castle-of-dwarves-1f-0",
            "castle-of-dwarves-kings-room-0",
            "castle-of-dwarves-crystal-room-0",
            "castle-of-dwarves-crystal-room-1",
            "castle-of-dwarves-kings-room-1",
            "castle-of-dwarves-1f-1",
            "castle-of-dwarves-1f-2",
            "castle-of-dwarves-right-tower-2f-0",
            "castle-of-dwarves-right-tower-2f-1",
            "castle-of-dwarves-right-tower-3f-0",
            "castle-of-dwarves-right-tower-3f-1",
            "castle-of-dwarves-4f-0",
            "castle-of-dwarves-5f-0",
            "castle-of-dwarves-4f-1",
            "castle-of-dwarves-right-tower-3f-2",
            "castle-of-dwarves-right-tower-3f-3",
            "castle-of-dwarves-right-tower-2f-2",
            "castle-of-dwarves-right-tower-2f-3",
            "castle-of-dwarves-b1f-0",
            "castle-of-dwarves-b2f-0",
            "castle-of-dwarves-b2f-1",
            "castle-of-dwarves-dwarf-base-0",
            "castle-of-dwarves-dwarf-base-1",
            "underworld-castle-of-dwarves-1",
            "underworld-castle-of-dwarves-2",
            "underworld-castle-of-dwarves-3",
            "tower-of-babil-1f-0",
            "tower-of-babil-2f-0",
            "tower-of-babil-3f-0",
            "tower-of-babil-4f-0",
            "tower-of-babil-5f-0",
            "tower-of-babil-6f-0",
            "tower-of-babil-7f-0",
            "tower-of-babil-8f-0",
            "tower-of-babil-8f-1",
            "tower-of-babil-7f-1",
            "tower-of-babil-6f-1",
            "tower-of-babil-5f-1",
            "tower-of-babil-5f-super-cannon-0",
            "tower-of-babil-5f-2",
            "tower-of-babil-4f-1",
            "tower-of-babil-3f-1",
            "tower-of-babil-2f-1",
            "tower-of-babil-1f-1",
            "overworld-airship-2-0",
            "overworld-baron-0",
            "castle-baron-5",
            "castle-baron-1f-2",
            "castle-baron-6",
            "castle-baron-right-passage-0",
            "castle-baron-7",
            "overworld-airship-3-0",
            "overworld-airship-3-1",
            "overworld-airship-3-2",
            "overworld-airship-3-3",
            "overworld-airship-3-4",
            "overworld-airship-3-5",
            "overworld-airship-3-6",
            "overworld-airship-3-7",
            "overworld-airship-3-8",
            "overworld-airship-3-9",
            "overworld-eblan-0",
            "cave-eblana-b1f-0",
            "cave-eblana-b2f-0",
            "cave-eblana-b2f-weapons-armors-0",
            "cave-eblana-b2f-1",
            "pass-to-babil-south-0",
            "pass-to-babil-north-0",
            "pass-to-babil-south-1",
            "pass-to-babil-north-1",
            "pass-to-babil-north-2",
            "pass-to-babil-north-save-room-0",
            "pass-to-babil-north-3",
            "tower-of-babil-1f-upper-0",
            "tower-of-babil-b2f-0",
            "tower-of-babil-b3f-0",
            "tower-of-babil-b4f-0",
            "tower-of-babil-b3f-1",
            "tower-of-babil-b4f-1",
            "tower-of-babil-b5f-0",
            "tower-of-babil-crystal-room-0",
            "tower-of-babil-8f-revisit-0",
            "tower-of-babil-7f-revisit-0",
            "tower-of-babil-6f-revisit-0",
            "underworld-airship-0-0",
            "underworld-airship-0-1",
            "underworld-castle-of-dwarves-4",
            "castle-of-dwarves-1",
            "castle-of-dwarves-1f-3",
            "castle-of-dwarves-left-tower-2f-0",
            "castle-of-dwarves-b1f-1",
            "castle-of-dwarves-infirmary-0",
            "underworld-castle-of-dwarves-5",
            "underworld-airship-1-0",
            "underworld-sealed-cave-0",
            "land-of-monsters-b1f-0",
            "land-of-monsters-b2f-0",
            "land-of-monsters-b3f-0",
            "land-of-monsters-b3f-1",
            "land-of-monsters-b3f-2",
            "land-of-monsters-b4f-0",
            "town-of-monsters-0",
            "land-of-monsters-b4f-1",
            "underworld-sealed-cave-1",
            "sealed-cave-0",
            "underworld-sealed-cave-2",
            "underworld-castle-of-dwarves-6",
            "castle-of-dwarves-1",
            "castle-of-dwarves-1f-4",
            "castle-of-dwarves-kings-room-3",
            "underworld-castle-of-dwarves-7",
            "underworld-airship-2-0",
            "underworld-airship-2-1",
            "overworld-airship-4-0",
            "overworld-airship-4-1",
            "overworld-eblan-1",
            "overworld-airship-4-2",
            "overworld-airship-4-3",
            "overworld-airship-4-4",
            "overworld-airship-4-5",
            "overworld-silvera-0",
            "grotto-adamant-0",
            "overworld-silvera-1",
            "overworld-airship-5-0",
            "overworld-airship-5-1",
            "overworld-airship-5-2",
            "overworld-airship-5-3",
            "mysidia-6",
            "overworld-airship-6-0",
            "overworld-airship-6-1",
            "underworld-airship-3-0",
            "underworld-airship-3-1",
            "underworld-airship-3-2",
            "underworld-kokkol-0",
            "kokkol-the-smiths-0",
            "kokkol-the-smiths-1f-0",
            "kokkol-the-smiths-2f-0",
            "kokkol-the-smiths-1f-1",
            "kokkol-the-smiths-1",
            "underworld-kokkol-1",
            "underworld-airship-4-0",
            "underworld-airship-4-1",
            "underworld-airship-4-2",
            "overworld-airship-7-0",
            "overworld-mysidia-3",
            "big-whale-crystal",
            "lunar-overworld-0",
            "lunar-overworld-1",
            "big-whale-exit",
            "lunar-overworld-2-0",
            "hummingway-cave-0-0",
            "lunar-overworld-3-0",
            "lunar-overworld-5-1",
            "lunar-path-west-0-1",
            "lunar-overworld-6-1",
            "lunar-path-east-0-1",
            "lunar-overworld-7-1",
            "lunars-lair-1f-0-1",
            "lunar-overworld-8-1",
            "lunar-path-east-1-1",
            "lunar-overworld-9-1",
            "lunar-path-west-1-1",
            "lunar-overworld-10-1",
            "big-whale-console",
            "lunar-overworld-4-0",
            "lunar-overworld-4-1",
            "big-whale-exit",
            "lunar-overworld-5-0",
            "lunar-path-west-0-0",
            "lunar-overworld-6-0",
            "lunar-path-east-0-0",
            "lunar-overworld-7-0",
            "lunars-lair-1f-0-0",
            "lunar-overworld-8-0",
            "lunar-path-east-1-0",
            "lunar-overworld-9-0",
            "lunar-path-west-1-0",
            "lunar-overworld-10-0",
            "lunar-overworld-2-1",
            "hummingway-cave-0-1",
            "lunar-overworld-3-1",
            "big-whale-crystal",
            "giant-of-babil-mouth-0",
            "giant-of-babil-neck-0",
            "giant-of-babil-chest-0",
            "giant-of-babil-stomach-0",
            "giant-of-babil-passage-0",
            "giant-of-babil-lung-0",
            "giant-of-babil-cpu-0",
            "big-whale-console",
            "lunar-overworld-11-0",
            "big-whale-exit",
            "lunar-overworld-12-0",
            "lunar-path-west-2",
            "lunar-overworld-13-0",
            "lunar-path-east-2",
            "lunar-overworld-14-0",
            "lunars-lair-1f-1",
            "lunars-lair-2f-0",
            "lunar-subterrane-b1-0",
            "lunar-subterrane-b2-0",
            "lunar-subterrane-b3-0",
            "lunar-subterrane-b4-0",
            "lunar-subterrane-b4-passage-0",
            "lunar-subterrane-b4-1",
            "lunar-subterrane-b5-0",
            "lunar-subterrane-b5-passage-a-0",
            "lunar-subterrane-b5-1",
            "lunar-subterrane-b5-passage-b-0",
            "lunar-subterrane-b5-2",
            "lunar-subterrane-b5-3",
            "lunar-subterrane-b5-pink-puff-room-0",
            "lunar-subterrane-b5-4",
            "lunar-subterrane-b6-0",
            "lunar-subterrane-b6-passage-0",
            "lunar-subterrane-b7-0",
            "lunar-subterrane-b7-1",
            "lunar-subterrane-b7-save-room-0",
            "lunar-subterrane-b7-2",
            "lunar-core-b1-0",
            "lunar-core-b2-0",
            "lunar-core-b3-0",
            "lunar-core-b4-0",
            "lunar-core-b5-0"
        ],
        "no64-rosa": [
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
            "antlion-b1f-1",
            "overworld-damcyan-2",
            "overworld-kaipo-3",
            "overworld-kaipo-4",
            "kaipo-3",
            "kaipo-house-1",
            "kaipo-4",
            "overworld-kaipo-5",
            "overworld-damcyan-3",
            "overworld-damcyan-4",
            "mt-hobs-west-0",
            "mt-hobs-summit-0",
            "mt-hobs-east-0",
            "overworld-fabul-0",
            "overworld-fabul-1",
            "fabul-0",
            "fabul-1f-0",
            "fabul-2f-0",
            "fabul-kings-room-0",
            "fabul-crystal-room-0",
            "fabul-kings-room-1",
            "fabul-2f-1",
            "fabul-1f-1",
            "fabul-inn-0",
            "fabul-right-tower-3f-0",
            "fabul-right-tower-2f-0",
            "fabul-right-tower-1f-0",
            "fabul-1",
            "fabul-2f-2",
            "fabul-1f-2",
            "fabul-2",
            "overworld-fabul-2",
            "overworld-mysidia-0",
            "mysidia-0",
            "mysidia-armor-shop-0",
            "mysidia-1",
            "mysidia-house-of-wishes-0",
            "mysidia-2",
            "mysidia-item-shop-0",
            "mysidia-3",
            "overworld-mysidia-1",
            "overworld-mt-ordeals-0",
            "overworld-mt-ordeals-1",
            "mt-ordeals-0",
            "mt-ordeals-3rd-station-0",
            "mt-ordeals-7th-station-0",
            "mt-ordeals-summit-0",
            "mt-ordeals-summit-1",
            "mt-ordeals-7th-station-1",
            "mt-ordeals-3rd-station-1",
            "mt-ordeals-1",
            "overworld-mt-ordeals-2",
            "chocobos-forest-mt-ordeals-0",
            "overworld-mt-ordeals-3",
            "overworld-mysidia-2",
            "mysidia-4",
            "mysidia-house-of-wishes-1",
            "mysidia-5",
            "mysidia-serpent-road-0",
            "baron-town-serpent-road-0",
            "baron-town-0",
            "baron-town-inn-0",
            "baron-town-1",
            "baron-town-weapon-shop-0",
            "baron-town-2",
            "old-water-way-antechamber-0",
            "old-water-way-0",
            "castle-baron-b3f-0",
            "castle-baron-b2f-0",
            "castle-baron-b1f-0",
            "castle-baron-b1f-1",
            "castle-baron-b1f-save-room-0",
            "castle-baron-b1f-2",
            "castle-baron-0",
            "castle-baron-left-passage-0",
            "castle-baron-1",
            "castle-baron-1f-0",
            "castle-baron-2f-0",
            "castle-baron-3f-0",
            "castle-baron-kings-room-0",
            "overworld-airship-0-0",
            "overworld-airship-0-1",
            "overworld-airship-0-2",
            "overworld-airship-0-3",
            "overworld-toroia-0",
            "toroian-castle-0",
            "toroian-castle-1f-0",
            "toroian-castle-1",
            "toroian-castle-infirmary-0",
            "overworld-toroia-1",
            "chocobos-village-0",
            "overworld-toroia-2",
            "overworld-toroia-3",
            "cave-magnes-b1f-0",
            "cave-magnes-b2f-0",
            "cave-magnes-b3f-0",
            "cave-magnes-b3f-1",
            "cave-magnes-b3f-save-room-0",
            "cave-magnes-b3f-2",
            "cave-magnes-b3f-passage-0",
            "cave-magnes-b4f-0",
            "cave-magnes-b4f-1",
            "cave-magnes-b4f-save-room-0",
            "cave-magnes-b4f-2",
            "cave-magnes-crystal-room-0",
            "cave-magnes-crystal-room-1",
            "overworld-toroia-4",
            "chocobos-village-1",
            "overworld-toroia-7",
            "toroian-castle-2",
            "toroian-castle-1f-1",
            "toroian-castle-1f-2",
            "toroian-castle-2f-0",
            "overworld-toroia-6",
            "tower-of-zot-1f-0",
            "tower-of-zot-2f-0",
            "tower-of-zot-3f-0",
            "tower-of-zot-4f-0",
            "tower-of-zot-5f-0",
            "tower-of-zot-6f-0",
            "tower-of-zot-7f-0",
            "castle-baron-left-tower-room-0",
            "castle-baron-left-tower-2f-0",
            "castle-baron-left-tower-1f-0",
            "castle-baron-2",
            "castle-baron-left-passage-0",
            "castle-baron-3",
            "castle-baron-1f-1",
            "castle-baron-4",
            "overworld-airship-1-0",
            "overworld-agart-0",
            "agart-0",
            "agart-well-0",
            "agart-1",
            "overworld-agart-1",
            "underworld-castle-of-dwarves-0",
            "castle-of-dwarves-0",
            "castle-of-dwarves-1f-0",
            "castle-of-dwarves-kings-room-0",
            "castle-of-dwarves-crystal-room-0",
            "castle-of-dwarves-crystal-room-1",
            "castle-of-dwarves-kings-room-1",
            "castle-of-dwarves-1f-1",
            "castle-of-dwarves-1f-2",
            "castle-of-dwarves-right-tower-2f-0",
            "castle-of-dwarves-right-tower-2f-1",
            "castle-of-dwarves-right-tower-3f-0",
            "castle-of-dwarves-right-tower-3f-1",
            "castle-of-dwarves-4f-0",
            "castle-of-dwarves-5f-1",
            "castle-of-dwarves-4f-1",
            "castle-of-dwarves-right-tower-3f-2",
            "castle-of-dwarves-right-tower-3f-3",
            "castle-of-dwarves-right-tower-2f-2",
            "castle-of-dwarves-right-tower-2f-3",
            "castle-of-dwarves-b1f-0",
            "castle-of-dwarves-b2f-0",
            "castle-of-dwarves-b2f-1",
            "castle-of-dwarves-dwarf-base-0",
            "castle-of-dwarves-dwarf-base-1",
            "underworld-castle-of-dwarves-1",
            "underworld-castle-of-dwarves-2",
            "underworld-castle-of-dwarves-3",
            "tower-of-babil-1f-0",
            "tower-of-babil-2f-0",
            "tower-of-babil-3f-0",
            "tower-of-babil-4f-0",
            "tower-of-babil-5f-0",
            "tower-of-babil-6f-0",
            "tower-of-babil-7f-0",
            "tower-of-babil-8f-0",
            "tower-of-babil-8f-1",
            "tower-of-babil-7f-1",
            "tower-of-babil-6f-1",
            "tower-of-babil-5f-1",
            "tower-of-babil-5f-super-cannon-0",
            "tower-of-babil-5f-2",
            "tower-of-babil-4f-1",
            "tower-of-babil-3f-1",
            "tower-of-babil-2f-1",
            "tower-of-babil-1f-1",
            "overworld-airship-2-0",
            "overworld-baron-0",
            "castle-baron-5",
            "castle-baron-1f-2",
            "castle-baron-6",
            "castle-baron-right-passage-0",
            "castle-baron-7",
            "overworld-airship-3-0",
            "overworld-airship-3-1",
            "overworld-airship-3-2",
            "overworld-airship-3-3",
            "overworld-airship-3-4",
            "overworld-airship-3-5",
            "overworld-airship-3-6",
            "overworld-airship-3-7",
            "overworld-airship-3-8",
            "overworld-airship-3-9",
            "overworld-eblan-0",
            "cave-eblana-b1f-0",
            "cave-eblana-b2f-0",
            "cave-eblana-b2f-weapons-armors-0",
            "cave-eblana-b2f-1",
            "pass-to-babil-south-0",
            "pass-to-babil-north-0",
            "pass-to-babil-south-1",
            "pass-to-babil-north-1",
            "pass-to-babil-north-2",
            "pass-to-babil-north-save-room-0",
            "pass-to-babil-north-3",
            "tower-of-babil-1f-upper-0",
            "tower-of-babil-b2f-0",
            "tower-of-babil-b3f-0",
            "tower-of-babil-b4f-0",
            "tower-of-babil-b3f-1",
            "tower-of-babil-b4f-1",
            "tower-of-babil-b5f-0",
            "tower-of-babil-crystal-room-0",
            "tower-of-babil-8f-revisit-0",
            "tower-of-babil-7f-revisit-0",
            "tower-of-babil-6f-revisit-0",
            "underworld-airship-0-0",
            "underworld-airship-0-1",
            "underworld-castle-of-dwarves-4",
            "castle-of-dwarves-1",
            "castle-of-dwarves-1f-3",
            "castle-of-dwarves-left-tower-2f-0",
            "castle-of-dwarves-b1f-1",
            "castle-of-dwarves-infirmary-0",
            "underworld-castle-of-dwarves-5",
            "underworld-sealed-cave-1-rosa",
            "sealed-cave-0",
            "underworld-sealed-cave-2",
            "underworld-castle-of-dwarves-6",
            "castle-of-dwarves-1",
            "castle-of-dwarves-1f-4",
            "castle-of-dwarves-kings-room-3",
            "underworld-castle-of-dwarves-7",
            "underworld-airship-2-0",
            "underworld-airship-2-1",
            "overworld-airship-7-0",
            "overworld-mysidia-3-rosa",
            "mysidia-6",
            "overworld-mysidia-4",
            "big-whale-crystal",
            "lunar-overworld-1",
            "big-whale-exit",
            "lunar-overworld-5-0",
            "lunar-path-west-0-0",
            "lunar-overworld-6-0",
            "lunar-path-east-0-0",
            "lunar-overworld-7-0",
            "lunars-lair-1f-0-0",
            "lunar-overworld-8-0",
            "lunar-path-east-1-0",
            "lunar-overworld-9-0",
            "lunar-path-west-1-0",
            "lunar-overworld-10-0",
            "big-whale-crystal",
            "giant-of-babil-mouth-0",
            "giant-of-babil-neck-0",
            "giant-of-babil-chest-0",
            "giant-of-babil-stomach-0",
            "giant-of-babil-passage-0",
            "giant-of-babil-lung-0",
            "giant-of-babil-cpu-0",
            "big-whale-console",
            "lunar-overworld-11-0",
            "big-whale-exit",
            "lunar-overworld-12-0",
            "lunar-path-west-2",
            "lunar-overworld-13-0",
            "lunar-path-east-2",
            "lunar-overworld-14-0",
            "lunars-lair-1f-1",
            "lunars-lair-2f-0",
            "lunar-subterrane-b1-0",
            "lunar-subterrane-b2-0",
            "lunar-subterrane-b3-0",
            "lunar-subterrane-b4-0",
            "lunar-subterrane-b4-passage-0",
            "lunar-subterrane-b4-1",
            "lunar-subterrane-b5-0",
            "lunar-subterrane-b5-passage-a-2",
            "lunar-subterrane-b5-1",
            "lunar-subterrane-b5-passage-b-1",
            "lunar-subterrane-b5-2",
            "lunar-subterrane-b5-3",
            "lunar-subterrane-b5-pink-puff-room-0",
            "lunar-subterrane-b5-4",
            "lunar-subterrane-b6-0",
            "lunar-subterrane-b6-passage-0",
            "lunar-subterrane-b7-0",
            "lunar-subterrane-b7-1",
            "lunar-subterrane-b7-save-room-0",
            "lunar-subterrane-b7-2",
            "lunar-core-b1-0",
            "lunar-core-b2-0",
            "lunar-core-b3-1",
            "lunar-core-b4-0",
            "lunar-core-b5-0"
        ],
        "no64-rosa-marathon-recovery-fusoya": [
            "lunar-overworld-5-0",
            "lunar-path-west-0-0",
            "lunar-overworld-6-0",
            "lunar-path-east-0-0",
            "lunar-overworld-7-0",
            "lunars-lair-1f-0-0",
            "lunar-overworld-8-0",
            "lunar-path-east-1-0",
            "lunar-overworld-9-0",
            "lunar-path-west-1-0",
            "lunar-overworld-10-0",
            "big-whale-console",
            "lunar-overworld-4-1",
            "big-whale-exit",
            "lunar-overworld-2-1",
            "hummingway-cave-0-1",
            "lunar-overworld-3-1",
            "big-whale-crystal",
            "giant-of-babil-mouth-0",
            "giant-of-babil-neck-0",
            "giant-of-babil-chest-0",
            "giant-of-babil-stomach-0",
            "giant-of-babil-passage-1",
            "giant-of-babil-lung-0",
            "giant-of-babil-cpu-0",
            "big-whale-console",
            "lunar-overworld-11-0",
            "big-whale-exit",
            "lunar-overworld-12-0",
            "lunar-path-west-2",
            "lunar-overworld-13-0",
            "lunar-path-east-2",
            "lunar-overworld-14-0",
            "lunars-lair-1f-1",
            "lunars-lair-2f-0",
            "lunar-subterrane-b1-0",
            "lunar-subterrane-b2-0",
            "lunar-subterrane-b3-0",
            "lunar-subterrane-b4-0",
            "lunar-subterrane-b4-passage-0",
            "lunar-subterrane-b4-1",
            "lunar-subterrane-b5-0",
            "lunar-subterrane-b5-passage-a-2",
            "lunar-subterrane-b5-1",
            "lunar-subterrane-b5-passage-b-1",
            "lunar-subterrane-b5-2",
            "lunar-subterrane-b5-3",
            "lunar-subterrane-b5-pink-puff-room-0",
            "lunar-subterrane-b5-4",
            "lunar-subterrane-b6-0",
            "lunar-subterrane-b6-1",
            "lunar-subterrane-b6-passage-0",
            "lunar-subterrane-b7-1",
            "lunar-subterrane-b7-save-room-1",
            "lunar-subterrane-b7-2",
            "lunar-core-b1-0",
            "lunar-core-b1-1",
            "lunar-core-b2-0",
            "lunar-core-b3-0",
            "lunar-core-b3-1",
            "lunar-core-b4-0",
            "lunar-core-b5-0"
        ],
        "no64-rosa-marathon-recovery-paladin": [
            "mt-ordeals-summit-2",
            "mt-ordeals-7th-station-1",
            "mt-ordeals-3rd-station-1",
            "mt-ordeals-1",
            "overworld-mt-ordeals-2",
            "chocobos-forest-mt-ordeals-0",
            "overworld-mt-ordeals-3",
            "overworld-mysidia-2",
            "mysidia-4",
            "mysidia-house-of-wishes-1",
            "mysidia-5",
            "mysidia-serpent-road-0",
            "baron-town-serpent-road-0",
            "baron-town-0",
            "baron-town-inn-0",
            "baron-town-1",
            "baron-town-weapon-shop-0",
            "baron-town-2",
            "old-water-way-antechamber-0",
            "old-water-way-0",
            "castle-baron-b3f-0",
            "castle-baron-b2f-0",
            "castle-baron-b1f-3",
            "castle-baron-b1f-save-room-0",
            "castle-baron-b1f-2",
            "castle-baron-0",
            "castle-baron-left-passage-0",
            "castle-baron-1",
            "castle-baron-1f-0",
            "castle-baron-2f-0",
            "castle-baron-3f-0",
            "castle-baron-kings-room-0",
            "overworld-airship-0-0",
            "overworld-airship-0-1",
            "overworld-airship-0-2",
            "overworld-airship-0-3",
            "overworld-toroia-0",
            "toroian-castle-0",
            "toroian-castle-1f-0",
            "toroian-castle-1",
            "toroian-castle-infirmary-0",
            "overworld-toroia-1",
            "chocobos-village-0",
            "overworld-toroia-2",
            "overworld-toroia-3",
            "cave-magnes-b1f-0",
            "cave-magnes-b2f-0",
            "cave-magnes-b3f-0",
            "cave-magnes-b3f-1",
            "cave-magnes-b3f-save-room-0",
            "cave-magnes-b3f-2",
            "cave-magnes-b3f-passage-0",
            "cave-magnes-b4f-0",
            "cave-magnes-b4f-1",
            "cave-magnes-b4f-save-room-0",
            "cave-magnes-b4f-2",
            "cave-magnes-crystal-room-0",
            "cave-magnes-crystal-room-1",
            "overworld-toroia-4",
            "chocobos-village-1",
            "overworld-toroia-7",
            "toroian-castle-2",
            "toroian-castle-1f-1",
            "toroian-castle-1f-2",
            "toroian-castle-2f-0",
            "overworld-toroia-6",
            "tower-of-zot-1f-0",
            "tower-of-zot-2f-0",
            "tower-of-zot-3f-0",
            "tower-of-zot-4f-0",
            "tower-of-zot-5f-1",
            "tower-of-zot-5f-2",
            "tower-of-zot-6f-0",
            "tower-of-zot-7f-0",
            "castle-baron-left-tower-room-0",
            "castle-baron-left-tower-2f-0",
            "castle-baron-left-tower-1f-0",
            "castle-baron-2",
            "castle-baron-left-passage-0",
            "castle-baron-3",
            "castle-baron-1f-1",
            "castle-baron-4",
            "overworld-airship-1-0",
            "overworld-agart-0",
            "agart-0",
            "agart-well-0",
            "agart-1",
            "overworld-agart-1",
            "underworld-castle-of-dwarves-0",
            "castle-of-dwarves-0",
            "castle-of-dwarves-1f-0",
            "castle-of-dwarves-kings-room-0",
            "castle-of-dwarves-crystal-room-0",
            "castle-of-dwarves-crystal-room-1",
            "castle-of-dwarves-kings-room-1",
            "castle-of-dwarves-1f-1",
            "castle-of-dwarves-1f-2",
            "castle-of-dwarves-right-tower-2f-0",
            "castle-of-dwarves-right-tower-2f-1",
            "castle-of-dwarves-right-tower-3f-0",
            "castle-of-dwarves-right-tower-3f-1",
            "castle-of-dwarves-4f-0",
            "castle-of-dwarves-5f-1",
            "castle-of-dwarves-4f-1",
            "castle-of-dwarves-right-tower-3f-2",
            "castle-of-dwarves-right-tower-3f-3",
            "castle-of-dwarves-right-tower-2f-2",
            "castle-of-dwarves-right-tower-2f-3",
            "castle-of-dwarves-b1f-0",
            "castle-of-dwarves-b2f-0",
            "castle-of-dwarves-b2f-1",
            "castle-of-dwarves-dwarf-base-0",
            "castle-of-dwarves-dwarf-base-1",
            "underworld-castle-of-dwarves-1",
            "underworld-castle-of-dwarves-2",
            "underworld-castle-of-dwarves-3",
            "tower-of-babil-1f-0",
            "tower-of-babil-2f-0",
            "tower-of-babil-3f-0",
            "tower-of-babil-4f-0",
            "tower-of-babil-5f-0",
            "tower-of-babil-6f-0",
            "tower-of-babil-7f-0",
            "tower-of-babil-8f-0",
            "tower-of-babil-8f-1",
            "tower-of-babil-7f-1",
            "tower-of-babil-6f-1",
            "tower-of-babil-5f-1",
            "tower-of-babil-5f-super-cannon-0",
            "tower-of-babil-5f-2",
            "tower-of-babil-4f-1",
            "tower-of-babil-3f-1",
            "tower-of-babil-2f-1",
            "tower-of-babil-1f-1",
            "overworld-airship-2-0",
            "overworld-baron-0",
            "castle-baron-5",
            "castle-baron-1f-2",
            "castle-baron-6",
            "castle-baron-right-passage-0",
            "castle-baron-7",
            "overworld-airship-3-0",
            "overworld-airship-3-1",
            "overworld-airship-3-2",
            "overworld-airship-3-3",
            "overworld-airship-3-4",
            "overworld-airship-3-5",
            "overworld-airship-3-6",
            "overworld-airship-3-7",
            "overworld-airship-3-8",
            "overworld-airship-3-9",
            "overworld-eblan-0",
            "cave-eblana-b1f-0",
            "cave-eblana-b2f-0",
            "cave-eblana-b2f-weapons-armors-0",
            "cave-eblana-b2f-1",
            "pass-to-babil-south-0",
            "pass-to-babil-north-0",
            "pass-to-babil-south-1",
            "pass-to-babil-north-1",
            "pass-to-babil-north-2",
            "pass-to-babil-north-save-room-0",
            "pass-to-babil-north-3",
            "tower-of-babil-1f-upper-0",
            "tower-of-babil-b2f-0",
            "tower-of-babil-b3f-0",
            "tower-of-babil-b4f-0",
            "tower-of-babil-b3f-1",
            "tower-of-babil-b4f-1",
            "tower-of-babil-b5f-0",
            "tower-of-babil-crystal-room-0",
            "tower-of-babil-8f-revisit-0",
            "tower-of-babil-7f-revisit-0",
            "tower-of-babil-6f-revisit-0",
            "underworld-airship-0-0",
            "underworld-airship-0-1",
            "underworld-castle-of-dwarves-4",
            "castle-of-dwarves-1",
            "castle-of-dwarves-1f-3",
            "castle-of-dwarves-left-tower-2f-0",
            "castle-of-dwarves-b1f-1",
            "castle-of-dwarves-infirmary-0",
            "underworld-castle-of-dwarves-5",
            "underworld-sealed-cave-1-rosa",
            "sealed-cave-0",
            "underworld-sealed-cave-2",
            "underworld-castle-of-dwarves-6",
            "castle-of-dwarves-1",
            "castle-of-dwarves-1f-4",
            "castle-of-dwarves-kings-room-3",
            "underworld-castle-of-dwarves-7",
            "underworld-airship-2-0",
            "underworld-airship-2-1",
            "overworld-airship-7-0",
            "overworld-mysidia-3-rosa",
            "mysidia-6",
            "overworld-mysidia-4",
            "big-whale-crystal",
            "lunar-overworld-1",
            "big-whale-exit",
            "lunar-overworld-5-0",
            "lunar-path-west-0-0",
            "lunar-overworld-6-0",
            "lunar-path-east-0-0",
            "lunar-overworld-7-0",
            "lunars-lair-1f-0-0",
            "lunar-overworld-8-0",
            "lunar-path-east-1-0",
            "lunar-overworld-9-0",
            "lunar-path-west-1-0",
            "lunar-overworld-10-0",
            "big-whale-console",
            "lunar-overworld-4-1",
            "big-whale-exit",
            "lunar-overworld-2-1",
            "hummingway-cave-0-1",
            "lunar-overworld-3-1",
            "big-whale-crystal",
            "giant-of-babil-mouth-0",
            "giant-of-babil-neck-0",
            "giant-of-babil-chest-0",
            "giant-of-babil-stomach-0",
            "giant-of-babil-passage-1",
            "giant-of-babil-lung-0",
            "giant-of-babil-cpu-0",
            "big-whale-console",
            "lunar-overworld-11-0",
            "big-whale-exit",
            "lunar-overworld-12-0",
            "lunar-path-west-2",
            "lunar-overworld-13-0",
            "lunar-path-east-2",
            "lunar-overworld-14-0",
            "lunars-lair-1f-1",
            "lunars-lair-2f-0",
            "lunar-subterrane-b1-0",
            "lunar-subterrane-b2-0",
            "lunar-subterrane-b3-0",
            "lunar-subterrane-b4-0",
            "lunar-subterrane-b4-passage-0",
            "lunar-subterrane-b4-1",
            "lunar-subterrane-b5-0",
            "lunar-subterrane-b5-passage-a-2",
            "lunar-subterrane-b5-1",
            "lunar-subterrane-b5-passage-b-1",
            "lunar-subterrane-b5-2",
            "lunar-subterrane-b5-3",
            "lunar-subterrane-b5-pink-puff-room-0",
            "lunar-subterrane-b5-4",
            "lunar-subterrane-b6-0",
            "lunar-subterrane-b6-1",
            "lunar-subterrane-b6-passage-0",
            "lunar-subterrane-b7-1",
            "lunar-subterrane-b7-save-room-1",
            "lunar-subterrane-b7-2",
            "lunar-core-b1-0",
            "lunar-core-b1-1",
            "lunar-core-b2-0",
            "lunar-core-b3-0",
            "lunar-core-b3-1",
            "lunar-core-b4-0",
            "lunar-core-b5-0"
        ]
    };

    data.variableData = {
        "antlion-b1f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
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
            "routes": {},
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
            "routes": {},
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
            "routes": {},
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
            "routes": {},
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
            "routes": {},
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
            "routes": {},
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
            "routes": {},
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
            "routes": {},
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
            "routes": {},
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
            "descriptions": {
                1: "Enter the Charm Room in Antlion B2F [before Antlion]."
            },
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
            "descriptions": {
                1: "Enter the Charm Room in Antlion B2F [after Antlion]."
            },
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
            "routes": {},
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
            "routes": {},
            "paths": {
                "antlions-nest-1": {
                    "index": "0",
                    "location": "Antlion's Nest [after Antlion]",
                    "disambiguation": ""
                }
            }
        },
        "castle-baron-0": {
            "type": VariableFlags.EXTRA,
            "description": "Castle Baron [before Kainazzo]",
            "routes": {},
            "paths": {
                "castle-baron-1f-0": {
                    "index": "1",
                    "location": "Castle Baron 1F [before Kainazzo]",
                    "disambiguation": ""
                }
            }
        },
        "castle-baron-1": {
            "type": VariableFlags.EXTRA,
            "description": "Castle Baron [after Valvalis]",
            "routes": {
                3: { "castle-baron-left-tower-room-0": 3 }
            },
            "paths": {
                "castle-baron-left-tower-room-0": {
                    "index": "0",
                    "location": "Castle Baron Left Tower Room [after Valvalis]",
                    "disambiguation": ""
                }
            }
        },
        "castle-baron-2": {
            "type": VariableFlags.EXTRA,
            "description": "Castle Baron [before Hook Installation]",
            "routes": {},
            "paths": {
                "castle-baron-1f-2": {
                    "index": "0",
                    "location": "Castle Baron 1F [before Hook Installation]",
                    "disambiguation": ""
                }
            }
        },
        "castle-baron-b1f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "castle-baron-b1f-0": {
                    "index": "0",
                    "location": "Castle Baron B1F",
                    "disambiguation": ""
                }
            }
        },
        "castle-baron-b1f-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "castle-baron-b1f-1": {
                    "index": "0",
                    "location": "Castle Baron B1F [before Save Room]",
                    "disambiguation": ""
                }
            }
        },
        "castle-baron-b1f-3": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "castle-baron-b1f-3": {
                    "index": "0",
                    "location": "Castle Baron B1F [before Save Room]",
                    "disambiguation": ""
                }
            }
        },
        "castle-baron-b1f-2": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "castle-baron-b1f-2": {
                    "index" :"0",
                    "location": "Castle Baron B1F [after Save Room]",
                    "disambiguation": ""
                }
            }
        },
        "castle-baron-b1f-choice-0": {
            "type": VariableFlags.CHOICE,
            "descriptions": {
                1: "Enter the Save Room in Castle Baron B1F."
            },
            "paths": {
                0: {
                    "castle-baron-b1f-1": { "enabled": false },
                    "castle-baron-b1f-save-room-0": { "enabled": false },
                    "castle-baron-b1f-2": { "enabled": false }
                },
                1: {
                    "castle-baron-b1f-0": { "enabled": false },
                    "castle-baron-b1f-1": {
                        "enabled": true,
                        "index": "0",
                        "location": "Castle Baron B1F",
                        "instruction": "Enter the Save Room"
                    }
                }
            }
        },
        "castle-baron-b1f-save-room-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "castle-baron-b1f-save-room-0": {
                    "index": "0",
                    "location": "Castle Baron B1F Save Room",
                    "disambiguation": ""
                }
            }
        },
        "castle-baron-b2f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "castle-baron-b2f-0": {
                    "index": "0",
                    "location": "Castle Baron B2F",
                    "disambiguation": ""
                }
            }
        },
        "castle-baron-b3f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "castle-baron-b3f-0": {
                    "index": "0",
                    "location": "Castle Baron B3F",
                    "disambiguation": ""
                }
            }
        },
        "castle-of-dwarves-0": {
            "type": VariableFlags.EXTRA,
            "description": "the Castle of Dwarves [after Golbez]",
            "routes": {
                1: {
                    "castle-of-dwarves-kings-room-1": 0,
                    "castle-of-dwarves-1f-1": 0,
                    "castle-of-dwarves-right-tower-2f-0": 0,
                    "castle-of-dwarves-right-tower-3f-0": 0,
                    "castle-of-dwarves-right-tower-3f-2": 0,
                    "castle-of-dwarves-right-tower-2f-2": 0,
                    "castle-of-dwarves-b2f-0": 0,
                    "castle-of-dwarves-dwarf-base-0": 1
                },
                2: {
                    "castle-of-dwarves-kings-room-1": 0,
                    "castle-of-dwarves-1f-1": 0,
                    "castle-of-dwarves-right-tower-2f-0": 0,
                    "castle-of-dwarves-right-tower-3f-0": 0,
                    "castle-of-dwarves-right-tower-3f-2": 0,
                    "castle-of-dwarves-right-tower-2f-2": 0,
                    "castle-of-dwarves-b2f-0": 0,
                    "castle-of-dwarves-dwarf-base-0": 2
                },
                3: {
                    "castle-of-dwarves-kings-room-1": 0,
                    "castle-of-dwarves-1f-1": 0,
                    "castle-of-dwarves-right-tower-2f-0": 0,
                    "castle-of-dwarves-right-tower-3f-0": 0,
                    "castle-of-dwarves-right-tower-3f-2": 0,
                    "castle-of-dwarves-right-tower-2f-2": 0,
                    "castle-of-dwarves-b2f-0": 1,
                    "castle-of-dwarves-dwarf-base-0": 2
                },
                4: {
                    "castle-of-dwarves-kings-room-1": 0,
                    "castle-of-dwarves-1f-1": 0,
                    "castle-of-dwarves-right-tower-2f-0": 0,
                    "castle-of-dwarves-right-tower-3f-0": 0,
                    "castle-of-dwarves-right-tower-3f-2": 0,
                    "castle-of-dwarves-right-tower-2f-2": 0,
                    "castle-of-dwarves-b2f-0": 2,
                    "castle-of-dwarves-dwarf-base-0": 2
                },
                5: {
                    "castle-of-dwarves-kings-room-1": 0,
                    "castle-of-dwarves-1f-1": 0,
                    "castle-of-dwarves-right-tower-2f-0": 0,
                    "castle-of-dwarves-right-tower-3f-0": 0,
                    "castle-of-dwarves-right-tower-3f-2": 0,
                    "castle-of-dwarves-right-tower-2f-2": 1,
                    "castle-of-dwarves-b2f-0": 2,
                    "castle-of-dwarves-dwarf-base-0": 2
                },
                6: {
                    "castle-of-dwarves-kings-room-1": 0,
                    "castle-of-dwarves-1f-1": 0,
                    "castle-of-dwarves-right-tower-2f-0": 0,
                    "castle-of-dwarves-right-tower-3f-0": 0,
                    "castle-of-dwarves-right-tower-3f-2": 1,
                    "castle-of-dwarves-right-tower-2f-2": 1,
                    "castle-of-dwarves-b2f-0": 2,
                    "castle-of-dwarves-dwarf-base-0": 2
                },
                7: {
                    "castle-of-dwarves-kings-room-1": 0,
                    "castle-of-dwarves-1f-1": 0,
                    "castle-of-dwarves-right-tower-2f-0": 0,
                    "castle-of-dwarves-right-tower-3f-0": 1,
                    "castle-of-dwarves-right-tower-3f-2": 1,
                    "castle-of-dwarves-right-tower-2f-2": 1,
                    "castle-of-dwarves-b2f-0": 2,
                    "castle-of-dwarves-dwarf-base-0": 2
                },
                8: {
                    "castle-of-dwarves-kings-room-1": 0,
                    "castle-of-dwarves-1f-1": 1,
                    "castle-of-dwarves-right-tower-2f-0": 0,
                    "castle-of-dwarves-right-tower-3f-0": 1,
                    "castle-of-dwarves-right-tower-3f-2": 1,
                    "castle-of-dwarves-right-tower-2f-2": 1,
                    "castle-of-dwarves-b2f-0": 2,
                    "castle-of-dwarves-dwarf-base-0": 2
                },
                9: {
                    "castle-of-dwarves-kings-room-1": 1,
                    "castle-of-dwarves-1f-1": 1,
                    "castle-of-dwarves-right-tower-2f-0": 0,
                    "castle-of-dwarves-right-tower-3f-0": 1,
                    "castle-of-dwarves-right-tower-3f-2": 1,
                    "castle-of-dwarves-right-tower-2f-2": 1,
                    "castle-of-dwarves-b2f-0": 2,
                    "castle-of-dwarves-dwarf-base-0": 2
                },
                10: {
                    "castle-of-dwarves-kings-room-1": 2,
                    "castle-of-dwarves-1f-1": 1,
                    "castle-of-dwarves-right-tower-2f-0": 0,
                    "castle-of-dwarves-right-tower-3f-0": 1,
                    "castle-of-dwarves-right-tower-3f-2": 1,
                    "castle-of-dwarves-right-tower-2f-2": 1,
                    "castle-of-dwarves-b2f-0": 2,
                    "castle-of-dwarves-dwarf-base-0": 2
                },
                11: {
                    "castle-of-dwarves-kings-room-1": 2,
                    "castle-of-dwarves-1f-1": 1,
                    "castle-of-dwarves-right-tower-2f-0": 1,
                    "castle-of-dwarves-right-tower-3f-0": 1,
                    "castle-of-dwarves-right-tower-3f-2": 1,
                    "castle-of-dwarves-right-tower-2f-2": 1,
                    "castle-of-dwarves-b2f-0": 2,
                    "castle-of-dwarves-dwarf-base-0": 2
                },
                12: {
                    "castle-of-dwarves-kings-room-1": 2,
                    "castle-of-dwarves-1f-1": 1,
                    "castle-of-dwarves-right-tower-2f-0": 2,
                    "castle-of-dwarves-right-tower-3f-0": 1,
                    "castle-of-dwarves-right-tower-3f-2": 1,
                    "castle-of-dwarves-right-tower-2f-2": 1,
                    "castle-of-dwarves-b2f-0": 2,
                    "castle-of-dwarves-dwarf-base-0": 2
                },
                13: {
                    "castle-of-dwarves-kings-room-1": 2,
                    "castle-of-dwarves-1f-1": 1,
                    "castle-of-dwarves-right-tower-2f-0": 3,
                    "castle-of-dwarves-right-tower-3f-0": 1,
                    "castle-of-dwarves-right-tower-3f-2": 1,
                    "castle-of-dwarves-right-tower-2f-2": 1,
                    "castle-of-dwarves-b2f-0": 2,
                    "castle-of-dwarves-dwarf-base-0": 2
                },
                14: {
                    "castle-of-dwarves-kings-room-1": 2,
                    "castle-of-dwarves-1f-1": 1,
                    "castle-of-dwarves-right-tower-2f-0": 4,
                    "castle-of-dwarves-right-tower-3f-0": 1,
                    "castle-of-dwarves-right-tower-3f-2": 1,
                    "castle-of-dwarves-right-tower-2f-2": 1,
                    "castle-of-dwarves-b2f-0": 2,
                    "castle-of-dwarves-dwarf-base-0": 2
                },
                15: {
                    "castle-of-dwarves-kings-room-1": 2,
                    "castle-of-dwarves-1f-1": 1,
                    "castle-of-dwarves-right-tower-2f-0": 5,
                    "castle-of-dwarves-right-tower-3f-0": 1,
                    "castle-of-dwarves-right-tower-3f-2": 1,
                    "castle-of-dwarves-right-tower-2f-2": 1,
                    "castle-of-dwarves-b2f-0": 2,
                    "castle-of-dwarves-dwarf-base-0": 2
                },
                16: {
                    "castle-of-dwarves-kings-room-1": 2,
                    "castle-of-dwarves-1f-1": 1,
                    "castle-of-dwarves-right-tower-2f-0": 6,
                    "castle-of-dwarves-right-tower-3f-0": 1,
                    "castle-of-dwarves-right-tower-3f-2": 1,
                    "castle-of-dwarves-right-tower-2f-2": 1,
                    "castle-of-dwarves-b2f-0": 2,
                    "castle-of-dwarves-dwarf-base-0": 2
                },
                17: {
                    "castle-of-dwarves-kings-room-1": 2,
                    "castle-of-dwarves-1f-1": 1,
                    "castle-of-dwarves-right-tower-2f-0": 7,
                    "castle-of-dwarves-right-tower-3f-0": 1,
                    "castle-of-dwarves-right-tower-3f-1": 1,
                    "castle-of-dwarves-right-tower-2f-1": 1,
                    "castle-of-dwarves-b2f-0": 2,
                    "castle-of-dwarves-dwarf-base-0": 2
                },
                18: {
                    "castle-of-dwarves-kings-room-1": 2,
                    "castle-of-dwarves-1f-1": 1,
                    "castle-of-dwarves-right-tower-2f-0": 8,
                    "castle-of-dwarves-right-tower-3f-0": 1,
                    "castle-of-dwarves-right-tower-3f-2": 1,
                    "castle-of-dwarves-right-tower-2f-2": 1,
                    "castle-of-dwarves-b2f-0": 2,
                    "castle-of-dwarves-dwarf-base-0": 2
                },
                19: {
                    "castle-of-dwarves-kings-room-1": 2,
                    "castle-of-dwarves-1f-1": 1,
                    "castle-of-dwarves-right-tower-2f-0": 9,
                    "castle-of-dwarves-right-tower-3f-0": 1,
                    "castle-of-dwarves-right-tower-3f-2": 1,
                    "castle-of-dwarves-right-tower-2f-2": 1,
                    "castle-of-dwarves-b2f-0": 2,
                    "castle-of-dwarves-dwarf-base-0": 2
                },
                20: {
                    "castle-of-dwarves-kings-room-1": 2,
                    "castle-of-dwarves-1f-1": 1,
                    "castle-of-dwarves-right-tower-2f-0": 10,
                    "castle-of-dwarves-right-tower-3f-0": 1,
                    "castle-of-dwarves-right-tower-3f-2": 1,
                    "castle-of-dwarves-right-tower-2f-2": 1,
                    "castle-of-dwarves-b2f-0": 2,
                    "castle-of-dwarves-dwarf-base-0": 2
                }
            },
            "paths": {
                "castle-of-dwarves-kings-room-1": {
                    "index": "0",
                    "location": "Castle of Dwarves King's Room [after Golbez]",
                    "disambiguation": ""
                },
                "castle-of-dwarves-1f-1": {
                    "index": "0",
                    "location": "Castle of Dwarves 1F [after Golbez]",
                    "disambiguation": ""
                },
                "castle-of-dwarves-right-tower-2f-0": {
                    "index": "0",
                    "location": "Castle of Dwarves Right Tower 2F [before Strength Ring]",
                    "disambiguation": ""
                },
                "castle-of-dwarves-right-tower-3f-0": {
                    "index": "0",
                    "location": "Castle of Dwarves Right Tower 3F [before Strength Ring]",
                    "disambiguation": ""
                },
                "castle-of-dwarves-right-tower-3f-2": {
                    "index": "0",
                    "location": "Castle of Dwarves Right Tower 3F [after Strength Ring]",
                    "disambiguation": ""
                },
                "castle-of-dwarves-right-tower-2f-2": {
                    "index": "0",
                    "location": "Castle of Dwarves Right Tower 2F [after Strength Ring]",
                    "disambiguation": ""
                },
                "castle-of-dwarves-b2f-0": {
                    "index": "0",
                    "location": "Castle of Dwarves B2F",
                    "disambiguation": ""
                },
                "castle-of-dwarves-dwarf-base-0": {
                    "index": "0",
                    "location": "Castle of Dwarves Dwarf Base",
                    "disambiguation": ""
                }
            }
        },
        "castle-of-dwarves-1": {
            "type": VariableFlags.EXTRA,
            "description": "the Castle of Dwarves [after Golbez]",
            "routes": {
                1: {
                    "castle-of-dwarves-1f-2": 0,
                    "castle-of-dwarves-right-tower-2f-1": 0,
                    "castle-of-dwarves-right-tower-3f-1": 0,
                    "castle-of-dwarves-right-tower-3f-3": 0,
                    "castle-of-dwarves-right-tower-2f-3": 0,
                    "castle-of-dwarves-b2f-1": 0,
                    "castle-of-dwarves-dwarf-base-1": 1
                },
                2: {
                    "castle-of-dwarves-1f-2": 0,
                    "castle-of-dwarves-right-tower-2f-1": 0,
                    "castle-of-dwarves-right-tower-3f-1": 0,
                    "castle-of-dwarves-right-tower-3f-3": 0,
                    "castle-of-dwarves-right-tower-2f-3": 0,
                    "castle-of-dwarves-b2f-1": 0,
                    "castle-of-dwarves-dwarf-base-1": 2
                },
                3: {
                    "castle-of-dwarves-1f-2": 0,
                    "castle-of-dwarves-right-tower-2f-1": 0,
                    "castle-of-dwarves-right-tower-3f-1": 0,
                    "castle-of-dwarves-right-tower-3f-3": 0,
                    "castle-of-dwarves-right-tower-2f-3": 0,
                    "castle-of-dwarves-b2f-1": 1,
                    "castle-of-dwarves-dwarf-base-1": 2
                },
                4: {
                    "castle-of-dwarves-1f-2": 0,
                    "castle-of-dwarves-right-tower-2f-1": 0,
                    "castle-of-dwarves-right-tower-3f-1": 0,
                    "castle-of-dwarves-right-tower-3f-3": 0,
                    "castle-of-dwarves-right-tower-2f-3": 0,
                    "castle-of-dwarves-b2f-1": 2,
                    "castle-of-dwarves-dwarf-base-1": 2
                },
                5: {
                    "castle-of-dwarves-1f-2": 0,
                    "castle-of-dwarves-right-tower-2f-1": 0,
                    "castle-of-dwarves-right-tower-3f-1": 0,
                    "castle-of-dwarves-right-tower-3f-3": 0,
                    "castle-of-dwarves-right-tower-2f-3": 1,
                    "castle-of-dwarves-b2f-1": 2,
                    "castle-of-dwarves-dwarf-base-1": 2
                },
                6: {
                    "castle-of-dwarves-1f-2": 0,
                    "castle-of-dwarves-right-tower-2f-1": 0,
                    "castle-of-dwarves-right-tower-3f-1": 0,
                    "castle-of-dwarves-right-tower-3f-3": 1,
                    "castle-of-dwarves-right-tower-2f-3": 1,
                    "castle-of-dwarves-b2f-1": 2,
                    "castle-of-dwarves-dwarf-base-1": 2
                },
                7: {
                    "castle-of-dwarves-1f-2": 0,
                    "castle-of-dwarves-right-tower-2f-1": 0,
                    "castle-of-dwarves-right-tower-3f-1": 1,
                    "castle-of-dwarves-right-tower-3f-3": 1,
                    "castle-of-dwarves-right-tower-2f-3": 1,
                    "castle-of-dwarves-b2f-1": 2,
                    "castle-of-dwarves-dwarf-base-1": 2
                },
                8: {
                    "castle-of-dwarves-1f-2": 1,
                    "castle-of-dwarves-right-tower-2f-1": 0,
                    "castle-of-dwarves-right-tower-3f-1": 1,
                    "castle-of-dwarves-right-tower-3f-3": 1,
                    "castle-of-dwarves-right-tower-2f-3": 1,
                    "castle-of-dwarves-b2f-1": 2,
                    "castle-of-dwarves-dwarf-base-1": 2
                },
                9: {
                    "castle-of-dwarves-1f-2": 1,
                    "castle-of-dwarves-right-tower-2f-1": 1,
                    "castle-of-dwarves-right-tower-3f-1": 1,
                    "castle-of-dwarves-right-tower-3f-3": 1,
                    "castle-of-dwarves-right-tower-2f-3": 1,
                    "castle-of-dwarves-b2f-1": 2,
                    "castle-of-dwarves-dwarf-base-1": 2
                },
                10: {
                    "castle-of-dwarves-1f-2": 1,
                    "castle-of-dwarves-right-tower-2f-1": 2,
                    "castle-of-dwarves-right-tower-3f-1": 1,
                    "castle-of-dwarves-right-tower-3f-3": 1,
                    "castle-of-dwarves-right-tower-2f-3": 1,
                    "castle-of-dwarves-b2f-1": 2,
                    "castle-of-dwarves-dwarf-base-1": 2
                },
                11: {
                    "castle-of-dwarves-1f-2": 1,
                    "castle-of-dwarves-right-tower-2f-1": 3,
                    "castle-of-dwarves-right-tower-3f-1": 1,
                    "castle-of-dwarves-right-tower-3f-3": 1,
                    "castle-of-dwarves-right-tower-2f-3": 1,
                    "castle-of-dwarves-b2f-1": 2,
                    "castle-of-dwarves-dwarf-base-1": 2
                },
                12: {
                    "castle-of-dwarves-1f-2": 1,
                    "castle-of-dwarves-right-tower-2f-1": 4,
                    "castle-of-dwarves-right-tower-3f-1": 1,
                    "castle-of-dwarves-right-tower-3f-3": 1,
                    "castle-of-dwarves-right-tower-2f-3": 1,
                    "castle-of-dwarves-b2f-1": 2,
                    "castle-of-dwarves-dwarf-base-1": 2
                },
                13: {
                    "castle-of-dwarves-1f-2": 1,
                    "castle-of-dwarves-right-tower-2f-1": 5,
                    "castle-of-dwarves-right-tower-3f-1": 1,
                    "castle-of-dwarves-right-tower-3f-3": 1,
                    "castle-of-dwarves-right-tower-2f-3": 1,
                    "castle-of-dwarves-b2f-1": 2,
                    "castle-of-dwarves-dwarf-base-1": 2
                },
                14: {
                    "castle-of-dwarves-1f-2": 1,
                    "castle-of-dwarves-right-tower-2f-1": 6,
                    "castle-of-dwarves-right-tower-3f-1": 1,
                    "castle-of-dwarves-right-tower-3f-3": 1,
                    "castle-of-dwarves-right-tower-2f-3": 1,
                    "castle-of-dwarves-b2f-1": 2,
                    "castle-of-dwarves-dwarf-base-1": 2
                },
                15: {
                    "castle-of-dwarves-1f-2": 1,
                    "castle-of-dwarves-right-tower-2f-1": 7,
                    "castle-of-dwarves-right-tower-3f-1": 1,
                    "castle-of-dwarves-right-tower-3f-3": 1,
                    "castle-of-dwarves-right-tower-2f-3": 1,
                    "castle-of-dwarves-b2f-1": 2,
                    "castle-of-dwarves-dwarf-base-1": 2
                },
                16: {
                    "castle-of-dwarves-1f-2": 1,
                    "castle-of-dwarves-right-tower-2f-1": 8,
                    "castle-of-dwarves-right-tower-3f-1": 1,
                    "castle-of-dwarves-right-tower-3f-3": 1,
                    "castle-of-dwarves-right-tower-2f-3": 1,
                    "castle-of-dwarves-b2f-1": 2,
                    "castle-of-dwarves-dwarf-base-1": 2
                },
                17: {
                    "castle-of-dwarves-1f-2": 1,
                    "castle-of-dwarves-right-tower-2f-1": 9,
                    "castle-of-dwarves-right-tower-3f-1": 1,
                    "castle-of-dwarves-right-tower-3f-3": 1,
                    "castle-of-dwarves-right-tower-2f-3": 1,
                    "castle-of-dwarves-b2f-1": 2,
                    "castle-of-dwarves-dwarf-base-1": 2
                },
                18: {
                    "castle-of-dwarves-1f-2": 1,
                    "castle-of-dwarves-right-tower-2f-1": 10,
                    "castle-of-dwarves-right-tower-3f-1": 1,
                    "castle-of-dwarves-right-tower-3f-3": 1,
                    "castle-of-dwarves-right-tower-2f-3": 1,
                    "castle-of-dwarves-b2f-1": 2,
                    "castle-of-dwarves-dwarf-base-1": 2
                }
            },
            "paths": {
                "castle-of-dwarves-1f-2": {
                    "index": "0",
                    "location": "Castle of Dwarves 1F [after Golbez]",
                    "disambiguation": ""
                },
                "castle-of-dwarves-right-tower-2f-1": {
                    "index": "0",
                    "location": "Castle of Dwarves Right Tower 2F [before Strength Ring]",
                    "disambiguation": ""
                },
                "castle-of-dwarves-right-tower-3f-1": {
                    "index": "0",
                    "location": "Castle of Dwarves Right Tower 3F [before Strength Ring]",
                    "disambiguation": ""
                },
                "castle-of-dwarves-right-tower-3f-3": {
                    "index": "0",
                    "location": "Castle of Dwarves Right Tower 3F [after Strength Ring]",
                    "disambiguation": ""
                },
                "castle-of-dwarves-right-tower-2f-3": {
                    "index": "0",
                    "location": "Castle of Dwarves Right Tower 2F [after Strength Ring]",
                    "disambiguation": ""
                },
                "castle-of-dwarves-b2f-1": {
                    "index": "0",
                    "location": "Castle of Dwarves B2F",
                    "disambiguation": ""
                },
                "castle-of-dwarves-dwarf-base-1": {
                    "index": "0",
                    "location": "Castle of Dwarves Dwarf Base",
                    "disambiguation": ""
                }
            }
        },
        "castle-of-dwarves-2": {
            "type": VariableFlags.EXTRA,
            "description": "the Castle of Dwarves [after Rubicant]",
            "routes": {
                1: {
                    "castle-of-dwarves-1f-3": 1
                },
                2: {
                    "castle-of-dwarves-1f-3": 2
                },
                3: {
                    "castle-of-dwarves-1f-3": 3
                },
                4: {
                    "castle-of-dwarves-1f-3": 4
                }
            },
            "paths": {
                "castle-of-dwarves-1f-3": {
                    "index": "0",
                    "location": "Castle of Dwarves 1F [after Rubicant]",
                    "disambiguation": ""
                }
            }
        },
        "castle-of-dwarves-3": {
            "type": VariableFlags.EXTRA,
            "description": "the Castle of Dwarves [after Sealed Cave]",
            "routes": {},
            "paths": {
                "castle-of-dwarves-kings-room-3": {
                    "index": "0",
                    "location": "Castle of Dwarves 1F [after Sealed Cave]",
                    "disambiguation": ""
                }
            }
        },
        "castle-of-dwarves-choice-0": {
            "type": VariableFlags.CHOICE,
            "descriptions": {
                0: "Walk out of the Castle of Dwarves Crystal Room.",
                1: "Cast Warp twice to leave the Castle of Dwarves Crystal Room."
            },
            "paths": {
                0: {
                    "castle-of-dwarves-crystal-room-0": {
                        "enabled": true,
                        "index": "0",
                        "location": "Castle of Dwarves Crystal Room",
                        "instruction": "Walk out of the Crystal Room"
                    },
                    "castle-of-dwarves-crystal-room-1": { "enabled": false },
                    "castle-of-dwarves-1f-2": { "enabled": false },
                    "castle-of-dwarves-right-tower-2f-1": { "enabled": false },
                    "castle-of-dwarves-right-tower-3f-1": { "enabled": false },
                    "castle-of-dwarves-right-tower-3f-3": { "enabled": false },
                    "castle-of-dwarves-right-tower-2f-3": { "enabled": false },
                    "castle-of-dwarves-b2f-1": { "enabled": false },
                    "castle-of-dwarves-dwarf-base-1": { "enabled": false }
                },
                1: {
                    "castle-of-dwarves-crystal-room-0": { "enabled": false },
                    "castle-of-dwarves-crystal-room-1": {
                        "enabled": true,
                        "index": "0",
                        "location": "Castle of Dwarves Crystal Room",
                        "instruction": "Cast Warp twice to leave the Crystal Room"
                    },
                    "castle-of-dwarves-kings-room-1": { "enabled": false },
                    "castle-of-dwarves-1f-1": { "enabled": false },
                    "castle-of-dwarves-right-tower-2f-0": { "enabled": false },
                    "castle-of-dwarves-right-tower-3f-0": { "enabled": false },
                    "castle-of-dwarves-right-tower-3f-2": { "enabled": false },
                    "castle-of-dwarves-right-tower-2f-2": { "enabled": false },
                    "castle-of-dwarves-b2f-0": { "enabled": false },
                    "castle-of-dwarves-dwarf-base-0": { "enabled": false }
                }
            }
        },
        "cave-eblana-b1f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "cave-eblana-b1f-0": {
                    "index": "0",
                    "location": "Cave Eblana B1F",
                    "disambiguation": ""
                }
            }
        },
        "cave-eblana-b2f-0": {
            "type": VariableFlags.EXTRA,
            "description": "Cave Eblana B2F",
            "routes": {
                1: {
                    "cave-eblana-b2f-weapons-armors-0": 1
                },
                2: {
                    "cave-eblana-b2f-weapons-armors-0": 2
                }
            },
            "paths": {
                "cave-eblana-b2f-weapons-armors-0": {
                    "index": "0",
                    "location": "Cave Eblana B2F Weapons/Armors",
                    "disambiguation": ""
                }
            }
        },
        "cave-magnes-b1f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "cave-magnes-b1f-0": {
                    "index": "0",
                    "location": "Cave Magnes B1F",
                    "disambiguation": ""
                }
            }
        },
        "cave-magnes-b2f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "cave-magnes-b2f-0": {
                    "index": "0",
                    "location": "Cave Magnes B2F",
                    "disambiguation": ""
                }
            }
        },
        "cave-magnes-b3f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "cave-magnes-b3f-0": {
                    "index": "0",
                    "location": "Cave Magnes B3F",
                    "disambiguation": ""
                }
            }
        },
        "cave-magnes-b3f-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "cave-magnes-b3f-1": {
                    "index": "0",
                    "location": "Cave Magnes B3F [before Save Room]",
                    "disambiguation": ""
                }
            }
        },
        "cave-magnes-b3f-2": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "cave-magnes-b3f-2": {
                    "index": "0",
                    "location": "Cave Magnes B3F [after Save Room]",
                    "disambiguation": ""
                }
            }
        },
        "cave-magnes-b3f-choice-0": {
            "type": VariableFlags.CHOICE,
            "descriptions": {
                1: "Enter the Save Room in Cave Magnes B3F."
            },
            "paths": {
                0: {
                    "cave-magnes-b3f-1": { "enabled": false },
                    "cave-magnes-b3f-save-room-0": { "enabled": false },
                    "cave-magnes-b3f-2": { "enabled": false }
                },
                1: {
                    "cave-magnes-b3f-0": { "enabled": false },
                    "cave-magnes-b3f-1": {
                        "enabled": true,
                        "index": "0",
                        "location": "Cave Magnes B3F",
                        "instruction": "Enter the Save Room"
                    }
                }
            }
        },
        "cave-magnes-b3f-passage-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "cave-magnes-b3f-passage-0": {
                    "index": "0",
                    "location": "Cave Magnes B3F Passage",
                    "disambiguation": ""
                }
            }
        },
        "cave-magnes-b3f-save-room-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "cave-magnes-b3f-save-room-0": {
                    "index": "0",
                    "location": "Cave Magnes B3F Save Room",
                    "disambiguation": ""
                }
            }
        },
        "cave-magnes-b4f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "cave-magnes-b4f-0": {
                    "index": "0",
                    "location": "Cave Magnes B4F",
                    "disambiguation": ""
                }
            }
        },
        "cave-magnes-b4f-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "cave-magnes-b4f-1": {
                    "index": "0",
                    "location": "Cave Magnes B4F [before Save Room]",
                    "disambiguation": ""
                }
            }
        },
        "cave-magnes-b4f-2": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "cave-magnes-b4f-2": {
                    "index": "0",
                    "location": "Cave Magnes B4F [after Save Room]",
                    "disambiguation": ""
                }
            }
        },
        "cave-magnes-b4f-choice-0": {
            "type": VariableFlags.CHOICE,
            "descriptions": {
                1: "Enter the Save Room in Cave Magnes B4F."
            },
            "paths": {
                0: {
                    "cave-magnes-b4f-1": { "enabled": false },
                    "cave-magnes-b4f-save-room-0": { "enabled": false },
                    "cave-magnes-b4f-2": { "enabled": false }
                },
                1: {
                    "cave-magnes-b4f-0": { "enabled": false },
                    "cave-magnes-b4f-1": {
                        "enabled": true,
                        "index": "0",
                        "location": "Cave Magnes B4F",
                        "instruction": "Enter the Save Room"
                    },
                }
            }
        },
        "cave-magnes-b4f-save-room-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "cave-magnes-b4f-save-room-0": {
                    "index": "0",
                    "location": "Cave Magnes B4F Save Room",
                    "disambiguation": ""
                }
            }
        },
        "damcyan-0": {
            "type": VariableFlags.EXTRA,
            "description": "Damcyan",
            "routes": {
                1: {
                    "damcyan-1f-0": 0,
                    "damcyan-2f-0": 1
                }
            },
            "paths": {
                "damcyan-1f-0": {
                    "index": "0",
                    "location": "Damcyan 1F",
                    "disambiguation": ""
                },
                "damcyan-2f-0": {
                    "index": "0",
                    "location": "Damcyan 2F",
                    "disambiguation": ""
                }
            }
        },
        "fabul-0": {
            "type": VariableFlags.EXTRA,
            "description": "Fabul",
            "routes": {
                1: {
                    "fabul-kings-room-1": 0,
                    "fabul-1f-1": 1,
                    "fabul-inn-0": 0,
                    "fabul-right-tower-3f-0": 0
                },
                2: {
                    "fabul-kings-room-1": 0,
                    "fabul-1f-1": 0,
                    "fabul-inn-0": 2,
                    "fabul-right-tower-3f-0": 0
                },
                3: {
                    "fabul-kings-room-1": 0,
                    "fabul-1f-1": 1,
                    "fabul-inn-0": 2,
                    "fabul-right-tower-3f-0": 0
                },
                4: {
                    "fabul-kings-room-1": 0,
                    "fabul-1f-1": 1,
                    "fabul-inn-0": 2,
                    "fabul-right-tower-3f-0": 1
                },
                5: {
                    "fabul-kings-room-1": 1,
                    "fabul-1f-1": 1,
                    "fabul-inn-0": 2,
                    "fabul-right-tower-3f-0": 1
                },
                6: {
                    "fabul-kings-room-1": 6,
                    "fabul-1f-1": 0,
                    "fabul-inn-0": 0,
                    "fabul-right-tower-3f-0": 0
                },
                7: {
                    "fabul-kings-room-1": 6,
                    "fabul-1f-1": 1,
                    "fabul-inn-0": 0,
                    "fabul-right-tower-3f-0": 0
                },
                8: {
                    "fabul-kings-room-1": 6,
                    "fabul-1f-1": 0,
                    "fabul-inn-0": 2,
                    "fabul-right-tower-3f-0": 0
                },
                9: {
                    "fabul-kings-room-1": 6,
                    "fabul-1f-1": 1,
                    "fabul-inn-0": 2,
                    "fabul-right-tower-3f-0": 0
                },
                10: {
                    "fabul-kings-room-1": 6,
                    "fabul-1f-1": 1,
                    "fabul-inn-0": 2,
                    "fabul-right-tower-3f-0": 1
                }
            },
            "paths": {
                "fabul-kings-room-1": {
                    "index": "0",
                    "location": "Fabul King's Room [after Dragoon]",
                    "disambiguation": ""
                },
                "fabul-1f-1": {
                    "index": "0",
                    "location": "Fabul 1F [after Dragoon]",
                    "disambiguation": ""
                },
                "fabul-inn-0": {
                    "index": "0",
                    "location": "Fabul Inn",
                    "disambiguation": ""
                },
                "fabul-right-tower-3f-0": {
                    "index": "0",
                    "location": "Fabul Right Tower 3F",
                    "disambiguation": " after talking to the King"
                }
            }
        },
        "giant-of-babil-chest-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "giant-of-babil-chest-0": {
                    "index": "0",
                    "location": "Giant of Bab-il Chest",
                    "disambiguation": ""
                }
            }
        },
        "giant-of-babil-cpu-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "giant-of-babil-cpu-0": {
                    "index": "0",
                    "location": "Giant of Bab-il CPU",
                    "disambiguation": ""
                }
            }
        },
        "giant-of-babil-lung-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "giant-of-babil-lung-0": {
                    "index": "0",
                    "location": "Giant of Bab-il Lung",
                    "disambiguation": " before the Elements battle"
                }
            }
        },
        "giant-of-babil-lung-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "giant-of-babil-lung-0": {
                    "index": "1",
                    "location": "Giant of Bab-il Lung",
                    "disambiguation": " after the Elements battle"
                }
            }
        },
        "giant-of-babil-mouth-0": {
            "type": VariableFlags.EXTRA,
            "routes": {
                1: { "giant-of-babil-mouth-0": 1 }
            },
            "paths": {
                "giant-of-babil-mouth-0": {
                    "index": "0",
                    "location": "Giant of Bab-il Mouth",
                    "disambiguation": ""
                }
            }
        },
        "giant-of-babil-neck-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "giant-of-babil-neck-0": {
                    "index": "0",
                    "location": "Giant of Bab-il Neck",
                    "disambiguation": ""
                }
            }
        },
        "giant-of-babil-passage-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "giant-of-babil-passage-0": {
                    "index": "0",
                    "location": "Giant of Bab-il Passage",
                    "disambiguation": ""
                }
            }
        },
        "giant-of-babil-passage-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "giant-of-babil-passage-1": {
                    "index": "0",
                    "location": "Giant of Bab-il Passage",
                    "disambiguation": ""
                }
            }
        },
        "giant-of-babil-stomach-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "giant-of-babil-stomach-0": {
                    "index": "0",
                    "location": "Giant of Bab-il Stomach",
                    "disambiguation": ""
                }
            }
        },
        "grotto-adamant-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "grotto-adamant-0": {
                    "index": "0",
                    "location": "Grotto Adamant",
                    "disambiguation": ""
                }
            }
        },
        "hummingway-cave-0-0": {
            "type": VariableFlags.EXTRA,
            "minSteps": 16,
            "routes": {},
            "paths": {
                "hummingway-cave-0-0": {
                    "index": "0",
                    "location": "Hummingway Cave",
                    "disambiguation": ""
                }
            }
        },
        "hummingway-cave-0-1": {
            "type": VariableFlags.EXTRA,
            "minSteps": 16,
            "routes": {},
            "paths": {
                "hummingway-cave-0-1": {
                    "index": "0",
                    "location": "Hummingway Cave",
                    "disambiguation": ""
                }
            }
        },
        "land-of-monsters-b1f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "land-of-monsters-b1f-0": {
                    "index": "0",
                    "location": "Land of Monsters B1F",
                    "disambiguation": ""
                }
            }
        },
        "land-of-monsters-b2f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "land-of-monsters-b2f-0": {
                    "index": "0",
                    "location": "Land of Monsters B2F",
                    "disambiguation": ""
                }
            }
        },
        "land-of-monsters-b3f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "land-of-monsters-b3f-0": {
                    "index": "0",
                    "location": "Land of Monsters B3F",
                    "disambiguation": ""
                }
            }
        },
        "land-of-monsters-b3f-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "land-of-monsters-b3f-1": {
                    "index": "0",
                    "location": "Land of Monsters B3F",
                    "disambiguation": ""
                }
            }
        },
        "land-of-monsters-b3f-2": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "land-of-monsters-b3f-2": {
                    "index": "0",
                    "location": "Land of Monsters B3F",
                    "disambiguation": ""
                }
            }
        },
        "land-of-monsters-b3f-choice-0": {
            "type": VariableFlags.CHOICE,
            "descriptions": {
                0: "Take the direct route in Land of Monsters B3F.",
                1: "Take the partial secret passage in Land of Monsters B3F.",
                2: "Take the full secret passage in Land of Monsters B3F."
            },
            "paths": {
                0: {
                    "land-of-monsters-b3f-0": {
                        "enabled": true,
                        "index": "0",
                        "location": "Land of Monsters B3F",
                        "instruction": "Take the direct route"
                    },
                    "land-of-monsters-b3f-1": { "enabled": false },
                    "land-of-monsters-b3f-2": { "enabled": false }
                },
                1: {
                    "land-of-monsters-b3f-0": { "enabled": false },
                    "land-of-monsters-b3f-1": {
                        "enabled": true,
                        "index": "0",
                        "location": "Land of Monsters B3F",
                        "instruction": "Take the partial secret passage"
                    },
                    "land-of-monsters-b3f-2": { "enabled": false }
                },
                2: {
                    "land-of-monsters-b3f-0": { "enabled": false },
                    "land-of-monsters-b3f-1": { "enabled": false },
                    "land-of-monsters-b3f-2": {
                        "enabled": true,
                        "index": "0",
                        "location": "Land of Monsters B3F",
                        "instruction": "Take the full secret passage"
                    }
                }
            }
        },
        "lunar-core-b1-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-core-b1-0": {
                    "index": "0",
                    "location": "Lunar Core B1",
                    "disambiguation": ""
                }
            }
        },
        "lunar-core-b1-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-core-b1-1": {
                    "index": "0",
                    "location": "Lunar Core B1",
                    "disambiguation": ""
                }
            }
        },
        "lunar-core-b2-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-core-b2-0": {
                    "index": "0",
                    "location": "Lunar Core B2",
                    "disambiguation": ""
                }
            }
        },
        "lunar-core-b3-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-core-b3-0": {
                    "index": "0",
                    "location": "Lunar Core B3",
                    "disambiguation": ""
                }
            }
        },
        "lunar-core-b3-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-core-b3-1": {
                    "index": "0",
                    "location": "Lunar Core B3",
                    "disambiguation": ""
                }
            }
        },
        "lunar-overworld-choice-0": {
            "type": VariableFlags.CHOICE,
            "descriptions": {
                0: "Visit the Namingway Cave before recruiting FuSoYa.",
                1: "Recruit FuSoYa before visiting the Namingway Cave."
            },
            "paths": {
                0: {
                    "lunar-overworld-0": {
                        "enabled": true,
                        "index": "0",
                        "location": "Lunar Overworld [first visit]",
                        "instruction": "Visit the Namingway Cave before recruiting FuSoYa"
                    },
                    "lunar-overworld-1": { "enabled": false },
                    "lunar-overworld-2-1": { "enabled": false },
                    "hummingway-cave-0-1": { "enabled": false },
                    "lunar-overworld-3-1": { "enabled": false },
                    "lunar-overworld-4-1": { "enabled": false },
                    "lunar-overworld-5-1": { "enabled": false },
                    "lunar-path-west-0-1": { "enabled": false },
                    "lunar-overworld-6-1": { "enabled": false },
                    "lunar-path-east-0-1": { "enabled": false },
                    "lunar-overworld-7-1": { "enabled": false },
                    "lunars-lair-1f-0-1": { "enabled": false },
                    "lunar-overworld-8-1": { "enabled": false },
                    "lunar-path-east-1-1": { "enabled": false },
                    "lunar-overworld-9-1": { "enabled": false },
                    "lunar-path-west-1-1": { "enabled": false },
                    "lunar-overworld-10-1": { "enabled": false },
                },
                1: {
                    "lunar-overworld-0": { "enabled": false },
                    "lunar-overworld-1": {
                        "enabled": true,
                        "index": "0",
                        "location": "Lunar Overworld [first visit]",
                        "instruction": "Recruit FuSoYa before visiting the Namingway cave"
                    },
                    "lunar-overworld-2-0": { "enabled": false },
                    "hummingway-cave-0-0": { "enabled": false },
                    "lunar-overworld-3-0": { "enabled": false },
                    "lunar-overworld-4-0": { "enabled": false },
                    "lunar-overworld-5-0": { "enabled": false },
                    "lunar-path-west-0-0": { "enabled": false },
                    "lunar-overworld-6-0": { "enabled": false },
                    "lunar-path-east-0-0": { "enabled": false },
                    "lunar-overworld-7-0": { "enabled": false },
                    "lunars-lair-1f-0-0": { "enabled": false },
                    "lunar-overworld-8-0": { "enabled": false },
                    "lunar-path-east-1-0": { "enabled": false },
                    "lunar-overworld-9-0": { "enabled": false },
                    "lunar-path-west-1-0": { "enabled": false },
                    "lunar-overworld-10-0": { "enabled": false },
                },
            }
        },
        "lunar-overworld-choice-1": {
            "type": VariableFlags.CHOICE,
            "descriptions": {
                0: "Skip equipping the Dwarf Axe when arriving on the Moon after the CPU battle",
                1: "Equip the Dwarf Axe when arriving on the Moon after the CPU battle"
            },
            "paths": {
                0: {
                    "lunar-overworld-12-0": {
                        "enabled": true,
                        "index": "0",
                        "location": "Lunar Overworld [after CPU before Lunar Path (west)]",
                        "instruction": "Skip equipping the Dwarf Axe"
                    }
                },
                1: {
                    "lunar-overworld-12-0": {
                        "enabled": true,
                        "index": "0",
                        "location": "Lunar Overworld [after CPU before Lunar Path (west)]",
                        "instruction": "Equip the Dwarf Axe"
                    }
                }
            }
        },
        "lunar-overworld-3-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-overworld-3-0": {
                    "index": "0",
                    "location": "Lunar Overworld [after Hummingway Cave]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-overworld-3-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-overworld-3-1": {
                    "index": "0",
                    "location": "Lunar Overworld [after Hummingway Cave]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-overworld-5-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-overworld-5-0": {
                    "index": "0",
                    "location": "Lunar Overworld [before FuSoYa before Lunar Path (west)]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-overworld-5-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-overworld-5-1": {
                    "index": "0",
                    "location": "Lunar Overworld [before FuSoYa before Lunar Path (west)]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-overworld-6-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-overworld-6-0": {
                    "index": "0",
                    "location": "Lunar Overworld [before FuSoYa before Lunar Path (east)]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-overworld-6-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-overworld-6-1": {
                    "index": "0",
                    "location": "Lunar Overworld [before FuSoYa before Lunar Path (east)]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-overworld-7-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-overworld-7-0": {
                    "index": "0",
                    "location": "Lunar Overworld [before FuSoYa after Lunar Path (east)]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-overworld-7-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-overworld-7-1": {
                    "index": "0",
                    "location": "Lunar Overworld [before FuSoYa after Lunar Path (east)]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-overworld-8-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-overworld-8-0": {
                    "index": "0",
                    "location": "Lunar Overworld [after FuSoYa before Lunar Path (east)]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-overworld-8-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-overworld-8-1": {
                    "index": "0",
                    "location": "Lunar Overworld [after FuSoYa before Lunar Path (east)]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-overworld-9-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-overworld-9-0": {
                    "index": "0",
                    "location": "Lunar Overworld [after FuSoYa after Lunar Path (east)]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-overworld-9-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-overworld-9-1": {
                    "index": "0",
                    "location": "Lunar Overworld [after FuSoYa after Lunar Path (east)]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-overworld-10-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-overworld-10-0": {
                    "index": "0",
                    "location": "Lunar Overworld [after FuSoYa after Lunar Path (west)]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-overworld-10-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-overworld-10-1": {
                    "index": "0",
                    "location": "Lunar Overworld [after FuSoYa after Lunar Path (west)]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-overworld-12-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-overworld-12-0": {
                    "index": "0",
                    "location": "Lunar Overworld [after CPU before Lunar Path (west)]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-overworld-13-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-overworld-13-0": {
                    "index": "0",
                    "location": "Lunar Overworld [after CPU before Lunar Path (east)]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-overworld-14-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-overworld-14-0": {
                    "index": "0",
                    "location": "Lunar Overworld [after CPU after Lunar Path (east)]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-path-east-0-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-path-east-0-0": {
                    "index": "0",
                    "location": "Lunar Path (east) [before FuSoYa]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-path-east-0-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-path-east-0-1": {
                    "index": "0",
                    "location": "Lunar Path (east) [before FuSoYa]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-path-east-1-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-path-east-1-0": {
                    "index": "0",
                    "location": "Lunar Path (east) [after FuSoYa]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-path-east-1-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-path-east-1-1": {
                    "index": "0",
                    "location": "Lunar Path (east) [after FuSoYa]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-path-east-2": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-path-east-2": {
                    "index": "0",
                    "location": "Lunar Path (east) [after CPU]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-path-west-0-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-path-west-0-0": {
                    "index": "0",
                    "location": "Lunar Path (west) [before FuSoYa]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-path-west-0-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-path-west-0-1": {
                    "index": "0",
                    "location": "Lunar Path (west) [before FuSoYa]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-path-west-1-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-path-west-1-0": {
                    "index": "0",
                    "location": "Lunar Path (west) [after FuSoYa]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-path-west-1-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-path-west-1-1": {
                    "index": "0",
                    "location": "Lunar Path (west) [after FuSoYa]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-path-west-2": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-path-west-2": {
                    "index": "0",
                    "location": "Lunar Path (west) [after CPU]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b1-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b1-0": {
                    "index": "0",
                    "location": "Lunar Subterrane B1",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b2-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b2-0": {
                    "index": "0",
                    "location": "Lunar Subterrane B2",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b3-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b3-0": {
                    "index": "0",
                    "location": "Lunar Subterrane B3",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b4-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b4-0": {
                    "index": "0",
                    "location": "Lunar Subterrane B4 (upper)",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b4-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b4-1": {
                    "index": "0",
                    "location": "Lunar Subterrane B4 (lower)",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b4-passage-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b4-passage-0": {
                    "index": "0",
                    "location": "Lunar Subterrane B4 Passage",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b5-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b5-0": {
                    "index": "0",
                    "location": "Lunar Subterrane B5 (upper)",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b5-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b5-1": {
                    "index": "0",
                    "location": "Lunar Subterrane B5 (middle)",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b5-2": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b5-2": {
                    "index": "0",
                    "location": "Lunar Subterrane B5 (lower)",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b5-3": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b5-3": {
                    "index": "0",
                    "location": "Lunar Subterrane B5 (lower) [before Pink Puff Room]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b5-4": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b5-4": {
                    "index": "0",
                    "location": "Lunar Subterrane B5 (lower) [after Pink Puff Room]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b5-choice-0": {
            "type": VariableFlags.CHOICE,
            "descriptions": {
                1: "Enter the Pink Puff Room on Lunar Subterrane B5 (lower)."
            },
            "paths": {
                0: {
                    "lunar-subterrane-b5-3": { "enabled": false },
                    "lunar-subterrane-b5-pink-puff-room-0": { "enabled": false },
                    "lunar-subterrane-b5-4": { "enabled": false }
                },
                1: {
                    "lunar-subterrane-b5-2": { "enabled": false },
                    "lunar-subterrane-b5-3": {
                        "enabled": true,
                        "index": "0",
                        "location": "Lunar Subterrane B5 (lower)",
                        "instruction": "Enter the Pink Puff Room"
                    }
                }
            }
        },
        "lunar-subterrane-b5-passage-a-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b5-passage-a-0": {
                    "index": "0",
                    "location": "Lunar Subterrane B5 Passage A",
                    "disambiguation": " before getting the Protect Ring"
                }
            }
        },
        "lunar-subterrane-b5-passage-a-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b5-passage-a-0": {
                    "index": "1",
                    "location": "Lunar Subterrane B5 Passage A",
                    "disambiguation": " after getting the Protect Ring and any associated menuing"
                }
            }
        },
        "lunar-subterrane-b5-passage-a-2": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b5-passage-a-2": {
                    "index": "0",
                    "location": "Lunar Subterrane B5 Passage A",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b5-passage-b-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b5-passage-b-0": {
                    "index": "0",
                    "location": "Lunar Subterrane B5 Passage B",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b5-passage-b-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b5-passage-b-1": {
                    "index": "0",
                    "location": "Lunar Subterrane B5 Passage B",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b5-passage-a-choice-0": {
            "type": VariableFlags.CHOICE,
            "descriptions": {
                0: "Do the final Zeromus menu immediately after getting the Protect Ring.",
                1: "Do the final Zeromus menu immediately before Zeromus."
            },
            "paths": {
                0: {
                    "lunar-subterrane-b5-passage-a-0": {
                        "enabled": true,
                        "index": "0",
                        "location": "Lunar Subterrane B5 Passage A",
                        "instruction": "Do the final Zeromus menu immediately after getting the Protect Ring"
                    }
                },
                1: {
                    "lunar-core-b5-0": {
                        "enabled": true,
                        "index": "0",
                        "location": "Lunar Core B5",
                        "instruction": "Do the final Zeromus menu immediately before Zeromus"
                    }
                }
            }
        },
        "lunar-subterrane-b5-pink-puff-room-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b5-pink-puff-room-0": {
                    "index": "0",
                    "location": "Lunar Subterrane B5 Pink Puff Room",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b6-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b6-0": {
                    "index": "0",
                    "location": "Lunar Subterrane B6",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b6-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b6-1": {
                    "index": "0",
                    "location": "Lunar Subterrane B6",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b6-choice-0": {
            "type": VariableFlags.CHOICE,
            "descriptions": {
                0: "Get the Ninja star on Lunar Subterrane B6",
                1: "Get the Ninja star on Lunar Core B1",
                2: "Get the Ninja star on Lunar Core B3"
            },
            "paths": {
                0: {
                    "lunar-subterrane-b6-0": { "enabled": false },
                    "lunar-subterrane-b6-1": {
                        "enabled": true,
                        "index": "0",
                        "location": "Lunar Subterrane B6",
                        "instruction": "Get the Ninja star"
                    },
                    "lunar-core-b1-1": { "enabled": false },
                    "lunar-core-b3-1": { "enabled": false },
                },
                1: {
                    "lunar-subterrane-b6-1": { "enabled": false },
                    "lunar-core-b1-0": { "enabled": false },
                    "lunar-core-b1-1": {
                        "enabled": true,
                        "index": "0",
                        "location": "Lunar Core B1",
                        "instruction": "Get the Ninja star"
                    },
                    "lunar-core-b3-1": { "enabled": false },
                },
                2: {
                    "lunar-subterrane-b6-1": { "enabled": false },
                    "lunar-core-b1-1": { "enabled": false },
                    "lunar-core-b3-0": { "enabled": false },
                    "lunar-core-b3-1": {
                        "enabled": true,
                        "index": "0",
                        "location": "Lunar Core B3",
                        "instruction": "Get the Ninja star"
                    }
                }
            }
        },
        "lunar-subterrane-b6-passage-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b6-passage-0": {
                    "index": "0",
                    "location": "Lunar Subterrane B6 Passage",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b7-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b7-0": {
                    "index": "0",
                    "location": "Lunar Subterrane B7",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b7-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b7-1": {
                    "index": "0",
                    "location": "Lunar Subterrane B7 [before Save Room]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b7-2": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b7-2": {
                    "index": "0",
                    "location": "Lunar Subterrane B7 [after Save Room]",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b7-choice-0": {
            "type": VariableFlags.CHOICE,
            "descriptions": {
                1: "Enter the Save Room on Lunar Subterrane B7."
            },
            "paths": {
                0: {
                    "lunar-subterrane-b7-1": { "enabled": false },
                    "lunar-subterrane-b7-save-room-0": { "enabled": false },
                    "lunar-subterrane-b7-2": { "enabled": false }
                },
                1: {
                    "lunar-subterrane-b7-0": { "enabled": false },
                    "lunar-subterrane-b7-1": {
                        "enabled": true,
                        "index": "0",
                        "location": "Lunar Subterrane B7",
                        "instruction": "Enter the Save Room"
                    }
                }
            }
        },
        "lunar-subterrane-b7-save-room-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b7-save-room-0": {
                    "index": "0",
                    "location": "Lunar Subterrane B7 Save Room",
                    "disambiguation": ""
                }
            }
        },
        "lunar-subterrane-b7-save-room-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "lunar-subterrane-b7-save-room-1": {
                    "index": "0",
                    "location": "Lunar Subterrane B7 Save Room",
                    "disambiguation": ""
                }
            }
        },
        "mt-hobs-east-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "mt-hobs-east-0": {
                    "index": "0",
                    "location": "Mt.Hobs-East",
                    "disambiguation": ""
                }
            }
        },
        "mt-hobs-summit-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "mt-hobs-summit-0": {
                    "index": "0",
                    "location": "Mt.Hobs Summit",
                    "disambiguation": " before fighting MomBomb"
                }
            }
        },
        "mt-hobs-summit-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "mt-hobs-summit-0": {
                    "index": "1",
                    "location": "Mt.Hobs Summit",
                    "disambiguation": " after fighting MomBomb"
                }
            }
        },
        "mt-hobs-west-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "mt-hobs-west-0": {
                    "index": "0",
                    "location": "Mt.Hobs-West",
                    "disambiguation": ""
                }
            }
        },
        "mt-ordeals-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "mt-ordeals-0": {
                    "index": "0",
                    "location": "Mt.Ordeals [before Paladin]",
                    "disambiguation": ""
                }
            }
        },
        "mt-ordeals-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "mt-ordeals-1": {
                    "index": "0",
                    "location": "Mt.Ordeals [after Paladin]",
                    "disambiguation": ""
                }
            }
        },
        "mt-ordeals-3rd-station-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "mt-ordeals-3rd-station-0": {
                    "index": "0",
                    "location": "Mt.Ordeals-3rd station [before Paladin]",
                    "disambiguation": " before Tellah joins your party"
                }
            }
        },
        "mt-ordeals-3rd-station-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "mt-ordeals-3rd-station-0": {
                    "index": "1",
                    "location": "Mt.Ordeals-3rd station [before Paladin]",
                    "disambiguation": " after Tellah joins your party"
                }
            }
        },
        "mt-ordeals-3rd-station-2": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "mt-ordeals-3rd-station-1": {
                    "index": "0",
                    "location": "Mt.Ordeals-3rd station [after Paladin]",
                    "disambiguation": ""
                }
            }
        },
        "mt-ordeals-7th-station-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "mt-ordeals-7th-station-0": {
                    "index": "0",
                    "location": "Mt.Ordeals-7th station [before Paladin]",
                    "disambiguation": ""
                }
            }
        },
        "mt-ordeals-7th-station-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "mt-ordeals-7th-station-1": {
                    "index": "0",
                    "location": "Mt.Ordeals-7th station [after Paladin]",
                    "disambiguation": ""
                }
            }
        },
        "mt-ordeals-summit-0": {
            "type": VariableFlags.EXTRA,
            "routes": {
                1: {
                    "mt-ordeals-summit-0": 1
                }
            },
            "paths": {
                "mt-ordeals-summit-0": {
                    "index": "0",
                    "location": "Mt.Ordeals Summit [before Paladin]",
                    "disambiguation": " before fighting Milon"
                }
            }
        },
        "mt-ordeals-summit-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "mt-ordeals-summit-0": {
                    "index": "1",
                    "location": "Mt.Ordeals Summit [before Paladin]",
                    "disambiguation": " after fighting Milon Z"
                }
            }
        },
        "mt-ordeals-summit-2": {
            "type": VariableFlags.EXTRA,
            "routes": {
                1: {
                    "mt-ordeals-summit-1": 1
                }
            },
            "paths": {
                "mt-ordeals-summit-1": {
                    "index": "0",
                    "location": "Mt.Ordeals Summit [after Paladin]",
                    "disambiguation": ""
                }
            }
        },
        "old-water-way-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "old-water-way-0": {
                    "index": "0",
                    "location": "Old Water-way",
                    "disambiguation": ""
                }
            }
        },
        "overworld-agart-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-agart-0": {
                    "index": "0",
                    "location": "Overworld (Agart)",
                    "disambiguation": ""
                }
            }
        },
        "overworld-baron-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-baron-0": {
                    "index": "0",
                    "location": "Overworld (Baron) [before Hook Installation]",
                    "disambiguation": ""
                }
            }
        },
        "overworld-damcyan-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-damcyan-0": {
                    "index": "1",
                    "location": "Overworld (Damcyan)",
                    "disambiguation": " just before entering the castle"
                }
            }
        },
        "overworld-damcyan-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-damcyan-1": {
                    "index": "0",
                    "location": "Overworld (Damcyan)",
                    "disambiguation": " after parking the hovercraft, just before entering the cave"
                }
            }
        },
        "overworld-damcyan-2": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-damcyan-2": {
                    "index": "0",
                    "location": "Overworld (Damcyan) [after Antlion]",
                    "disambiguation": " after exiting the cave before boarding the hovercraft"
                }
            }
        },
        "overworld-damcyan-3": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-damcyan-4": {
                    "index": "0",
                    "location": "Overworld (Damcyan) [after WaterHag]",
                    "disambiguation": " after parking the hovercraft, just before entering Mt.Hobs"
                }
            }
        },
        "overworld-eblan-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-eblan-0": {
                    "index": "0",
                    "location": "Overworld (Eblan) [before Edge joins]",
                    "disambiguation": ""
                }
            }
        },
        "overworld-eblan-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-eblan-1": {
                    "index": "0",
                    "location": "Overworld (Eblan) [switching airships]",
                    "disambiguation": ""
                }
            }
        },
        "overworld-fabul-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-fabul-1": {
                    "index": "0",
                    "location": "Overworld (Fabul) [before Fabul]",
                    "disambiguation": ""
                }
            }
        },
        "overworld-fabul-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-fabul-2": {
                    "index": "0",
                    "location": "Overworld (Fabul) [after Fabul]",
                    "disambiguation": ""
                }
            }
        },
        "overworld-kaipo-2": {
            "type": VariableFlags.EXTRA,
            "routes": {},
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
            "routes": {},
            "paths": {
                "overworld-damcyan-0": {
                    "index": "0",
                    "location": "Overworld (Kaipo) [after Octomamm]",
                    "disambiguation": " immediately after exiting the cave"
                }
            }
        },
        "overworld-kaipo-4": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-kaipo-4": {
                    "index": "0",
                    "location": "Overworld (Kaipo) [after Antlion]",
                    "disambiguation": ""
                }
            }
        },
        "overworld-kaipo-5": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-kaipo-5": {
                    "index": "0",
                    "location": "Overworld (Kaipo) [after WaterHag]",
                    "disambiguation": ""
                }
            }
        },
        "overworld-mt-ordeals-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-mt-ordeals-1": {
                    "index": "0",
                    "location": "Overworld (Mt.Ordeals) [before Mt.Ordeals]",
                    "disambiguation": ""
                }
            }
        },
        "overworld-mt-ordeals-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-mt-ordeals-2": {
                    "index": "0",
                    "location": "Overworld (Mt.Ordeals) [after Mt.Ordeals]",
                    "disambiguation": ""
                }
            }
        },
        "overworld-mysidia-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-mysidia-0": {
                    "index": "0",
                    "location": "Overworld (Mysidia) [before Mysidia]",
                    "disambiguation": ""
                }
            }
        },
        "overworld-mysidia-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-mysidia-1": {
                    "index": "0",
                    "location": "Overworld (Mysidia) [after Mysidia]",
                    "disambiguation": " before heading more than five tiles east, because the encounter rate goes up"
                }
            }
        },
        "overworld-mysidia-2": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-mysidia-2": {
                    "index": "0",
                    "location": "Overworld (Mysidia) [after Mt.Ordeals]",
                    "disambiguation": ""
                }
            }
        },
        "overworld-mysidia-3": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-mysidia-3": {
                    "index": "0",
                    "location": "Overworld (Mysidia) [before Moon]",
                    "disambiguation": ""
                }
            }
        },
        "overworld-mysidia-4": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-mysidia-4": {
                    "index": "0",
                    "location": "Overworld (Mysidia) [before Moon]",
                    "disambiguation": ""
                }
            }
        },
        "overworld-silvera-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-silvera-0": {
                    "index": "0",
                    "location": "Overworld (Silvera) [before Grotto Adamant]",
                    "disambiguation": ""
                }
            }
        },
        "overworld-silvera-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-silvera-1": {
                    "index": "0",
                    "location": "Overworld (Silvera) [after Grotto Adamant]",
                    "disambiguation": ""
                }
            }
        },
        "overworld-toroia-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-toroia-0": {
                    "index": "0",
                    "location": "Overworld (Toroia) [before Toroian Castle]",
                    "disambiguation": ""
                }
            }
        },
        "overworld-toroia-1": {
            "type": VariableFlags.EXTRA,
            "routes": {
                1: {
                    "overworld-toroia-1": 1
                }
            },
            "paths": {
                "overworld-toroia-1": {
                    "index": "0",
                    "location": "Overworld (Toroia) [before Black Chocobo]",
                    "disambiguation": ""
                }
            }
        },
        "overworld-toroia-2": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-toroia-3": {
                    "index": "0",
                    "location": "Overworld (Toroia) [before Cave Magnes]",
                    "disambiguation": " immediately before entering the cave"
                }
            }
        },
        "overworld-toroia-3": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-toroia-4": {
                    "index": "0",
                    "location": "Overworld (Toroia) [after Cave Magnes]",
                    "disambiguation": " before boarding the black chocobo"
                }
            }
        },
        "overworld-toroia-4": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "overworld-toroia-5": {
                    "index": "0",
                    "location": "Overworld (Toroia) [after Cave Magnes]",
                    "disambiguation": " immediately before entering the Toroian Castle"
                }
            }
        },
        "overworld-toroia-5": {
            "type": VariableFlags.EXTRA,
            "routes": {
                1: { "overworld-toroia-6": 1 },
                2: { "overworld-toroia-6": 2 }
            },
            "paths": {
                "overworld-toroia-6": {
                    "index": "0",
                    "location": "Overworld (Toroia) [before Tower of Zot]",
                    "disambiguation": ""
                }
            }
        },
        "pass-to-babil-north-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "pass-to-babil-north-0": {
                    "index": "0",
                    "location": "Pass to Bab-il (north) [west side]",
                    "disambiguation": ""
                }
            }
        },
        "pass-to-babil-north-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "pass-to-babil-north-1": {
                    "index": "0",
                    "location": "Pass to Bab-il (north) [east side]",
                    "disambiguation": " before Edge joins"
                }
            }
        },
        "pass-to-babil-north-2": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "pass-to-babil-north-2": {
                    "index": "0",
                    "location": "Pass to Bab-il (north) [east side] [before Save Room]",
                    "disambiguation": ""
                }
            }
        },
        "pass-to-babil-north-3": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "pass-to-babil-north-3": {
                    "index": "0",
                    "location": "Pass to Bab-il (north) [east side] [after Save Room]",
                    "disambiguation": " before Edge joins"
                }
            }
        },
        "pass-to-babil-north-4": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "pass-to-babil-north-1": {
                    "index": "1",
                    "location": "Pass to Bab-il (north) [east side]",
                    "disambiguation": " after Edge joins"
                }
            }
        },
        "pass-to-babil-north-5": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "pass-to-babil-north-3": {
                    "index": "1",
                    "location": "Pass to Bab-il (north) [east side] [after Save Room]",
                    "disambiguation": " after Edge joins"
                }
            }
        },
        "pass-to-babil-north-choice-0": {
            "type": VariableFlags.CHOICE,
            "descriptions": {
                1: "Enter the Save Room in Pass to Bab-il (north)."
            },
            "paths": {
                0: {
                    "pass-to-babil-north-2": { "enabled": false },
                    "pass-to-babil-north-save-room-0": { "enabled": false },
                    "pass-to-babil-north-3": { "enabled": false }
                },
                1: {
                    "pass-to-babil-north-1": { "enabled": false },
                    "pass-to-babil-north-2": {
                        "enabled": true,
                        "index": "0",
                        "location": "Pass to Bab-il (north) [east side]",
                        "instruction": "Enter the Save Room"
                    }
                }
            }
        },
        "pass-to-babil-north-choice-1": {
            "type": VariableFlags.CHOICE,
            "descriptions": {
                0: "Unequip the Dwarf Axe during the menu after Edge joins.",
                1: "Unequip the Dwarf Axe immediately before the K.Eblan/Q.Eblan battle."
            },
            "paths": {
                0: {
                    "pass-to-babil-north-1": {
                        "enabled": true,
                        "index": "1",
                        "location": "Pass to Bab-il (north) [east side]",
                        "instruction": "Unequip the Dwarf Axe during the menu after Edge joins"
                    },
                    "pass-to-babil-north-3": {
                        "enabled": true,
                        "index": "1",
                        "location": "Pass to Bab-il (north) [east side]",
                        "instruction": "Unequip the Dwarf Axe during the menu after Edge joins"
                    }
                },
                1: {
                    "tower-of-babil-b5f-0": {
                        "enabled": true,
                        "index": "0",
                        "location": "Tower of Bab-il B5F",
                        "instruction": "Unequip the Dwarf Axe immediately before the K.Eblan/Q.Eblan battle"
                    }
                }
            }
        },
        "pass-to-babil-north-save-room-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "pass-to-babil-north-save-room-0": {
                    "index": "0",
                    "location": "Pass to Bab-il (north) Save Room",
                    "disambiguation": ""
                }
            }
        },
        "pass-to-babil-south-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "pass-to-babil-south-0": {
                    "index": "0",
                    "location": "Pass to Bab-il (south) [west side]",
                    "disambiguation": ""
                }
            }
        },
        "pass-to-babil-south-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "pass-to-babil-south-1": {
                    "index": "0",
                    "location": "Pass to Bab-il (south) [east side]",
                    "disambiguation": ""
                }
            }
        },
        "sealed-cave-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "sealed-cave-0": {
                    "index": "0",
                    "location": "Sealed Cave",
                    "disambiguation": ""
                }
            }
        },
        "serpent-road-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "baron-town-serpent-road-0": {
                    "index": "0",
                    "location": "Baron Serpent Road",
                    "disambiguation": ""
                }
            }
        },
        "toroian-castle-1f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {
                1: { "toroian-castle-1f-0": 1 },
                2: { "toroian-castle-1f-0": 2 },
                3: { "toroian-castle-1f-0": 3 },
            },
            "paths": {
                "toroian-castle-1f-0": {
                    "index": "0",
                    "location": "Toroian Castle 1F [before Cave Magnes]",
                    "disambiguation": ""
                }
            }
        },
        "toroian-castle-1f-1": {
            "type": VariableFlags.EXTRA,
            "minSteps": 1,
            "routes": {
                1: { "toroian-castle-1f-2": 1 },
                2: { "toroian-castle-1f-2": 2 },
                3: { "toroian-castle-1f-2": 3 },
            },
            "paths": {
                "toroian-castle-1f-2": {
                    "index": "0",
                    "location": "Toroian Castle 1F [after Cave Magnes]",
                    "disambiguation": " in the Extra Steps Area"
                }
            }
        },
        "toroian-castle-1f-choice-0": {
            "type": VariableFlags.CHOICE,
            "descriptions": {
                1: "Enter the Extra Step Area in Toroian Castle 1F [after Cave Magnes]."
            },
            "paths": {
                0: {
                    "toroian-castle-1f-2": { "enabled": false },
                },
                1: {
                    "toroian-castle-1f-1": { "enabled": false },
                    "toroian-castle-1f-2": {
                        "enabled": true,
                        "index": "0",
                        "location": "Toroian Castle 1F [after Cave Magnes]",
                        "instruction": "Enter the Extra Step Area"
                    }
                }
            }
        },
        "tower-of-babil-1f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-1f-0": {
                    "index": "0",
                    "location": "Tower of Bab-il 1F [before Lugae]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-1f-upper-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-1f-upper-0": {
                    "index": "1",
                    "location": "Tower of Bab-il 1F [after Edge joins]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-1f-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-1f-1": {
                    "index": "0",
                    "location": "Tower of Bab-il 1F [after Dark Imps]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-2f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-2f-0": {
                    "index": "0",
                    "location": "Tower of Bab-il 2F [before Lugae]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-2f-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-2f-1": {
                    "index": "0",
                    "location": "Tower of Bab-il 2F [after Dark Imps]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-3f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-3f-0": {
                    "index": "0",
                    "location": "Tower of Bab-il 3F [before Lugae]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-3f-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-3f-1": {
                    "index": "0",
                    "location": "Tower of Bab-il 3F [after Dark Imps]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-4f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-4f-0": {
                    "index": "0",
                    "location": "Tower of Bab-il 4F [before Lugae]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-4f-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-4f-1": {
                    "index": "0",
                    "location": "Tower of Bab-il 4F [after Dark Imps]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-5f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-5f-0": {
                    "index": "0",
                    "location": "Tower of Bab-il 5F [before Lugae]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-5f-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-5f-1": {
                    "index": "0",
                    "location": "Tower of Bab-il 5F [before Dark Imps]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-5f-2": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-5f-2": {
                    "index": "0",
                    "location": "Tower of Bab-il 5F [after Dark Imps]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-6f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-6f-0": {
                    "index": "0",
                    "location": "Tower of Bab-il 6F [before Lugae]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-6f-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-6f-1": {
                    "index": "0",
                    "location": "Tower of Bab-il 6F [after Lugae]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-6f-revisit-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-6f-revisit-0": {
                    "index": "0",
                    "location": "Tower of Bab-il 6F [after Rubicant]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-7f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-7f-0": {
                    "index": "0",
                    "location": "Tower of Bab-il 7F [before Lugae]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-7f-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-7f-1": {
                    "index": "0",
                    "location": "Tower of Bab-il 7F [after Lugae]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-7f-revisit-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-7f-revisit-0": {
                    "index": "0",
                    "location": "Tower of Bab-il 7F [after Rubicant]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-8f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-8f-0": {
                    "index": "0",
                    "location": "Tower of Bab-il 8F [before Lugae]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-8f-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-8f-1": {
                    "index": "0",
                    "location": "Tower of Bab-il 8F [after Lugae]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-8f-revisit-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-8f-revisit-0": {
                    "index": "0",
                    "location": "Tower of Bab-il 8F [after Rubicant]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-b2f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-b2f-0": {
                    "index": "0",
                    "location": "Tower of Bab-il B2F",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-b3f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-b3f-0": {
                    "index": "0",
                    "location": "Tower of Bab-il B3F [south side]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-b3f-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-b3f-1": {
                    "index": "0",
                    "location": "Tower of Babil B3F [north side]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-b4f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-b4f-0": {
                    "index": "0",
                    "location": "Tower of Bab-il B4F [large southwest room]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-b4f-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-b4f-1": {
                    "index": "0",
                    "location": "Tower of Bab-il B4F [small northeast room]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-babil-b5f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-b5f-0": {
                    "index": "0",
                    "location": "Tower of Bab-il B5F",
                    "disambiguation": " before the boss battles"
                }
            }
        },
        "tower-of-babil-b5f-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-babil-b5f-0": {
                    "index": "1",
                    "location": "Tower of Bab-il B5F",
                    "disambiguation": " after the boss battles"
                }
            }
        },
        "tower-of-babil-b5f-choice-0": {
            "type": VariableFlags.CHOICE,
            "descriptions": {
                0: "Equip the Dwarf Axe when removing the Strength Ring.",
                1: "Equip the Dwarf Axe immediately after the Rubicant battle."
            },
            "paths": {
                0: {
                    "castle-of-dwarves-infirmary-0": {
                        "enabled": true,
                        "index": "0",
                        "location": "Castle of Dwarves Infirmary",
                        "instruction": "Equip the Dwarf Axe when removing the Strength Ring"
                    }
                },
                1: {
                    "tower-of-babil-b5f-0": {
                        "enabled": true,
                        "index": "1",
                        "location": "Tower of Bab-il B5F",
                        "instruction": "Equip the Dwarf Axe immediately after the Rubicant battle"
                    }
                }
            }
        },
        "tower-of-zot-1f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-zot-1f-0": {
                    "index": "0",
                    "location": "Tower of Zot 1F",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-zot-2f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-zot-2f-0": {
                    "index": "0",
                    "location": "Tower of Zot 2F",
                    "disambiguation": " before the FlameDog battle"
                }
            }
        },
        "tower-of-zot-2f-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-zot-2f-0": {
                    "index": "1",
                    "location": "Tower of Zot 2F",
                    "disambiguation": " after the FlameDog battle"
                }
            }
        },
        "tower-of-zot-3f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-zot-3f-0": {
                    "index": "0",
                    "location": "Tower of Zot 3F",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-zot-4f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-zot-4f-0": {
                    "index": "0",
                    "location": "Tower of Zot 4F",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-zot-5f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-zot-5f-0": {
                    "index": "0",
                    "location": "Tower of Zot 5F",
                    "disambiguation": " before fighting the Magus Sisters"
                }
            }
        },
        "tower-of-zot-5f-3": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-zot-5f-1": {
                    "index": "0",
                    "location": "Tower of Zot 5F [before Save Room]",
                    "disambiguation": ""
                }
            }
        },
        "tower-of-zot-5f-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-zot-5f-0": {
                    "index": "1",
                    "location": "Tower of Zot 5F",
                    "disambiguation": " after fighting the Magus Sisters"
                }
            }
        },
        "tower-of-zot-5f-4": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-zot-5f-2": {
                    "index": "1",
                    "location": "Tower of Zot 5F [after Save Room]",
                    "disambiguation": " after fighting the Magus Sisters"
                }
            }
        },
        "tower-of-zot-5f-2": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-zot-5f-2": {
                    "index": "0",
                    "location": "Tower of Zot 5F [after Save Room]",
                    "disambiguation": " before fighting the Magus Sisters"
                }
            }
        },
        "tower-of-zot-6f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "tower-of-zot-6f-0": {
                    "index": "0",
                    "location": "Tower of Zot 6F",
                    "disambiguation": ""
                }
            }
        },
        "underworld-castle-of-dwarves-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "underworld-castle-of-dwarves-0": {
                    "index": "0",
                    "location": "Underworld (Castle of Dwarves) [before Castle of Dwarves]",
                    "disambiguation": ""
                }
            }
        },
        "underworld-castle-of-dwarves-3": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "underworld-castle-of-dwarves-3": {
                    "index": "0",
                    "location": "Underworld (Castle of Dwarves) [after Castle of Dwarves]",
                    "disambiguation": ""
                }
            }
        },
        "underworld-castle-of-dwarves-4": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "underworld-castle-of-dwarves-4": {
                    "index": "0",
                    "location": "Underworld (Castle of Dwarves) [after getting Falcon]",
                    "disambiguation": ""
                }
            }
        },
        "underworld-castle-of-dwarves-5": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "underworld-castle-of-dwarves-5": {
                    "index": "0",
                    "location": "Underworld (Castle of Dwarves) [after infirmary visit]",
                    "disambiguation": ""
                }
            }
        },
        "underworld-castle-of-dwarves-7": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "underworld-castle-of-dwarves-7": {
                    "index": "0",
                    "location": "Underworld (Castle of Dwarves) [after drill installation]",
                    "disambiguation": ""
                }
            }
        },
        "underworld-kokkol-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "underworld-kokkol-0": {
                    "index": "0",
                    "location": "Underworld (Kokkol)",
                    "disambiguation": ""
                }
            }
        },
        "underworld-sealed-cave-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "underworld-sealed-cave-1": {
                    "index": "0",
                    "location": "Underworld (Sealed Cave) [before Sealed Cave]",
                    "disambiguation": ""
                }
            }
        },
        "underworld-sealed-cave-1": {
            "type": VariableFlags.EXTRA,
            "routes": {},
            "paths": {
                "underworld-sealed-cave-2": {
                    "index": "0",
                    "location": "Underworld (Sealed Cave) [after Sealed Cave]",
                    "disambiguation": ""
                }
            }
        },
        "waterfalls-b1f-0": {
            "type": VariableFlags.EXTRA,
            "routes": {},
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
            "routes": {},
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
            "routes": {},
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
            "routes": {},
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
            "routes": {},
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
            "routes": {},
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
            "routes": {},
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
            "routes": {},
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
            "routes": {},
            "paths": {
                "watery-pass-south-b3f-0": {
                    "index": "0",
                    "location": "Watery Pass-South B3F",
                    "disambiguation": ""
                }
            }
        }
    };

    data.variables = {
        "paladin": {
            "E305400": ["watery-pass-south-b2f-save-room-0"],
            "E307000": ["watery-pass-south-b2f-1"],
            "E307100": ["watery-pass-south-b3f-0"],
            "E307200": ["watery-pass-north-b2f-0"],
            "E307300": ["watery-pass-north-b1f-0"],
            "E000200": ["overworld-kaipo-2"],
            "E307400": ["waterfalls-b1f-0"],
            "E307500": ["waterfalls-b2f-0"],
            "E307600": ["waterfalls-lake-0"],
            "E307601": ["waterfalls-lake-1"],
            "E000201": ["overworld-kaipo-3"],
            "E000300": ["overworld-damcyan-0"],
            "E302500": ["damcyan-0"],
            "E000301": ["overworld-damcyan-1"],
            "E307700": ["antlion-b1f-0"],
            "E307800": ["antlion-b2f-1"],
            "C307800": ["antlion-b2f-choice-0"],
            "E307B00": ["antlion-b2f-charm-room-0"],
            "E307801": ["antlion-b2f-0", "antlion-b2f-2"],
            "E307900": ["antlions-nest-0"],
            "E307901": ["antlions-nest-1"],
            "E307802": ["antlion-b2f-3", "antlion-b2f-4"],
            "C307801": ["antlion-b2f-choice-1"],
            "E307B01": ["antlion-b2f-charm-room-1"],
            "E307803": ["antlion-b2f-5"],
            "E307701": ["antlion-b1f-1"],
            "E000302": ["overworld-damcyan-2"],
            "E000202": ["overworld-kaipo-4"],
            "E000203": ["overworld-kaipo-5"],
            "E000304": ["overworld-damcyan-3"],
            "E307E00": ["mt-hobs-west-0"],
            "E307F00": ["mt-hobs-summit-0"],
            "E307F01": ["mt-hobs-summit-1"],
            "E308000": ["mt-hobs-east-0"],
            "E000400": ["overworld-fabul-0"],
            "E302600": ["fabul-0"],
            "E000401": ["overworld-fabul-1"],
            "E000500": ["overworld-mysidia-0"],
            "E000501": ["overworld-mysidia-1"],
            "E000600": ["overworld-mt-ordeals-0"],
            "E308400": ["mt-ordeals-0"],
            "E308500": ["mt-ordeals-3rd-station-0"],
            "E308501": ["mt-ordeals-3rd-station-1"],
            "E308600": ["mt-ordeals-7th-station-0"],
            "E308700": ["mt-ordeals-summit-0"]
        },
        "nocw": {
            "E305400": ["watery-pass-south-b2f-save-room-0"],
            "E307000": ["watery-pass-south-b2f-1"],
            "E307100": ["watery-pass-south-b3f-0"],
            "E307200": ["watery-pass-north-b2f-0"],
            "E307300": ["watery-pass-north-b1f-0"],
            "E000200": ["overworld-kaipo-2"],
            "E307400": ["waterfalls-b1f-0"],
            "E307500": ["waterfalls-b2f-0"],
            "E307600": ["waterfalls-lake-0"],
            "E307601": ["waterfalls-lake-1"],
            "E000201": ["overworld-kaipo-3"],
            "E000300": ["overworld-damcyan-0"],
            "E302500": ["damcyan-0"],
            "E000301": ["overworld-damcyan-1"],
            "E307700": ["antlion-b1f-0"],
            "E307800": ["antlion-b2f-1"],
            "C307800": ["antlion-b2f-choice-0"],
            "E307B00": ["antlion-b2f-charm-room-0"],
            "E307801": ["antlion-b2f-0", "antlion-b2f-2"],
            "E307900": ["antlions-nest-0"],
            "E307901": ["antlions-nest-1"],
            "E307802": ["antlion-b2f-3", "antlion-b2f-4"],
            "C307801": ["antlion-b2f-choice-1"],
            "E307B01": ["antlion-b2f-charm-room-1"],
            "E307803": ["antlion-b2f-5"],
            "E307701": ["antlion-b1f-1"],
            "E000302": ["overworld-damcyan-2"],
            "E000202": ["overworld-kaipo-4"],
            "E000203": ["overworld-kaipo-5"],
            "E000304": ["overworld-damcyan-3"],
            "E307E00": ["mt-hobs-west-0"],
            "E307F00": ["mt-hobs-summit-0"],
            "E307F01": ["mt-hobs-summit-1"],
            "E308000": ["mt-hobs-east-0"],
            "E000400": ["overworld-fabul-0"],
            "E302600": ["fabul-0"],
            "E000401": ["overworld-fabul-1"],
            "E000500": ["overworld-mysidia-0"],
            "E000501": ["overworld-mysidia-1"],
            "E000600": ["overworld-mt-ordeals-0"],
            "E308400": ["mt-ordeals-0"],
            "E308500": ["mt-ordeals-3rd-station-0"],
            "E308501": ["mt-ordeals-3rd-station-1"],
            "E308600": ["mt-ordeals-7th-station-0"],
            "E308700": ["mt-ordeals-summit-0"],
            "E308701": ["mt-ordeals-summit-1"],
            "E308702": ["mt-ordeals-summit-2"],
            "E308601": ["mt-ordeals-7th-station-1"],
            "E308502": ["mt-ordeals-3rd-station-2"],
            "E308401": ["mt-ordeals-1"],
            "E000601": ["overworld-mt-ordeals-1"],
            "E000502": ["overworld-mysidia-2"],
            "E309700": ["serpent-road-0"],
            "E303A00": ["old-water-way-0"],
            "E303B00": ["castle-baron-b3f-0"],
            "E303E00": ["castle-baron-b2f-0"],
            "E303C00": ["castle-baron-b1f-0", "castle-baron-b1f-1"],
            "C303C00": ["castle-baron-b1f-choice-0"],
            "E303D00": ["castle-baron-b1f-save-room-0"],
            "E303C01": ["castle-baron-b1f-2"],
            "E302400": ["castle-baron-0"],
            "E000700": ["overworld-toroia-0"],
            "E302700": ["toroian-castle-1f-0"],
            "E000701": ["overworld-toroia-1"],
            "E308C00": ["cave-magnes-b1f-0"],
            "E308D00": ["cave-magnes-b2f-0"],
            "E308F00": ["cave-magnes-b3f-0", "cave-magnes-b3f-1"],
            "C308F00": ["cave-magnes-b3f-choice-0"],
            "E309200": ["cave-magnes-b3f-save-room-0"],
            "E308F01": ["cave-magnes-b3f-2"],
            "E309100": ["cave-magnes-b3f-passage-0"],
            "E309300": ["cave-magnes-b4f-0", "cave-magnes-b4f-1"],
            "C309300": ["cave-magnes-b4f-choice-0"],
            "E30A100": ["cave-magnes-b4f-save-room-0"],
            "E309301": ["cave-magnes-b4f-2"],
            "E000702": ["overworld-toroia-3"],
            "C305500": ["toroian-castle-1f-choice-0"],
            "E305500": ["toroian-castle-1f-1"],
            "E000703": ["overworld-toroia-5"],
            "E309800": ["tower-of-zot-1f-0"],
            "E309900": ["tower-of-zot-2f-0"],
            "E309901": ["tower-of-zot-2f-1"],
            "E309A00": ["tower-of-zot-3f-0"],
            "E309C00": ["tower-of-zot-4f-0"],
            "E309D00": ["tower-of-zot-5f-0"],
            "E309D01": ["tower-of-zot-5f-1"],
            "E309E00": ["tower-of-zot-6f-0"],
            "E302401": ["castle-baron-1"],
            "E000A00": ["overworld-agart-0"]
        },
        "no64-excalbur": {
            "E305400": ["watery-pass-south-b2f-save-room-0"],
            "E307000": ["watery-pass-south-b2f-1"],
            "E307100": ["watery-pass-south-b3f-0"],
            "E307200": ["watery-pass-north-b2f-0"],
            "E307300": ["watery-pass-north-b1f-0"],
            "E000200": ["overworld-kaipo-2"],
            "E307400": ["waterfalls-b1f-0"],
            "E307500": ["waterfalls-b2f-0"],
            "E307600": ["waterfalls-lake-0"],
            "E307601": ["waterfalls-lake-1"],
            "E000201": ["overworld-kaipo-3"],
            "E000300": ["overworld-damcyan-0"],
            "E302500": ["damcyan-0"],
            "E000301": ["overworld-damcyan-1"],
            "E307700": ["antlion-b1f-0"],
            "E307800": ["antlion-b2f-1"],
            "C307800": ["antlion-b2f-choice-0"],
            "E307B00": ["antlion-b2f-charm-room-0"],
            "E307801": ["antlion-b2f-0", "antlion-b2f-2"],
            "E307900": ["antlions-nest-0"],
            "E307901": ["antlions-nest-1"],
            "E307802": ["antlion-b2f-3", "antlion-b2f-4"],
            "C307801": ["antlion-b2f-choice-1"],
            "E307B01": ["antlion-b2f-charm-room-1"],
            "E307803": ["antlion-b2f-5"],
            "E307701": ["antlion-b1f-1"],
            "E000302": ["overworld-damcyan-2"],
            "E000202": ["overworld-kaipo-4"],
            "E000203": ["overworld-kaipo-5"],
            "E000304": ["overworld-damcyan-3"],
            "E307E00": ["mt-hobs-west-0"],
            "E307F00": ["mt-hobs-summit-0"],
            "E307F01": ["mt-hobs-summit-1"],
            "E308000": ["mt-hobs-east-0"],
            "E000400": ["overworld-fabul-0"],
            "E302600": ["fabul-0"],
            "E000401": ["overworld-fabul-1"],
            "E000500": ["overworld-mysidia-0"],
            "E000501": ["overworld-mysidia-1"],
            "E000600": ["overworld-mt-ordeals-0"],
            "E308400": ["mt-ordeals-0"],
            "E308500": ["mt-ordeals-3rd-station-0"],
            "E308501": ["mt-ordeals-3rd-station-1"],
            "E308600": ["mt-ordeals-7th-station-0"],
            "E308700": ["mt-ordeals-summit-0"],
            "E308701": ["mt-ordeals-summit-1"],
            "E308702": ["mt-ordeals-summit-2"],
            "E308601": ["mt-ordeals-7th-station-1"],
            "E308502": ["mt-ordeals-3rd-station-2"],
            "E308401": ["mt-ordeals-1"],
            "E000601": ["overworld-mt-ordeals-1"],
            "E000502": ["overworld-mysidia-2"],
            "E309700": ["serpent-road-0"],
            "E303A00": ["old-water-way-0"],
            "E303B00": ["castle-baron-b3f-0"],
            "E303E00": ["castle-baron-b2f-0"],
            "E303C00": ["castle-baron-b1f-0", "castle-baron-b1f-1"],
            "C303C00": ["castle-baron-b1f-choice-0"],
            "E303D00": ["castle-baron-b1f-save-room-0"],
            "E303C01": ["castle-baron-b1f-2"],
            "E302400": ["castle-baron-0"],
            "E000700": ["overworld-toroia-0"],
            "E302700": ["toroian-castle-1f-0"],
            "E000701": ["overworld-toroia-1"],
            "E308C00": ["cave-magnes-b1f-0"],
            "E308D00": ["cave-magnes-b2f-0"],
            "E308F00": ["cave-magnes-b3f-0", "cave-magnes-b3f-1"],
            "C308F00": ["cave-magnes-b3f-choice-0"],
            "E309200": ["cave-magnes-b3f-save-room-0"],
            "E308F01": ["cave-magnes-b3f-2"],
            "E309100": ["cave-magnes-b3f-passage-0"],
            "E309300": ["cave-magnes-b4f-0", "cave-magnes-b4f-1"],
            "C309300": ["cave-magnes-b4f-choice-0"],
            "E30A100": ["cave-magnes-b4f-save-room-0"],
            "E309301": ["cave-magnes-b4f-2"],
            "E000702": ["overworld-toroia-3"],
            "C305500": ["toroian-castle-1f-choice-0"],
            "E305500": ["toroian-castle-1f-1"],
            "E000703": ["overworld-toroia-5"],
            "E309800": ["tower-of-zot-1f-0"],
            "E309900": ["tower-of-zot-2f-0"],
            "E309901": ["tower-of-zot-2f-1"],
            "E309A00": ["tower-of-zot-3f-0"],
            "E309C00": ["tower-of-zot-4f-0"],
            "E309D00": ["tower-of-zot-5f-0"],
            "E309D01": ["tower-of-zot-5f-1"],
            "E309E00": ["tower-of-zot-6f-0"],
            "E302401": ["castle-baron-1"],
            "E000A00": ["overworld-agart-0"],
            "E100000": ["underworld-castle-of-dwarves-0"],
            "C310700": ["castle-of-dwarves-choice-0"],
            "E310700": ["castle-of-dwarves-0", "castle-of-dwarves-1"],
            "E100001": ["underworld-castle-of-dwarves-3"],
            "E312100": ["tower-of-babil-1f-0"],
            "E312200": ["tower-of-babil-2f-0"],
            "E312300": ["tower-of-babil-3f-0"],
            "E312400": ["tower-of-babil-4f-0"],
            "E312500": ["tower-of-babil-5f-0"],
            "E312600": ["tower-of-babil-6f-0"],
            "E312700": ["tower-of-babil-7f-0"],
            "E312800": ["tower-of-babil-8f-0"],
            "E312801": ["tower-of-babil-8f-1"],
            "E312701": ["tower-of-babil-7f-1"],
            "E312601": ["tower-of-babil-6f-1"],
            "E312501": ["tower-of-babil-5f-1"],
            "E312502": ["tower-of-babil-5f-2"],
            "E312401": ["tower-of-babil-4f-1"],
            "E312301": ["tower-of-babil-3f-1"],
            "E312201": ["tower-of-babil-2f-1"],
            "E312101": ["tower-of-babil-1f-1"],
            "E000000": ["overworld-baron-0"],
            "E302402": ["castle-baron-2"],
            "E000A01": ["overworld-eblan-0"],
            "E30C700": ["cave-eblana-b1f-0"],
            "E30C800": ["cave-eblana-b2f-0"],
            "E30C900": ["pass-to-babil-south-0"],
            "E30CA00": ["pass-to-babil-north-0"],
            "E30C901": ["pass-to-babil-south-1"],
            "E30CA01": ["pass-to-babil-north-1", "pass-to-babil-north-2"],
            "C30CA00": ["pass-to-babil-north-choice-0"],
            "E30CD00": ["pass-to-babil-north-save-room-0"],
            "E30CA02": ["pass-to-babil-north-3"],
            "C30CA01": ["pass-to-babil-north-choice-1"],
            "E30CA03": ["pass-to-babil-north-4", "pass-to-babil-north-5"],
            "E30A700": ["tower-of-babil-1f-upper-0"],
            "E30A800": ["tower-of-babil-b2f-0"],
            "E30A900": ["tower-of-babil-b3f-0"],
            "E30AA00": ["tower-of-babil-b4f-0"],
            "E30A901": ["tower-of-babil-b3f-1"],
            "E30AA01": ["tower-of-babil-b4f-1"],
            "E30AC00": ["tower-of-babil-b5f-0"],
            "C30AC00": ["tower-of-babil-b5f-choice-0"],
            "E30AC01": ["tower-of-babil-b5f-1"],
            "E311D00": ["tower-of-babil-8f-revisit-0"],
            "E311E00": ["tower-of-babil-7f-revisit-0"],
            "E311F00": ["tower-of-babil-6f-revisit-0"],
            "E100002": ["underworld-castle-of-dwarves-4"],
            "E310701": ["castle-of-dwarves-2"],
            "E100003": ["underworld-castle-of-dwarves-5"],
            "E313600": ["land-of-monsters-b1f-0"],
            "E313700": ["land-of-monsters-b2f-0"],
            "C313800": ["land-of-monsters-b3f-choice-0"],
            "E313800": ["land-of-monsters-b3f-0", "land-of-monsters-b3f-1", "land-of-monsters-b3f-2"],
            "E100100": ["underworld-sealed-cave-0"],
            "E314400": ["sealed-cave-0"],
            "E100101": ["underworld-sealed-cave-1"],
            "E310702": ["castle-of-dwarves-3"],
            "E100004": ["underworld-castle-of-dwarves-7"],
            "E000A02": ["overworld-eblan-1"],
            "E000704": ["overworld-silvera-0"],
            "E30A000": ["grotto-adamant-0"],
            "E000705": ["overworld-silvera-1"],
            "E100102": ["underworld-kokkol-0"],
            "E000503": ["overworld-mysidia-3"],
            "C200000": ["lunar-overworld-choice-0"],
            "E316500": ["hummingway-cave-0-0", "hummingway-cave-0-1"],
            "E200000": ["lunar-overworld-3-0", "lunar-overworld-3-1"],
            "E200001": ["lunar-overworld-5-0", "lunar-overworld-5-1"],
            "E316300": ["lunar-path-west-0-0", "lunar-path-west-0-1"],
            "E200002": ["lunar-overworld-6-0", "lunar-overworld-6-1"],
            "E316400": ["lunar-path-east-0-0", "lunar-path-east-0-1"],
            "E200003": ["lunar-overworld-7-0", "lunar-overworld-7-1"],
            "E200004": ["lunar-overworld-8-0", "lunar-overworld-8-1"],
            "E316401": ["lunar-path-east-1-0", "lunar-path-east-1-1"],
            "E200005": ["lunar-overworld-9-0", "lunar-overworld-9-1"],
            "E316301": ["lunar-path-west-1-0", "lunar-path-west-1-1"],
            "E200006": ["lunar-overworld-10-0", "lunar-overworld-10-1"],
            "E30B500": ["giant-of-babil-mouth-0"],
            "E30B600": ["giant-of-babil-neck-0"],
            "E30B700": ["giant-of-babil-chest-0"],
            "E30B900": ["giant-of-babil-stomach-0"],
            "E30BA00": ["giant-of-babil-passage-0"],
            "E30BC00": ["giant-of-babil-lung-0"],
            "E30BC01": ["giant-of-babil-lung-1"],
            "E30BD00": ["giant-of-babil-cpu-0"],
            "C200001": ["lunar-overworld-choice-1"],
            "E200007": ["lunar-overworld-12-0"],
            "E316302": ["lunar-path-west-2"],
            "E200008": ["lunar-overworld-13-0"],
            "E316402": ["lunar-path-east-2"],
            "E200009": ["lunar-overworld-14-0"],
            "E316700": ["lunar-subterrane-b1-0"],
            "E316800": ["lunar-subterrane-b2-0"],
            "E316900": ["lunar-subterrane-b3-0"],
            "E316A00": ["lunar-subterrane-b4-0"],
            "E317400": ["lunar-subterrane-b4-passage-0"],
            "E316A01": ["lunar-subterrane-b4-1"],
            "E316B00": ["lunar-subterrane-b5-0"],
            "E317500": ["lunar-subterrane-b5-passage-a-0"],
            "C317500": ["lunar-subterrane-b5-passage-a-choice-0"],
            "E317501": ["lunar-subterrane-b5-passage-a-1"],
            "E316B01": ["lunar-subterrane-b5-1"],
            "E317600": ["lunar-subterrane-b5-passage-b-0"],
            "E316B02": ["lunar-subterrane-b5-2", "lunar-subterrane-b5-3"],
            "C316B00": ["lunar-subterrane-b5-choice-0"],
            "E317700": ["lunar-subterrane-b5-pink-puff-room-0"],
            "E316B03": ["lunar-subterrane-b5-4"],
            "E316C00": ["lunar-subterrane-b6-0"],
            "E317900": ["lunar-subterrane-b6-passage-0"],
            "E316D00": ["lunar-subterrane-b7-0", "lunar-subterrane-b7-1"],
            "C316D00": ["lunar-subterrane-b7-choice-0"],
            "E317B00": ["lunar-subterrane-b7-save-room-0"],
            "E316D01": ["lunar-subterrane-b7-2"],
            "E316E00": ["lunar-core-b1-0"],
            "E316F00": ["lunar-core-b2-0"],
            "E317000": ["lunar-core-b3-0"]
        },
        "no64-rosa": {
            "E305400": ["watery-pass-south-b2f-save-room-0"],
            "E307000": ["watery-pass-south-b2f-1"],
            "E307100": ["watery-pass-south-b3f-0"],
            "E307200": ["watery-pass-north-b2f-0"],
            "E307300": ["watery-pass-north-b1f-0"],
            "E000200": ["overworld-kaipo-2"],
            "E307400": ["waterfalls-b1f-0"],
            "E307500": ["waterfalls-b2f-0"],
            "E307600": ["waterfalls-lake-0"],
            "E307601": ["waterfalls-lake-1"],
            "E000201": ["overworld-kaipo-3"],
            "E000300": ["overworld-damcyan-0"],
            "E302500": ["damcyan-0"],
            "E000301": ["overworld-damcyan-1"],
            "E307700": ["antlion-b1f-0"],
            "E307800": ["antlion-b2f-1"],
            "C307800": ["antlion-b2f-choice-0"],
            "E307B00": ["antlion-b2f-charm-room-0"],
            "E307801": ["antlion-b2f-0", "antlion-b2f-2"],
            "E307900": ["antlions-nest-0"],
            "E307901": ["antlions-nest-1"],
            "E307802": ["antlion-b2f-3", "antlion-b2f-4"],
            "C307801": ["antlion-b2f-choice-1"],
            "E307B01": ["antlion-b2f-charm-room-1"],
            "E307803": ["antlion-b2f-5"],
            "E307701": ["antlion-b1f-1"],
            "E000302": ["overworld-damcyan-2"],
            "E000202": ["overworld-kaipo-4"],
            "E000203": ["overworld-kaipo-5"],
            "E000304": ["overworld-damcyan-3"],
            "E307E00": ["mt-hobs-west-0"],
            "E307F00": ["mt-hobs-summit-0"],
            "E307F01": ["mt-hobs-summit-1"],
            "E308000": ["mt-hobs-east-0"],
            "E000400": ["overworld-fabul-0"],
            "E302600": ["fabul-0"],
            "E000401": ["overworld-fabul-1"],
            "E000500": ["overworld-mysidia-0"],
            "E000501": ["overworld-mysidia-1"],
            "E000600": ["overworld-mt-ordeals-0"],
            "E308400": ["mt-ordeals-0"],
            "E308500": ["mt-ordeals-3rd-station-0"],
            "E308501": ["mt-ordeals-3rd-station-1"],
            "E308600": ["mt-ordeals-7th-station-0"],
            "E308700": ["mt-ordeals-summit-0"],
            "E308701": ["mt-ordeals-summit-1"],
            "E308702": ["mt-ordeals-summit-2"],
            "E308601": ["mt-ordeals-7th-station-1"],
            "E308502": ["mt-ordeals-3rd-station-2"],
            "E308401": ["mt-ordeals-1"],
            "E000601": ["overworld-mt-ordeals-1"],
            "E000502": ["overworld-mysidia-2"],
            "E309700": ["serpent-road-0"],
            "E303A00": ["old-water-way-0"],
            "E303B00": ["castle-baron-b3f-0"],
            "E303E00": ["castle-baron-b2f-0"],
            "E303C00": ["castle-baron-b1f-0", "castle-baron-b1f-1"],
            "C303C00": ["castle-baron-b1f-choice-0"],
            "E303D00": ["castle-baron-b1f-save-room-0"],
            "E303C01": ["castle-baron-b1f-2"],
            "E302400": ["castle-baron-0"],
            "E000700": ["overworld-toroia-0"],
            "E302700": ["toroian-castle-1f-0"],
            "E000701": ["overworld-toroia-1"],
            "E308C00": ["cave-magnes-b1f-0"],
            "E308D00": ["cave-magnes-b2f-0"],
            "E308F00": ["cave-magnes-b3f-0", "cave-magnes-b3f-1"],
            "C308F00": ["cave-magnes-b3f-choice-0"],
            "E309200": ["cave-magnes-b3f-save-room-0"],
            "E308F01": ["cave-magnes-b3f-2"],
            "E309100": ["cave-magnes-b3f-passage-0"],
            "E309300": ["cave-magnes-b4f-0", "cave-magnes-b4f-1"],
            "C309300": ["cave-magnes-b4f-choice-0"],
            "E30A100": ["cave-magnes-b4f-save-room-0"],
            "E309301": ["cave-magnes-b4f-2"],
            "E000702": ["overworld-toroia-3"],
            "C305500": ["toroian-castle-1f-choice-0"],
            "E305500": ["toroian-castle-1f-1"],
            "E000703": ["overworld-toroia-5"],
            "E309800": ["tower-of-zot-1f-0"],
            "E309900": ["tower-of-zot-2f-0"],
            "E309901": ["tower-of-zot-2f-1"],
            "E309A00": ["tower-of-zot-3f-0"],
            "E309C00": ["tower-of-zot-4f-0"],
            "E309D00": ["tower-of-zot-5f-0"],
            "E309D01": ["tower-of-zot-5f-1"],
            "E309E00": ["tower-of-zot-6f-0"],
            "E302401": ["castle-baron-1"],
            "E000A00": ["overworld-agart-0"],
            "E100000": ["underworld-castle-of-dwarves-0"],
            "C310700": ["castle-of-dwarves-choice-0"],
            "E310700": ["castle-of-dwarves-0", "castle-of-dwarves-1"],
            "E100001": ["underworld-castle-of-dwarves-3"],
            "E312100": ["tower-of-babil-1f-0"],
            "E312200": ["tower-of-babil-2f-0"],
            "E312300": ["tower-of-babil-3f-0"],
            "E312400": ["tower-of-babil-4f-0"],
            "E312500": ["tower-of-babil-5f-0"],
            "E312600": ["tower-of-babil-6f-0"],
            "E312700": ["tower-of-babil-7f-0"],
            "E312800": ["tower-of-babil-8f-0"],
            "E312801": ["tower-of-babil-8f-1"],
            "E312701": ["tower-of-babil-7f-1"],
            "E312601": ["tower-of-babil-6f-1"],
            "E312501": ["tower-of-babil-5f-1"],
            "E312502": ["tower-of-babil-5f-2"],
            "E312401": ["tower-of-babil-4f-1"],
            "E312301": ["tower-of-babil-3f-1"],
            "E312201": ["tower-of-babil-2f-1"],
            "E312101": ["tower-of-babil-1f-1"],
            "E000000": ["overworld-baron-0"],
            "E302402": ["castle-baron-2"],
            "E000A01": ["overworld-eblan-0"],
            "E30C700": ["cave-eblana-b1f-0"],
            "E30C800": ["cave-eblana-b2f-0"],
            "E30C900": ["pass-to-babil-south-0"],
            "E30CA00": ["pass-to-babil-north-0"],
            "E30C901": ["pass-to-babil-south-1"],
            "E30CA01": ["pass-to-babil-north-1", "pass-to-babil-north-2"],
            "C30CA00": ["pass-to-babil-north-choice-0"],
            "E30CD00": ["pass-to-babil-north-save-room-0"],
            "E30CA02": ["pass-to-babil-north-3"],
            "C30CA01": ["pass-to-babil-north-choice-1"],
            "E30CA03": ["pass-to-babil-north-4", "pass-to-babil-north-5"],
            "E30A700": ["tower-of-babil-1f-upper-0"],
            "E30A800": ["tower-of-babil-b2f-0"],
            "E30A900": ["tower-of-babil-b3f-0"],
            "E30AA00": ["tower-of-babil-b4f-0"],
            "E30A901": ["tower-of-babil-b3f-1"],
            "E30AA01": ["tower-of-babil-b4f-1"],
            "E30AC00": ["tower-of-babil-b5f-0"],
            "C30AC00": ["tower-of-babil-b5f-choice-0"],
            "E30AC01": ["tower-of-babil-b5f-1"],
            "E311D00": ["tower-of-babil-8f-revisit-0"],
            "E311E00": ["tower-of-babil-7f-revisit-0"],
            "E311F00": ["tower-of-babil-6f-revisit-0"],
            "E100002": ["underworld-castle-of-dwarves-4"],
            "E310701": ["castle-of-dwarves-2"],
            "E100003": ["underworld-castle-of-dwarves-5"],
            "E314400": ["sealed-cave-0"],
            "E100101": ["underworld-sealed-cave-1"],
            "E310702": ["castle-of-dwarves-3"],
            "E100004": ["underworld-castle-of-dwarves-7"],
            "E000503": ["overworld-mysidia-4"],
            "E200001": ["lunar-overworld-5-0"],
            "E316300": ["lunar-path-west-0-0"],
            "E200002": ["lunar-overworld-6-0"],
            "E316400": ["lunar-path-east-0-0"],
            "E200003": ["lunar-overworld-7-0"],
            "E200004": ["lunar-overworld-8-0"],
            "E316401": ["lunar-path-east-1-0"],
            "E200005": ["lunar-overworld-9-0"],
            "E316301": ["lunar-path-west-1-0"],
            "E200006": ["lunar-overworld-10-0"],
            "E30B500": ["giant-of-babil-mouth-0"],
            "E30B600": ["giant-of-babil-neck-0"],
            "E30B700": ["giant-of-babil-chest-0"],
            "E30B900": ["giant-of-babil-stomach-0"],
            "E30BA00": ["giant-of-babil-passage-0"],
            "E30BC00": ["giant-of-babil-lung-0"],
            "E30BC01": ["giant-of-babil-lung-1"],
            "E30BD00": ["giant-of-babil-cpu-0"],
            "E200007": ["lunar-overworld-12-0"],
            "E316302": ["lunar-path-west-2"],
            "E200008": ["lunar-overworld-13-0"],
            "E316402": ["lunar-path-east-2"],
            "E200009": ["lunar-overworld-14-0"],
            "E316700": ["lunar-subterrane-b1-0"],
            "E316800": ["lunar-subterrane-b2-0"],
            "E316900": ["lunar-subterrane-b3-0"],
            "E316A00": ["lunar-subterrane-b4-0"],
            "E317400": ["lunar-subterrane-b4-passage-0"],
            "E316A01": ["lunar-subterrane-b4-1"],
            "E316B00": ["lunar-subterrane-b5-0"],
            "E317500": ["lunar-subterrane-b5-passage-a-2"],
            "E316B01": ["lunar-subterrane-b5-1"],
            "E317600": ["lunar-subterrane-b5-passage-b-1"],
            "E316B02": ["lunar-subterrane-b5-2", "lunar-subterrane-b5-3"],
            "C316B00": ["lunar-subterrane-b5-choice-0"],
            "E317700": ["lunar-subterrane-b5-pink-puff-room-0"],
            "E316B03": ["lunar-subterrane-b5-4"],
            "E316C00": ["lunar-subterrane-b6-0"],
            "E317900": ["lunar-subterrane-b6-passage-0"],
            "E316D00": ["lunar-subterrane-b7-0", "lunar-subterrane-b7-1"],
            "C316D00": ["lunar-subterrane-b7-choice-0"],
            "E317B00": ["lunar-subterrane-b7-save-room-0"],
            "E316D01": ["lunar-subterrane-b7-2"],
            "E316E00": ["lunar-core-b1-0"],
            "E316F00": ["lunar-core-b2-0"],
            "E317000": ["lunar-core-b3-1"]
        },
        "no64-rosa-marathon-recovery-fusoya": {
            "E316500": ["hummingway-cave-0-1"],
            "E200000": ["lunar-overworld-3-1"],
            "E30B500": ["giant-of-babil-mouth-0"],
            "E30B600": ["giant-of-babil-neck-0"],
            "E30B700": ["giant-of-babil-chest-0"],
            "E30B900": ["giant-of-babil-stomach-0"],
            "E30BA00": ["giant-of-babil-passage-1"],
            "E30BC00": ["giant-of-babil-lung-0"],
            "E30BC01": ["giant-of-babil-lung-1"],
            "E30BD00": ["giant-of-babil-cpu-0"],
            "E200007": ["lunar-overworld-12-0"],
            "E316302": ["lunar-path-west-2"],
            "E200008": ["lunar-overworld-13-0"],
            "E316402": ["lunar-path-east-2"],
            "E200009": ["lunar-overworld-14-0"],
            "E316700": ["lunar-subterrane-b1-0"],
            "E316800": ["lunar-subterrane-b2-0"],
            "E316900": ["lunar-subterrane-b3-0"],
            "E316A00": ["lunar-subterrane-b4-0"],
            "E317400": ["lunar-subterrane-b4-passage-0"],
            "E316A01": ["lunar-subterrane-b4-1"],
            "E316B00": ["lunar-subterrane-b5-0"],
            "E317500": ["lunar-subterrane-b5-passage-a-2"],
            "E316B01": ["lunar-subterrane-b5-1"],
            "E317600": ["lunar-subterrane-b5-passage-b-1"],
            "C316B00": ["lunar-subterrane-b5-choice-0"],
            "E316B02": ["lunar-subterrane-b5-2", "lunar-subterrane-b5-3"],
            "E317700": ["lunar-subterrane-b5-pink-puff-room-0"],
            "E316B03": ["lunar-subterrane-b5-4"],
            "C316C00": ["lunar-subterrane-b6-choice-0"],
            "E316C00": ["lunar-subterrane-b6-0", "lunar-subterrane-b6-1"],
            "E317900": ["lunar-subterrane-b6-passage-0"],
            "E316D00": ["lunar-subterrane-b7-1"],
            "E317B00": ["lunar-subterrane-b7-save-room-1"],
            "E316D01": ["lunar-subterrane-b7-2"],
            "E316E00": ["lunar-core-b1-0", "lunar-core-b1-1"],
            "E316F00": ["lunar-core-b2-0"],
            "E317000": ["lunar-core-b3-0", "lunar-core-b3-1"]
        },
        "no64-rosa-marathon-recovery-paladin": {
            "E303E00": ["castle-baron-b2f-0"],
            "E303C00": ["castle-baron-b1f-3"],
            "E303D00": ["castle-baron-b1f-save-room-0"],
            "E303C01": ["castle-baron-b1f-2"],
            "E302400": ["castle-baron-0"],
            "E000700": ["overworld-toroia-0"],
            "E302700": ["toroian-castle-1f-0"],
            "E000701": ["overworld-toroia-1"],
            "E308C00": ["cave-magnes-b1f-0"],
            "E308D00": ["cave-magnes-b2f-0"],
            "E308F00": ["cave-magnes-b3f-0", "cave-magnes-b3f-1"],
            "C308F00": ["cave-magnes-b3f-choice-0"],
            "E309200": ["cave-magnes-b3f-save-room-0"],
            "E308F01": ["cave-magnes-b3f-2"],
            "E309100": ["cave-magnes-b3f-passage-0"],
            "E309300": ["cave-magnes-b4f-0", "cave-magnes-b4f-1"],
            "C309300": ["cave-magnes-b4f-choice-0"],
            "E30A100": ["cave-magnes-b4f-save-room-0"],
            "E309301": ["cave-magnes-b4f-2"],
            "E000702": ["overworld-toroia-3"],
            "C305500": ["toroian-castle-1f-choice-0"],
            "E305500": ["toroian-castle-1f-1"],
            "E000703": ["overworld-toroia-5"],
            "E309800": ["tower-of-zot-1f-0"],
            "E309900": ["tower-of-zot-2f-0"],
            "E309901": ["tower-of-zot-2f-1"],
            "E309A00": ["tower-of-zot-3f-0"],
            "E309C00": ["tower-of-zot-4f-0"],
            "E309D00": ["tower-of-zot-5f-3"],
            "E309D02": ["tower-of-zot-5f-2"],
            "E309D01": ["tower-of-zot-5f-4"],
            "E309E00": ["tower-of-zot-6f-0"],
            "E302401": ["castle-baron-1"],
            "E000A00": ["overworld-agart-0"],
            "E100000": ["underworld-castle-of-dwarves-0"],
            "C310700": ["castle-of-dwarves-choice-0"],
            "E310700": ["castle-of-dwarves-0", "castle-of-dwarves-1"],
            "E100001": ["underworld-castle-of-dwarves-3"],
            "E312100": ["tower-of-babil-1f-0"],
            "E312200": ["tower-of-babil-2f-0"],
            "E312300": ["tower-of-babil-3f-0"],
            "E312400": ["tower-of-babil-4f-0"],
            //"E312402": ["tower-of-babil-4f-2"], FIXME
            "E312500": ["tower-of-babil-5f-0"],
            "E312600": ["tower-of-babil-6f-0"],
            "E312700": ["tower-of-babil-7f-0"],
            "E312800": ["tower-of-babil-8f-0"],
            "E312801": ["tower-of-babil-8f-1"],
            "E312701": ["tower-of-babil-7f-1"],
            "E312601": ["tower-of-babil-6f-1"],
            "E312501": ["tower-of-babil-5f-1"],
            "E312502": ["tower-of-babil-5f-2"],
            "E312401": ["tower-of-babil-4f-1"],
            "E312301": ["tower-of-babil-3f-1"],
            "E312201": ["tower-of-babil-2f-1"],
            "E312101": ["tower-of-babil-1f-1"],
            "E000000": ["overworld-baron-0"],
            "E302402": ["castle-baron-2"],
            "E000A01": ["overworld-eblan-0"],
            "E30C700": ["cave-eblana-b1f-0"],
            //"C30C800": ["cave-eblana-b2f-1"], FIXME
            "E30C800": ["cave-eblana-b2f-0"],
            "E30C900": ["pass-to-babil-south-0"],
            "E30CA00": ["pass-to-babil-north-0"],
            "E30C901": ["pass-to-babil-south-1"],
            "E30CA01": ["pass-to-babil-north-1", "pass-to-babil-north-2"],
            "C30CA00": ["pass-to-babil-north-choice-0"],
            "E30CD00": ["pass-to-babil-north-save-room-0"],
            "E30CA02": ["pass-to-babil-north-3"],
            "C30CA01": ["pass-to-babil-north-choice-1"],
            "E30CA03": ["pass-to-babil-north-4", "pass-to-babil-north-5"],
            "E30A700": ["tower-of-babil-1f-upper-0"],
            "E30A800": ["tower-of-babil-b2f-0"],
            "E30A900": ["tower-of-babil-b3f-0"],
            "E30AA00": ["tower-of-babil-b4f-0"],
            "E30A901": ["tower-of-babil-b3f-1"],
            //"E30A902": ["tower-of-babil-b3f-2"], FIXME
            "E30AA01": ["tower-of-babil-b4f-1"],
            "E30AC00": ["tower-of-babil-b5f-0"],
            "C30AC00": ["tower-of-babil-b5f-choice-0"],
            "E30AC01": ["tower-of-babil-b5f-1"],
            "E311D00": ["tower-of-babil-8f-revisit-0"],
            "E311E00": ["tower-of-babil-7f-revisit-0"],
            "E311F00": ["tower-of-babil-6f-revisit-0"],
            "E100002": ["underworld-castle-of-dwarves-4"],
            "E310701": ["castle-of-dwarves-2"],
            "E100003": ["underworld-castle-of-dwarves-5"],
            "E314400": ["sealed-cave-0"],
            "E100101": ["underworld-sealed-cave-1"],
            "E310702": ["castle-of-dwarves-3"],
            "E100004": ["underworld-castle-of-dwarves-7"],
            //"C000500": ["overworld-mysidia-5"], FIXME
            "E000503": ["overworld-mysidia-4"],
            "C200000": ["lunar-overworld-choice-0"],
            "E316500": ["hummingway-cave-0-0", "hummingway-cave-0-1"],
            "E200000": ["lunar-overworld-3-0", "lunar-overworld-3-1"],
            "E200001": ["lunar-overworld-5-0", "lunar-overworld-5-1"],
            "E316300": ["lunar-path-west-0-0", "lunar-path-west-0-1"],
            "E200002": ["lunar-overworld-6-0", "lunar-overworld-6-1"],
            "E316400": ["lunar-path-east-0-0", "lunar-path-east-0-1"],
            "E200003": ["lunar-overworld-7-0", "lunar-overworld-7-1"],
            "E200004": ["lunar-overworld-8-0", "lunar-overworld-8-1"],
            "E316401": ["lunar-path-east-1-0", "lunar-path-east-1-1"],
            "E200005": ["lunar-overworld-9-0", "lunar-overworld-9-1"],
            "E316301": ["lunar-path-west-1-0", "lunar-path-west-1-1"],
            "E200006": ["lunar-overworld-10-0", "lunar-overworld-10-1"],
            "E30B500": ["giant-of-babil-mouth-0"],
            "E30B600": ["giant-of-babil-neck-0"],
            "E30B700": ["giant-of-babil-chest-0"],
            "E30B900": ["giant-of-babil-stomach-0"],
            "E30BA00": ["giant-of-babil-passage-1"],
            "E30BC00": ["giant-of-babil-lung-0"],
            "E30BC01": ["giant-of-babil-lung-1"],
            "E30BD00": ["giant-of-babil-cpu-0"],
            "E200007": ["lunar-overworld-12-0"],
            "E316302": ["lunar-path-west-2"],
            "E200008": ["lunar-overworld-13-0"],
            "E316402": ["lunar-path-east-2"],
            "E200009": ["lunar-overworld-14-0"],
            "E316700": ["lunar-subterrane-b1-0"],
            "E316800": ["lunar-subterrane-b2-0"],
            "E316900": ["lunar-subterrane-b3-0"],
            "E316A00": ["lunar-subterrane-b4-0"],
            "E317400": ["lunar-subterrane-b4-passage-0"],
            "E316A01": ["lunar-subterrane-b4-1"],
            "E316B00": ["lunar-subterrane-b5-0"],
            "E317500": ["lunar-subterrane-b5-passage-a-2"],
            "E316B01": ["lunar-subterrane-b5-1"],
            "E317600": ["lunar-subterrane-b5-passage-b-1"],
            "C316B00": ["lunar-subterrane-b5-choice-0"],
            "E316B02": ["lunar-subterrane-b5-2", "lunar-subterrane-b5-3"],
            "E317700": ["lunar-subterrane-b5-pink-puff-room-0"],
            "E316B03": ["lunar-subterrane-b5-4"],
            "C316C00": ["lunar-subterrane-b6-choice-0"],
            "E316C00": ["lunar-subterrane-b6-0", "lunar-subterrane-b6-1"],
            "E317900": ["lunar-subterrane-b6-passage-0"],
            "E316D00": ["lunar-subterrane-b7-1"],
            "E317B00": ["lunar-subterrane-b7-save-room-1"],
            "E316D01": ["lunar-subterrane-b7-2"],
            "E316E00": ["lunar-core-b1-0", "lunar-core-b1-1"],
            "E316F00": ["lunar-core-b2-0"],
            "E317000": ["lunar-core-b3-0", "lunar-core-b3-1"]
        }
    };

    data.paths = {
        "agart-0": {
            "flags": PathFlags.NONE,
            "map": "3006-0",
            "segments": {
                "base-0": [
                    [16, 31, SegmentFlags.START],
                    [16, 22, SegmentFlags.NONE],
                    [15, 22, SegmentFlags.NONE],
                    [15, 21, SegmentFlags.END]
                ]
            }
        },
        "agart-1": {
            "flags": PathFlags.NONE,
            "map": "3006-0",
            "segments": {
                "base-0": [
                    [15, 21, SegmentFlags.START],
                    [15, 31, SegmentFlags.END]
                ]
            }
        },
        "agart-well-0": {
            "flags": PathFlags.NONE,
            "map": "308B-0",
            "segments": {
                "base-0": [
                    [9, 11, SegmentFlags.START],
                    [9, 10, SegmentFlags.RETURN],
                    [9, 14, SegmentFlags.END]
                ]
            }
        },
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
                "extra-1-0": [
                    [22, 28, SegmentFlags.NONE],
                    [22, 29, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [14, 27, SegmentFlags.NONE],
                    [15, 27, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
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
                "extra-1-0": [
                    [22, 28, SegmentFlags.NONE],
                    [22, 29, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
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
                "extra-1-0": [
                    [22, 28, SegmentFlags.NONE],
                    [22, 29, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
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
                "extra-1-0": [
                    [22, 28, SegmentFlags.NONE],
                    [22, 29, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [25, 24, SegmentFlags.NONE],
                    [26, 24, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
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
                "extra-1-0": [
                    [14, 19, SegmentFlags.NONE],
                    [15, 19, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [14, 17, SegmentFlags.NONE],
                    [15, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "baron-town-0": {
            "flags": PathFlags.NONE,
            "map": "3000-0",
            "segments": {
                "base-0": [
                    [4, 27, SegmentFlags.START],
                    [20, 27, SegmentFlags.NONE],
                    [20, 26, SegmentFlags.END]
                ]
            }
        },
        "baron-town-1": {
            "flags": PathFlags.NONE,
            "map": "3000-0",
            "segments": {
                "base-0": [
                    [20, 26, SegmentFlags.START],
                    [20, 27, SegmentFlags.NONE],
                    [17, 27, SegmentFlags.NONE],
                    [17, 20, SegmentFlags.NONE],
                    [14, 20, SegmentFlags.NONE],
                    [14, 17, SegmentFlags.END],
                    [14, 16, SegmentFlags.END]
                ]
            }
        },
        "baron-town-2": {
            "flags": PathFlags.NONE,
            "map": "3000-0",
            "segments": {
                "base-0": [
                    [14, 16, SegmentFlags.START],
                    [14, 20, SegmentFlags.NONE],
                    [7, 20, SegmentFlags.NONE],
                    [7, 21, SegmentFlags.NONE],
                    [3, 21, SegmentFlags.NONE],
                    [3, 20, SegmentFlags.END],
                    [3, 19, SegmentFlags.END]
                ]
            }
        },
        "baron-town-inn-0": {
            "flags": PathFlags.NONE,
            "map": "300B-0",
            "segments": {
                "base-0": [
                    [14, 17, SegmentFlags.START],
                    [18, 17, SegmentFlags.NONE],
                    [18, 8, SegmentFlags.NONE],
                    [12, 8, SegmentFlags.NONE],
                    [12, 4, SegmentFlags.NONE],
                    [13, 4, SegmentFlags.END]
                ],
                "base-1": [
                    [14, 15, SegmentFlags.START],
                    [14, 21, SegmentFlags.END]
                ]
            }
        },
        "baron-town-serpent-road-0": {
            "flags": PathFlags.STEPS,
            "map": "3097-0",
            "segments": {
                "base-0": [
                    [5, 5, SegmentFlags.START],
                    [5, 14, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [5, 10, SegmentFlags.NONE],
                    [5, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [5, 10, SegmentFlags.NONE],
                    [6, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "baron-town-weapon-shop-0": {
            "flags": PathFlags.NONE,
            "map": "300C-0",
            "segments": {
                "base-0": [
                    [7, 9, SegmentFlags.START],
                    [10, 9, SegmentFlags.NONE],
                    [10, 7, SegmentFlags.RETURN],
                    [10, 8, SegmentFlags.NONE],
                    [5, 8, SegmentFlags.NONE],
                    [5, 7, SegmentFlags.RETURN],
                    [5, 9, SegmentFlags.NONE],
                    [7, 9, SegmentFlags.NONE],
                    [7, 12, SegmentFlags.END]
                ]
            }
        },
        "big-whale-console": {
            "flags": PathFlags.NONE,
            "map": "312F-0",
            "segments": {
                "base-0": [
                    [3, 13, SegmentFlags.START],
                    [5, 13, SegmentFlags.NONE],
                    [5, 7, SegmentFlags.NONE],
                    [7, 7, SegmentFlags.END]
                ]
            }
        },
        "big-whale-crystal": {
            "flags": PathFlags.NONE,
            "map": "312F-0",
            "segments": {
                "base-0": [
                    [3, 13, SegmentFlags.START],
                    [7, 13, SegmentFlags.NONE],
                    [7, 11, SegmentFlags.END]
                ]
            }
        },
        "big-whale-exit": {
            "flags": PathFlags.NONE,
            "map": "312F-0",
            "segments": {
                "base-0": [
                    [7, 7, SegmentFlags.START],
                    [5, 7, SegmentFlags.NONE],
                    [5, 13, SegmentFlags.NONE],
                    [2, 13, SegmentFlags.END]
                ]
            }
        },
        "castle-baron-0": {
            "flags": PathFlags.NONE,
            "map": "3024-1",
            "segments": {
                "base-0": [
                    [10, 0, SegmentFlags.START],
                    [10, 2, SegmentFlags.NONE],
                    [0, 2, SegmentFlags.NONE],
                    [0, 30, SegmentFlags.NONE],
                    [3, 30, SegmentFlags.NONE],
                    [3, 19, SegmentFlags.NONE],
                    [8, 19, SegmentFlags.NONE],
                    [8, 17, SegmentFlags.END]
                ]
            }
        },
        "castle-baron-1": {
            "flags": PathFlags.NONE,
            "map": "3024-1",
            "segments": {
                "base-0": [
                    [8, 13, SegmentFlags.START],
                    [12, 13, SegmentFlags.END]
                ]
            }
        },
        "castle-baron-2": {
            "flags": PathFlags.NONE,
            "map": "3024-2",
            "segments": {
                "base-0": [
                    [6, 10, SegmentFlags.START],
                    [6, 18, SegmentFlags.NONE],
                    [8, 18, SegmentFlags.NONE],
                    [8, 17, SegmentFlags.END]
                ]
            }
        },
        "castle-baron-3": {
            "flags": PathFlags.NONE,
            "map": "3024-2",
            "segments": {
                "base-0": [
                    [8, 13, SegmentFlags.START],
                    [12, 13, SegmentFlags.END]
                ]
            }
        },
        "castle-baron-4": {
            "flags": PathFlags.NONE,
            "map": "3024-2",
            "segments": {
                "base-0": [
                    [15, 18, SegmentFlags.START],
                    [15, 31, SegmentFlags.END]
                ]
            }
        },
        "castle-baron-5": {
            "flags": PathFlags.NONE,
            "map": "3024-2",
            "segments": {
                "base-0": [
                    [16, 30, SegmentFlags.START],
                    [16, 29, SegmentFlags.NONE],
                    [14, 29, SegmentFlags.RETURN],
                    [15, 29, SegmentFlags.NONE],
                    [15, 18, SegmentFlags.NONE],
                    [14, 18, SegmentFlags.RETURN],
                    [15, 18, SegmentFlags.NONE],
                    [15, 15, SegmentFlags.END]
                ]
            }
        },
        "castle-baron-6": {
            "flags": PathFlags.NONE,
            "map": "3024-2",
            "segments": {
                "base-0": [
                    [19, 13, SegmentFlags.START],
                    [23, 13, SegmentFlags.NONE],
                    [23, 14, SegmentFlags.NONE],
                    [28, 14, SegmentFlags.END]
                ]
            }
        },
        "castle-baron-7": {
            "flags": PathFlags.NONE,
            "map": "3024-2",
            "segments": {
                "base-0": [
                    [28, 19, SegmentFlags.START],
                    [24, 19, SegmentFlags.END]
                ]
            }
        },
        "castle-baron-1f-0": {
            "flags": PathFlags.STEPS,
            "map": "302A-1",
            "segments": {
                "base-0": [
                    [1, 6, SegmentFlags.START],
                    [1, 10, SegmentFlags.NONE],
                    [6, 10, SegmentFlags.END]
                ],
                "base-1": [
                    [8, 4, SegmentFlags.START],
                    [8, 0, SegmentFlags.END]
                ],
                "extra-1-1": [
                    [8, 3, SegmentFlags.NONE],
                    [9, 3, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-1": [
                    [8, 4, SegmentFlags.NONE],
                    [9, 4, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "castle-baron-1f-1": {
            "flags": PathFlags.STEPS,
            "map": "302A-1",
            "segments": {
                "base-0": [
                    [1, 6, SegmentFlags.START],
                    [1, 10, SegmentFlags.NONE],
                    [8, 10, SegmentFlags.NONE],
                    [8, 15, SegmentFlags.END]
                ]
            }
        },
        "castle-baron-1f-2": {
            "flags": PathFlags.STEPS,
            "map": "302A-0",
            "segments": {
                "base-0": [
                    [8, 12, SegmentFlags.START],
                    [8, 10, SegmentFlags.NONE],
                    [16, 10, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [8, 12, SegmentFlags.NONE],
                    [8, 13, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [8, 12, SegmentFlags.NONE],
                    [9, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "castle-baron-2f-0": {
            "flags": PathFlags.STEPS,
            "map": "302B-1",
            "segments": {
                "base-0": [
                    [14, 7, SegmentFlags.START],
                    [14, 2, SegmentFlags.END]
                ]
            }
        },
        "castle-baron-3f-0": {
            "flags": PathFlags.STEPS,
            "map": "308A-0",
            "segments": {
                "base-0": [
                    [7, 6, SegmentFlags.START],
                    [7, 2, SegmentFlags.END]
                ]
            }
        },
        "castle-baron-b1f-0": {
            "flags": PathFlags.STEPS,
            "map": "303C-0",
            "segments": {
                "base-0": [
                    [6, 16, SegmentFlags.START],
                    [6, 12, SegmentFlags.NONE],
                    [12, 12, SegmentFlags.NONE],
                    [12, 10, SegmentFlags.NONE],
                    [14, 10, SegmentFlags.NONE],
                    [14, 2, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [14, 4, SegmentFlags.NONE],
                    [15, 4, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "castle-baron-b1f-1": {
            "flags": PathFlags.STEPS,
            "map": "303C-0",
            "segments": {
                "base-0": [
                    [6, 16, SegmentFlags.START],
                    [6, 12, SegmentFlags.NONE],
                ],
                "alternate-0": [
                    [6, 12, SegmentFlags.NONE],
                    [6, 11, SegmentFlags.NONE],
                    [2, 11, SegmentFlags.NONE],
                    [2, 9, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [6, 12, SegmentFlags.NONE],
                    [7, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "castle-baron-b1f-3": {
            "flags": PathFlags.STEPS,
            "map": "303C-0",
            "segments": {
                "base-0": [
                    [6, 16, SegmentFlags.START],
                    [6, 12, SegmentFlags.NONE],
                    [6, 11, SegmentFlags.NONE],
                    [2, 11, SegmentFlags.NONE],
                    [2, 9, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [6, 12, SegmentFlags.NONE],
                    [7, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "castle-baron-b1f-2": {
            "flags": PathFlags.STEPS,
            "map": "303C-0",
            "segments": {
                "base-0": [
                    [2, 9, SegmentFlags.START],
                    [2, 11, SegmentFlags.NONE],
                    [6, 11, SegmentFlags.NONE],
                    [6, 12, SegmentFlags.NONE],
                    [12, 12, SegmentFlags.NONE],
                    [12, 10, SegmentFlags.NONE],
                    [14, 10, SegmentFlags.NONE],
                    [14, 2, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [14, 4, SegmentFlags.NONE],
                    [15, 4, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "castle-baron-b1f-save-room-0": {
            "flags": PathFlags.STEPS,
            "map": "303D-0",
            "segments": {
                "base-0": [
                    [4, 11, SegmentFlags.START],
                    [4, 12, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [4, 11, SegmentFlags.NONE],
                    [4, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "castle-baron-b2f-0": {
            "flags": PathFlags.STEPS,
            "map": "303E-0",
            "segments": {
                "base-0": [
                    [2, 26, SegmentFlags.START],
                    [2, 23, SegmentFlags.NONE],
                    [8, 23, SegmentFlags.NONE],
                    [8, 5, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [8, 7, SegmentFlags.NONE],
                    [9, 7, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "castle-baron-b3f-0": {
            "flags": PathFlags.STEPS,
            "map": "303B-0",
            "segments": {
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
                    [30, 3, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [30, 13, SegmentFlags.NONE],
                    [30, 14, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "castle-baron-kings-room-0": {
            "flags": PathFlags.STEPS,
            "map": "302C-1",
            "segments": {
                "base-0": [
                    [8, 10, SegmentFlags.START],
                    [8, 4, SegmentFlags.END]
                ]
            }
        },
        "castle-baron-left-passage-0": {
            "flags": PathFlags.STEPS,
            "map": "302D-0",
            "segments": {
                "base-0": [
                    [2, 8, SegmentFlags.START],
                    [2, 2, SegmentFlags.END]
                ]
            }
        },
        "castle-baron-left-tower-1f-0": {
            "flags": PathFlags.STEPS,
            "map": "3032-0",
            "segments": {
                "base-0": [
                    [5, 4, SegmentFlags.START],
                    [5, 9, SegmentFlags.END]
                ]
            }
        },
        "castle-baron-left-tower-2f-0": {
            "flags": PathFlags.STEPS,
            "map": "3033-1",
            "segments": {
                "base-0": [
                    [9, 4, SegmentFlags.START],
                    [5, 4, SegmentFlags.END]
                ]
            }
        },
        "castle-baron-left-tower-room-0": {
            "flags": PathFlags.STEPS,
            "map": "3034-0",
            "segments": {
                "base-0": [
                    [6, 4, SegmentFlags.START],
                    [9, 4, SegmentFlags.END]
                ],
                "optional-3-0": [
                    [6, 4, SegmentFlags.NONE],
                    [6, 5, SegmentFlags.NONE],
                    [8, 5, SegmentFlags.ANNOTATE],
                    [8, 4, SegmentFlags.NONE]
                ],
                "extra-1-0": [
                    [7, 4, SegmentFlags.NONE],
                    [7, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [6, 4, SegmentFlags.NONE],
                    [6, 3, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "castle-baron-right-passage-0": {
            "flags": PathFlags.STEPS,
            "map": "302E-1",
            "segments": {
                "base-0": [
                    [18, 2, SegmentFlags.START],
                    [18, 12, SegmentFlags.END]
                ]
            }
        },
        "castle-of-dwarves-0": {
            "flags": PathFlags.NONE,
            "map": "3107-0",
            "segments": {
                "base-0": [
                    [15, 30, SegmentFlags.START],
                    [15, 19, SegmentFlags.END]
                ]
            }
        },
        "castle-of-dwarves-1": {
            "flags": PathFlags.NONE,
            "map": "3107-0",
            "segments": {
                "base-0": [
                    [15, 30, SegmentFlags.START],
                    [15, 19, SegmentFlags.END]
                ]
            }
        },
        "castle-of-dwarves-b1f-0": {
            "flags": PathFlags.STEPS,
            "map": "310A-0",
            "segments": {
                "base-0": [
                    [26, 8, SegmentFlags.START],
                    [15, 8, SegmentFlags.NONE],
                    [15, 4, SegmentFlags.NONE],
                    [14, 4, SegmentFlags.END],
                    [14, 0, SegmentFlags.NONE],
                    [11, 0, SegmentFlags.END]
                ]
            }
        },
        "castle-of-dwarves-b1f-1": {
            "flags": PathFlags.STEPS,
            "map": "310A-0",
            "segments": {
                "base-0": [
                    [1, 8, SegmentFlags.START],
                    [6, 8, SegmentFlags.NONE],
                    [6, 7, SegmentFlags.END]
                ]
            }
        },
        "castle-of-dwarves-b2f-0": {
            "flags": PathFlags.STEPS,
            "map": "310B-0",
            "segments": {
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
                    [2, 27, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [11, 11, SegmentFlags.NONE],
                    [11, 12, SegmentFlags.ANNOTATE],
                    [10, 12, SegmentFlags.NONE]
                ],
                "optional-2-0": [
                    [11, 11, SegmentFlags.NONE],
                    [11, 12, SegmentFlags.NONE],
                    [10, 12, SegmentFlags.NONE],
                    [10, 14, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [11, 14, SegmentFlags.NONE],
                    [11, 17, SegmentFlags.NONE]
                ]
            }
        },
        "castle-of-dwarves-b2f-1": {
            "flags": PathFlags.STEPS,
            "map": "310B-0",
            "segments": {
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
                    [2, 27, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [11, 11, SegmentFlags.NONE],
                    [11, 12, SegmentFlags.ANNOTATE],
                    [10, 12, SegmentFlags.NONE]
                ],
                "optional-2-0": [
                    [11, 11, SegmentFlags.NONE],
                    [11, 12, SegmentFlags.NONE],
                    [10, 12, SegmentFlags.NONE],
                    [10, 14, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [11, 14, SegmentFlags.NONE],
                    [11, 17, SegmentFlags.NONE]
                ]
            }
        },
        "castle-of-dwarves-1f-0": {
            "flags": PathFlags.STEPS,
            "map": "3108-0",
            "segments": {
                "base-0": [
                    [11, 11, SegmentFlags.START],
                    [11, 1, SegmentFlags.END]
                ]
            }
        },
        "castle-of-dwarves-1f-1": {
            "flags": PathFlags.STEPS,
            "map": "3108-1",
            "segments": {
                "base-0": [
                    [11, 3, SegmentFlags.START],
                    [11, 8, SegmentFlags.NONE],
                    [21, 8, SegmentFlags.NONE],
                    [21, 6, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [11, 7, SegmentFlags.NONE],
                    [16, 7, SegmentFlags.ANNOTATE],
                    [16, 8, SegmentFlags.NONE]
                ]
            }
        },
        "castle-of-dwarves-1f-2": {
            "flags": PathFlags.STEPS,
            "map": "3108-1",
            "segments": {
                "base-0": [
                    [11, 1, SegmentFlags.START],
                    [11, 8, SegmentFlags.NONE],
                    [21, 8, SegmentFlags.NONE],
                    [21, 6, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [11, 7, SegmentFlags.NONE],
                    [16, 7, SegmentFlags.ANNOTATE],
                    [16, 8, SegmentFlags.NONE]
                ]
            }
        },
        "castle-of-dwarves-1f-3": {
            "flags": PathFlags.STEPS,
            "map": "3108-1",
            "segments": {
                "base-0": [
                    [11, 11, SegmentFlags.START],
                    [11, 8, SegmentFlags.NONE],
                    [1, 8, SegmentFlags.NONE],
                    [1, 6, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [6, 8, SegmentFlags.NONE],
                    [6, 7, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "optional-1-0": [
                    [11, 9, SegmentFlags.NONE],
                    [8, 9, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [8, 8, SegmentFlags.NONE]
                ],
                "optional-2-0": [
                    [11, 10, SegmentFlags.NONE],
                    [8, 10, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [8, 8, SegmentFlags.NONE]
                ],
                "optional-3-0": [
                    [11, 11, SegmentFlags.NONE],
                    [8, 11, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [8, 8, SegmentFlags.NONE]
                ],
                "optional-4-0": [
                    [11, 11, SegmentFlags.NONE],
                    [6, 11, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [6, 8, SegmentFlags.NONE]
                ]
            }
        },
        "castle-of-dwarves-1f-4": {
            "flags": PathFlags.STEPS,
            "map": "3108-1",
            "segments": {
                "base-0": [
                    [11, 11, SegmentFlags.START],
                    [11, 1, SegmentFlags.END]
                ]
            }
        },
        "castle-of-dwarves-crystal-room-0": {
            "flags": PathFlags.NONE,
            "map": "310D-0",
            "segments": {
                "base-0": [
                    [9, 9, SegmentFlags.START],
                    [9, 8, SegmentFlags.RETURN],
                    [9, 20, SegmentFlags.END]
                ]
            }
        },
        "castle-of-dwarves-crystal-room-1": {
            "flags": PathFlags.NONE,
            "map": "310D-0",
            "segments": {
                "base-0": [
                    [9, 9, SegmentFlags.START],
                    [9, 8, SegmentFlags.END]
                ]
            }
        },
        "castle-of-dwarves-dwarf-base-0": {
            "flags": PathFlags.STEPS,
            "map": "310F-0",
            "segments": {
                "base-0": [
                    [29, 5, SegmentFlags.START],
                    [28, 5, SegmentFlags.NONE],
                    [28, 8, SegmentFlags.NONE],
                    [26, 8, SegmentFlags.NONE],
                    [10, 8, SegmentFlags.NONE],
                    [10, 12, SegmentFlags.NONE],
                    [3, 12, SegmentFlags.NONE],
                    [3, 7, SegmentFlags.RETURN],
                    [3, 14, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [3, 7, SegmentFlags.RETURN],
                    [3, 6, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "optional-1-0": [
                    [29, 5, SegmentFlags.NONE],
                    [29, 6, SegmentFlags.NONE | SegmentFlags.ANNOTATE],
                    [28, 6, SegmentFlags.NONE]
                ],
                "optional-2-0": [
                    [29, 5, SegmentFlags.NONE],
                    [29, 6, SegmentFlags.NONE | SegmentFlags.ANNOTATE],
                    [27, 6, SegmentFlags.NONE],
                    [27, 8, SegmentFlags.NONE]
                ]
            }
        },
        "castle-of-dwarves-dwarf-base-1": {
            "flags": PathFlags.STEPS,
            "map": "310F-0",
            "segments": {
                "base-0": [
                    [29, 5, SegmentFlags.START],
                    [28, 5, SegmentFlags.NONE],
                    [28, 8, SegmentFlags.NONE],
                    [26, 8, SegmentFlags.NONE],
                    [10, 8, SegmentFlags.NONE],
                    [10, 12, SegmentFlags.NONE],
                    [3, 12, SegmentFlags.NONE],
                    [3, 7, SegmentFlags.RETURN],
                    [3, 14, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [3, 7, SegmentFlags.RETURN],
                    [3, 6, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "optional-1-0": [
                    [29, 5, SegmentFlags.NONE],
                    [29, 6, SegmentFlags.NONE | SegmentFlags.ANNOTATE],
                    [28, 6, SegmentFlags.NONE]
                ],
                "optional-2-0": [
                    [29, 5, SegmentFlags.NONE],
                    [29, 6, SegmentFlags.NONE | SegmentFlags.ANNOTATE],
                    [27, 6, SegmentFlags.NONE],
                    [27, 8, SegmentFlags.NONE]
                ]
            }
        },
        "castle-of-dwarves-kings-room-0": {
            "flags": PathFlags.STEPS,
            "map": "3109-0",
            "segments": {
                "base-0": [
                    [10, 13, SegmentFlags.START],
                    [10, 11, SegmentFlags.END]
                ]
            }
        },
        "castle-of-dwarves-kings-room-1": {
            "flags": PathFlags.STEPS,
            "map": "3109-0",
            "segments": {
                "base-0": [
                    [9, 1, SegmentFlags.START],
                    [8, 1, SegmentFlags.NONE],
                    [8, 6, SegmentFlags.NONE],
                    [10, 6, SegmentFlags.NONE],
                    [10, 10, SegmentFlags.NONE],
                    [10, 15, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [9, 6, SegmentFlags.NONE],
                    [9, 10, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [10, 10, SegmentFlags.NONE]
                ],
                "optional-2-0": [
                    [8, 6, SegmentFlags.NONE],
                    [8, 10, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [10, 10, SegmentFlags.NONE]
                ]
            }
        },
        "castle-of-dwarves-kings-room-3": {
            "flags": PathFlags.STEPS,
            "map": "3109-0",
            "segments": {
                "base-0": [
                    [10, 13, SegmentFlags.START],
                    [10, 11, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [10, 13, SegmentFlags.NONE],
                    [10, 14, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [10, 13, SegmentFlags.NONE],
                    [10, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "castle-of-dwarves-infirmary-0": {
            "flags": PathFlags.STEPS,
            "map": "3112-0",
            "segments": {
                "base-0": [
                    [9, 7, SegmentFlags.START],
                    [9, 5, SegmentFlags.NONE],
                    [5, 5, SegmentFlags.END]
                ]
            }
        },
        "castle-of-dwarves-left-tower-2f-0": {
            "flags": PathFlags.STEPS,
            "map": "3111-0",
            "segments": {
                "base-0": [
                    [16, 12, SegmentFlags.START],
                    [16, 3, SegmentFlags.END]
                ]
            }
        },
        "castle-of-dwarves-right-tower-2f-0": {
            "flags": PathFlags.STEPS,
            "map": "310E-0",
            "segments": {
                "base-0": [
                    [1, 13, SegmentFlags.START],
                    [1, 9, SegmentFlags.NONE],
                    [4, 9, SegmentFlags.NONE],
                    [4, 6, SegmentFlags.NONE],
                    [13, 6, SegmentFlags.NONE],
                    [13, 4, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [3, 9, SegmentFlags.NONE],
                    [3, 8, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [4, 8, SegmentFlags.NONE],
                ],
                "optional-2-0": [
                    [4, 9, SegmentFlags.NONE],
                    [5, 9, SegmentFlags.ANNOTATE],
                    [5, 6, SegmentFlags.NONE]
                ],
                "optional-3-0": [
                    [4, 9, SegmentFlags.NONE],
                    [6, 9, SegmentFlags.ANNOTATE],
                    [6, 6, SegmentFlags.NONE]
                ],
                "optional-4-0": [
                    [4, 9, SegmentFlags.NONE],
                    [7, 9, SegmentFlags.ANNOTATE],
                    [7, 6, SegmentFlags.NONE]
                ],
                "optional-5-0": [
                    [3, 9, SegmentFlags.NONE],
                    [3, 7, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [7, 7, SegmentFlags.NONE],
                    [7, 6, SegmentFlags.NONE]
                ],
                "optional-6-0": [
                    [4, 9, SegmentFlags.NONE],
                    [9, 9, SegmentFlags.ANNOTATE],
                    [9, 6, SegmentFlags.NONE]
                ],
                "optional-7-0": [
                    [4, 9, SegmentFlags.NONE],
                    [10, 9, SegmentFlags.ANNOTATE],
                    [10, 6, SegmentFlags.NONE]
                ],
                "optional-8-0": [
                    [4, 9, SegmentFlags.NONE],
                    [11, 9, SegmentFlags.ANNOTATE],
                    [11, 6, SegmentFlags.NONE]
                ],
                "optional-9-0": [
                    [4, 9, SegmentFlags.NONE],
                    [13, 9, SegmentFlags.ANNOTATE],
                    [13, 6, SegmentFlags.NONE]
                ],
                "optional-10-0": [
                    [4, 9, SegmentFlags.NONE],
                    [11, 9, SegmentFlags.NONE],
                    [11, 7, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [13, 7, SegmentFlags.NONE],
                    [13, 6, SegmentFlags.NONE]
                ]
            },
        },
        "castle-of-dwarves-right-tower-2f-1": {
            "flags": PathFlags.STEPS,
            "map": "310E-0",
            "segments": {
                "base-0": [
                    [1, 13, SegmentFlags.START],
                    [1, 9, SegmentFlags.NONE],
                    [4, 9, SegmentFlags.NONE],
                    [4, 6, SegmentFlags.NONE],
                    [13, 6, SegmentFlags.NONE],
                    [13, 4, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [3, 9, SegmentFlags.NONE],
                    [3, 8, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [4, 8, SegmentFlags.NONE],
                ],
                "optional-2-0": [
                    [4, 9, SegmentFlags.NONE],
                    [5, 9, SegmentFlags.ANNOTATE],
                    [5, 6, SegmentFlags.NONE]
                ],
                "optional-3-0": [
                    [4, 9, SegmentFlags.NONE],
                    [6, 9, SegmentFlags.ANNOTATE],
                    [6, 6, SegmentFlags.NONE]
                ],
                "optional-4-0": [
                    [4, 9, SegmentFlags.NONE],
                    [7, 9, SegmentFlags.ANNOTATE],
                    [7, 6, SegmentFlags.NONE]
                ],
                "optional-5-0": [
                    [3, 9, SegmentFlags.NONE],
                    [3, 7, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [7, 7, SegmentFlags.NONE],
                    [7, 6, SegmentFlags.NONE]
                ],
                "optional-6-0": [
                    [4, 9, SegmentFlags.NONE],
                    [9, 9, SegmentFlags.ANNOTATE],
                    [9, 6, SegmentFlags.NONE]
                ],
                "optional-7-0": [
                    [4, 9, SegmentFlags.NONE],
                    [10, 9, SegmentFlags.ANNOTATE],
                    [10, 6, SegmentFlags.NONE]
                ],
                "optional-8-0": [
                    [4, 9, SegmentFlags.NONE],
                    [11, 9, SegmentFlags.ANNOTATE],
                    [11, 6, SegmentFlags.NONE]
                ],
                "optional-9-0": [
                    [4, 9, SegmentFlags.NONE],
                    [13, 9, SegmentFlags.ANNOTATE],
                    [13, 6, SegmentFlags.NONE]
                ],
                "optional-10-0": [
                    [4, 9, SegmentFlags.NONE],
                    [11, 9, SegmentFlags.NONE],
                    [11, 7, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [13, 7, SegmentFlags.NONE],
                    [13, 6, SegmentFlags.NONE]
                ]
            },
        },
        "castle-of-dwarves-right-tower-2f-2": {
            "flags": PathFlags.STEPS,
            "map": "310E-0",
            "segments": {
                "base-0": [
                    [13, 4, SegmentFlags.START],
                    [13, 6, SegmentFlags.NONE],
                    [10, 6, SegmentFlags.END],
                    [1, 6, SegmentFlags.NONE],
                    [1, 4, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [2, 6, SegmentFlags.NONE],
                    [2, 5, SegmentFlags.ANNOTATE],
                    [1, 5, SegmentFlags.NONE]
                ]
            }
        },
        "castle-of-dwarves-right-tower-2f-3": {
            "flags": PathFlags.STEPS,
            "map": "310E-0",
            "segments": {
                "base-0": [
                    [13, 4, SegmentFlags.START],
                    [13, 6, SegmentFlags.NONE],
                    [10, 6, SegmentFlags.END],
                    [1, 6, SegmentFlags.NONE],
                    [1, 4, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [2, 6, SegmentFlags.NONE],
                    [2, 5, SegmentFlags.ANNOTATE],
                    [1, 5, SegmentFlags.NONE]
                ]
            }
        },
        "castle-of-dwarves-right-tower-3f-0": {
            "flags": PathFlags.STEPS,
            "map": "3110-0",
            "segments": {
                "base-0": [
                    [10, 10, SegmentFlags.START],
                    [10, 6, SegmentFlags.NONE],
                    [9, 6, SegmentFlags.NONE],
                    [9, 4, SegmentFlags.NONE],
                    [6, 4, SegmentFlags.END],
                    [6, 5, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [10, 6, SegmentFlags.NONE],
                    [10, 5, SegmentFlags.ANNOTATE],
                    [9, 5, SegmentFlags.NONE]
                ]
            }
        },
        "castle-of-dwarves-right-tower-3f-1": {
            "flags": PathFlags.STEPS,
            "map": "3110-0",
            "segments": {
                "base-0": [
                    [10, 10, SegmentFlags.START],
                    [10, 6, SegmentFlags.NONE],
                    [9, 6, SegmentFlags.NONE],
                    [9, 4, SegmentFlags.NONE],
                    [6, 4, SegmentFlags.END],
                    [6, 5, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [10, 6, SegmentFlags.NONE],
                    [10, 5, SegmentFlags.ANNOTATE],
                    [9, 5, SegmentFlags.NONE]
                ]
            }
        },
        "castle-of-dwarves-right-tower-3f-2": {
            "flags": PathFlags.STEPS,
            "map": "3110-0",
            "segments": {
                "base-0": [
                    [6, 5, SegmentFlags.START],
                    [6, 8, SegmentFlags.NONE],
                    [8, 8, SegmentFlags.NONE],
                    [10, 8, SegmentFlags.NONE],
                    [10, 10, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [6, 6, SegmentFlags.NONE],
                    [8, 6, SegmentFlags.ANNOTATE],
                    [8, 8, SegmentFlags.NONE]
                ]
            }
        },
        "castle-of-dwarves-right-tower-3f-3": {
            "flags": PathFlags.STEPS,
            "map": "3110-0",
            "segments": {
                "base-0": [
                    [6, 5, SegmentFlags.START],
                    [6, 8, SegmentFlags.NONE],
                    [8, 8, SegmentFlags.NONE],
                    [10, 8, SegmentFlags.NONE],
                    [10, 10, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [6, 6, SegmentFlags.NONE],
                    [8, 6, SegmentFlags.ANNOTATE],
                    [8, 8, SegmentFlags.NONE]
                ]
            }
        },
        "castle-of-dwarves-4f-0": {
            "flags": PathFlags.STEPS,
            "map": "311B-0",
            "segments": {
                "base-0": [
                    [24, 21, SegmentFlags.START],
                    [24, 23, SegmentFlags.END]
                ]
            }
        },
        "castle-of-dwarves-4f-1": {
            "flags": PathFlags.STEPS,
            "map": "311B-0",
            "segments": {
                "base-0": [
                    [24, 23, SegmentFlags.START],
                    [24, 21, SegmentFlags.END]
                ]
            }
        },
        "castle-of-dwarves-5f-0": {
            "flags": PathFlags.STEPS,
            "map": "3119-0",
            "segments": {
                "base-0": [
                    [6, 7, SegmentFlags.START],
                    [6, 4, SegmentFlags.RETURN],
                    [6, 7, SegmentFlags.END]
                ]
            }
        },
        "castle-of-dwarves-5f-1": {
            "flags": PathFlags.STEPS,
            "map": "3119-0",
            "segments": {
                "base-0": [
                    [6, 7, SegmentFlags.START],
                    [6, 4, SegmentFlags.END],
                    [4, 4, SegmentFlags.NONE],
                    [4, 8, SegmentFlags.NONE],
                    [6, 8, SegmentFlags.NONE],
                    [6, 10, SegmentFlags.RETURN],
                    [6, 7, SegmentFlags.END]
                ]
            }
        },
        "cave-eblana-b1f-0": {
            "flags": PathFlags.STEPS,
            "map": "30C7-0",
            "segments": {
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
                    [3, 30, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [3, 28, SegmentFlags.NONE],
                    [2, 28, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "cave-eblana-b2f-0": {
            "flags": PathFlags.STEPS,
            "map": "30C8-0",
            "segments": {
                "base-0": [
                    [27, 3, SegmentFlags.START],
                    [27, 9, SegmentFlags.NONE],
                    [25, 9, SegmentFlags.NONE],
                    [25, 10, SegmentFlags.NONE],
                    [17, 10, SegmentFlags.NONE],
                    [17, 7, SegmentFlags.END]
                ]
            }
        },
        "cave-eblana-b2f-1": {
            "flags": PathFlags.STEPS,
            "map": "30C8-0",
            "segments": {
                "base-0": [
                    [17, 7, SegmentFlags.START],
                    [17, 13, SegmentFlags.NONE],
                    [13, 13, SegmentFlags.NONE],
                    [13, 9, SegmentFlags.NONE],
                    [9, 9, SegmentFlags.NONE],
                    [9, 3, SegmentFlags.END]
                ]
            }
        },
        "cave-eblana-b2f-weapons-armors-0": {
            "flags": PathFlags.STEPS,
            "map": "30CC-0",
            "segments": {
                "base-0": [
                    [9, 11, SegmentFlags.START],
                    [9, 5, SegmentFlags.END],
                    [5, 5, SegmentFlags.RETURN],
                    [9, 5, SegmentFlags.NONE],
                    [9, 14, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [8, 5, SegmentFlags.NONE],
                    [8, 6, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL | SegmentFlags.END],
                    [9, 6, SegmentFlags.NONE]
                ],
                "optional-2-0": [
                    [7, 5, SegmentFlags.NONE],
                    [7, 6, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [8, 6, SegmentFlags.END],
                    [9, 6, SegmentFlags.NONE]
                ],
                "extra-2-0": [
                    [9, 9, SegmentFlags.NONE],
                    [8, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "cave-magnes-b1f-0": {
            "flags": PathFlags.STEPS,
            "map": "308C-0",
            "segments": {
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
                    [6, 19, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [5, 8, SegmentFlags.NONE],
                    [5, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [6, 18, SegmentFlags.NONE],
                    [5, 18, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "cave-magnes-b2f-0": {
            "flags": PathFlags.STEPS,
            "map": "308D-0",
            "segments": {
                "base-0": [
                    [27, 26, SegmentFlags.START],
                    [27, 27, SegmentFlags.NONE],
                    [18, 27, SegmentFlags.NONE],
                    [18, 18, SegmentFlags.NONE],
                    [13, 18, SegmentFlags.NONE],
                    [13, 9, SegmentFlags.NONE],
                    [5, 9, SegmentFlags.NONE],
                    [5, 10, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [27, 27, SegmentFlags.NONE],
                    [27, 26, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [5, 9, SegmentFlags.NONE],
                    [5, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "cave-magnes-b3f-0": {
            "flags": PathFlags.STEPS,
            "map": "308F-0",
            "segments": {
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
                    [8, 5, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [29, 20, SegmentFlags.NONE],
                    [30, 20, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [22, 12, SegmentFlags.NONE],
                    [23, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "cave-magnes-b3f-1": {
            "flags": PathFlags.STEPS,
            "map": "308F-0",
            "segments": {
                "base-0": [
                    [27, 6, SegmentFlags.START],
                    [27, 9, SegmentFlags.NONE],
                    [22, 9, SegmentFlags.NONE],
                ],
                "alternate-0": [
                    [22, 9, SegmentFlags.NONE],
                    [21, 9, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [27, 7, SegmentFlags.NONE],
                    [27, 6, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [27, 9, SegmentFlags.NONE],
                    [28, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "cave-magnes-b3f-2": {
            "flags": PathFlags.STEPS,
            "map": "308F-0",
            "segments": {
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
                    [8, 5, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [29, 20, SegmentFlags.NONE],
                    [30, 20, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [22, 12, SegmentFlags.NONE],
                    [23, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "cave-magnes-b3f-passage-0": {
            "flags": PathFlags.STEPS,
            "map": "3091-0",
            "segments": {
                "base-0": [
                    [14, 13, SegmentFlags.START],
                    [14, 12, SegmentFlags.NONE],
                    [5, 12, SegmentFlags.NONE],
                    [5, 14, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [5, 13, SegmentFlags.NONE],
                    [6, 13, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "cave-magnes-b3f-save-room-0": {
            "flags": PathFlags.STEPS,
            "map": "3092-0",
            "segments": {
                "base-0": [
                    [6, 12, SegmentFlags.START],
                    [6, 13, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [6, 12, SegmentFlags.NONE],
                    [6, 11, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "cave-magnes-b4f-0": {
            "flags": PathFlags.STEPS,
            "map": "3093-0",
            "segments": {
                "base-0": [
                    [22, 27, SegmentFlags.START],
                    [22, 28, SegmentFlags.NONE],
                    [20, 28, SegmentFlags.NONE],
                    [20, 27, SegmentFlags.NONE],
                    [19, 27, SegmentFlags.NONE],
                    [19, 25, SegmentFlags.NONE],
                    [13, 25, SegmentFlags.NONE],
                    [13, 7, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [22, 28, SegmentFlags.NONE],
                    [22, 27, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [13, 8, SegmentFlags.NONE],
                    [14, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "cave-magnes-b4f-1": {
            "flags": PathFlags.STEPS,
            "map": "3093-0",
            "segments": {
                "base-0": [
                    [22, 27, SegmentFlags.START],
                    [22, 28, SegmentFlags.NONE],
                    [20, 28, SegmentFlags.NONE],
                    [20, 27, SegmentFlags.NONE],
                    [19, 27, SegmentFlags.NONE],
                    [19, 25, SegmentFlags.NONE],
                    [13, 25, SegmentFlags.NONE],
                    [13, 15, SegmentFlags.NONE]
                ],
                "alternate-0": [
                    [13, 15, SegmentFlags.NONE],
                    [24, 15, SegmentFlags.NONE],
                    [24, 16, SegmentFlags.NONE],
                    [27, 16, SegmentFlags.NONE],
                    [27, 15, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [22, 28, SegmentFlags.NONE],
                    [22, 27, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [27, 16, SegmentFlags.NONE],
                    [28, 16, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "cave-magnes-b4f-2": {
            "flags": PathFlags.STEPS,
            "map": "3093-0",
            "segments": {
                "base-0": [
                    [27, 15, SegmentFlags.START],
                    [27, 16, SegmentFlags.NONE],
                    [24, 16, SegmentFlags.NONE],
                    [24, 15, SegmentFlags.NONE],
                    [13, 15, SegmentFlags.NONE],
                    [13, 7, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [13, 8, SegmentFlags.NONE],
                    [14, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "cave-magnes-b4f-save-room-0": {
            "flags": PathFlags.STEPS,
            "map": "30A1-0",
            "segments": {
                "base-0": [
                    [6, 12, SegmentFlags.START],
                    [6, 13, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [6, 12, SegmentFlags.NONE],
                    [6, 11, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "cave-magnes-crystal-room-0": {
            "flags": PathFlags.NONE,
            "map": "3094-0",
            "segments": {
                "base-0": [
                    [11, 25, SegmentFlags.START],
                    [11, 12, SegmentFlags.END]
                ]
            }
        },
        "cave-magnes-crystal-room-1": {
            "flags": PathFlags.NONE,
            "map": "3094-1",
            "segments": {
                "base-0": [
                    [11, 12, SegmentFlags.START],
                    [11, 9, SegmentFlags.RETURN],
                    [11, 26, SegmentFlags.END]
                ]
            }
        },
        "chocobos-forest-mt-ordeals-0": {
            "flags": PathFlags.YELLOW_CHOCOBO,
            "map": "30D1-0",
            "segments": {}
        },
        "chocobos-village-0": {
            "flags": PathFlags.BLACK_CHOCOBO,
            "map": "3021-0",
            "segments": {
                "base-0": [
                    [8, 30, SegmentFlags.START],
                    [8, 28, SegmentFlags.NONE],
                    [9, 28, SegmentFlags.NONE],
                    [9, 27, SegmentFlags.NONE],
                    [10, 27, SegmentFlags.NONE],
                    [10, 26, SegmentFlags.END]
                ]
            }
        },
        "chocobos-village-1": {
            "flags": PathFlags.BLACK_CHOCOBO | PathFlags.YELLOW_CHOCOBO,
            "map": "3021-0",
            "segments": {
                "base-0": [
                    [8, 30, SegmentFlags.START],
                    [8, 28, SegmentFlags.NONE],
                    [9, 28, SegmentFlags.NONE],
                    [9, 27, SegmentFlags.NONE],
                    [10, 27, SegmentFlags.NONE],
                    [10, 26, SegmentFlags.END]
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
                "optional-1-0": [
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
        "fabul-0": {
            "flags": PathFlags.NONE,
            "map": "3026-0",
            "segments": {
                "base-0": [
                    [15, 29, SegmentFlags.START],
                    [15, 14, SegmentFlags.END]
                ]
            }
        },
        "fabul-1": {
            "flags": PathFlags.NONE,
            "map": "3026-0",
            "segments": {
                "base-0": [
                    [17, 8, SegmentFlags.START],
                    [17, 11, SegmentFlags.NONE],
                    [15, 11, SegmentFlags.NONE],
                    [15, 10, SegmentFlags.END]
                ]
            }
        },
        "fabul-2": {
            "flags": PathFlags.NONE,
            "map": "3026-0",
            "segments": {
                "base-0": [
                    [15, 15, SegmentFlags.START],
                    [15, 31, SegmentFlags.END]
                ]
            }
        },
        "fabul-crystal-room-0": {
            "flags": PathFlags.NONE,
            "map": "304A-0",
            "segments": {
                "base-0": [
                    [12, 15, SegmentFlags.START],
                    [11, 15, SegmentFlags.NONE],
                    [11, 26, SegmentFlags.END]
                ]
            }
        },
        "fabul-inn-0": {
            "flags": PathFlags.STEPS,
            "map": "304C-0",
            "segments": {
                "base-0": [
                    [20, 7, SegmentFlags.START],
                    [20, 5, SegmentFlags.NONE],
                    [17, 5, SegmentFlags.END]
                ],
                "optional-2-0": [
                    [20, 7, SegmentFlags.NONE],
                    [18, 7, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [18, 5, SegmentFlags.NONE]
                ]
            }
        },
        "fabul-kings-room-0": {
            "flags": PathFlags.STEPS,
            "map": "3049-0",
            "segments": {
                "base-0": [
                    [8, 13, SegmentFlags.START],
                    [8, 12, SegmentFlags.END]
                ]
            }
        },
        "fabul-kings-room-1": {
            "flags": PathFlags.STEPS,
            "map": "3049-0",
            "segments": {
                "base-0": [
                    [4, 3, SegmentFlags.START],
                    [4, 7, SegmentFlags.NONE],
                    [8, 7, SegmentFlags.NONE],
                    [8, 14, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [4, 7, SegmentFlags.NONE],
                    [4, 8, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [8, 8, SegmentFlags.NONE]
                ],
                "optional-6-0": [
                    [4, 7, SegmentFlags.NONE],
                    [4, 11, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [8, 11, SegmentFlags.NONE]
                ]
            }
        },
        "fabul-1f-0": {
            "flags": PathFlags.STEPS,
            "map": "3047-0",
            "segments": {
                "base-0": [
                    [11, 11, SegmentFlags.START],
                    [11, 3, SegmentFlags.END]
                ]
            }
        },
        "fabul-1f-1": {
            "flags": PathFlags.STEPS,
            "map": "3047-0",
            "segments": {
                "base-0": [
                    [11, 4, SegmentFlags.START],
                    [11, 11, SegmentFlags.NONE],
                    [6, 11, SegmentFlags.NONE],
                    [6, 10, SegmentFlags.NONE],
                    [5, 10, SegmentFlags.NONE],
                    [5, 7, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [6, 11, SegmentFlags.NONE],
                    [5, 11, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [5, 10, SegmentFlags.NONE]
                ]
            }
        },
        "fabul-1f-2": {
            "flags": PathFlags.STEPS,
            "map": "3047-0",
            "segments": {
                "base-0": [
                    [11, 4, SegmentFlags.START],
                    [11, 15, SegmentFlags.END]
                ]
            }
        },
        "fabul-2f-0": {
            "flags": PathFlags.STEPS,
            "map": "3048-0",
            "segments": {
                "base-0": [
                    [4, 8, SegmentFlags.START],
                    [4, 0, SegmentFlags.END]
                ]
            }
        },
        "fabul-2f-1": {
            "flags": PathFlags.STEPS,
            "map": "3048-0",
            "segments": {
                "base-0": [
                    [4, 1, SegmentFlags.START],
                    [4, 9, SegmentFlags.END]
                ]
            }
        },
        "fabul-2f-2": {
            "flags": PathFlags.STEPS,
            "map": "3048-0",
            "segments": {
                "base-0": [
                    [4, 13, SegmentFlags.START],
                    [6, 13, SegmentFlags.NONE],
                    [6, 6, SegmentFlags.NONE],
                    [4, 6, SegmentFlags.NONE],
                    [4, 9, SegmentFlags.END]
                ]
            }
        },
        "fabul-right-tower-1f-0": {
            "flags": PathFlags.STEPS,
            "map": "304D-0",
            "segments": {
                "base-0": [
                    [1, 4, SegmentFlags.START],
                    [1, 6, SegmentFlags.NONE],
                    [2, 6, SegmentFlags.NONE],
                    [2, 10, SegmentFlags.END]
                ]
            }
        },
        "fabul-right-tower-2f-0": {
            "flags": PathFlags.STEPS,
            "map": "304E-0",
            "segments": {
                "base-0": [
                    [1, 4, SegmentFlags.START],
                    [1, 6, SegmentFlags.END]
                ]
            }
        },
        "fabul-right-tower-3f-0": {
            "flags": PathFlags.STEPS,
            "map": "304F-0",
            "segments": {
                "base-0": [
                    [5, 4, SegmentFlags.START],
                    [5, 5, SegmentFlags.NONE],
                    [1, 5, SegmentFlags.NONE],
                    [1, 6, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [5, 4, SegmentFlags.NONE],
                    [3, 4, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [3, 5, SegmentFlags.NONE]
                ],
                "extra-2-0": [
                    [1, 5, SegmentFlags.NONE],
                    [1, 4, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "giant-of-babil-chest-0": {
            "flags": PathFlags.STEPS,
            "map": "30B7-0",
            "segments": {
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
                    [18, 9, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [23, 16, SegmentFlags.NONE],
                    [22, 16, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ],
                "extra-2-0": [
                    [19, 14, SegmentFlags.NONE],
                    [18, 14, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "giant-of-babil-cpu-0": {
            "flags": PathFlags.STEPS,
            "map": "30BD-0",
            "segments": {
                "base-0": [
                    [8, 18, SegmentFlags.START],
                    [9, 18, SegmentFlags.NONE],
                    [9, 13, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [9, 16, SegmentFlags.NONE],
                    [9, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [9, 18, SegmentFlags.NONE],
                    [10, 18, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "giant-of-babil-lung-0": {
            "description": "Giant of Bab-il Lung",
            "flags": PathFlags.STEPS,
            "map": "30BC-0",
            "segments": {
                "base-0": [
                    [15, 24, SegmentFlags.START],
                    [15, 15, SegmentFlags.END]
                ],
                "base-1": [
                    [15, 15, SegmentFlags.NONE],
                    [15, 4, SegmentFlags.END]
                ],
                "extra-1-1": [
                    [15, 5, SegmentFlags.NONE],
                    [16, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [15, 22, SegmentFlags.NONE],
                    [16, 22, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-1": [
                    [15, 8, SegmentFlags.NONE],
                    [15, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "giant-of-babil-mouth-0": {
            "flags": PathFlags.STEPS,
            "map": "30B5-0",
            "segments": {
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
                    [9, 7, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [9, 16, SegmentFlags.NONE],
                    [10, 16, SegmentFlags.ANNOTATE],
                    [10, 15, SegmentFlags.NONE]
                ],
                "extra-2-0": [
                    [9, 5, SegmentFlags.NONE],
                    [8, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "giant-of-babil-neck-0": {
            "flags": PathFlags.STEPS,
            "map": "30B6-0",
            "segments": {
                "base-0": [
                    [7, 4, SegmentFlags.START],
                    [7, 7, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [7, 6, SegmentFlags.NONE],
                    [8, 6, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "giant-of-babil-passage-0": {
            "description": "Giant of Bab-il Passage",
            "flags": PathFlags.STEPS,
            "map": "30BA-0",
            "segments": {
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
                    [21, 15, SegmentFlags.NONE],
                    [21, 4, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [21, 8, SegmentFlags.NONE],
                    [22, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [21, 5, SegmentFlags.NONE],
                    [22, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "giant-of-babil-passage-1": {
            "description": "Giant of Bab-il Passage",
            "flags": PathFlags.STEPS,
            "map": "30BA-0",
            "segments": {
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
                    [21, 4, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [21, 8, SegmentFlags.NONE],
                    [22, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [21, 5, SegmentFlags.NONE],
                    [22, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "giant-of-babil-stomach-0": {
            "flags": PathFlags.STEPS,
            "map": "30B9-0",
            "segments": {
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
                    [3, 4, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [23, 14, SegmentFlags.NONE],
                    [23, 13, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [3, 5, SegmentFlags.NONE],
                    [4, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "grotto-adamant-0": {
            "flags": PathFlags.STEPS,
            "map": "30A0-0",
            "segments": {
                "base-0": [
                    [7, 20, SegmentFlags.START],
                    [7, 13, SegmentFlags.RETURN],
                    [7, 21, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [7, 19, SegmentFlags.NONE],
                    [8, 19, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "hummingway-cave-0-0": {
            "flags": PathFlags.STEPS | PathFlags.HUMMINGWAY,
            "map": "3165-0",
            "segments": {
                "base-0": [
                    [10, 16, SegmentFlags.START],
                    [10, 11, SegmentFlags.NONE],
                    [12, 11, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [10, 16, SegmentFlags.NONE],
                    [11, 16, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "hummingway-cave-0-1": {
            "flags": PathFlags.STEPS | PathFlags.HUMMINGWAY,
            "map": "3165-0",
            "segments": {
                "base-0": [
                    [10, 16, SegmentFlags.START],
                    [10, 11, SegmentFlags.NONE],
                    [12, 11, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [10, 16, SegmentFlags.NONE],
                    [11, 16, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
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
        "kaipo-3": {
            "flags": PathFlags.NONE,
            "map": "3002-0",
            "segments": {
                "base-0": [
                    [15, 30, SegmentFlags.START],
                    [15, 25, SegmentFlags.NONE],
                    [20, 25, SegmentFlags.NONE],
                    [20, 19, SegmentFlags.NONE],
                    [23, 19, SegmentFlags.NONE],
                    [23, 15, SegmentFlags.NONE],
                    [28, 15, SegmentFlags.NONE],
                    [28, 13, SegmentFlags.END]
                ]
            }
        },
        "kaipo-4": {
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
                    [14, 30, SegmentFlags.NONE],
                    [14, 31, SegmentFlags.END]
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
        "kaipo-house-1": {
            "flags": PathFlags.NONE,
            "map": "3012-0",
            "segments": {
                "base-0": [
                    [4, 15, SegmentFlags.START],
                    [4, 5, SegmentFlags.NONE],
                    [6, 5, SegmentFlags.NONE],
                    [6, 3, SegmentFlags.END]
                ],
                "base-1": [
                    [4, 5, SegmentFlags.START],
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
        "kokkol-the-smiths-0": {
            "flags": PathFlags.NONE,
            "map": "3100-0",
            "segments": {
                "base-0": [
                    [6, 11, SegmentFlags.START],
                    [6, 6, SegmentFlags.END]
                ]
            }
        },
        "kokkol-the-smiths-1": {
            "flags": PathFlags.NONE,
            "map": "3100-0",
            "segments": {
                "base-0": [
                    [6, 6, SegmentFlags.START],
                    [6, 12, SegmentFlags.END]
                ]
            }
        },
        "kokkol-the-smiths-1f-0": {
            "flags": PathFlags.NONE,
            "map": "3102-0",
            "segments": {
                "base-0": [
                    [7, 14, SegmentFlags.START],
                    [11, 14, SegmentFlags.NONE],
                    [11, 11, SegmentFlags.NONE],
                    [14, 11, SegmentFlags.NONE],
                    [14, 5, SegmentFlags.END]
                ]
            }
        },
        "kokkol-the-smiths-1f-1": {
            "flags": PathFlags.NONE,
            "map": "3102-1",
            "segments": {
                "base-0": [
                    [14, 5, SegmentFlags.START],
                    [14, 10, SegmentFlags.NONE],
                    [11, 10, SegmentFlags.NONE],
                    [11, 9, SegmentFlags.NONE],
                    [7, 9, SegmentFlags.RETURN],
                    [11, 9, SegmentFlags.NONE],
                    [11, 14, SegmentFlags.NONE],
                    [7, 14, SegmentFlags.NONE],
                    [7, 17, SegmentFlags.END]
                ]
            }
        },
        "kokkol-the-smiths-2f-0": {
            "flags": PathFlags.NONE,
            "map": "3103-0",
            "segments": {
                "base-0": [
                    [9, 4, SegmentFlags.START],
                    [2, 4, SegmentFlags.NONE],
                    [2, 5, SegmentFlags.RETURN],
                    [2, 4, SegmentFlags.NONE],
                    [9, 4, SegmentFlags.END]
                ]
            }
        },
        "land-of-monsters-b1f-0": {
            "flags": PathFlags.STEPS,
            "map": "3136-0",
            "segments": {
                "base-0": [
                    [17, 10, SegmentFlags.START],
                    [17, 22, SegmentFlags.NONE],
                    [11, 22, SegmentFlags.NONE],
                    [11, 21, SegmentFlags.NONE],
                    [10, 21, SegmentFlags.NONE],
                    [10, 14, SegmentFlags.NONE],
                    [3, 14, SegmentFlags.NONE],
                    [3, 17, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [17, 12, SegmentFlags.NONE],
                    [17, 11, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [3, 15, SegmentFlags.NONE],
                    [4, 15, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "land-of-monsters-b2f-0": {
            "flags": PathFlags.STEPS,
            "map": "3137-0",
            "segments": {
                "base-0": [
                    [4, 19, SegmentFlags.START],
                    [4, 23, SegmentFlags.NONE],
                    [8, 23, SegmentFlags.NONE],
                    [8, 22, SegmentFlags.NONE],
                    [9, 22, SegmentFlags.NONE],
                    [9, 20, SegmentFlags.NONE],
                    [13, 20, SegmentFlags.NONE],
                    [13, 19, SegmentFlags.NONE],
                    [14, 19, SegmentFlags.NONE],
                    [14, 11, SegmentFlags.NONE],
                    [20, 11, SegmentFlags.NONE],
                    [20, 12, SegmentFlags.NONE],
                    [24, 12, SegmentFlags.NONE],
                    [24, 13, SegmentFlags.NONE],
                    [27, 13, SegmentFlags.NONE],
                    [27, 14, SegmentFlags.NONE],
                    [28, 14, SegmentFlags.NONE],
                    [28, 16, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [18, 11, SegmentFlags.NONE],
                    [18, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "land-of-monsters-b3f-0": {
            "flags": PathFlags.STEPS,
            "map": "3138-0",
            "segments": {
                "base-0": [
                    [11, 2, SegmentFlags.START],
                    [11, 6, SegmentFlags.NONE],
                    [4, 6, SegmentFlags.NONE],
                    [4, 14, SegmentFlags.NONE],
                    [11, 14, SegmentFlags.NONE],
                    [11, 22, SegmentFlags.NONE],
                    [18, 22, SegmentFlags.NONE],
                    [18, 14, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [18, 15, SegmentFlags.NONE],
                    [19, 15, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "land-of-monsters-b3f-1": {
            "flags": PathFlags.STEPS,
            "map": "3138-0",
            "segments": {
                "base-0": [
                    [11, 2, SegmentFlags.START],
                    [11, 6, SegmentFlags.NONE],
                    [4, 6, SegmentFlags.NONE],
                    [4, 14, SegmentFlags.NONE]
                ],
                "alternate-0": [
                    [4, 14, SegmentFlags.NONE],
                    [0, 14, SegmentFlags.NONE],
                    [0, 26, SegmentFlags.NONE],
                    [29, 26, SegmentFlags.NONE],
                    [29, 22, SegmentFlags.NONE],
                    [18, 22, SegmentFlags.NONE],
                    [18, 14, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [27, 22, SegmentFlags.NONE],
                    [28, 22, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ],
                "extra-2-0": [
                    [18, 15, SegmentFlags.NONE],
                    [19, 15, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "land-of-monsters-b3f-2": {
            "flags": PathFlags.STEPS,
            "map": "3138-0",
            "segments": {
                "base-0": [
                    [11, 2, SegmentFlags.START],
                    [11, 6, SegmentFlags.NONE],
                    [4, 6, SegmentFlags.NONE],
                    [4, 14, SegmentFlags.NONE]
                ],
                "alternate-0": [
                    [4, 14, SegmentFlags.NONE],
                    [0, 14, SegmentFlags.NONE],
                    [0, 26, SegmentFlags.NONE],
                    [29, 26, SegmentFlags.NONE],
                    [29, 14, SegmentFlags.NONE],
                    [18, 14, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [27, 14, SegmentFlags.NONE],
                    [28, 14, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ],
                "extra-2-0": [
                    [19, 14, SegmentFlags.NONE],
                    [19, 13, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "land-of-monsters-b4f-0": {
            "flags": PathFlags.STEPS,
            "map": "313A-0",
            "segments": {
                "base-0": [
                    [12, 14, SegmentFlags.START],
                    [9, 14, SegmentFlags.NONE],
                    [9, 11, SegmentFlags.NONE],
                    [4, 11, SegmentFlags.NONE],
                    [4, 5, SegmentFlags.NONE],
                    [6, 5, SegmentFlags.NONE],
                    [6, 4, SegmentFlags.NONE],
                    [7, 4, SegmentFlags.NONE],
                    [7, 3, SegmentFlags.NONE],
                    [14, 3, SegmentFlags.NONE],
                    [14, 4, SegmentFlags.END]
                ]
            }
        },
        "land-of-monsters-b4f-1": {
            "flags": PathFlags.STEPS,
            "map": "313A-0",
            "segments": {
                "base-0": [
                    [14, 4, SegmentFlags.START],
                    [14, 6, SegmentFlags.NONE],
                    [20, 6, SegmentFlags.NONE],
                    [20, 7, SegmentFlags.END]
                ]
            }
        },
        "lunar-core-b1-0": {
            "description": "Lunar Core B1",
            "flags": PathFlags.STEPS,
            "map": "316E-0",
            "segments": {
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
                    [17, 19, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [17, 21, SegmentFlags.NONE],
                    [17, 22, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-core-b1-1": {
            "description": "Lunar Core B1",
            "flags": PathFlags.STEPS,
            "map": "316E-0",
            "segments": {
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
                    [17, 19, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [17, 21, SegmentFlags.NONE],
                    [17, 22, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-core-b2-0": {
            "description": "Lunar Core B2",
            "flags": PathFlags.STEPS,
            "map": "316F-0",
            "segments": {
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
                    [22, 23, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [22, 22, SegmentFlags.NONE],
                    [23, 22, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-core-b3-0": {
            "description": "Lunar Core B3",
            "flags": PathFlags.STEPS,
            "map": "3170-0",
            "segments": {
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
                    [23, 24, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [23, 21, SegmentFlags.NONE],
                    [24, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-core-b3-1": {
            "description": "Lunar Core B3",
            "flags": PathFlags.STEPS,
            "map": "3170-0",
            "segments": {
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
                    [23, 24, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [23, 21, SegmentFlags.NONE],
                    [24, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-core-b4-0": {
            "description": "Lunar Core B4",
            "flags": PathFlags.STEPS,
            "map": "3171-0",
            "segments": {
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
                    [6, 20, SegmentFlags.END]
                ]
            }
        },
        "lunar-core-b5-0": {
            "flags": PathFlags.STEPS,
            "map": "3172-0",
            "segments": {
                "base-0": [
                    [15, 23, SegmentFlags.START],
                    [15, 15, SegmentFlags.END]
                ]
            }
        },
        "lunar-overworld-0": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [33, 36, 32, 32],
            "segments": {
                "base-0": [
                    [64, 64, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [64, 40, SegmentFlags.VEHICLE],
                    [33, 40, SegmentFlags.END | SegmentFlags.VEHICLE]
                ]
            }
        },
        "lunar-overworld-1": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [58, 57, 32, 32],
            "segments": {
                "base-0": [
                    [64, 64, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [85, 64, SegmentFlags.VEHICLE],
                    [85, 83, SegmentFlags.END | SegmentFlags.VEHICLE]
                ]
            }
        },
        "lunar-overworld-2-0": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [17, 23, 32, 32],
            "segments": {
                "base-0": [
                    [33, 40, SegmentFlags.START],
                    [33, 39, SegmentFlags.END]
                ]
            }
        },
        "lunar-overworld-2-1": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [17, 23, 32, 32],
            "segments": {
                "base-0": [
                    [33, 40, SegmentFlags.START],
                    [33, 39, SegmentFlags.END]
                ]
            }
        },
        "lunar-overworld-3-0": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [17, 23, 32, 32],
            "segments": {
                "base-0": [
                    [33, 39, SegmentFlags.START],
                    [33, 40, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [33, 40, SegmentFlags.NONE],
                    [34, 40, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-overworld-3-1": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [17, 23, 32, 32],
            "segments": {
                "base-0": [
                    [33, 39, SegmentFlags.START],
                    [33, 40, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [33, 40, SegmentFlags.NONE],
                    [34, 40, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-overworld-4-0": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [11, 13, 32, 32],
            "segments": {
                "base-0": [
                    [33, 40, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [21, 40, SegmentFlags.VEHICLE],
                    [21, 19, SegmentFlags.END | SegmentFlags.VEHICLE]
                ]
            }
        },
        "lunar-overworld-4-1": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [11, 13, 32, 32],
            "segments": {
                "base-0": [
                    [21, 19, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [21, 40, SegmentFlags.VEHICLE],
                    [33, 40, SegmentFlags.END | SegmentFlags.VEHICLE]
                ]
            }
        },
        "lunar-overworld-5-0": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [3, 4, 32, 32],
            "segments": {
                "base-0": [
                    [21, 19, SegmentFlags.START],
                    [21, 21, SegmentFlags.NONE],
                    [18, 21, SegmentFlags.NONE],
                    [18, 20, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [18, 21, SegmentFlags.NONE],
                    [17, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "lunar-overworld-5-1": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [3, 4, 32, 32],
            "segments": {
                "base-0": [
                    [21, 19, SegmentFlags.START],
                    [21, 21, SegmentFlags.NONE],
                    [18, 21, SegmentFlags.NONE],
                    [18, 20, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [18, 21, SegmentFlags.NONE],
                    [17, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "lunar-overworld-6-0": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [14, 3, 32, 32],
            "segments": {
                "base-0": [
                    [18, 15, SegmentFlags.START],
                    [23, 15, SegmentFlags.NONE],
                    [23, 14, SegmentFlags.NONE],
                    [33, 14, SegmentFlags.NONE],
                    [33, 16, SegmentFlags.NONE],
                    [37, 16, SegmentFlags.NONE],
                    [37, 25, SegmentFlags.NONE],
                    [41, 25, SegmentFlags.NONE],
                    [41, 24, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [41, 25, SegmentFlags.NONE],
                    [42, 25, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-overworld-6-1": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [14, 3, 32, 32],
            "segments": {
                "base-0": [
                    [18, 15, SegmentFlags.START],
                    [23, 15, SegmentFlags.NONE],
                    [23, 14, SegmentFlags.NONE],
                    [33, 14, SegmentFlags.NONE],
                    [33, 16, SegmentFlags.NONE],
                    [37, 16, SegmentFlags.NONE],
                    [37, 25, SegmentFlags.NONE],
                    [41, 25, SegmentFlags.NONE],
                    [41, 24, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [41, 25, SegmentFlags.NONE],
                    [42, 25, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-overworld-7-0": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [17, 11, 32, 32],
            "segments": {
                "base-0": [
                    [40, 29, SegmentFlags.START],
                    [37, 29, SegmentFlags.NONE],
                    [37, 30, SegmentFlags.NONE],
                    [33, 30, SegmentFlags.NONE],
                    [33, 28, SegmentFlags.NONE],
                    [28, 28, SegmentFlags.NONE],
                    [28, 25, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [28, 26, SegmentFlags.NONE],
                    [29, 26, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-overworld-7-1": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [17, 11, 32, 32],
            "segments": {
                "base-0": [
                    [40, 29, SegmentFlags.START],
                    [37, 29, SegmentFlags.NONE],
                    [37, 30, SegmentFlags.NONE],
                    [33, 30, SegmentFlags.NONE],
                    [33, 28, SegmentFlags.NONE],
                    [28, 28, SegmentFlags.NONE],
                    [28, 25, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [28, 26, SegmentFlags.NONE],
                    [29, 26, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-overworld-8-0": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [17, 11, 32, 32],
            "segments": {
                "base-0": [
                    [28, 25, SegmentFlags.START],
                    [28, 29, SegmentFlags.NONE],
                    [34, 29, SegmentFlags.NONE],
                    [34, 30, SegmentFlags.NONE],
                    [37, 30, SegmentFlags.NONE],
                    [37, 29, SegmentFlags.NONE],
                    [40, 29, SegmentFlags.NONE],
                    [40, 28, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [40, 29, SegmentFlags.NONE],
                    [41, 29, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-overworld-8-1": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [17, 11, 32, 32],
            "segments": {
                "base-0": [
                    [28, 25, SegmentFlags.START],
                    [28, 29, SegmentFlags.NONE],
                    [34, 29, SegmentFlags.NONE],
                    [34, 30, SegmentFlags.NONE],
                    [37, 30, SegmentFlags.NONE],
                    [37, 29, SegmentFlags.NONE],
                    [40, 29, SegmentFlags.NONE],
                    [40, 28, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [40, 29, SegmentFlags.NONE],
                    [41, 29, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-overworld-9-0": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [13, 3, 32, 32],
            "segments": {
                "base-0": [
                    [41, 25, SegmentFlags.START],
                    [37, 25, SegmentFlags.NONE],
                    [37, 16, SegmentFlags.NONE],
                    [33, 16, SegmentFlags.NONE],
                    [33, 14, SegmentFlags.NONE],
                    [22, 14, SegmentFlags.NONE],
                    [22, 15, SegmentFlags.NONE],
                    [18, 15, SegmentFlags.NONE],
                    [18, 14, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [22, 15, SegmentFlags.NONE],
                    [23, 15, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-overworld-9-1": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [13, 3, 32, 32],
            "segments": {
                "base-0": [
                    [41, 25, SegmentFlags.START],
                    [37, 25, SegmentFlags.NONE],
                    [37, 16, SegmentFlags.NONE],
                    [33, 16, SegmentFlags.NONE],
                    [33, 14, SegmentFlags.NONE],
                    [22, 14, SegmentFlags.NONE],
                    [22, 15, SegmentFlags.NONE],
                    [18, 15, SegmentFlags.NONE],
                    [18, 14, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [22, 15, SegmentFlags.NONE],
                    [23, 15, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-overworld-10-0": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [13, 3, 32, 32],
            "segments": {
                "base-0": [
                    [18, 21, SegmentFlags.START],
                    [21, 21, SegmentFlags.NONE],
                    [21, 19, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [21, 19, SegmentFlags.NONE],
                    [22, 19, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-overworld-10-1": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [13, 3, 32, 32],
            "segments": {
                "base-0": [
                    [18, 21, SegmentFlags.START],
                    [21, 21, SegmentFlags.NONE],
                    [21, 19, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [21, 19, SegmentFlags.NONE],
                    [22, 19, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-overworld-11-0": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [4, 13, 32, 32],
            "segments": {
                "base-0": [
                    [19, 39, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [21, 39, SegmentFlags.VEHICLE],
                    [21, 19, SegmentFlags.END | SegmentFlags.VEHICLE]
                ]
            }
        },
        "lunar-overworld-12-0": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [3, 4, 32, 32],
            "segments": {
                "base-0": [
                    [21, 19, SegmentFlags.START],
                    [21, 21, SegmentFlags.NONE],
                    [18, 21, SegmentFlags.NONE],
                    [18, 20, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [18, 21, SegmentFlags.NONE],
                    [17, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "lunar-overworld-13-0": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [14, 3, 32, 32],
            "segments": {
                "base-0": [
                    [18, 15, SegmentFlags.START],
                    [23, 15, SegmentFlags.NONE],
                    [23, 14, SegmentFlags.NONE],
                    [33, 14, SegmentFlags.NONE],
                    [33, 16, SegmentFlags.NONE],
                    [37, 16, SegmentFlags.NONE],
                    [37, 25, SegmentFlags.NONE],
                    [41, 25, SegmentFlags.NONE],
                    [41, 24, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [41, 25, SegmentFlags.NONE],
                    [42, 25, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-overworld-14-0": {
            "flags": PathFlags.STEPS,
            "map": "2000-0",
            "mapRange": [17, 11, 32, 32],
            "segments": {
                "base-0": [
                    [40, 29, SegmentFlags.START],
                    [37, 29, SegmentFlags.NONE],
                    [37, 30, SegmentFlags.NONE],
                    [33, 30, SegmentFlags.NONE],
                    [33, 28, SegmentFlags.NONE],
                    [28, 28, SegmentFlags.NONE],
                    [28, 25, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [28, 26, SegmentFlags.NONE],
                    [29, 26, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-path-east-0-0": {
            "flags": PathFlags.STEPS,
            "map": "3164-0",
            "segments": {
                "base-0": [
                    [21, 6, SegmentFlags.START],
                    [14, 6, SegmentFlags.NONE],
                    [14, 19, SegmentFlags.NONE],
                    [9, 19, SegmentFlags.NONE],
                    [9, 26, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [9, 25, SegmentFlags.NONE],
                    [10, 25, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-path-east-0-1": {
            "flags": PathFlags.STEPS,
            "map": "3164-0",
            "segments": {
                "base-0": [
                    [21, 6, SegmentFlags.START],
                    [14, 6, SegmentFlags.NONE],
                    [14, 19, SegmentFlags.NONE],
                    [9, 19, SegmentFlags.NONE],
                    [9, 26, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [9, 25, SegmentFlags.NONE],
                    [10, 25, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-path-east-1-0": {
            "flags": PathFlags.STEPS,
            "map": "3164-0",
            "segments": {
                "base-0": [
                    [9, 25, SegmentFlags.START],
                    [9, 18, SegmentFlags.NONE],
                    [14, 18, SegmentFlags.NONE],
                    [14, 6, SegmentFlags.NONE],
                    [21, 6, SegmentFlags.NONE],
                    [21, 5, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [21, 6, SegmentFlags.NONE],
                    [21, 7, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-path-east-1-1": {
            "flags": PathFlags.STEPS,
            "map": "3164-0",
            "segments": {
                "base-0": [
                    [9, 25, SegmentFlags.START],
                    [9, 18, SegmentFlags.NONE],
                    [14, 18, SegmentFlags.NONE],
                    [14, 6, SegmentFlags.NONE],
                    [21, 6, SegmentFlags.NONE],
                    [21, 5, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [21, 6, SegmentFlags.NONE],
                    [21, 7, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-path-east-2": {
            "flags": PathFlags.STEPS,
            "map": "3164-0",
            "segments": {
                "base-0": [
                    [21, 6, SegmentFlags.START],
                    [14, 6, SegmentFlags.NONE],
                    [14, 19, SegmentFlags.NONE],
                    [9, 19, SegmentFlags.NONE],
                    [9, 26, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [9, 25, SegmentFlags.NONE],
                    [10, 25, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-path-west-0-0": {
            "flags": PathFlags.STEPS,
            "map": "3163-0",
            "segments": {
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
                    [19, 4, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [19, 5, SegmentFlags.NONE],
                    [20, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-path-west-0-1": {
            "flags": PathFlags.STEPS,
            "map": "3163-0",
            "segments": {
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
                    [19, 4, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [19, 5, SegmentFlags.NONE],
                    [20, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-path-west-1-0": {
            "flags": PathFlags.STEPS,
            "map": "3163-0",
            "segments": {
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
                    [12, 31, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [12, 29, SegmentFlags.NONE],
                    [11, 29, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "lunar-path-west-1-1": {
            "flags": PathFlags.STEPS,
            "map": "3163-0",
            "segments": {
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
                    [12, 31, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [12, 29, SegmentFlags.NONE],
                    [11, 29, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "lunar-path-west-2": {
            "flags": PathFlags.STEPS,
            "map": "3163-0",
            "segments": {
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
                    [19, 4, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [19, 5, SegmentFlags.NONE],
                    [20, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-subterrane-b1-0": {
            "flags": PathFlags.STEPS,
            "map": "3167-0",
            "segments": {
                "base-0": [
                    [13, 13, SegmentFlags.START],
                    [13, 8, SegmentFlags.NONE],
                    [17, 8, SegmentFlags.NONE],
                    [17, 19, SegmentFlags.NONE],
                    [13, 19, SegmentFlags.NONE],
                    [13, 25, SegmentFlags.NONE],
                    [16, 25, SegmentFlags.NONE],
                    [16, 24, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [16, 25, SegmentFlags.NONE],
                    [17, 25, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-subterrane-b2-0": {
            "flags": PathFlags.STEPS,
            "map": "3168-0",
            "segments": {
                "base-0": [
                    [19, 25, SegmentFlags.START],
                    [19, 30, SegmentFlags.NONE],
                    [30, 30, SegmentFlags.NONE],
                    [31, 30, SegmentFlags.NONE],
                    [31, 4, SegmentFlags.NONE],
                    [23, 4, SegmentFlags.NONE],
                    [23, 5, SegmentFlags.NONE],
                    [15, 5, SegmentFlags.NONE],
                    [15, 4, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [19, 5, SegmentFlags.NONE],
                    [20, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ],
                "extra-2-0": [
                    [15, 5, SegmentFlags.NONE],
                    [14, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "lunar-subterrane-b3-0": {
            "flags": PathFlags.STEPS,
            "map": "3169-0",
            "segments": {
                "base-0": [
                    [15, 5, SegmentFlags.START],
                    [14, 5, SegmentFlags.NONE],
                    [14, 16, SegmentFlags.NONE],
                    [16, 16, SegmentFlags.NONE],
                    [16, 15, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [16, 16, SegmentFlags.NONE],
                    [16, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-subterrane-b4-0": {
            "flags": PathFlags.STEPS,
            "map": "316A-0",
            "segments": {
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
                    [25, 24, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [25, 26, SegmentFlags.NONE],
                    [24, 26, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "lunar-subterrane-b4-1": {
            "flags": PathFlags.STEPS,
            "map": "316A-0",
            "segments": {
                "base-0": [
                    [10, 21, SegmentFlags.START],
                    [10, 27, SegmentFlags.NONE],
                    [16, 27, SegmentFlags.NONE],
                    [16, 31, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [16, 27, SegmentFlags.NONE],
                    [16, 26, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-subterrane-b4-passage-0": {
            "flags": PathFlags.STEPS,
            "map": "3174-0",
            "segments": {
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
                    [6, 13, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [6, 12, SegmentFlags.NONE],
                    [5, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "lunar-subterrane-b5-0": {
            "flags": PathFlags.STEPS,
            "map": "316B-0",
            "segments": {
                "base-0": [
                    [16, 2, SegmentFlags.START],
                    [16, 14, SegmentFlags.NONE],
                    [11, 14, SegmentFlags.NONE],
                    [11, 13, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [11, 14, SegmentFlags.NONE],
                    [10, 14, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "lunar-subterrane-b5-1": {
            "flags": PathFlags.STEPS,
            "map": "316B-0",
            "segments": {
                "base-0": [
                    [22, 22, SegmentFlags.START],
                    [19, 22, SegmentFlags.NONE],
                    [19, 21, SegmentFlags.NONE],
                    [14, 21, SegmentFlags.NONE],
                    [14, 20, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [14, 21, SegmentFlags.NONE],
                    [13, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "lunar-subterrane-b5-2": {
            "flags": PathFlags.STEPS,
            "map": "316B-0",
            "segments": {
                "base-0": [
                    [14, 28, SegmentFlags.START],
                    [18, 28, SegmentFlags.NONE],
                    [18, 26, SegmentFlags.NONE],
                    [20, 26, SegmentFlags.NONE],
                    [20, 31, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [20, 28, SegmentFlags.NONE],
                    [21, 28, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-subterrane-b5-3": {
            "flags": PathFlags.STEPS,
            "map": "316B-0",
            "segments": {
                "base-0": [
                    [14, 28, SegmentFlags.START],
                    [18, 28, SegmentFlags.NONE],
                    [18, 26, SegmentFlags.NONE],
                    [20, 26, SegmentFlags.NONE],
                    [20, 28, SegmentFlags.NONE]
                ],
                "alternate-0": [
                    [20, 28, SegmentFlags.NONE],
                    [23, 28, SegmentFlags.NONE],
                    [23, 27, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [23, 28, SegmentFlags.NONE],
                    [24, 28, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-subterrane-b5-4": {
            "flags": PathFlags.STEPS,
            "map": "316B-0",
            "segments": {
                "base-0": [
                    [23, 27, SegmentFlags.START],
                    [23, 28, SegmentFlags.NONE],
                    [20, 28, SegmentFlags.NONE],
                    [20, 31, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [20, 28, SegmentFlags.NONE],
                    [20, 27, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-subterrane-b5-passage-a-0": {
            "flags": PathFlags.STEPS,
            "map": "3175-0",
            "segments": {
                "base-0": [
                    [5, 15, SegmentFlags.START],
                    [5, 5, SegmentFlags.NONE],
                    [13, 5, SegmentFlags.END]
                ],
                "base-1": [
                    [13, 5, SegmentFlags.NONE],
                    [17, 5, SegmentFlags.NONE],
                    [17, 8, SegmentFlags.NONE],
                    [14, 8, SegmentFlags.NONE],
                    [14, 13, SegmentFlags.NONE],
                    [22, 13, SegmentFlags.NONE],
                    [22, 7, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [12, 5, SegmentFlags.NONE],
                    [12, 6, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-1-1": [
                    [16, 5, SegmentFlags.NONE],
                    [17, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ],
                "extra-2-1": [
                    [22, 8, SegmentFlags.NONE],
                    [23, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-subterrane-b5-passage-a-2": {
            "flags": PathFlags.STEPS,
            "map": "3175-0",
            "segments": {
                "base-0": [
                    [5, 15, SegmentFlags.START],
                    [5, 5, SegmentFlags.NONE],
                    [17, 5, SegmentFlags.NONE],
                    [17, 8, SegmentFlags.NONE],
                    [14, 8, SegmentFlags.NONE],
                    [14, 13, SegmentFlags.NONE],
                    [22, 13, SegmentFlags.NONE],
                    [22, 7, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [16, 5, SegmentFlags.NONE],
                    [17, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ],
                "extra-2-0": [
                    [22, 8, SegmentFlags.NONE],
                    [23, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-subterrane-b5-passage-b-0": {
            "flags": PathFlags.STEPS,
            "map": "3176-0",
            "segments": {
                "base-0": [
                    [9, 15, SegmentFlags.START],
                    [9, 7, SegmentFlags.NONE],
                    [6, 7, SegmentFlags.NONE],
                    [6, 3, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [6, 4, SegmentFlags.NONE],
                    [7, 4, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-subterrane-b5-passage-b-1": {
            "flags": PathFlags.STEPS,
            "map": "3176-0",
            "segments": {
                "base-0": [
                    [9, 15, SegmentFlags.START],
                    [9, 7, SegmentFlags.NONE],
                    [6, 7, SegmentFlags.NONE],
                    [3, 7, SegmentFlags.NONE],
                    [3, 13, SegmentFlags.RETURN],
                    [3, 7, SegmentFlags.NONE],
                    [6, 7, SegmentFlags.NONE],
                    [6, 3, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [6, 4, SegmentFlags.NONE],
                    [7, 4, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-subterrane-b5-pink-puff-room-0": {
            "flags": PathFlags.STEPS,
            "map": "3177-0",
            "segments": {
                "base-0": [
                    [2, 9, SegmentFlags.START],
                    [2, 10, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [2, 9, SegmentFlags.NONE],
                    [3, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-subterrane-b6-0": {
            "description": "Lunar Subterrane B6",
            "flags": PathFlags.STEPS,
            "map": "316C-0",
            "segments": {
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
                    [22, 21, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [22, 22, SegmentFlags.NONE],
                    [21, 22, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "lunar-subterrane-b6-1": {
            "description": "Lunar Subterrane B6",
            "flags": PathFlags.STEPS,
            "map": "316C-0",
            "segments": {
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
                    [22, 21, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [22, 22, SegmentFlags.NONE],
                    [21, 22, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "lunar-subterrane-b6-passage-0": {
            "flags": PathFlags.STEPS,
            "map": "3179-0",
            "segments": {
                "base-0": [
                    [5, 13, SegmentFlags.START],
                    [5, 11, SegmentFlags.NONE],
                    [10, 11, SegmentFlags.NONE],
                    [10, 4, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [10, 5, SegmentFlags.NONE],
                    [11, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-subterrane-b7-0": {
            "flags": PathFlags.STEPS,
            "map": "316D-0",
            "segments": {
                "base-0": [
                    [3, 8, SegmentFlags.START],
                    [3, 13, SegmentFlags.NONE],
                    [8, 13, SegmentFlags.NONE],
                    [8, 21, SegmentFlags.NONE],
                    [30, 21, SegmentFlags.NONE],
                    [30, 2, SegmentFlags.NONE],
                    [21, 2, SegmentFlags.NONE],
                    [21, 9, SegmentFlags.NONE],
                    [17, 9, SegmentFlags.NONE],
                    [17, 7, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [17, 8, SegmentFlags.NONE],
                    [18, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-subterrane-b7-1": {
            "flags": PathFlags.STEPS,
            "map": "316D-0",
            "segments": {
                "base-0": [
                    [3, 8, SegmentFlags.START],
                    [3, 13, SegmentFlags.NONE],
                    [8, 13, SegmentFlags.NONE],
                    [8, 21, SegmentFlags.NONE],
                    [13, 21, SegmentFlags.NONE]
                ],
                "alternate-0": [
                    [13, 21, SegmentFlags.NONE],
                    [13, 20, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [13, 21, SegmentFlags.NONE],
                    [13, 22, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-subterrane-b7-2": {
            "flags": PathFlags.STEPS,
            "map": "316D-0",
            "segments": {
                "base-0": [
                    [13, 20, SegmentFlags.START],
                    [13, 21, SegmentFlags.NONE],
                    [30, 21, SegmentFlags.NONE],
                    [30, 2, SegmentFlags.NONE],
                    [21, 2, SegmentFlags.NONE],
                    [21, 9, SegmentFlags.NONE],
                    [17, 9, SegmentFlags.NONE],
                    [17, 7, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [17, 8, SegmentFlags.NONE],
                    [18, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-subterrane-b7-save-room-0": {
            "flags": PathFlags.STEPS,
            "map": "317B-0",
            "segments": {
                "base-0": [
                    [3, 14, SegmentFlags.START],
                    [3, 15, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [3, 14, SegmentFlags.NONE],
                    [4, 14, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunar-subterrane-b7-save-room-1": {
            "flags": PathFlags.STEPS,
            "map": "317B-0",
            "segments": {
                "base-0": [
                    [3, 14, SegmentFlags.START],
                    [3, 9, SegmentFlags.RETURN],
                    [3, 15, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [3, 10, SegmentFlags.NONE],
                    [4, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [3, 14, SegmentFlags.NONE],
                    [4, 14, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "lunars-lair-1f-0-0": {
            "flags": PathFlags.NONE,
            "map": "3160-0",
            "segments": {
                "base-0": [
                    [16, 28, SegmentFlags.START],
                    [16, 21, SegmentFlags.END]
                ],
                "base-1": [
                    [16, 15, SegmentFlags.START],
                    [16, 29, SegmentFlags.END]
                ]
            }
        },
        "lunars-lair-1f-0-1": {
            "flags": PathFlags.NONE,
            "map": "3160-0",
            "segments": {
                "base-0": [
                    [16, 28, SegmentFlags.START],
                    [16, 21, SegmentFlags.END]
                ],
                "base-1": [
                    [16, 15, SegmentFlags.START],
                    [16, 29, SegmentFlags.END]
                ]
            }
        },
        "lunars-lair-1f-1": {
            "flags": PathFlags.NONE,
            "map": "3160-0",
            "segments": {
                "base-0": [
                    [16, 28, SegmentFlags.START],
                    [16, 21, SegmentFlags.NONE],
                    [19, 21, SegmentFlags.NONE],
                    [19, 8, SegmentFlags.NONE],
                    [16, 8, SegmentFlags.NONE],
                    [16, 5, SegmentFlags.END]
                ]
            }
        },
        "lunars-lair-2f-0": {
            "flags": PathFlags.NONE,
            "map": "3161-0",
            "segments": {
                "base-0": [
                    [16, 28, SegmentFlags.START],
                    [16, 27, SegmentFlags.NONE],
                    [23, 27, SegmentFlags.NONE],
                    [23, 23, SegmentFlags.NONE],
                    [26, 23, SegmentFlags.NONE],
                    [26, 16, SegmentFlags.NONE],
                    [16, 16, SegmentFlags.END]
                ]
            }
        },
        "mt-hobs-east-0": {
            "flags": PathFlags.STEPS,
            "map": "3080-0",
            "segments": {
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
                    [21, 31, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [10, 10, SegmentFlags.NONE],
                    [11, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [21, 27, SegmentFlags.NONE],
                    [22, 27, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "mt-hobs-summit-0": {
            "flags": PathFlags.STEPS,
            "map": "307F-0",
            "segments": {
                "base-0": [
                    [8, 22, SegmentFlags.START],
                    [8, 23, SegmentFlags.NONE],
                    [16, 23, SegmentFlags.NONE],
                    [16, 20, SegmentFlags.NONE],
                    [20, 20, SegmentFlags.END]
                ],
                "base-1": [
                    [21, 14, SegmentFlags.START],
                    [19, 14, SegmentFlags.NONE],
                    [19, 9, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [16, 23, SegmentFlags.NONE],
                    [17, 23, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-1": [
                    [21, 14, SegmentFlags.NONE],
                    [22, 14, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "mt-hobs-west-0": {
            "flags": PathFlags.STEPS,
            "map": "307E-0",
            "segments": {
                "base-0": [
                    [15, 28, SegmentFlags.START],
                    [15, 26, SegmentFlags.END]
                ],
                "base-1": [
                    [15, 25, SegmentFlags.START],
                    [15, 17, SegmentFlags.NONE],
                    [8, 17, SegmentFlags.NONE],
                    [8, 11, SegmentFlags.NONE],
                    [22, 11, SegmentFlags.NONE],
                    [22, 7, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [15, 25, SegmentFlags.NONE],
                    [15, 26, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [22, 8, SegmentFlags.NONE],
                    [23, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "mt-ordeals-0": {
            "flags": PathFlags.STEPS,
            "map": "3084-0",
            "segments": {
                "base-0": [
                    [20, 31, SegmentFlags.START],
                    [20, 29, SegmentFlags.NONE],
                    [12, 29, SegmentFlags.NONE],
                    [12, 28, SegmentFlags.NONE],
                    [11, 28, SegmentFlags.END]
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
                    [19, 9, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [20, 29, SegmentFlags.NONE],
                    [21, 29, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "mt-ordeals-1": {
            "flags": PathFlags.STEPS,
            "map": "3084-1",
            "segments": {
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
                    [20, 31, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [11, 28, SegmentFlags.NONE],
                    [11, 27, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [17, 23, SegmentFlags.NONE],
                    [18, 23, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "mt-ordeals-3rd-station-0": {
            "flags": PathFlags.STEPS,
            "map": "3085-0",
            "segments": {
                "base-0": [
                    [10, 24, SegmentFlags.START],
                    [8, 24, SegmentFlags.NONE],
                    [8, 17, SegmentFlags.NONE],
                    [18, 17, SegmentFlags.NONE],
                    [18, 12, SegmentFlags.END]
                ],
                "base-1": [
                    [18, 10, SegmentFlags.START],
                    [18, 8, SegmentFlags.NONE],
                    [21, 8, SegmentFlags.NONE],
                    [21, 7, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [18, 16, SegmentFlags.NONE],
                    [19, 16, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-1": [
                    [21, 8, SegmentFlags.NONE],
                    [22, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "mt-ordeals-3rd-station-1": {
            "flags": PathFlags.STEPS,
            "map": "3085-1",
            "segments": {
                "base-0": [
                    [21, 8, SegmentFlags.START],
                    [18, 8, SegmentFlags.NONE],
                    [18, 17, SegmentFlags.NONE],
                    [8, 17, SegmentFlags.NONE],
                    [8, 24, SegmentFlags.NONE],
                    [10, 24, SegmentFlags.NONE],
                    [10, 23, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [18, 12, SegmentFlags.NONE],
                    [18, 11, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [18, 16, SegmentFlags.NONE],
                    [19, 16, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "mt-ordeals-7th-station-0": {
            "flags": PathFlags.STEPS,
            "map": "3086-0",
            "segments": {
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
                    [11, 7, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [18, 8, SegmentFlags.NONE],
                    [19, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [24, 8, SegmentFlags.NONE],
                    [25, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "mt-ordeals-7th-station-1": {
            "flags": PathFlags.STEPS,
            "map": "3086-0",
            "segments": {
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
                    [19, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [24, 8, SegmentFlags.NONE],
                    [25, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "mt-ordeals-summit-0": {
            "flags": PathFlags.STEPS,
            "map": "3087-0",
            "segments": {
                "base-0": [
                    [15, 22, SegmentFlags.START],
                    [15, 23, SegmentFlags.NONE],
                    [18, 23, SegmentFlags.NONE],
                    [18, 16, SegmentFlags.NONE],
                    [17, 16, SegmentFlags.NONE],
                    [16, 16, SegmentFlags.NONE],
                    [16, 15, SegmentFlags.NONE],
                    [16, 10, SegmentFlags.NONE],
                    [14, 10, SegmentFlags.END]
                ],
                "base-1": [
                    [14, 10, SegmentFlags.NONE],
                    [9, 10, SegmentFlags.END],
                    [8, 10, SegmentFlags.NONE],
                    [8, 11, SegmentFlags.NONE],
                    [6, 11, SegmentFlags.NONE],
                    [6, 10, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [17, 16, SegmentFlags.NONE],
                    [17, 15, SegmentFlags.ANNOTATE],
                    [16, 15, SegmentFlags.NONE]
                ],
                "extra-2-0": [
                    [16, 10, SegmentFlags.NONE],
                    [17, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-1-1": [
                    [9, 10, SegmentFlags.NONE],
                    [9, 11, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-1": [
                    [6, 11, SegmentFlags.NONE],
                    [6, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "mt-ordeals-summit-1": {
            "flags": PathFlags.STEPS,
            "map": "3087-0",
            "segments": {
                "base-0": [
                    [6, 10, SegmentFlags.START],
                    [6, 11, SegmentFlags.NONE],
                    [9, 11, SegmentFlags.NONE],
                    [9, 10, SegmentFlags.NONE],
                    [16, 10, SegmentFlags.NONE],
                    [16, 16, SegmentFlags.NONE],
                    [18, 16, SegmentFlags.NONE],
                    [18, 23, SegmentFlags.NONE],
                    [15, 23, SegmentFlags.NONE],
                    [15, 21, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [16, 15, SegmentFlags.NONE],
                    [17, 15, SegmentFlags.ANNOTATE],
                    [17, 16, SegmentFlags.NONE]
                ],
                "extra-2-0": [
                    [16, 10, SegmentFlags.NONE],
                    [17, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "mt-ordeals-summit-2": {
            "flags": PathFlags.STEPS,
            "map": "3087-0",
            "segments": {
                "base-0": [
                    [25, 16, SegmentFlags.START],
                    [18, 16, SegmentFlags.NONE],
                    [18, 23, SegmentFlags.NONE],
                    [15, 23, SegmentFlags.NONE],
                    [15, 21, SegmentFlags.END]
                ]
            }
        },
        "mysidia-0": {
            "flags": PathFlags.NONE,
            "map": "3003-0",
            "segments": {
                "base-0": [
                    [16, 31, SegmentFlags.START],
                    [16, 26, SegmentFlags.NONE],
                    [8, 26, SegmentFlags.NONE],
                    [8, 24, SegmentFlags.NONE],
                    [9, 24, SegmentFlags.NONE],
                    [9, 23, SegmentFlags.END]
                ]
            }
        },
        "mysidia-1": {
            "flags": PathFlags.NONE,
            "map": "3003-0",
            "segments": {
                "base-0": [
                    [9, 23, SegmentFlags.START],
                    [9, 24, SegmentFlags.NONE],
                    [8, 24, SegmentFlags.NONE],
                    [8, 26, SegmentFlags.NONE],
                    [16, 26, SegmentFlags.NONE],
                    [16, 8, SegmentFlags.END]
                ]
            }
        },
        "mysidia-2": {
            "flags": PathFlags.NONE,
            "map": "3003-0",
            "segments": {
                "base-0": [
                    [16, 9, SegmentFlags.START],
                    [16, 27, SegmentFlags.NONE],
                    [27, 27, SegmentFlags.NONE],
                    [27, 26, SegmentFlags.END]
                ]
            }
        },
        "mysidia-3": {
            "flags": PathFlags.NONE,
            "map": "3003-0",
            "segments": {
                "base-0": [
                    [27, 26, SegmentFlags.START],
                    [27, 27, SegmentFlags.NONE],
                    [16, 27, SegmentFlags.NONE],
                    [16, 31, SegmentFlags.END]
                ]
            }
        },
        "mysidia-4": {
            "flags": PathFlags.NONE,
            "map": "3003-0",
            "segments": {
                "base-0": [
                    [16, 31, SegmentFlags.START],
                    [16, 8, SegmentFlags.END]
                ]
            }
        },
        "mysidia-5": {
            "flags": PathFlags.NONE,
            "map": "3003-0",
            "segments": {
                "base-0": [
                    [16, 9, SegmentFlags.START],
                    [16, 20, SegmentFlags.NONE],
                    [19, 20, SegmentFlags.NONE],
                    [19, 19, SegmentFlags.NONE],
                    [25, 19, SegmentFlags.NONE],
                    [25, 17, SegmentFlags.END]
                ]
            }
        },
        "mysidia-6": {
            "flags": PathFlags.NONE,
            "map": "3003-1",
            "segments": {
                "base-0": [
                    [16, 31, SegmentFlags.START],
                    [16, 28, SegmentFlags.END]
                ]
            }
        },
        "mysidia-armor-shop-0": {
            "flags": PathFlags.NONE,
            "map": "30E6-0",
            "segments": {
                "base-0": [
                    [4, 7, SegmentFlags.START],
                    [4, 5, SegmentFlags.RETURN],
                    [4, 10, SegmentFlags.END]
                ]
            }
        },
        "mysidia-house-of-wishes-0": {
            "flags": PathFlags.NONE,
            "map": "3016-0",
            "segments": {
                "base-0": [
                    [14, 9, SegmentFlags.START],
                    [14, 6, SegmentFlags.END]
                ],
                "base-1": [
                    [14, 7, SegmentFlags.START],
                    [14, 12, SegmentFlags.END]
                ]
            }
        },
        "mysidia-house-of-wishes-1": {
            "flags": PathFlags.NONE,
            "map": "3016-0",
            "segments": {
                "base-0": [
                    [14, 9, SegmentFlags.START],
                    [14, 6, SegmentFlags.END]
                ],
                "base-1": [
                    [14, 9, SegmentFlags.START],
                    [14, 12, SegmentFlags.END]
                ]
            }
        },
        "mysidia-item-shop-0": {
            "flags": PathFlags.NONE,
            "map": "30E7-0",
            "segments": {
                "base-0": [
                    [5, 7, SegmentFlags.START],
                    [5, 5, SegmentFlags.RETURN],
                    [5, 10, SegmentFlags.END]
                ]
            }
        },
        "mysidia-serpent-road-0": {
            "flags": PathFlags.STEPS,
            "map": "3089-0",
            "segments": {
                "base-0": [
                    [4, 7, SegmentFlags.START],
                    [4, 5, SegmentFlags.END]
                ]
            }
        },
        "old-water-way-0": {
            "flags": PathFlags.STEPS,
            "map": "303A-0",
            "segments": {
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
                    [27, 7, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [27, 12, SegmentFlags.NONE],
                    [28, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "old-water-way-antechamber-0": {
            "flags": PathFlags.NONE,
            "map": "3044-0",
            "segments": {
                "base-0": [
                    [2, 6, SegmentFlags.START],
                    [2, 4, SegmentFlags.END]
                ]
            }
        },
        "overworld-airship-0-0": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [86, 127, 32, 32],
            "segments": {
                "base-0": [
                    [102, 155, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [102, 127, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 126, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-0-1": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [86, 96, 32, 32],
            "segments": {
                "base-0": [
                    [102, 128, SegmentFlags.VEHICLE],
                    [102, 127, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 96, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 95, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-0-2": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [86, 66, 32, 32],
            "segments": {
                "base-0": [
                    [102, 97, SegmentFlags.VEHICLE],
                    [102, 96, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 83, SegmentFlags.VEHICLE],
                    [86, 83, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [85, 83, SegmentFlags.VEHICLE],
                ]
            }
        },
        "overworld-airship-0-3": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [55, 66, 32, 32],
            "segments": {
                "base-0": [
                    [87, 83, SegmentFlags.VEHICLE],
                    [86, 83, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [55, 83, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [54, 83, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-1-0": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [88, 155, 32, 32],
            "segments": {
                "base-0": [
                    [102, 158, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [102, 186, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 187, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-2-0": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [88, 184, 32, 32],
            "segments": {
                "base-0": [
                    [106, 212, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [102, 212, SegmentFlags.VEHICLE],
                    [102, 184, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 183, SegmentFlags.NONE | SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-3-0": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [86, 133, 32, 32],
            "segments": {
                "base-0": [
                    [102, 155, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [102, 133, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 132, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-3-1": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [95, 103, 32, 32],
            "segments": {
                "base-0": [
                    [102, 135, SegmentFlags.VEHICLE],
                    [102, 134, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 119, SegmentFlags.VEHICLE],
                    [126, 119, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [127, 119, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-3-2": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [127, 103, 32, 32],
            "segments": {
                "base-0": [
                    [126, 119, SegmentFlags.VEHICLE],
                    [127, 119, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [151, 119, SegmentFlags.VEHICLE],
                    [151, 103, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [151, 102, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-3-3": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [127, 72, 32, 32],
            "segments": {
                "base-0": [
                    [151, 104, SegmentFlags.VEHICLE],
                    [151, 103, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [151, 72, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [151, 71, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-3-4": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [127, 41, 32, 32],
            "segments": {
                "base-0": [
                    [151, 73, SegmentFlags.VEHICLE],
                    [151, 72, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [151, 49, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [127, 49, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [126, 49, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-3-5": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [96, 31, 32, 32],
            "segments": {
                "base-0": [
                    [128, 49, SegmentFlags.VEHICLE],
                    [127, 49, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [96, 49, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [95, 49, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-3-6": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [65, 31, 32, 32],
            "segments": {
                "base-0": [
                    [97, 49, SegmentFlags.VEHICLE],
                    [96, 49, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [65, 49, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [64, 49, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-3-7": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [34, 31, 32, 32],
            "segments": {
                "base-0": [
                    [66, 49, SegmentFlags.VEHICLE],
                    [65, 49, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [34, 49, SegmentFlags.VEHICLE],
                    [34, 31, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [34, 30, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-3-8": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [18, 0, 32, 32],
            "segments": {
                "base-0": [
                    [34, 32, SegmentFlags.VEHICLE],
                    [34, 31, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [34, 0, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [34, -1, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-3-9": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [18, 224, 32, 32],
            "segments": {
                "base-0": [
                    [34, 256, SegmentFlags.VEHICLE],
                    [34, 255, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [34, 237, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [35, 237, SegmentFlags.END | SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-4-0": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [78, 196, 32, 32],
            "segments": {
                "base-0": [
                    [106, 212, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [78, 212, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [77, 212, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-4-1": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [47, 196, 32, 32],
            "segments": {
                "base-0": [
                    [79, 212, SegmentFlags.VEHICLE],
                    [78, 212, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [47, 212, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [46, 212, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-4-2": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [241, 216, 32, 32],
            "segments": {
                "base-0": [
                    [273, 232, SegmentFlags.VEHICLE],
                    [272, 232, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [241, 232, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [240, 232, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-4-3": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [210, 201, 32, 32],
            "segments": {
                "base-0": [
                    [242, 232, SegmentFlags.VEHICLE],
                    [241, 232, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [221, 232, SegmentFlags.VEHICLE],
                    [221, 201, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [221, 200, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-4-4": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [205, 170, 32, 32],
            "segments": {
                "base-0": [
                    [221, 202, SegmentFlags.VEHICLE],
                    [221, 201, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [221, 170, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [221, 169, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-4-5": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [205, 139, 32, 32],
            "segments": {
                "base-0": [
                    [221, 171, SegmentFlags.VEHICLE],
                    [221, 170, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [221, 140, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [222, 140, SegmentFlags.END | SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-5-0": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [204, 153, 32, 32],
            "segments": {
                "base-0": [
                    [222, 152, SegmentFlags.VEHICLE],
                    [222, 153, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [222, 184, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [222, 154, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-5-1": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [204, 184, 32, 32],
            "segments": {
                "base-0": [
                    [222, 183, SegmentFlags.VEHICLE],
                    [222, 184, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [222, 199, SegmentFlags.VEHICLE],
                    [204, 199, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [203, 199, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-5-2": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [173, 184, 32, 32],
            "segments": {
                "base-0": [
                    [205, 199, SegmentFlags.VEHICLE],
                    [204, 199, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [173, 199, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [172, 199, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-5-3": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [142, 184, 32, 32],
            "segments": {
                "base-0": [
                    [174, 199, SegmentFlags.VEHICLE],
                    [173, 199, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [153, 199, SegmentFlags.RETURN | SegmentFlags.VEHICLE],
                    [154, 199, SegmentFlags.END]
                ]
            }
        },
        "overworld-airship-6-0": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [125, 189, 32, 32],
            "segments": {
                "base-0": [
                    [153, 199, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [153, 211, SegmentFlags.VEHICLE],
                    [125, 211, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [124, 211, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-6-1": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [94, 189, 32, 32],
            "segments": {
                "base-0": [
                    [126, 211, SegmentFlags.VEHICLE],
                    [125, 211, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [107, 211, SegmentFlags.END | SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-airship-7-0": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [97, 189, 32, 32],
            "segments": {
                "base-0": [
                    [106, 212, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [128, 212, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [129, 212, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-agart-0": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [88, 187, 32, 32],
            "segments": {
                "base-0": [
                    [102, 186, SegmentFlags.VEHICLE],
                    [102, 187, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 215, SegmentFlags.VEHICLE],
                    [105, 215, SegmentFlags.VEHICLE],
                    [105, 216, SegmentFlags.START | SegmentFlags.END]
                ],
                "extra-2-0": [
                    [105, 215, SegmentFlags.NONE],
                    [106, 215, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-agart-1": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [89, 198, 32, 32],
            "segments": {
                "base-0": [
                    [105, 216, SegmentFlags.START],
                    [105, 215, SegmentFlags.NONE],
                    [105, 212, SegmentFlags.START | SegmentFlags.END | SegmentFlags.VEHICLE],
                ]
            }
        },
        "overworld-baron-0": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [86, 154, 32, 32],
            "segments": {
                "base-0": [
                    [102, 186, SegmentFlags.VEHICLE],
                    [102, 184, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [102, 158, SegmentFlags.VEHICLE],
                    [102, 157, SegmentFlags.START | SegmentFlags.END]
                ],
                "extra-2-0": [
                    [102, 158, SegmentFlags.NONE],
                    [101, 158, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
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
                ],
                "extra-2-0": [
                    [136, 57, SegmentFlags.NONE],
                    [137, 57, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-damcyan-2": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [107, 41, 32, 32],
            "segments": {
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
                    [106, 68, SegmentFlags.VEHICLE]
                ],
                "extra-2-0": [
                    [136, 57, SegmentFlags.NONE],
                    [137, 57, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-damcyan-3": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [98, 44, 32, 32],
            "segments": {
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
                    [130, 46, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-damcyan-4": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [124, 31, 32, 32],
            "segments": {
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
                    [152, 49, SegmentFlags.START | SegmentFlags.END]
                ],
                "extra-2-0": [
                    [151, 49, SegmentFlags.NONE],
                    [151, 50, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-eblan-0": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [14, 219, 32, 32],
            "segments": {
                "base-0": [
                    [35, 237, SegmentFlags.START],
                    [34, 237, SegmentFlags.NONE],
                    [34, 239, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [28, 239, SegmentFlags.VEHICLE],
                    [28, 237, SegmentFlags.VEHICLE],
                    [24, 237, SegmentFlags.VEHICLE],
                    [24, 232, SegmentFlags.VEHICLE],
                    [24, 231, SegmentFlags.START | SegmentFlags.END]
                ],
                "extra-2-0": [
                    [35, 237, SegmentFlags.NONE],
                    [36, 237, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-eblan-1": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [16, 208, 32, 32],
            "segments": {
                "base-0": [
                    [48, 212, SegmentFlags.VEHICLE],
                    [47, 212, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [36, 212, SegmentFlags.VEHICLE],
                    [36, 237, SegmentFlags.VEHICLE],
                    [35, 237, SegmentFlags.START],
                    [24, 237, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [24, 232, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [16, 232, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [15, 232, SegmentFlags.VEHICLE]
                ],
                "extra-2-0": [
                    [35, 237, SegmentFlags.NONE],
                    [35, 236, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-fabul-0": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [159, 28, 32, 32],
            "segments": {
                "base-0": [
                    [160, 50, SegmentFlags.START],
                    [162, 50, SegmentFlags.NONE],
                    [162, 49, SegmentFlags.NONE],
                    [171, 49, SegmentFlags.NONE],
                    [171, 38, SegmentFlags.NONE],
                    [185, 38, SegmentFlags.NONE],
                    [185, 45, SegmentFlags.NONE],
                    [190, 45, SegmentFlags.END],
                    [191, 45, SegmentFlags.NONE]
                ]
            }
        },
        "overworld-fabul-1": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [186, 35, 32, 32],
            "segments": {
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
                    [213, 58, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ],
                "extra-2-0": [
                    [213, 58, SegmentFlags.NONE],
                    [213, 59, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-fabul-2": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [202, 41, 32, 32],
            "segments": {
                "base-0": [
                    [215, 59, SegmentFlags.START],
                    [216, 59, SegmentFlags.NONE],
                    [216, 58, SegmentFlags.NONE],
                    [220, 58, SegmentFlags.NONE],
                    [220, 56, SegmentFlags.NONE],
                    [221, 56, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [216, 58, SegmentFlags.NONE],
                    [217, 58, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [220, 58, SegmentFlags.NONE],
                    [221, 58, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
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
        "overworld-kaipo-3": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [92, 67, 32, 32],
            "segments": {
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
                    [118, 99, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-kaipo-4": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [105, 85, 32, 32],
            "segments": {
                "base-0": [
                    [118, 83, SegmentFlags.VEHICLE],
                    [118, 98, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [118, 104, SegmentFlags.VEHICLE],
                    [124, 104, SegmentFlags.VEHICLE],
                    [125, 104, SegmentFlags.START | SegmentFlags.END]
                ],
                "extra-2-0": [
                    [124, 104, SegmentFlags.NONE],
                    [124, 105, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-kaipo-5": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [95, 74, 32, 32],
            "segments": {
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
                    [99, 73, SegmentFlags.VEHICLE]
                ],
                "extra-2-0": [
                    [124, 104, SegmentFlags.NONE],
                    [124, 105, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
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
        "overworld-mt-ordeals-0": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [159, 185, 32, 32],
            "segments": {
                "base-0": [
                    [158, 205, SegmentFlags.NONE],
                    [160, 205, SegmentFlags.END],
                    [175, 205, SegmentFlags.NONE],
                    [175, 211, SegmentFlags.NONE],
                    [182, 211, SegmentFlags.NONE],
                    [182, 192, SegmentFlags.NONE],
                    [190, 192, SegmentFlags.END],
                    [191, 192, SegmentFlags.NONE]
                ],
                "boundary-0": [
                    [160, 185, SegmentFlags.NONE],
                    [160, 216, SegmentFlags.NONE]
                ]
            }
        },
        "overworld-mt-ordeals-1": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [189, 180, 32, 32],
            "segments": {
                "base-0": [
                    [188, 192, SegmentFlags.NONE],
                    [190, 192, SegmentFlags.END],
                    [211, 192, SegmentFlags.NONE],
                    [211, 201, SegmentFlags.NONE],
                    [218, 201, SegmentFlags.NONE],
                    [218, 199, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [218, 200, SegmentFlags.NONE],
                    [219, 200, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-mt-ordeals-2": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [199, 188, 32, 32],
            "segments": {
                "base-0": [
                    [218, 200, SegmentFlags.START],
                    [218, 209, SegmentFlags.NONE],
                    [213, 209, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [218, 200, SegmentFlags.NONE],
                    [219, 200, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-mt-ordeals-3": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [183, 184, 32, 32],
            "segments": {
                "base-0": [
                    [213, 209, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [213, 200, SegmentFlags.VEHICLE],
                    [201, 200, SegmentFlags.VEHICLE],
                    [201, 192, SegmentFlags.VEHICLE],
                    [183, 192, SegmentFlags.VEHICLE | SegmentFlags.END],
                    [182, 192, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-mysidia-0": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [133, 183, 32, 32],
            "segments": {
                "base-0": [
                    [145, 200, SegmentFlags.START],
                    [145, 199, SegmentFlags.NONE],
                    [154, 199, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [153, 199, SegmentFlags.NONE],
                    [153, 198, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-mysidia-1": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [141, 185, 32, 32],
            "segments": {
                "base-0": [
                    [154, 200, SegmentFlags.START],
                    [157, 200, SegmentFlags.NONE],
                    [157, 205, SegmentFlags.NONE],
                    [160, 205, SegmentFlags.END],
                    [173, 205, SegmentFlags.NONE]
                ],
                "extra-2-0": [
                    [157, 200, SegmentFlags.NONE],
                    [157, 199, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "boundary-0": [
                    [160, 185, SegmentFlags.NONE],
                    [160, 216, SegmentFlags.NONE]
                ]
            }
        },
        "overworld-mysidia-2": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [152, 185, 32, 32],
            "segments": {
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
                    [155, 199, SegmentFlags.START | SegmentFlags.END]
                ],
                "extra-2-0": [
                    [156, 199, SegmentFlags.NONE],
                    [156, 198, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "boundary-0": [
                    [160, 185, SegmentFlags.NONE],
                    [160, 216, SegmentFlags.NONE]
                ]
            }
        },
        "overworld-mysidia-3": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [128, 189, 32, 32],
            "segments": {
                "base-0": [
                    [127, 212, SegmentFlags.VEHICLE],
                    [128, 212, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [149, 212, SegmentFlags.VEHICLE],
                    [149, 199, SegmentFlags.VEHICLE],
                    [150, 199, SegmentFlags.START | SegmentFlags.END]
                ],
                "extra-2-0": [
                    [149, 199, SegmentFlags.NONE],
                    [149, 198, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-mysidia-3-rosa": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [128, 189, 32, 32],
            "segments": {
                "base-0": [
                    [127, 212, SegmentFlags.VEHICLE],
                    [128, 212, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [153, 212, SegmentFlags.VEHICLE],
                    [153, 199, SegmentFlags.VEHICLE],
                    [154, 199, SegmentFlags.START | SegmentFlags.END]
                ]
            }
        },
        "overworld-mysidia-4": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [128, 189, 32, 32],
            "segments": {
                "base-0": [
                    [153, 199, SegmentFlags.START],
                    [150, 199, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [153, 199, SegmentFlags.NONE],
                    [153, 198, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-silvera-0": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [204, 122, 32, 32],
            "segments": {
                "base-0": [
                    [222, 140, SegmentFlags.START],
                    [221, 140, SegmentFlags.NONE],
                    [219, 140, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [219, 137, SegmentFlags.VEHICLE],
                    [219, 136, SegmentFlags.START | SegmentFlags.END]
                ],
                "extra-2-0": [
                    [222, 140, SegmentFlags.NONE],
                    [222, 139, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-silvera-1": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [204, 122, 32, 32],
            "segments": {
                "base-0": [
                    [219, 136, SegmentFlags.START],
                    [219, 137, SegmentFlags.NONE],
                    [219, 140, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [221, 140, SegmentFlags.VEHICLE],
                    [222, 140, SegmentFlags.START],
                    [222, 153, SegmentFlags.START | SegmentFlags.END | SegmentFlags.VEHICLE],
                    [222, 154, SegmentFlags.VEHICLE]
                ],
                "extra-2-0": [
                    [222, 140, SegmentFlags.NONE],
                    [222, 139, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-toroia-0": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [24, 66, 32, 32],
            "segments": {
                "base-0": [
                    [56, 83, SegmentFlags.VEHICLE],
                    [55, 83, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [36, 83, SegmentFlags.VEHICLE],
                    [36, 82, SegmentFlags.START],
                    [35, 82, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [36, 82, SegmentFlags.NONE],
                    [37, 82, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-toroia-1": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [23, 52, 32, 32],
            "segments": {
                "base-0": [
                    [35, 82, SegmentFlags.START],
                    [35, 70, SegmentFlags.NONE],
                    [43, 70, SegmentFlags.NONE],
                    [43, 54, SegmentFlags.NONE],
                    [41, 54, SegmentFlags.NONE],
                    [41, 53, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [35, 82, SegmentFlags.NONE],
                    [36, 82, SegmentFlags.NONE | SegmentFlags.ANNOTATE],
                    [36, 70, SegmentFlags.NONE]
                ],
                "extra-2-0": [
                    [43, 70, SegmentFlags.NONE],
                    [44, 70, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-toroia-2": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [33, 41, 32, 32],
            "segments": {
                "base-0": [
                    [41, 53, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [41, 61, SegmentFlags.VEHICLE],
                    [64, 61, SegmentFlags.VEHICLE | SegmentFlags.END],
                    [65, 61, SegmentFlags.VEHICLE]
                ]
            }
        },
        "overworld-toroia-3": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [53, 42, 32, 32],
            "segments": {
                "base-0": [
                    [52, 61, SegmentFlags.VEHICLE],
                    [64, 61, SegmentFlags.VEHICLE | SegmentFlags.END],
                    [68, 61, SegmentFlags.VEHICLE],
                    [68, 56, SegmentFlags.VEHICLE],
                    [74, 56, SegmentFlags.VEHICLE],
                    [74, 55, SegmentFlags.VEHICLE],
                    [74, 53, SegmentFlags.START | SegmentFlags.END]
                ],
                "extra-2-0": [
                    [74, 54, SegmentFlags.NONE],
                    [75, 54, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-toroia-4": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [58, 38, 32, 32],
            "segments": {
                "base-0": [
                    [74, 53, SegmentFlags.START],
                    [74, 55, SegmentFlags.NONE],
                    [58, 55, SegmentFlags.VEHICLE | SegmentFlags.START | SegmentFlags.END],
                    [57, 55, SegmentFlags.VEHICLE]
                ],
                "extra-2-0": [
                    [74, 54, SegmentFlags.NONE],
                    [75, 54, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-toroia-5": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [30, 52, 32, 32],
            "segments": {
                "base-0": [
                    [41, 53, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [41, 61, SegmentFlags.VEHICLE],
                    [57, 61, SegmentFlags.VEHICLE],
                    [57, 81, SegmentFlags.VEHICLE],
                    [35, 81, SegmentFlags.START | SegmentFlags.END]
                ],
                "extra-2-0": [
                    [36, 81, SegmentFlags.NONE],
                    [36, 80, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-toroia-6": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [20, 67, 32, 32],
            "segments": {
                "base-0": [
                    [35, 81, SegmentFlags.START],
                    [35, 83, SegmentFlags.NONE],
                    [36, 83, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [35, 82, SegmentFlags.NONE],
                    [36, 82, SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [36, 83, SegmentFlags.NONE]
                ],
                "optional-2-0": [
                    [35, 81, SegmentFlags.NONE],
                    [36, 81, SegmentFlags.ANNOTATE],
                    [36, 83, SegmentFlags.NONE]
                ],
                "extra-2-0": [
                    [36, 82, SegmentFlags.NONE],
                    [37, 82, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "overworld-toroia-7": {
            "flags": PathFlags.STEPS,
            "map": "0000-0",
            "mapRange": [23, 52, 32, 32],
            "segments": {
                "base-0": [
                    [41, 53, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [41, 61, SegmentFlags.VEHICLE],
                    [43, 61, SegmentFlags.VEHICLE],
                    [43, 81, SegmentFlags.VEHICLE],
                    [36, 81, SegmentFlags.VEHICLE],
                    [35, 81, SegmentFlags.START | SegmentFlags.END]
                ]
            }
        },
        "pass-to-babil-north-0": {
            "flags": PathFlags.STEPS,
            "map": "30CA-0",
            "segments": {
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
                    [11, 27, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [13, 23, SegmentFlags.NONE],
                    [12, 23, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "pass-to-babil-north-1": {
            "flags": PathFlags.STEPS,
            "map": "30CA-0",
            "segments": {
                "base-0": [
                    [26, 25, SegmentFlags.START],
                    [26, 24, SegmentFlags.NONE],
                    [27, 24, SegmentFlags.NONE],
                    [27, 18, SegmentFlags.NONE],
                    [26, 18, SegmentFlags.NONE],
                    [26, 12, SegmentFlags.NONE],
                    [27, 12, SegmentFlags.NONE],
                    [27, 8, SegmentFlags.NONE],
                    [24, 8, SegmentFlags.END]
                ],
                "base-1": [
                    [22, 6, SegmentFlags.START],
                    [22, 2, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [27, 8, SegmentFlags.NONE],
                    [28, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-1": [
                    [22, 4, SegmentFlags.NONE],
                    [23, 4, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "pass-to-babil-north-2": {
            "flags": PathFlags.STEPS,
            "map": "30CA-0",
            "segments": {
                "base-0": [
                    [26, 25, SegmentFlags.START],
                    [26, 24, SegmentFlags.NONE],
                    [27, 24, SegmentFlags.NONE]
                ],
                "alternate-0": [
                    [27, 24, SegmentFlags.NONE],
                    [29, 24, SegmentFlags.NONE],
                    [29, 23, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [29, 24, SegmentFlags.NONE],
                    [30, 24, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "pass-to-babil-north-3": {
            "flags": PathFlags.STEPS,
            "map": "30CA-0",
            "segments": {
                "base-0": [
                    [29, 23, SegmentFlags.START],
                    [29, 24, SegmentFlags.NONE],
                    [27, 24, SegmentFlags.NONE],
                    [27, 18, SegmentFlags.NONE],
                    [26, 18, SegmentFlags.NONE],
                    [26, 12, SegmentFlags.NONE],
                    [27, 12, SegmentFlags.NONE],
                    [27, 8, SegmentFlags.NONE],
                    [24, 8, SegmentFlags.END]
                ],
                "base-1": [
                    [22, 6, SegmentFlags.START],
                    [22, 2, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [27, 8, SegmentFlags.NONE],
                    [28, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-1": [
                    [22, 4, SegmentFlags.NONE],
                    [23, 4, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "pass-to-babil-north-save-room-0": {
            "flags": PathFlags.STEPS,
            "map": "30CD-0",
            "segments": {
                "base-0": [
                    [4, 11, SegmentFlags.START],
                    [4, 12, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [4, 11, SegmentFlags.NONE],
                    [4, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "pass-to-babil-south-0": {
            "flags": PathFlags.STEPS,
            "map": "30C9-0",
            "segments": {
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
                    [6, 8, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [6, 11, SegmentFlags.NONE],
                    [6, 12, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "pass-to-babil-south-1": {
            "flags": PathFlags.STEPS,
            "map": "30C9-0",
            "segments": {
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
                    [25, 3, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [25, 5, SegmentFlags.NONE],
                    [26, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "sealed-cave-0": {
            "flags": PathFlags.STEPS,
            "map": "3144-0",
            "segments": {
                "base-0": [
                    [4, 10, SegmentFlags.START],
                    [4, 4, SegmentFlags.END]
                ],
                "base-1": [
                    [4, 8, SegmentFlags.START],
                    [4, 11, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [4, 9, SegmentFlags.NONE],
                    [5, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "toroian-castle-0": {
            "flags": PathFlags.NONE,
            "map": "3027-0",
            "segments": {
                "base-0": [
                    [16, 29, SegmentFlags.START],
                    [16, 10, SegmentFlags.END]
                ]
            }
        },
        "toroian-castle-1": {
            "flags": PathFlags.NONE,
            "map": "3027-0",
            "segments": {
                "base-0": [
                    [7, 5, SegmentFlags.START],
                    [6, 5, SegmentFlags.NONE],
                    [6, 12, SegmentFlags.NONE],
                    [9, 12, SegmentFlags.NONE],
                    [9, 11, SegmentFlags.END]

                ]
            }
        },
        "toroian-castle-2": {
            "flags": PathFlags.NONE,
            "map": "3027-0",
            "segments": {
                "base-0": [
                    [16, 29, SegmentFlags.START],
                    [16, 10, SegmentFlags.END]
                ]
            }
        },
        "toroian-castle-1f-0": {
            "flags": PathFlags.STEPS,
            "map": "3055-0",
            "segments": {
                "base-0": [
                    [9, 17, SegmentFlags.START],
                    [9, 7, SegmentFlags.NONE],
                    [2, 7, SegmentFlags.NONE],
                    [2, 10, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [9, 8, SegmentFlags.NONE],
                    [7, 8, SegmentFlags.NONE | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [7, 7, SegmentFlags.NONE]
                ],
                "optional-2-0": [
                    [9, 9, SegmentFlags.NONE],
                    [7, 9, SegmentFlags.NONE | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [7, 7, SegmentFlags.NONE]
                ],
                "optional-3-0": [
                    [9, 10, SegmentFlags.NONE],
                    [7, 10, SegmentFlags.NONE | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [7, 7, SegmentFlags.NONE]
                ],
                "extra-2-0": [
                    [2, 7, SegmentFlags.NONE],
                    [1, 7, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "toroian-castle-1f-1": {
            "flags": PathFlags.STEPS,
            "map": "3055-0",
            "segments": {
                "base-0": [
                    [9, 17, SegmentFlags.START],
                    [9, 0, SegmentFlags.END]
                ]
            }
        },
        "toroian-castle-1f-2": {
            "flags": PathFlags.STEPS,
            "map": "3055-0",
            "segments": {
                "base-0": [
                    [9, 17, SegmentFlags.START],
                    [9, 7, SegmentFlags.NONE],
                    [7, 7, SegmentFlags.RETURN],
                    [9, 7, SegmentFlags.NONE],
                    [9, 0, SegmentFlags.END]
                ],
                "optional-1-0": [
                    [9, 8, SegmentFlags.NONE],
                    [7, 8, SegmentFlags.NONE | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [7, 7, SegmentFlags.NONE]
                ],
                "optional-2-0": [
                    [9, 9, SegmentFlags.NONE],
                    [7, 9, SegmentFlags.NONE | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [7, 7, SegmentFlags.NONE]
                ],
                "optional-3-0": [
                    [9, 10, SegmentFlags.NONE],
                    [7, 10, SegmentFlags.NONE | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL],
                    [7, 7, SegmentFlags.NONE]
                ],
                "extra-2-0": [
                    [7, 7, SegmentFlags.NONE],
                    [6, 7, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "toroian-castle-2f-0": {
            "flags": PathFlags.STEPS,
            "map": "3056-0",
            "segments": {
                "base-0": [
                    [5, 18, SegmentFlags.START],
                    [5, 16, SegmentFlags.END]
                ]
            }
        },
        "toroian-castle-infirmary-0": {
            "flags": PathFlags.STEPS,
            "map": "3058-0",
            "segments": {
                "base-0": [
                    [2, 5, SegmentFlags.START],
                    [3, 5, SegmentFlags.NONE],
                    [3, 3, SegmentFlags.NONE],
                    [8, 3, SegmentFlags.NONE],
                    [8, 4, SegmentFlags.END]
                ]
            }
        },
        "tower-of-babil-1f-0": {
            "flags": PathFlags.STEPS,
            "map": "3121-0",
            "segments": {
                "base-0": [
                    [15, 24, SegmentFlags.START],
                    [15, 4, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [15, 20, SegmentFlags.NONE],
                    [15, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [15, 10, SegmentFlags.NONE],
                    [16, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-1f-upper-0": {
            "flags": PathFlags.STEPS,
            "map": "30A7-0",
            "segments": {
                "base-0": [
                    [28, 17, SegmentFlags.START],
                    [28, 6, SegmentFlags.END]
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
                    [21, 19, SegmentFlags.END]
                ],
                "extra-2-1": [
                    [21, 20, SegmentFlags.NONE],
                    [22, 20, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-1f-1": {
            "flags": PathFlags.STEPS,
            "map": "3121-0",
            "segments": {
                "base-0": [
                    [15, 5, SegmentFlags.START],
                    [15, 21, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [15, 10, SegmentFlags.NONE],
                    [16, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-2f-0": {
            "flags": PathFlags.STEPS,
            "map": "3122-0",
            "segments": {
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
                    [16, 13, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [16, 14, SegmentFlags.NONE],
                    [17, 14, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-2f-1": {
            "flags": PathFlags.STEPS,
            "map": "3122-0",
            "segments": {
                "base-0": [
                    [16, 14, SegmentFlags.START],
                    [17, 14, SegmentFlags.NONE],
                    [17, 17, SegmentFlags.NONE],
                    [18, 17, SegmentFlags.NONE],
                    [18, 23, SegmentFlags.NONE],
                    [12, 23, SegmentFlags.NONE],
                    [12, 6, SegmentFlags.NONE],
                    [15, 6, SegmentFlags.NONE],
                    [15, 4, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [15, 5, SegmentFlags.NONE],
                    [16, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-3f-0": {
            "flags": PathFlags.STEPS,
            "map": "3123-0",
            "segments": {
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
                    [12, 19, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [12, 20, SegmentFlags.NONE],
                    [13, 20, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-3f-1": {
            "flags": PathFlags.STEPS,
            "map": "3123-0",
            "segments": {
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
                    [16, 13, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [16, 14, SegmentFlags.NONE],
                    [15, 14, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "tower-of-babil-4f-0": {
            "flags": PathFlags.STEPS,
            "map": "3124-0",
            "segments": {
                "base-0": [
                    [12, 20, SegmentFlags.START],
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
                    [3, 8, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [3, 9, SegmentFlags.NONE],
                    [3, 10, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-4f-1": {
            "flags": PathFlags.STEPS,
            "map": "3124-0",
            "segments": {
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
                    [12, 19, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [12, 20, SegmentFlags.NONE],
                    [12, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-5f-0": {
            "flags": PathFlags.STEPS,
            "map": "3125-0",
            "segments": {
                "base-0": [
                    [3, 9, SegmentFlags.START],
                    [2, 9, SegmentFlags.NONE],
                    [2, 22, SegmentFlags.NONE],
                    [9, 22, SegmentFlags.NONE],
                    [9, 24, SegmentFlags.NONE],
                    [23, 24, SegmentFlags.NONE],
                    [23, 19, SegmentFlags.NONE],
                    [25, 19, SegmentFlags.NONE],
                    [25, 5, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [25, 6, SegmentFlags.NONE],
                    [26, 6, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-5f-1": {
            "flags": PathFlags.STEPS,
            "map": "3125-0",
            "segments": {
                "base-0": [
                    [25, 5, SegmentFlags.START],
                    [25, 22, SegmentFlags.NONE],
                    [23, 22, SegmentFlags.NONE],
                    [23, 24, SegmentFlags.NONE],
                    [16, 24, SegmentFlags.NONE],
                    [16, 10, SegmentFlags.END],
                    [16, 9, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [16, 18, SegmentFlags.NONE],
                    [17, 18, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-5f-2": {
            "flags": PathFlags.STEPS,
            "map": "3125-0",
            "segments": {
                "base-0": [
                    [16, 10, SegmentFlags.START],
                    [16, 24, SegmentFlags.NONE],
                    [7, 24, SegmentFlags.NONE],
                    [7, 22, SegmentFlags.NONE],
                    [2, 22, SegmentFlags.NONE],
                    [2, 9, SegmentFlags.NONE],
                    [3, 9, SegmentFlags.NONE],
                    [3, 8, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [3, 9, SegmentFlags.NONE],
                    [4, 9, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-5f-super-cannon-0": {
            "flags": PathFlags.STEPS,
            "map": "312D-0",
            "segments": {
                "base-0": [
                    [5, 11, SegmentFlags.START],
                    [5, 10, SegmentFlags.END]
                ]
            }
        },
        "tower-of-babil-6f-0": {
            "flags": PathFlags.STEPS,
            "map": "3126-0",
            "segments": {
                "base-0": [
                    [25, 6, SegmentFlags.START],
                    [14, 6, SegmentFlags.NONE],
                    [14, 4, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [14, 5, SegmentFlags.NONE],
                    [15, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-6f-1": {
            "flags": PathFlags.STEPS,
            "map": "3126-0",
            "segments": {
                "base-0": [
                    [14, 4, SegmentFlags.START],
                    [14, 6, SegmentFlags.NONE],
                    [25, 6, SegmentFlags.NONE],
                    [25, 5, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [25, 6, SegmentFlags.NONE],
                    [26, 6, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-6f-revisit-0": {
            "flags": PathFlags.STEPS,
            "map": "311F-0",
            "segments": {
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
                    [9, 21, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [18, 27, SegmentFlags.NONE],
                    [18, 26, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-7f-0": {
            "flags": PathFlags.STEPS,
            "map": "3127-0",
            "segments": {
                "base-0": [
                    [14, 5, SegmentFlags.START],
                    [18, 5, SegmentFlags.NONE],
                    [18, 15, SegmentFlags.NONE],
                    [21, 15, SegmentFlags.NONE],
                    [21, 25, SegmentFlags.NONE],
                    [27, 25, SegmentFlags.NONE],
                    [27, 18, SegmentFlags.NONE],
                    [29, 18, SegmentFlags.NONE],
                    [29, 16, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [29, 17, SegmentFlags.NONE],
                    [30, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-7f-1": {
            "flags": PathFlags.STEPS,
            "map": "3127-0",
            "segments": {
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
                    [14, 4, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [14, 5, SegmentFlags.NONE],
                    [15, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-7f-revisit-0": {
            "flags": PathFlags.STEPS,
            "map": "311E-0",
            "segments": {
                "base-0": [
                    [2, 21, SegmentFlags.START],
                    [7, 21, SegmentFlags.NONE],
                    [7, 12, SegmentFlags.NONE],
                    [10, 12, SegmentFlags.NONE],
                    [10, 4, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [10, 5, SegmentFlags.NONE],
                    [11, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-8f-0": {
            "flags": PathFlags.STEPS,
            "map": "3128-0",
            "segments": {
                "base-0": [
                    [29, 17, SegmentFlags.START],
                    [25, 17, SegmentFlags.NONE],
                    [25, 25, SegmentFlags.NONE],
                    [16, 25, SegmentFlags.NONE],
                    [16, 20, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [16, 24, SegmentFlags.NONE],
                    [17, 24, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-8f-1": {
            "flags": PathFlags.STEPS,
            "map": "3128-1",
            "segments": {
                "base-0": [
                    [16, 19, SegmentFlags.START],
                    [16, 25, SegmentFlags.NONE],
                    [28, 25, SegmentFlags.NONE],
                    [28, 17, SegmentFlags.NONE],
                    [29, 17, SegmentFlags.NONE],
                    [29, 16, SegmentFlags.END]
                ],
                "extra-1-0": [
                    [16, 20, SegmentFlags.NONE],
                    [17, 20, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-0": [
                    [29, 17, SegmentFlags.NONE],
                    [30, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-8f-revisit-0": {
            "flags": PathFlags.STEPS,
            "map": "311D-0",
            "segments": {
                "base-0": [
                    [6, 9, SegmentFlags.START],
                    [6, 21, SegmentFlags.NONE],
                    [2, 21, SegmentFlags.NONE],
                    [2, 20, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [2, 21, SegmentFlags.NONE],
                    [1, 21, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "tower-of-babil-b2f-0": {
            "flags": PathFlags.STEPS,
            "map": "30A8-0",
            "segments": {
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
                    [7, 19, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [7, 20, SegmentFlags.NONE],
                    [8, 20, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-b3f-0": {
            "flags": PathFlags.STEPS,
            "map": "30A9-0",
            "segments": {
                "base-0": [
                    [6, 20, SegmentFlags.START],
                    [6, 26, SegmentFlags.NONE],
                    [13, 26, SegmentFlags.NONE],
                    [13, 25, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [13, 26, SegmentFlags.NONE],
                    [14, 26, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-b3f-1": {
            "flags": PathFlags.STEPS,
            "map": "30A9-0",
            "segments": {
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
                    [24, 10, SegmentFlags.NONE],
                    [24, 7, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [24, 8, SegmentFlags.NONE],
                    [25, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-b4f-0": {
            "flags": PathFlags.STEPS,
            "map": "30AA-0",
            "segments": {
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
                    [3, 7, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [10, 16, SegmentFlags.NONE],
                    [11, 16, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-babil-b4f-1": {
            "flags": PathFlags.STEPS,
            "map": "30AA-0",
            "segments": {
                "base-0": [
                    [23, 8, SegmentFlags.START],
                    [20, 8, SegmentFlags.NONE],
                    [20, 7, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [20, 8, SegmentFlags.NONE],
                    [19, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "tower-of-babil-crystal-room-0": {
            "flags": PathFlags.STEPS,
            "map": "30AB-0",
            "segments": {
                "base-0": [
                    [16, 22, SegmentFlags.START],
                    [16, 20, SegmentFlags.END]
                ]
            }
        },
        "tower-of-babil-b5f-0": {
            "flags": PathFlags.STEPS,
            "map": "30AC-0",
            "segments": {
                "base-0": [
                    [22, 8, SegmentFlags.START],
                    [21, 8, SegmentFlags.NONE],
                    [21, 24, SegmentFlags.NONE],
                    [14, 24, SegmentFlags.NONE],
                    [14, 20, SegmentFlags.END]
                ],
                "base-1": [
                    [14, 17, SegmentFlags.START],
                    [14, 15, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [14, 24, SegmentFlags.NONE],
                    [13, 24, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ],
                "extra-2-1": [
                    [14, 17, SegmentFlags.NONE],
                    [15, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-zot-1f-0": {
            "flags": PathFlags.STEPS,
            "map": "3098-0",
            "segments": {
                "base-0": [
                    [15, 24, SegmentFlags.START],
                    [17, 24, SegmentFlags.NONE],
                    [17, 26, SegmentFlags.NONE],
                    [28, 26, SegmentFlags.NONE],
                    [28, 5, SegmentFlags.NONE],
                    [26, 5, SegmentFlags.NONE],
                    [26, 4, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [26, 5, SegmentFlags.NONE],
                    [26, 6, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-zot-2f-0": {
            "flags": PathFlags.STEPS,
            "map": "3099-0",
            "segments": {
                "base-0": [
                    [26, 5, SegmentFlags.START],
                    [26, 14, SegmentFlags.NONE],
                    [19, 14, SegmentFlags.NONE],
                    [19, 21, SegmentFlags.NONE],
                    [17, 21, SegmentFlags.NONE],
                    [17, 27, SegmentFlags.NONE],
                    [8, 27, SegmentFlags.NONE],
                    [8, 15, SegmentFlags.RETURN]
                ],
                "base-1": [
                    [8, 15, SegmentFlags.NONE],
                    [8, 20, SegmentFlags.NONE],
                    [2, 20, SegmentFlags.NONE],
                    [2, 13, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [8, 19, SegmentFlags.NONE],
                    [9, 19, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-1": [
                    [2, 18, SegmentFlags.NONE],
                    [1, 18, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "tower-of-zot-3f-0": {
            "flags": PathFlags.STEPS,
            "map": "309A-0",
            "segments": {
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
                    [2, 7, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [2, 8, SegmentFlags.NONE],
                    [1, 8, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "tower-of-zot-4f-0": {
            "flags": PathFlags.STEPS,
            "map": "309C-0",
            "segments": {
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
                    [24, 15, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [5, 5, SegmentFlags.NONE],
                    [6, 5, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-zot-5f-0": {
            "flags": PathFlags.STEPS,
            "map": "309D-0",
            "segments": {
                "base-0": [
                    [24, 14, SegmentFlags.START],
                    [25, 14, SegmentFlags.NONE],
                    [25, 22, SegmentFlags.NONE],
                    [19, 22, SegmentFlags.NONE],
                    [19, 19, SegmentFlags.NONE],
                    [15, 19, SegmentFlags.NONE],
                    [15, 17, SegmentFlags.END]
                ],
                "base-1": [
                    [15, 17, SegmentFlags.NONE],
                    [15, 15, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [15, 19, SegmentFlags.NONE],
                    [15, 20, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ],
                "extra-1-1": [
                    [15, 17, SegmentFlags.NONE],
                    [16, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-1": [
                    [15, 16, SegmentFlags.NONE],
                    [16, 16, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-zot-5f-1": {
            "flags": PathFlags.STEPS,
            "map": "309D-0",
            "segments": {
                "base-0": [
                    [24, 14, SegmentFlags.START],
                    [25, 14, SegmentFlags.NONE],
                    [25, 22, SegmentFlags.NONE],
                    [22, 22, SegmentFlags.NONE],
                    [22, 21, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [22, 22, SegmentFlags.NONE],
                    [22, 23, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "tower-of-zot-5f-2": {
            "flags": PathFlags.STEPS,
            "map": "309D-0",
            "segments": {
                "base-0": [
                    [22, 21, SegmentFlags.START],
                    [22, 22, SegmentFlags.NONE],
                    [19, 22, SegmentFlags.NONE],
                    [19, 19, SegmentFlags.NONE],
                    [15, 19, SegmentFlags.NONE],
                    [15, 17, SegmentFlags.END]
                ],
                "base-1": [
                    [15, 17, SegmentFlags.NONE],
                    [15, 15, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [15, 19, SegmentFlags.NONE],
                    [15, 20, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ],
                "extra-1-1": [
                    [15, 17, SegmentFlags.NONE],
                    [16, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ],
                "extra-2-1": [
                    [15, 16, SegmentFlags.NONE],
                    [16, 16, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-zot-6f-0": {
            "flags": PathFlags.STEPS,
            "map": "309E-0",
            "segments": {
                "base-0": [
                    [7, 16, SegmentFlags.START],
                    [10, 16, SegmentFlags.NONE],
                    [10, 10, SegmentFlags.NONE],
                    [7, 10, SegmentFlags.NONE],
                    [7, 9, SegmentFlags.END]
                ],
                "base-1": [
                    [7, 6, SegmentFlags.START],
                    [5, 6, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [10, 16, SegmentFlags.NONE],
                    [11, 16, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "tower-of-zot-7f-0": {
            "flags": PathFlags.STEPS,
            "map": "309F-0",
            "segments": {
                "base-0": [
                    [7, 9, SegmentFlags.START],
                    [7, 10, SegmentFlags.END]
                ]
            }
        },
        "town-of-monsters-0": {
            "flags": PathFlags.STEPS,
            "map": "313C-0",
            "segments": {
                "base-0": [
                    [28, 11, SegmentFlags.START],
                    [28, 12, SegmentFlags.RETURN],
                    [28, 11, SegmentFlags.END]
                ]
            }
        },
        "underworld-airship-0-0": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [32, 15, 32, 32],
            "segments": {
                "base-0": [
                    [48, 16, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [48, 46, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [48, 47, SegmentFlags.VEHICLE]
                ]
            }
        },
        "underworld-airship-0-1": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [48, 46, 32, 32],
            "segments": {
                "base-0": [
                    [48, 45, SegmentFlags.VEHICLE],
                    [48, 46, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [48, 62, SegmentFlags.VEHICLE],
                    [55, 62, SegmentFlags.VEHICLE],
                    [55, 76, SegmentFlags.VEHICLE],
                    [79, 76, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [80, 76, SegmentFlags.VEHICLE]
                ]
            }
        },
        "underworld-airship-1-0": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [38, 66, 32, 32],
            "segments": {
                "base-0": [
                    [70, 82, SegmentFlags.VEHICLE],
                    [69, 82, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [38, 82, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [37, 82, SegmentFlags.VEHICLE]
                ]
            }
        },
        "underworld-airship-2-0": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [96, 35, 32, 32],
            "segments": {
                "base-0": [
                    [112, 67, SegmentFlags.VEHICLE],
                    [112, 66, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [112, 35, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [112, 34, SegmentFlags.VEHICLE]
                ]
            }
        },
        "underworld-airship-2-1": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [96, 4, 32, 32],
            "segments": {
                "base-0": [
                    [112, 36, SegmentFlags.VEHICLE],
                    [112, 35, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [112, 17, SegmentFlags.END | SegmentFlags.VEHICLE]
                ]
            }
        },
        "underworld-airship-3-0": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [92, 9, 32, 32],
            "segments": {
                "base-0": [
                    [113, 16, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [106, 16, SegmentFlags.VEHICLE],
                    [106, 40, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [106, 41, SegmentFlags.VEHICLE]
                ]
            }
        },
        "underworld-airship-3-1": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [92, 40, 32, 32],
            "segments": {
                "base-0": [
                    [106, 39, SegmentFlags.VEHICLE],
                    [106, 40, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [106, 71, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [106, 72, SegmentFlags.VEHICLE]
                ]
            }
        },
        "underworld-airship-3-2": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [92, 71, 32, 32],
            "segments": {
                "base-0": [
                    [106, 70, SegmentFlags.VEHICLE],
                    [106, 71, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [106, 102, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [106, 103, SegmentFlags.VEHICLE]
                ]
            }
        },
        "underworld-airship-4-0": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [96, 63, 32, 32],
            "segments": {
                "base-0": [
                    [112, 95, SegmentFlags.VEHICLE],
                    [112, 94, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [112, 63, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [112, 62, SegmentFlags.VEHICLE]
                ]
            }
        },
        "underworld-airship-4-1": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [96, 32, 32, 32],
            "segments": {
                "base-0": [
                    [112, 64, SegmentFlags.VEHICLE],
                    [112, 63, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [112, 32, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [112, 31, SegmentFlags.VEHICLE]
                ]
            }
        },
        "underworld-airship-4-2": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [96, 1, 32, 32],
            "segments": {
                "base-0": [
                    [112, 33, SegmentFlags.VEHICLE],
                    [112, 32, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [112, 17, SegmentFlags.END | SegmentFlags.VEHICLE]
                ]
            }
        },
        "underworld-castle-of-dwarves-0": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [85, 65, 32, 32],
            "segments": {
                "base-0": [
                    [102, 82, SegmentFlags.START],
                    [100, 82, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [102, 82, SegmentFlags.NONE],
                    [102, 81, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "underworld-castle-of-dwarves-1": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [60, 64, 32, 32],
            "segments": {
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
                    [59, 76, SegmentFlags.NONE]
                ]
            }
        },
        "underworld-castle-of-dwarves-2": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [38, 45, 32, 32],
            "segments": {
                "base-0": [
                    [70, 76, SegmentFlags.NONE],
                    [60, 76, SegmentFlags.END],
                    [54, 76, SegmentFlags.NONE],
                    [54, 53, SegmentFlags.NONE],
                    [48, 53, SegmentFlags.NONE],
                    [48, 45, SegmentFlags.END],
                    [48, 44, SegmentFlags.NONE]
                ]
            }
        },
        "underworld-castle-of-dwarves-3": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [35, 14, 32, 32],
            "segments": {
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
                    [49, 15, SegmentFlags.END]
                ],
                "extra-2-0": [
                    [49, 16, SegmentFlags.NONE],
                    [49, 17, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "underworld-castle-of-dwarves-4": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [72, 63, 32, 32],
            "segments": {
                "base-0": [
                    [71, 76, SegmentFlags.VEHICLE],
                    [79, 76, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [86, 76, SegmentFlags.VEHICLE],
                    [86, 82, SegmentFlags.VEHICLE],
                    [98, 82, SegmentFlags.VEHICLE],
                    [99, 82, SegmentFlags.START | SegmentFlags.END]
                ],
                "extra-2-0": [
                    [98, 82, SegmentFlags.NONE],
                    [98, 83, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "underworld-castle-of-dwarves-5": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [69, 66, 32, 32],
            "segments": {
                "base-0": [
                    [99, 82, SegmentFlags.START],
                    [98, 82, SegmentFlags.NONE],
                    [69, 82, SegmentFlags.START | SegmentFlags.END | SegmentFlags.VEHICLE],
                    [68, 82, SegmentFlags.VEHICLE]
                ],
                "extra-2-0": [
                    [98, 82, SegmentFlags.NONE],
                    [98, 81, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "underworld-castle-of-dwarves-6": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [74, 66, 32, 32],
            "segments": {
                "base-0": [
                    [73, 83, SegmentFlags.VEHICLE],
                    [74, 83, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [100, 83, SegmentFlags.VEHICLE],
                    [100, 82, SegmentFlags.START | SegmentFlags.END]
                ]
            }
        },
        "underworld-castle-of-dwarves-7": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [90, 66, 32, 32],
            "segments": {
                "base-0": [
                    [100, 82, SegmentFlags.START],
                    [100, 83, SegmentFlags.NONE],
                    [112, 83, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [112, 66, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [112, 65, SegmentFlags.VEHICLE]
                ],
                "extra-2-0": [
                    [100, 83, SegmentFlags.NONE],
                    [99, 83, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
                ]
            }
        },
        "underworld-kokkol-0": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [92, 96, 32, 32],
            "segments": {
                "base-0": [
                    [106, 95, SegmentFlags.VEHICLE],
                    [106, 102, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [106, 122, SegmentFlags.VEHICLE],
                    [104, 122, SegmentFlags.VEHICLE],
                    [104, 123, SegmentFlags.START | SegmentFlags.END]
                ],
                "extra-2-0": [
                    [104, 122, SegmentFlags.NONE],
                    [104, 121, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "underworld-kokkol-1": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [96, 94, 32, 32],
            "segments": {
                "base-0": [
                    [104, 123, SegmentFlags.START],
                    [104, 122, SegmentFlags.NONE],
                    [112, 122, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [112, 94, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [112, 93, SegmentFlags.VEHICLE]
                ]
            }
        },
        "underworld-sealed-cave-0": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [11, 68, 32, 32],
            "segments": {
                "base-0": [
                    [43, 82, SegmentFlags.VEHICLE],
                    [38, 82, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [29, 82, SegmentFlags.VEHICLE],
                    [29, 87, SegmentFlags.VEHICLE],
                    [27, 87, SegmentFlags.VEHICLE],
                    [27, 86, SegmentFlags.START | SegmentFlags.END]
                ]
            }
        },
        "underworld-sealed-cave-1": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [20, 82, 32, 32],
            "segments": {
                "base-0": [
                    [27, 86, SegmentFlags.START],
                    [27, 87, SegmentFlags.NONE],
                    [27, 110, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [46, 110, SegmentFlags.VEHICLE],
                    [46, 109, SegmentFlags.START | SegmentFlags.END]
                ],
                "extra-2-0": [
                    [46, 110, SegmentFlags.NONE],
                    [47, 110, SegmentFlags.RETURN | SegmentFlags.ANNOTATE]
                ]
            }
        },
        "underworld-sealed-cave-1-rosa": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [38, 80, 32, 32],
            "segments": {
                "base-0": [
                    [70, 82, SegmentFlags.VEHICLE],
                    [69, 82, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [48, 82, SegmentFlags.VEHICLE],
                    [48, 110, SegmentFlags.VEHICLE],
                    [46, 110, SegmentFlags.VEHICLE],
                    [46, 109, SegmentFlags.START | SegmentFlags.END]
                ]
            }
        },
        "underworld-sealed-cave-2": {
            "flags": PathFlags.STEPS,
            "map": "1000-0",
            "mapRange": [43, 80, 32, 32],
            "segments": {
                "base-0": [
                    [46, 109, SegmentFlags.START],
                    [46, 110, SegmentFlags.NONE],
                    [50, 110, SegmentFlags.START | SegmentFlags.VEHICLE],
                    [50, 83, SegmentFlags.VEHICLE],
                    [74, 83, SegmentFlags.END | SegmentFlags.VEHICLE],
                    [75, 83, SegmentFlags.VEHICLE]
                ],
                "extra-2-0": [
                    [46, 110, SegmentFlags.NONE],
                    [45, 110, SegmentFlags.RETURN | SegmentFlags.ANNOTATE | SegmentFlags.VERTICAL]
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
            "flags": PathFlags.STEPS | PathFlags.SINGLE,
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

                var testValue = 224;
                var maxValue = 256;

                if (data.paths[path].map == "2000-0") {
                    testValue = 32;
                    maxValue = 64;
                }

                var both = true;

                if (data.paths[path].mapRange[0] > testValue) {
                    ctx.drawImage(img, 0, data.paths[path].mapRange[1] * 16, data.paths[path].mapRange[2] * 16, data.paths[path].mapRange[3] * 16, (maxValue - data.paths[path].mapRange[0]) * 16, 0, data.paths[path].mapRange[2] * 16, data.paths[path].mapRange[3] * 16);
                } else {
                    both = false;
                }

                if (data.paths[path].mapRange[1] > testValue) {
                    ctx.drawImage(img, data.paths[path].mapRange[0] * 16, 0, data.paths[path].mapRange[2] * 16, data.paths[path].mapRange[3] * 16, 0, (maxValue - data.paths[path].mapRange[1]) * 16, data.paths[path].mapRange[2] * 16, data.paths[path].mapRange[3] * 16);
                } else {
                    both = false;
                }

                if (both) {
                    ctx.drawImage(img, 0, 0, data.paths[path].mapRange[2] * 16, data.paths[path].mapRange[3] * 16, (maxValue - data.paths[path].mapRange[0]) * 16, (maxValue - data.paths[path].mapRange[1]) * 16, data.paths[path].mapRange[2] * 16, data.paths[path].mapRange[3] * 16);
                }
            } else {
                ctx.drawImage(img, 0, 0);
            }

            var offScreenCanvas = document.createElement("canvas");
            offScreenCanvas.width = canvas.width;
            offScreenCanvas.height = canvas.height;

            var offScreenCtx = offScreenCanvas.getContext("2d");

            drawSegments(offScreenCtx, path, route, vars, activeVars);

            ctx.drawImage(offScreenCanvas, 0, 0);
        };

        var drawOverlay = document.getElementById("option-overlay").checked;

        img.src = "/static/img/maps/" + (drawOverlay ? "composite" : "base") + "/" + data.paths[path].map + ".png";
    };

    var drawSegment = function(ctx, previous, current, xOffset, yOffset) {
        if ((current[2] & SegmentFlags.START) > 0) {
            ctx.fillRect(previous[0] * 16 - 3 + 8 + xOffset, previous[1] * 16 - 3 + 8 + yOffset, 6, 6);
        }

        var deltaX = current[0] - previous[0];
        var deltaY = current[1] - previous[1];

        if (deltaX > 0 && deltaX < 128) {
            ctx.fillRect(current[0] * 16 - 1 + 8 + xOffset, current[1] * 16 - 1 + 8 + yOffset, (previous[0] - current[0]) * 16, 2);
        } else if (deltaY > 0 && deltaY < 128) {
            ctx.fillRect(current[0] * 16 - 1 + 8 + xOffset, current[1] * 16 - 1 + 8 + yOffset, 2, (previous[1] - current[1]) * 16);
        } else if (deltaX > -128 && deltaX < 0) {
            ctx.fillRect(previous[0] * 16 + 1 + 8 + xOffset, previous[1] * 16 - 1 + 8 + yOffset, (current[0] - previous[0]) * 16, 2);
        } else if (deltaY > -128 && deltaY < 0) {
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

                if (fields[0] == "boundary") {
                    fillStyle = "#FFA500";
                }

                if (fields[0] == "extra" || fields[0] == "optional" || fields[0] == "alternate") {
                    fillStyle = "#00FF00";

                    if (vars && activeVars) {
                        for (let i = 0; i < activeVars.length; i++) {
                            var index = activeVars[i];
                            for (var j = 0; j < data.variables[route][index].length; j++) {
                                var varData = data.variableData[data.variables[route][index][j]];
                                var value = vars[index];

                                if (typeof value === "undefined") {
                                    value = 0;
                                }

                                if (varData.type == VariableFlags.EXTRA) {
                                    if (path in varData.paths) {
                                        if (varData.paths[path].index == fields[2]) {
                                            var specialIndex = getSpecial(varData, value);
                                            var delta = value - specialIndex;

                                            if (specialIndex > 0 && fields[0] == "optional" && parseInt(fields[1]) == varData.routes[specialIndex][path]) {
                                                draw = true;
                                            } else if (fields[0] == "extra" && fields[1] == "2" && delta - delta % 2 > 0) {
                                                draw = true;
                                            } else if (fields[0] == "extra" && fields[1] == "1" && (delta % 2 == 1 || (data.paths[path].flags & PathFlags.SINGLE) > 0)) {
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

                        if (fields[0] == "boundary") {
                            xOffset = xOffset - 4;
                        }

                        drawSegment(ctx, i > 0 ? segments[i-1] : segments[i], segments[i], xOffset, yOffset);

                        if ((segments[i][2] & SegmentFlags.ANNOTATE) > 0) {
                            var x = segments[i][0] * 16 + xOffset + 12;
                            var y = segments[i][1] * 16 + yOffset + 2;

                            if ((segments[i][2] & SegmentFlags.VERTICAL) > 0) {
                                x = segments[i][0] * 16 + xOffset + 10;
                                y = segments[i][1] * 16 + yOffset - 4;
                            }

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

    var getSpecial = function(varData, steps) {
        let maxEven = 0;
        let maxOdd = 0;

        Object.keys(varData.routes).forEach(
            (key) => {
                let varIndex = parseInt(key);

                if (varIndex <= steps) {
                    if (varIndex % 2 == 0) {
                        if (varIndex > maxEven) {
                            maxEven = varIndex;
                        }
                    } else {
                        if (varIndex > maxOdd) {
                            maxOdd = varIndex;
                        }
                    }
                }
            }
        );

        if (steps % 2 == 0) {
            return maxEven;
        } else {
            return maxOdd;
        }
    };

    var drawMaps = function(parent, route, vars, battles, repaint) {
        var drawAll = document.getElementById("option-show-all").checked;
        var container = document.createDocumentFragment();

        if (Object.keys(vars).length == 0 && !drawAll) {
            parent.innerHTML = '<div class="bs-callout bs-callout-danger"><span class="fas fa-exclamation-triangle"></span><h4>No Tutorial</h4><p>There are no extra steps to take on this route. Unfortunately, this means you don\'t get much of a tutorial unless you click the <em>Show All Maps</em> button.</p></div>';
            return;
        }

        if (repaint) {
            parent.innerHTML = "";
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
                                if (varData.type == VariableFlags.CHOICE && pathData.enabled || varData.type == VariableFlags.EXTRA && value > 0 || data.paths[path].description in battles) {
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
                var cancelPath = true;

                if (drawAll) {
                    cancelPath = false;
                }

                if (!canvas) {
                    let row = document.createElement("div");
                    caption = document.createElement("div");
                    let canvas_container = document.createElement("div");

                    row.className = "row align-items-center";
                    caption.className = "col";
                    canvas_container.className = "col";

                    canvas = document.createElement("canvas");

                    canvas.id = canvas_id;
                    canvas.width = 512;
                    canvas.height = 512;

                    caption.id = canvas_id + "-caption";

                    if ((data.paths[path].flags & PathFlags.STEPS) == 0) {
                        caption.innerHTML += "<p><em>Steps on this map do not matter.</em></p>";
                    }

                    var yellow = (data.paths[path].flags & PathFlags.YELLOW_CHOCOBO) > 0;
                    var black = (data.paths[path].flags & PathFlags.BLACK_CHOCOBO) > 0;

                    if (black && yellow) {
                        caption.innerHTML += "<p>Leave by picking up a <strong>yellow or black</strong> chocobo.</p>";
                    } else if (yellow) {
                        caption.innerHTML += "<p>Leave by picking up a <strong>yellow</strong> chocobo.</p>";
                    } else if (black) {
                        caption.innerHTML += "<p>Leave by picking up a <strong>black</strong> chocobo.</p>";
                    }

                    if ((data.paths[path].flags & PathFlags.HUMMINGWAY) > 0) {
                        caption.innerHTML += "<p>Track down the shop Hummingway as pointed to by the arrow, and then leave, making sure to take a total of 16 steps, plus any extras below.</p>";
                    }

                    if (path in activeMaps) {
                        caption.innerHTML += '<dl class="dl">';

                        for (var j = 0; j < activeMaps[path].length; j++) {
                            var index = activeMaps[path][j];
                            for (var k = 0; k < data.variables[route][index].length; k++) {
                                var varData = data.variableData[data.variables[route][index][k]];
                                var value = vars[index];

                                if (typeof value === "undefined") {
                                    value = 0;
                                }

                                if (varData.type == VariableFlags.EXTRA) {
                                    var extraEven = false;
                                    var extraOdd = false;

                                    for (const key of Object.keys(data.paths[path].segments)) {
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
                                }

                                if (varData) {
                                    if (varData.type == VariableFlags.EXTRA) {
                                        var specialIndex = getSpecial(varData, value);
                                        var delta = value - specialIndex;

                                        if (specialIndex > 0) {
                                            value = varData.routes[specialIndex][path];

                                            if (extraEven) {
                                                value += delta - delta % 2;
                                            }

                                            if (extraOdd) {
                                                value += delta % 2;
                                            }
                                        } else {
                                            if (!extraEven && (data.paths[path].flags & PathFlags.SINGLE) == 0) {
                                                value = value % 2;
                                            }

                                            if (!extraOdd) {
                                                value = value - value % 2;
                                            }
                                        }

                                        if (value > 0) {
                                            caption.innerHTML += "<dt>" + varData.paths[path].location + "</dt><dd>Take " + value + " extra step" + (value > 1 ? "s" : "") + varData.paths[path].disambiguation + ".</dd>";
                                            cancelPath = false;
                                        }
                                    } else if (varData.type == VariableFlags.CHOICE) {
                                        if (path in varData.paths[value]) {
                                            caption.innerHTML += "<dt>" + varData.paths[value][path].location + "</dt><dd>" + varData.paths[value][path].instruction + ".</dd>";
                                            cancelPath = false;
                                        }
                                    }
                                }
                            }
                        }

                        caption.innerHTML += "</dl>";
                    }

                    if (data.paths[path].description in battles) {
                        let battleText = "<h5>Important Battles</h5><ul>";

                        for (const [step, style, formation] of battles[data.paths[path].description]) {
                            battleText += '<li class="' + style + '">Step ' + step + ": " + formation + "</li>";
                        }

                        battleText += "</ul>";

                        caption.innerHTML += battleText;
                        cancelPath = false;
                    }

                    if (!cancelPath) {
                        canvas_container.appendChild(canvas);
                        row.appendChild(canvas_container);
                        row.appendChild(caption);
                        container.appendChild(row);
                    }
                } else {
                    cancelPath = false;
                }

                if (!cancelPath) {
                    drawPath(canvas, path, route, vars, activeMaps[path]);
                }
            }
        }

        parent.appendChild(container);
    };

    var printSummary = function(target, route, vars, battles) {
        target.innerHTML += '<div class="bs-callout bs-callout-info"><span class="fas fa-info-circle"></span><h4>Information</h4><p>This summary should include all critical information needed to follow the route. The encounter information might be a little useless if it refers to a map you visit multiple times. This is a known issue that may or may not ever be fixed. If you have any other problems, please contact me.</p></div>';
        target.innerHTML += "<h3>Instructions</h3>";

        if (Object.keys(vars).length == 0) {
            target.innerHTML = '<div class="bs-callout bs-callout-success"><span class="fas fa-thumbs-up"></span><h4>Easy!</h4><p>There are no extra steps to take!</p></div>';
        } else {
            let list = "<ul>";

            var disabledPaths = {};

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

                                if (value in varData.descriptions) {
                                    vars[key] = value;
                                }
                            }

                            Object.entries(entries).forEach(
                                ([path, pathData]) => {
                                    if (varData.type == VariableFlags.CHOICE && !pathData.enabled) {
                                        disabledPaths[path] = true;
                                    }
                                }
                            );
                        }
                    }
                }
            );

            Object.entries(data.variables[route]).forEach(
                ([index, varKeys]) => {
                    if (index in vars) {
                        var value = vars[index];

                        for (var k = 0; k < varKeys.length; k++) {
                            var varKey = varKeys[k];
                            var varData = data.variableData[varKey];

                            if (varData && !disabledPaths[Object.keys(varData.paths)[0]]) {
                                var output = "";
                                var output_class = "";

                                if (varData.type == VariableFlags.EXTRA) {
                                    var description = varData.description;
                                    let totalSteps = "";

                                    if (!description) {
                                        var path = varData.paths[Object.keys(varData.paths)[0]];
                                        description = path.location + path.disambiguation;
                                    }

                                    if (varData.minSteps) {
                                        totalSteps = " (" + (varData.minSteps + value) + " total extra step" + (varData.minSteps + value == 1 ? "" : "s") + ")";
                                    }

                                    output_class = "text-primary";
                                    output = "Take " + value + " extra step" + (value == 1 ? "" : "s") + totalSteps + " in " + description + ".";
                                } else if (varData.type == VariableFlags.CHOICE) {
                                    output_class = "text-success";
                                    output = varData.descriptions[value];
                                }

                                list += '<li class ="' + output_class + '">' + output + "</li>";
                            }
                        }
                    }
                }
            );

            list += "</ul>";
            target.innerHTML += list;
        }

        if (Object.keys(battles).length > 0) {
            target.innerHTML += "<h3>Important Battles</h3>";
            let list = "";

            for (const [room, data] of Object.entries(battles)) {
                list += "<h4>" + room + "</h4>";

                list += "<ul>";

                for (const [step, style, formation] of data) {
                    list += '<li class="' + style + '">Step ' + step + ": " + formation + "</li>";
                }

                list += "</ul>";
            }

            target.innerHTML += list;
        }
    };

    /*
	 * Public Definition
	 */

    return {
        drawMaps: drawMaps,
        printSummary: printSummary
    };
}();
