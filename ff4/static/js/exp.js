/*
 * Global Variables
 */

var com = com || {};
com.aexoden = com.aexoden || {};
com.aexoden.ff4 = com.aexoden.ff4 || {};

/*
 * Module Definition
 */

com.aexoden.ff4.exp = function()
{
    /*
	 * Constants
	 */

    const CHARACTER_DKC = 0;
    const CHARACTER_KAIN = 1;
    const CHARACTER_RYDIA = 2;
    const CHARACTER_TELLAH = 3;
    const CHARACTER_EDWARD = 4;
    const CHARACTER_ROSA = 5;
    const CHARACTER_YANG = 6;
    const CHARACTER_PALOM = 7;
    const CHARACTER_POROM = 8;
    const CHARACTER_CECIL = 9;
    const CHARACTER_CID = 10;
    const CHARACTER_EDGE = 11;
    const CHARACTER_FUSOYA = 12;

    /*
     * Data
     */

    let _characterData = {
        [CHARACTER_CECIL]: {
            levels: {
                1: 0,
                2: 23,
                3: 65,
                4: 135,
                5: 244,
                6: 407,
                7: 640,
                8: 964,
                9: 1402,
                10: 1980,
                11: 2726,
                12: 3671,
                13: 4851,
                14: 6302,
                15: 8065,
                16: 10182,
                17: 12700,
                18: 15667,
                19: 19135,
                20: 23159,
                21: 27795,
                22: 33104,
                23: 39149,
                24: 45996,
                25: 53714,
                26: 62375,
                27: 72053,
                28: 82826,
                29: 94773,
                30: 107979,
                31: 122529,
                32: 138512,
                33: 156019,
                34: 175146,
                35: 195990,
                36: 218651,
                37: 243233,
                38: 269841,
                39: 298585,
                40: 329577,
                41: 362931,
                42: 398765,
                43: 437199,
                44: 478356,
                45: 522363,
                46: 569349,
                47: 619446,
                48: 672788,
                49: 729514,
                50: 789764,
                51: 853681,
                52: 921411,
                53: 993104,
                54: 1068911,
                55: 1148988,
                56: 1233492,
                57: 1322584,
                58: 1416427,
                59: 1515188,
                60: 1619036,
                61: 1728142,
                62: 1842682,
                63: 1962834,
                64: 2088778,
                65: 2220698,
                66: 2358781,
                67: 2503215,
                68: 2654193,
                69: 2811910,
                70: 2976564,
            },
            name: {en: "Cecil", ja: "セシル"},
            starting_exp: 0,
        },
        [CHARACTER_CID]: {
            levels: {
                20: 26754,
                21: 32099,
                22: 38219,
                23: 45186,
                24: 53077,
                25: 61970,
                26: 71948,
                27: 83097,
                28: 95506,
                29: 109267,
                30: 124477,
                31: 141234,
                32: 159640,
                33: 179801,
                34: 201826,
                35: 225827,
                36: 251919,
                37: 280222,
                38: 310857,
                39: 343950,
                40: 379630,
                41: 418028,
                42: 459280,
                43: 503524,
                44: 550903,
                45: 601561,
                46: 655647,
                47: 713313,
                48: 774714,
                49: 840008,
                50: 909358,
                51: 982928,
                52: 1060886,
                53: 1143404,
                54: 1230657,
                55: 1322823,
                56: 1420083,
                57: 1522623,
                58: 1630630,
                59: 1744296,
                60: 1863816,
                61: 1989387,
                62: 2121211,
                63: 2259492,
                64: 2404439,
                65: 2556262,
                66: 2715176,
                67: 2881399,
                68: 3055152,
                69: 3236659,
                70: 3426149,
            },
            name: {en: "Cid", ja: "シド"},
            starting_exp: 26754,
        },
        [CHARACTER_DKC]: {
            levels: {
                10: 2403,
                11: 3334,
                12: 4520,
                13: 6006,
                14: 7840,
                15: 10073,
                16: 12761,
                17: 15964,
                18: 19744,
                19: 24168,
                20: 29307,
                21: 35234,
                22: 42028,
                23: 49769,
                24: 58543,
                25: 68439,
                26: 79550,
                27: 91972,
                28: 105805,
                29: 121152,
                30: 138121,
                31: 156823,
                32: 177373,
                33: 199890,
                34: 224496,
                35: 251317,
                36: 280482,
                37: 312125,
                38: 346382,
                39: 383395,
                40: 423308,
                41: 466224,
                42: 512385,
                43: 561902,
                44: 614934,
                45: 671644,
                46: 732199,
                47: 796769,
                48: 865528,
                49: 938654,
                50: 1016329,
                51: 1098737,
                52: 1186068,
                53: 1278514,
                54: 1376272,
                55: 1479541,
                56: 1588526,
                57: 1703434,
                58: 1824476,
                59: 1951866,
                60: 2085824,
                61: 2226572,
                62: 2374335,
                63: 2529344,
                64: 2691831,
                65: 2862034,
                66: 3040194,
                67: 3226555,
                68: 3421365,
                69: 3624876,
                70: 3837344,
            },
            name: {en: "Cecil", ja: "セシル"},
            starting_exp: 3000,
        },
        [CHARACTER_EDGE]: {
            levels: {
                25: 64777,
                26: 74161,
                27: 84565,
                28: 96062,
                29: 108730,
                30: 122650,
                31: 137903,
                32: 154576,
                33: 172757,
                34: 192536,
                35: 214008,
                36: 237269,
                37: 262419,
                38: 289560,
                39: 318796,
                40: 350236,
                41: 383989,
                42: 420169,
                43: 458892,
                44: 500276,
                45: 544443,
                46: 591517,
                47: 641625,
                48: 694897,
                49: 751465,
                50: 811465,
                51: 875034,
                52: 942313,
                53: 1013446,
                54: 1088579,
                55: 1167861,
                56: 1251444,
                57: 1339482,
                58: 1432133,
                59: 1529557,
                60: 1631917,
                61: 1739378,
                62: 1852108,
                63: 1970279,
                64: 2094065,
                65: 2223642,
                66: 2359190,
                67: 2500890,
                68: 2648928,
                69: 2803492,
                70: 2964772,
            },
            name: {en: "Edge", ja: "エッジ"},
            starting_exp: 64777,
        },
        [CHARACTER_EDWARD]: {
            levels: {
                5: 388,
                6: 625,
                7: 933,
                8: 1343,
                9: 1880,
                10: 2570,
                11: 3442,
                12: 4528,
                13: 5864,
                14: 7488,
                15: 9441,
                16: 11768,
                17: 14515,
                18: 17732,
                19: 21472,
                20: 25792,
                21: 30749,
                22: 36406,
                23: 42827,
                24: 50080,
                25: 58236,
                26: 67368,
                27: 77552,
                28: 88868,
                29: 101398,
                30: 115228,
                31: 130445,
                32: 147141,
                33: 165410,
                34: 185348,
                35: 207056,
                36: 230637,
                37: 256196,
                38: 283843,
                39: 313689,
                40: 345849,
                41: 380440,
                42: 417583,
                43: 457401,
                44: 500021,
                45: 545572,
                46: 594186,
                47: 645999,
                48: 701149,
                49: 759777,
                50: 822027,
                51: 888045,
                52: 957982,
                53: 1031991,
                54: 1110228,
                55: 1192851,
                56: 1280022,
                57: 1371906,
                58: 1468670,
                59: 1570485,
                60: 1677525,
                61: 1789965,
                62: 1907985,
                63: 2031768,
                64: 2161498,
                65: 2297364,
                66: 2439557,
                67: 2588270,
                68: 2743701,
                69: 2906050,
                70: 3075520,
            },
            name: {en: "Edward", ja: "ギルバート"},
            starting_exp: 388,
        },
        [CHARACTER_FUSOYA]: {
            levels: {
                50: 1007865,
                51: 1090108,
                52: 1177284,
                53: 1269587,
                54: 1367214,
                55: 1470366,
                56: 1579247,
                57: 1694066,
                58: 1815035,
                59: 1942369,
                60: 2076289,
                61: 2217017,
                62: 2364780,
                63: 2519809,
                64: 2682338,
                65: 2852605,
                66: 3030852,
                67: 3217325,
                68: 3412272,
                69: 3615947,
                70: 3828607,
            },
            name: {en: "FuSoYa", ja: "フースーヤ"},
            starting_exp: 1007865,
        },
        [CHARACTER_KAIN]: {
            levels: {
                10: 2256,
                11: 3059,
                12: 4068,
                13: 5317,
                14: 6844,
                15: 8689,
                16: 10895,
                17: 13508,
                18: 16577,
                19: 20154,
                20: 24294,
                21: 29054,
                22: 34495,
                23: 40680,
                24: 47675,
                25: 55550,
                26: 64376,
                27: 74228,
                28: 85184,
                29: 97325,
                30: 110735,
                31: 125499,
                32: 141707,
                33: 159451,
                34: 178826,
                35: 199931,
                36: 222865,
                37: 247733,
                38: 274641,
                39: 303699,
                40: 335019,
                41: 368716,
                42: 404908,
                43: 443716,
                44: 485264,
                45: 529679,
                46: 577090,
                47: 627630,
                48: 681434,
                49: 738640,
                50: 799390,
                51: 863827,
                52: 932098,
                53: 1004353,
                54: 1080745,
                55: 1161430,
                56: 1246565,
                57: 1336312,
                58: 1430835,
                59: 1530301,
                60: 1634881,
                61: 1744746,
                62: 1860073,
                63: 1981040,
                64: 2107829,
                65: 2240624,
                66: 2379612,
                67: 2524983,
                68: 2676930,
                69: 2835649,
                70: 3001339,
            },
            name: {en: "Kain", ja: "カイン"},
            starting_exp: 2300,
        },
        [CHARACTER_PALOM]: {
            levels: {
                10: 1957,
                11: 2692,
                12: 3624,
                13: 4786,
                14: 6215,
                15: 7951,
                16: 10036,
                17: 12515,
                18: 15436,
                19: 18849,
                20: 22809,
                21: 27371,
                22: 32595,
                23: 38543,
                24: 45280,
                25: 52873,
                26: 61393,
                27: 70914,
                28: 81511,
                29: 93263,
                30: 106253,
                31: 120584,
                32: 136304,
                33: 153524,
                34: 172336,
                35: 192837,
                36: 215125,
                37: 239301,
                38: 265470,
                39: 293739,
                40: 324219,
                41: 357021,
                42: 392262,
                43: 430060,
                44: 470536,
                45: 513814,
                46: 560021,
                47: 609287,
                48: 661745,
                49: 717530,
                50: 776780,
                51: 839635,
                52: 906240,
                53: 976742,
                54: 1051290,
                55: 1130036,
                56: 1213135,
                57: 1300745,
                58: 1393027,
                59: 1490145,
                60: 1592265,
                61: 1699556,
                62: 1812190,
                63: 1930342,
                64: 2054189,
                65: 2183912,
                66: 2319695,
                67: 2461723,
                68: 2610186,
                69: 2765275,
                70: 2927185,
            },
            name: {en: "Palom", ja: "パロム"},
            starting_exp: 1957,
        },
        [CHARACTER_POROM]: {
            levels: {
                10: 1957,
                11: 2692,
                12: 3624,
                13: 4786,
                14: 6215,
                15: 7951,
                16: 10036,
                17: 12515,
                18: 15436,
                19: 18849,
                20: 22809,
                21: 27371,
                22: 32595,
                23: 38543,
                24: 45280,
                25: 52873,
                26: 61393,
                27: 70914,
                28: 81511,
                29: 93263,
                30: 106253,
                31: 120564,
                32: 136284,
                33: 153504,
                34: 172316,
                35: 192817,
                36: 215105,
                37: 239281,
                38: 265450,
                39: 293719,
                40: 324199,
                41: 357001,
                42: 392242,
                43: 430040,
                44: 470516,
                45: 513794,
                46: 560001,
                47: 609267,
                48: 661725,
                49: 717510,
                50: 776760,
                51: 839615,
                52: 906220,
                53: 976722,
                54: 1051270,
                55: 1130016,
                56: 1213115,
                57: 1296214,
                58: 1388496,
                59: 1485614,
                60: 1587734,
                61: 1695025,
                62: 1807659,
                63: 1925811,
                64: 2049658,
                65: 2179381,
                66: 2315164,
                67: 2457192,
                68: 2605655,
                69: 2760744,
                70: 2922654,
            },
            name: {en: "Porom", ja: "ポロム"},
            starting_exp: 1957,
        },
        [CHARACTER_ROSA]: {
            levels: {
                10: 2139,
                11: 2954,
                12: 3989,
                13: 5283,
                14: 6877,
                15: 8815,
                16: 11145,
                17: 13918,
                18: 17188,
                19: 21013,
                20: 25453,
                21: 30571,
                22: 36434,
                23: 43112,
                24: 50678,
                25: 59209,
                26: 68784,
                27: 79485,
                28: 91399,
                29: 104615,
                30: 119225,
                31: 135324,
                32: 153011,
                33: 172387,
                34: 193558,
                35: 216631,
                36: 241718,
                37: 268934,
                38: 298396,
                39: 330225,
                40: 364545,
                41: 401483,
                42: 441169,
                43: 483737,
                44: 529324,
                45: 578070,
                46: 630118,
                47: 685614,
                48: 744707,
                49: 807550,
                50: 874300,
                51: 945115,
                52: 1020157,
                53: 1099591,
                54: 1183586,
                55: 1272314,
                56: 1365950,
                57: 1464672,
                58: 1568661,
                59: 1678101,
                60: 1793181,
                61: 1914090,
                62: 2041023,
                63: 2174177,
                64: 2313753,
                65: 2459954,
                66: 2612986,
                67: 2773060,
                68: 2940388,
                69: 3115187,
                70: 3297677,
            },
            name: {en: "Rosa", ja: "ローザ"},
            starting_exp: 2139,
        },
        [CHARACTER_RYDIA]: {
            levels: {
                1: 0,
                2: 44,
                3: 120,
                4: 238,
                5: 413,
                6: 662,
                7: 1007,
                8: 1474,
                9: 2091,
                10: 2891,
                11: 3909,
                12: 5185,
                13: 6763,
                14: 8689,
                15: 11014,
                16: 13791,
                17: 17078,
                18: 20937,
                19: 25432,
                20: 30632,
                21: 36608,
                22: 43436,
                23: 51196,
                24: 59970,
                25: 69845,
                26: 80910,
                27: 93259,
                28: 106990,
                29: 122203,
                30: 139003,
                31: 157497,
                32: 177797,
                33: 200019,
                34: 224281,
                35: 250706,
                36: 279419,
                37: 310550,
                38: 344233,
                39: 380604,
                40: 419804,
                41: 461976,
                42: 507268,
                43: 555832,
                44: 607822,
                45: 663397,
                46: 722718,
                47: 785951,
                48: 853266,
                49: 924835,
                50: 1000835,
                51: 1081445,
                52: 1166849,
                53: 1257235,
                54: 1352793,
                55: 1453718,
                56: 1560207,
                57: 1672462,
                58: 1790689,
                59: 1915096,
                60: 2045896,
                61: 2183304,
                62: 2327540,
                63: 2478828,
                64: 2637394,
                65: 2803469,
                66: 2977286,
                67: 3159083,
                68: 3349102,
                69: 3547587,
                70: 3754787,
            },
            name: {en: "Rydia", ja: "リディア"},
            starting_exp: 0,
        },
        [CHARACTER_TELLAH]: {
            levels: {
                20: 54873,
                21: 63193,
                22: 72459,
                23: 82748,
                24: 94139,
                25: 106717,
                26: 120568,
                27: 135783,
                28: 152430,
                29: 170660,
                30: 190547,
                31: 212195,
                32: 235713,
                33: 261212,
                34: 288807,
                35: 318617,
                36: 350764,
                37: 385373,
                38: 422573,
                39: 462497,
                40: 505281,
                41: 551064,
                42: 599989,
                43: 652202,
                44: 707853,
                45: 767096,
                46: 830088,
                47: 896989,
                48: 967962,
                49: 1043176,
                50: 1122801,
                51: 1207011,
                52: 1295984,
                53: 1389901,
                54: 1488947,
                55: 1593310,
                56: 1703182,
                57: 1818759,
                58: 1940239,
                59: 2067824,
                60: 2201720,
                61: 2342135,
                62: 2489283,
                63: 2643380,
                64: 2804645,
                65: 2973302,
                66: 3149577,
                67: 3333700,
                68: 3525904,
                69: 3726427,
                70: 3935510,
            },
            name: {en: "Tellah", ja: "テラ"},
            starting_exp: 54873,
        },
        [CHARACTER_YANG]: {
            levels: {
                10: 2061,
                11: 2867,
                12: 3896,
                13: 5186,
                14: 6779,
                15: 8721,
                16: 11060,
                17: 13849,
                18: 17142,
                19: 20997,
                20: 25477,
                21: 30645,
                22: 36570,
                23: 43324,
                24: 50980,
                25: 59617,
                26: 69316,
                27: 80160,
                28: 92238,
                29: 105640,
                30: 120460,
                31: 136795,
                32: 154745,
                33: 174414,
                34: 195910,
                35: 219342,
                36: 244824,
                37: 272472,
                38: 302406,
                39: 334750,
                40: 369630,
                41: 407175,
                42: 447518,
                43: 490795,
                44: 537146,
                45: 586713,
                46: 639642,
                47: 696082,
                48: 756185,
                49: 820107,
                50: 888007,
                51: 960046,
                52: 1036390,
                53: 1117207,
                54: 1202669,
                55: 1292951,
                56: 1388231,
                57: 1488691,
                58: 1594515,
                59: 1705891,
                60: 1823011,
                61: 1946068,
                62: 2075261,
                63: 2210790,
                64: 2352859,
                65: 2501676,
                66: 2657451,
                67: 2820399,
                68: 2990736,
                69: 3168683,
                70: 3354463,
            },
            name: {en: "Yang", ja: "ヤン"},
            starting_exp: 2061,
        },
    };

    let _monsterData = {
        antlion:       {name: {snes: {en: "Antlion",  ja: "アントリオン"}, pr: "Antlion"},         exp: {"*": 1500, pr: 1050}},
        attacker:      {name: {snes: {en: "Attacker", ja: "げいげきシステム"}, pr: "Attack Node"},    exp: {"*": 0, snes: 50000}},
        baigan:        {name: {snes: {en: "Baigan",   ja: "ベイガン"}, pr: "Baigan"},           exp: {"*": 4800, pr: 3360}},
        balnab:        {name: {snes: {en: "Balnab",   ja: "バルナバ"}, pr: "Barnabas"}, exp: {sfc: 5500, snes: 5500, pr: 3850}},
        balnab_z:      {name: {snes: {en: "Balnab-Z", ja: "がったいメカ"}, pr: "Barnabas-Z"}, exp: {sfc: 20, snes: 20, pr: 14}},
        beamer:        {name: {snes: {en: "Beamer",   ja: "きかいほう"}, pr: "Beamer"},           exp: {sfc: 3199, snes: 3250, pr: 14}},
        bomb:          {name: {snes: {en: "Bomb",     ja: "ボム"}, pr: "Bomb"},               exp: {sfc: 361, snes: 370, pr: 253}},
        brena:         {name: {snes: {en: "Brena",    ja: "ブリーナ"}, pr: "Brina"},             exp: {"*": 1000, pr: 700}},
        cal:           {name: {snes: {en: "Cal",      ja: "カルコ"}, pr: "Calco"},               exp: {"*": 1000, pr: 700}},
        calbrena:      {name: {snes: {en: "Calbrena", ja: "カルコブリーナ"}, pr: "Calcobrena"},     exp: {sfc: 12000, snes: 15000, pr: 8400}},
        cindy:         {name: {snes: {en: "Cindy",    ja: "マグ"}, pr: "Cindy"},             exp: {sfc: 2500, snes: 3000, pr: 1750}},
        cpu:           {name: {snes: {en: "CPU",      ja: "せいぎょシステム"}, pr: "CPU"},                 exp: {"*": 50000, pr: 35000}},
        d_machin:      {name: {snes: {en: "D.Machin", ja: "きかいりゅう"}, pr: "Mech Dragon"},    exp: {sfc: 41400, snes: 41500, pr: 28980}},
        d_mist:        {name: {snes: {en: "D.Mist",   ja: "ミストドラゴン"}, pr: "Mist Dragon"},      exp: {"*": 700, pr: 490}},
        dark_elf:      {name: {snes: {en: "Dark Elf", ja: "ダークエルフ"}, pr: "Dark Elf"},       exp: {"*": 6000, pr: 4200}},
        dark_imp:      {name: {snes: {en: "Dark Imp", ja: "ゴブリンキャップ"}, pr: "Goblin Captain"}, exp: {sfc: 1930, snes: 1940, pr: 1351}},
        defender:      {name: {snes: {en: "Defender", ja: "ぼうえいシステム"}, pr: "Defense Node"},   exp: {"*": 0, snes: 50000}},
        dr_lugae:      {name: {snes: {en: "Dr.Lugae", ja: "ルゲイエ"}, pr: "Dr. Lugae"},      exp: {sfc: 10101, snes: 15000, pr: 7071}},
        dr_lugae_dr:   {name: {snes: {en: "Dr.Lugae", ja: "はかせ"}, pr: "Doctor"}, exp: {sfc: 5500, snes: 5500, pr: 3850}},
        elements_1:    {name: {snes: {en: "Elements (Milon Z./Rubicant)", ja: "してんのう (スカルミリョーネ / ルビカンテ)"}},   exp: {"*": 40000}},
        elements_2:    {name: {snes: {en: "Elements (Kainazzo/Valvalis)", ja: "してんのう (カイナッツォ / バルバリシア)"}},   exp: {"*": 62500}},
        elements_pr:   {name: {pr: {en: "Elemental Lords", ja: "してんのう"}},                  exp: {"*": 28000}},
        evilshel:      {name: {snes: {en: "EvilShel", ja: "ファングシェル"}, pr: "Vile Shell"}, exp: {sfc: 101, snes: 110, pr: 71}},
        evilwall:      {name: {snes: {en: "EvilWall", ja: "デモンズウォール"}, pr: "Demon Wall"},     exp: {"*": 23000, pr: 16100}},
        fighter:       {name: {snes: {en: "Fighter",  ja: "バロンかいへい"}, pr: "Baron Warrior"},   exp: {sfc: 400, snes: 410, pr: 280}},
        flamedog:      {name: {snes: {en: "Flamedog", ja: "フレイムドッグ"}, pr: "Fiery Hound"},    exp: {sfc: 1708, snes: 1720, pr: 1196}},
        gargoyle:      {name: {snes: {en: "Gargoyle", ja: "ガーゴイル"}, pr: "Gargoyle"},       exp: {sfc: 315, snes: 320, pr: 221}},
        general:       {name: {snes: {en: "General",  ja: "キャプテン"}, pr: "Captain"},         exp: {sfc: 600, snes: 610, pr: 420}},
        ghast:         {name: {snes: {en: "Ghast",    ja: "スカルナント"}, pr: "Skullnant"},         exp: {sfc: 50,  snes: 150, pr: 35}},
        ghoul:         {name: {snes: {en: "Ghoul",    ja: "グール"}, pr: "Ghoul"},             exp: {sfc: 505, snes: 580, pr: 354}},
        golbez:        {name: {snes: {en: "Golbez",   ja: "ゴルベーザ"}, pr: "Golbez"},           exp: {"*": 15000, pr: 10500}},
        graybomb:      {name: {snes: {en: "GrayBomb", ja: "ペイニーボム"}, pr: "Gray Bomb"},      exp: {sfc: 445, snes: 450, pr: 312}},
        imp_cap:       {name: {snes: {en: "Imp Cap.", ja: "ドモボーイ"}, pr: "Domovoi"},        exp: {sfc: 184, snes: 190, pr: 129}},
        kainazzo:      {name: {snes: {en: "Kainazzo", ja: "カイナッツォ"}, pr: "Cagnazzo"},       exp: {"*": 5500, pr: 3850}},
        left_arm:      {name: {snes: {en: "Left Arm", ja: "ひだりうで"}, pr: "Left Arm"},       exp: {"*": 10, pr: 7}},
        lilith:        {name: {snes: {en: "Lilith",   ja: "リリス"}, pr: "Lilith"},           exp: {sfc: 2703, snes: 2750, pr: 1892}},
        milon:         {name: {snes: {en: "Milon",    ja: "スカルミリョーネ"}, pr: "Scarmiglione"},      exp: {"*": 3200, pr: 2240}},
        milon_z:       {name: {snes: {en: "Milon Z.", ja: "スカルミリョーネ (第二戦)"}, pr: "Scarmiglione (second battle)"}, exp: {sfc: 3600, snes: 4000, pr: 2520}},
        mindy:         {name: {snes: {en: "Mindy",    ja: "ラグ"}, pr: "Mindy"},             exp: {sfc: 2500, snes: 3000, pr: 1750}},
        molbol:        {name: {snes: {en: "Molbol",   ja: "モルボル"}, pr: "Malboro"}, exp: {sfc: 5641, snes: 11000, pr: 3949}},
        octomamm:      {name: {snes: {en: "Octomamm", ja: "オクトマンモス"}, pr: "Octomammoth"},    exp: {"*": 1200, pr: 840}},
        officer:       {name: {snes: {en: "Officer",  ja: "ジェネラル"}, pr: "General"},         exp: {sfc: 398, snes: 400, pr: 279}},
        pike:          {name: {snes: {en: "Pike",     ja: "フライキラー"}, pr: "Killer Fish"},        exp: {sfc: 119, snes: 120, pr: 83}},
        red_bone:      {name: {snes: {en: "Red Bone", ja: "ブラッディボーン"}, pr: "Bloodbones"},     exp: {sfc: 315, snes: 320, pr: 221}},
        revenant:      {name: {snes: {en: "Revenant", ja: "レブナント"}, pr: "Revenant"},       exp: {sfc: 575, snes: 680, pr: 403}},
        rightarm:      {name: {snes: {en: "RightArm", ja: "みぎうで"}, pr: "Right Arm"},      exp: {"*": 10, pr: 7}},
        rubicant:      {name: {snes: {en: "Rubicant", ja: "ルビカンテ"}, pr: "Rubicante"},      exp: {sfc: 18000, snes: 25000, pr: 12600}},
        sandy:         {name: {snes: {en: "Sandy",    ja: "ドグ"}, pr: "Sandy"},             exp: {sfc: 2500, snes: 3000, pr: 1750}},
        searcher:      {name: {snes: {en: "Searcher", ja: "サーチャー"}, pr: "Searcher"},       exp: {sfc: 15004, snes: 18200, pr: 10503}},
        shadow:        {name: {snes: {en: "Shadow",   ja: "こくりゅう"}, pr: "Shadow Dragon"},    exp: {"*": 1, snes: 5000}},
        skelton:       {name: {snes: {en: "Skelton",  ja: "スケルトン"}, pr: "Skeleton"},        exp: {sfc: 238, snes: 240, pr: 167}},
        soldier:       {name: {snes: {en: "Soldier",  ja: "バロンへい"}, pr: "Baron Soldier"},   exp: {sfc: 157, snes: 160, pr: 110}},
        soul:          {name: {snes: {en: "Soul",     ja: "ソウル"}, pr: "Soul"},               exp: {sfc: 460, snes: 510, pr: 322}},
        spirit:        {name: {snes: {en: "Spirit",   ja: "スピリット"}, pr: "Spirit"},           exp: {sfc: 278, snes: 290, pr: 195}},
        trapdoor:      {name: {snes: {en: "TrapDoor", ja: "アサルトドアー"}, pr: "Trap Door"},      exp: {sfc: 30000, snes: 31100, pr: 21000}},
        valvalis:      {name: {snes: {en: "Valvalis", ja: "バルバリシア"}, pr: "Barbariccia"},    exp: {sfc: 9000, snes: 9500, pr: 6300}},
        waterhag:      {name: {snes: {en: "WaterHag", ja: "サハギン"}, pr: "Sahagin"},        exp: {sfc: 136, snes: 140, pr: 95}},
        waterhag_boss: {name: {snes: {en: "WaterHag", ja: "サハギン"}, pr: "Sahagin"},        exp: {"*": 800, pr: 560}},
        weeper:        {name: {snes: {en: "Weeper",   ja: "レーシイ"}, pr: "Leshy"},            exp: {sfc: 157, snes: 160, pr: 110}},
        zombie:        {name: {snes: {en: "Zombie",   ja: "ゾンビー"}, pr: "Zombie"},           exp: {sfc: 112, snes: 120, pr: 78}},
    };

    let _battleData = {
        antlion: {
            monsters: {
                antlion: {modify: false, count: 1},
            },
            name: _monsterData.antlion.name,
            party: {[CHARACTER_DKC]: true, [CHARACTER_EDWARD]: true, [CHARACTER_RYDIA]: true},
            shadow: [CHARACTER_KAIN, CHARACTER_TELLAH],
        },
        avenger: {
            monsters: {
                molbol: {modify: false, count: 4},
            },
            name: {snes: {en: "Avenger Chest", ja: "アベンジャーチェスト"}, pr: "Avenger Chest"},
            party: {[CHARACTER_CECIL]: false, [CHARACTER_EDGE]: false, [CHARACTER_KAIN]: true, [CHARACTER_ROSA]: false, [CHARACTER_RYDIA]: false},
            shadow: [],
        },
        baigan: {
            monsters: {
                baigan: {modify: false, count: 1},
                left_arm: {modify: true, count: 1},
                rightarm: {modify: true, count: 1},
            },
            name: _monsterData.baigan.name,
            party: {[CHARACTER_CECIL]: true, [CHARACTER_PALOM]: false, [CHARACTER_POROM]: false, [CHARACTER_TELLAH]: true, [CHARACTER_YANG]: false},
            shadow: [CHARACTER_KAIN, CHARACTER_RYDIA, CHARACTER_ROSA],
        },
        calbrena: {
            monsters: {
                brena: {modify: true, count: 3},
                cal: {modify: true, count: 3},
                calbrena: {modify: true, count: 0},
            },
            name: _monsterData.calbrena.name,
            party: {[CHARACTER_CECIL]: true, [CHARACTER_KAIN]: true, [CHARACTER_ROSA]: true, [CHARACTER_YANG]: true},
            shadow: [CHARACTER_RYDIA],
        },
        cpu: {
            monsters: {
                attacker: {modify: true, count: 1},
                cpu: {modify: false, count: 1},
                defender: {modify: true, count: 1},
            },
            name: _monsterData.cpu.name,
            party: {[CHARACTER_CECIL]: true, [CHARACTER_EDGE]: true, [CHARACTER_FUSOYA]: true, [CHARACTER_ROSA]: false, [CHARACTER_RYDIA]: false},
            shadow: [CHARACTER_KAIN],
        },
        d_mist: {
            monsters: {
                d_mist: {modify: false, count: 1},
            },
            name: _monsterData.d_mist.name,
            party: {[CHARACTER_DKC]: true, [CHARACTER_KAIN]: true},
            shadow: [],
        },
        dark_elf: {
            monsters: {
                dark_elf: {modify: false, count: 1},
            },
            name: _monsterData.dark_elf.name,
            party: {[CHARACTER_CECIL]: true, [CHARACTER_CID]: false, [CHARACTER_TELLAH]: true, [CHARACTER_YANG]: true},
            shadow: [CHARACTER_KAIN, CHARACTER_RYDIA, CHARACTER_ROSA],
        },
        dark_imps: {
            monsters: {
                dark_imp: {modify: true, count: 3},
            },
            name: {snes: {en: "Dark Imps", ja: "ゴブリンキャップ x3"}, pr: "Goblin Captains"},
            party: {[CHARACTER_CECIL]: true, [CHARACTER_KAIN]: true, [CHARACTER_ROSA]: true, [CHARACTER_RYDIA]: true, [CHARACTER_YANG]: true},
            shadow: [],
        },
        dr_lugae_barnabas: {
            monsters: {
                dr_lugae_dr: {modify: true, count: 0},
                balnab: {modify: true, count: 1},
                balnab_z: {modify: true, count: 1},
            },
            name: {pr: "Dr. Lugae and Barnabas"},
            party: {[CHARACTER_CECIL]: true, [CHARACTER_KAIN]: true, [CHARACTER_ROSA]: true, [CHARACTER_RYDIA]: true, [CHARACTER_YANG]: true},
            shadow: [],
        },
        dr_lugae: {
            monsters: {
                dr_lugae: {modify: false, count: 1},
            },
            name: _monsterData.dr_lugae.name,
            party: {[CHARACTER_CECIL]: true, [CHARACTER_KAIN]: true, [CHARACTER_ROSA]: false, [CHARACTER_RYDIA]: true, [CHARACTER_YANG]: true},
            shadow: [],
        },
        elements: {
            monsters: {
                elements_1: {modify: true, count: 1},
                elements_2: {modify: true, count: 0},
            },
            name: {snes: {en: "Elements", ja: "してんのう"}, pr: "Elemental Lords"},
            party: {[CHARACTER_CECIL]: true, [CHARACTER_EDGE]: true, [CHARACTER_FUSOYA]: true, [CHARACTER_ROSA]: false, [CHARACTER_RYDIA]: false},
            shadow: [CHARACTER_KAIN],
        },
        elements_pr: {
            monsters: {
                elements_pr: {modify: false, count: 1},
            },
            name: _monsterData.elements_pr.name,
            party: {[CHARACTER_CECIL]: false, [CHARACTER_EDGE]: false, [CHARACTER_FUSOYA]: true, [CHARACTER_ROSA]: false, [CHARACTER_RYDIA]: false},
            shadow: [CHARACTER_KAIN],
        },
        evilwall: {
            monsters: {
                evilwall: {modify: false, count: 1},
            },
            name: _monsterData.evilwall.name,
            party: {[CHARACTER_CECIL]: true, [CHARACTER_EDGE]: true, [CHARACTER_KAIN]: true, [CHARACTER_ROSA]: true, [CHARACTER_RYDIA]: true},
            shadow: [],
        },
        fabul_1: {
            monsters: {
                general: {modify: true, count: 0},
                fighter: {modify: true, count: 2},
            },
            name: {snes: {en: "Fabul Gauntlet #1: General/Fighters", ja: "ファブール 1: キャプテン / バロンかいへい"}, pr: "Fabul Gauntlet #1: Captain/Baron Warriors"},
            party: {[CHARACTER_DKC]: true, [CHARACTER_EDWARD]: true, [CHARACTER_YANG]: true},
            shadow: [CHARACTER_KAIN, CHARACTER_TELLAH, CHARACTER_ROSA],
        },
        fabul_2: {
            monsters: {
                imp_cap: {modify: true, count: 1},
                waterhag: {modify: true, count: 1},
                weeper: {modify: true, count: 1},
            },
            name: {snes: {en: "Fabul Gauntlet #2: Weeper/WaterHag/Imp Cap.", ja: "ファブール 2: レーシイ / サハギン / ドモボーイ"}, pr: "Fabul Gauntlet #2: Leshy/Sahagin/Domovoi"},
            party: {[CHARACTER_DKC]: true, [CHARACTER_EDWARD]: true, [CHARACTER_YANG]: true},
            shadow: [CHARACTER_KAIN, CHARACTER_TELLAH, CHARACTER_ROSA],
        },
        fabul_3: {
            monsters: {
                general: {modify: true, count: 0},
                fighter: {modify: true, count: 2},
            },
            name: {snes: {en: "Fabul Gauntlet #3: General/Fighters", ja: "ファブール 3: キャプテン / バロンかいへい"}, pr: "Fabul Gauntlet #3: Captain/Baron Warriors"},
            party: {[CHARACTER_DKC]: true, [CHARACTER_EDWARD]: true, [CHARACTER_YANG]: true},
            shadow: [CHARACTER_KAIN, CHARACTER_TELLAH, CHARACTER_ROSA],
        },
        fabul_4: {
            monsters: {
                gargoyle: {modify: false, count: 1},
            },
            name: {snes: {en: "Fabul Gauntlet #4: Gargoyle", ja: "ファブール 4: ガーゴイル"}, pr: "Fabul Gauntlet #4: Gargoyle"},
            party: {[CHARACTER_DKC]: true, [CHARACTER_EDWARD]: true, [CHARACTER_YANG]: true},
            shadow: [CHARACTER_KAIN, CHARACTER_TELLAH, CHARACTER_ROSA],
        },
        fabul_5: {
            monsters: {
                imp_cap: {modify: true, count: 1},
                waterhag: {modify: true, count: 1},
                weeper: {modify: true, count: 1},
            },
            name: {snes: {en: "Fabul Gauntlet #5: Weeper/WaterHag/Imp Cap.", ja: "ファブール 5: レーシイ / サハギン / ドモボーイ"}, pr: "Fabul Gauntlet #5: Leshy/Sahagin/Domovoi"},
            party: {[CHARACTER_DKC]: true, [CHARACTER_EDWARD]: true, [CHARACTER_YANG]: true},
            shadow: [CHARACTER_KAIN, CHARACTER_TELLAH, CHARACTER_ROSA],
        },
        fabul_6: {
            monsters: {
                general: {modify: true, count: 0},
                fighter: {modify: true, count: 2},
            },
            name: {snes: {en: "Fabul Gauntlet #6: General/Fighters", ja: "ファブール 6: キャプテン / バロンかいへい"}, pr: "Fabul Gauntlet #6: Captain/Baron Warriors"},
            party: {[CHARACTER_DKC]: true, [CHARACTER_EDWARD]: true, [CHARACTER_YANG]: true},
            shadow: [CHARACTER_KAIN, CHARACTER_TELLAH, CHARACTER_ROSA],
        },
        flamedog: {
            monsters: {
                flamedog: {modify: false, count: 1},
            },
            name: _monsterData.flamedog.name,
            party: {[CHARACTER_CECIL]: true, [CHARACTER_CID]: false, [CHARACTER_TELLAH]: true, [CHARACTER_YANG]: true},
            shadow: [CHARACTER_KAIN, CHARACTER_RYDIA, CHARACTER_ROSA],
        },
        golbez: {
            monsters: {
                golbez: {modify: false, count: 1},
                shadow: {modify: false, count: 1},
            },
            name: _monsterData.golbez.name,
            party: {[CHARACTER_CECIL]: true, [CHARACTER_KAIN]: true, [CHARACTER_ROSA]: false, [CHARACTER_RYDIA]: true, [CHARACTER_YANG]: false},
            shadow: [],
        },
        grind: {
            monsters: {
                beamer: {modify: true, count: 2},
                d_machin: {modify: true, count: 15},
                searcher: {modify: true, count: 1},
            },
            name: {snes: {en: "Grind Fight", ja: "レベル上げ"}, pr: "Grind Fight"},
            party: {[CHARACTER_CECIL]: false, [CHARACTER_EDGE]: true, [CHARACTER_FUSOYA]: false, [CHARACTER_ROSA]: false, [CHARACTER_RYDIA]: false},
            shadow: [CHARACTER_KAIN],
        },
        kainazzo: {
            monsters: {
                kainazzo: {modify: false, count: 1},
            },
            name: _monsterData.kainazzo.name,
            party: {[CHARACTER_CECIL]: true, [CHARACTER_PALOM]: false, [CHARACTER_POROM]: false, [CHARACTER_TELLAH]: true, [CHARACTER_YANG]: true},
            shadow: [CHARACTER_KAIN, CHARACTER_RYDIA, CHARACTER_ROSA],
        },
        magus_sisters: {
            monsters: {
                cindy: {modify: false, count: 1},
                mindy: {modify: false, count: 1},
                sandy: {modify: false, count: 1},
            },
            name: {snes: {en: "Magus Sisters", ja: "メーガス三姉妹"}, pr: "Magus Sisters"},
            party: {[CHARACTER_CECIL]: true, [CHARACTER_CID]: false, [CHARACTER_TELLAH]: true, [CHARACTER_YANG]: false},
            shadow: [CHARACTER_KAIN, CHARACTER_RYDIA, CHARACTER_ROSA],
        },
        milon: {
            monsters: {
                milon: {modify: false, count: 1},
                ghast: {modify: false, count: 4},
            },
            name: _monsterData.milon.name,
            party: {[CHARACTER_DKC]: true, [CHARACTER_PALOM]: true, [CHARACTER_POROM]: true, [CHARACTER_TELLAH]: true},
            shadow: [CHARACTER_KAIN, CHARACTER_RYDIA, CHARACTER_ROSA, CHARACTER_YANG],
        },
        milon_z: {
            monsters: {
                milon_z: {modify: false, count: 1},
            },
            name: _monsterData.milon_z.name,
            party: {[CHARACTER_DKC]: true, [CHARACTER_PALOM]: true, [CHARACTER_POROM]: false, [CHARACTER_TELLAH]: true},
            shadow: [CHARACTER_KAIN, CHARACTER_RYDIA, CHARACTER_ROSA, CHARACTER_YANG],
        },
        mombomb: {
            monsters: {
                bomb: {modify: true, count: 3},
                graybomb: {modify: true, count: 3},
            },
            name: {snes: {en: "MomBomb", ja: "マザーボム"}, pr: "Mom Bomb"},
            party: {[CHARACTER_DKC]: true, [CHARACTER_EDWARD]: true, [CHARACTER_ROSA]: true, [CHARACTER_RYDIA]: true, [CHARACTER_YANG]: true},
            shadow: [CHARACTER_KAIN, CHARACTER_TELLAH],
        },
        octomamm: {
            monsters: {
                octomamm: {modify: false, count: 1},
            },
            name: _monsterData.octomamm.name,
            party: {[CHARACTER_DKC]: true, [CHARACTER_RYDIA]: true, [CHARACTER_TELLAH]: true},
            shadow: [CHARACTER_KAIN],
        },
        officer_soldiers: {
            monsters: {
                officer: {modify: true, count: 0},
                soldier: {modify: true, count: 3},
            },
            name: {snes: {en: "Officer/Soldiers", ja: "ジェネラル / バロンへい"}, pr: "General/Baron Soldiers"},
            party: {[CHARACTER_DKC]: true},
            shadow: [CHARACTER_KAIN],
        },
        ordeals_1: {
            monsters: {
                ghoul: {modify: true, count: 0},
                lilith: {modify: true, count: 0},
                red_bone: {modify: true, count: 0},
                revenant: {modify: true, count: 0},
                skelton: {modify: true, count: 0},
                soul: {modify: true, count: 0},
                spirit: {modify: true, count: 0},
                zombie: {modify: true, count: 0},
            },
            name: {snes: {en: "Mt. Ordeals Grind", ja: "試練の山でレベル上げ"}, pr: "Mt. Ordeals Grind"},
            party: {[CHARACTER_CECIL]: true, [CHARACTER_PALOM]: false, [CHARACTER_POROM]: false, [CHARACTER_TELLAH]: false},
            shadow: [CHARACTER_KAIN, CHARACTER_RYDIA, CHARACTER_ROSA, CHARACTER_YANG],
        },
        pikes: {
            monsters: {
                pike: {modify: true, count: 3},
            },
            name: {snes: {en: "Pike x3", ja: "フライキラー x3"}, pr: "Killer Fish x3"},
            party: {[CHARACTER_DKC]: true, [CHARACTER_RYDIA]: true, [CHARACTER_TELLAH]: true},
            shadow: [CHARACTER_KAIN],
        },
        rubicant: {
            monsters: {
                rubicant: {modify: false, count: 1},
            },
            name: _monsterData.rubicant.name,
            party: {[CHARACTER_CECIL]: true, [CHARACTER_EDGE]: true, [CHARACTER_KAIN]: true, [CHARACTER_ROSA]: true, [CHARACTER_RYDIA]: true},
            shadow: [],
        },
        trapdoor_1: {
            monsters: {
                trapdoor: {modify: true, count: 1},
            },
            name: {snes: {en: "TrapDoor 1", ja: "アサルトドアー 1"}, pr: "Trap Door 1"},
            party: {[CHARACTER_CECIL]: false, [CHARACTER_EDGE]: true, [CHARACTER_KAIN]: true, [CHARACTER_ROSA]: true, [CHARACTER_RYDIA]: true},
            shadow: [],
        },
        trapdoor_2: {
            monsters: {
                trapdoor: {modify: true, count: 1},
            },
            name: {snes: {en: "TrapDoor 2", ja: "アサルトドアー 2"}, pr: "Trap Door 2"},
            party: {[CHARACTER_CECIL]: false, [CHARACTER_EDGE]: true, [CHARACTER_KAIN]: true, [CHARACTER_ROSA]: true, [CHARACTER_RYDIA]: true},
            shadow: [],
        },
        trapdoor_3: {
            monsters: {
                trapdoor: {modify: true, count: 1},
            },
            name: {snes: {en: "TrapDoor 3+", ja: "アサルトドアー 3+"}, pr: "Trap Door 3+"},
            party: {[CHARACTER_CECIL]: false, [CHARACTER_EDGE]: true, [CHARACTER_KAIN]: true, [CHARACTER_ROSA]: true, [CHARACTER_RYDIA]: true},
            shadow: [],
        },
        valvalis: {
            monsters: {
                valvalis: {modify: false, count: 1},
            },
            name: _monsterData.valvalis.name,
            party: {[CHARACTER_CECIL]: true, [CHARACTER_CID]: true, [CHARACTER_KAIN]: true, [CHARACTER_ROSA]: true, [CHARACTER_YANG]: true},
            shadow: [CHARACTER_RYDIA],
        },
        waterhag: {
            monsters: {
                waterhag_boss: {modify: false, count: 1},
            },
            name: _monsterData.waterhag.name,
            party: {[CHARACTER_EDWARD]: true},
            shadow: [CHARACTER_KAIN, CHARACTER_TELLAH],
        },
        waterway_1: {
            monsters: {
                pike: {modify: true, count: 2},
                evilshel: {modify: true, count: 2},
            },
            name: {snes: {en: "Watery Pass Grind", ja: "地下水脈でレベル上げ"}, pr: "Underground Waterway Grind"},
            party: {[CHARACTER_DKC]: true, [CHARACTER_RYDIA]: true, [CHARACTER_TELLAH]: true},
            shadow: [CHARACTER_KAIN],
        },
    };

    let _routeData = {
        glitchless: {
            battles: [
                "d_mist",
                "officer_soldiers",
                "pikes",
                "octomamm",
                "antlion",
                "waterhag",
                "mombomb",
                "fabul_1",
                "fabul_2",
                "fabul_3",
                "fabul_4",
                "fabul_5",
                "fabul_6",
                "milon",
                "milon_z",
                "baigan",
                "kainazzo",
                "dark_elf",
                "flamedog",
                "magus_sisters",
                "valvalis",
                "calbrena",
                "golbez",
                "dr_lugae",
                "dark_imps",
                "rubicant",
                "trapdoor_1",
                "trapdoor_2",
                "trapdoor_3",
                "evilwall",
                "grind",
                "elements",
                "cpu",
            ],
            exp_table: "snes",
            monster_names: "snes",
            name: "Any% Glitchless",
            overrides: {
                cpu: {
                    party: { [CHARACTER_CECIL]: false, [CHARACTER_ROSA]: true },
                },
                elements: {
                    monsters: { elements_1: { count: 0 }, elements_2: { count: 1 }},
                    party: { [CHARACTER_CECIL]: false, [CHARACTER_ROSA]: true},
                },
                grind: {
                    monsters: { d_machin: { count: 17 }},
                    party: { [CHARACTER_EDGE]: false, [CHARACTER_ROSA]: true },
                },
                magus_sisters: {
                    monsters: {sandy: { modify: true }},
                    party: { [CHARACTER_CECIL]: false },
                },
                milon_z: {
                    party: { [CHARACTER_POROM]: true },
                },
                valvalis: {
                    party: { [CHARACTER_CID]: false },
                },
            },
            restrictions: {
                cpu: {
                    [CHARACTER_CECIL]: [null, 27],
                    [CHARACTER_EDGE]: [32, null],
                    [CHARACTER_ROSA]: [20, null],
                },
                dark_imps: {
                    [CHARACTER_CECIL]: [null, 19],
                },
                evilwall: {
                    [CHARACTER_CECIL]: [null, 21],
                },
                golbez: {
                    [CHARACTER_RYDIA]: [19, null],
                    [CHARACTER_YANG]: [17, null],
                },
                magus_sisters: {
                    [CHARACTER_KAIN]: [19, null],
                    [CHARACTER_ROSA]: [null, 19],
                },
            },
        },
        "pixel-remaster": {
            battles: [
                "d_mist",
                "officer_soldiers",
                "waterway_1",
                "octomamm",
                "antlion",
                "waterhag",
                "mombomb",
                "fabul_1",
                "fabul_2",
                "fabul_3",
                "fabul_4",
                "fabul_5",
                "fabul_6",
                "milon",
                "milon_z",
                "ordeals_1",
                "baigan",
                "kainazzo",
                "dark_elf",
                "flamedog",
                "magus_sisters",
                "valvalis",
                "calbrena",
                "golbez",
                "dr_lugae_barnabas",
                "dr_lugae",
                "dark_imps",
                "rubicant",
                "avenger",
                "trapdoor_1",
                "trapdoor_2",
                "trapdoor_3",
                "evilwall",
                "elements_pr",
                "cpu",
            ],
            exp_table: "pr",
            monster_names: "pr",
            name: "Pixel Remaster Any%",
            overrides: {
                antlion: {
                    party: { [CHARACTER_RYDIA]: false },
                },
                baigan: {
                    party: { [CHARACTER_YANG]: true },
                },
                calbrena: {
                    monsters: { cal: { count: 0 }, brena: { count: 3}, calbrena: { count: 1 }},
                },
                cpu: {
                    party: { [CHARACTER_CECIL]: false, [CHARACTER_EDGE]: false, [CHARACTER_ROSA]: false, [CHARACTER_RYDIA]: false },
                },
                dark_elf: {
                    party: { [CHARACTER_CID]: true, [CHARACTER_TELLAH]: false },
                },
                elements: {
                    monsters: { elements_1: { count: 0 }, elements_2: { count: 1 }},
                    party: { [CHARACTER_CECIL]: false, [CHARACTER_ROSA]: true},
                },
                evilwall: {
                    party: { [CHARACTER_CECIL]: false, [CHARACTER_EDGE]: false, [CHARACTER_KAIN]: true, [CHARACTER_ROSA]: false, [CHARACTER_RYDIA]: false },
                },
                fabul_1: {
                    shadow: [CHARACTER_KAIN, CHARACTER_TELLAH, CHARACTER_ROSA, CHARACTER_RYDIA],
                },
                fabul_2: {
                    shadow: [CHARACTER_KAIN, CHARACTER_TELLAH, CHARACTER_ROSA, CHARACTER_RYDIA],
                },
                fabul_3: {
                    shadow: [CHARACTER_KAIN, CHARACTER_TELLAH, CHARACTER_ROSA, CHARACTER_RYDIA],
                },
                fabul_4: {
                    shadow: [CHARACTER_KAIN, CHARACTER_TELLAH, CHARACTER_ROSA, CHARACTER_RYDIA],
                },
                fabul_5: {
                    shadow: [CHARACTER_KAIN, CHARACTER_TELLAH, CHARACTER_ROSA, CHARACTER_RYDIA],
                },
                fabul_6: {
                    shadow: [CHARACTER_KAIN, CHARACTER_TELLAH, CHARACTER_ROSA, CHARACTER_RYDIA],
                },
                flamedog: {
                    party: { [CHARACTER_CID]: true },
                },
                grind: {
                    monsters: { searcher: { count: 0 }, beamer: { count: 0 }, d_machin: { count: 0 } },
                    party: { [CHARACTER_EDGE]: false, [CHARACTER_ROSA]: true },
                },
                dr_lugae: {
                    party: { [CHARACTER_ROSA]: true },
                },
                magus_sisters: {
                    monsters: {cindy: { modify: true }, mindy: { modify: true }, sandy: { modify: true } },
                    party: { [CHARACTER_CID]: true, [CHARACTER_YANG]: true },
                },
                milon: {
                    party: { [CHARACTER_TELLAH]: false },
                },
                milon_z: {
                    party: { [CHARACTER_PALOM]: false, [CHARACTER_POROM]: false, [CHARACTER_TELLAH]: false },
                },
                octomamm: {
                    party: { [CHARACTER_DKC]: true, [CHARACTER_RYDIA]: false, [CHARACTER_TELLAH]: false },
                },
                pikes: {
                    monsters: { pike: { count: 0 } },
                },
                trapdoor_1: {
                    party: { [CHARACTER_CECIL]: false, [CHARACTER_EDGE]: false, [CHARACTER_KAIN]: true, [CHARACTER_ROSA]: false, [CHARACTER_RYDIA]: false },
                },
                trapdoor_2: {
                    party: { [CHARACTER_CECIL]: false, [CHARACTER_EDGE]: false, [CHARACTER_KAIN]: true, [CHARACTER_ROSA]: false, [CHARACTER_RYDIA]: false },
                },
                trapdoor_3: {
                    monsters: {trapdoor: { count: 8 }},
                    party: { [CHARACTER_CECIL]: false, [CHARACTER_EDGE]: false, [CHARACTER_KAIN]: true, [CHARACTER_ROSA]: false, [CHARACTER_RYDIA]: false },
                },
                waterhag: {
                    shadow: [],
                },
            },
            restrictions: {
                cpu: {
                    [CHARACTER_KAIN]: [47, null],
                },
                kainazzo: {
                    [CHARACTER_CECIL]: [15, null],
                },
                octomamm: {
                    [CHARACTER_DKC]: [13, null],
                },
            },
        },
        "no64-excalbur": {
            battles: [
                "d_mist",
                "officer_soldiers",
                "octomamm",
                "antlion",
                "waterhag",
                "mombomb",
                "fabul_1",
                "fabul_2",
                "fabul_3",
                "fabul_4",
                "fabul_5",
                "fabul_6",
                "milon",
                "milon_z",
                "baigan",
                "kainazzo",
                "dark_elf",
                "flamedog",
                "magus_sisters",
                "valvalis",
                "calbrena",
                "golbez",
                "dr_lugae",
                "dark_imps",
                "rubicant",
                "grind",
                "elements",
                "cpu",
            ],
            exp_table: "snes",
            monster_names: "snes",
            name: "Any% No64 (Edge+Excalbur)",
            overrides: {},
            restrictions: {
                cpu: {
                    [CHARACTER_CECIL]: [28, null],
                    [CHARACTER_ROSA]: [20, null],
                },
                dark_imps: {
                    [CHARACTER_CECIL]: [20, null],
                },
                golbez: {
                    [CHARACTER_YANG]: [17, null],
                },
                magus_sisters: {
                    [CHARACTER_KAIN]: [19, null],
                },
                rubicant: {
                    [CHARACTER_CECIL]: [null, 21],
                },
            },
        },
        "no64-rosa": {
            battles: [
                "d_mist",
                "officer_soldiers",
                "octomamm",
                "antlion",
                "waterhag",
                "mombomb",
                "fabul_1",
                "fabul_2",
                "fabul_3",
                "fabul_4",
                "fabul_5",
                "fabul_6",
                "milon",
                "milon_z",
                "baigan",
                "kainazzo",
                "dark_elf",
                "flamedog",
                "magus_sisters",
                "valvalis",
                "calbrena",
                "golbez",
                "dr_lugae",
                "dark_imps",
                "rubicant",
                "grind",
                "elements",
                "cpu",
            ],
            exp_table: "snes",
            monster_names: "snes",
            name: "Any% No64 (Rosa)",
            overrides: {
                cpu: {
                    party: { [CHARACTER_CECIL]: false, [CHARACTER_EDGE]: false, [CHARACTER_ROSA]: true, [CHARACTER_RYDIA]: true },
                },
                elements: {
                    party: { [CHARACTER_CECIL]: false, [CHARACTER_EDGE]: false, [CHARACTER_ROSA]: true},
                },
                grind: {
                    monsters: { d_machin: { count: 17 }},
                    party: { [CHARACTER_EDGE]: false, [CHARACTER_ROSA]: true },
                },
                valvalis: {
                    party: { [CHARACTER_CID]: false },
                },
            },
            restrictions: {
                cpu: {
                    [CHARACTER_CECIL]: [null, 27],
                    [CHARACTER_ROSA]: [20, null],
                    [CHARACTER_RYDIA]: [26, null],
                },
                dark_imps: {
                    [CHARACTER_CECIL]: [20, null],
                },
                golbez: {
                    [CHARACTER_RYDIA]: [19, null],
                    [CHARACTER_YANG]: [17, null],
                },
                magus_sisters: {
                    [CHARACTER_KAIN]: [19, null],
                },
                rubicant: {
                    [CHARACTER_CECIL]: [null, 21],
                },
            },
        },
        nocw: {
            battles: [
                "d_mist",
                "officer_soldiers",
                "octomamm",
                "antlion",
                "waterhag",
                "mombomb",
                "fabul_1",
                "fabul_2",
                "fabul_3",
                "fabul_4",
                "fabul_5",
                "fabul_6",
                "milon",
                "milon_z",
                "baigan",
                "kainazzo",
                "dark_elf",
                "flamedog",
                "magus_sisters",
                "valvalis",
                "calbrena",
                "golbez",
            ],
            exp_table: "snes",
            monster_names: "snes",
            name: "Any% NoCW",
            overrides: {},
            restrictions: {
                magus_sisters: {
                    [CHARACTER_KAIN]: [19, null],
                },
            },
        },
        "sample-sfc": {
            battles: [
                "d_mist",
                "officer_soldiers",
                "octomamm",
                "antlion",
                "waterhag",
                "mombomb",
                "fabul_1",
                "fabul_2",
                "fabul_3",
                "fabul_4",
                "fabul_5",
                "fabul_6",
                "milon",
                "milon_z",
                "ordeals_1",
                "baigan",
                "kainazzo",
                "dark_elf",
                "flamedog",
                "magus_sisters",
                "valvalis",
                "calbrena",
                "golbez",
                "dr_lugae",
                "dark_imps",
                "rubicant",
                "grind",
                "elements",
                "cpu",
            ],
            exp_table: "sfc",
            monster_names: "snes",
            name: "Sample SFC Route (to show EXP differences)",
            overrides: {},
            restrictions: {
                cpu: {
                    [CHARACTER_CECIL]: [null, 27],
                    [CHARACTER_ROSA]: [20, null],
                },
                dark_imps: {
                    [CHARACTER_CECIL]: [20, null],
                },
                golbez: {
                    [CHARACTER_YANG]: [17, null],
                },
                magus_sisters: {
                    [CHARACTER_KAIN]: [19, null],
                },
            },
        },
    };

    /*
     * Global Variables
     */

    let _overrides = {};
    let _monster_overrides = {};

    /*
     * Functions
     */

    var reset = function() {
        _overrides = {};
        _monster_overrides = {};
        updateDisplay(true);
    };

    var init = function() {
        initSelect();
        updateDisplay(true);
    };

    var initSelect = function() {
        var routeSelect = document.getElementById("route-select");
        var languageSelect = document.getElementById("language-select");

        for (const route in _routeData) {
            var option = document.createElement("option");
            option.text = _routeData[route].name;
            option.id = route;
            routeSelect.add(option);
        }

        var englishOption = document.createElement("option");
        englishOption.text = "English";
        englishOption.id = "en";
        languageSelect.add(englishOption);

        var japaneseOption = document.createElement("option");
        japaneseOption.text = "日本語";
        japaneseOption.id = "ja";
        languageSelect.add(japaneseOption);

        routeSelect.addEventListener("change", onRouteChange);
        languageSelect.addEventListener("change", onLanguageChange);
    };

    var getCharacterAlive = function(battle, character) {
        if (battle in _overrides && character in _overrides[battle]) {
            return _overrides[battle][character];
        } else {
            return getDefaultCharacterAlive(battle, character);
        }
    };

    var getDefaultCharacterAlive = function(battle, character) {
        let route = getRoute();

        if (battle in _routeData[route].overrides && "party" in _routeData[route].overrides[battle]) {
            if (character in _routeData[route].overrides[battle].party) {
                return _routeData[route].overrides[battle].party[character];
            }
        }

        return _battleData[battle].party[character];
    };

    var getLevel = function(character, exp, half) {
        let levels = _characterData[character].levels;

        for (let level in levels) {
            let level_exp = levels[level];

            if (half) {
                if (character == CHARACTER_EDWARD) {
                    level_exp = level_exp - 13;
                }

                level_exp = Math.floor((level_exp + 1) / 2);
            }

            if (exp < level_exp) {
                return level - 1;
            }
        }

        return "++";
    };


    var getLocalizedName = function(data, table, language) {
        if (typeof data[table] == "object" && language in data[table]) {
            return data[table][language];
        } else if (typeof data["snes"] == "object" && language != "en" && language in data["snes"]) {
            return data["snes"][language];
        } else {
            return data[table];
        }
    }

    var getMonsterProperty = function(route, battle, monster, property, dfault) {
        if (property == "count" && !dfault) {
            if (battle in _monster_overrides && monster in _monster_overrides[battle]) {
                return _monster_overrides[battle][monster];
            }
        }

        if (battle in _routeData[route].overrides && "monsters" in _routeData[route].overrides[battle]) {
            if (monster in _routeData[route].overrides[battle].monsters && property in _routeData[route].overrides[battle].monsters[monster]) {
                return _routeData[route].overrides[battle].monsters[monster][property];
            }
        }

        return _battleData[battle].monsters[monster][property];
    };

    var getRoute = function() {
        var select = document.getElementById("route-select");
        return select.options[select.selectedIndex].id;
    };

    var getLanguage = function() {
        var select = document.getElementById("language-select");
        return select.options[select.selectedIndex].id;
    }

    var onInputChange = function(e) {
        let tokens = this.id.split("-");
        let route = getRoute();
        let battle = tokens[1];
        let monster = tokens[2];
        let value = e.target.value;

        if (value == getMonsterProperty(route, battle, monster, "count", true)) {
            if (battle in _monster_overrides && monster in _monster_overrides[battle]) {
                delete _monster_overrides[battle][monster];
            }
            this.value = getMonsterProperty(route, battle, monster, "count", true);
        } else {
            if (!(battle in _monster_overrides)) {
                _monster_overrides[battle] = {};
            }

            _monster_overrides[battle][monster] = e.target.value;
        }

        updateDisplay(false);
    };

    var onOverrideClick = function(e) {
        let tokens = this.id.split("-");
        let battle = tokens[1];
        let character = tokens[2];

        if (battle in _overrides && character in _overrides[battle]) {
            delete _overrides[battle][character];
        } else {
            if (!(battle in _overrides)) {
                _overrides[battle] = {};
            }

            _overrides[battle][character] = !getDefaultCharacterAlive(battle, character);
        }

        updateDisplay(false);

        e.preventDefault();
    };

    var updateDisplay = function(reset) {
        var e = document.getElementById("battles");
        var route = getRoute();
        var language = getLanguage();
        var routeData = _routeData[route];
        let warnings = [];

        let half = route == "pixel-remaster";

        let exp = {};

        if (reset) {
            e.innerHTML = "";
        }

        routeData.battles.forEach(function(battle) {
            var battleData = _battleData[battle];
            let battleDiv = document.getElementById("battle-" + battle);
            let addDiv = false;

            if (!battleDiv) {
                battleDiv = document.createElement("div");
                battleDiv.id = "battle-" + battle;
                addDiv = true;
            }

            battleDiv.innerHTML = "<h4>" + getLocalizedName(battleData.name, routeData.monster_names, language) + "</h4>";
            for (let monster in battleData.monsters) {
                let monsters = [];
                if (getMonsterProperty(route, battle, monster, "modify", false)) {
                    monsters.push(monster);
                }

                if (monsters.length > 0) {
                    let form = document.createElement("form");

                    monsters.forEach(function(monster) {
                        let key = "monster-" + battle + "-" + monster;
                        let firstDiv = document.createElement("div");
                        firstDiv.setAttribute("class", "form-group");
                        let label = document.createElement("label");
                        label.setAttribute("for", key);
                        label.innerHTML = "Total " + getLocalizedName(_monsterData[monster].name, routeData.monster_names, language) + " Kills";
                        let input = document.createElement("input");
                        input.setAttribute("type", "number");
                        input.setAttribute("id", key);
                        input.value = getMonsterProperty(route, battle, monster, "count");
                        input.addEventListener("input", onInputChange);
                        firstDiv.appendChild(label);
                        firstDiv.appendChild(input);
                        form.appendChild(firstDiv);
                    });

                    battleDiv.appendChild(form);
                }
            }

            let survivors = 0;

            for (let character in battleData.party) {
                if (getCharacterAlive(battle, character)) {
                    survivors++;
                }
            }

            if (survivors == 0) {
                warnings.push("Zero survivors in " + getLocalizedName(battleData.name, routeData.monster_names, language) + " battle");
            }

            let battleExp = 0;

            for (let monster in battleData.monsters) {
                let count = getMonsterProperty(route, battle, monster, "count", false);

                if (routeData.exp_table in _monsterData[monster].exp) {
                    battleExp += _monsterData[monster].exp[routeData.exp_table] * count;
                } else if ("*" in _monsterData[monster].exp) {
                    battleExp += _monsterData[monster].exp["*"] * count;
                }
            }

            let characterExp = Math.floor(battleExp / survivors);

            let awarded = document.createElement("p");
            awarded.innerHTML = "Awarded " + characterExp + " experience per character";
            battleDiv.appendChild(awarded);

            let list = document.createElement("ul");

            let doCharacter = function(character, index) {
                if (!(character in exp)) {
                    exp[character] = _characterData[character].starting_exp;

                    if (half) {
                        exp[character] = Math.floor((exp[character] + 1) / 2);
                    }
                }

                let oldLevel = getLevel(character, exp[character], half);

                if (getCharacterAlive(battle, character) || index >= 0) {
                    exp[character] += characterExp;
                }

                let newLevel = getLevel(character, exp[character], half);

                var item = document.createElement("li");

                if (index == -1) {
                    var link = document.createElement("a");
                    link.setAttribute("href", "#");
                    link.setAttribute("id", "override-" + battle + "-" + character);

                    if (getCharacterAlive(battle, character)) {
                        link.innerHTML = "<strong>" + _characterData[character].name[language] + " (" + exp[character] + ")</strong>";
                    } else {
                        link.innerHTML = _characterData[character].name[language]  + " (" + exp[character] + ")";
                    }

                    item.appendChild(link);
                    link.addEventListener("click", onOverrideClick);
                } else if (newLevel > oldLevel) {
                    item.innerHTML = "<strong>" + _characterData[character].name[language] + " (" + exp[character] + ")</strong> (shadow)";
                }

                if (newLevel > oldLevel) {
                    let node = document.createTextNode(" (leveled from " + oldLevel + " to " + newLevel + ")");
                    item.appendChild(node);
                }

                if (newLevel > oldLevel || index == -1) {
                    list.appendChild(item);
                }

                if (battle in routeData.restrictions && character in routeData.restrictions[battle]) {
                    let min = routeData.restrictions[battle][character][0];
                    let max = routeData.restrictions[battle][character][1];

                    if (min != null && newLevel < min) {
                        warnings.push(_characterData[character].name[language] + " does not reach level " + min + " by the end of " + getLocalizedName(battleData.name, routeData.monster_names, language));
                    }

                    if (max != null && newLevel > max) {
                        warnings.push(_characterData[character].name[language] + " exceeds level " + max + " at the end of " + getLocalizedName(battleData.name, routeData.monster_names, language));
                    }
                }
            };

            for (let character in battleData.party) {
                doCharacter(character, -1);
            }

            if ("overrides" in routeData && battle in routeData.overrides && "shadow" in routeData.overrides[battle]) {
                routeData.overrides[battle].shadow.forEach(doCharacter);
            } else {
                battleData.shadow.forEach(doCharacter);
            }

            battleDiv.appendChild(list);

            if (addDiv) {
                e.appendChild(battleDiv);
            }
        });

        let status = document.getElementById("status");
        status.style = "position: sticky; top: 60px;";

        if (warnings.length == 0) {
            status.innerHTML = '<p class="alert alert-success">Everything looks good. All known criteria are met!</p>';
        } else {
            status.innerHTML = "";
            let div = document.createElement("div");
            div.className = "alert alert-danger";

            let p = document.createElement("p");
            p.innerHTML = "Warning! The following criteria are currently violated:";

            let list = document.createElement("ul");
            list.style = "margin-bottom: 0;";

            warnings.forEach(function(warning) {
                let item = document.createElement("li");
                item.innerHTML = warning;
                list.appendChild(item);
            });

            div.appendChild(p);
            div.appendChild(list);

            status.appendChild(div);
        }
    };

    var onRouteChange = function() {
        reset();
    };

    var onLanguageChange = function() {
        updateDisplay(false);
    };

    /*
     * Public Definition
     */

    return {
        init: init,
    };
}();
