/*
 * Global Variables
 */

var com = com || {};
com.aexoden = com.aexoden || {};
com.aexoden.ff4 = com.aexoden.ff4 || {};

/*
 * Module Definition
 */

com.aexoden.ff4.treasure = function()
{
	/*
	 * Constants
	 */

    /*
     * Data
     */

	MAPS = {
		"0000": "Overworld (Baron)",
		"0001": "Overworld (Mist)",
		"0002": "Overworld (Kaipo)",
		"0003": "Overworld (Damcyan)",
		"0004": "Overworld (Fabul)",
		"0005": "Overworld (Mysidia)",
		"0006": "Overworld (Mt.Ordeals)",
		"0007": "Overworld (Toroia)",
		"0008": "Overworld (Chocobo Island)",
		"0009": "Overworld (West Baron Peninsula)",
		"000A": "Overworld (Eblan)",
		"1000": "Underworld (Castle of Dwarves)",
		"1001": "Underworld (Tomra)",
		"1002": "Underworld (Three Step Peninsula)",
		"2000": "Lunar Overworld",
		"3000": "Town of Baron",
		"3001": "Village Mist",
		"3002": "Kaipo",
		"3003": "Mysidia",
		"3004": "Silvera",
		"3005": "Town of Toroia",
		"3006": "Agart",
		"3007": "Town of Toroia Inn",
		"3008": "Town of Toroia Weapon Shop",
		"3009": "Town of Toroia Armor Shop",
		"300A": "Town of Toroia Item Shop",
		"300B": "Town of Baron Inn",
		"300C": "Town of Baron Weapon Shop",
		"300D": "Town of Baron House (Cid)",
		"300E": "Town of Baron House (Rosa)",
		"300F": "Village Mist House",
		"3010": "Kaipo Inn",
		"3011": "Kaipo Cafe",
		"3012": "Kaipo House",
		"3013": "Mysidia Cafe",
		"3014": "Mysidia Inn",
		"3015": "Mt.Ordeals Tomb",
		"3016": "Mysidia House of Wishes",
		"3017": "Mysidia Room of Wishes",
		"3018": "Town of Toroia Cafe 1F",
		"3019": "Town of Toroia Cafe 2F",
		"301A": "Town of Toroia Cafe Saloon KING",
		"301C": "Town of Toroia Black Chocobo Farm",
		"301D": "Town of Toroia Black Chocobo Farm Basement",
		"301E": "Agart Astro Tower",
		"301F": "Agart Astro Tower Observatory",
		"3020": "Agart Inn",
		"3021": "Chocobo's Village",
		"3024": "Castle Baron",
		"3025": "Damcyan",
		"3026": "Fabul",
		"3027": "Toroian Castle",
		"3028": "Eblan",
		"302A": "Castle Baron 1F",
		"302B": "Castle Baron 2F",
		"302C": "Castle Baron King's Room",
		"302D": "Castle Baron Left Passage",
		"302E": "Castle Baron Right Passage",
		"302F": "Castle Baron Dungeon Antechamber",
		"3030": "Castle Baron Dungeon",
		"3031": "Castle Baron Infirmary",
		"3032": "Castle Baron Left Tower 1F",
		"3033": "Castle Baron Left Tower 2F",
		"3034": "Castle Baron Left Tower Room",
		"3035": "Castle Baron Right Tower 1F",
		"3036": "Castle Baron Right Tower 2F",
		"3037": "Castle Baron Right Tower 3F",
		"3038": "Castle Baron Right Tower B1F",
		"3039": "Castle Baron Right Tower B2F",
		"303A": "Old Water-way",
		"303B": "Castle Baron B3F",
		"303C": "Castle Baron B1F",
		"303D": "Castle Baron B1F Save Room",
		"303E": "Castle Baron B2F",
		"303F": "Damcyan 1F",
		"3040": "Damcyan 2F",
		"3041": "Damcyan 3F",
		"3042": "Damcyan Basement",
		"3043": "Damcyan B1F",
		"3044": "Old Water-way Antechamber",
		"3045": "Agart Weapon Shop",
		"3046": "Agart Armor Shop",
		"3047": "Fabul 1F",
		"3048": "Fabul 2F",
		"3049": "Fabul King's Room",
		"304A": "Fabul Crystal Room",
		"304B": "Fabul Weapons/Armors",
		"304C": "Fabul Inn",
		"304D": "Fabul Right Tower 1F",
		"304E": "Fabul Right Tower 2F",
		"304F": "Fabul Right Tower 3F",
		"3050": "Fabul Left Tower 1F",
		"3051": "Fabul Left Tower 2F",
		"3052": "Fabul Left Tower 3F",
		"3053": "Village Mist Clearing",
		"3054": "Watery Pass-South B2F Save Room",
		"3055": "Toroian Castle 1F",
		"3056": "Toroian Castle 2F",
		"3057": "Toroian Castle Crystal Room",
		"3058": "Toroian Castle Infirmary",
		"3059": "Toroian Castle B1F Antechamber",
		"305A": "Toroian Castle B1F Left",
		"305B": "Toroian Castle B1F Center",
		"305C": "Toroian Castle B1F Right",
		"305D": "Toroian Castle B2F",
		"305E": "Eblan 1F",
		"305F": "Eblan 2F",
		"3060": "Eblan King's Room",
		"3061": "Eblan Left Tower 1F",
		"3062": "Eblan Left Tower 2F",
		"3063": "Eblan Right Tower 1F",
		"3064": "Eblan Right Tower 2F",
		"3065": "Eblan Basement",
		"3066": "Castle Baron Black Magic Class",
		"3067": "Castle Baron White Magic Class",
		"3068": "Beach (outside Mysidia)",
		"306A": "Waterfalls Waterfall",
		"306C": "Misty Cave",
		"306F": "Watery Pass-South B1F",
		"3070": "Watery Pass-South B2F",
		"3071": "Watery Pass-South B3F",
		"3072": "Watery Pass-North B2F",
		"3073": "Watery Pass-North B1F",
		"3074": "Waterfalls B1F",
		"3075": "Waterfalls B2F",
		"3076": "Waterfalls Lake",
		"3077": "Antlion B1F",
		"3078": "Antlion B2F",
		"3079": "Antlion's Nest",
		"307A": "Antlion B1F Save Room",
		"307B": "Antlion B2F Treasure Room",
		"307C": "Black Background",
		"307E": "Mt.Hobs-West",
		"307F": "Mt.Hobs Summit",
		"3080": "Mt.Hobs-East",
		"3081": "Mt.Hobs-West Treasure Area",
		"3083": "Watery Pass-South B1F Treasure Room",
		"3084": "Mt.Ordeals",
		"3085": "Mt.Ordeals-3rd station",
		"3086": "Mt.Ordeals-7th station",
		"3087": "Mt.Ordeals Summit",
		"3088": "Mysidia Crystal Room",
		"3089": "Mysidia Serpent Road",
		"308A": "Castle Baron 3F",
		"308B": "Agart Well",
		"308C": "Cave Magnes B1F",
		"308D": "Cave Magnes B2F",
		"308E": "Cave Magnes B2F Treasure Room",
		"308F": "Cave Magnes B3F",
		"3090": "Cave Magnes B3F Treasure Room",
		"3091": "Cave Magnes B3F Passage",
		"3092": "Cave Magnes B3F Save Room",
		"3093": "Cave Magnes B4F",
		"3094": "Cave Magnes Crystal Room",
		"3096": "Watery Pass-South B2F Save Room Camp",
		"3097": "Town of Baron Serpent Road",
		"3098": "Tower of Zot 1F",
		"3099": "Tower of Zot 2F",
		"309A": "Tower of Zot 3F",
		"309B": "Falling Black Background",
		"309C": "Tower of Zot 4F",
		"309D": "Tower of Zot 5F",
		"309E": "Tower of Zot 6F",
		"309F": "Tower of Zot 7F",
		"30A0": "Grotto Adamant",
		"30A1": "Cave Magnes B4F Save Room",
		"30A2": "Tower of Zot 5F Save Room",
		"30A3": "Airship (Giant of Bab-il scene/Baron)",
		"30A4": "Airship (Giant of Bab-il scene/Mysidia)",
		"30A5": "Airship (Giant of Bab-il scene/Toroia)",
		"30A6": "Tower of Bab-il B3F Save Room",
		"30A7": "Tower of Bab-il 1F",
		"30A8": "Tower of Bab-il B2F",
		"30A9": "Tower of Bab-il B3F",
		"30AA": "Tower of Bab-il B4F",
		"30AB": "Tower of Bab-il Crystal Room",
		"30AC": "Tower of Bab-il B5F",
		"30AD": "Falling Cliff Background",
		"30B1": "Training Room 1F",
		"30B2": "Training Room 2F",
		"30B5": "Giant of Bab-il Mouth",
		"30B6": "Giant of Bab-il Neck",
		"30B7": "Giant of Bab-il Chest",
		"30B9": "Giant of Bab-il Stomach",
		"30BA": "Giant of Bab-il Passage",
		"30BC": "Giant of Bab-il Lung",
		"30BD": "Giant of Bab-il CPU",
		"30C0": "Airship (flying above Overworld)",
		"30C1": "Port of Fabul",
		"30C2": "Ship (at sea)",
		"30C3": "Airship (docked)",
		"30C4": "Two Airships (hovering above Overworld)",
		"30C6": "Airship (flying above Underworld)",
		"30C7": "Cave Eblana B1F",
		"30C8": "Cave Eblana B2F",
		"30C9": "Pass to Bab-il (south)",
		"30CA": "Pass to Bab-il (north)",
		"30CB": "Cave Eblana B2F Inn",
		"30CC": "Cave Eblana B2F Weapons/Armors",
		"30CD": "Pass to Bab-il (north) Save Room",
		"30CE": "Cave Eblana B2F Infirmary",
		"30CF": "Fabul Chocobo's Forest",
		"30D0": "Airship (hovering above Overworld near Baron)",
		"30D1": "Mt.Ordeals Chocobo's Forest",
		"30D2": "Baron Chocobo's Forest",
		"30D3": "Toroia Chocobo's Forest",
		"30D4": "Chocobo Island Chocobo's Forest",
		"30D5": "Castle Baron Hidden Passage",
		"30D6": "Airship (remodeling)",
		"30D7": "Airship (hovering above Overworld near Agart)",
		"30D9": "Airship (landed)",
		"30DA": "Mysidia Room of Wishes (final boss scene)",
		"30E0": "Village Mist Inn",
		"30E1": "Village Mist Weapon Shop",
		"30E2": "Village Mist Armor Shop",
		"30E3": "Kaipo Weapon Shop",
		"30E4": "Kaipo Armor Shop",
		"30E5": "Mysidia Weapon Shop",
		"30E6": "Mysidia Armor Shop",
		"30E7": "Mysidia Item Shop",
		"30E8": "Silvera Inn",
		"30E9": "Silvera Weapon Shop",
		"30EA": "Silvera Armor Shop",
		"30EB": "Silvera Item Shop",
		"30EC": "Town of Baron Item Shop",
		"30ED": "House of Wishes (ending)",
		"30EE": "Pond (ending)",
		"30EF": "Eblan King's Room (ending)",
		"30F0": "Town of Monsters King's Room (ending)",
		"30F1": "Damcyan 3F (ending)",
		"30F2": "Castle of Dwarves (ending)",
		"30F3": "Mt.Ordeals-7th station (ending)",
		"30F4": "Agart Astro Tower Observatory (ending)",
		"30F5": "Castle Baron Left Tower Room (ending)",
		"30F6": "Castle Baron King's Room (ending)",
		"30F7": "Fabul King's Room (ending)",
		"3100": "Kokkol, the Smith's",
		"3101": "Tomra",
		"3102": "Kokkol, the Smith's 1F",
		"3103": "Kokkol, the Smith's 2F",
		"3104": "Tomra Inn",
		"3105": "Tomra Weapons/Armors",
		"3106": "Tomra Treasure Room",
		"3107": "Castle of Dwarves",
		"3108": "Castle of Dwarves 1F",
		"3109": "Castle of Dwarves King's Room",
		"310A": "Castle of Dwarves B1F",
		"310B": "Castle of Dwarves B2F",
		"310D": "Castle of Dwarves Crystal Room",
		"310E": "Castle of Dwarves Right Tower 2F",
		"310F": "Castle of Dwarves Dwarf Base",
		"3110": "Castle of Dwarves Right Tower 3F",
		"3111": "Castle of Dwarves Left Tower 2F",
		"3112": "Castle of Dwarves Infirmary",
		"3113": "Castle of Dwarves Left Tower 3F",
		"3114": "Tower of Bab-il Save Room/Empty Room",
		"3115": "Tower of Bab-il 2F Treasure Room B (IceBrand)",
		"3116": "Tower of Bab-il 2F Treasure Room A (Blizzard)",
		"3117": "Tower of Bab-il 4F Treasure Room A (Ice Shield)",
		"3118": "Tower of Bab-il 4F Treasure Room B (Ice Armor)",
		"3119": "Castle of Dwarves Right Tower 5F",
		"311A": "Castle of Dwarves Left Tower 5F",
		"311B": "Castle of Dwarves 4F",
		"311D": "Tower of Bab-il 8F (revisit)",
		"311E": "Tower of Bab-il 7F (revisit)",
		"311F": "Tower of Bab-il 6F (revisit)",
		"3120": "Castle of Dwarves Cafe HOWDY!",
		"3121": "Tower of Bab-il 1F",
		"3122": "Tower of Bab-il 2F",
		"3123": "Tower of Bab-il 3F",
		"3124": "Tower of Bab-il 4F",
		"3125": "Tower of Bab-il 5F",
		"3126": "Tower of Bab-il 6F",
		"3127": "Tower of Bab-il 7F",
		"3128": "Tower of Bab-il 8F",
		"312C": "The Big Whale (Giant of Bab-il scene)",
		"312D": "Tower of Bab-il 5F Super Cannon",
		"312E": "Dwarf Tank",
		"312F": "The Big Whale",
		"3132": "Tomra Item Shop",
		"3136": "Land of Monsters B1F",
		"3137": "Land of Monsters B2F",
		"3138": "Land of Monsters B3F",
		"313A": "Land of Monsters B4F",
		"313B": "Land of Monsters Treasure Room",
		"313C": "Town of Monsters",
		"313D": "Town of Monsters Save Room",
		"313E": "Town of Monsters Library",
		"313F": "Town of Monsters Library Downstairs",
		"3140": "Town of Monsters King's Room",
		"3141": "Town of Monsters Weapon Shop",
		"3142": "Town of Monsters Armor Shop",
		"3143": "Town of Monsters Inn",
		"3144": "Sealed Cave",
		"3145": "Sylvan Cave B1F",
		"3146": "Sylvan Cave B2F",
		"3147": "Sylvan Cave B3F",
		"3148": "Sylvan Cave Treasure Room",
		"3149": "Sylvan House",
		"314A": "Sealed Cave B1F",
		"314B": "Sealed Cave B1F Treasure Room",
		"314C": "Sealed Cave B1F Passage",
		"314D": "Sealed Cave B2F",
		"314E": "Sealed Cave B2F Treasure Room C (Long/Ninja)",
		"314F": "Sealed Cave B2F Treasure Room B (various)",
		"3150": "Sealed Cave B2F Treasure Room A (Light)",
		"3151": "Sealed Cave B2F Passage",
		"3152": "Sealed Cave B3F",
		"3153": "Sealed Cave B3F Passage",
		"3154": "Sealed Cave B3F Treasure Room",
		"3155": "Sealed Cave B4F",
		"3156": "Sealed Cave B4F Save Room",
		"3157": "Sealed Cave B5F",
		"3158": "Sealed Cave Save Room/Empty Room",
		"3159": "Sealed Cave Crystal Room",
		"315A": "Cave Bahamut B1F",
		"315B": "Cave Bahamut B2F",
		"315C": "Cave Bahamut B3F",
		"3160": "Lunar's Lair 1F",
		"3161": "Lunar's Lair 2F",
		"3163": "Lunar Path (west)",
		"3164": "Lunar Path (east)",
		"3165": "Hummingway Cave",
		"3167": "Lunar Subterrane B1",
		"3168": "Lunar Subterrane B2",
		"3169": "Lunar Subterrane B3",
		"316A": "Lunar Subterrane B4",
		"316B": "Lunar Subterrane B5",
		"316C": "Lunar Subterrane B6",
		"316D": "Lunar Subterrane B7",
		"316E": "Lunar Core B1",
		"316F": "Lunar Core B2",
		"3170": "Lunar Core B3",
		"3171": "Lunar Core B4",
		"3172": "Lunar Core B5",
		"3173": "Lunar Subterrane B4 Treasure Room",
		"3174": "Lunar Subterrane B4 Passage",
		"3175": "Lunar Subterrane B5 Passage A",
		"3176": "Lunar Subterrane B5 Passage B",
		"3177": "Lunar Subterrane B5 Pink Puff Room",
		"3178": "Lunar Subterrane B5 Save Room",
		"3179": "Lunar Subterrane B6 Passage",
		"317A": "Lunar Subterrane B7 Treasure Room A (White)",
		"317B": "Lunar Subterrane B7 Save Room",
		"317C": "Lunar Subterrane B7 Treasure Room B (Ribbon)"
	}

	TREASURE = {
		"vanilla": {
			"0": [
				0,
				8,
				2
			],
			"1": [
				0,
				3,
				6
			],
			"2": [
				0,
				12,
				10
			],
			"3": [
				0,
				18,
				19
			],
			"4": [
				0,
				24,
				27
			],
			"5": [
				0,
				27,
				26
			],
			"6": [
				0,
				29,
				29
			],
			"7": [
				1,
				21,
				8
			],
			"8": [
				1,
				28,
				20
			],
			"9": [
				1,
				29,
				20
			],
			"10": [
				2,
				24,
				18
			],
			"11": [
				4,
				13,
				8
			],
			"12": [
				4,
				23,
				8
			],
			"13": [
				4,
				30,
				17
			],
			"14": [
				5,
				4,
				3
			],
			"15": [
				5,
				1,
				5
			],
			"16": [
				5,
				1,
				7
			],
			"17": [
				5,
				4,
				7
			],
			"18": [
				6,
				9,
				15
			],
			"19": [
				11,
				16,
				3
			],
			"20": [
				11,
				17,
				3
			],
			"21": [
				11,
				19,
				3
			],
			"22": [
				11,
				10,
				17
			],
			"23": [
				12,
				5,
				4
			],
			"24": [
				12,
				9,
				4
			],
			"25": [
				14,
				1,
				3
			],
			"26": [
				14,
				5,
				3
			],
			"27": [
				15,
				22,
				5
			],
			"28": [
				15,
				23,
				5
			],
			"29": [
				15,
				23,
				7
			],
			"30": [
				15,
				22,
				25
			],
			"31": [
				33,
				31,
				8
			],
			"32": [
				33,
				31,
				9
			],
			"33": [
				33,
				20,
				29
			],
			"34": [
				42,
				13,
				3
			],
			"35": [
				42,
				14,
				3
			],
			"36": [
				42,
				15,
				3
			],
			"37": [
				46,
				2,
				15
			],
			"38": [
				46,
				3,
				15
			],
			"39": [
				46,
				4,
				15
			],
			"40": [
				46,
				2,
				16
			],
			"41": [
				46,
				3,
				16
			],
			"42": [
				46,
				4,
				16
			],
			"43": [
				53,
				3,
				3
			],
			"44": [
				53,
				1,
				4
			],
			"45": [
				53,
				2,
				4
			],
			"46": [
				53,
				8,
				4
			],
			"47": [
				54,
				1,
				4
			],
			"48": [
				54,
				1,
				5
			],
			"50": [
				55,
				7,
				4
			],
			"51": [
				55,
				4,
				5
			],
			"52": [
				55,
				5,
				5
			],
			"53": [
				55,
				6,
				5
			],
			"54": [
				56,
				4,
				3
			],
			"55": [
				58,
				13,
				29
			],
			"56": [
				58,
				16,
				29
			],
			"57": [
				58,
				19,
				29
			],
			"58": [
				59,
				1,
				12
			],
			"59": [
				59,
				7,
				19
			],
			"60": [
				59,
				20,
				17
			],
			"61": [
				61,
				17,
				5
			],
			"62": [
				62,
				2,
				7
			],
			"63": [
				64,
				11,
				4
			],
			"64": [
				66,
				1,
				3
			],
			"65": [
				66,
				4,
				3
			],
			"66": [
				66,
				5,
				3
			],
			"67": [
				67,
				3,
				4
			],
			"68": [
				67,
				4,
				4
			],
			"69": [
				67,
				5,
				4
			],
			"70": [
				67,
				7,
				4
			],
			"71": [
				67,
				1,
				5
			],
			"72": [
				67,
				3,
				5
			],
			"73": [
				67,
				4,
				5
			],
			"74": [
				67,
				5,
				5
			],
			"75": [
				67,
				7,
				5
			],
			"76": [
				68,
				14,
				5
			],
			"77": [
				73,
				1,
				7
			],
			"78": [
				73,
				28,
				7
			],
			"79": [
				73,
				28,
				8
			],
			"80": [
				73,
				28,
				9
			],
			"81": [
				78,
				9,
				6
			],
			"82": [
				79,
				3,
				7
			],
			"83": [
				80,
				2,
				3
			],
			"84": [
				80,
				6,
				3
			],
			"85": [
				80,
				1,
				4
			],
			"86": [
				80,
				1,
				5
			],
			"87": [
				91,
				5,
				6
			],
			"88": [
				92,
				1,
				3
			],
			"89": [
				92,
				2,
				3
			],
			"90": [
				92,
				4,
				3
			],
			"91": [
				92,
				5,
				3
			],
			"92": [
				92,
				7,
				3
			],
			"93": [
				92,
				8,
				3
			],
			"94": [
				92,
				10,
				3
			],
			"95": [
				92,
				11,
				3
			],
			"96": [
				93,
				3,
				5
			],
			"97": [
				93,
				4,
				5
			],
			"98": [
				93,
				5,
				5
			],
			"99": [
				93,
				6,
				5
			],
			"100": [
				93,
				7,
				5
			],
			"101": [
				93,
				8,
				5
			],
			"102": [
				93,
				9,
				5
			],
			"103": [
				93,
				10,
				5
			],
			"104": [
				93,
				11,
				5
			],
			"105": [
				93,
				3,
				6
			],
			"106": [
				93,
				4,
				6
			],
			"107": [
				93,
				5,
				6
			],
			"108": [
				93,
				6,
				6
			],
			"109": [
				93,
				7,
				6
			],
			"110": [
				93,
				8,
				6
			],
			"111": [
				93,
				9,
				6
			],
			"112": [
				93,
				10,
				6
			],
			"113": [
				93,
				11,
				6
			],
			"114": [
				94,
				13,
				4
			],
			"115": [
				95,
				4,
				3
			],
			"116": [
				95,
				4,
				4
			],
			"117": [
				95,
				14,
				3
			],
			"118": [
				95,
				14,
				4
			],
			"119": [
				95,
				15,
				4
			],
			"120": [
				97,
				1,
				5
			],
			"121": [
				97,
				11,
				5
			],
			"122": [
				98,
				4,
				4
			],
			"123": [
				98,
				8,
				8
			],
			"124": [
				98,
				10,
				5
			],
			"125": [
				98,
				11,
				5
			],
			"126": [
				99,
				2,
				5
			],
			"127": [
				99,
				12,
				5
			],
			"128": [
				100,
				1,
				5
			],
			"129": [
				100,
				1,
				6
			],
			"130": [
				100,
				6,
				3
			],
			"131": [
				100,
				11,
				5
			],
			"132": [
				100,
				11,
				6
			],
			"133": [
				101,
				2,
				11
			],
			"134": [
				101,
				3,
				11
			],
			"135": [
				101,
				8,
				12
			],
			"136": [
				108,
				6,
				3
			],
			"137": [
				108,
				24,
				3
			],
			"138": [
				108,
				13,
				12
			],
			"139": [
				108,
				30,
				18
			],
			"140": [
				111,
				29,
				14
			],
			"141": [
				111,
				22,
				16
			],
			"142": [
				111,
				4,
				28
			],
			"143": [
				111,
				13,
				14
			],
			"144": [
				111,
				25,
				3
			],
			"145": [
				112,
				21,
				5
			],
			"146": [
				112,
				9,
				18
			],
			"147": [
				112,
				13,
				3
			],
			"148": [
				113,
				22,
				24
			],
			"149": [
				113,
				12,
				24
			],
			"150": [
				114,
				5,
				17
			],
			"151": [
				114,
				19,
				22
			],
			"152": [
				115,
				3,
				15
			],
			"153": [
				115,
				5,
				10
			],
			"154": [
				115,
				17,
				17
			],
			"155": [
				115,
				20,
				20
			],
			"156": [
				117,
				12,
				27
			],
			"157": [
				117,
				16,
				27
			],
			"158": [
				118,
				25,
				22
			],
			"159": [
				118,
				24,
				23
			],
			"160": [
				119,
				3,
				7
			],
			"161": [
				119,
				10,
				4
			],
			"162": [
				119,
				2,
				23
			],
			"163": [
				119,
				6,
				17
			],
			"164": [
				119,
				27,
				4
			],
			"165": [
				119,
				23,
				9
			],
			"166": [
				120,
				23,
				4
			],
			"167": [
				120,
				29,
				23
			],
			"168": [
				120,
				8,
				5
			],
			"169": [
				122,
				8,
				7
			],
			"170": [
				122,
				6,
				3
			],
			"171": [
				122,
				1,
				4
			],
			"172": [
				123,
				3,
				4
			],
			"173": [
				127,
				20,
				24
			],
			"174": [
				129,
				11,
				19
			],
			"175": [
				129,
				16,
				17
			],
			"176": [
				129,
				18,
				18
			],
			"177": [
				129,
				22,
				18
			],
			"178": [
				131,
				1,
				7
			],
			"179": [
				131,
				2,
				8
			],
			"180": [
				131,
				7,
				6
			],
			"181": [
				132,
				23,
				19
			],
			"182": [
				132,
				22,
				15
			],
			"183": [
				134,
				9,
				17
			],
			"184": [
				134,
				16,
				13
			],
			"185": [
				140,
				27,
				7
			],
			"186": [
				140,
				2,
				20
			],
			"187": [
				141,
				4,
				19
			],
			"188": [
				142,
				2,
				5
			],
			"189": [
				142,
				11,
				7
			],
			"190": [
				144,
				4,
				6
			],
			"191": [
				144,
				8,
				5
			],
			"192": [
				144,
				12,
				6
			],
			"193": [
				145,
				14,
				5
			],
			"194": [
				147,
				7,
				8
			],
			"195": [
				152,
				3,
				4
			],
			"196": [
				153,
				7,
				15
			],
			"197": [
				157,
				11,
				9
			],
			"198": [
				157,
				11,
				10
			],
			"199": [
				157,
				10,
				23
			],
			"200": [
				157,
				19,
				14
			],
			"203": [
				167,
				18,
				4
			],
			"204": [
				167,
				26,
				12
			],
			"205": [
				168,
				14,
				20
			],
			"206": [
				169,
				20,
				21
			],
			"207": [
				170,
				12,
				18
			],
			"208": [
				172,
				5,
				15
			],
			"214": [
				183,
				9,
				8
			],
			"215": [
				183,
				11,
				19
			],
			"216": [
				183,
				21,
				20
			],
			"217": [
				183,
				27,
				6
			],
			"218": [
				183,
				14,
				18
			],
			"219": [
				185,
				19,
				9
			],
			"220": [
				185,
				26,
				6
			],
			"221": [
				186,
				14,
				21
			],
			"222": [
				199,
				18,
				4
			],
			"223": [
				199,
				22,
				3
			],
			"224": [
				199,
				26,
				25
			],
			"225": [
				201,
				8,
				28
			],
			"226": [
				201,
				4,
				10
			],
			"227": [
				201,
				12,
				11
			],
			"228": [
				201,
				16,
				11
			],
			"229": [
				201,
				16,
				12
			],
			"230": [
				201,
				20,
				12
			],
			"231": [
				201,
				20,
				14
			],
			"232": [
				201,
				10,
				26
			],
			"233": [
				201,
				15,
				28
			],
			"234": [
				201,
				27,
				27
			],
			"235": [
				201,
				28,
				27
			],
			"236": [
				201,
				29,
				27
			],
			"237": [
				202,
				14,
				8
			],
			"238": [
				202,
				17,
				9
			],
			"239": [
				202,
				18,
				16
			],
			"240": [
				202,
				18,
				22
			],
			"241": [
				205,
				17,
				5
			],
			"242": [
				206,
				2,
				5
			],
			"243": [
				206,
				14,
				7
			],
			"244": [
				207,
				9,
				7
			],
			"245": [
				209,
				9,
				7
			],
			"246": [
				210,
				9,
				7
			],
			"247": [
				211,
				9,
				7
			],
			"248": [
				212,
				9,
				7
			],
			"256": [
				258,
				10,
				3
			],
			"257": [
				258,
				2,
				10
			],
			"258": [
				258,
				25,
				5
			],
			"259": [
				259,
				5,
				3
			],
			"260": [
				262,
				3,
				5
			],
			"261": [
				262,
				3,
				6
			],
			"262": [
				262,
				4,
				6
			],
			"263": [
				262,
				10,
				4
			],
			"264": [
				262,
				11,
				5
			],
			"265": [
				262,
				11,
				6
			],
			"266": [
				266,
				23,
				4
			],
			"267": [
				266,
				24,
				3
			],
			"268": [
				266,
				26,
				4
			],
			"269": [
				267,
				27,
				18
			],
			"270": [
				267,
				28,
				18
			],
			"271": [
				267,
				29,
				19
			],
			"272": [
				272,
				6,
				3
			],
			"273": [
				273,
				8,
				3
			],
			"274": [
				277,
				5,
				4
			],
			"275": [
				278,
				5,
				4
			],
			"276": [
				279,
				5,
				4
			],
			"277": [
				280,
				5,
				4
			],
			"278": [
				281,
				6,
				3
			],
			"279": [
				281,
				1,
				7
			],
			"280": [
				281,
				11,
				7
			],
			"281": [
				281,
				6,
				11
			],
			"282": [
				282,
				6,
				3
			],
			"283": [
				282,
				1,
				7
			],
			"284": [
				282,
				11,
				7
			],
			"285": [
				282,
				6,
				11
			],
			"286": [
				283,
				8,
				10
			],
			"287": [
				283,
				21,
				24
			],
			"288": [
				285,
				6,
				3
			],
			"290": [
				287,
				28,
				11
			],
			"291": [
				289,
				5,
				10
			],
			"292": [
				289,
				6,
				20
			],
			"293": [
				289,
				26,
				12
			],
			"294": [
				290,
				8,
				7
			],
			"295": [
				291,
				13,
				11
			],
			"296": [
				291,
				26,
				19
			],
			"297": [
				291,
				15,
				25
			],
			"298": [
				292,
				16,
				19
			],
			"299": [
				292,
				29,
				23
			],
			"300": [
				293,
				6,
				12
			],
			"301": [
				293,
				29,
				22
			],
			"303": [
				295,
				16,
				24
			],
			"305": [
				310,
				8,
				6
			],
			"306": [
				310,
				26,
				6
			],
			"307": [
				310,
				25,
				21
			],
			"308": [
				311,
				9,
				5
			],
			"309": [
				311,
				24,
				25
			],
			"310": [
				312,
				18,
				6
			],
			"311": [
				312,
				3,
				21
			],
			"312": [
				312,
				4,
				21
			],
			"313": [
				312,
				5,
				21
			],
			"314": [
				312,
				11,
				23
			],
			"315": [
				312,
				25,
				21
			],
			"317": [
				314,
				6,
				3
			],
			"318": [
				314,
				5,
				10
			],
			"319": [
				314,
				20,
				8
			],
			"320": [
				314,
				25,
				12
			],
			"321": [
				314,
				18,
				21
			],
			"322": [
				315,
				15,
				9
			],
			"323": [
				315,
				15,
				10
			],
			"324": [
				315,
				16,
				9
			],
			"325": [
				315,
				16,
				10
			],
			"326": [
				317,
				1,
				6
			],
			"327": [
				317,
				9,
				6
			],
			"328": [
				325,
				5,
				4
			],
			"329": [
				325,
				6,
				4
			],
			"330": [
				325,
				7,
				4
			],
			"331": [
				325,
				10,
				5
			],
			"332": [
				325,
				10,
				6
			],
			"333": [
				325,
				3,
				18
			],
			"334": [
				325,
				4,
				18
			],
			"335": [
				325,
				28,
				5
			],
			"336": [
				325,
				28,
				6
			],
			"337": [
				325,
				29,
				5
			],
			"338": [
				326,
				29,
				29
			],
			"339": [
				326,
				23,
				29
			],
			"340": [
				326,
				29,
				28
			],
			"341": [
				326,
				25,
				28
			],
			"342": [
				326,
				23,
				27
			],
			"343": [
				326,
				23,
				13
			],
			"344": [
				326,
				25,
				13
			],
			"345": [
				326,
				23,
				15
			],
			"346": [
				326,
				25,
				15
			],
			"347": [
				326,
				11,
				6
			],
			"348": [
				327,
				10,
				4
			],
			"349": [
				327,
				11,
				4
			],
			"350": [
				327,
				11,
				5
			],
			"351": [
				327,
				1,
				9
			],
			"352": [
				328,
				7,
				5
			],
			"353": [
				328,
				9,
				5
			],
			"354": [
				328,
				11,
				5
			],
			"355": [
				328,
				7,
				7
			],
			"356": [
				328,
				9,
				7
			],
			"357": [
				328,
				11,
				7
			],
			"358": [
				329,
				13,
				3
			],
			"359": [
				329,
				13,
				5
			],
			"360": [
				330,
				18,
				28
			],
			"361": [
				331,
				2,
				5
			],
			"362": [
				331,
				14,
				5
			],
			"363": [
				332,
				2,
				6
			],
			"364": [
				332,
				16,
				7
			],
			"365": [
				333,
				30,
				19
			],
			"366": [
				333,
				29,
				26
			],
			"367": [
				334,
				3,
				5
			],
			"368": [
				334,
				9,
				5
			],
			"369": [
				335,
				3,
				5
			],
			"370": [
				335,
				4,
				7
			],
			"371": [
				335,
				19,
				9
			],
			"372": [
				336,
				6,
				3
			],
			"373": [
				337,
				9,
				5
			],
			"374": [
				338,
				25,
				9
			],
			"375": [
				339,
				12,
				8
			],
			"376": [
				339,
				10,
				10
			],
			"377": [
				340,
				9,
				5
			],
			"378": [
				340,
				3,
				10
			],
			"381": [
				346,
				28,
				11
			],
			"382": [
				346,
				8,
				24
			],
			"383": [
				347,
				6,
				11
			],
			"384": [
				347,
				26,
				13
			],
			"387": [
				355,
				26,
				22
			],
			"388": [
				355,
				28,
				6
			],
			"389": [
				355,
				29,
				7
			],
			"390": [
				359,
				6,
				24
			],
			"391": [
				360,
				10,
				4
			],
			"392": [
				360,
				26,
				12
			],
			"393": [
				360,
				25,
				23
			],
			"394": [
				361,
				25,
				16
			],
			"395": [
				361,
				23,
				24
			],
			"396": [
				361,
				14,
				28
			],
			"398": [
				362,
				28,
				7
			],
			"399": [
				362,
				6,
				24
			],
			"400": [
				363,
				7,
				9
			],
			"401": [
				363,
				1,
				15
			],
			"402": [
				363,
				26,
				11
			],
			"403": [
				363,
				27,
				16
			],
			"404": [
				363,
				5,
				20
			],
			"406": [
				364,
				15,
				5
			],
			"407": [
				364,
				25,
				5
			],
			"408": [
				364,
				18,
				17
			],
			"409": [
				364,
				6,
				27
			],
			"410": [
				366,
				7,
				11
			],
			"412": [
				367,
				21,
				10
			],
			"413": [
				367,
				13,
				24
			],
			"414": [
				368,
				7,
				15
			],
			"415": [
				368,
				24,
				14
			],
			"416": [
				371,
				3,
				6
			],
			"417": [
				372,
				23,
				5
			],
			"418": [
				372,
				2,
				14
			],
			"419": [
				373,
				13,
				4
			],
			"420": [
				374,
				3,
				14
			],
			"421": [
				375,
				7,
				5
			],
			"422": [
				377,
				2,
				4
			],
			"424": [
				380,
				2,
				5
			],
			"425": [
				380,
				4,
				5
			]
		},
		"fe": {
			"0": [
				0,
				8,
				2
			],
			"1": [
				0,
				3,
				6
			],
			"2": [
				0,
				12,
				10
			],
			"3": [
				0,
				18,
				19
			],
			"4": [
				0,
				24,
				27
			],
			"5": [
				0,
				27,
				26
			],
			"6": [
				0,
				29,
				29
			],
			"7": [
				1,
				21,
				8
			],
			"8": [
				1,
				28,
				20
			],
			"9": [
				1,
				29,
				20
			],
			"10": [
				2,
				24,
				18
			],
			"11": [
				4,
				13,
				8
			],
			"12": [
				4,
				23,
				8
			],
			"13": [
				4,
				30,
				17
			],
			"14": [
				5,
				4,
				3
			],
			"15": [
				5,
				1,
				5
			],
			"16": [
				5,
				1,
				7
			],
			"17": [
				5,
				4,
				7
			],
			"18": [
				6,
				9,
				15
			],
			"19": [
				11,
				16,
				3
			],
			"20": [
				11,
				17,
				3
			],
			"21": [
				11,
				19,
				3
			],
			"22": [
				11,
				10,
				17
			],
			"23": [
				12,
				5,
				4
			],
			"24": [
				12,
				9,
				4
			],
			"25": [
				14,
				1,
				3
			],
			"26": [
				14,
				5,
				3
			],
			"27": [
				15,
				22,
				5
			],
			"28": [
				15,
				23,
				5
			],
			"29": [
				15,
				23,
				7
			],
			"30": [
				15,
				22,
				25
			],
			"31": [
				33,
				31,
				8
			],
			"32": [
				33,
				31,
				9
			],
			"33": [
				33,
				20,
				29
			],
			"34": [
				42,
				13,
				3
			],
			"35": [
				42,
				14,
				3
			],
			"36": [
				42,
				15,
				3
			],
			"37": [
				46,
				2,
				15
			],
			"38": [
				46,
				3,
				15
			],
			"39": [
				46,
				4,
				15
			],
			"40": [
				46,
				2,
				16
			],
			"41": [
				46,
				3,
				16
			],
			"42": [
				46,
				4,
				16
			],
			"43": [
				53,
				3,
				3
			],
			"44": [
				53,
				1,
				4
			],
			"45": [
				53,
				2,
				4
			],
			"46": [
				53,
				8,
				4
			],
			"47": [
				54,
				1,
				4
			],
			"48": [
				54,
				1,
				5
			],
			"50": [
				55,
				7,
				4
			],
			"51": [
				55,
				4,
				5
			],
			"52": [
				55,
				5,
				5
			],
			"53": [
				55,
				6,
				5
			],
			"54": [
				56,
				4,
				3
			],
			"55": [
				58,
				13,
				29
			],
			"56": [
				58,
				16,
				29
			],
			"57": [
				58,
				19,
				29
			],
			"58": [
				59,
				1,
				12
			],
			"59": [
				59,
				7,
				19
			],
			"60": [
				59,
				20,
				17
			],
			"61": [
				61,
				17,
				5
			],
			"62": [
				62,
				2,
				7
			],
			"63": [
				64,
				11,
				4
			],
			"64": [
				66,
				1,
				3
			],
			"65": [
				66,
				4,
				3
			],
			"66": [
				66,
				5,
				3
			],
			"67": [
				67,
				3,
				4
			],
			"68": [
				67,
				4,
				4
			],
			"69": [
				67,
				5,
				4
			],
			"70": [
				67,
				7,
				4
			],
			"71": [
				67,
				1,
				5
			],
			"72": [
				67,
				3,
				5
			],
			"73": [
				67,
				4,
				5
			],
			"74": [
				67,
				5,
				5
			],
			"75": [
				67,
				7,
				5
			],
			"76": [
				68,
				14,
				5
			],
			"77": [
				73,
				1,
				7
			],
			"78": [
				73,
				28,
				7
			],
			"79": [
				73,
				28,
				8
			],
			"80": [
				73,
				28,
				9
			],
			"81": [
				78,
				9,
				6
			],
			"82": [
				79,
				3,
				7
			],
			"83": [
				80,
				2,
				3
			],
			"84": [
				80,
				6,
				3
			],
			"85": [
				80,
				1,
				4
			],
			"86": [
				80,
				1,
				5
			],
			"87": [
				91,
				5,
				6
			],
			"88": [
				92,
				1,
				3
			],
			"89": [
				92,
				2,
				3
			],
			"90": [
				92,
				4,
				3
			],
			"91": [
				92,
				5,
				3
			],
			"92": [
				92,
				7,
				3
			],
			"93": [
				92,
				8,
				3
			],
			"94": [
				92,
				10,
				3
			],
			"95": [
				92,
				11,
				3
			],
			"96": [
				93,
				3,
				5
			],
			"97": [
				93,
				4,
				5
			],
			"98": [
				93,
				5,
				5
			],
			"99": [
				93,
				6,
				5
			],
			"100": [
				93,
				7,
				5
			],
			"101": [
				93,
				8,
				5
			],
			"102": [
				93,
				9,
				5
			],
			"103": [
				93,
				10,
				5
			],
			"104": [
				93,
				11,
				5
			],
			"105": [
				93,
				3,
				6
			],
			"106": [
				93,
				4,
				6
			],
			"107": [
				93,
				5,
				6
			],
			"108": [
				93,
				6,
				6
			],
			"109": [
				93,
				7,
				6
			],
			"110": [
				93,
				8,
				6
			],
			"111": [
				93,
				9,
				6
			],
			"112": [
				93,
				10,
				6
			],
			"113": [
				93,
				11,
				6
			],
			"114": [
				94,
				13,
				4
			],
			"115": [
				95,
				4,
				3
			],
			"116": [
				95,
				4,
				4
			],
			"117": [
				95,
				14,
				3
			],
			"118": [
				95,
				14,
				4
			],
			"119": [
				95,
				15,
				4
			],
			"120": [
				97,
				1,
				5
			],
			"121": [
				97,
				11,
				5
			],
			"122": [
				98,
				4,
				4
			],
			"123": [
				98,
				8,
				8
			],
			"124": [
				98,
				10,
				5
			],
			"125": [
				98,
				11,
				5
			],
			"126": [
				99,
				2,
				5
			],
			"127": [
				99,
				12,
				5
			],
			"128": [
				100,
				1,
				5
			],
			"129": [
				100,
				1,
				6
			],
			"130": [
				100,
				6,
				3
			],
			"131": [
				100,
				11,
				5
			],
			"132": [
				100,
				11,
				6
			],
			"133": [
				101,
				2,
				11
			],
			"134": [
				101,
				3,
				11
			],
			"135": [
				101,
				8,
				12
			],
			"136": [
				108,
				6,
				3
			],
			"137": [
				108,
				24,
				3
			],
			"138": [
				108,
				13,
				12
			],
			"139": [
				108,
				30,
				18
			],
			"140": [
				111,
				29,
				14
			],
			"141": [
				111,
				22,
				16
			],
			"142": [
				111,
				4,
				28
			],
			"143": [
				111,
				13,
				14
			],
			"144": [
				111,
				25,
				3
			],
			"145": [
				112,
				21,
				5
			],
			"146": [
				112,
				9,
				18
			],
			"147": [
				112,
				13,
				3
			],
			"148": [
				113,
				22,
				24
			],
			"149": [
				113,
				12,
				24
			],
			"150": [
				114,
				5,
				17
			],
			"151": [
				114,
				19,
				22
			],
			"152": [
				115,
				3,
				15
			],
			"153": [
				115,
				5,
				10
			],
			"154": [
				115,
				17,
				17
			],
			"155": [
				115,
				20,
				20
			],
			"156": [
				117,
				12,
				27
			],
			"157": [
				117,
				16,
				27
			],
			"158": [
				118,
				25,
				22
			],
			"159": [
				118,
				24,
				23
			],
			"160": [
				119,
				3,
				7
			],
			"161": [
				119,
				10,
				4
			],
			"162": [
				119,
				2,
				23
			],
			"163": [
				119,
				6,
				17
			],
			"164": [
				119,
				27,
				4
			],
			"165": [
				119,
				23,
				9
			],
			"166": [
				120,
				23,
				4
			],
			"167": [
				120,
				29,
				23
			],
			"168": [
				120,
				8,
				5
			],
			"169": [
				122,
				8,
				7
			],
			"170": [
				122,
				6,
				3
			],
			"171": [
				122,
				1,
				4
			],
			"172": [
				123,
				3,
				4
			],
			"173": [
				127,
				20,
				24
			],
			"174": [
				129,
				11,
				19
			],
			"175": [
				129,
				16,
				17
			],
			"176": [
				129,
				18,
				18
			],
			"177": [
				129,
				22,
				18
			],
			"178": [
				131,
				1,
				7
			],
			"179": [
				131,
				2,
				8
			],
			"180": [
				131,
				7,
				6
			],
			"181": [
				132,
				23,
				19
			],
			"182": [
				132,
				22,
				15
			],
			"183": [
				134,
				9,
				17
			],
			"184": [
				134,
				16,
				13
			],
			"185": [
				140,
				27,
				7
			],
			"186": [
				140,
				2,
				20
			],
			"187": [
				141,
				4,
				19
			],
			"188": [
				142,
				2,
				5
			],
			"189": [
				142,
				11,
				7
			],
			"190": [
				144,
				4,
				6
			],
			"191": [
				144,
				8,
				5
			],
			"192": [
				144,
				12,
				6
			],
			"193": [
				145,
				14,
				5
			],
			"194": [
				147,
				7,
				8
			],
			"195": [
				152,
				3,
				4
			],
			"196": [
				153,
				7,
				15
			],
			"197": [
				157,
				11,
				9
			],
			"198": [
				157,
				11,
				10
			],
			"199": [
				157,
				10,
				23
			],
			"200": [
				157,
				19,
				14
			],
			"201": [
				167,
				18,
				4
			],
			"202": [
				167,
				26,
				12
			],
			"203": [
				168,
				14,
				20
			],
			"204": [
				169,
				20,
				21
			],
			"205": [
				170,
				12,
				18
			],
			"206": [
				172,
				5,
				15
			],
			"207": [
				183,
				9,
				8
			],
			"208": [
				183,
				11,
				19
			],
			"209": [
				183,
				21,
				20
			],
			"210": [
				183,
				27,
				6
			],
			"211": [
				183,
				14,
				18
			],
			"212": [
				185,
				19,
				9
			],
			"213": [
				185,
				26,
				6
			],
			"214": [
				186,
				14,
				21
			],
			"215": [
				199,
				18,
				4
			],
			"216": [
				199,
				22,
				3
			],
			"217": [
				199,
				26,
				25
			],
			"218": [
				201,
				8,
				28
			],
			"219": [
				201,
				4,
				10
			],
			"220": [
				201,
				12,
				11
			],
			"221": [
				201,
				16,
				11
			],
			"222": [
				201,
				16,
				12
			],
			"223": [
				201,
				20,
				12
			],
			"224": [
				201,
				20,
				14
			],
			"225": [
				201,
				10,
				26
			],
			"226": [
				201,
				15,
				28
			],
			"227": [
				201,
				27,
				27
			],
			"228": [
				201,
				28,
				27
			],
			"229": [
				201,
				29,
				27
			],
			"230": [
				202,
				14,
				8
			],
			"231": [
				202,
				17,
				9
			],
			"232": [
				202,
				18,
				16
			],
			"233": [
				202,
				18,
				22
			],
			"234": [
				205,
				17,
				5
			],
			"235": [
				206,
				2,
				5
			],
			"236": [
				206,
				14,
				7
			],
			"237": [
				207,
				9,
				7
			],
			"238": [
				209,
				9,
				7
			],
			"239": [
				210,
				9,
				7
			],
			"240": [
				211,
				9,
				7
			],
			"241": [
				212,
				9,
				7
			],
			"256": [
				258,
				10,
				3
			],
			"257": [
				258,
				2,
				10
			],
			"258": [
				258,
				25,
				5
			],
			"259": [
				259,
				5,
				3
			],
			"260": [
				262,
				3,
				5
			],
			"261": [
				262,
				3,
				6
			],
			"262": [
				262,
				4,
				6
			],
			"263": [
				262,
				10,
				4
			],
			"264": [
				262,
				11,
				5
			],
			"265": [
				262,
				11,
				6
			],
			"266": [
				266,
				23,
				4
			],
			"267": [
				266,
				24,
				3
			],
			"268": [
				266,
				26,
				4
			],
			"269": [
				267,
				27,
				18
			],
			"270": [
				267,
				28,
				18
			],
			"271": [
				267,
				29,
				19
			],
			"272": [
				272,
				6,
				3
			],
			"273": [
				273,
				8,
				3
			],
			"274": [
				277,
				5,
				4
			],
			"275": [
				278,
				5,
				4
			],
			"276": [
				279,
				5,
				4
			],
			"277": [
				280,
				5,
				4
			],
			"278": [
				281,
				6,
				3
			],
			"279": [
				281,
				1,
				7
			],
			"280": [
				281,
				11,
				7
			],
			"281": [
				281,
				6,
				11
			],
			"282": [
				282,
				6,
				3
			],
			"283": [
				282,
				1,
				7
			],
			"284": [
				282,
				11,
				7
			],
			"285": [
				282,
				6,
				11
			],
			"286": [
				283,
				8,
				10
			],
			"287": [
				283,
				21,
				24
			],
			"288": [
				285,
				6,
				3
			],
			"289": [
				287,
				28,
				11
			],
			"290": [
				289,
				5,
				10
			],
			"291": [
				289,
				6,
				20
			],
			"292": [
				289,
				26,
				12
			],
			"293": [
				290,
				8,
				7
			],
			"294": [
				291,
				13,
				11
			],
			"295": [
				291,
				26,
				19
			],
			"296": [
				291,
				15,
				25
			],
			"297": [
				292,
				16,
				19
			],
			"298": [
				292,
				29,
				23
			],
			"299": [
				293,
				6,
				12
			],
			"300": [
				293,
				29,
				22
			],
			"302": [
				295,
				16,
				24
			],
			"304": [
				310,
				8,
				6
			],
			"305": [
				310,
				26,
				6
			],
			"306": [
				310,
				25,
				21
			],
			"307": [
				311,
				9,
				5
			],
			"308": [
				311,
				24,
				25
			],
			"309": [
				312,
				18,
				6
			],
			"310": [
				312,
				3,
				21
			],
			"311": [
				312,
				4,
				21
			],
			"312": [
				312,
				5,
				21
			],
			"313": [
				312,
				11,
				23
			],
			"314": [
				312,
				25,
				21
			],
			"315": [
				314,
				6,
				3
			],
			"316": [
				314,
				5,
				10
			],
			"317": [
				314,
				20,
				8
			],
			"318": [
				314,
				25,
				12
			],
			"319": [
				314,
				18,
				21
			],
			"320": [
				315,
				15,
				9
			],
			"321": [
				315,
				15,
				10
			],
			"322": [
				315,
				16,
				9
			],
			"323": [
				315,
				16,
				10
			],
			"324": [
				317,
				1,
				6
			],
			"325": [
				317,
				9,
				6
			],
			"326": [
				325,
				5,
				4
			],
			"327": [
				325,
				6,
				4
			],
			"328": [
				325,
				7,
				4
			],
			"329": [
				325,
				10,
				5
			],
			"330": [
				325,
				10,
				6
			],
			"331": [
				325,
				3,
				18
			],
			"332": [
				325,
				4,
				18
			],
			"333": [
				325,
				28,
				5
			],
			"334": [
				325,
				28,
				6
			],
			"335": [
				325,
				29,
				5
			],
			"336": [
				326,
				29,
				29
			],
			"337": [
				326,
				23,
				29
			],
			"338": [
				326,
				29,
				28
			],
			"339": [
				326,
				25,
				28
			],
			"340": [
				326,
				23,
				27
			],
			"341": [
				326,
				23,
				13
			],
			"342": [
				326,
				25,
				13
			],
			"343": [
				326,
				23,
				15
			],
			"344": [
				326,
				25,
				15
			],
			"345": [
				326,
				11,
				6
			],
			"346": [
				327,
				10,
				4
			],
			"347": [
				327,
				11,
				4
			],
			"348": [
				327,
				11,
				5
			],
			"349": [
				327,
				1,
				9
			],
			"350": [
				328,
				7,
				5
			],
			"351": [
				328,
				9,
				5
			],
			"352": [
				328,
				11,
				5
			],
			"353": [
				328,
				7,
				7
			],
			"354": [
				328,
				9,
				7
			],
			"355": [
				328,
				11,
				7
			],
			"356": [
				329,
				13,
				3
			],
			"357": [
				329,
				13,
				5
			],
			"358": [
				330,
				18,
				28
			],
			"359": [
				331,
				2,
				5
			],
			"360": [
				331,
				14,
				5
			],
			"361": [
				332,
				2,
				6
			],
			"362": [
				332,
				16,
				7
			],
			"363": [
				333,
				30,
				19
			],
			"364": [
				333,
				29,
				26
			],
			"365": [
				334,
				3,
				5
			],
			"366": [
				334,
				9,
				5
			],
			"367": [
				335,
				3,
				5
			],
			"368": [
				335,
				4,
				7
			],
			"369": [
				335,
				19,
				9
			],
			"370": [
				336,
				6,
				3
			],
			"371": [
				337,
				9,
				5
			],
			"372": [
				338,
				25,
				9
			],
			"373": [
				339,
				12,
				8
			],
			"374": [
				339,
				10,
				10
			],
			"375": [
				340,
				9,
				5
			],
			"376": [
				340,
				3,
				10
			],
			"377": [
				346,
				28,
				11
			],
			"378": [
				346,
				8,
				24
			],
			"379": [
				347,
				6,
				11
			],
			"380": [
				347,
				26,
				13
			],
			"381": [
				355,
				26,
				22
			],
			"382": [
				355,
				28,
				6
			],
			"383": [
				355,
				29,
				7
			],
			"384": [
				359,
				6,
				24
			],
			"385": [
				360,
				10,
				4
			],
			"386": [
				360,
				26,
				12
			],
			"387": [
				360,
				25,
				23
			],
			"388": [
				361,
				25,
				16
			],
			"389": [
				361,
				23,
				24
			],
			"390": [
				361,
				14,
				28
			],
			"391": [
				362,
				28,
				7
			],
			"392": [
				362,
				6,
				24
			],
			"393": [
				363,
				7,
				9
			],
			"394": [
				363,
				1,
				15
			],
			"395": [
				363,
				26,
				11
			],
			"396": [
				363,
				27,
				16
			],
			"397": [
				363,
				5,
				20
			],
			"398": [
				364,
				15,
				5
			],
			"399": [
				364,
				25,
				5
			],
			"400": [
				364,
				18,
				17
			],
			"401": [
				364,
				6,
				27
			],
			"402": [
				366,
				7,
				11
			],
			"404": [
				367,
				21,
				10
			],
			"405": [
				367,
				13,
				24
			],
			"406": [
				368,
				7,
				15
			],
			"407": [
				368,
				24,
				14
			],
			"408": [
				371,
				3,
				6
			],
			"409": [
				372,
				23,
				5
			],
			"410": [
				372,
				2,
				14
			],
			"411": [
				373,
				13,
				4
			],
			"412": [
				374,
				3,
				14
			],
			"413": [
				375,
				7,
				5
			],
			"414": [
				377,
				2,
				4
			],
			"415": [
				380,
				2,
				5
			],
			"416": [
				380,
				4,
				5
			]
		}
	}

    /*
     * Global Variables
     */

    /*
     * Functions
     */

	var testMap = function(map, x, y) {
	}

	var init = function() {
		var button = document.getElementById("button-check");
		button.addEventListener('click', onButtonCheck);
	}

	var check = function(data) {
		var e = document.getElementById('input-treasure-set');
		var treasureSet = e.options[e.selectedIndex].value;

		if (!(treasureSet in TREASURE)) {
			return;
		}

		var treasure = TREASURE[treasureSet];
		var slot = 0;

		if (document.getElementById('input-slot-2').checked) {
			slot = 1;
		} else if (document.getElementById('input-slot-3').checked) {
			slot = 2;
		} else if (document.getElementById('input-slot-4').checked) {
			slot = 3;
		}

		BASE = 0x02A0 + 0x0800 * slot;

		results = {};

		for (var i = 0; i < 64; i++) {
			for (var j = 0; j < 8; j++) {
				if ((data[BASE + i] & Math.pow(2, j)) > 0) {
					results[i * 8 + j] = true;
				}
			}
		}

		total = 0;
		count = 0;
		missing = {};

		for (var i = 0; i < 512; i++) {
			if (i in treasure) {
				total++;

				if (!(i in results)) {
					data = treasure[i];

					if (!(data[0] in missing)) {
						missing[data[0]] = [];
					}

					missing[data[0]].push(i);
					count++;
				}
			}
		}

		var output = document.getElementById("results");
		output.innerHTML = "<p>You are missing <b>" + count + "</b> out of <b>" + total + "</b> treasures:";

		Object.keys(missing).forEach(
			(key) => {
				var row = document.createElement("div");
				var caption = document.createElement("div");
				var img_container = document.createElement("div");

				row.className = "row align-items-center mb-2";
				caption.className = "col";
				img_container.className = "col";

				let mapName = "";
				let mapKey = '3' + parseInt(key).toString(16).padStart(3, '0').toUpperCase();

				if (mapKey in MAPS) {
					mapName = MAPS[mapKey];
				}

				caption.innerHTML = '<h5>' + mapName + '</h5>';

				img_container.innerHTML = '<img src="/static/img/maps/composite/' + mapKey + '-0.png">';
				caption.innerHTML += '<p>You are missing the treasures at the following coordinates:</p><ul>';

				for (var i = 0; i < missing[key].length; i++) {
					var index = missing[key][i];

					var map = treasure[index][0];
					var x = treasure[index][1];
					var y = treasure[index][2];

					caption.innerHTML += '<li>' + x + ', ' + y + '</li>';
				}

				caption.innerHTML += '</ul>';

				row.appendChild(img_container);
				row.appendChild(caption);

				output.appendChild(row);
			}
		);
	}

	var onButtonCheck = function(e) {
		var files = document.getElementById("input-file").files;

		if (files.length == 1) {
			var file = files[0];
			var reader = new FileReader();

			reader.onload = function() {
				var data = new Uint8Array(this.result);

				if (data.length != 8192 && data.length != 32768) {
					document.getElementById("warning").innerHTML = '<div class="bs-callout bs-callout-warning"><span class="fas fa-exclamation"></span><h4>Oops!</h4>Based on the file size, it is very unlikely that the submitted file is an SRAM file. Be sure you are selecting a valid SRAM file (usually ending in .srm or .SaveRAM) and try again. Just in case this check is wrong, your results are still shown below.</p></div>';
				} else {
					document.getElementById("warning").innerHTML = '';
				}

				check(data);
			}

			reader.readAsArrayBuffer(file);
		}
	}

	var updateButton = function() {
		if (document.getElementById("input-file").files.length == 1) {
			document.getElementById("button-check").classList.remove("disabled");
		} else {
			document.getElementById("button-check").classList.add("disabled");
		}
	}

    /*
     * Public Definition
     */

    return {
		init: init,
		updateButton: updateButton
    };
}();
