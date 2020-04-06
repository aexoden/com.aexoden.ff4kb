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

	var _encounterData = {};

	_encounterData.fusoya = [
		{
			"37": "Red Worm x1, Procyote x1, Juclyote x1",
			"87": "Red Worm x1, Procyote x1, Juclyote x1",
			"97": "Red Worm x2",
			"120": "MoonCell x2, Pudding x2",
			"130": "Procyote x1, Pudding x2",
			"144": "Slime x1, Tofu x1, Pudding x1",
			"180": "Procyote x1, Pudding x2"
		},
		{
			"37": "Red Worm x1, Procyote x1, Juclyote x1",
			"56": "Procyote x1, Juclyote x2",
			"87": "Red Worm x2",
			"97": "Pudding x2, Grenade x2",
			"120": "Slime x1, Tofu x1, Pudding x1",
			"130": "Slime x1, Tofu x1, Pudding x1",
			"144": "Procyote x1, Pudding x2",
			"180": "Juclyote x2, MoonCell x2, Grenade x1"
		},
		{
			"37": "Red Worm x1, Procyote x1, Juclyote x1",
			"56": "Procyote x1, Juclyote x2",
			"87": "Red Worm x2",
			"97": "Pudding x2, Grenade x2",
			"120": "Slime x1, Tofu x1, Pudding x1",
			"130": "Slime x1, Tofu x1, Pudding x1",
			"144": "Procyote x1, Pudding x2",
			"146": "Red Worm x2"
		},
		{
			"37": "Red Worm x1, Procyote x1, Juclyote x1",
			"56": "Procyote x1, Juclyote x2",
			"87": "Red Worm x2",
			"120": "MoonCell x2, Pudding x2",
			"130": "Slime x1, Tofu x1, Pudding x1",
			"144": "Slime x1, Tofu x1, Pudding x1",
			"146": "Pudding x4",
			"182": "Juclyote x2, MoonCell x2, Grenade x1"
		},
		{
			"56": "MoonCell x2, Pudding x2",
			"81": "Red Worm x1, Procyote x1, Juclyote x1",
			"87": "Red Worm x2",
			"120": "MoonCell x2, Pudding x2",
			"130": "Slime x1, Tofu x1, Pudding x1",
			"144": "Slime x1, Tofu x1, Pudding x1",
			"146": "Pudding x4",
			"182": "Juclyote x2, MoonCell x2, Grenade x1"
		},
		{
			"56": "MoonCell x2, Pudding x2",
			"81": "Red Worm x1, Procyote x1, Juclyote x1",
			"87": "Red Worm x2",
			"130": "MoonCell x2, Pudding x2",
			"144": "Slime x1, Tofu x1, Pudding x1",
			"146": "Juclyote x1, Procyote x2",
			"159": "Pudding x4",
			"182": "Juclyote x1, Procyote x2"
		},
		{
			"56": "MoonCell x2, Pudding x2",
			"81": "Red Worm x1, Procyote x1, Juclyote x1",
			"87": "Red Worm x2",
			"130": "Procyote x1, Pudding x2",
			"146": "Juclyote x1, Procyote x2",
			"159": "Juclyote x1, Procyote x2",
			"182": "Procyote x1, Pudding x2",
			"183": "Juclyote x1, Procyote x2"
		},
		{
			"56": "MoonCell x2, Pudding x2",
			"81": "Red Worm x1, Procyote x1, Juclyote x1",
			"87": "Red Worm x2",
			"146": "Pudding x4",
			"159": "Juclyote x1, Procyote x2",
			"182": "Slime x1, Tofu x1, Pudding x1",
			"183": "Procyote x1, Pudding x2",
			"223": "Red Worm x2"
		},
		{
			"56": "MoonCell x2, Pudding x2",
			"81": "Red Worm x1, Procyote x1, Juclyote x1",
			"146": "Pudding x2, Grenade x2",
			"159": "Pudding x4",
			"182": "Slime x1, Tofu x1, Pudding x1",
			"183": "Slime x1, Tofu x1, Pudding x1",
			"223": "Red Worm x1, Grenade x3"
		},
		{
			"35": "Red Worm x1, Procyote x1, Juclyote x1",
			"81": "Red Worm x1, Procyote x1, Juclyote x1",
			"146": "Pudding x2, Grenade x2",
			"159": "Pudding x4",
			"182": "Slime x1, Tofu x1, Pudding x1",
			"183": "Slime x1, Tofu x1, Pudding x1",
			"223": "Red Worm x1, Grenade x3"
		},
		{
			"13": "Red Worm x1, Procyote x1, Juclyote x1",
			"35": "Procyote x1, Pudding x2",
			"81": "Pudding x2, Grenade x2",
			"159": "Pudding x4",
			"182": "Slime x1, Tofu x1, Pudding x1",
			"183": "Slime x1, Tofu x1, Pudding x1",
			"223": "Red Worm x1, Grenade x3"
		},
		{
			"13": "Red Worm x1, Procyote x1, Juclyote x1",
			"35": "Procyote x1, Juclyote x2",
			"81": "Pudding x2, Grenade x2",
			"159": "Pudding x4",
			"183": "Slime x1, Tofu x1, Pudding x1",
			"212": "Slime x1, Tofu x1, Pudding x1",
			"223": "Red Worm x1, Grenade x3"
		},
		{
			"13": "Red Worm x1, Procyote x1, Juclyote x1",
			"35": "Procyote x1, Juclyote x2",
			"64": "MoonCell x2, Pudding x2",
			"159": "Pudding x4",
			"183": "Slime x1, Tofu x1, Pudding x1",
			"212": "Slime x1, Tofu x1, Pudding x1",
			"223": "Red Worm x1, Grenade x3"
		},
		{
			"13": "Red Worm x1, Procyote x1, Juclyote x1",
			"35": "Procyote x1, Juclyote x2",
			"64": "MoonCell x2, Pudding x2",
			"158": "Pudding x4",
			"183": "Slime x1, Tofu x1, Pudding x1",
			"212": "Slime x1, Tofu x1, Pudding x1",
			"223": "Red Worm x1, Grenade x3"
		},
		{
			"13": "Red Worm x1, Procyote x1, Juclyote x1",
			"29": "Procyote x1, Juclyote x2",
			"35": "Red Worm x1, Procyote x1, Juclyote x1",
			"64": "Procyote x1, Pudding x2",
			"158": "Juclyote x1, Procyote x2",
			"212": "Slime x1, Tofu x1, Pudding x1",
			"223": "Red Worm x1, Grenade x3"
		},
		{
			"13": "Red Worm x1, Procyote x1, Juclyote x1",
			"29": "Procyote x1, Juclyote x2",
			"35": "Red Worm x1, Procyote x1, Juclyote x1",
			"64": "Procyote x1, Pudding x2",
			"158": "Juclyote x1, Procyote x2",
			"212": "Slime x1, Tofu x1, Pudding x1",
			"222": "Red Worm x1, Grenade x3"
		},
		{
			"2": "MoonCell x2, Pudding x2",
			"13": "Procyote x1, Juclyote x2",
			"29": "Red Worm x1, Procyote x1, Juclyote x1",
			"35": "Red Worm x1, Grenade x3",
			"64": "Slime x1, Tofu x1, Pudding x1",
			"158": "Juclyote x1, Procyote x2",
			"212": "Slime x1, Tofu x1, Pudding x1",
			"222": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"2": "MoonCell x2, Pudding x2",
			"13": "Procyote x1, Juclyote x2",
			"29": "Red Worm x1, Procyote x1, Juclyote x1",
			"64": "Procyote x1, Pudding x2",
			"93": "Juclyote x1, Procyote x2",
			"158": "Juclyote x1, Procyote x2",
			"212": "Slime x1, Tofu x1, Pudding x1",
			"222": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"2": "Procyote x1, Pudding x2",
			"29": "Procyote x1, Juclyote x2",
			"64": "MoonCell x2, Pudding x2",
			"93": "Pudding x4",
			"158": "Juclyote x1, Procyote x2",
			"212": "Slime x1, Tofu x1, Pudding x1",
			"222": "Slime x1, Tofu x1, Pudding x1",
			"224": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"2": "Procyote x1, Pudding x2",
			"29": "Procyote x1, Juclyote x2",
			"64": "MoonCell x2, Pudding x2",
			"67": "Procyote x1, Pudding x2",
			"93": "Juclyote x1, Procyote x2",
			"158": "Juclyote x1, Procyote x2",
			"222": "Slime x1, Tofu x1, Pudding x1",
			"224": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"2": "Procyote x1, Pudding x2",
			"29": "Procyote x1, Juclyote x2",
			"67": "MoonCell x2, Pudding x2",
			"93": "Pudding x4",
			"158": "Juclyote x1, Procyote x2",
			"222": "Balloon x2, Grenade x2",
			"224": "Slime x1, Tofu x1, Pudding x1",
			"251": "MoonCell x2, Pudding x2"
		},
		{
			"2": "Procyote x1, Pudding x2",
			"29": "Procyote x1, Juclyote x2",
			"67": "MoonCell x2, Pudding x2",
			"93": "Pudding x4",
			"96": "Juclyote x1, Procyote x2",
			"222": "Balloon x2, Grenade x2",
			"224": "Slime x1, Tofu x1, Pudding x1",
			"251": "MoonCell x2, Pudding x2"
		},
		{
			"2": "Procyote x1, Pudding x2",
			"67": "Juclyote x2, MoonCell x2, Grenade x1",
			"93": "Pudding x2, Grenade x2",
			"96": "Pudding x4",
			"206": "Balloon x2, Grenade x2",
			"222": "Balloon x2, Grenade x2",
			"224": "Slime x1, Tofu x1, Pudding x1",
			"251": "MoonCell x2, Pudding x2"
		},
		{
			"2": "Procyote x1, Pudding x2",
			"67": "Juclyote x2, MoonCell x2, Grenade x1",
			"93": "Pudding x2, Grenade x2",
			"96": "Pudding x4",
			"206": "Balloon x2, Grenade x2",
			"224": "Balloon x2, Grenade x2",
			"239": "Slime x1, Tofu x1, Pudding x1",
			"251": "MoonCell x2, Pudding x2"
		},
		{
			"67": "Procyote x1, Pudding x2",
			"93": "Red Worm x2",
			"96": "Pudding x2, Grenade x2",
			"206": "Procyote x1, Pudding x2",
			"224": "Balloon x2, Grenade x2",
			"239": "Balloon x2, Grenade x2",
			"251": "Slime x1, Tofu x1, Pudding x1",
			"253": "MoonCell x2, Pudding x2"
		},
		{
			"52": "Procyote x1, Pudding x2",
			"67": "Juclyote x2, MoonCell x2, Grenade x1",
			"96": "Pudding x2, Grenade x2",
			"206": "Procyote x1, Pudding x2",
			"224": "Balloon x2, Grenade x2",
			"239": "Balloon x2, Grenade x2",
			"251": "Slime x1, Tofu x1, Pudding x1",
			"253": "MoonCell x2, Pudding x2"
		},
		{
			"52": "Procyote x1, Pudding x2",
			"60": "Juclyote x2, MoonCell x2, Grenade x1",
			"67": "MoonCell x2, Pudding x2",
			"96": "Pudding x4",
			"206": "Balloon x2, Grenade x2",
			"239": "Balloon x2, Grenade x2",
			"251": "Slime x1, Tofu x1, Pudding x1",
			"253": "MoonCell x2, Pudding x2"
		},
		{
			"52": "Procyote x1, Pudding x2",
			"60": "Juclyote x1, Procyote x2",
			"92": "Pudding x2, Grenade x2",
			"96": "Pudding x4",
			"206": "Balloon x2, Grenade x2",
			"239": "Balloon x2, Grenade x2",
			"251": "Slime x1, Tofu x1, Pudding x1",
			"253": "MoonCell x2, Pudding x2"
		},
		{
			"52": "Procyote x1, Pudding x2",
			"60": "Juclyote x1, Procyote x2",
			"69": "MoonCell x2, Pudding x2",
			"92": "Juclyote x1, Procyote x2",
			"96": "Juclyote x1, Procyote x2",
			"206": "Balloon x2, Grenade x2",
			"239": "Slime x1, Tofu x1, Pudding x1",
			"253": "MoonCell x2, Pudding x2"
		},
		{
			"7": "Red Worm x1, Grenade x3",
			"52": "Juclyote x1, Procyote x2",
			"60": "MoonCell x2, Pudding x2",
			"69": "Slime x1, Tofu x1, Pudding x1",
			"92": "Juclyote x1, Procyote x2",
			"206": "Balloon x2, Grenade x2",
			"239": "Slime x1, Tofu x1, Pudding x1",
			"253": "MoonCell x2, Pudding x2"
		},
		{
			"7": "Red Worm x1, Grenade x3",
			"52": "Juclyote x1, Procyote x2",
			"60": "Procyote x1, Pudding x2",
			"69": "Slime x1, Tofu x1, Pudding x1",
			"92": "Juclyote x1, Procyote x2",
			"188": "Balloon x2, Grenade x2",
			"239": "Slime x1, Tofu x1, Pudding x1",
			"253": "MoonCell x2, Pudding x2"
		},
		{
			"7": "Red Worm x1, Grenade x3",
			"52": "Juclyote x1, Procyote x2",
			"60": "Procyote x1, Pudding x2",
			"69": "Slime x1, Tofu x1, Pudding x1",
			"92": "Juclyote x1, Procyote x2",
			"188": "Balloon x2, Grenade x2",
			"220": "Slime x1, Tofu x1, Pudding x1",
			"253": "MoonCell x2, Pudding x2"
		},
		{
			"7": "Red Worm x1, Grenade x3",
			"52": "Juclyote x1, Procyote x2",
			"60": "Procyote x1, Pudding x2",
			"69": "Slime x1, Tofu x1, Pudding x1",
			"92": "Juclyote x1, Procyote x2",
			"141": "Balloon x2, Grenade x2",
			"188": "Slime x1, Tofu x1, Pudding x1",
			"220": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"7": "Red Worm x1, Grenade x3",
			"60": "Juclyote x1, Procyote x2",
			"69": "Procyote x1, Pudding x2",
			"92": "Juclyote x1, Procyote x2",
			"141": "Balloon x2, Grenade x2",
			"188": "Balloon x2, Grenade x2",
			"220": "Slime x1, Tofu x1, Pudding x1",
			"241": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"7": "Red Worm x1, Grenade x3",
			"69": "Juclyote x1, Procyote x2",
			"92": "Pudding x4",
			"121": "Slime x1, Tofu x1, Pudding x1",
			"141": "Balloon x2, Grenade x2",
			"188": "Balloon x2, Grenade x2",
			"220": "Slime x1, Tofu x1, Pudding x1",
			"241": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"7": "Red Worm x1, Grenade x3",
			"31": "Red Worm x2",
			"69": "Procyote x1, Pudding x2",
			"121": "Slime x1, Tofu x1, Pudding x1",
			"141": "Balloon x2, Grenade x2",
			"188": "Balloon x2, Grenade x2",
			"220": "Slime x1, Tofu x1, Pudding x1",
			"241": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"7": "Red Worm x1, Grenade x3",
			"31": "Red Worm x2",
			"121": "Procyote x1, Pudding x2",
			"123": "Slime x1, Tofu x1, Pudding x1",
			"141": "Balloon x2, Grenade x2",
			"188": "Balloon x2, Grenade x2",
			"220": "Slime x1, Tofu x1, Pudding x1",
			"241": "Red Worm x1, Grenade x3"
		},
		{
			"31": "Red Worm x1, Grenade x3",
			"94": "Pudding x2, Grenade x2",
			"121": "Procyote x1, Pudding x2",
			"123": "Slime x1, Tofu x1, Pudding x1",
			"141": "Balloon x2, Grenade x2",
			"188": "Balloon x2, Grenade x2",
			"220": "Balloon x2, Grenade x2",
			"241": "Red Worm x1, Grenade x3"
		},
		{
			"31": "Red Worm x1, Grenade x3",
			"73": "MoonCell x2, Pudding x2",
			"94": "Pudding x4",
			"121": "Slime x1, Tofu x1, Pudding x1",
			"123": "Balloon x2, Grenade x2",
			"141": "Balloon x2, Grenade x2",
			"220": "Balloon x2, Grenade x2",
			"241": "Red Worm x1, Grenade x3"
		},
		{
			"31": "Red Worm x1, Grenade x3",
			"73": "MoonCell x2, Pudding x2",
			"94": "Pudding x4",
			"121": "Slime x1, Tofu x1, Pudding x1",
			"123": "Balloon x2, Grenade x2",
			"141": "Balloon x2, Grenade x2",
			"203": "Balloon x2, Grenade x2",
			"241": "Red Worm x1, Grenade x3"
		},
		{
			"31": "Slime x1, Tofu x1, Pudding x1",
			"73": "MoonCell x2, Pudding x2",
			"94": "Pudding x4",
			"121": "Slime x1, Tofu x1, Pudding x1",
			"123": "Balloon x2, Grenade x2",
			"125": "Balloon x2, Grenade x2",
			"203": "Balloon x2, Grenade x2",
			"241": "Red Worm x1, Grenade x3"
		},
		{
			"26": "Slime x1, Tofu x1, Pudding x1",
			"31": "Red Worm x1, Procyote x1, Juclyote x1",
			"73": "Procyote x1, Pudding x2",
			"94": "Juclyote x1, Procyote x2",
			"121": "Balloon x2, Grenade x2",
			"123": "Procyote x1, Juclyote x2",
			"125": "Balloon x2, Grenade x2",
			"203": "Procyote x1, Pudding x2"
		},
		{
			"26": "Slime x1, Tofu x1, Pudding x1",
			"31": "Red Worm x1, Procyote x1, Juclyote x1",
			"73": "Procyote x1, Pudding x2",
			"94": "Juclyote x1, Procyote x2",
			"123": "Balloon x2, Grenade x2",
			"125": "Procyote x1, Juclyote x2",
			"203": "Balloon x2, Grenade x2",
			"236": "Red Worm x1, Grenade x3"
		},
		{
			"26": "Slime x1, Tofu x1, Pudding x1",
			"47": "MoonCell x2, Pudding x2",
			"73": "Procyote x1, Pudding x2",
			"94": "Juclyote x1, Procyote x2",
			"123": "Balloon x2, Grenade x2",
			"125": "Procyote x1, Juclyote x2",
			"203": "Balloon x2, Grenade x2",
			"236": "Red Worm x1, Grenade x3"
		},
		{
			"26": "Slime x1, Tofu x1, Pudding x1",
			"47": "MoonCell x2, Pudding x2",
			"58": "Procyote x1, Pudding x2",
			"73": "Slime x1, Tofu x1, Pudding x1",
			"94": "Red Worm x1, Procyote x1, Juclyote x1",
			"125": "Procyote x1, Juclyote x2",
			"203": "Balloon x2, Grenade x2",
			"236": "Red Worm x1, Grenade x3"
		},
		{
			"26": "Slime x1, Tofu x1, Pudding x1",
			"47": "MoonCell x2, Pudding x2",
			"58": "Procyote x1, Pudding x2",
			"61": "Slime x1, Tofu x1, Pudding x1",
			"73": "Procyote x1, Juclyote x2",
			"125": "Procyote x1, Juclyote x2",
			"203": "Balloon x2, Grenade x2",
			"236": "Red Worm x1, Grenade x3"
		},
		{
			"26": "Slime x1, Tofu x1, Pudding x1",
			"47": "MoonCell x2, Pudding x2",
			"58": "Procyote x1, Pudding x2",
			"61": "Slime x1, Tofu x1, Pudding x1",
			"125": "Procyote x1, Juclyote x2",
			"186": "Procyote x1, Juclyote x2",
			"203": "Balloon x2, Grenade x2",
			"236": "Red Worm x1, Grenade x3"
		},
		{
			"26": "Slime x1, Tofu x1, Pudding x1",
			"27": "Red Worm x1, Procyote x1, Juclyote x1",
			"47": "Procyote x1, Pudding x2",
			"58": "Slime x1, Tofu x1, Pudding x1",
			"61": "Procyote x1, Juclyote x2",
			"125": "Procyote x1, Juclyote x2",
			"186": "Balloon x2, Grenade x2",
			"236": "Red Worm x1, Grenade x3"
		},
		{
			"26": "Slime x1, Tofu x1, Pudding x1",
			"27": "Red Worm x1, Procyote x1, Juclyote x1",
			"47": "Procyote x1, Pudding x2",
			"58": "Slime x1, Tofu x1, Pudding x1",
			"61": "Procyote x1, Juclyote x2",
			"186": "Procyote x1, Juclyote x2",
			"236": "Balloon x2, Grenade x2",
			"246": "Red Worm x1, Grenade x3"
		},
		{
			"27": "Slime x1, Tofu x1, Pudding x1",
			"47": "MoonCell x2, Pudding x2",
			"58": "Procyote x1, Pudding x2",
			"61": "Balloon x2, Grenade x2",
			"167": "Red Worm x1, Procyote x1, Juclyote x1",
			"186": "Procyote x1, Juclyote x2",
			"236": "Balloon x2, Grenade x2",
			"246": "Red Worm x1, Grenade x3"
		},
		{
			"27": "Slime x1, Tofu x1, Pudding x1",
			"47": "MoonCell x2, Pudding x2",
			"54": "Procyote x1, Pudding x2",
			"58": "Balloon x2, Grenade x2",
			"61": "Procyote x1, Juclyote x2",
			"167": "Red Worm x1, Procyote x1, Juclyote x1",
			"186": "Balloon x2, Grenade x2",
			"246": "Red Worm x1, Grenade x3"
		},
		{
			"27": "Slime x1, Tofu x1, Pudding x1",
			"54": "MoonCell x2, Pudding x2",
			"58": "Slime x1, Tofu x1, Pudding x1",
			"61": "Balloon x2, Grenade x2",
			"89": "Red Worm x1, Procyote x1, Juclyote x1",
			"167": "Red Worm x1, Procyote x1, Juclyote x1",
			"186": "Balloon x2, Grenade x2",
			"246": "Red Worm x1, Grenade x3"
		},
		{
			"27": "Slime x1, Tofu x1, Pudding x1",
			"54": "MoonCell x2, Pudding x2",
			"61": "Slime x1, Tofu x1, Pudding x1",
			"89": "Juclyote x1, Procyote x2",
			"143": "Procyote x1, Juclyote x2",
			"167": "Red Worm x1, Procyote x1, Juclyote x1",
			"186": "Balloon x2, Grenade x2",
			"246": "Red Worm x1, Grenade x3"
		},
		{
			"15": "Slime x1, Tofu x1, Pudding x1",
			"27": "Red Worm x1, Procyote x1, Juclyote x1",
			"54": "Slime x1, Tofu x1, Pudding x1",
			"89": "Juclyote x1, Procyote x2",
			"143": "Procyote x1, Juclyote x2",
			"167": "Red Worm x1, Procyote x1, Juclyote x1",
			"186": "Balloon x2, Grenade x2",
			"246": "Red Worm x1, Grenade x3"
		},
		{
			"15": "Slime x1, Tofu x1, Pudding x1",
			"27": "Red Worm x1, Procyote x1, Juclyote x1",
			"53": "Slime x1, Tofu x1, Pudding x1",
			"54": "Balloon x2, Grenade x2",
			"89": "Red Worm x1, Procyote x1, Juclyote x1",
			"143": "Procyote x1, Juclyote x2",
			"167": "Juclyote x1, Procyote x2",
			"246": "Red Worm x1, Grenade x3"
		},
		{
			"15": "Slime x1, Tofu x1, Pudding x1",
			"53": "MoonCell x2, Pudding x2",
			"54": "Slime x1, Tofu x1, Pudding x1",
			"89": "Juclyote x1, Procyote x2",
			"99": "Red Worm x1, Procyote x1, Juclyote x1",
			"143": "Procyote x1, Juclyote x2",
			"167": "Juclyote x1, Procyote x2",
			"246": "Red Worm x1, Grenade x3"
		},
		{
			"15": "Slime x1, Tofu x1, Pudding x1",
			"53": "MoonCell x2, Pudding x2",
			"54": "Slime x1, Tofu x1, Pudding x1",
			"89": "Juclyote x1, Procyote x2",
			"99": "Red Worm x1, Procyote x1, Juclyote x1",
			"143": "Procyote x1, Juclyote x2",
			"167": "Juclyote x1, Procyote x2",
			"249": "Procyote x1, Pudding x2"
		},
		{
			"15": "Slime x1, Tofu x1, Pudding x1",
			"24": "Red Worm x1, Procyote x1, Juclyote x1",
			"53": "Slime x1, Tofu x1, Pudding x1",
			"54": "Balloon x2, Grenade x2",
			"89": "Red Worm x1, Procyote x1, Juclyote x1",
			"99": "Red Worm x2",
			"143": "Balloon x2, Grenade x2",
			"249": "Procyote x1, Pudding x2"
		},
		{
			"15": "Slime x1, Tofu x1, Pudding x1",
			"24": "Red Worm x1, Procyote x1, Juclyote x1",
			"53": "Slime x1, Tofu x1, Pudding x1",
			"89": "Juclyote x1, Procyote x2",
			"99": "Red Worm x1, Procyote x1, Juclyote x1",
			"143": "Juclyote x2, MoonCell x2, Grenade x1",
			"232": "Balloon x2, Grenade x2",
			"249": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"15": "Slime x1, Tofu x1, Pudding x1",
			"24": "Red Worm x1, Grenade x3",
			"53": "Slime x1, Tofu x1, Pudding x1",
			"99": "Juclyote x1, Procyote x2",
			"124": "Procyote x1, Juclyote x2",
			"143": "Juclyote x2, MoonCell x2, Grenade x1",
			"232": "Procyote x1, Pudding x2",
			"249": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"15": "Slime x1, Tofu x1, Pudding x1",
			"24": "Red Worm x1, Grenade x3",
			"53": "Slime x1, Tofu x1, Pudding x1",
			"68": "Balloon x2, Grenade x2",
			"99": "Red Worm x2",
			"124": "Juclyote x2, MoonCell x2, Grenade x1",
			"232": "Procyote x1, Pudding x2",
			"249": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"24": "Balloon x2, Grenade x2",
			"53": "Procyote x1, Pudding x2",
			"68": "Slime x1, Tofu x1, Pudding x1",
			"78": "Balloon x2, Grenade x2",
			"99": "Red Worm x2",
			"124": "Juclyote x2, MoonCell x2, Grenade x1",
			"232": "Procyote x1, Pudding x2",
			"249": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"24": "Balloon x2, Grenade x2",
			"28": "Red Worm x1, Grenade x3",
			"68": "Slime x1, Tofu x1, Pudding x1",
			"78": "Balloon x2, Grenade x2",
			"99": "Red Worm x2",
			"124": "Juclyote x2, MoonCell x2, Grenade x1",
			"232": "Procyote x1, Pudding x2",
			"249": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"24": "Balloon x2, Grenade x2",
			"28": "Red Worm x1, Grenade x3",
			"30": "Slime x1, Tofu x1, Pudding x1",
			"68": "Balloon x2, Grenade x2",
			"78": "Juclyote x2, MoonCell x2, Grenade x1",
			"124": "Juclyote x2, MoonCell x2, Grenade x1",
			"232": "Procyote x1, Pudding x2",
			"249": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"24": "Balloon x2, Grenade x2",
			"28": "Red Worm x1, Grenade x3",
			"30": "Slime x1, Tofu x1, Pudding x1",
			"68": "Balloon x2, Grenade x2",
			"78": "Juclyote x2, MoonCell x2, Grenade x1",
			"124": "Juclyote x2, MoonCell x2, Grenade x1",
			"232": "Procyote x1, Pudding x2",
			"250": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"28": "Balloon x2, Grenade x2",
			"30": "Red Worm x1, Grenade x3",
			"68": "Slime x1, Tofu x1, Pudding x1",
			"78": "Balloon x2, Grenade x2",
			"124": "Juclyote x2, MoonCell x2, Grenade x1",
			"178": "Juclyote x2, MoonCell x2, Grenade x1",
			"232": "Procyote x1, Pudding x2",
			"250": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"28": "Balloon x2, Grenade x2",
			"30": "Red Worm x1, Grenade x3",
			"43": "Slime x1, Tofu x1, Pudding x1",
			"68": "Balloon x2, Grenade x2",
			"78": "Juclyote x2, MoonCell x2, Grenade x1",
			"124": "Juclyote x2, MoonCell x2, Grenade x1",
			"178": "Procyote x1, Juclyote x2",
			"250": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"28": "Balloon x2, Grenade x2",
			"30": "Red Worm x1, Grenade x3",
			"43": "Slime x1, Tofu x1, Pudding x1",
			"68": "Balloon x2, Grenade x2",
			"78": "Juclyote x2, MoonCell x2, Grenade x1",
			"153": "Red Worm x2",
			"178": "Procyote x1, Juclyote x2",
			"250": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"28": "Balloon x2, Grenade x2",
			"30": "Red Worm x1, Grenade x3",
			"43": "Slime x1, Tofu x1, Pudding x1",
			"78": "Balloon x2, Grenade x2",
			"119": "Juclyote x2, MoonCell x2, Grenade x1",
			"153": "Red Worm x2",
			"178": "Procyote x1, Juclyote x2",
			"250": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"28": "Balloon x2, Grenade x2",
			"30": "Red Worm x1, Grenade x3",
			"43": "Slime x1, Tofu x1, Pudding x1",
			"119": "Balloon x2, Grenade x2",
			"153": "Red Worm x2",
			"178": "Juclyote x2, MoonCell x2, Grenade x1",
			"231": "Procyote x1, Pudding x2",
			"250": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"30": "Balloon x2, Grenade x2",
			"43": "Red Worm x1, Grenade x3",
			"72": "Slime x1, Tofu x1, Pudding x1",
			"119": "Balloon x2, Grenade x2",
			"153": "Red Worm x2",
			"178": "Juclyote x2, MoonCell x2, Grenade x1",
			"231": "Procyote x1, Pudding x2",
			"250": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"43": "Balloon x2, Grenade x2",
			"72": "Procyote x1, Pudding x2",
			"77": "Slime x1, Tofu x1, Pudding x1",
			"119": "Procyote x1, Juclyote x2",
			"153": "Red Worm x2",
			"178": "Juclyote x2, MoonCell x2, Grenade x1",
			"231": "Procyote x1, Pudding x2",
			"250": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"43": "Balloon x2, Grenade x2",
			"72": "Procyote x1, Pudding x2",
			"77": "Slime x1, Tofu x1, Pudding x1",
			"119": "Procyote x1, Juclyote x2",
			"153": "Red Worm x2",
			"178": "Juclyote x2, MoonCell x2, Grenade x1",
			"231": "Procyote x1, Pudding x2",
			"247": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"43": "Balloon x2, Grenade x2",
			"72": "Procyote x1, Pudding x2",
			"77": "Balloon x2, Grenade x2",
			"119": "Procyote x1, Juclyote x2",
			"127": "Juclyote x2, MoonCell x2, Grenade x1",
			"153": "Red Worm x2",
			"231": "Procyote x1, Pudding x2",
			"247": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"1": "Balloon x2, Grenade x2",
			"72": "Procyote x1, Pudding x2",
			"77": "Balloon x2, Grenade x2",
			"119": "Procyote x1, Juclyote x2",
			"127": "Juclyote x2, MoonCell x2, Grenade x1",
			"153": "Red Worm x2",
			"231": "Procyote x1, Pudding x2",
			"247": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"1": "Balloon x2, Grenade x2",
			"48": "Procyote x1, Pudding x2",
			"72": "Balloon x2, Grenade x2",
			"77": "Procyote x1, Juclyote x2",
			"119": "Juclyote x2, MoonCell x2, Grenade x1",
			"127": "Juclyote x1, Procyote x2",
			"231": "Procyote x1, Juclyote x2",
			"247": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"1": "Balloon x2, Grenade x2",
			"48": "Procyote x1, Pudding x2",
			"72": "Balloon x2, Grenade x2",
			"77": "Procyote x1, Juclyote x2",
			"118": "Juclyote x1, Procyote x2",
			"127": "Juclyote x1, Procyote x2",
			"231": "Procyote x1, Juclyote x2",
			"247": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"1": "Balloon x2, Grenade x2",
			"48": "Procyote x1, Pudding x2",
			"72": "Balloon x2, Grenade x2",
			"77": "Procyote x1, Juclyote x2",
			"118": "Juclyote x1, Procyote x2",
			"127": "Juclyote x1, Procyote x2",
			"195": "Juclyote x2, MoonCell x2, Grenade x1",
			"247": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"1": "Balloon x2, Grenade x2",
			"10": "Red Worm x1, Grenade x3",
			"48": "Balloon x2, Grenade x2",
			"77": "Procyote x1, Juclyote x2",
			"118": "Juclyote x1, Procyote x2",
			"127": "Juclyote x1, Procyote x2",
			"195": "Juclyote x2, MoonCell x2, Grenade x1",
			"247": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"1": "Balloon x2, Grenade x2",
			"10": "Red Worm x1, Grenade x3",
			"48": "Balloon x2, Grenade x2",
			"118": "Procyote x1, Juclyote x2",
			"127": "Juclyote x1, Procyote x2",
			"195": "Juclyote x1, Procyote x2",
			"229": "Procyote x1, Juclyote x2",
			"247": "Balloon x2, Grenade x2"
		},
		{
			"1": "Balloon x2, Grenade x2",
			"10": "Slime x1, Tofu x1, Pudding x1",
			"48": "Balloon x2, Grenade x2",
			"118": "Procyote x1, Juclyote x2",
			"127": "Juclyote x1, Procyote x2",
			"140": "Juclyote x1, Procyote x2",
			"195": "Juclyote x2, MoonCell x2, Grenade x1",
			"229": "Balloon x2, Grenade x2"
		},
		{
			"1": "Balloon x2, Grenade x2",
			"10": "Slime x1, Tofu x1, Pudding x1",
			"48": "Balloon x2, Grenade x2",
			"118": "Procyote x1, Juclyote x2",
			"140": "Juclyote x1, Procyote x2",
			"157": "Red Worm x2",
			"195": "Juclyote x2, MoonCell x2, Grenade x1",
			"229": "Balloon x2, Grenade x2"
		},
		{
			"8": "Balloon x2, Grenade x2",
			"10": "Slime x1, Tofu x1, Pudding x1",
			"48": "Balloon x2, Grenade x2",
			"118": "Procyote x1, Juclyote x2",
			"140": "Juclyote x1, Procyote x2",
			"157": "Red Worm x2",
			"195": "Juclyote x2, MoonCell x2, Grenade x1",
			"229": "Balloon x2, Grenade x2"
		},
		{
			"8": "Procyote x1, Pudding x2",
			"10": "Slime x1, Tofu x1, Pudding x1",
			"85": "Juclyote x1, Procyote x2",
			"118": "Procyote x1, Juclyote x2",
			"140": "Juclyote x1, Procyote x2",
			"157": "Pudding x2, Grenade x2",
			"195": "Juclyote x2, MoonCell x2, Grenade x1",
			"229": "Balloon x2, Grenade x2"
		},
		{
			"8": "Procyote x1, Pudding x2",
			"10": "Slime x1, Tofu x1, Pudding x1",
			"85": "Juclyote x1, Procyote x2",
			"117": "Procyote x1, Juclyote x2",
			"140": "Red Worm x2",
			"157": "Pudding x2, Grenade x2",
			"195": "Juclyote x2, MoonCell x2, Grenade x1",
			"229": "Balloon x2, Grenade x2"
		},
		{
			"8": "Procyote x1, Pudding x2",
			"10": "Slime x1, Tofu x1, Pudding x1",
			"76": "Balloon x2, Grenade x2",
			"85": "Red Worm x1, Procyote x1, Juclyote x1",
			"117": "Red Worm x2",
			"140": "MoonCell x2, Pudding x2",
			"157": "Red Worm x2",
			"229": "Balloon x2, Grenade x2"
		},
		{
			"8": "Procyote x1, Pudding x2",
			"32": "Slime x1, Tofu x1, Pudding x1",
			"76": "Balloon x2, Grenade x2",
			"85": "Red Worm x1, Procyote x1, Juclyote x1",
			"117": "MoonCell x2, Pudding x2",
			"140": "MoonCell x2, Pudding x2",
			"157": "Red Worm x2",
			"229": "Balloon x2, Grenade x2"
		},
		{
			"8": "Procyote x1, Pudding x2",
			"32": "Slime x1, Tofu x1, Pudding x1",
			"76": "Balloon x2, Grenade x2",
			"85": "Red Worm x2",
			"117": "MoonCell x2, Pudding x2",
			"140": "MoonCell x2, Pudding x2",
			"157": "Red Worm x2",
			"213": "Balloon x2, Grenade x2"
		},
		{
			"8": "Procyote x1, Pudding x2",
			"32": "Slime x1, Tofu x1, Pudding x1",
			"76": "Balloon x2, Grenade x2",
			"85": "Red Worm x2",
			"117": "MoonCell x2, Pudding x2",
			"157": "Pudding x2, Grenade x2",
			"213": "Procyote x1, Juclyote x2",
			"245": "Balloon x2, Grenade x2"
		},
		{
			"8": "Procyote x1, Pudding x2",
			"20": "Slime x1, Tofu x1, Pudding x1",
			"32": "Balloon x2, Grenade x2",
			"76": "Juclyote x2, MoonCell x2, Grenade x1",
			"85": "Pudding x2, Grenade x2",
			"117": "MoonCell x2, Pudding x2",
			"213": "Procyote x1, Juclyote x2",
			"245": "Balloon x2, Grenade x2"
		},
		{
			"20": "Procyote x1, Pudding x2",
			"32": "Slime x1, Tofu x1, Pudding x1",
			"76": "Balloon x2, Grenade x2",
			"85": "Red Worm x2",
			"117": "MoonCell x2, Pudding x2",
			"205": "MoonCell x2, Pudding x2",
			"213": "Procyote x1, Juclyote x2",
			"245": "Balloon x2, Grenade x2"
		},
		{
			"20": "Procyote x1, Pudding x2",
			"32": "Slime x1, Tofu x1, Pudding x1",
			"76": "Balloon x2, Grenade x2",
			"117": "Juclyote x2, MoonCell x2, Grenade x1",
			"205": "MoonCell x2, Pudding x2",
			"213": "Red Worm x1, Procyote x1, Juclyote x1",
			"230": "Red Worm x2",
			"245": "Balloon x2, Grenade x2"
		},
		{
			"20": "Procyote x1, Pudding x2",
			"32": "Slime x1, Tofu x1, Pudding x1",
			"50": "Balloon x2, Grenade x2",
			"76": "Juclyote x2, MoonCell x2, Grenade x1",
			"205": "MoonCell x2, Pudding x2",
			"213": "Red Worm x1, Procyote x1, Juclyote x1",
			"230": "Red Worm x2",
			"245": "Balloon x2, Grenade x2"
		},
		{
			"20": "Procyote x1, Pudding x2",
			"32": "Slime x1, Tofu x1, Pudding x1",
			"50": "Balloon x2, Grenade x2",
			"148": "Red Worm x2",
			"205": "MoonCell x2, Pudding x2",
			"213": "Red Worm x1, Procyote x1, Juclyote x1",
			"230": "Red Worm x2",
			"245": "Balloon x2, Grenade x2"
		},
		{
			"20": "Procyote x1, Pudding x2",
			"50": "Slime x1, Tofu x1, Pudding x1",
			"148": "Red Worm x1, Procyote x1, Juclyote x1",
			"181": "Juclyote x2, MoonCell x2, Grenade x1",
			"205": "MoonCell x2, Pudding x2",
			"213": "Red Worm x1, Procyote x1, Juclyote x1",
			"230": "Red Worm x2",
			"245": "Balloon x2, Grenade x2"
		},
		{
			"20": "Procyote x1, Pudding x2",
			"39": "Slime x1, Tofu x1, Pudding x1",
			"50": "Procyote x1, Juclyote x2",
			"148": "Red Worm x2",
			"181": "MoonCell x2, Pudding x2",
			"205": "MoonCell x2, Pudding x2",
			"230": "Red Worm x2",
			"245": "Balloon x2, Grenade x2"
		},
		{
			"20": "Procyote x1, Pudding x2",
			"39": "Slime x1, Tofu x1, Pudding x1",
			"50": "Procyote x1, Juclyote x2",
			"102": "Red Worm x2",
			"148": "Pudding x2, Grenade x2",
			"181": "MoonCell x2, Pudding x2",
			"205": "Juclyote x1, Procyote x2",
			"230": "Balloon x2, Grenade x2"
		},
		{
			"39": "Procyote x1, Pudding x2",
			"50": "Slime x1, Tofu x1, Pudding x1",
			"91": "Red Worm x1, Procyote x1, Juclyote x1",
			"102": "Red Worm x2",
			"148": "Pudding x2, Grenade x2",
			"181": "MoonCell x2, Pudding x2",
			"205": "Juclyote x1, Procyote x2",
			"230": "Balloon x2, Grenade x2"
		},
		{
			"39": "Procyote x1, Pudding x2",
			"50": "Slime x1, Tofu x1, Pudding x1",
			"51": "Procyote x1, Juclyote x2",
			"91": "Red Worm x2",
			"102": "Pudding x2, Grenade x2",
			"148": "Pudding x2, Grenade x2",
			"181": "Juclyote x1, Procyote x2",
			"230": "Balloon x2, Grenade x2"
		},
		{
			"39": "Procyote x1, Juclyote x2",
			"50": "Slime x1, Tofu x1, Pudding x1",
			"51": "Procyote x1, Juclyote x2",
			"91": "Red Worm x2",
			"102": "Pudding x2, Grenade x2",
			"148": "Pudding x2, Grenade x2",
			"181": "Red Worm x2",
			"217": "Balloon x2, Grenade x2"
		},
		{
			"39": "Procyote x1, Juclyote x2",
			"51": "Slime x1, Tofu x1, Pudding x1",
			"91": "Red Worm x1, Procyote x1, Juclyote x1",
			"102": "Red Worm x2",
			"115": "MoonCell x2, Pudding x2",
			"148": "Pudding x2, Grenade x2",
			"181": "Red Worm x2",
			"217": "Balloon x2, Grenade x2"
		},
		{
			"39": "Procyote x1, Juclyote x2",
			"51": "Slime x1, Tofu x1, Pudding x1",
			"91": "Red Worm x1, Procyote x1, Juclyote x1",
			"102": "Red Worm x2",
			"115": "MoonCell x2, Pudding x2",
			"147": "Pudding x2, Grenade x2",
			"181": "MoonCell x2, Pudding x2",
			"217": "Procyote x1, Pudding x2"
		},
		{
			"39": "Procyote x1, Juclyote x2",
			"51": "Balloon x2, Grenade x2",
			"91": "Red Worm x1, Procyote x1, Juclyote x1",
			"102": "Red Worm x2",
			"115": "MoonCell x2, Pudding x2",
			"147": "Pudding x2, Grenade x2",
			"217": "Red Worm x1, Procyote x1, Juclyote x1",
			"235": "Procyote x1, Pudding x2"
		},
		{
			"12": "Procyote x1, Juclyote x2",
			"51": "Balloon x2, Grenade x2",
			"91": "Red Worm x1, Procyote x1, Juclyote x1",
			"102": "Red Worm x2",
			"115": "MoonCell x2, Pudding x2",
			"147": "Pudding x2, Grenade x2",
			"217": "Red Worm x1, Procyote x1, Juclyote x1",
			"235": "Procyote x1, Pudding x2"
		},
		{
			"12": "Procyote x1, Juclyote x2",
			"51": "Balloon x2, Grenade x2",
			"62": "Procyote x1, Juclyote x2",
			"91": "Red Worm x2",
			"115": "MoonCell x2, Pudding x2",
			"147": "Pudding x4",
			"217": "Red Worm x1, Procyote x1, Juclyote x1",
			"235": "Procyote x1, Pudding x2"
		},
		{
			"12": "Procyote x1, Juclyote x2",
			"51": "Balloon x2, Grenade x2",
			"62": "Procyote x1, Juclyote x2",
			"115": "Juclyote x1, Procyote x2",
			"136": "MoonCell x2, Pudding x2",
			"147": "Pudding x4",
			"217": "Red Worm x1, Procyote x1, Juclyote x1",
			"235": "Procyote x1, Pudding x2"
		},
		{
			"12": "Procyote x1, Juclyote x2",
			"62": "Balloon x2, Grenade x2",
			"115": "Procyote x1, Juclyote x2",
			"116": "Juclyote x1, Procyote x2",
			"136": "MoonCell x2, Pudding x2",
			"147": "Pudding x4",
			"217": "Red Worm x1, Procyote x1, Juclyote x1",
			"235": "Procyote x1, Pudding x2"
		},
		{
			"12": "Procyote x1, Juclyote x2",
			"62": "Balloon x2, Grenade x2",
			"82": "Red Worm x1, Procyote x1, Juclyote x1",
			"115": "Juclyote x1, Procyote x2",
			"116": "Procyote x1, Pudding x2",
			"136": "Procyote x1, Pudding x2",
			"147": "Pudding x2, Grenade x2",
			"235": "Procyote x1, Pudding x2"
		},
		{
			"12": "Procyote x1, Juclyote x2",
			"62": "Balloon x2, Grenade x2",
			"82": "Red Worm x1, Procyote x1, Juclyote x1",
			"114": "Juclyote x1, Procyote x2",
			"116": "Procyote x1, Pudding x2",
			"136": "Procyote x1, Pudding x2",
			"147": "Pudding x2, Grenade x2",
			"235": "Procyote x1, Pudding x2"
		},
		{
			"12": "Procyote x1, Juclyote x2",
			"33": "Balloon x2, Grenade x2",
			"62": "Procyote x1, Juclyote x2",
			"82": "Red Worm x2",
			"114": "Procyote x1, Pudding x2",
			"116": "Procyote x1, Pudding x2",
			"136": "MoonCell x2, Pudding x2",
			"235": "Procyote x1, Pudding x2"
		},
		{
			"12": "Procyote x1, Juclyote x2",
			"33": "Balloon x2, Grenade x2",
			"62": "Juclyote x2, MoonCell x2, Grenade x1",
			"82": "Red Worm x2",
			"114": "Procyote x1, Pudding x2",
			"116": "Procyote x1, Pudding x2",
			"136": "MoonCell x2, Pudding x2",
			"218": "Procyote x1, Pudding x2"
		},
		{
			"33": "Procyote x1, Juclyote x2",
			"62": "Balloon x2, Grenade x2",
			"82": "Red Worm x2",
			"114": "Red Worm x2",
			"116": "Procyote x1, Pudding x2",
			"136": "Procyote x1, Pudding x2",
			"218": "Red Worm x1, Procyote x1, Juclyote x1",
			"226": "Procyote x1, Pudding x2"
		},
		{
			"33": "Procyote x1, Juclyote x2",
			"82": "Juclyote x1, Procyote x2",
			"114": "Juclyote x2, MoonCell x2, Grenade x1",
			"116": "Red Worm x2",
			"136": "Procyote x1, Pudding x2",
			"166": "Pudding x4",
			"218": "Red Worm x1, Procyote x1, Juclyote x1",
			"226": "Procyote x1, Pudding x2"
		},
		{
			"17": "Procyote x1, Juclyote x2",
			"33": "Balloon x2, Grenade x2",
			"82": "Red Worm x2",
			"114": "MoonCell x2, Pudding x2",
			"116": "Procyote x1, Pudding x2",
			"166": "Pudding x4",
			"218": "Red Worm x1, Procyote x1, Juclyote x1",
			"226": "Procyote x1, Pudding x2"
		},
		{
			"17": "Procyote x1, Juclyote x2",
			"33": "Balloon x2, Grenade x2",
			"49": "Juclyote x2, MoonCell x2, Grenade x1",
			"82": "Pudding x2, Grenade x2",
			"114": "Procyote x1, Pudding x2",
			"166": "Pudding x4",
			"218": "Red Worm x1, Procyote x1, Juclyote x1",
			"226": "Procyote x1, Pudding x2"
		},
		{
			"17": "Red Worm x2",
			"33": "Balloon x2, Grenade x2",
			"49": "Juclyote x2, MoonCell x2, Grenade x1",
			"88": "Pudding x2, Grenade x2",
			"114": "Procyote x1, Pudding x2",
			"166": "Pudding x4",
			"218": "Red Worm x1, Procyote x1, Juclyote x1",
			"226": "Procyote x1, Pudding x2"
		},
		{
			"17": "Red Worm x2",
			"33": "Balloon x2, Grenade x2",
			"49": "Juclyote x2, MoonCell x2, Grenade x1",
			"59": "MoonCell x2, Pudding x2",
			"88": "Pudding x4",
			"166": "Pudding x4",
			"218": "Red Worm x1, Procyote x1, Juclyote x1",
			"226": "Procyote x1, Pudding x2"
		},
		{
			"17": "Red Worm x2",
			"49": "Balloon x2, Grenade x2",
			"59": "Juclyote x2, MoonCell x2, Grenade x1",
			"88": "Pudding x2, Grenade x2",
			"166": "Pudding x4",
			"169": "Pudding x4",
			"218": "Red Worm x1, Procyote x1, Juclyote x1",
			"226": "Procyote x1, Juclyote x2"
		},
		{
			"17": "Red Worm x2",
			"49": "Balloon x2, Grenade x2",
			"59": "Juclyote x2, MoonCell x2, Grenade x1",
			"88": "Pudding x2, Grenade x2",
			"166": "Pudding x4",
			"169": "Pudding x4",
			"177": "MoonCell x2, Pudding x2",
			"226": "Procyote x1, Juclyote x2"
		},
		{
			"17": "Red Worm x2",
			"49": "Balloon x2, Grenade x2",
			"59": "Juclyote x2, MoonCell x2, Grenade x1",
			"88": "Pudding x2, Grenade x2",
			"166": "Pudding x4",
			"169": "Pudding x4",
			"177": "MoonCell x2, Pudding x2",
			"209": "Juclyote x2, MoonCell x2, Grenade x1"
		},
		{
			"17": "Red Worm x2",
			"23": "Balloon x2, Grenade x2",
			"49": "Juclyote x2, MoonCell x2, Grenade x1",
			"59": "MoonCell x2, Pudding x2",
			"88": "Pudding x4",
			"169": "Pudding x4",
			"177": "MoonCell x2, Pudding x2",
			"209": "Juclyote x2, MoonCell x2, Grenade x1"
		},
		{
			"23": "Red Worm x2",
			"49": "Balloon x2, Grenade x2",
			"59": "Juclyote x2, MoonCell x2, Grenade x1",
			"88": "Pudding x2, Grenade x2",
			"155": "Pudding x4",
			"169": "Pudding x4",
			"177": "MoonCell x2, Pudding x2",
			"209": "Juclyote x2, MoonCell x2, Grenade x1"
		},
		{
			"23": "Red Worm x2",
			"59": "Balloon x2, Grenade x2",
			"86": "Red Worm x2",
			"88": "Pudding x2, Grenade x2",
			"155": "Pudding x4",
			"169": "Pudding x4",
			"177": "Procyote x1, Pudding x2",
			"209": "Juclyote x2, MoonCell x2, Grenade x1"
		},
		{
			"23": "Red Worm x2",
			"59": "Procyote x1, Juclyote x2",
			"80": "Red Worm x2",
			"86": "Pudding x2, Grenade x2",
			"155": "Pudding x4",
			"169": "Pudding x4",
			"177": "Procyote x1, Pudding x2",
			"209": "Juclyote x2, MoonCell x2, Grenade x1"
		},
		{
			"23": "Red Worm x2",
			"80": "Red Worm x1, Procyote x1, Juclyote x1",
			"86": "Red Worm x2",
			"112": "MoonCell x2, Pudding x2",
			"155": "Pudding x4",
			"169": "Pudding x4",
			"177": "Procyote x1, Pudding x2",
			"209": "Juclyote x2, MoonCell x2, Grenade x1"
		},
		{
			"23": "Red Worm x1, Procyote x1, Juclyote x1",
			"80": "Red Worm x1, Procyote x1, Juclyote x1",
			"86": "Red Worm x2",
			"112": "MoonCell x2, Pudding x2",
			"155": "Pudding x4",
			"160": "Pudding x4",
			"177": "Procyote x1, Pudding x2",
			"209": "Juclyote x2, MoonCell x2, Grenade x1"
		},
		{
			"23": "Red Worm x1, Procyote x1, Juclyote x1",
			"80": "Red Worm x1, Procyote x1, Juclyote x1",
			"86": "Red Worm x2",
			"112": "MoonCell x2, Pudding x2",
			"155": "Pudding x4",
			"160": "Juclyote x1, Procyote x2",
			"209": "Procyote x1, Pudding x2",
			"215": "Procyote x1, Juclyote x2"
		},
		{
			"23": "Red Worm x1, Procyote x1, Juclyote x1",
			"80": "Red Worm x1, Procyote x1, Juclyote x1",
			"86": "Red Worm x2",
			"112": "MoonCell x2, Pudding x2",
			"155": "Pudding x4",
			"160": "Juclyote x1, Procyote x2",
			"208": "Procyote x1, Pudding x2",
			"215": "Procyote x1, Juclyote x2"
		},
		{
			"46": "MoonCell x2, Pudding x2",
			"80": "Red Worm x1, Procyote x1, Juclyote x1",
			"86": "Red Worm x2",
			"112": "MoonCell x2, Pudding x2",
			"155": "Pudding x4",
			"160": "Juclyote x1, Procyote x2",
			"208": "Procyote x1, Pudding x2",
			"215": "Procyote x1, Juclyote x2"
		},
		{
			"46": "MoonCell x2, Pudding x2",
			"80": "Red Worm x1, Procyote x1, Juclyote x1",
			"86": "Red Worm x2",
			"112": "MoonCell x2, Pudding x2",
			"160": "Juclyote x1, Procyote x2",
			"208": "Slime x1, Tofu x1, Pudding x1",
			"215": "Red Worm x1, Grenade x3",
			"237": "Procyote x1, Juclyote x2"
		},
		{
			"46": "MoonCell x2, Pudding x2",
			"80": "Red Worm x1, Procyote x1, Juclyote x1",
			"90": "Red Worm x2",
			"112": "MoonCell x2, Pudding x2",
			"160": "Juclyote x1, Procyote x2",
			"208": "Slime x1, Tofu x1, Pudding x1",
			"215": "Red Worm x1, Grenade x3",
			"237": "Procyote x1, Juclyote x2"
		},
		{
			"46": "MoonCell x2, Pudding x2",
			"79": "Red Worm x1, Procyote x1, Juclyote x1",
			"90": "Red Worm x2",
			"112": "MoonCell x2, Pudding x2",
			"160": "Juclyote x1, Procyote x2",
			"208": "Slime x1, Tofu x1, Pudding x1",
			"215": "Red Worm x1, Grenade x3",
			"237": "Procyote x1, Juclyote x2"
		},
		{
			"46": "MoonCell x2, Pudding x2",
			"79": "Red Worm x1, Procyote x1, Juclyote x1",
			"90": "Red Worm x2",
			"111": "MoonCell x2, Pudding x2",
			"160": "Juclyote x1, Procyote x2",
			"208": "Slime x1, Tofu x1, Pudding x1",
			"215": "Red Worm x1, Grenade x3",
			"237": "Procyote x1, Juclyote x2"
		},
		{
			"46": "MoonCell x2, Pudding x2",
			"79": "Red Worm x1, Procyote x1, Juclyote x1",
			"90": "Red Worm x2",
			"111": "MoonCell x2, Pudding x2",
			"208": "Slime x1, Tofu x1, Pudding x1",
			"215": "Slime x1, Tofu x1, Pudding x1",
			"237": "Red Worm x1, Grenade x3",
			"238": "Red Worm x2"
		},
		{
			"46": "MoonCell x2, Pudding x2",
			"79": "Red Worm x1, Procyote x1, Juclyote x1",
			"90": "Red Worm x2",
			"111": "Procyote x1, Pudding x2",
			"168": "Juclyote x1, Procyote x2",
			"208": "Slime x1, Tofu x1, Pudding x1",
			"237": "Red Worm x1, Grenade x3",
			"238": "Red Worm x2"
		},
		{
			"46": "MoonCell x2, Pudding x2",
			"79": "Red Worm x1, Procyote x1, Juclyote x1",
			"90": "Red Worm x2",
			"111": "Procyote x1, Pudding x2",
			"168": "Juclyote x1, Procyote x2",
			"198": "Slime x1, Tofu x1, Pudding x1",
			"237": "Red Worm x1, Grenade x3",
			"238": "Red Worm x2"
		},
		{
			"71": "MoonCell x2, Pudding x2",
			"79": "Red Worm x1, Procyote x1, Juclyote x1",
			"90": "Pudding x2, Grenade x2",
			"111": "Procyote x1, Pudding x2",
			"168": "Juclyote x1, Procyote x2",
			"198": "Slime x1, Tofu x1, Pudding x1",
			"237": "Red Worm x1, Grenade x3",
			"238": "Red Worm x2"
		},
		{
			"14": "Red Worm x1, Procyote x1, Juclyote x1",
			"71": "Procyote x1, Juclyote x2",
			"79": "Pudding x2, Grenade x2",
			"90": "Pudding x4",
			"111": "Slime x1, Tofu x1, Pudding x1",
			"168": "Juclyote x1, Procyote x2",
			"198": "Procyote x1, Pudding x2",
			"238": "Red Worm x2"
		},
		{
			"14": "Red Worm x1, Procyote x1, Juclyote x1",
			"71": "Procyote x1, Juclyote x2",
			"79": "Pudding x2, Grenade x2",
			"111": "Procyote x1, Pudding x2",
			"168": "Juclyote x1, Procyote x2",
			"198": "Slime x1, Tofu x1, Pudding x1",
			"238": "Red Worm x1, Grenade x3",
			"240": "Red Worm x2"
		},
		{
			"14": "Red Worm x1, Procyote x1, Juclyote x1",
			"71": "Juclyote x2, MoonCell x2, Grenade x1",
			"111": "MoonCell x2, Pudding x2",
			"152": "Pudding x4",
			"168": "Juclyote x1, Procyote x2",
			"198": "Slime x1, Tofu x1, Pudding x1",
			"238": "Red Worm x1, Grenade x3",
			"240": "Red Worm x2"
		},
		{
			"14": "Red Worm x1, Procyote x1, Juclyote x1",
			"71": "Juclyote x2, MoonCell x2, Grenade x1",
			"110": "MoonCell x2, Pudding x2",
			"152": "Pudding x4",
			"168": "Juclyote x1, Procyote x2",
			"198": "Slime x1, Tofu x1, Pudding x1",
			"238": "Red Worm x1, Grenade x3",
			"240": "Red Worm x2"
		},
		{
			"14": "Red Worm x1, Procyote x1, Juclyote x1",
			"71": "Juclyote x2, MoonCell x2, Grenade x1",
			"110": "MoonCell x2, Pudding x2",
			"142": "Procyote x1, Pudding x2",
			"152": "Juclyote x1, Procyote x2",
			"168": "Juclyote x1, Procyote x2",
			"198": "Procyote x1, Pudding x2",
			"240": "Red Worm x2"
		},
		{
			"14": "Red Worm x1, Procyote x1, Juclyote x1",
			"71": "Juclyote x2, MoonCell x2, Grenade x1",
			"110": "MoonCell x2, Pudding x2",
			"142": "Procyote x1, Pudding x2",
			"152": "Juclyote x1, Procyote x2",
			"174": "Juclyote x1, Procyote x2",
			"198": "Procyote x1, Pudding x2",
			"240": "Red Worm x2"
		},
		{
			"14": "Red Worm x1, Procyote x1, Juclyote x1",
			"71": "Juclyote x2, MoonCell x2, Grenade x1",
			"107": "Pudding x2, Grenade x2",
			"110": "Procyote x1, Pudding x2",
			"142": "Slime x1, Tofu x1, Pudding x1",
			"152": "Juclyote x1, Procyote x2",
			"174": "Pudding x4",
			"240": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"14": "Red Worm x1, Procyote x1, Juclyote x1",
			"107": "Red Worm x2",
			"110": "MoonCell x2, Pudding x2",
			"142": "Procyote x1, Pudding x2",
			"152": "Juclyote x1, Procyote x2",
			"174": "Juclyote x1, Procyote x2",
			"216": "Slime x1, Tofu x1, Pudding x1",
			"240": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"107": "Pudding x2, Grenade x2",
			"110": "Juclyote x2, MoonCell x2, Grenade x1",
			"142": "MoonCell x2, Pudding x2",
			"152": "Pudding x4",
			"174": "Juclyote x1, Procyote x2",
			"216": "Slime x1, Tofu x1, Pudding x1",
			"240": "Slime x1, Tofu x1, Pudding x1",
			"243": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"45": "Procyote x1, Pudding x2",
			"107": "Red Worm x2",
			"110": "MoonCell x2, Pudding x2",
			"142": "Procyote x1, Pudding x2",
			"152": "Juclyote x1, Procyote x2",
			"174": "Juclyote x1, Procyote x2",
			"216": "Slime x1, Tofu x1, Pudding x1",
			"243": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"45": "Procyote x1, Pudding x2",
			"107": "Red Worm x2",
			"110": "MoonCell x2, Pudding x2",
			"142": "Procyote x1, Pudding x2",
			"149": "Juclyote x1, Procyote x2",
			"174": "Juclyote x1, Procyote x2",
			"216": "Slime x1, Tofu x1, Pudding x1",
			"243": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"44": "Procyote x1, Pudding x2",
			"45": "Juclyote x2, MoonCell x2, Grenade x1",
			"107": "Pudding x2, Grenade x2",
			"142": "Procyote x1, Pudding x2",
			"149": "Juclyote x1, Procyote x2",
			"174": "Juclyote x1, Procyote x2",
			"216": "Slime x1, Tofu x1, Pudding x1",
			"243": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"44": "Procyote x1, Pudding x2",
			"45": "Juclyote x2, MoonCell x2, Grenade x1",
			"83": "Pudding x2, Grenade x2",
			"107": "Pudding x4",
			"149": "Juclyote x1, Procyote x2",
			"174": "Juclyote x1, Procyote x2",
			"216": "Slime x1, Tofu x1, Pudding x1",
			"243": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"44": "Procyote x1, Pudding x2",
			"45": "Juclyote x2, MoonCell x2, Grenade x1",
			"83": "Pudding x2, Grenade x2",
			"107": "Pudding x4",
			"149": "Juclyote x1, Procyote x2",
			"173": "Juclyote x1, Procyote x2",
			"216": "Slime x1, Tofu x1, Pudding x1",
			"243": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"44": "Procyote x1, Pudding x2",
			"45": "Juclyote x2, MoonCell x2, Grenade x1",
			"83": "Pudding x2, Grenade x2",
			"105": "Pudding x4",
			"149": "Juclyote x1, Procyote x2",
			"173": "Juclyote x1, Procyote x2",
			"216": "Slime x1, Tofu x1, Pudding x1",
			"243": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"25": "Red Worm x1, Grenade x3",
			"44": "Juclyote x2, MoonCell x2, Grenade x1",
			"45": "MoonCell x2, Pudding x2",
			"83": "Pudding x4",
			"105": "Juclyote x1, Procyote x2",
			"149": "Juclyote x1, Procyote x2",
			"173": "Juclyote x1, Procyote x2",
			"243": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"25": "Red Worm x1, Grenade x3",
			"44": "Juclyote x2, MoonCell x2, Grenade x1",
			"45": "MoonCell x2, Pudding x2",
			"83": "Pudding x4",
			"105": "Juclyote x1, Procyote x2",
			"149": "Juclyote x1, Procyote x2",
			"173": "Juclyote x1, Procyote x2",
			"211": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"25": "Red Worm x1, Grenade x3",
			"44": "Juclyote x2, MoonCell x2, Grenade x1",
			"83": "Pudding x2, Grenade x2",
			"105": "Pudding x4",
			"149": "Juclyote x1, Procyote x2",
			"154": "Juclyote x1, Procyote x2",
			"173": "Juclyote x1, Procyote x2",
			"211": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"25": "Red Worm x1, Grenade x3",
			"44": "Juclyote x1, Procyote x2",
			"83": "Pudding x2, Grenade x2",
			"105": "Pudding x4",
			"154": "Juclyote x1, Procyote x2",
			"173": "Juclyote x1, Procyote x2",
			"185": "Slime x1, Tofu x1, Pudding x1",
			"211": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"25": "Red Worm x1, Grenade x3",
			"83": "Red Worm x2",
			"105": "Pudding x2, Grenade x2",
			"108": "Juclyote x1, Procyote x2",
			"154": "Juclyote x1, Procyote x2",
			"173": "Juclyote x1, Procyote x2",
			"185": "Slime x1, Tofu x1, Pudding x1",
			"211": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"25": "Red Worm x1, Grenade x3",
			"105": "Red Worm x2",
			"108": "Pudding x2, Grenade x2",
			"154": "Juclyote x1, Procyote x2",
			"173": "Juclyote x1, Procyote x2",
			"185": "Balloon x2, Grenade x2",
			"211": "Slime x1, Tofu x1, Pudding x1",
			"248": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"25": "Red Worm x1, Grenade x3",
			"105": "Red Worm x2",
			"108": "Pudding x4",
			"138": "Slime x1, Tofu x1, Pudding x1",
			"154": "Juclyote x1, Procyote x2",
			"185": "Balloon x2, Grenade x2",
			"211": "Slime x1, Tofu x1, Pudding x1",
			"248": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"25": "Red Worm x1, Grenade x3",
			"75": "Juclyote x1, Procyote x2",
			"108": "Pudding x4",
			"138": "Slime x1, Tofu x1, Pudding x1",
			"154": "Juclyote x1, Procyote x2",
			"185": "Balloon x2, Grenade x2",
			"211": "Slime x1, Tofu x1, Pudding x1",
			"248": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"16": "Red Worm x1, Grenade x3",
			"75": "Juclyote x1, Procyote x2",
			"108": "Pudding x4",
			"138": "Slime x1, Tofu x1, Pudding x1",
			"154": "Juclyote x1, Procyote x2",
			"185": "Balloon x2, Grenade x2",
			"211": "Slime x1, Tofu x1, Pudding x1",
			"248": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"16": "Red Worm x1, Grenade x3",
			"75": "Juclyote x1, Procyote x2",
			"108": "Pudding x4",
			"138": "Slime x1, Tofu x1, Pudding x1",
			"154": "Juclyote x1, Procyote x2",
			"185": "Balloon x2, Grenade x2",
			"196": "Slime x1, Tofu x1, Pudding x1",
			"248": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"11": "Red Worm x1, Grenade x3",
			"16": "Red Worm x2",
			"75": "Procyote x1, Pudding x2",
			"108": "Juclyote x1, Procyote x2",
			"138": "Balloon x2, Grenade x2",
			"185": "Balloon x2, Grenade x2",
			"196": "Slime x1, Tofu x1, Pudding x1",
			"248": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"11": "Red Worm x1, Grenade x3",
			"16": "Red Worm x2",
			"75": "Procyote x1, Pudding x2",
			"108": "Juclyote x1, Procyote x2",
			"138": "Balloon x2, Grenade x2",
			"196": "Balloon x2, Grenade x2",
			"204": "Slime x1, Tofu x1, Pudding x1",
			"248": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"11": "Red Worm x1, Grenade x3",
			"16": "Red Worm x2",
			"75": "Procyote x1, Pudding x2",
			"138": "Slime x1, Tofu x1, Pudding x1",
			"189": "Balloon x2, Grenade x2",
			"196": "Balloon x2, Grenade x2",
			"204": "Slime x1, Tofu x1, Pudding x1",
			"248": "Red Worm x1, Grenade x3"
		},
		{
			"5": "Procyote x1, Pudding x2",
			"11": "Red Worm x1, Procyote x1, Juclyote x1",
			"16": "Red Worm x1, Grenade x3",
			"75": "Slime x1, Tofu x1, Pudding x1",
			"138": "Balloon x2, Grenade x2",
			"189": "Balloon x2, Grenade x2",
			"196": "Balloon x2, Grenade x2",
			"204": "Procyote x1, Pudding x2"
		},
		{
			"5": "Procyote x1, Pudding x2",
			"11": "Red Worm x1, Procyote x1, Juclyote x1",
			"16": "Red Worm x1, Grenade x3",
			"75": "Slime x1, Tofu x1, Pudding x1",
			"171": "Juclyote x1, Procyote x2",
			"189": "Balloon x2, Grenade x2",
			"196": "Balloon x2, Grenade x2",
			"204": "Procyote x1, Pudding x2"
		},
		{
			"5": "Procyote x1, Pudding x2",
			"11": "Red Worm x1, Procyote x1, Juclyote x1",
			"16": "Red Worm x1, Grenade x3",
			"95": "Juclyote x1, Procyote x2",
			"171": "Juclyote x1, Procyote x2",
			"189": "Balloon x2, Grenade x2",
			"196": "Balloon x2, Grenade x2",
			"204": "Procyote x1, Pudding x2"
		},
		{
			"5": "Slime x1, Tofu x1, Pudding x1",
			"11": "Red Worm x1, Procyote x1, Juclyote x1",
			"95": "Pudding x4",
			"171": "Juclyote x1, Procyote x2",
			"176": "Balloon x2, Grenade x2",
			"189": "Balloon x2, Grenade x2",
			"196": "Balloon x2, Grenade x2",
			"204": "Procyote x1, Pudding x2"
		},
		{
			"5": "Slime x1, Tofu x1, Pudding x1",
			"11": "Red Worm x1, Procyote x1, Juclyote x1",
			"95": "Pudding x4",
			"171": "Juclyote x1, Procyote x2",
			"176": "Balloon x2, Grenade x2",
			"189": "Procyote x1, Juclyote x2",
			"204": "Balloon x2, Grenade x2",
			"219": "Red Worm x1, Grenade x3"
		},
		{
			"5": "Slime x1, Tofu x1, Pudding x1",
			"42": "Red Worm x1, Procyote x1, Juclyote x1",
			"95": "Pudding x4",
			"171": "Juclyote x1, Procyote x2",
			"176": "Balloon x2, Grenade x2",
			"189": "Procyote x1, Juclyote x2",
			"204": "Balloon x2, Grenade x2",
			"219": "Red Worm x1, Grenade x3"
		},
		{
			"4": "Slime x1, Tofu x1, Pudding x1",
			"5": "MoonCell x2, Pudding x2",
			"42": "Red Worm x1, Grenade x3",
			"95": "Juclyote x1, Procyote x2",
			"171": "Juclyote x1, Procyote x2",
			"176": "Procyote x1, Juclyote x2",
			"189": "Balloon x2, Grenade x2",
			"219": "Red Worm x1, Grenade x3"
		},
		{
			"4": "Slime x1, Tofu x1, Pudding x1",
			"5": "MoonCell x2, Pudding x2",
			"42": "Red Worm x1, Grenade x3",
			"95": "Juclyote x1, Procyote x2",
			"122": "Procyote x1, Juclyote x2",
			"171": "Red Worm x1, Procyote x1, Juclyote x1",
			"176": "Balloon x2, Grenade x2",
			"219": "Red Worm x1, Grenade x3"
		},
		{
			"4": "Slime x1, Tofu x1, Pudding x1",
			"42": "Red Worm x1, Procyote x1, Juclyote x1",
			"95": "Pudding x4",
			"122": "Slime x1, Tofu x1, Pudding x1",
			"165": "Red Worm x1, Procyote x1, Juclyote x1",
			"171": "Red Worm x1, Procyote x1, Juclyote x1",
			"176": "Balloon x2, Grenade x2",
			"219": "Red Worm x1, Grenade x3"
		},
		{
			"4": "Slime x1, Tofu x1, Pudding x1",
			"42": "Red Worm x1, Procyote x1, Juclyote x1",
			"95": "Pudding x4",
			"122": "Slime x1, Tofu x1, Pudding x1",
			"165": "Red Worm x1, Procyote x1, Juclyote x1",
			"170": "Red Worm x1, Procyote x1, Juclyote x1",
			"176": "Balloon x2, Grenade x2",
			"219": "Red Worm x1, Grenade x3"
		},
		{
			"4": "Slime x1, Tofu x1, Pudding x1",
			"42": "Red Worm x1, Procyote x1, Juclyote x1",
			"122": "Procyote x1, Pudding x2",
			"165": "Juclyote x1, Procyote x2",
			"170": "Red Worm x1, Procyote x1, Juclyote x1",
			"176": "Procyote x1, Juclyote x2",
			"202": "Balloon x2, Grenade x2",
			"219": "Red Worm x1, Grenade x3"
		},
		{
			"4": "Slime x1, Tofu x1, Pudding x1",
			"42": "Red Worm x1, Procyote x1, Juclyote x1",
			"122": "Procyote x1, Pudding x2",
			"165": "Juclyote x1, Procyote x2",
			"170": "Red Worm x1, Procyote x1, Juclyote x1",
			"202": "Procyote x1, Juclyote x2",
			"219": "Balloon x2, Grenade x2",
			"234": "Red Worm x1, Grenade x3"
		},
		{
			"4": "Slime x1, Tofu x1, Pudding x1",
			"9": "Red Worm x1, Procyote x1, Juclyote x1",
			"42": "Red Worm x1, Grenade x3",
			"122": "Balloon x2, Grenade x2",
			"165": "Red Worm x1, Procyote x1, Juclyote x1",
			"170": "Red Worm x1, Procyote x1, Juclyote x1",
			"202": "Balloon x2, Grenade x2",
			"234": "Red Worm x1, Grenade x3"
		},
		{
			"4": "Slime x1, Tofu x1, Pudding x1",
			"9": "Red Worm x1, Procyote x1, Juclyote x1",
			"41": "Red Worm x1, Grenade x3",
			"122": "Balloon x2, Grenade x2",
			"165": "Red Worm x1, Procyote x1, Juclyote x1",
			"170": "Red Worm x1, Procyote x1, Juclyote x1",
			"202": "Balloon x2, Grenade x2",
			"234": "Red Worm x1, Grenade x3"
		},
		{
			"9": "Slime x1, Tofu x1, Pudding x1",
			"41": "Red Worm x1, Procyote x1, Juclyote x1",
			"122": "Slime x1, Tofu x1, Pudding x1",
			"165": "Juclyote x1, Procyote x2",
			"170": "Red Worm x1, Procyote x1, Juclyote x1",
			"187": "Procyote x1, Juclyote x2",
			"202": "Balloon x2, Grenade x2",
			"234": "Red Worm x1, Grenade x3"
		},
		{
			"9": "Slime x1, Tofu x1, Pudding x1",
			"21": "Red Worm x1, Procyote x1, Juclyote x1",
			"41": "Slime x1, Tofu x1, Pudding x1",
			"165": "Juclyote x1, Procyote x2",
			"170": "Red Worm x1, Procyote x1, Juclyote x1",
			"187": "Procyote x1, Juclyote x2",
			"202": "Balloon x2, Grenade x2",
			"234": "Red Worm x1, Grenade x3"
		},
		{
			"9": "Slime x1, Tofu x1, Pudding x1",
			"21": "Red Worm x1, Procyote x1, Juclyote x1",
			"41": "Slime x1, Tofu x1, Pudding x1",
			"170": "Juclyote x1, Procyote x2",
			"187": "Procyote x1, Juclyote x2",
			"202": "Procyote x1, Juclyote x2",
			"234": "Balloon x2, Grenade x2",
			"252": "Procyote x1, Pudding x2"
		},
		{
			"9": "Slime x1, Tofu x1, Pudding x1",
			"21": "Red Worm x1, Procyote x1, Juclyote x1",
			"41": "Slime x1, Tofu x1, Pudding x1",
			"145": "Juclyote x1, Procyote x2",
			"187": "Procyote x1, Juclyote x2",
			"202": "Procyote x1, Juclyote x2",
			"234": "Balloon x2, Grenade x2",
			"252": "Procyote x1, Pudding x2"
		},
		{
			"9": "Slime x1, Tofu x1, Pudding x1",
			"21": "Red Worm x1, Procyote x1, Juclyote x1",
			"41": "Slime x1, Tofu x1, Pudding x1",
			"145": "Juclyote x1, Procyote x2",
			"172": "Red Worm x1, Procyote x1, Juclyote x1",
			"187": "Procyote x1, Juclyote x2",
			"234": "Balloon x2, Grenade x2",
			"252": "Procyote x1, Pudding x2"
		},
		{
			"9": "Slime x1, Tofu x1, Pudding x1",
			"21": "Red Worm x1, Procyote x1, Juclyote x1",
			"41": "Slime x1, Tofu x1, Pudding x1",
			"145": "Juclyote x1, Procyote x2",
			"172": "Red Worm x1, Procyote x1, Juclyote x1",
			"187": "Procyote x1, Juclyote x2",
			"233": "Balloon x2, Grenade x2",
			"252": "Procyote x1, Pudding x2"
		},
		{
			"21": "Slime x1, Tofu x1, Pudding x1",
			"41": "Red Worm x1, Procyote x1, Juclyote x1",
			"63": "Slime x1, Tofu x1, Pudding x1",
			"145": "Juclyote x1, Procyote x2",
			"172": "Red Worm x1, Procyote x1, Juclyote x1",
			"187": "Juclyote x2, MoonCell x2, Grenade x1",
			"233": "Balloon x2, Grenade x2",
			"252": "Procyote x1, Pudding x2"
		},
		{
			"21": "Slime x1, Tofu x1, Pudding x1",
			"40": "Red Worm x1, Procyote x1, Juclyote x1",
			"63": "Slime x1, Tofu x1, Pudding x1",
			"145": "Juclyote x1, Procyote x2",
			"172": "Red Worm x1, Procyote x1, Juclyote x1",
			"187": "Juclyote x2, MoonCell x2, Grenade x1",
			"233": "Balloon x2, Grenade x2",
			"252": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"21": "Slime x1, Tofu x1, Pudding x1",
			"40": "Red Worm x1, Grenade x3",
			"63": "Slime x1, Tofu x1, Pudding x1",
			"145": "Juclyote x1, Procyote x2",
			"172": "Red Worm x1, Procyote x1, Juclyote x1",
			"191": "Juclyote x2, MoonCell x2, Grenade x1",
			"233": "Procyote x1, Pudding x2",
			"252": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"40": "Slime x1, Tofu x1, Pudding x1",
			"63": "Procyote x1, Pudding x2",
			"104": "Juclyote x1, Procyote x2",
			"145": "Juclyote x1, Procyote x2",
			"172": "Red Worm x2",
			"191": "Juclyote x2, MoonCell x2, Grenade x1",
			"233": "Procyote x1, Pudding x2",
			"252": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"18": "Balloon x2, Grenade x2",
			"40": "Red Worm x1, Grenade x3",
			"63": "Slime x1, Tofu x1, Pudding x1",
			"104": "Juclyote x1, Procyote x2",
			"145": "Red Worm x2",
			"172": "Red Worm x2",
			"191": "Procyote x1, Juclyote x2",
			"233": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"18": "Balloon x2, Grenade x2",
			"40": "Red Worm x1, Grenade x3",
			"63": "Slime x1, Tofu x1, Pudding x1",
			"104": "Juclyote x1, Procyote x2",
			"172": "Red Worm x2",
			"191": "Juclyote x2, MoonCell x2, Grenade x1",
			"214": "Procyote x1, Pudding x2",
			"233": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"18": "Balloon x2, Grenade x2",
			"40": "Red Worm x1, Grenade x3",
			"63": "Slime x1, Tofu x1, Pudding x1",
			"104": "Juclyote x1, Procyote x2",
			"184": "Juclyote x2, MoonCell x2, Grenade x1",
			"191": "Juclyote x2, MoonCell x2, Grenade x1",
			"214": "Procyote x1, Pudding x2",
			"233": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"18": "Balloon x2, Grenade x2",
			"40": "Red Worm x1, Grenade x3",
			"63": "Slime x1, Tofu x1, Pudding x1",
			"104": "Juclyote x1, Procyote x2",
			"106": "Red Worm x2",
			"184": "Juclyote x2, MoonCell x2, Grenade x1",
			"191": "Procyote x1, Juclyote x2",
			"214": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"18": "Balloon x2, Grenade x2",
			"40": "Red Worm x1, Grenade x3",
			"104": "Juclyote x1, Procyote x2",
			"106": "Juclyote x1, Procyote x2",
			"156": "Red Worm x2",
			"184": "Juclyote x2, MoonCell x2, Grenade x1",
			"191": "Procyote x1, Juclyote x2",
			"214": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"18": "Balloon x2, Grenade x2",
			"19": "Red Worm x1, Grenade x3",
			"104": "Juclyote x1, Procyote x2",
			"106": "Juclyote x1, Procyote x2",
			"156": "Red Worm x2",
			"184": "Juclyote x2, MoonCell x2, Grenade x1",
			"191": "Procyote x1, Juclyote x2",
			"214": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"18": "Balloon x2, Grenade x2",
			"19": "Red Worm x1, Grenade x3",
			"104": "Juclyote x1, Procyote x2",
			"106": "Juclyote x1, Procyote x2",
			"156": "Red Worm x2",
			"184": "Juclyote x2, MoonCell x2, Grenade x1",
			"214": "Procyote x1, Pudding x2",
			"221": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"18": "Balloon x2, Grenade x2",
			"19": "Red Worm x1, Grenade x3",
			"103": "Juclyote x1, Procyote x2",
			"106": "Juclyote x1, Procyote x2",
			"156": "Red Worm x2",
			"184": "Juclyote x2, MoonCell x2, Grenade x1",
			"214": "Procyote x1, Pudding x2",
			"221": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"19": "Balloon x2, Grenade x2",
			"103": "Pudding x4",
			"106": "Juclyote x1, Procyote x2",
			"135": "Balloon x2, Grenade x2",
			"156": "Red Worm x2",
			"184": "Juclyote x2, MoonCell x2, Grenade x1",
			"214": "Procyote x1, Pudding x2",
			"221": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"19": "Balloon x2, Grenade x2",
			"103": "Pudding x4",
			"106": "Juclyote x1, Procyote x2",
			"109": "Juclyote x1, Procyote x2",
			"135": "Juclyote x2, MoonCell x2, Grenade x1",
			"156": "Red Worm x2",
			"184": "Procyote x1, Juclyote x2",
			"221": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"19": "Balloon x2, Grenade x2",
			"103": "Pudding x4",
			"106": "Juclyote x1, Procyote x2",
			"109": "Red Worm x1, Procyote x1, Juclyote x1",
			"135": "Juclyote x2, MoonCell x2, Grenade x1",
			"156": "Red Worm x2",
			"199": "Procyote x1, Juclyote x2",
			"221": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"19": "Balloon x2, Grenade x2",
			"103": "Pudding x4",
			"109": "Juclyote x1, Procyote x2",
			"135": "Procyote x1, Juclyote x2",
			"151": "Red Worm x2",
			"156": "Red Worm x2",
			"199": "Procyote x1, Juclyote x2",
			"221": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"6": "Balloon x2, Grenade x2",
			"19": "Red Worm x1, Grenade x3",
			"103": "Juclyote x1, Procyote x2",
			"109": "Red Worm x1, Procyote x1, Juclyote x1",
			"135": "Juclyote x2, MoonCell x2, Grenade x1",
			"151": "Red Worm x2",
			"199": "Procyote x1, Juclyote x2",
			"221": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"6": "Balloon x2, Grenade x2",
			"38": "Red Worm x1, Grenade x3",
			"103": "Juclyote x1, Procyote x2",
			"109": "Red Worm x1, Procyote x1, Juclyote x1",
			"135": "Juclyote x2, MoonCell x2, Grenade x1",
			"151": "Red Worm x2",
			"199": "Procyote x1, Juclyote x2",
			"221": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"6": "Balloon x2, Grenade x2",
			"38": "Red Worm x1, Grenade x3",
			"70": "Balloon x2, Grenade x2",
			"103": "Red Worm x1, Procyote x1, Juclyote x1",
			"109": "Red Worm x2",
			"135": "Juclyote x1, Procyote x2",
			"151": "Red Worm x2",
			"199": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"6": "Balloon x2, Grenade x2",
			"38": "Red Worm x1, Grenade x3",
			"70": "Balloon x2, Grenade x2",
			"109": "Red Worm x1, Procyote x1, Juclyote x1",
			"135": "Juclyote x1, Procyote x2",
			"151": "Red Worm x2",
			"199": "Juclyote x2, MoonCell x2, Grenade x1",
			"244": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"6": "Balloon x2, Grenade x2",
			"38": "Red Worm x1, Grenade x3",
			"70": "Balloon x2, Grenade x2",
			"109": "Red Worm x1, Procyote x1, Juclyote x1",
			"134": "Juclyote x1, Procyote x2",
			"151": "Red Worm x2",
			"199": "Juclyote x2, MoonCell x2, Grenade x1",
			"244": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"6": "Balloon x2, Grenade x2",
			"38": "Red Worm x1, Grenade x3",
			"70": "Balloon x2, Grenade x2",
			"134": "Procyote x1, Juclyote x2",
			"151": "Red Worm x2",
			"199": "Juclyote x1, Procyote x2",
			"242": "Procyote x1, Juclyote x2",
			"244": "Slime x1, Tofu x1, Pudding x1"
		},
		{
			"6": "Balloon x2, Grenade x2",
			"38": "Red Worm x1, Grenade x3",
			"70": "Balloon x2, Grenade x2",
			"134": "Procyote x1, Juclyote x2",
			"151": "Red Worm x2",
			"207": "Juclyote x1, Procyote x2",
			"242": "Procyote x1, Juclyote x2",
			"244": "Balloon x2, Grenade x2"
		},
		{
			"6": "Balloon x2, Grenade x2",
			"38": "Slime x1, Tofu x1, Pudding x1",
			"70": "Balloon x2, Grenade x2",
			"84": "Red Worm x1, Procyote x1, Juclyote x1",
			"134": "Juclyote x1, Procyote x2",
			"207": "Juclyote x1, Procyote x2",
			"242": "Procyote x1, Juclyote x2",
			"244": "Balloon x2, Grenade x2"
		},
		{
			"38": "Balloon x2, Grenade x2",
			"70": "Slime x1, Tofu x1, Pudding x1",
			"84": "Juclyote x1, Procyote x2",
			"134": "Procyote x1, Juclyote x2",
			"139": "Juclyote x1, Procyote x2",
			"207": "Red Worm x2",
			"242": "Procyote x1, Juclyote x2",
			"244": "Balloon x2, Grenade x2"
		},
		{
			"70": "Balloon x2, Grenade x2",
			"84": "Juclyote x1, Procyote x2",
			"134": "Balloon x2, Grenade x2",
			"139": "Procyote x1, Juclyote x2",
			"200": "Juclyote x1, Procyote x2",
			"207": "Red Worm x2",
			"242": "Procyote x1, Juclyote x2",
			"244": "Balloon x2, Grenade x2"
		},
		{
			"22": "Procyote x1, Pudding x2",
			"84": "Juclyote x1, Procyote x2",
			"134": "Balloon x2, Grenade x2",
			"139": "Procyote x1, Juclyote x2",
			"200": "Juclyote x1, Procyote x2",
			"207": "MoonCell x2, Pudding x2",
			"242": "Procyote x1, Juclyote x2",
			"244": "Balloon x2, Grenade x2"
		},
		{
			"22": "Procyote x1, Pudding x2",
			"84": "Juclyote x1, Procyote x2",
			"101": "Juclyote x1, Procyote x2",
			"134": "Procyote x1, Juclyote x2",
			"139": "Red Worm x2",
			"200": "MoonCell x2, Pudding x2",
			"207": "Juclyote x2, MoonCell x2, Grenade x1",
			"242": "Balloon x2, Grenade x2"
		},
		{
			"22": "Procyote x1, Pudding x2",
			"84": "Juclyote x1, Procyote x2",
			"101": "Juclyote x1, Procyote x2",
			"133": "Procyote x1, Juclyote x2",
			"139": "Red Worm x2",
			"200": "MoonCell x2, Pudding x2",
			"207": "Juclyote x2, MoonCell x2, Grenade x1",
			"242": "Balloon x2, Grenade x2"
		},
		{
			"22": "Procyote x1, Pudding x2",
			"84": "Juclyote x1, Procyote x2",
			"101": "Juclyote x1, Procyote x2",
			"133": "Procyote x1, Juclyote x2",
			"139": "MoonCell x2, Pudding x2",
			"200": "MoonCell x2, Pudding x2",
			"201": "Juclyote x2, MoonCell x2, Grenade x1",
			"207": "Balloon x2, Grenade x2"
		},
		{
			"22": "Procyote x1, Pudding x2",
			"84": "Juclyote x1, Procyote x2",
			"101": "Juclyote x1, Procyote x2",
			"133": "Juclyote x2, MoonCell x2, Grenade x1",
			"139": "MoonCell x2, Pudding x2",
			"197": "MoonCell x2, Pudding x2",
			"200": "Juclyote x2, MoonCell x2, Grenade x1",
			"201": "Balloon x2, Grenade x2"
		},
		{
			"22": "Procyote x1, Pudding x2",
			"101": "Juclyote x1, Procyote x2",
			"133": "Balloon x2, Grenade x2",
			"139": "Juclyote x2, MoonCell x2, Grenade x1",
			"175": "Pudding x2, Grenade x2",
			"197": "MoonCell x2, Pudding x2",
			"200": "Juclyote x2, MoonCell x2, Grenade x1",
			"201": "Balloon x2, Grenade x2"
		},
		{
			"22": "Procyote x1, Pudding x2",
			"74": "Slime x1, Tofu x1, Pudding x1",
			"101": "Juclyote x1, Procyote x2",
			"133": "Juclyote x2, MoonCell x2, Grenade x1",
			"175": "Pudding x2, Grenade x2",
			"197": "MoonCell x2, Pudding x2",
			"200": "Juclyote x2, MoonCell x2, Grenade x1",
			"201": "Balloon x2, Grenade x2"
		},
		{
			"22": "Procyote x1, Pudding x2",
			"36": "Slime x1, Tofu x1, Pudding x1",
			"74": "Balloon x2, Grenade x2",
			"101": "Red Worm x2",
			"133": "MoonCell x2, Pudding x2",
			"175": "Pudding x2, Grenade x2",
			"197": "Juclyote x2, MoonCell x2, Grenade x1",
			"201": "Balloon x2, Grenade x2"
		},
		{
			"36": "Procyote x1, Pudding x2",
			"74": "Slime x1, Tofu x1, Pudding x1",
			"101": "Juclyote x1, Procyote x2",
			"128": "Juclyote x2, MoonCell x2, Grenade x1",
			"133": "MoonCell x2, Pudding x2",
			"175": "Pudding x2, Grenade x2",
			"197": "Juclyote x1, Procyote x2",
			"201": "Balloon x2, Grenade x2"
		},
		{
			"36": "Procyote x1, Pudding x2",
			"74": "Slime x1, Tofu x1, Pudding x1",
			"100": "Juclyote x1, Procyote x2",
			"128": "Juclyote x2, MoonCell x2, Grenade x1",
			"133": "MoonCell x2, Pudding x2",
			"175": "Pudding x2, Grenade x2",
			"197": "Juclyote x1, Procyote x2",
			"201": "Balloon x2, Grenade x2"
		},
		{
			"36": "Procyote x1, Pudding x2",
			"74": "Slime x1, Tofu x1, Pudding x1",
			"100": "Juclyote x1, Procyote x2",
			"128": "Juclyote x2, MoonCell x2, Grenade x1",
			"132": "MoonCell x2, Pudding x2",
			"175": "Pudding x2, Grenade x2",
			"197": "Juclyote x1, Procyote x2",
			"201": "Balloon x2, Grenade x2"
		},
		{
			"36": "Procyote x1, Pudding x2",
			"74": "Slime x1, Tofu x1, Pudding x1",
			"100": "Red Worm x1, Procyote x1, Juclyote x1",
			"128": "Juclyote x2, MoonCell x2, Grenade x1",
			"132": "MoonCell x2, Pudding x2",
			"164": "Pudding x2, Grenade x2",
			"175": "Red Worm x2",
			"197": "Balloon x2, Grenade x2"
		},
		{
			"36": "Procyote x1, Pudding x2",
			"55": "Slime x1, Tofu x1, Pudding x1",
			"74": "Procyote x1, Juclyote x2",
			"100": "Red Worm x2",
			"128": "MoonCell x2, Pudding x2",
			"132": "MoonCell x2, Pudding x2",
			"164": "Red Worm x2",
			"175": "Juclyote x1, Procyote x2"
		},
		{
			"36": "Procyote x1, Pudding x2",
			"55": "Slime x1, Tofu x1, Pudding x1",
			"74": "Procyote x1, Juclyote x2",
			"100": "Red Worm x2",
			"128": "MoonCell x2, Pudding x2",
			"132": "MoonCell x2, Pudding x2",
			"164": "Red Worm x2",
			"228": "Balloon x2, Grenade x2"
		},
		{
			"3": "Procyote x1, Juclyote x2",
			"36": "Slime x1, Tofu x1, Pudding x1",
			"55": "Procyote x1, Juclyote x2",
			"100": "Red Worm x2",
			"128": "MoonCell x2, Pudding x2",
			"132": "MoonCell x2, Pudding x2",
			"164": "Red Worm x2",
			"228": "Balloon x2, Grenade x2"
		},
		{
			"3": "Procyote x1, Juclyote x2",
			"55": "Slime x1, Tofu x1, Pudding x1",
			"100": "Red Worm x1, Procyote x1, Juclyote x1",
			"128": "Juclyote x2, MoonCell x2, Grenade x1",
			"132": "MoonCell x2, Pudding x2",
			"164": "Pudding x2, Grenade x2",
			"192": "Juclyote x1, Procyote x2",
			"228": "Balloon x2, Grenade x2"
		},
		{
			"3": "Juclyote x2, MoonCell x2, Grenade x1",
			"55": "Slime x1, Tofu x1, Pudding x1",
			"100": "Red Worm x1, Procyote x1, Juclyote x1",
			"132": "Juclyote x2, MoonCell x2, Grenade x1",
			"164": "Pudding x2, Grenade x2",
			"190": "MoonCell x2, Pudding x2",
			"192": "Red Worm x2",
			"228": "Balloon x2, Grenade x2"
		},
		{
			"3": "Juclyote x2, MoonCell x2, Grenade x1",
			"55": "Slime x1, Tofu x1, Pudding x1",
			"131": "Procyote x1, Juclyote x2",
			"132": "Juclyote x2, MoonCell x2, Grenade x1",
			"164": "Pudding x2, Grenade x2",
			"190": "MoonCell x2, Pudding x2",
			"192": "Red Worm x2",
			"228": "Balloon x2, Grenade x2"
		},
		{
			"3": "Juclyote x2, MoonCell x2, Grenade x1",
			"55": "Slime x1, Tofu x1, Pudding x1",
			"131": "Procyote x1, Juclyote x2",
			"137": "Juclyote x2, MoonCell x2, Grenade x1",
			"164": "Pudding x2, Grenade x2",
			"190": "MoonCell x2, Pudding x2",
			"192": "MoonCell x2, Pudding x2",
			"228": "Procyote x1, Pudding x2"
		},
		{
			"3": "Juclyote x2, MoonCell x2, Grenade x1",
			"55": "Balloon x2, Grenade x2",
			"131": "Procyote x1, Juclyote x2",
			"137": "Juclyote x2, MoonCell x2, Grenade x1",
			"163": "Pudding x2, Grenade x2",
			"190": "MoonCell x2, Pudding x2",
			"192": "MoonCell x2, Pudding x2",
			"228": "Procyote x1, Pudding x2"
		},
		{
			"3": "Juclyote x2, MoonCell x2, Grenade x1",
			"131": "Balloon x2, Grenade x2",
			"137": "Procyote x1, Juclyote x2",
			"150": "Red Worm x2",
			"163": "Pudding x2, Grenade x2",
			"190": "MoonCell x2, Pudding x2",
			"192": "MoonCell x2, Pudding x2",
			"228": "Procyote x1, Pudding x2"
		},
		{
			"3": "Juclyote x2, MoonCell x2, Grenade x1",
			"131": "Balloon x2, Grenade x2",
			"137": "Procyote x1, Juclyote x2",
			"150": "Red Worm x2",
			"163": "Pudding x2, Grenade x2",
			"190": "Procyote x1, Pudding x2",
			"192": "MoonCell x2, Pudding x2",
			"227": "Procyote x1, Pudding x2"
		},
		{
			"131": "Juclyote x2, MoonCell x2, Grenade x1",
			"137": "Balloon x2, Grenade x2",
			"150": "Red Worm x1, Procyote x1, Juclyote x1",
			"163": "Red Worm x2",
			"190": "MoonCell x2, Pudding x2",
			"192": "Procyote x1, Pudding x2",
			"227": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"34": "Procyote x1, Juclyote x2",
			"131": "Balloon x2, Grenade x2",
			"137": "Procyote x1, Juclyote x2",
			"150": "Red Worm x2",
			"163": "Pudding x2, Grenade x2",
			"190": "Procyote x1, Pudding x2",
			"227": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"34": "Procyote x1, Juclyote x2",
			"66": "Balloon x2, Grenade x2",
			"131": "Procyote x1, Juclyote x2",
			"137": "Juclyote x1, Procyote x2",
			"150": "Pudding x4",
			"163": "Pudding x4",
			"227": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"34": "Procyote x1, Juclyote x2",
			"66": "Balloon x2, Grenade x2",
			"98": "Red Worm x1, Procyote x1, Juclyote x1",
			"137": "Juclyote x1, Procyote x2",
			"150": "Pudding x4",
			"163": "Pudding x4",
			"227": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"34": "Procyote x1, Juclyote x2",
			"66": "Balloon x2, Grenade x2",
			"98": "Red Worm x1, Procyote x1, Juclyote x1",
			"113": "Juclyote x1, Procyote x2",
			"150": "Pudding x4",
			"163": "Pudding x4",
			"227": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"34": "Procyote x1, Juclyote x2",
			"66": "Balloon x2, Grenade x2",
			"98": "Red Worm x2",
			"113": "Juclyote x1, Procyote x2",
			"150": "Pudding x4",
			"162": "Pudding x4",
			"227": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"34": "Procyote x1, Juclyote x2",
			"66": "Balloon x2, Grenade x2",
			"98": "Red Worm x2",
			"113": "Red Worm x2",
			"162": "Pudding x4",
			"194": "Procyote x1, Pudding x2",
			"227": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"34": "Procyote x1, Juclyote x2",
			"66": "Balloon x2, Grenade x2",
			"98": "Red Worm x2",
			"113": "Red Worm x2",
			"162": "Pudding x4",
			"194": "Procyote x1, Pudding x2",
			"210": "MoonCell x2, Pudding x2"
		},
		{
			"34": "Procyote x1, Juclyote x2",
			"57": "Balloon x2, Grenade x2",
			"66": "Juclyote x2, MoonCell x2, Grenade x1",
			"98": "Pudding x2, Grenade x2",
			"113": "Procyote x1, Pudding x2",
			"162": "Pudding x4",
			"194": "MoonCell x2, Pudding x2",
			"210": "Procyote x1, Juclyote x2"
		},
		{
			"57": "Juclyote x2, MoonCell x2, Grenade x1",
			"66": "Balloon x2, Grenade x2",
			"98": "Red Worm x2",
			"113": "MoonCell x2, Pudding x2",
			"162": "Pudding x4",
			"179": "Procyote x1, Pudding x2",
			"194": "MoonCell x2, Pudding x2",
			"210": "Procyote x1, Juclyote x2"
		},
		{
			"57": "Juclyote x1, Procyote x2",
			"65": "Balloon x2, Grenade x2",
			"98": "Red Worm x2",
			"113": "MoonCell x2, Pudding x2",
			"162": "Pudding x4",
			"179": "Procyote x1, Pudding x2",
			"194": "MoonCell x2, Pudding x2",
			"210": "Procyote x1, Juclyote x2"
		},
		{
			"57": "Juclyote x1, Procyote x2",
			"65": "Balloon x2, Grenade x2",
			"113": "Juclyote x2, MoonCell x2, Grenade x1",
			"126": "MoonCell x2, Pudding x2",
			"162": "Pudding x4",
			"179": "Procyote x1, Pudding x2",
			"194": "MoonCell x2, Pudding x2",
			"210": "Procyote x1, Juclyote x2"
		},
		{
			"57": "Juclyote x1, Procyote x2",
			"65": "Balloon x2, Grenade x2",
			"126": "Juclyote x2, MoonCell x2, Grenade x1",
			"129": "MoonCell x2, Pudding x2",
			"162": "Pudding x4",
			"179": "Procyote x1, Pudding x2",
			"194": "MoonCell x2, Pudding x2",
			"210": "Juclyote x2, MoonCell x2, Grenade x1"
		},
		{
			"57": "Juclyote x1, Procyote x2",
			"65": "Balloon x2, Grenade x2",
			"126": "Juclyote x2, MoonCell x2, Grenade x1",
			"129": "MoonCell x2, Pudding x2",
			"161": "Pudding x4",
			"179": "Procyote x1, Pudding x2",
			"194": "MoonCell x2, Pudding x2",
			"210": "Juclyote x2, MoonCell x2, Grenade x1"
		},
		{
			"57": "Juclyote x1, Procyote x2",
			"65": "Balloon x2, Grenade x2",
			"126": "Juclyote x2, MoonCell x2, Grenade x1",
			"129": "MoonCell x2, Pudding x2",
			"161": "Pudding x4",
			"179": "Procyote x1, Pudding x2",
			"193": "MoonCell x2, Pudding x2",
			"210": "Juclyote x2, MoonCell x2, Grenade x1"
		},
		{
			"57": "Juclyote x1, Procyote x2",
			"65": "Balloon x2, Grenade x2",
			"126": "Juclyote x2, MoonCell x2, Grenade x1",
			"129": "MoonCell x2, Pudding x2",
			"161": "Pudding x4",
			"179": "Procyote x1, Pudding x2",
			"193": "MoonCell x2, Pudding x2",
			"225": "Procyote x1, Juclyote x2"
		},
		{
			"65": "Juclyote x1, Procyote x2",
			"126": "Balloon x2, Grenade x2",
			"129": "Juclyote x2, MoonCell x2, Grenade x1",
			"161": "Pudding x2, Grenade x2",
			"179": "Procyote x1, Pudding x2",
			"193": "Procyote x1, Pudding x2",
			"225": "Red Worm x1, Procyote x1, Juclyote x1"
		},
		{
			"65": "Juclyote x1, Procyote x2",
			"126": "Balloon x2, Grenade x2",
			"129": "Juclyote x2, MoonCell x2, Grenade x1",
			"161": "Pudding x2, Grenade x2",
			"180": "Procyote x1, Pudding x2",
			"193": "Procyote x1, Pudding x2",
			"225": "Red Worm x1, Grenade x3"
		},
		{
			"97": "Red Worm x2",
			"126": "Procyote x1, Juclyote x2",
			"129": "Juclyote x2, MoonCell x2, Grenade x1",
			"161": "Pudding x2, Grenade x2",
			"180": "Procyote x1, Pudding x2",
			"193": "Procyote x1, Pudding x2",
			"225": "Red Worm x1, Grenade x3"
		},
		{
			"37": "Red Worm x2",
			"97": "Red Worm x1, Procyote x1, Juclyote x1",
			"129": "Juclyote x2, MoonCell x2, Grenade x1",
			"161": "Pudding x2, Grenade x2",
			"180": "Procyote x1, Pudding x2",
			"193": "Procyote x1, Pudding x2",
			"225": "Red Worm x1, Grenade x3"
		},
		{
			"37": "Red Worm x1, Procyote x1, Juclyote x1",
			"97": "Red Worm x1, Procyote x1, Juclyote x1",
			"120": "Juclyote x2, MoonCell x2, Grenade x1",
			"161": "Pudding x2, Grenade x2",
			"180": "Procyote x1, Pudding x2",
			"193": "Procyote x1, Pudding x2",
			"225": "Red Worm x1, Grenade x3"
		},
		{
			"37": "Red Worm x1, Procyote x1, Juclyote x1",
			"97": "Red Worm x1, Procyote x1, Juclyote x1",
			"120": "Juclyote x1, Procyote x2",
			"144": "MoonCell x2, Pudding x2",
			"180": "Procyote x1, Pudding x2",
			"193": "Slime x1, Tofu x1, Pudding x1",
			"225": "Red Worm x1, Grenade x3"
		},
		{
			"37": "Red Worm x1, Procyote x1, Juclyote x1",
			"97": "Red Worm x1, Procyote x1, Juclyote x1",
			"120": "Juclyote x1, Procyote x2",
			"130": "MoonCell x2, Pudding x2",
			"144": "Procyote x1, Pudding x2",
			"180": "Slime x1, Tofu x1, Pudding x1",
			"225": "Red Worm x1, Grenade x3"
		}
	]

    _encounterData.mist = [
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

	var _mapData = {};

	_mapData.fusoya = [
		{
			'map': '2000-0',
			'maxStep': 5,
			'origin': [3, 4],
			'stepRange': [1, 5]
		},
		{
			'map': '3163-0',
			'maxStep': 43,
			'origin': [0, 0],
			'stepRange': [6, 43]
		},
		{
			'map': '2000-0',
			'maxStep': 78,
			'origin': [14, 4],
			'stepRange': [44, 78]
		},
		{
			'map': '3164-0',
			'maxStep': 109,
			'origin': [0, 0],
			'stepRange': [79, 109]
		},
		{
			'map': '2000-0',
			'maxStep': 126,
			'origin': [17, 11],
			'stepRange': [110, 126]
		},
		{
			'map': '2000-0',
			'maxStep': 144,
			'origin': [17, 11],
			'stepRange': [127, 144]
		},
		{
			'map': '3164-0',
			'maxStep': 175,
			'origin': [0, 0],
			'stepRange': [145, 175]
		},
		{
			'map': '2000-0',
			'maxStep': 210,
			'origin': [14, 4],
			'stepRange': [176, 210]
		},
		{
			'map': '3163-0',
			'maxStep': 248,
			'origin': [0, 0],
			'stepRange': [211, 248]
		},
		{
			'map': '2000-0',
			'maxStep': 253,
			'origin': [3, 4],
			'stepRange': [249, 253]
		}
	];

    _mapData.mist = [
        {
            'map': '0000-0',
			'maxStep': 37,
			'origin': [98, 95],
            'stepRange': [2, 48]
        },
        {
			'map': '0000-0',
			'maxStep': 69,
			'origin': [120, 80],
            'stepRange': [28, 69]
        },
        {
			'map': '306F-0',
			'maxStep': 121,
			'origin': [0, 0],
            'stepRange': [70, 121]
        },
        {
            'map': '3070-0',
			'maxStep': 211,
			'origin': [0, 0],
            'stepRange': [122, 211]
        }
	];

	var _stepData = {};

	_stepData.fusoya = {
		1: [21, 20],
		2: [21, 21],
		3: [20, 21],
		4: [19, 21],
		5: [18, 21],
		6: [12, 29],
		7: [13, 29],
		8: [14, 29],
		9: [14, 28],
		10: [14, 27],
		11: [14, 26],
		12: [14, 25],
		13: [14, 24],
		14: [14, 23],
		15: [13, 23],
		16: [12, 23],
		17: [11, 23],
		18: [11, 22],
		19: [11, 21],
		20: [11, 20],
		21: [11, 19],
		22: [11, 18],
		23: [11, 17],
		24: [11, 16],
		25: [11, 15],
		26: [12, 15],
		27: [13, 15],
		28: [14, 15],
		29: [14, 14],
		30: [14, 13],
		31: [14, 12],
		32: [14, 11],
		33: [14, 10],
		34: [15, 10],
		35: [16, 10],
		36: [17, 10],
		37: [18, 10],
		38: [19, 10],
		39: [19, 9],
		40: [19, 8],
		41: [19, 7],
		42: [19, 6],
		43: [19, 5],
		44: [19, 15],
		45: [20, 15],
		46: [21, 15],
		47: [22, 15],
		48: [23, 15],
		49: [23, 14],
		50: [24, 14],
		51: [25, 14],
		52: [26, 14],
		53: [27, 14],
		54: [28, 14],
		55: [29, 14],
		56: [30, 14],
		57: [31, 14],
		58: [32, 14],
		59: [33, 14],
		60: [33, 15],
		61: [33, 16],
		62: [34, 16],
		63: [35, 16],
		64: [36, 16],
		65: [37, 16],
		66: [37, 17],
		67: [37, 18],
		68: [37, 19],
		69: [37, 20],
		70: [37, 21],
		71: [37, 22],
		72: [37, 23],
		73: [37, 24],
		74: [37, 25],
		75: [38, 25],
		76: [39, 25],
		77: [40, 25],
		78: [41, 25],
		79: [20, 6],
		80: [19, 6],
		81: [18, 6],
		82: [17, 6],
		83: [16, 6],
		84: [15, 6],
		85: [14, 6],
		86: [14, 7],
		87: [14, 8],
		88: [14, 9],
		89: [14, 10],
		90: [14, 11],
		91: [14, 12],
		92: [14, 13],
		93: [14, 14],
		94: [14, 15],
		95: [14, 16],
		96: [14, 17],
		97: [14, 18],
		98: [14, 19],
		99: [13, 19],
		100: [12, 19],
		101: [11, 19],
		102: [10, 19],
		103: [9, 19],
		104: [9, 20],
		105: [9, 21],
		106: [9, 22],
		107: [9, 23],
		108: [9, 24],
		109: [9, 25],
		110: [39, 29],
		111: [38, 29],
		112: [37, 29],
		113: [37, 30],
		114: [36, 30],
		115: [35, 30],
		116: [34, 30],
		117: [33, 30],
		118: [33, 29],
		119: [32, 29],
		120: [31, 29],
		121: [30, 29],
		122: [29, 29],
		123: [28, 29],
		124: [28, 28],
		125: [28, 27],
		126: [28, 26],
		127: [28, 26],
		128: [28, 27],
		129: [28, 28],
		130: [28, 29],
		131: [29, 29],
		132: [30, 29],
		133: [31, 29],
		134: [32, 29],
		135: [33, 29],
		136: [34, 29],
		137: [34, 30],
		138: [35, 30],
		139: [36, 30],
		140: [37, 30],
		141: [37, 29],
		142: [38, 29],
		143: [39, 29],
		144: [40, 29],
		145: [9, 24],
		146: [9, 23],
		147: [9, 22],
		148: [9, 21],
		149: [9, 20],
		150: [9, 19],
		151: [9, 18],
		152: [10, 18],
		153: [11, 18],
		154: [12, 18],
		155: [13, 18],
		156: [14, 18],
		157: [14, 17],
		158: [14, 16],
		159: [14, 15],
		160: [14, 14],
		161: [14, 13],
		162: [14, 12],
		163: [14, 11],
		164: [14, 10],
		165: [14, 9],
		166: [14, 8],
		167: [14, 7],
		168: [14, 6],
		169: [15, 6],
		170: [16, 6],
		171: [17, 6],
		172: [18, 6],
		173: [19, 6],
		174: [20, 6],
		175: [21, 6],
		176: [40, 25],
		177: [39, 25],
		178: [38, 25],
		179: [37, 25],
		180: [37, 24],
		181: [37, 23],
		182: [37, 22],
		183: [37, 21],
		184: [37, 20],
		185: [37, 19],
		186: [37, 18],
		187: [37, 17],
		188: [37, 16],
		189: [36, 16],
		190: [35, 16],
		191: [34, 16],
		192: [33, 16],
		193: [33, 15],
		194: [33, 14],
		195: [32, 14],
		196: [31, 14],
		197: [30, 14],
		198: [29, 14],
		199: [28, 14],
		200: [27, 14],
		201: [26, 14],
		202: [25, 14],
		203: [24, 14],
		204: [23, 14],
		205: [22, 14],
		206: [22, 15],
		207: [21, 15],
		208: [20, 15],
		209: [19, 15],
		210: [18, 15],
		211: [19, 6],
		212: [19, 7],
		213: [19, 8],
		214: [19, 9],
		215: [19, 10],
		216: [18, 10],
		217: [17, 10],
		218: [16, 10],
		219: [15, 10],
		220: [14, 10],
		221: [13, 10],
		222: [12, 10],
		223: [12, 11],
		224: [12, 12],
		225: [12, 13],
		226: [12, 14],
		227: [12, 15],
		228: [11, 15],
		229: [11, 16],
		230: [11, 17],
		231: [11, 18],
		232: [11, 19],
		233: [11, 20],
		234: [11, 21],
		235: [11, 22],
		236: [11, 23],
		237: [12, 23],
		238: [13, 23],
		239: [14, 23],
		240: [14, 24],
		241: [14, 25],
		242: [14, 26],
		243: [14, 27],
		244: [14, 28],
		245: [14, 29],
		246: [13, 29],
		247: [12, 29],
		248: [12, 30],
		249: [19, 21],
		250: [20, 21],
		251: [21, 21],
		252: [21, 20],
		253: [21, 19]
	}

	_stepData.mist = {
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

	var _twinSeedData = {}

	_twinSeedData.fusoya = {
		"no64-rosa-marathon-recovery-fusoya": {},
	}

	_twinSeedData.mist = {
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
		},
		"no64-rosa-marathon": {
			14: {
				"instruction": "Take <strong>58</strong> extra steps in the save room. Determine your seed based on the next room:",
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
				"instruction": "Take <strong>16</strong> extra steps in the save room. Determine your seed based on the next room:",
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
				183: "One encounter.",
				184: "Two encounters."
			},
			247: {
				"instruction": "Don't take any extra steps in the save room. Determine your seed based on the next room:",
				247: "No encounters.",
				248: "One encounter with Pike x3."
			}
		}
	};

	var twinSeedMapSets = {
		"fusoya": new Set([]),
		"mist": new Set([7, 14, 22, 30, 41, 47, 63, 68, 78, 98, 101, 109, 132, 143, 168, 175, 183, 231, 247])
	}

	var routeNames = {
		"paladin": "Paladin%",
		"nocw": "Any% NoCW",
		"no64-rosa": "Any% No64 (Rosa)",
		"no64-excalbur": "Any% No64 (Edge+Excalbur)",
		"no64-rosa-marathon": "Any% No64 (Rosa) (Marathon)",
		"no64-rosa-marathon-recovery-fusoya": "Any% No64 (Rosa) (Marathon) (Recovery: FuSoYa)"
	}

	var routeMapSets = {
		"paladin": "mist",
		"nocw": "mist",
		"no64-rosa": "mist",
		"no64-excalbur": "mist",
		"no64-rosa-marathon": "mist",
		"no64-rosa-marathon-recovery-fusoya": "fusoya"
	}

    /*
     * Global Variables
     */

	var currentMapSet = "mist";
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
		var mapData = getData(_mapData);
		var x = Math.floor(e.offsetX / 16) + mapData[currentMapIndex].origin[0];
		var y = Math.floor(e.offsetY / 16) + mapData[currentMapIndex].origin[1];
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
		finished = false;

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

		var route = document.getElementById('route-select').value;
		currentMapSet = routeMapSets[route];

		updateDisplay();
	};

	var drawStep = function(step, ctx, boxStyle, textStyle) {
		var mapData = getData(_mapData);
		var stepData = getData(_stepData);
		var x = stepData[step][0] - mapData[currentMapIndex].origin[0];
		var y = stepData[step][1] - mapData[currentMapIndex].origin[1];

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
		var mapData = getData(_mapData)[currentMapIndex];
		var stepData = getData(_stepData);
		var canvas = document.getElementById('map');
		var ctx = canvas.getContext('2d');

		var img = new Image();

		img.onload = function() {
			ctx.drawImage(img, mapData.origin[0] * 16, mapData.origin[1] * 16, 32 * 16, 32 * 16, 0, 0, 32 * 16, 32 * 16);

			var offScreenCanvas = document.createElement('canvas');
			offScreenCanvas.width = canvas.width;
			offScreenCanvas.height = canvas.height;
			var offScreenCtx = offScreenCanvas.getContext('2d');

			Object.entries(stepData).forEach(
				([step, [stepX, stepY]]) => {
					if (parseInt(step) >= mapData.stepRange[0] && parseInt(step) <= mapData.stepRange[1]) {
						if (possibleSteps.has(parseInt(step))) {
							drawStep(step, offScreenCtx, "#FFFFFF", "#FFFFFF");
						} else {
							drawStep(step, offScreenCtx, "#A0A0A0", "#DDDDDD");
						}
					}
				}
			);

			for (var step of selectedSteps) {
				if (step >= mapData.stepRange[0] && step <= mapData.stepRange[1]) {
					drawStep(step, offScreenCtx, "#FF0000", null);
				}
			}

			ctx.drawImage(offScreenCanvas, 0, 0);
		};

		img.src = '/static/img/maps/composite/' + mapData.map + '.png';
	};

	var getData = function(x) {
		var route = document.getElementById('route-select').value;
		return x[routeMapSets[route]];
	}

	var getStep = function(x, y) {
		var mapData = getData(_mapData)[currentMapIndex];
		var stepData = getData(_stepData);
		var result;

		Object.entries(stepData).forEach(
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
		var mapData = getData(_mapData);
		if (currentMapIndex < mapData.length - 1) {
			currentMapIndex += 1;
		} else if (currentMapIndex == mapData.length - 1) {
			finished = !finished;
		}

		updateDisplay();
	}

	var onResetClick = function(e) {
		reset();
	}

	var onRouteChange = function(e) {
		var route = document.getElementById('route-select').value;

		if (routeMapSets[route] != currentMapSet) {
			currentMapSet = routeMapSets[route];
			reset();
		} else {
			updateDisplay();
		}
	}

	var updateEncounters = function() {
		var encounterData = getData(_encounterData);
		var mapData = getData(_mapData);
		var e = document.getElementById('encounters');
		e.innerHTML = '<h3>Encounters</h3>';

		for (var step of selectedSteps) {
			if (step < mapData[currentMapIndex].stepRange[0] || step > mapData[currentMapIndex].stepRange[1]) {
				continue;
			}

			var header = document.createElement('h4')
			header.innerHTML = 'Step ' + step;
			e.appendChild(header);

			var formations = new Set([]);

			for (var seed of possibleSeeds) {
				var formation = encounterData[seed][step];

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
		var encounterData = getData(_encounterData);
		var mapData = getData(_mapData);
		var twinSeeds = twinSeedMapSets[currentMapSet];

		possibleSeeds = new Set([]);

		var maxStep = Math.max(...selectedSteps);

		if (finished) {
			maxStep = mapData[currentMapIndex].maxStep;
		} else if (currentMapIndex > 0) {
			maxStep = Math.max(mapData[currentMapIndex - 1].maxStep, maxStep);
		}

		Object.entries(encounterData).forEach(
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

		var twinSeedData = getData(_twinSeedData);

		if (possibleSeeds.size == 2) {
			for (seed of twinSeeds) {
				if (possibleSeeds.has(seed.toString()) && possibleSeeds.has((seed + 1).toString())) {
					if (route in twinSeedData) {
						if (seed in twinSeedData[route]) {
							let txt = '<div class="bs-callout bs-callout-info"><span class="fas fa-exclamation-triangle"></span><h4>Twin Seed Alert</h4><p>These instructions are for <strong>' + routeNames[route] + '</strong>.</p><p>The following two seeds are twin seeds. ' + twinSeedData[route][seed]['instruction'] + '</p>'
							txt += '<dl class="row">'
							txt += '<dt class="col-md-1">' + seed.toString() + '</dt><dd class="col-md-11">' + twinSeedData[route][seed][seed] + '</dd>';
							txt += '<dt class="col-md-1">' + (seed + 1).toString() + '</dt><dd class="col-md-11">' + twinSeedData[route][seed][seed + 1] + '</dd>';
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
		var encounterData = getData(_encounterData);
		possibleSteps = new Set([]);

		for (var seed of possibleSeeds) {
			Object.entries(encounterData[seed]).forEach(
				([step, formation]) => {
					if (!(possibleSteps.has(parseInt(step)))) {
						possibleSteps.add(parseInt(step));
					}
				}
			);
		}
	}

	var updateDisplay = function() {
		var mapData = getData(_mapData);

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

		if (currentMapIndex == mapData.length - 1) {
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
