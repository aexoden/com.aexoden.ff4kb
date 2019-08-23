/*
 * Global Variables
 */

/*
 * TODO:
 *  - Allow for fuzzy searches (with missing encounters or unsure locations).
 *  - Add data to allow the user to continue entering encounters for twin seeds. (route dependent)
 */

var com = com || {};
com.aexoden = com.aexoden || {};

/*
 * Module Definition
 */

com.aexoden.ff4 = function()
{
    /*
     * Data
     */

    var _encounterData = [
		{
			37: "SandMoth x2, Larva x2",
			87: "EvilShel x3, WaterBug x1",
			97: "Zombie x4",
			120: "EvilShel x3, WaterBug x1",
			130: "Pike x3",
			144: "CaveToad x3",
			180: "Pike x3"
		},
		{
			37: "SandMoth x2, Larva x2",
			56: "Sand Man x4",
			87: "Zombie x4",
			97: "EvilShel x3, WaterBug x1",
			120: "CaveToad x3",
			130: "CaveToad x3",
			144: "Pike x3"
		},
		{
			37: "SandMoth x2, Larva x2",
			56: "Sand Man x4",
			87: "Zombie x4",
			120: "EvilShel x3, WaterBug x1",
			130: "CaveToad x3",
			144: "CaveToad x3",
			146: "Pike x3"
		},
		{
			37: "SandMoth x2, Larva x2",
			56: "Sand Man x4",
			87: "Zombie x4",
			120: "EvilShel x3, WaterBug x1",
			130: "CaveToad x3",
			144: "CaveToad x3",
			146: "Pike x3",
			182: "Pike x3"
		},
		{
			56: "SandMoth x2, Larva x2",
			81: "EvilShel x3, WaterBug x1",
			87: "Zombie x4",
			130: "EvilShel x3, WaterBug x1",
			144: "CaveToad x3",
			146: "CaveToad x3",
			182: "Pike x3"
		},
		{
			56: "SandMoth x2, Larva x2",
			81: "EvilShel x3, WaterBug x1",
			87: "Zombie x4",
			130: "EvilShel x3, WaterBug x1",
			146: "CaveToad x3",
			159: "CaveToad x3",
			182: "Pike x3"
		},
		{
			56: "SandMoth x2, Larva x2",
			81: "EvilShel x3, WaterBug x1",
			87: "Zombie x4",
			146: "Pike x3",
			159: "CaveToad x3",
			182: "CaveToad x3",
			183: "Pike x3"
		},
		{
			56: "SandMoth x2, Larva x2",
			81: "EvilShel x3, WaterBug x1",
			146: "Zombie x4",
			159: "Pike x3",
			182: "CaveToad x3",
			183: "CaveToad x3"
		},
		{
			56: "SandMoth x2, Larva x2",
			81: "EvilShel x3, WaterBug x1",
			146: "EvilShel x3, WaterBug x1",
			159: "Pike x3",
			182: "CaveToad x3",
			183: "CaveToad x3"
		},
		{
			35: "SandMoth x2, Larva x2",
			81: "EvilShel x3, WaterBug x1",
			159: "EvilShel x3, WaterBug x1",
			182: "Pike x3",
			183: "CaveToad x3"
		},
		{
			13: "SandMoth x2, Larva x2",
			35: "Sand Man x4",
			81: "EvilShel x3, WaterBug x1",
			159: "Pike x3",
			183: "CaveToad x3"
		},
		{
			13: "SandMoth x2, Larva x2",
			35: "SandMoth x2, Larva x2",
			159: "EvilShel x3, WaterBug x1",
			183: "Pike x3"
		},
		{
			13: "SandMoth x2, Larva x2",
			35: "SandMoth x2, Larva x2",
			64: "SandMoth x2, Larva x2",
			183: "Pike x3"
		},
		{
			13: "SandMoth x2, Larva x2",
			35: "SandMoth x2, Larva x2",
			64: "SandMoth x2, Larva x2",
			158: "Pike x3"
		},
		{
			13: "SandMoth x2, Larva x2",
			29: "SandMoth x2, Larva x2",
			35: "SandMoth x2, Larva x2",
			64: "Sand Man x4",
			158: "CaveToad x3"
		},
		{
			13: "SandMoth x2, Larva x2",
			29: "SandMoth x2, Larva x2",
			35: "SandMoth x2, Larva x2",
			64: "Sand Man x4",
			158: "CaveToad x3"
		},
		{
			2: "SandMoth x2, Larva x2",
			13: "SandMoth x2, Larva x2",
			29: "SandMoth x2, Larva x2",
			35: "Sand Man x4",
			64: "Sandpede x1, Sand Man x2",
			158: "CaveToad x3"
		},
		{
			2: "SandMoth x2, Larva x2",
			13: "SandMoth x2, Larva x2",
			29: "SandMoth x2, Larva x2",
			64: "Sand Man x4",
			93: "CaveToad x3",
			158: "CaveToad x3"
		},
		{
			2: "Sand Man x4",
			29: "SandMoth x2, Larva x2",
			64: "SandMoth x2, Larva x2",
			93: "Pike x3",
			158: "CaveToad x3"
		},
		{
			2: "Sand Man x4",
			29: "SandMoth x2, Larva x2",
			64: "SandMoth x2, Larva x2",
			67: "Sand Man x4",
			93: "CaveToad x3",
			158: "Pike x2, EvilShel x2"
		},
		{
			2: "Sand Man x4",
			29: "SandMoth x2, Larva x2",
			67: "SandMoth x2, Larva x2",
			93: "Pike x3"
		},
		{
			2: "Sand Man x4",
			29: "SandMoth x2, Larva x2",
			67: "SandMoth x2, Larva x2",
			93: "Pike x3",
			96: "CaveToad x3"
		},
		{
			2: "Sand Man x4",
			67: "SandMoth x2, Larva x2",
			93: "EvilShel x3, WaterBug x1",
			96: "Pike x3",
			206: "Pike x2, EvilShel x2"
		},
		{
			2: "Sand Man x4",
			67: "SandMoth x2, Larva x2",
			93: "EvilShel x3, WaterBug x1",
			96: "Pike x3",
			206: "Pike x2, EvilShel x2"
		},
		{
			67: "Sand Man x4",
			96: "Pike x3",
			206: "EvilShel x3, WaterBug x1"
		},
		{
			52: "Sand Man x4",
			67: "SandMoth x2, Larva x2",
			96: "EvilShel x3, WaterBug x1",
			206: "Pike x3"
		},
		{
			52: "Sand Man x4",
			60: "SandMoth x2, Larva x2",
			67: "SandMoth x2, Larva x2",
			96: "Pike x3",
			206: "Pike x2, EvilShel x2"
		},
		{
			52: "Sand Man x4",
			60: "SandWorm x1",
			92: "EvilShel x3, WaterBug x1",
			96: "Pike x3",
			206: "Pike x2, EvilShel x2"
		},
		{
			52: "Sand Man x4",
			60: "SandWorm x1",
			69: "SandMoth x2, Larva x2",
			92: "CaveToad x3",
			206: "Pike x2, EvilShel x2"
		},
		{
			7: "Sand Man x4",
			52: "SandWorm x1",
			60: "SandMoth x2, Larva x2",
			69: "Sandpede x1, Sand Man x2",
			92: "Pike x2, EvilShel x2"
		},
		{
			7: "Sand Man x4",
			52: "SandWorm x1",
			60: "Sand Man x4",
			69: "Sandpede x1, Sand Man x2",
			92: "Pike x2, EvilShel x2",
			188: "Pike x2, EvilShel x2"
		},
		{
			7: "Sand Man x4",
			52: "SandWorm x1",
			60: "Sand Man x4",
			69: "Sandpede x1, Sand Man x2",
			92: "Pike x2, EvilShel x2",
			188: "Pike x2, EvilShel x2"
		},
		{
			7: "Sand Man x4",
			52: "SandWorm x1",
			60: "Sand Man x4",
			69: "Sandpede x1, Sand Man x2",
			92: "Pike x2, EvilShel x2",
			141: "Pike x2, EvilShel x2",
			188: "CaveToad x3"
		},
		{
			7: "Sand Man x4",
			60: "SandWorm x1",
			69: "Sand Man x4",
			92: "CaveToad x3",
			141: "Pike x2, EvilShel x2",
			188: "Pike x2, EvilShel x2"
		},
		{
			7: "Sand Man x4",
			69: "SandWorm x1",
			121: "Pike x3",
			141: "CaveToad x3",
			188: "Pike x2, EvilShel x2"
		},
		{
			7: "Sand Man x4",
			31: "SandWorm x1",
			69: "Sand Man x4",
			121: "CaveToad x3",
			141: "Pike x2, EvilShel x2",
			188: "Pike x2, EvilShel x2"
		},
		{
			7: "Sand Man x4",
			31: "SandWorm x1",
			121: "Pike x3",
			123: "CaveToad x3",
			141: "Pike x2, EvilShel x2",
			188: "Pike x2, EvilShel x2"
		},
		{
			31: "Sand Man x4",
			94: "EvilShel x3, WaterBug x1",
			121: "Pike x3",
			123: "CaveToad x3",
			141: "Pike x2, EvilShel x2"
		},
		{
			31: "Sand Man x4",
			73: "EvilShel x3, WaterBug x1",
			94: "Pike x3",
			121: "CaveToad x3",
			123: "Pike x2, EvilShel x2",
			141: "Pike x2, EvilShel x2"
		},
		{
			31: "Sand Man x4",
			73: "EvilShel x3, WaterBug x1",
			94: "Pike x3",
			121: "CaveToad x3",
			123: "Pike x2, EvilShel x2",
			203: "Pike x2, EvilShel x2"
		},
		{
			31: "Sandpede x1, Sand Man x2",
			73: "EvilShel x3, WaterBug x1",
			94: "Pike x3",
			121: "CaveToad x3",
			123: "Pike x2, EvilShel x2",
			125: "Pike x2, EvilShel x2",
			203: "Pike x2, EvilShel x2"
		},
		{
			26: "Sandpede x1, Sand Man x2",
			31: "SandMoth x2, Larva x2",
			73: "Pike x3",
			94: "CaveToad x3",
			123: "Pike x2, EvilShel x2",
			125: "EvilShel x3, WaterBug x1",
			203: "Pike x2, EvilShel x2"
		},
		{
			26: "Sandpede x1, Sand Man x2",
			31: "SandMoth x2, Larva x2",
			73: "Pike x3",
			94: "CaveToad x3",
			123: "Pike x2, EvilShel x2",
			125: "EvilShel x3, WaterBug x1",
			203: "Pike x2, EvilShel x2"
		},
		{
			26: "Sandpede x1, Sand Man x2",
			47: "SandMoth x2, Larva x2",
			73: "Pike x3",
			94: "CaveToad x3",
			125: "Pike x2, EvilShel x2",
			203: "EvilShel x3, WaterBug x1"
		},
		{
			26: "Sandpede x1, Sand Man x2",
			47: "SandMoth x2, Larva x2",
			58: "Sand Man x4",
			73: "CaveToad x3",
			125: "EvilShel x3, WaterBug x1",
			203: "EvilShel x3, WaterBug x1"
		},
		{
			26: "Sandpede x1, Sand Man x2",
			47: "SandMoth x2, Larva x2",
			58: "Sand Man x4",
			61: "Sandpede x1, Sand Man x2",
			125: "EvilShel x3, WaterBug x1",
			203: "EvilShel x3, WaterBug x1"
		},
		{
			26: "Sandpede x1, Sand Man x2",
			47: "SandMoth x2, Larva x2",
			58: "Sand Man x4",
			61: "Sandpede x1, Sand Man x2",
			125: "EvilShel x3, WaterBug x1",
			186: "EvilShel x3, WaterBug x1"
		},
		{
			26: "Sandpede x1, Sand Man x2",
			27: "SandMoth x2, Larva x2",
			47: "Sand Man x4",
			58: "Sandpede x1, Sand Man x2",
			61: "Sand Man x4",
			186: "EvilShel x3, WaterBug x1"
		},
		{
			26: "Sandpede x1, Sand Man x2",
			27: "SandMoth x2, Larva x2",
			47: "Sand Man x4",
			58: "Sandpede x1, Sand Man x2",
			61: "Sand Man x4",
			186: "EvilShel x3, WaterBug x1"
		},
		{
			27: "Sandpede x1, Sand Man x2",
			47: "SandMoth x2, Larva x2",
			58: "Sand Man x4",
			61: "Imp x4",
			167: "EvilShel x3, WaterBug x1",
			186: "EvilShel x3, WaterBug x1"
		},
		{
			27: "Sandpede x1, Sand Man x2",
			47: "SandMoth x2, Larva x2",
			54: "Sand Man x4",
			58: "Imp x4",
			61: "Sand Man x4",
			167: "EvilShel x3, WaterBug x1",
			186: "Pike x2, EvilShel x2"
		},
		{
			27: "Sandpede x1, Sand Man x2",
			54: "SandMoth x2, Larva x2",
			58: "Sandpede x1, Sand Man x2",
			61: "Imp x4",
			89: "EvilShel x3, WaterBug x1",
			167: "EvilShel x3, WaterBug x1",
			186: "Pike x2, EvilShel x2"
		},
		{
			27: "Sandpede x1, Sand Man x2",
			54: "SandMoth x2, Larva x2",
			61: "Sandpede x1, Sand Man x2",
			89: "Pike x2, EvilShel x2",
			143: "EvilShel x3, WaterBug x1",
			167: "EvilShel x3, WaterBug x1",
			186: "Pike x2, EvilShel x2"
		},
		{
			15: "Sandpede x1, Sand Man x2",
			27: "SandMoth x2, Larva x2",
			54: "Sandpede x1, Sand Man x2",
			89: "Pike x2, EvilShel x2",
			143: "EvilShel x3, WaterBug x1",
			167: "EvilShel x3, WaterBug x1"
		},
		{
			15: "Sandpede x1, Sand Man x2",
			27: "SandMoth x2, Larva x2",
			53: "Sandpede x1, Sand Man x2",
			54: "Imp x4",
			89: "EvilShel x3, WaterBug x1",
			143: "EvilShel x3, WaterBug x1",
			167: "Pike x2, EvilShel x2"
		},
		{
			15: "Sandpede x1, Sand Man x2",
			53: "SandMoth x2, Larva x2",
			54: "Sandpede x1, Sand Man x2",
			89: "Pike x2, EvilShel x2",
			99: "EvilShel x3, WaterBug x1",
			143: "EvilShel x3, WaterBug x1",
			167: "Pike x2, EvilShel x2"
		},
		{
			15: "Sandpede x1, Sand Man x2",
			53: "SandMoth x2, Larva x2",
			54: "Sandpede x1, Sand Man x2",
			89: "Pike x2, EvilShel x2",
			99: "EvilShel x3, WaterBug x1",
			143: "EvilShel x3, WaterBug x1"
		},
		{
			15: "Sandpede x1, Sand Man x2",
			24: "SandMoth x2, Larva x2",
			53: "Sandpede x1, Sand Man x2",
			54: "Imp x4",
			89: "EvilShel x3, WaterBug x1",
			99: "Pike x3",
			143: "Pike x2, EvilShel x2"
		},
		{
			15: "Sandpede x1, Sand Man x2",
			24: "SandMoth x2, Larva x2",
			53: "Sandpede x1, Sand Man x2",
			99: "Pike x2, EvilShel x2",
			143: "EvilShel x3, WaterBug x1"
		},
		{
			15: "Sandpede x1, Sand Man x2",
			24: "Sand Man x4",
			53: "Sandpede x1, Sand Man x2",
			99: "Pike x2, EvilShel x2",
			124: "EvilShel x3, WaterBug x1"
		},
		{
			15: "Sandpede x1, Sand Man x2",
			24: "Sand Man x4",
			53: "Sandpede x1, Sand Man x2",
			68: "Imp x4",
			99: "Pike x3",
			124: "Pike x3"
		},
		{
			24: "Imp x4",
			53: "Sand Man x4",
			68: "Sandpede x1, Sand Man x2",
			78: "Pike x2, EvilShel x2",
			99: "Pike x3",
			124: "Pike x3"
		},
		{
			24: "Imp x4",
			28: "Sand Man x4",
			68: "Sandpede x1, Sand Man x2",
			78: "Pike x2, EvilShel x2",
			124: "Pike x3"
		},
		{
			24: "Imp x4",
			28: "Sand Man x4",
			30: "Sandpede x1, Sand Man x2",
			68: "Imp x4",
			78: "Pike x3",
			124: "Pike x3"
		},
		{
			24: "Imp x4",
			28: "Sand Man x4",
			30: "Sandpede x1, Sand Man x2",
			68: "Imp x4",
			78: "Pike x3",
			124: "Pike x3"
		},
		{
			28: "Imp x4",
			30: "Sand Man x4",
			68: "Sandpede x1, Sand Man x2",
			78: "Pike x2, EvilShel x2",
			124: "Pike x3",
			178: "Pike x3"
		},
		{
			28: "Imp x4",
			30: "Sand Man x4",
			43: "Sandpede x1, Sand Man x2",
			68: "Imp x4",
			78: "Pike x3",
			178: "Pike x3"
		},
		{
			28: "Imp x4",
			30: "Sand Man x4",
			43: "Sandpede x1, Sand Man x2",
			68: "Imp x4",
			78: "Pike x3",
			153: "Pike x3",
			178: "EvilShel x3, WaterBug x1"
		},
		{
			28: "Imp x4",
			30: "Sand Man x4",
			43: "Sandpede x1, Sand Man x2",
			119: "Pike x2, EvilShel x2",
			153: "Pike x3",
			178: "Pike x3"
		},
		{
			28: "Imp x4",
			30: "Sand Man x4",
			43: "Sandpede x1, Sand Man x2",
			119: "Pike x2, EvilShel x2",
			153: "Pike x3",
			178: "Pike x3"
		},
		{
			30: "Imp x4",
			43: "Sand Man x4",
			72: "CaveToad x3",
			119: "Pike x2, EvilShel x2",
			153: "Pike x3",
			178: "Pike x3"
		},
		{
			43: "Imp x4",
			72: "Pike x3",
			77: "CaveToad x3",
			119: "EvilShel x3, WaterBug x1",
			153: "Pike x3",
			178: "Pike x3"
		},
		{
			43: "Imp x4",
			72: "Pike x3",
			77: "CaveToad x3",
			119: "EvilShel x3, WaterBug x1",
			153: "Pike x3"
		},
		{
			43: "Imp x4",
			72: "Pike x3",
			77: "Pike x2, EvilShel x2",
			119: "EvilShel x3, WaterBug x1",
			127: "Pike x3",
			153: "Zombie x4"
		},
		{
			1: "Imp x4",
			72: "Pike x3",
			77: "Pike x2, EvilShel x2",
			119: "EvilShel x3, WaterBug x1",
			127: "Pike x3"
		},
		{
			1: "Imp x4",
			48: "Sand Man x4",
			72: "Pike x2, EvilShel x2",
			77: "EvilShel x3, WaterBug x1",
			127: "Pike x3"
		},
		{
			1: "Imp x4",
			48: "Sand Man x4",
			72: "Pike x2, EvilShel x2",
			77: "EvilShel x3, WaterBug x1",
			118: "Zombie x4",
			127: "Zombie x4"
		},
		{
			1: "Imp x4",
			48: "Sand Man x4",
			77: "Pike x2, EvilShel x2",
			118: "EvilShel x3, WaterBug x1",
			127: "Zombie x4",
			195: "Zombie x4"
		},
		{
			1: "Imp x4",
			10: "Sand Man x4",
			48: "Imp x4",
			118: "EvilShel x3, WaterBug x1",
			127: "Zombie x4",
			195: "Zombie x4"
		},
		{
			1: "Imp x4",
			10: "Sand Man x4",
			48: "Imp x4",
			118: "EvilShel x3, WaterBug x1",
			127: "Zombie x4",
			195: "Zombie x4"
		},
		{
			1: "Imp x4",
			10: "Sandpede x1, Sand Man x2",
			48: "Imp x4",
			118: "EvilShel x3, WaterBug x1",
			140: "Zombie x4",
			195: "Zombie x4"
		},
		{
			1: "Imp x4",
			10: "Sandpede x1, Sand Man x2",
			48: "Imp x4",
			118: "EvilShel x3, WaterBug x1",
			140: "Zombie x4",
			157: "Zombie x4",
			195: "Pike x3"
		},
		{
			8: "Imp x4",
			10: "Sandpede x1, Sand Man x2",
			48: "Imp x4",
			118: "EvilShel x3, WaterBug x1",
			140: "Zombie x4",
			157: "Zombie x4",
			195: "Pike x3"
		},
		{
			8: "Sand Man x4",
			10: "Sandpede x1, Sand Man x2",
			85: "Pike x2, EvilShel x2",
			140: "EvilShel x3, WaterBug x1",
			157: "Zombie x4",
			195: "EvilShel x3, WaterBug x1"
		},
		{
			8: "Sand Man x4",
			10: "Sandpede x1, Sand Man x2",
			85: "Pike x2, EvilShel x2",
			117: "EvilShel x3, WaterBug x1",
			140: "Zombie x4",
			157: "EvilShel x3, WaterBug x1"
		},
		{
			8: "Sand Man x4",
			10: "Sandpede x1, Sand Man x2",
			76: "Pike x2, EvilShel x2",
			85: "EvilShel x3, WaterBug x1",
			117: "Zombie x4",
			140: "EvilShel x3, WaterBug x1",
			157: "Pike x3"
		},
		{
			8: "Sand Man x4",
			32: "Sandpede x1, Sand Man x2",
			76: "Pike x2, EvilShel x2",
			85: "EvilShel x3, WaterBug x1",
			117: "EvilShel x3, WaterBug x1",
			140: "EvilShel x3, WaterBug x1",
			157: "Pike x3"
		},
		{
			8: "Sand Man x4",
			32: "Sandpede x1, Sand Man x2",
			76: "Pike x2, EvilShel x2",
			85: "Pike x3",
			117: "EvilShel x3, WaterBug x1",
			157: "EvilShel x3, WaterBug x1"
		},
		{
			8: "Sand Man x4",
			32: "Sandpede x1, Sand Man x2",
			76: "Pike x2, EvilShel x2",
			85: "Pike x3",
			117: "EvilShel x3, WaterBug x1"
		},
		{
			8: "Sand Man x4",
			20: "Sandpede x1, Sand Man x2",
			32: "Imp x4",
			76: "Pike x3",
			85: "EvilShel x3, WaterBug x1",
			117: "EvilShel x3, WaterBug x1"
		},
		{
			20: "Sand Man x4",
			32: "Sandpede x1, Sand Man x2",
			76: "Pike x2, EvilShel x2",
			117: "Pike x3",
			205: "EvilShel x3, WaterBug x1"
		},
		{
			20: "Sand Man x4",
			32: "Sandpede x1, Sand Man x2",
			76: "Pike x2, EvilShel x2",
			205: "Pike x3"
		},
		{
			20: "Sand Man x4",
			32: "Sandpede x1, Sand Man x2",
			50: "Imp x4",
			205: "Pike x3"
		},
		{
			20: "Sand Man x4",
			32: "Sandpede x1, Sand Man x2",
			50: "Imp x4",
			148: "Pike x3",
			205: "EvilShel x3, WaterBug x1"
		},
		{
			20: "Sand Man x4",
			50: "Sandpede x1, Sand Man x2",
			148: "EvilShel x3, WaterBug x1",
			181: "Pike x3",
			205: "EvilShel x3, WaterBug x1"
		},
		{
			20: "Sand Man x4",
			39: "Sandpede x1, Sand Man x2",
			50: "Sand Man x4",
			148: "Pike x3",
			181: "EvilShel x3, WaterBug x1",
			205: "EvilShel x3, WaterBug x1"
		},
		{
			20: "Sand Man x4",
			39: "Sandpede x1, Sand Man x2",
			50: "Sand Man x4",
			102: "Pike x3",
			148: "EvilShel x3, WaterBug x1",
			181: "EvilShel x3, WaterBug x1",
			205: "Zombie x4"
		},
		{
			39: "Sand Man x4",
			50: "Sandpede x1, Sand Man x2",
			91: "EvilShel x3, WaterBug x1",
			102: "Pike x3",
			148: "EvilShel x3, WaterBug x1",
			181: "EvilShel x3, WaterBug x1"
		},
		{
			39: "Sand Man x4",
			50: "Sandpede x1, Sand Man x2",
			51: "Sand Man x4",
			91: "Pike x3",
			102: "EvilShel x3, WaterBug x1",
			148: "EvilShel x3, WaterBug x1",
			181: "Zombie x4"
		},
		{
			39: "SandMoth x2, Larva x2",
			50: "Sandpede x1, Sand Man x2",
			51: "Sand Man x4",
			91: "Pike x3",
			102: "EvilShel x3, WaterBug x1",
			148: "EvilShel x3, WaterBug x1",
			181: "Zombie x4"
		},
		{
			39: "SandMoth x2, Larva x2",
			51: "Sandpede x1, Sand Man x2",
			91: "EvilShel x3, WaterBug x1",
			102: "Pike x3",
			115: "EvilShel x3, WaterBug x1",
			181: "EvilShel x3, WaterBug x1"
		},
		{
			39: "SandMoth x2, Larva x2",
			51: "Sandpede x1, Sand Man x2",
			91: "EvilShel x3, WaterBug x1",
			102: "Pike x3",
			115: "EvilShel x3, WaterBug x1",
			147: "EvilShel x3, WaterBug x1"
		},
		{
			39: "SandMoth x2, Larva x2",
			51: "Imp x4",
			91: "EvilShel x3, WaterBug x1",
			102: "Pike x3",
			115: "EvilShel x3, WaterBug x1",
			147: "EvilShel x3, WaterBug x1"
		},
		{
			12: "SandMoth x2, Larva x2",
			51: "Imp x4",
			91: "EvilShel x3, WaterBug x1",
			115: "Zombie x4",
			147: "EvilShel x3, WaterBug x1"
		},
		{
			12: "SandMoth x2, Larva x2",
			51: "Imp x4",
			62: "Sand Man x4",
			115: "Zombie x4",
			147: "EvilShel x3, WaterBug x1"
		},
		{
			12: "SandMoth x2, Larva x2",
			51: "Imp x4",
			62: "Sand Man x4",
			115: "Zombie x4",
			136: "EvilShel x3, WaterBug x1",
			147: "Pike x3"
		},
		{
			12: "SandMoth x2, Larva x2",
			62: "Imp x4",
			115: "EvilShel x3, WaterBug x1",
			116: "Zombie x4",
			136: "EvilShel x3, WaterBug x1",
			147: "Pike x3"
		},
		{
			12: "SandMoth x2, Larva x2",
			62: "Imp x4",
			82: "EvilShel x3, WaterBug x1",
			116: "Zombie x4",
			136: "Pike x3",
			147: "Pike x3"
		},
		{
			12: "SandMoth x2, Larva x2",
			62: "Imp x4",
			82: "EvilShel x3, WaterBug x1",
			114: "Zombie x4",
			116: "Pike x3",
			136: "Pike x3"
		},
		{
			12: "SandMoth x2, Larva x2",
			33: "Imp x4",
			62: "Sand Man x4",
			82: "Zombie x4",
			114: "Pike x3",
			116: "Pike x3",
			136: "EvilShel x3, WaterBug x1"
		},
		{
			12: "SandMoth x2, Larva x2",
			33: "Imp x4",
			62: "SandMoth x2, Larva x2",
			82: "Zombie x4",
			114: "Pike x3",
			116: "Pike x3",
			136: "EvilShel x3, WaterBug x1"
		},
		{
			33: "SandMoth x2, Larva x2",
			62: "Imp x4",
			82: "Pike x3",
			114: "Zombie x4",
			116: "Pike x3",
			136: "Pike x3"
		},
		{
			33: "SandMoth x2, Larva x2",
			82: "Pike x2, EvilShel x2",
			114: "Pike x3",
			116: "Zombie x4",
			166: "Pike x3"
		},
		{
			17: "SandMoth x2, Larva x2",
			33: "Imp x4",
			82: "Pike x3",
			114: "EvilShel x3, WaterBug x1",
			166: "Pike x3"
		},
		{
			17: "SandMoth x2, Larva x2",
			33: "Imp x4",
			49: "SandMoth x2, Larva x2",
			114: "EvilShel x3, WaterBug x1",
			166: "Pike x3"
		},
		{
			17: "SandWorm x1",
			33: "Imp x4",
			49: "SandMoth x2, Larva x2",
			88: "EvilShel x3, WaterBug x1",
			166: "Pike x3"
		},
		{
			17: "SandWorm x1",
			33: "Imp x4",
			49: "SandMoth x2, Larva x2",
			59: "SandMoth x2, Larva x2",
			88: "Pike x3",
			166: "Pike x3"
		},
		{
			17: "SandWorm x1",
			49: "Imp x4",
			59: "SandMoth x2, Larva x2",
			88: "EvilShel x3, WaterBug x1",
			166: "Pike x3",
			169: "Pike x3"
		},
		{
			17: "SandWorm x1",
			49: "Imp x4",
			59: "SandMoth x2, Larva x2",
			88: "EvilShel x3, WaterBug x1",
			166: "Pike x3",
			169: "Pike x3",
			177: "EvilShel x3, WaterBug x1"
		},
		{
			17: "SandWorm x1",
			49: "Imp x4",
			59: "SandMoth x2, Larva x2",
			88: "EvilShel x3, WaterBug x1",
			169: "Pike x3",
			177: "Pike x3",
			209: "EvilShel x3, WaterBug x1"
		},
		{
			17: "SandWorm x1",
			23: "Imp x4",
			49: "SandMoth x2, Larva x2",
			59: "SandMoth x2, Larva x2",
			88: "Pike x3",
			169: "Pike x3",
			177: "EvilShel x3, WaterBug x1",
			209: "Pike x3"
		},
		{
			23: "SandWorm x1",
			49: "Imp x4",
			59: "SandMoth x2, Larva x2",
			88: "EvilShel x3, WaterBug x1",
			155: "Pike x3",
			169: "Pike x3",
			177: "EvilShel x3, WaterBug x1",
			209: "Pike x3"
		},
		{
			23: "SandWorm x1",
			59: "Imp x4",
			86: "Pike x3",
			155: "EvilShel x3, WaterBug x1",
			169: "Pike x3",
			177: "Pike x3",
			209: "Pike x3"
		},
		{
			23: "SandWorm x1",
			59: "Sand Man x4",
			80: "Pike x3",
			86: "EvilShel x3, WaterBug x1",
			155: "Pike x3",
			169: "Pike x3",
			177: "Pike x3",
			209: "Pike x3"
		},
		{
			23: "SandWorm x1",
			80: "EvilShel x3, WaterBug x1",
			86: "Pike x3",
			112: "EvilShel x3, WaterBug x1",
			155: "Pike x3",
			177: "Pike x3",
			209: "Pike x3"
		},
		{
			23: "SandMoth x2, Larva x2",
			80: "EvilShel x3, WaterBug x1",
			86: "Pike x3",
			112: "EvilShel x3, WaterBug x1",
			155: "Pike x3",
			160: "Pike x3",
			209: "Pike x3"
		},
		{
			23: "SandMoth x2, Larva x2",
			80: "EvilShel x3, WaterBug x1",
			86: "Zombie x4",
			112: "EvilShel x3, WaterBug x1",
			155: "Pike x3",
			160: "CaveToad x3"
		},
		{
			23: "SandMoth x2, Larva x2",
			80: "EvilShel x3, WaterBug x1",
			86: "Zombie x4",
			112: "EvilShel x3, WaterBug x1",
			155: "Pike x3",
			160: "CaveToad x3",
			208: "Pike x3"
		},
		{
			46: "SandMoth x2, Larva x2",
			80: "EvilShel x3, WaterBug x1",
			86: "Zombie x4",
			112: "EvilShel x3, WaterBug x1",
			160: "Pike x3",
			208: "CaveToad x3"
		},
		{
			46: "SandMoth x2, Larva x2",
			80: "EvilShel x3, WaterBug x1",
			112: "Zombie x4",
			160: "EvilShel x3, WaterBug x1",
			208: "CaveToad x3"
		},
		{
			46: "SandMoth x2, Larva x2",
			90: "EvilShel x3, WaterBug x1",
			112: "Zombie x4",
			160: "EvilShel x3, WaterBug x1",
			208: "CaveToad x3"
		},
		{
			46: "SandMoth x2, Larva x2",
			79: "EvilShel x3, WaterBug x1",
			90: "Zombie x4",
			160: "EvilShel x3, WaterBug x1",
			208: "CaveToad x3"
		},
		{
			46: "SandMoth x2, Larva x2",
			79: "EvilShel x3, WaterBug x1",
			90: "Zombie x4",
			111: "EvilShel x3, WaterBug x1",
			208: "CaveToad x3"
		},
		{
			46: "SandMoth x2, Larva x2",
			79: "EvilShel x3, WaterBug x1",
			90: "Zombie x4",
			111: "EvilShel x3, WaterBug x1",
			208: "CaveToad x3"
		},
		{
			46: "SandMoth x2, Larva x2",
			79: "EvilShel x3, WaterBug x1",
			90: "Zombie x4",
			111: "Pike x3",
			168: "CaveToad x3"
		},
		{
			46: "SandMoth x2, Larva x2",
			79: "EvilShel x3, WaterBug x1",
			90: "Zombie x4",
			111: "Pike x3",
			168: "CaveToad x3",
			198: "CaveToad x3"
		},
		{
			71: "EvilShel x3, WaterBug x1",
			79: "EvilShel x3, WaterBug x1",
			90: "EvilShel x3, WaterBug x1",
			111: "Pike x3",
			168: "CaveToad x3",
			198: "CaveToad x3"
		},
		{
			14: "SandMoth x2, Larva x2",
			71: "EvilShel x3, WaterBug x1",
			79: "EvilShel x3, WaterBug x1",
			111: "Pike x3",
			168: "CaveToad x3",
			198: "CaveToad x3"
		},
		{
			14: "SandMoth x2, Larva x2",
			71: "EvilShel x3, WaterBug x1",
			111: "EvilShel x3, WaterBug x1",
			168: "Pike x3",
			198: "CaveToad x3"
		},
		{
			14: "SandMoth x2, Larva x2",
			71: "Pike x3",
			152: "EvilShel x3, WaterBug x1",
			168: "Pike x3",
			198: "CaveToad x3"
		},
		{
			14: "SandMoth x2, Larva x2",
			71: "Pike x3",
			110: "EvilShel x3, WaterBug x1",
			152: "Pike x3",
			168: "CaveToad x3",
			198: "CaveToad x3"
		},
		{
			14: "SandMoth x2, Larva x2",
			71: "Pike x3",
			110: "EvilShel x3, WaterBug x1",
			142: "Pike x3",
			152: "CaveToad x3",
			198: "CaveToad x3"
		},
		{
			14: "SandMoth x2, Larva x2",
			71: "Pike x3",
			110: "EvilShel x3, WaterBug x1",
			142: "Pike x3",
			152: "CaveToad x3",
			174: "CaveToad x3"
		},
		{
			14: "SandMoth x2, Larva x2",
			107: "Pike x3",
			110: "EvilShel x3, WaterBug x1",
			142: "Pike x3",
			152: "CaveToad x3",
			174: "CaveToad x3"
		},
		{
			14: "SandMoth x2, Larva x2",
			107: "Pike x3",
			110: "EvilShel x3, WaterBug x1",
			142: "Pike x3",
			152: "CaveToad x3",
			174: "CaveToad x3"
		},
		{
			107: "EvilShel x3, WaterBug x1",
			110: "Pike x3",
			142: "EvilShel x3, WaterBug x1",
			152: "Pike x3",
			174: "CaveToad x3"
		},
		{
			45: "Sand Man x4",
			107: "Pike x3",
			110: "EvilShel x3, WaterBug x1",
			142: "Pike x3",
			174: "CaveToad x3"
		},
		{
			45: "Sand Man x4",
			107: "Pike x3",
			142: "EvilShel x3, WaterBug x1",
			149: "Pike x3",
			174: "CaveToad x3"
		},
		{
			44: "Sand Man x4",
			45: "SandMoth x2, Larva x2",
			107: "EvilShel x3, WaterBug x1",
			149: "Pike x3",
			174: "CaveToad x3"
		},
		{
			44: "Sand Man x4",
			45: "SandMoth x2, Larva x2",
			83: "EvilShel x3, WaterBug x1",
			107: "Pike x3",
			149: "CaveToad x3"
		},
		{
			44: "Sand Man x4",
			45: "SandMoth x2, Larva x2",
			83: "EvilShel x3, WaterBug x1",
			149: "Pike x3",
			173: "Pike x2, EvilShel x2"
		},
		{
			44: "Sand Man x4",
			45: "SandMoth x2, Larva x2",
			83: "EvilShel x3, WaterBug x1",
			105: "Pike x3",
			149: "Pike x2, EvilShel x2",
			173: "Pike x2, EvilShel x2"
		},
		{
			25: "Sand Man x4",
			44: "SandMoth x2, Larva x2",
			45: "SandMoth x2, Larva x2",
			83: "Pike x3",
			105: "Pike x2, EvilShel x2",
			149: "Pike x2, EvilShel x2",
			173: "CaveToad x3"
		},
		{
			25: "Sand Man x4",
			44: "SandMoth x2, Larva x2",
			45: "SandMoth x2, Larva x2",
			83: "Pike x3",
			105: "Pike x2, EvilShel x2",
			149: "Pike x2, EvilShel x2",
			173: "CaveToad x3",
			211: "EvilShel x3, WaterBug x1"
		},
		{
			25: "Sand Man x4",
			44: "SandMoth x2, Larva x2",
			83: "EvilShel x3, WaterBug x1",
			105: "Pike x3",
			154: "Pike x2, EvilShel x2",
			173: "Pike x2, EvilShel x2",
			211: "CaveToad x3"
		},
		{
			25: "Sand Man x4",
			44: "SandWorm x1",
			83: "EvilShel x3, WaterBug x1",
			105: "Pike x3",
			154: "Pike x2, EvilShel x2",
			173: "Pike x2, EvilShel x2",
			185: "CaveToad x3",
			211: "EvilShel x3, WaterBug x1"
		},
		{
			25: "Sand Man x4",
			105: "Zombie x4",
			108: "EvilShel x3, WaterBug x1",
			154: "CaveToad x3",
			173: "Pike x2, EvilShel x2",
			185: "Pike x2, EvilShel x2",
			211: "CaveToad x3"
		},
		{
			25: "Sand Man x4",
			105: "Zombie x4",
			108: "EvilShel x3, WaterBug x1",
			154: "CaveToad x3",
			185: "Pike x2, EvilShel x2",
			211: "Pike x2, EvilShel x2"
		},
		{
			25: "Sand Man x4",
			108: "Zombie x4",
			138: "Pike x3",
			154: "CaveToad x3",
			185: "Pike x2, EvilShel x2",
			211: "Pike x2, EvilShel x2"
		},
		{
			25: "Sand Man x4",
			75: "Zombie x4",
			108: "Pike x3",
			138: "CaveToad x3",
			154: "Pike x2, EvilShel x2",
			185: "Pike x2, EvilShel x2",
			211: "CaveToad x3"
		},
		{
			16: "Sand Man x4",
			75: "Zombie x4",
			108: "Pike x3",
			138: "CaveToad x3",
			154: "Pike x2, EvilShel x2",
			185: "Pike x2, EvilShel x2"
		},
		{
			16: "Sand Man x4",
			75: "Zombie x4",
			108: "Pike x3",
			138: "CaveToad x3",
			185: "Pike x2, EvilShel x2",
			196: "Pike x2, EvilShel x2"
		},
		{
			11: "Sand Man x4",
			16: "SandWorm x1",
			75: "Pike x3",
			108: "CaveToad x3",
			138: "Pike x2, EvilShel x2",
			196: "Pike x2, EvilShel x2"
		},
		{
			11: "Sand Man x4",
			16: "SandWorm x1",
			75: "Pike x3",
			138: "CaveToad x3",
			196: "Pike x2, EvilShel x2",
			204: "Pike x2, EvilShel x2"
		},
		{
			11: "Sand Man x4",
			16: "SandWorm x1",
			75: "Pike x3",
			138: "CaveToad x3",
			189: "Pike x2, EvilShel x2",
			196: "Pike x2, EvilShel x2",
			204: "CaveToad x3"
		},
		{
			5: "Sand Man x4",
			11: "SandMoth x2, Larva x2",
			16: "Sand Man x4",
			75: "CaveToad x3",
			189: "Pike x2, EvilShel x2",
			196: "Pike x2, EvilShel x2",
			204: "Pike x2, EvilShel x2"
		},
		{
			5: "Sand Man x4",
			11: "SandMoth x2, Larva x2",
			16: "Sand Man x4",
			171: "CaveToad x3",
			189: "Pike x2, EvilShel x2",
			196: "Pike x2, EvilShel x2",
			204: "Pike x2, EvilShel x2"
		},
		{
			5: "Sand Man x4",
			11: "SandMoth x2, Larva x2",
			16: "Sand Man x4",
			95: "CaveToad x3",
			171: "Pike x2, EvilShel x2",
			189: "Pike x2, EvilShel x2",
			196: "Pike x2, EvilShel x2",
			204: "Pike x3"
		},
		{
			5: "Sandpede x1, Sand Man x2",
			11: "SandMoth x2, Larva x2",
			95: "Pike x3",
			171: "CaveToad x3",
			176: "Pike x2, EvilShel x2",
			189: "Pike x2, EvilShel x2",
			204: "Pike x2, EvilShel x2"
		},
		{
			5: "Sandpede x1, Sand Man x2",
			11: "SandMoth x2, Larva x2",
			95: "Pike x3",
			171: "CaveToad x3",
			176: "Pike x2, EvilShel x2",
			189: "EvilShel x3, WaterBug x1",
			204: "Pike x2, EvilShel x2"
		},
		{
			5: "Sandpede x1, Sand Man x2",
			42: "SandMoth x2, Larva x2",
			95: "Pike x3",
			171: "CaveToad x3",
			176: "Pike x2, EvilShel x2",
			189: "EvilShel x3, WaterBug x1"
		},
		{
			4: "Sandpede x1, Sand Man x2",
			5: "SandMoth x2, Larva x2",
			42: "Sand Man x4",
			95: "CaveToad x3",
			171: "Pike x2, EvilShel x2",
			176: "EvilShel x3, WaterBug x1"
		},
		{
			4: "Sandpede x1, Sand Man x2",
			5: "SandMoth x2, Larva x2",
			42: "Sand Man x4",
			95: "CaveToad x3",
			122: "EvilShel x3, WaterBug x1",
			171: "EvilShel x3, WaterBug x1",
			176: "Pike x2, EvilShel x2"
		},
		{
			4: "Sandpede x1, Sand Man x2",
			42: "SandMoth x2, Larva x2",
			95: "Pike x3",
			122: "CaveToad x3",
			165: "EvilShel x3, WaterBug x1",
			176: "EvilShel x3, WaterBug x1"
		},
		{
			4: "Sandpede x1, Sand Man x2",
			42: "SandMoth x2, Larva x2",
			122: "Pike x3",
			165: "CaveToad x3",
			170: "EvilShel x3, WaterBug x1",
			176: "EvilShel x3, WaterBug x1"
		},
		{
			4: "Sandpede x1, Sand Man x2",
			42: "SandMoth x2, Larva x2",
			122: "Pike x3",
			165: "CaveToad x3",
			170: "EvilShel x3, WaterBug x1",
			202: "EvilShel x3, WaterBug x1"
		},
		{
			4: "Sandpede x1, Sand Man x2",
			42: "SandMoth x2, Larva x2",
			122: "Pike x3",
			165: "CaveToad x3",
			170: "EvilShel x3, WaterBug x1",
			202: "EvilShel x3, WaterBug x1"
		},
		{
			4: "Sandpede x1, Sand Man x2",
			9: "SandMoth x2, Larva x2",
			42: "Sand Man x4",
			122: "Pike x2, EvilShel x2",
			165: "EvilShel x3, WaterBug x1",
			170: "EvilShel x3, WaterBug x1",
			202: "Pike x2, EvilShel x2"
		},
		{
			4: "Sandpede x1, Sand Man x2",
			9: "SandMoth x2, Larva x2",
			41: "Sand Man x4",
			122: "Pike x2, EvilShel x2",
			165: "EvilShel x3, WaterBug x1",
			170: "EvilShel x3, WaterBug x1",
			202: "Pike x2, EvilShel x2"
		},
		{
			9: "Sandpede x1, Sand Man x2",
			41: "SandMoth x2, Larva x2",
			165: "CaveToad x3",
			170: "Pike x2, EvilShel x2",
			187: "EvilShel x3, WaterBug x1",
			202: "EvilShel x3, WaterBug x1"
		},
		{
			9: "Sandpede x1, Sand Man x2",
			21: "SandMoth x2, Larva x2",
			41: "Sandpede x1, Sand Man x2",
			170: "Pike x2, EvilShel x2",
			187: "EvilShel x3, WaterBug x1",
			202: "EvilShel x3, WaterBug x1"
		},
		{
			9: "Sandpede x1, Sand Man x2",
			21: "SandMoth x2, Larva x2",
			41: "Sandpede x1, Sand Man x2",
			187: "Pike x2, EvilShel x2",
			202: "EvilShel x3, WaterBug x1"
		},
		{
			9: "Sandpede x1, Sand Man x2",
			21: "SandMoth x2, Larva x2",
			41: "Sandpede x1, Sand Man x2",
			145: "Pike x2, EvilShel x2",
			187: "EvilShel x3, WaterBug x1"
		},
		{
			9: "Sandpede x1, Sand Man x2",
			21: "SandMoth x2, Larva x2",
			41: "Sandpede x1, Sand Man x2",
			145: "Pike x2, EvilShel x2",
			172: "EvilShel x3, WaterBug x1",
			187: "EvilShel x3, WaterBug x1"
		},
		{
			9: "Sandpede x1, Sand Man x2",
			21: "SandMoth x2, Larva x2",
			41: "Sandpede x1, Sand Man x2",
			145: "Pike x2, EvilShel x2",
			172: "EvilShel x3, WaterBug x1",
			187: "EvilShel x3, WaterBug x1"
		},
		{
			21: "Sandpede x1, Sand Man x2",
			41: "SandMoth x2, Larva x2",
			63: "Sandpede x1, Sand Man x2",
			145: "Pike x2, EvilShel x2",
			172: "EvilShel x3, WaterBug x1",
			187: "Pike x3"
		},
		{
			21: "Sandpede x1, Sand Man x2",
			40: "SandMoth x2, Larva x2",
			63: "Sandpede x1, Sand Man x2",
			145: "Pike x2, EvilShel x2",
			172: "EvilShel x3, WaterBug x1"
		},
		{
			21: "Sandpede x1, Sand Man x2",
			40: "Sand Man x4",
			63: "Sandpede x1, Sand Man x2",
			145: "Pike x2, EvilShel x2",
			172: "EvilShel x3, WaterBug x1",
			191: "Pike x3"
		},
		{
			40: "Sandpede x1, Sand Man x2",
			63: "Sand Man x4",
			104: "CaveToad x3",
			145: "Pike x2, EvilShel x2",
			172: "Pike x3",
			191: "Pike x3"
		},
		{
			18: "Imp x4",
			40: "Sand Man x4",
			63: "Sandpede x1, Sand Man x2",
			104: "Pike x2, EvilShel x2",
			172: "Pike x3",
			191: "Pike x3"
		},
		{
			18: "Imp x4",
			40: "Sand Man x4",
			63: "Sandpede x1, Sand Man x2",
			104: "Pike x2, EvilShel x2",
			191: "Pike x3"
		},
		{
			18: "Imp x4",
			40: "Sand Man x4",
			63: "Sandpede x1, Sand Man x2",
			104: "Pike x2, EvilShel x2",
			184: "Pike x3",
			191: "Pike x3"
		},
		{
			18: "Imp x4",
			40: "Sand Man x4",
			63: "Sandpede x1, Sand Man x2",
			104: "Pike x2, EvilShel x2",
			106: "Pike x3",
			184: "Pike x3",
			191: "EvilShel x3, WaterBug x1"
		},
		{
			18: "Imp x4",
			40: "Sand Man x4",
			104: "CaveToad x3",
			106: "Pike x2, EvilShel x2",
			156: "Pike x3",
			184: "Pike x3",
			191: "EvilShel x3, WaterBug x1"
		},
		{
			18: "Imp x4",
			19: "Sand Man x4",
			104: "CaveToad x3",
			106: "Pike x2, EvilShel x2",
			156: "Pike x3",
			184: "Pike x3"
		},
		{
			18: "Imp x4",
			19: "Sand Man x4",
			106: "CaveToad x3",
			156: "Pike x2, EvilShel x2",
			184: "Pike x3"
		},
		{
			18: "Imp x4",
			19: "Sand Man x4",
			103: "CaveToad x3",
			106: "Pike x2, EvilShel x2",
			156: "Pike x3",
			184: "Pike x3"
		},
		{
			19: "Imp x4",
			103: "Pike x3",
			106: "CaveToad x3",
			135: "Pike x2, EvilShel x2",
			156: "Pike x3",
			184: "Pike x3"
		},
		{
			19: "Imp x4",
			103: "Pike x3",
			106: "CaveToad x3",
			109: "Pike x2, EvilShel x2",
			135: "Pike x3",
			156: "Pike x3"
		},
		{
			19: "Imp x4",
			103: "Pike x3",
			109: "CaveToad x3",
			135: "EvilShel x3, WaterBug x1",
			156: "Pike x3",
			199: "Pike x3"
		},
		{
			19: "Imp x4",
			103: "Pike x3",
			109: "CaveToad x3",
			135: "EvilShel x3, WaterBug x1",
			151: "Pike x3",
			199: "Pike x3"
		},
		{
			6: "Imp x4",
			19: "Sand Man x4",
			103: "Pike x2, EvilShel x2",
			109: "EvilShel x3, WaterBug x1",
			135: "Pike x3",
			151: "Zombie x4",
			199: "EvilShel x3, WaterBug x1"
		},
		{
			6: "Imp x4",
			38: "Sand Man x4",
			103: "Pike x2, EvilShel x2",
			109: "EvilShel x3, WaterBug x1",
			135: "Pike x3",
			151: "Zombie x4",
			199: "EvilShel x3, WaterBug x1"
		},
		{
			6: "Imp x4",
			38: "Sand Man x4",
			70: "Pike x2, EvilShel x2",
			109: "EvilShel x3, WaterBug x1",
			135: "Pike x3",
			151: "Zombie x4",
			199: "Pike x3"
		},
		{
			6: "Imp x4",
			38: "Sand Man x4",
			70: "Pike x2, EvilShel x2",
			109: "EvilShel x3, WaterBug x1",
			151: "Zombie x4",
			199: "Zombie x4"
		},
		{
			6: "Imp x4",
			38: "Sand Man x4",
			70: "Pike x2, EvilShel x2",
			134: "EvilShel x3, WaterBug x1",
			151: "Zombie x4",
			199: "Zombie x4"
		},
		{
			6: "Imp x4",
			38: "Sand Man x4",
			70: "Pike x2, EvilShel x2",
			134: "EvilShel x3, WaterBug x1",
			151: "Zombie x4"
		},
		{
			6: "Imp x4",
			38: "Sand Man x4",
			70: "Pike x2, EvilShel x2",
			134: "EvilShel x3, WaterBug x1",
			207: "Zombie x4"
		},
		{
			6: "Imp x4",
			38: "Sandpede x1, Sand Man x2",
			70: "Pike x2, EvilShel x2",
			84: "EvilShel x3, WaterBug x1",
			134: "Zombie x4",
			207: "Zombie x4"
		},
		{
			38: "Imp x4",
			70: "CaveToad x3",
			84: "Pike x2, EvilShel x2",
			134: "EvilShel x3, WaterBug x1",
			139: "Zombie x4",
			207: "Zombie x4"
		},
		{
			84: "Pike x2, EvilShel x2",
			134: "CaveToad x3",
			139: "Pike x2, EvilShel x2",
			200: "EvilShel x3, WaterBug x1",
			207: "Zombie x4"
		},
		{
			22: "Sand Man x4",
			84: "CaveToad x3",
			134: "Pike x2, EvilShel x2",
			139: "EvilShel x3, WaterBug x1",
			200: "Zombie x4",
			207: "EvilShel x3, WaterBug x1"
		},
		{
			22: "Sand Man x4",
			84: "CaveToad x3",
			101: "Pike x2, EvilShel x2",
			139: "EvilShel x3, WaterBug x1",
			200: "Zombie x4",
			207: "EvilShel x3, WaterBug x1"
		},
		{
			22: "Sand Man x4",
			84: "CaveToad x3",
			101: "Pike x2, EvilShel x2",
			133: "EvilShel x3, WaterBug x1",
			139: "Zombie x4",
			200: "EvilShel x3, WaterBug x1",
			207: "Pike x3"
		},
		{
			22: "Sand Man x4",
			84: "CaveToad x3",
			101: "Pike x2, EvilShel x2",
			133: "EvilShel x3, WaterBug x1",
			139: "EvilShel x3, WaterBug x1",
			200: "EvilShel x3, WaterBug x1",
			201: "Pike x3"
		},
		{
			22: "Sand Man x4",
			101: "CaveToad x3",
			133: "Pike x2, EvilShel x2",
			139: "Pike x3",
			197: "EvilShel x3, WaterBug x1",
			200: "EvilShel x3, WaterBug x1",
			201: "Pike x3"
		},
		{
			22: "Sand Man x4",
			101: "CaveToad x3",
			133: "Pike x2, EvilShel x2",
			175: "Pike x3",
			197: "EvilShel x3, WaterBug x1",
			200: "EvilShel x3, WaterBug x1",
			201: "Pike x3"
		},
		{
			22: "Sand Man x4",
			74: "CaveToad x3",
			101: "Pike x2, EvilShel x2",
			133: "Pike x3",
			175: "EvilShel x3, WaterBug x1",
			197: "EvilShel x3, WaterBug x1",
			201: "Pike x3"
		},
		{
			22: "Sand Man x4",
			36: "Sandpede x1, Sand Man x2",
			74: "Pike x2, EvilShel x2",
			101: "Pike x3",
			133: "EvilShel x3, WaterBug x1",
			175: "EvilShel x3, WaterBug x1",
			197: "Pike x3",
			201: "Pike x2, EvilShel x2"
		},
		{
			36: "Sand Man x4",
			74: "CaveToad x3",
			128: "Pike x2, EvilShel x2",
			133: "Pike x3",
			175: "EvilShel x3, WaterBug x1",
			197: "EvilShel x3, WaterBug x1",
			201: "Zombie x4"
		},
		{
			36: "Sand Man x4",
			74: "CaveToad x3",
			100: "Pike x2, EvilShel x2",
			128: "Pike x3",
			175: "EvilShel x3, WaterBug x1",
			197: "EvilShel x3, WaterBug x1",
			201: "Zombie x4"
		},
		{
			36: "Sand Man x4",
			74: "CaveToad x3",
			100: "Pike x2, EvilShel x2",
			128: "Pike x3",
			132: "EvilShel x3, WaterBug x1",
			175: "EvilShel x3, WaterBug x1",
			197: "Zombie x4"
		},
		{
			36: "Sand Man x4",
			74: "CaveToad x3",
			100: "EvilShel x3, WaterBug x1",
			128: "Pike x3",
			132: "EvilShel x3, WaterBug x1",
			164: "EvilShel x3, WaterBug x1",
			175: "Zombie x4"
		},
		{
			36: "Sand Man x4",
			55: "Sandpede x1, Sand Man x2",
			74: "EvilShel x3, WaterBug x1",
			100: "Pike x3",
			128: "EvilShel x3, WaterBug x1",
			132: "EvilShel x3, WaterBug x1",
			164: "Zombie x4"
		},
		{
			36: "Sand Man x4",
			55: "Sandpede x1, Sand Man x2",
			100: "EvilShel x3, WaterBug x1",
			128: "Pike x3",
			132: "EvilShel x3, WaterBug x1",
			164: "EvilShel x3, WaterBug x1"
		},
		{
			3: "Sand Man x4",
			36: "Sandpede x1, Sand Man x2",
			55: "Sand Man x4",
			100: "Pike x3",
			128: "EvilShel x3, WaterBug x1",
			132: "EvilShel x3, WaterBug x1",
			164: "Zombie x4"
		},
		{
			3: "Sand Man x4",
			55: "Sandpede x1, Sand Man x2",
			100: "EvilShel x3, WaterBug x1",
			132: "Pike x3",
			164: "EvilShel x3, WaterBug x1",
			192: "EvilShel x3, WaterBug x1"
		},
		{
			3: "SandMoth x2, Larva x2",
			55: "Sandpede x1, Sand Man x2",
			132: "EvilShel x3, WaterBug x1",
			164: "Pike x3",
			190: "EvilShel x3, WaterBug x1",
			192: "EvilShel x3, WaterBug x1"
		},
		{
			3: "SandMoth x2, Larva x2",
			55: "Sandpede x1, Sand Man x2",
			131: "EvilShel x3, WaterBug x1",
			164: "Pike x3",
			190: "EvilShel x3, WaterBug x1",
			192: "EvilShel x3, WaterBug x1"
		},
		{
			3: "SandMoth x2, Larva x2",
			55: "Sandpede x1, Sand Man x2",
			131: "EvilShel x3, WaterBug x1",
			137: "Pike x3",
			190: "EvilShel x3, WaterBug x1",
			192: "EvilShel x3, WaterBug x1"
		},
		{
			3: "SandMoth x2, Larva x2",
			55: "Imp x4",
			131: "EvilShel x3, WaterBug x1",
			137: "Pike x3",
			163: "EvilShel x3, WaterBug x1",
			190: "EvilShel x3, WaterBug x1",
			192: "EvilShel x3, WaterBug x1"
		},
		{
			3: "SandMoth x2, Larva x2",
			131: "Pike x2, EvilShel x2",
			137: "EvilShel x3, WaterBug x1",
			150: "Zombie x4",
			163: "EvilShel x3, WaterBug x1",
			190: "EvilShel x3, WaterBug x1",
			192: "EvilShel x3, WaterBug x1"
		},
		{
			3: "SandMoth x2, Larva x2",
			131: "Pike x2, EvilShel x2",
			137: "EvilShel x3, WaterBug x1",
			150: "Zombie x4",
			163: "EvilShel x3, WaterBug x1",
			190: "Pike x3",
			192: "EvilShel x3, WaterBug x1"
		},
		{
			131: "Pike x3",
			137: "Pike x2, EvilShel x2",
			150: "EvilShel x3, WaterBug x1",
			163: "Zombie x4",
			190: "EvilShel x3, WaterBug x1"
		},
		{
			34: "SandMoth x2, Larva x2",
			131: "Pike x2, EvilShel x2",
			137: "EvilShel x3, WaterBug x1",
			150: "Zombie x4",
			163: "EvilShel x3, WaterBug x1"
		},
		{
			34: "SandMoth x2, Larva x2",
			66: "Imp x4",
			137: "EvilShel x3, WaterBug x1",
			150: "Zombie x4",
			163: "Pike x3"
		},
		{
			34: "SandMoth x2, Larva x2",
			66: "Imp x4",
			98: "EvilShel x3, WaterBug x1",
			150: "Zombie x4",
			163: "Pike x3"
		},
		{
			34: "SandMoth x2, Larva x2",
			66: "Imp x4",
			98: "EvilShel x3, WaterBug x1",
			113: "Zombie x4",
			150: "Pike x3"
		},
		{
			34: "SandMoth x2, Larva x2",
			66: "Imp x4",
			98: "Pike x3",
			113: "Zombie x4",
			162: "Pike x3"
		},
		{
			34: "SandMoth x2, Larva x2",
			66: "Imp x4",
			98: "Pike x3",
			113: "Zombie x4",
			162: "Pike x3",
			194: "Pike x3"
		},
		{
			34: "SandMoth x2, Larva x2",
			66: "Imp x4",
			98: "Pike x3",
			113: "Zombie x4",
			162: "Pike x3",
			194: "Pike x3",
			210: "EvilShel x3, WaterBug x1"
		},
		{
			34: "SandMoth x2, Larva x2",
			57: "Imp x4",
			66: "SandMoth x2, Larva x2",
			98: "EvilShel x3, WaterBug x1",
			113: "Pike x3",
			162: "Pike x3",
			194: "EvilShel x3, WaterBug x1",
			210: "EvilShel x3, WaterBug x1"
		},
		{
			57: "SandMoth x2, Larva x2",
			66: "Imp x4",
			98: "Pike x3",
			113: "EvilShel x3, WaterBug x1",
			162: "Pike x3",
			179: "Pike x3",
			194: "EvilShel x3, WaterBug x1",
			210: "EvilShel x3, WaterBug x1"
		},
		{
			57: "SandWorm x1",
			65: "Imp x4",
			113: "Pike x3",
			162: "EvilShel x3, WaterBug x1",
			179: "Pike x3",
			194: "Pike x3",
			210: "EvilShel x3, WaterBug x1"
		},
		{
			57: "SandWorm x1",
			65: "Imp x4",
			126: "Pike x3",
			162: "EvilShel x3, WaterBug x1",
			179: "Pike x3",
			194: "Pike x3",
			210: "EvilShel x3, WaterBug x1"
		},
		{
			57: "SandWorm x1",
			65: "Imp x4",
			126: "Pike x3",
			129: "EvilShel x3, WaterBug x1",
			179: "Pike x3",
			194: "Pike x3",
			210: "EvilShel x3, WaterBug x1"
		},
		{
			57: "SandWorm x1",
			65: "Imp x4",
			126: "Pike x3",
			129: "EvilShel x3, WaterBug x1",
			161: "Pike x3",
			179: "Pike x3",
			210: "EvilShel x3, WaterBug x1"
		},
		{
			57: "SandWorm x1",
			65: "Imp x4",
			126: "Pike x3",
			129: "EvilShel x3, WaterBug x1",
			161: "Pike x3",
			179: "Pike x3",
			193: "EvilShel x3, WaterBug x1"
		},
		{
			57: "SandWorm x1",
			65: "Imp x4",
			126: "Pike x3",
			129: "EvilShel x3, WaterBug x1",
			161: "Pike x3",
			179: "Pike x3",
			193: "EvilShel x3, WaterBug x1"
		},
		{
			65: "SandWorm x1",
			126: "Pike x2, EvilShel x2",
			129: "Pike x3",
			161: "EvilShel x3, WaterBug x1",
			193: "Pike x3"
		},
		{
			65: "SandWorm x1",
			126: "Pike x2, EvilShel x2",
			129: "Pike x3",
			161: "EvilShel x3, WaterBug x1",
			180: "Pike x3",
			193: "Pike x3"
		},
		{
			97: "Zombie x4",
			129: "EvilShel x3, WaterBug x1",
			161: "Pike x3",
			180: "EvilShel x3, WaterBug x1",
			193: "Pike x3"
		},
		{
			37: "SandWorm x1",
			97: "EvilShel x3, WaterBug x1",
			161: "Pike x3",
			180: "EvilShel x3, WaterBug x1",
			193: "Pike x3"
		},
		{
			37: "SandMoth x2, Larva x2",
			97: "EvilShel x3, WaterBug x1",
			120: "Pike x3",
			180: "EvilShel x3, WaterBug x1",
			193: "Pike x3"
		},
		{
			37: "SandMoth x2, Larva x2",
			97: "EvilShel x3, WaterBug x1",
			120: "Zombie x4",
			144: "EvilShel x3, WaterBug x1",
			180: "Pike x3"
		},
		{
			37: "SandMoth x2, Larva x2",
			97: "EvilShel x3, WaterBug x1",
			120: "Zombie x4",
			130: "EvilShel x3, WaterBug x1",
			144: "Pike x3",
			180: "CaveToad x3"
		}
	];

    var _mapData = [
        {
            'map': '0000-0',
            'origin': [98, 95],
            'stepRange': [2, 48]
        },
        {
            'map': '0000-0',
			'origin': [120, 80],
            'stepRange': [28, 69]
        },
        {
            'map': '306F-0',
			'origin': [0, 0],
            'stepRange': [70, 121]
        },
        {
            'map': '3070-0',
			'origin': [0, 0],
            'stepRange': [122, 211]
        }
    ];

	var _stepData = {
		2: [103, 118],
	    3: [103, 117],
	    4: [104, 117],
	    5: [104, 116],
	    6: [104, 115],
	    7: [104, 114],
	    8: [104, 113],
		9: [104, 112],
		10: [104, 111],
		11: [104, 110],
		12: [104, 109],
		13: [105, 109],
		14: [106, 109],
		15: [107, 109],
		16: [108, 109],
		17: [109, 109],
		18: [110, 109],
		19: [111, 109],
		20: [112, 109],
		21: [113, 109],
		22: [114, 109],
		23: [115, 109],
		24: [116, 109],
		25: [117, 109],
		26: [118, 109],
		27: [119, 109],
		28: [120, 109],
		29: [121, 109],
		30: [122, 109],
		31: [123, 109],
		32: [124, 109],
		33: [125, 109],
		34: [125, 108],
		35: [125, 107],
		36: [125, 106],
		37: [125, 105],
		38: [127, 104],
		39: [127, 103],
		40: [127, 102],
		41: [127, 101],
		42: [127, 100],
		43: [127, 99],
		44: [127, 98],
		45: [127, 97],
		46: [127, 96],
		47: [127, 95],
		48: [127, 94],
		49: [127, 93],
		50: [127, 92],
		51: [127, 91],
		52: [127, 90],
		53: [128, 90],
		54: [129, 90],
		55: [130, 90],
		56: [131, 90],
		57: [132, 90],
		58: [133, 90],
		59: [134, 90],
		60: [135, 90],
		61: [136, 90],
		62: [136, 89],
		63: [136, 88],
		64: [136, 87],
		65: [136, 86],
		66: [136, 85],
		67: [136, 84],
		68: [137, 84],
		69: [138, 84],
		70: [26, 28],
		71: [25, 28],
		72: [24, 28],
		73: [23, 28],
		74: [22, 28],
		75: [21, 28],
		76: [21, 27],
		77: [21, 26],
		78: [21, 25],
		79: [20, 25],
		80: [19, 25],
		81: [18, 25],
		82: [17, 25],
		83: [16, 25],
		84: [15, 25],
		85: [15, 24],
		86: [15, 23],
		87: [15, 22],
		88: [14, 22],
		89: [13, 22],
		90: [12, 22],
		91: [11, 22],
		92: [10, 22],
		93: [9, 22],
		94: [8, 22],
		95: [7, 22],
		96: [7, 21],
		97: [7, 20],
		98: [7, 19],
		99: [7, 18],
		100: [7, 17],
		101: [7, 16],
		102: [7, 15],
		103: [7, 14],
		104: [7, 13],
		105: [6, 13],
		106: [6, 12],
		107: [6, 11],
		108: [6, 10],
		109: [7, 10],
		110: [7, 9],
		111: [7, 8],
		112: [7, 7],
		113: [6, 7],
		114: [5, 7],
		115: [4, 7],
		116: [4, 6],
		117: [3, 6],
		118: [2, 6],
		119: [2, 5],
		120: [2, 4],
		121: [2, 3],
		122: [26, 27],
		123: [26, 26],
		124: [26, 25],
		125: [26, 24],
		126: [26, 23],
		127: [26, 22],
		128: [26, 21],
		129: [27, 21],
		130: [28, 21],
		131: [29, 21],
		132: [29, 20],
		133: [29, 19],
		134: [29, 18],
		135: [29, 17],
		136: [29, 16],
		137: [29, 15],
		138: [29, 14],
		139: [29, 13],
		140: [28, 13],
		141: [28, 12],
		142: [28, 11],
		143: [28, 10],
		144: [28, 9],
		145: [27, 9],
		146: [26, 9],
		147: [26, 10],
		148: [26, 11],
		149: [26, 12],
		150: [25, 12],
		151: [24, 12],
		152: [23, 12],
		153: [23, 13],
		154: [23, 14],
		155: [23, 15],
		156: [23, 16],
		157: [23, 17],
		158: [23, 18],
		159: [23, 19],
		160: [24, 19],
		161: [24, 20],
		162: [24, 21],
		163: [24, 22],
		164: [24, 23],
		165: [24, 24],
		166: [24, 25],
		167: [23, 25],
		168: [22, 25],
		169: [22, 24],
		170: [22, 23],
		171: [22, 22],
		172: [22, 21],
		173: [22, 20],
		174: [21, 20],
		175: [20, 20],
		176: [19, 20],
		177: [18, 20],
		178: [18, 21],
		179: [18, 22],
		180: [18, 23],
		181: [18, 24],
		182: [18, 25],
		183: [17, 25],
		184: [16, 25],
		185: [15, 25],
		186: [14, 25],
		187: [13, 25],
		188: [12, 25],
		189: [12, 26],
		190: [12, 27],
		191: [11, 27],
		192: [10, 27],
		193: [10, 28],
		194: [9, 28],
		195: [8, 28],
		196: [7, 28],
		197: [6, 28],
		198: [5, 28],
		199: [5, 27],
		200: [5, 26],
		201: [5, 25],
		202: [5, 24],
		203: [5, 23],
		204: [5, 22],
		205: [5, 21],
		206: [5, 20],
		207: [5, 19],
		208: [4, 19],
		209: [3, 19],
		210: [2, 19],
		211: [2, 18]
	};

	var _twinSeedData = {
		"paladin": {
			14: {
				"instruction": "Take <strong>54</strong> extra steps in the save room. Determine your seed based on the next room:",
				14: "One encounter with CaveToad x3.",
				15: "No encounters."
			},
			22: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				22: "Two encounters.",
				23: "Three encounters."
			},
			30: {
				"instruction": "Take <strong>8</strong> extra steps in the save room. Determine your seed based on the next room:",
				30: "One encounter with CaveToad x3.",
				31: "No encounters."
			},
			41: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				41: "No encounters.",
				42: "One encounter with Pike x3."
			},
			47: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				47: "One encounter.",
				48: "Two encounters."
			},
			63: {
				"instruction": "Take <strong>72</strong> extra steps in the save room. Determine your seed based on the room where you get <i>Darkness</i> (sword):",
				63: "Encounters on steps 2 and 15.",
				64: "Encounters on steps 15 and 32."
			},
			68: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				68: "One encounter.",
				69: "Two encounters."
			},
			78: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the room after the next room (B3F):",
				78: "One encounter.",
				79: "No encounters."
			},
			132: {
				"instruction": "Take <strong>26</strong> extra steps in the save room. Determine your seed based on the room where you get <i>Darkness</i> (sword):",
				132: "First encounter is Aligator x1, Pike x2.",
				133: "First encounter is TinyMage x2, WaterHag x4."
			},
			143: {
				"instruction": "Take <strong>2</strong> extra steps in the save room. Determine your seed based on the next room:",
				143: "Encounter with Pike x3.",
				144: "Encounter with CaveToad x3."
			},
			175: {
				"instruction": "Take <strong>60</strong> extra steps in the save room. Determine your seed based on the next room:",
				175: "One encounter.",
				176: "No encounters."
			},
			183: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				183: "One encounter on step 37. Don't take any extra steps.",
				184: "Two encounters on steps 18 and 37. Take <strong>12</strong> extra steps before leaving the room. There will be one more encounter during the extra steps."
			},
			247: {
				"instruction": "Take <strong>10</strong> extra steps in the save room. Determine your seed based on the room after the next room (B3F):",
				247: "No encounters. Take 18 extra steps before leaving the room.",
				248: "One encounter with Jelly x4. Don't take any extra steps before leaving the room."
			}
		},
		"nocw": {
			14: {
				"instruction": "Take <strong>54</strong> extra steps in the save room. Determine your seed based on the next room:",
				14: "One encounter with CaveToad x3.",
				15: "No encounters."
			},
			22: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				22: "Two encounters.",
				23: "Three encounters."
			},
			30: {
				"instruction": "Take <strong>8</strong> extra steps in the save room. Determine your seed based on the next room:",
				30: "One encounter with CaveToad x3.",
				31: "No encounters."
			},
			41: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				41: "No encounters.",
				42: "One encounter with Pike x3."
			},
			47: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				47: "One encounter.",
				48: "Two encounters."
			},
			63: {
				"instruction": "Take <strong>72</strong> extra steps in the save room. Determine your seed based on the room where you get <i>Darkness</i> (sword):",
				63: "Encounters on steps 2 and 15.",
				64: "Encounters on steps 15 and 32."
			},
			68: {
				"instruction": "Take <strong>16</strong> extra steps in the save room. Determine your seed based on the room after the next room (B3F):",
				68: "No encounters.",
				69: "One encounter with CaveToad x3."
			},
			78: {
				"instruction": "Take <strong>24</strong> extra steps in the save room. Determine your seed based on the next room:",
				78: "Two encounters.",
				79: "No encounters."
			},
			132: {
				"instruction": "Take <strong>26</strong> extra steps in the save room. Determine your seed based on the room where you get <i>Darkness</i> (sword):",
				132: "First encounter is Aligator x1, Pike x2.",
				133: "First encounter is TinyMage x2, WaterHag x4."
			},
			143: {
				"instruction": "Take <strong>2</strong> extra steps in the save room. Determine your seed based on the next room:",
				143: "Encounter with Pike x3.",
				144: "Encounter with CaveToad x3."
			},
			175: {
				"instruction": "Take <strong>60</strong> extra steps in the save room. Determine your seed based on the next room:",
				175: "One encounter.",
				176: "No encounters."
			},
			183: {
				"instruction": "Take <strong>60</strong> extra steps in the save room. Determine your seed based on the room where you get <i>Darkness</i> (sword):",
				183: "Three encounters.",
				184: "Two encounters."
			},
			247: {
				"instruction": "Take <strong>10</strong> extra steps in the save room. Determine your seed based on the room after the next room (B3F):",
				247: "No encounters. Take <strong>18</strong> extra steps before leaving the room.",
				248: "One encounter with Jelly x4. Don't take any extra steps before leaving the room."
			}
		},
		"no64-excalbur": {
			14: {
				"instruction": "Take <strong>56</strong> extra steps in the save room. Determine your seed based on the next room:",
				14: "One encounter with CaveToad x3.",
				15: "No encounters."
			},
			22: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				22: "Two encounters.",
				23: "Three encounters."
			},
			30: {
				"instruction": "Take <strong>8</strong> extra steps in the save room. Determine your seed based on the next room:",
				30: "One encounter with CaveToad x3.",
				31: "No encounters."
			},
			41: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				41: "No encounters.",
				42: "One encounter with Pike x3."
			},
			47: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				47: "One encounter.",
				48: "Two encounters."
			},
			63: {
				"instruction": "Take <strong>72</strong> extra steps in the save room. Determine your seed based on the room where you get <i>Darkness</i> (sword):",
				63: "Encounters on steps 2 and 15.",
				64: "Encounters on steps 15 and 32."
			},
			68: {
				"instruction": "Take <strong>16</strong> extra steps in the save room. Determine your seed based on the room after the next room (B3F):",
				68: "No encounters.",
				69: "One encounter with CaveToad x3."
			},
			78: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				78: "One encounter on step 32.",
				79: "One encounter on step 14."
			},
			132: {
				"instruction": "Take <strong>26</strong> extra steps in the save room. Determine your seed based on the room where you get <i>Darkness</i> (sword):",
				132: "First encounter is Aligator x1, Pike x2.",
				133: "First encounter is TinyMage x2, WaterHag x4."
			},
			143: {
				"instruction": "Take <strong>2</strong> extra steps in the save room. Determine your seed based on the next room:",
				143: "Encounter with Pike x3.",
				144: "Encounter with CaveToad x3."
			},
			175: {
				"instruction": "Take <strong>4</strong> extra steps in the save room. Determine your seed based on the next room:",
				175: "No encounters.",
				176: "One encounter."
			},
			183: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				183: "One encounter on step 37. Don't take any extra steps.",
				184: "Two encounters on steps 18 and 37. Take <strong>8</strong> extra steps before leaving the room. There will be one more encounter during the extra steps."
			},
			247: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				247: "No encounters.",
				248: "One encounter with Pike x3."
			}
		},
		"no64-rosa": {
			14: {
				"instruction": "Take <strong>54</strong> extra steps in the save room. Determine your seed based on the next room:",
				14: "One encounter with CaveToad x3.",
				15: "No encounters."
			},
			22: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				22: "Two encounters.",
				23: "Three encounters."
			},
			30: {
				"instruction": "Take <strong>8</strong> extra steps in the save room. Determine your seed based on the next room:",
				30: "One encounter with CaveToad x3.",
				31: "No encounters."
			},
			41: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				41: "No encounters.",
				42: "One encounter with Pike x3."
			},
			47: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				47: "One encounter.",
				48: "Two encounters."
			},
			63: {
				"instruction": "Take <strong>72</strong> extra steps in the save room. Determine your seed based on the room where you get <i>Darkness</i> (sword):",
				63: "Encounters on steps 2 and 15.",
				64: "Encounters on steps 15 and 32."
			},
			68: {
				"instruction": "Take <strong>16</strong> extra steps in the save room. Determine your seed based on the room after the next room (B3F):",
				68: "No encounters.",
				69: "One encounter with CaveToad x3."
			},
			78: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				78: "One encounter on step 32.",
				79: "One encounter on step 14."
			},
			132: {
				"instruction": "Take <strong>26</strong> extra steps in the save room. Determine your seed based on the room where you get <i>Darkness</i> (sword):",
				132: "First encounter is Aligator x1, Pike x2.",
				133: "First encounter is TinyMage x2, WaterHag x4."
			},
			143: {
				"instruction": "Take <strong>2</strong> extra steps in the save room. Determine your seed based on the next room:",
				143: "Encounter with Pike x3.",
				144: "Encounter with CaveToad x3."
			},
			175: {
				"instruction": "Take <strong>60</strong> extra steps in the save room. Determine your seed based on the next room:",
				175: "One encounter with Pike x2, EvilShel x2.",
				176: "No encounters."
			},
			183: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				183: "One encounter on step 37. Don't take any extra steps.",
				184: "Two encounters on steps 18 and 37."
			},
			247: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				247: "No encounters.",
				248: "One encounter with Pike x3."
			}
		}
	};

	var routeNames = {
		"paladin": "Paladin%",
		"nocw": "Any% NoCW",
		"no64-rosa": "Any% No64 (Rosa)",
		"no64-excalbur": "Any% No64 (Edge+Excalbur)"
	}

    /*
     * Global Variables
     */

	var currentMapIndex = 0;
	var selectedSteps = new Set([]);
	var possibleSeeds = new Set([]);
	var possibleSteps = new Set([]);
	var setEncounters = {};
	var finished = false;

    /*
     * Functions
     */

	var onMapClick = function(e) {
		var x = Math.floor(e.offsetX / 16) + _mapData[currentMapIndex].origin[0];
		var y = Math.floor(e.offsetY / 16) + _mapData[currentMapIndex].origin[1];
		var step = getStep(x, y);

		if (step > 0) {
			if (!selectedSteps.has(step) && possibleSteps.has(step)) {
				selectedSteps.add(step);
			} else {
				selectedSteps.delete(step);
			}

			updateDisplay();
		}
	};

	var reset = function() {
		currentMapIndex = 0;
		selectedSteps = new Set([]);
		possibleSeeds = new Set([]);
		possibleSteps = new Set([]);
		setEncounters = {};

		updateDisplay();
	}

	var init = function() {
		var canvas = document.getElementById('map');
		canvas.addEventListener('click', onMapClick);

		var previous = document.getElementById('button-image-previous');
		previous.addEventListener('click', onPreviousImageClick);

		var next = document.getElementById('button-image-next');
		next.addEventListener('click', onNextImageClick);

		var reset = document.getElementById('button-reset');
		reset.addEventListener('click', onResetClick);

		var select = document.getElementById('route-select');
		select.addEventListener('change', onRouteChange);

		updateDisplay();
	};

	var drawStep = function(step, ctx, boxStyle, textStyle) {
		var x = _stepData[step][0] - _mapData[currentMapIndex].origin[0];
		var y = _stepData[step][1] - _mapData[currentMapIndex].origin[1];

		ctx.beginPath();
		ctx.fillStyle = 'rgba(0, 0, 0, 0.4)';
		ctx.fillRect(x * 16, y * 16, 16, 16);
		ctx.stroke();

		ctx.beginPath();
		ctx.fillStyle = boxStyle;
		ctx.fillRect(x * 16, y * 16, 16, 1);
		ctx.fillRect(x * 16, y * 16, 1, 16);
		ctx.fillRect(x * 16, y * 16 + 15, 16, 1);
		ctx.fillRect(x * 16 + 15, y * 16, 1, 16);
		ctx.stroke();

		if (textStyle) {
			ctx.textAlign = "center";
			ctx.textBaseline = "middle";
			ctx.fillStyle = textStyle;
			ctx.fillText(step, (x * 16) + 7.5, y * 16 + 8, 14);
		}
	}

	var drawMap = function() {
		var mapData = _mapData[currentMapIndex];
		var canvas = document.getElementById('map');
		var ctx = canvas.getContext('2d');

		var img = new Image();

		img.onload = function() {
			ctx.drawImage(img, mapData.origin[0] * 16, mapData.origin[1] * 16, 32 * 16, 32 * 16, 0, 0, 32 * 16, 32 * 16);

			var offScreenCanvas = document.createElement('canvas');
			offScreenCanvas.width = canvas.width;
			offScreenCanvas.height = canvas.height;
			var offScreenCtx = offScreenCanvas.getContext('2d');

			Object.entries(_stepData).forEach(
				([step, [stepX, stepY]]) => {
					if (parseInt(step) >= _mapData[currentMapIndex].stepRange[0] && parseInt(step) <= _mapData[currentMapIndex].stepRange[1]) {
						if (possibleSteps.has(parseInt(step))) {
							drawStep(step, offScreenCtx, "#FFFFFF", "#FFFFFF");
						} else {
							drawStep(step, offScreenCtx, "#A0A0A0", "#DDDDDD");
						}
					}
				}
			);

			for (var step of selectedSteps) {
				drawStep(step, offScreenCtx, "#FF0000", null);
			}

			ctx.drawImage(offScreenCanvas, 0, 0);
		};

		img.src = '/static/img/maps/composite/' + mapData.map + '.png';
	};

	var getStep = function(x, y) {
		var mapData = _mapData[currentMapIndex];
		var result;

		Object.entries(_stepData).forEach(
			([step, [stepX, stepY]]) => {
				if (x == stepX && y == stepY && parseInt(step) >= mapData.stepRange[0] && parseInt(step) <= mapData.stepRange[1]) {
					result = parseInt(step);
				}
			}
		);

		return result;
	};

	var setEncounter = function(step, formation) {
		if (step in setEncounters) {
			delete setEncounters[step];
		} else {
			setEncounters[step] = formation;
		}

		updateDisplay();
	}

	var onEncounterClick = function(e) {
		tokens = this.id.split('-');
		setEncounter(parseInt(tokens[1]), tokens[2])
		e.preventDefault();
	}

	var onPreviousImageClick = function(e) {
		if (currentMapIndex > 0) {
			currentMapIndex -= 1;
		}

		updateDisplay();
	}

	var onNextImageClick = function(e) {
		if (currentMapIndex < _mapData.length - 1) {
			currentMapIndex += 1;
		} else if (currentMapIndex == _mapData.length - 1) {
			finished = !finished;
		}

		updateDisplay();
	}

	var onResetClick = function(e) {
		reset();
	}

	var onRouteChange = function(e) {
		updateDisplay();
	}

	var updateEncounters = function() {
		var e = document.getElementById('encounters');
		e.innerHTML = '<h3>Encounters</h3>';

		for (var step of selectedSteps) {
			if (step < _mapData[currentMapIndex].stepRange[0] || step > _mapData[currentMapIndex].stepRange[1]) {
				continue;
			}

			e.innerHTML += '<h4>Step ' + step + '</h4>';

			var formations = new Set([]);

			for (var seed of possibleSeeds) {
				var formation = _encounterData[seed][step];

				if (!(formations.has(formation))) {
					formations.add(formation);
				}
			}

			var list = document.createElement('ul');

			for (var formation of formations) {
				var item = document.createElement('li');
				var link = document.createElement('a');
				link.setAttribute('href', '#');
				link.setAttribute('id', 'encounter-' + step + '-' + formation);

				if (step in setEncounters) {
					link.innerHTML = '<strong>' + formation + '</strong>';
				} else {
					link.innerHTML = formation;
				}

				link.addEventListener('click', onEncounterClick);
				item.appendChild(link);
				list.appendChild(item);
			}

			e.appendChild(list);
		}
	}

	var updateSeeds = function() {
		var twinSeeds = new Set([7, 14, 22, 30, 41, 47, 63, 68, 78, 98, 101, 109, 132, 143, 168, 175, 183, 231, 247]);

		possibleSeeds = new Set([]);

		var maxStep = Math.max(...selectedSteps);

		if (finished) {
			maxStep = 211;
		}

		Object.entries(_encounterData).forEach(
			([seed, data]) => {
				var valid = true;

				for (var step = 1; step <= maxStep; step++) {
					if ((step in data) && !(selectedSteps.has(step))) {
						valid = false;
					} else if ((selectedSteps.has(step)) && !(step in data)) {
						valid = false;
					} else if ((step in data) && (selectedSteps.has(step)) && (step in setEncounters)) {
						if (setEncounters[step] != data[step]) {
							valid = false;
						}
					}
				}

				if (valid) {
					possibleSeeds.add(seed);
				}
			}
		);

		var route = document.getElementById('route-select').value;

		var e = document.getElementById('seeds');
		e.innerHTML = '';

		var possibleSeedsLinks = [];

		for (seed of possibleSeeds) {
			possibleSeedsLinks.push('<a href="/routes/' + route + '/' + seed + '/">' + seed + '</a>');
		}

		if (possibleSeeds.size == 2) {
			for (seed of twinSeeds) {
				if (possibleSeeds.has(seed.toString()) && possibleSeeds.has((seed + 1).toString())) {
					if (route in _twinSeedData) {
						if (seed in _twinSeedData[route]) {
							let txt = '<div class="bs-callout bs-callout-info"><span class="fas fa-exclamation-triangle"></span><h4>Twin Seed Alert</h4><p>These instructions are for <strong>' + routeNames[route] + '</strong>.</p><p>The following two seeds are twin seeds. ' + _twinSeedData[route][seed]['instruction'] + '</p>'
							txt += '<dl class="row">'
							txt += '<dt class="col-md-1">' + seed.toString() + '</dt><dd class="col-md-11">' + _twinSeedData[route][seed][seed] + '</dd>';
							txt += '<dt class="col-md-1">' + (seed + 1).toString() + '</dt><dd class="col-md-11">' + _twinSeedData[route][seed][seed + 1] + '</dd>';
							txt += '</dl></div>'

							e.innerHTML = txt;
						} else {
							e.innerHTML += '<div class="bs-callout bs-callout-danger"><span class="fas fa-exclamation-triangle"></span><h4>Twin Seed Alert</h4><p>The following two seeds are twin seeds, but they are distinguishable by formation. Twin seed safety is only guaranteed if you select all formations. At this point, either reset or pick one of the seeds and hope you guessed right.</p></div>';
						}
					} else {
						e.innerHTML += '<div class="bs-callout bs-callout-danger"><span class="fas fa-exclamation-triangle"></span><h4>Twin Seed Alert</h4><p>The following two seeds are twin seeds. You may be able to distinguish them by selecting formations. Otherwise, load both seeds and keep following one until you are either missing an encounter or have an extra encounter. At that point, switch to the other. (For now, this may not work. Eventually, the routes will be fixed to make this safe.)</p></div>';
					}
				}
			}
		}

		e.innerHTML += '<p>' + Array.from(possibleSeedsLinks).join(', ') + '</p>';
	}

	var updateSteps = function() {
		possibleSteps = new Set([]);

		for (var seed of possibleSeeds) {
			Object.entries(_encounterData[seed]).forEach(
				([step, formation]) => {
					if (!(possibleSteps.has(parseInt(step)))) {
						possibleSteps.add(parseInt(step));
					}
				}
			);
		}
	}

	var updateDisplay = function() {
		updateSeeds();
		updateSteps();
		updateEncounters();
		drawMap();

		var previous = document.getElementById('button-image-previous');
		var next = document.getElementById('button-image-next');

		if (currentMapIndex == 0) {
			previous.setAttribute('disabled', true);
		} else {
			previous.removeAttribute('disabled');
		}

		if (currentMapIndex == _mapData.length - 1) {
			if (finished) {
				next.innerHTML = 'Unfinish';
			} else {
				next.innerHTML = 'Finish';
			}
		} else {
			next.innerHTML = 'Next Image';
			next.removeAttribute('disabled');
		}
	}

    /*
     * Public Definition
     */

    return {
		init: init
    };
}();
