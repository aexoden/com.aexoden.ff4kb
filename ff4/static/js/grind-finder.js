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
     * Data
     */

	var _encounterData = {};

	_encounterData.giant_save_stomach = [
		{
			"87": "Horseman x1, Beamer x2",
			"97": "Searcher (summons MacGiant) x1"
		},
		{
			"87": "Horseman x1, Beamer x2",
			"97": "Searcher (summons MacGiant) x1"
		},
		{
			"87": "Horseman x1, Beamer x2",
			"97": "Searcher (summons MacGiant) x1"
		},
		{
			"87": "Horseman x1, Beamer x2",
			"97": "Searcher (summons MacGiant) x1"
		},
		{
			"81": "Horseman x1, Beamer x2",
			"87": "Searcher (summons MacGiant) x1"
		},
		{
			"81": "Horseman x1, Beamer x2",
			"87": "Searcher (summons MacGiant) x1"
		},
		{
			"81": "Horseman x1, Beamer x2",
			"87": "Searcher (summons MacGiant) x1"
		},
		{
			"81": "Horseman x1, Beamer x2",
			"87": "Searcher (summons MacGiant) x1"
		},
		{
			"81": "Horseman x1, Beamer x2",
			"87": "Searcher (summons MacGiant) x1"
		},
		{
			"81": "Horseman x1, Beamer x2",
			"146": "Searcher (summons MacGiant) x1"
		},
		{
			"81": "Horseman x1, Beamer x2",
			"146": "Searcher (summons MacGiant) x1"
		},
		{
			"81": "Horseman x1, Beamer x2",
			"159": "MacGiant x1",
			"182": "Searcher (summons Horseman) x1, Machine x2",
			"183": "Machine x2, Beamer x2",
			"212": "Horseman x1, Beamer x2",
			"223": "Horseman x1, Beamer x2",
			"255": "Machine x2, Beamer x2",
			"308": "MacGiant x1",
			"316": "Searcher (summons MacGiant) x1"
		},
		{
			"64": "Horseman x1, Beamer x2"
		},
		{
			"64": "Horseman x1, Beamer x2"
		},
		{
			"64": "Horseman x1, Beamer x2"
		},
		{
			"64": "Horseman x1, Beamer x2"
		},
		{
			"64": "Horseman x1, Beamer x2"
		},
		{
			"64": "Horseman x1, Beamer x2"
		},
		{
			"64": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"64": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"64": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"67": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"67": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"67": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"67": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"67": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"60": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"60": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"60": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"60": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"60": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"60": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"60": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"60": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"60": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"69": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"69": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"94": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"73": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"73": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"73": "Searcher (summons Horseman) x1, Beamer x2",
			"94": "Horseman x1, Beamer x2",
			"121": "Machine x2, Beamer x2",
			"123": "Horseman x1, Beamer x2",
			"125": "Horseman x1, Beamer x1, Machine x1",
			"141": "Horseman x1, Beamer x1, Machine x1",
			"203": "Horseman x1, Beamer x1, Machine x1",
			"241": "Machine x2, Beamer x2",
			"271": "MacGiant x1, Horseman x1",
			"280": "Horseman x1, Beamer x1, Machine x1",
			"309": "Searcher (summons Horseman) x1, Machine x2",
			"310": "Searcher (summons MacGiant) x1"
		},
		{
			"73": "Searcher (summons Horseman) x1, Beamer x2",
			"94": "Horseman x1, Beamer x2",
			"121": "Machine x2, Beamer x2",
			"123": "Horseman x1, Beamer x2",
			"125": "Horseman x1, Beamer x1, Machine x1",
			"203": "Searcher (summons MacGiant) x1"
		},
		{
			"73": "Searcher (summons Horseman) x1, Beamer x2",
			"94": "Horseman x1, Beamer x2",
			"121": "Machine x2, Beamer x2",
			"123": "Horseman x1, Beamer x2",
			"125": "Horseman x1, Beamer x1, Machine x1",
			"203": "Searcher (summons MacGiant) x1"
		},
		{
			"73": "Searcher (summons Horseman) x1, Beamer x2",
			"94": "Horseman x1, Beamer x2",
			"123": "Machine x2, Beamer x2",
			"125": "Horseman x1, Beamer x2",
			"203": "Horseman x1, Beamer x1, Machine x1",
			"236": "Searcher (summons MacGiant) x1"
		},
		{
			"73": "Searcher (summons Horseman) x1, Beamer x2",
			"94": "Horseman x1, Beamer x2",
			"123": "Machine x2, Beamer x2",
			"125": "Horseman x1, Beamer x2",
			"203": "Searcher (summons MacGiant) x1"
		},
		{
			"61": "Searcher (summons Horseman) x1, Beamer x2",
			"73": "Horseman x1, Beamer x2",
			"94": "Horseman x1, Beamer x1, Machine x1",
			"125": "Horseman x1, Beamer x2",
			"203": "Searcher (summons MacGiant) x1"
		},
		{
			"61": "Searcher (summons Horseman) x1, Beamer x2",
			"73": "Horseman x1, Beamer x2",
			"125": "Machine x2, Beamer x2",
			"186": "Horseman x1, Beamer x2",
			"203": "Searcher (summons MacGiant) x1"
		},
		{
			"61": "Searcher (summons Horseman) x1, Beamer x2",
			"125": "Searcher (summons Horseman) x1, Machine x2",
			"186": "Machine x2, Beamer x2",
			"203": "Horseman x1, Beamer x2",
			"236": "Searcher (summons MacGiant) x1"
		},
		{
			"61": "Searcher (summons Horseman) x1, Beamer x2",
			"125": "Searcher (summons Horseman) x1, Machine x2",
			"186": "Machine x2, Beamer x2",
			"236": "Horseman x1, Beamer x2",
			"246": "Searcher (summons MacGiant) x1"
		},
		{
			"61": "Searcher (summons Horseman) x1, Beamer x2",
			"167": "Searcher (summons Horseman) x1, Machine x2",
			"186": "Machine x2, Beamer x2",
			"236": "Horseman x1, Beamer x1, Machine x1",
			"246": "Searcher (summons MacGiant) x1"
		},
		{
			"61": "Searcher (summons Horseman) x1, Beamer x2",
			"167": "Searcher (summons Horseman) x1, Machine x2",
			"186": "Machine x2, Beamer x2",
			"236": "Horseman x1, Beamer x1, Machine x1",
			"246": "Searcher (summons MacGiant) x1"
		},
		{
			"61": "Searcher (summons Horseman) x1, Beamer x2",
			"89": "Horseman x1, Beamer x2",
			"167": "Horseman x1, Beamer x2",
			"186": "Horseman x1, Beamer x1, Machine x1",
			"246": "Searcher (summons MacGiant) x1"
		},
		{
			"61": "Searcher (summons Horseman) x1, Beamer x2",
			"89": "Horseman x1, Beamer x2",
			"143": "Horseman x1, Beamer x2",
			"167": "Horseman x1, Beamer x1, Machine x1",
			"186": "Searcher (summons MacGiant) x1"
		},
		{
			"61": "Searcher (summons Horseman) x1, Beamer x2",
			"89": "Horseman x1, Beamer x2",
			"143": "Horseman x1, Beamer x2",
			"167": "Horseman x1, Beamer x1, Machine x1",
			"186": "Searcher (summons MacGiant) x1"
		},
		{
			"89": "Searcher (summons Horseman) x1, Beamer x2",
			"143": "Searcher (summons Horseman) x1, Machine x2",
			"167": "Horseman x1, Beamer x2",
			"186": "Horseman x1, Beamer x1, Machine x1",
			"246": "Searcher (summons MacGiant) x1"
		},
		{
			"89": "Searcher (summons Horseman) x1, Beamer x2",
			"99": "Horseman x1, Beamer x2",
			"143": "Horseman x1, Beamer x2",
			"167": "Horseman x1, Beamer x1, Machine x1",
			"246": "Searcher (summons MacGiant) x1"
		},
		{
			"89": "Searcher (summons Horseman) x1, Beamer x2",
			"99": "Horseman x1, Beamer x2",
			"143": "Horseman x1, Beamer x2",
			"167": "Horseman x1, Beamer x1, Machine x1",
			"246": "Searcher (summons MacGiant) x1"
		},
		{
			"89": "Searcher (summons Horseman) x1, Beamer x2",
			"99": "Horseman x1, Beamer x2",
			"143": "Horseman x1, Beamer x2",
			"167": "Horseman x1, Beamer x1, Machine x1",
			"249": "Searcher (summons MacGiant) x1"
		},
		{
			"89": "Searcher (summons Horseman) x1, Beamer x2",
			"99": "Horseman x1, Beamer x2",
			"143": "Horseman x1, Beamer x2",
			"232": "Horseman x1, Beamer x1, Machine x1",
			"249": "Searcher (summons MacGiant) x1"
		},
		{
			"89": "Searcher (summons Horseman) x1, Beamer x2",
			"99": "Horseman x1, Beamer x1, Machine x1",
			"124": "Horseman x1, Beamer x2",
			"143": "Horseman x1, Beamer x1, Machine x1",
			"232": "Searcher (summons MacGiant) x1"
		},
		{
			"68": "Searcher (summons Horseman) x1, Beamer x2",
			"99": "Horseman x1, Beamer x1, Machine x1",
			"124": "Horseman x1, Beamer x2",
			"143": "Horseman x1, Beamer x1, Machine x1",
			"232": "MacGiant x1",
			"249": "MacGiant x1",
			"257": "Searcher (summons MacGiant) x1"
		},
		{
			"68": "Machine x2, Beamer x3",
			"78": "Horseman x1, Beamer x1, Machine x1",
			"99": "Searcher (summons Horseman) x1, Beamer x2",
			"124": "Horseman x1, Beamer x1, Machine x1",
			"232": "MacGiant x1",
			"249": "MacGiant x1",
			"257": "Searcher (summons MacGiant) x1"
		},
		{
			"68": "Machine x2, Beamer x3",
			"78": "Horseman x1, Beamer x1, Machine x1",
			"99": "Searcher (summons Horseman) x1, Beamer x2",
			"124": "Horseman x1, Beamer x1, Machine x1",
			"232": "MacGiant x1",
			"249": "MacGiant x1",
			"257": "Searcher (summons MacGiant) x1"
		},
		{
			"68": "Machine x2, Beamer x3",
			"78": "Horseman x1, Beamer x1, Machine x1",
			"99": "Searcher (summons Horseman) x1, Beamer x2",
			"124": "Horseman x1, Beamer x1, Machine x1",
			"232": "MacGiant x1",
			"249": "MacGiant x1",
			"257": "Searcher (summons MacGiant) x1"
		},
		{
			"68": "Machine x2, Beamer x3",
			"78": "Horseman x1, Beamer x1, Machine x1",
			"124": "Horseman x1, Beamer x2",
			"232": "Horseman x1, Beamer x1, Machine x1",
			"249": "MacGiant x1",
			"250": "MacGiant x1",
			"257": "Searcher (summons MacGiant) x1"
		},
		{
			"68": "Machine x2, Beamer x3",
			"78": "Horseman x1, Beamer x1, Machine x1",
			"124": "Horseman x1, Beamer x2",
			"178": "Horseman x1, Beamer x1, Machine x1",
			"232": "MacGiant x1",
			"250": "MacGiant x1",
			"257": "Searcher (summons MacGiant) x1"
		},
		{
			"68": "Machine x2, Beamer x3",
			"78": "Horseman x1, Beamer x1, Machine x1",
			"124": "Horseman x1, Beamer x2",
			"178": "Horseman x1, Beamer x1, Machine x1",
			"232": "MacGiant x1",
			"250": "MacGiant x1",
			"264": "Searcher (summons MacGiant) x1"
		},
		{
			"68": "Machine x2, Beamer x3",
			"78": "Horseman x1, Beamer x1, Machine x1",
			"124": "Horseman x1, Beamer x2",
			"153": "Horseman x1, Beamer x1, Machine x1",
			"178": "MacGiant x1",
			"250": "MacGiant x1",
			"264": "Searcher (summons MacGiant) x1"
		},
		{
			"68": "Machine x2, Beamer x3",
			"78": "Horseman x1, Beamer x1, Machine x1",
			"119": "Horseman x1, Beamer x2",
			"153": "Horseman x1, Beamer x1, Machine x1",
			"178": "MacGiant x1",
			"250": "MacGiant x1",
			"264": "Searcher (summons MacGiant) x1"
		},
		{
			"78": "Machine x2, Beamer x3",
			"119": "Machine x2, Beamer x2",
			"153": "Horseman x1, Beamer x2",
			"178": "Horseman x1, Beamer x1, Machine x1",
			"231": "MacGiant x1",
			"250": "MacGiant x1",
			"264": "Searcher (summons MacGiant) x1"
		},
		{
			"72": "Machine x2, Beamer x3",
			"119": "Machine x2, Beamer x2",
			"153": "Horseman x1, Beamer x2",
			"178": "Horseman x1, Beamer x1, Machine x1",
			"231": "MacGiant x1",
			"250": "MacGiant x1",
			"264": "Searcher (summons MacGiant) x1"
		},
		{
			"72": "Machine x2, Beamer x3",
			"77": "Horseman x1, Beamer x1, Machine x1",
			"119": "Horseman x1, Beamer x2",
			"153": "Searcher (summons MacGiant) x1"
		},
		{
			"72": "Machine x2, Beamer x3",
			"77": "Horseman x1, Beamer x1, Machine x1",
			"119": "Horseman x1, Beamer x2",
			"153": "Searcher (summons MacGiant) x1"
		},
		{
			"72": "Machine x2, Beamer x3",
			"77": "Horseman x1, Beamer x1, Machine x1",
			"119": "Horseman x1, Beamer x1, Machine x1",
			"127": "Searcher (summons MacGiant) x1"
		},
		{
			"72": "Machine x2, Beamer x3",
			"77": "Horseman x1, Beamer x1, Machine x1",
			"119": "Horseman x1, Beamer x1, Machine x1",
			"127": "Searcher (summons MacGiant) x1"
		},
		{
			"72": "Machine x2, Beamer x3",
			"77": "Horseman x1, Beamer x1, Machine x1",
			"119": "Horseman x1, Beamer x1, Machine x1",
			"127": "Searcher (summons MacGiant) x1"
		},
		{
			"72": "Machine x2, Beamer x3",
			"77": "Horseman x1, Beamer x1, Machine x1",
			"118": "Horseman x1, Beamer x1, Machine x1",
			"119": "Searcher (summons MacGiant) x1"
		},
		{
			"72": "Machine x2, Beamer x3",
			"77": "Horseman x1, Beamer x1, Machine x1",
			"118": "Horseman x1, Beamer x1, Machine x1",
			"127": "Searcher (summons MacGiant) x1"
		},
		{
			"72": "Machine x2, Beamer x3",
			"77": "Horseman x1, Beamer x1, Machine x1",
			"118": "Horseman x1, Beamer x1, Machine x1",
			"127": "Searcher (summons MacGiant) x1"
		},
		{
			"77": "Machine x2, Beamer x3",
			"118": "Machine x2, Beamer x2",
			"127": "Horseman x1, Beamer x1, Machine x1",
			"195": "Searcher (summons MacGiant) x1"
		},
		{
			"118": "Horseman x1, Beamer x1, Machine x1",
			"127": "Horseman x1, Beamer x2",
			"140": "Horseman x1, Beamer x1, Machine x1",
			"195": "Searcher (summons MacGiant) x1"
		},
		{
			"118": "Horseman x1, Beamer x1, Machine x1",
			"127": "Horseman x1, Beamer x2",
			"140": "Horseman x1, Beamer x1, Machine x1",
			"157": "Searcher (summons MacGiant) x1"
		},
		{
			"118": "Horseman x1, Beamer x1, Machine x1",
			"140": "Horseman x1, Beamer x2",
			"157": "Horseman x1, Beamer x1, Machine x1",
			"195": "Searcher (summons MacGiant) x1"
		},
		{
			"85": "Searcher (summons MacGiant) x1"
		},
		{
			"85": "Searcher (summons MacGiant) x1"
		},
		{
			"76": "Searcher (summons MacGiant) x1"
		},
		{
			"76": "Searcher (summons MacGiant) x1"
		},
		{
			"76": "Searcher (summons MacGiant) x1"
		},
		{
			"76": "Searcher (summons MacGiant) x1"
		},
		{
			"76": "Searcher (summons MacGiant) x1"
		},
		{
			"76": "Searcher (summons MacGiant) x1"
		},
		{
			"76": "Searcher (summons MacGiant) x1"
		},
		{
			"76": "Searcher (summons MacGiant) x1"
		},
		{
			"76": "Searcher (summons MacGiant) x1"
		},
		{
			"148": "Searcher (summons MacGiant) x1"
		},
		{
			"148": "Searcher (summons MacGiant) x1"
		},
		{
			"102": "Searcher (summons MacGiant) x1"
		},
		{
			"91": "Searcher (summons MacGiant) x1"
		},
		{
			"91": "Searcher (summons MacGiant) x1"
		},
		{
			"91": "Horseman x2",
			"102": "Searcher (summons Horseman) x1, Beamer x2",
			"148": "Searcher (summons MacGiant) x1"
		},
		{
			"91": "Horseman x2",
			"102": "Searcher (summons Horseman) x1, Beamer x2",
			"115": "Searcher (summons MacGiant) x1"
		},
		{
			"91": "Horseman x2",
			"102": "Searcher (summons Horseman) x1, Beamer x2",
			"115": "Searcher (summons MacGiant) x1"
		},
		{
			"91": "Horseman x2",
			"102": "Machine x2, Beamer x3",
			"115": "Searcher (summons MacGiant) x1"
		},
		{
			"91": "Horseman x2",
			"102": "Machine x2, Beamer x3",
			"115": "Searcher (summons MacGiant) x1"
		},
		{
			"62": "Horseman x2",
			"91": "Machine x2, Beamer x3",
			"102": "Searcher (summons MacGiant) x1"
		},
		{
			"62": "Horseman x2",
			"91": "Machine x2, Beamer x3",
			"115": "Searcher (summons MacGiant) x1"
		},
		{
			"62": "Horseman x2",
			"115": "Horseman x1, Beamer x1, Machine x1",
			"116": "Searcher (summons MacGiant) x1"
		},
		{
			"62": "Horseman x2",
			"82": "Machine x2, Beamer x3",
			"115": "Searcher (summons MacGiant) x1"
		},
		{
			"62": "Horseman x2",
			"82": "Machine x2, Beamer x3",
			"114": "Searcher (summons MacGiant) x1"
		},
		{
			"62": "Horseman x2",
			"82": "Machine x2, Beamer x3",
			"114": "Searcher (summons MacGiant) x1"
		},
		{
			"62": "Horseman x2",
			"82": "Machine x2, Beamer x3",
			"114": "MacGiant x1",
			"116": "MacGiant x1",
			"136": "Machine x2, Beamer x2",
			"218": "Machine x2, Beamer x2",
			"235": "Searcher (summons Horseman) x1, Machine x2",
			"279": "Searcher (summons MacGiant) x1"
		},
		{
			"62": "Horseman x2",
			"82": "Machine x2, Beamer x3",
			"114": "MacGiant x1",
			"116": "MacGiant x1, Horseman x1",
			"136": "Machine x2, Beamer x2",
			"218": "Machine x2, Beamer x2",
			"226": "Searcher (summons Horseman) x1, Machine x2",
			"279": "Searcher (summons MacGiant) x1"
		},
		{
			"62": "Horseman x2",
			"82": "Machine x2, Beamer x3",
			"114": "MacGiant x1",
			"116": "MacGiant x1, Horseman x1",
			"136": "Machine x2, Beamer x2",
			"166": "Machine x2, Beamer x2",
			"218": "Searcher (summons Horseman) x1, Machine x2",
			"226": "Searcher (summons MacGiant) x1"
		},
		{
			"82": "Horseman x2"
		},
		{
			"82": "Horseman x2"
		},
		{
			"82": "MacGiant x1, Horseman x1"
		},
		{
			"88": "MacGiant x1, Horseman x1"
		},
		{
			"88": "MacGiant x1, Horseman x1"
		},
		{
			"88": "MacGiant x1, Horseman x1"
		},
		{
			"88": "MacGiant x1, Horseman x1"
		},
		{
			"88": "MacGiant x1, Horseman x1"
		},
		{
			"88": "MacGiant x1, Horseman x1"
		},
		{
			"86": "MacGiant x1, Horseman x1"
		},
		{
			"80": "D.Machin x1",
			"86": "Searcher (summons MacGiant) x1"
		},
		{
			"80": "D.Machin x1",
			"86": "Searcher (summons MacGiant) x1"
		},
		{
			"80": "Horseman x1, Beamer x2",
			"86": "Searcher (summons MacGiant) x1"
		},
		{
			"80": "Horseman x1, Beamer x2",
			"86": "Searcher (summons MacGiant) x1"
		},
		{
			"80": "Horseman x1, Beamer x2",
			"86": "Searcher (summons MacGiant) x1"
		},
		{
			"80": "Horseman x1, Beamer x2",
			"86": "Searcher (summons MacGiant) x1"
		},
		{
			"80": "Horseman x1, Beamer x2",
			"86": "Searcher (summons MacGiant) x1"
		},
		{
			"80": "Horseman x1, Beamer x2",
			"86": "Searcher (summons MacGiant) x1"
		},
		{
			"79": "Horseman x1, Beamer x2",
			"80": "Searcher (summons MacGiant) x1"
		},
		{
			"79": "Horseman x1, Beamer x2",
			"90": "Searcher (summons MacGiant) x1"
		},
		{
			"79": "Horseman x1, Beamer x2",
			"90": "Searcher (summons MacGiant) x1"
		},
		{
			"79": "Horseman x1, Beamer x2",
			"90": "Searcher (summons MacGiant) x1"
		},
		{
			"79": "Horseman x1, Beamer x2",
			"90": "Searcher (summons MacGiant) x1"
		},
		{
			"71": "Horseman x1, Beamer x2",
			"79": "Searcher (summons MacGiant) x1"
		},
		{
			"71": "Horseman x1, Beamer x2",
			"79": "Searcher (summons MacGiant) x1"
		},
		{
			"71": "Horseman x1, Beamer x2",
			"79": "Searcher (summons MacGiant) x1"
		},
		{
			"71": "Horseman x1, Beamer x2",
			"79": "Horseman x2"
		},
		{
			"71": "Horseman x1, Beamer x2",
			"110": "MacGiant x1",
			"111": "Searcher (summons Horseman) x1, Machine x2",
			"152": "Machine x2, Beamer x2",
			"168": "Horseman x1, Beamer x2",
			"198": "Horseman x1, Beamer x2",
			"238": "Machine x2, Beamer x2",
			"240": "MacGiant x1",
			"281": "Searcher (summons MacGiant) x1"
		},
		{
			"71": "Horseman x1, Beamer x2",
			"110": "MacGiant x1",
			"142": "Searcher (summons Horseman) x1, Machine x2",
			"152": "Machine x2, Beamer x2",
			"168": "Horseman x1, Beamer x2",
			"198": "Horseman x1, Beamer x2",
			"238": "Machine x2, Beamer x2",
			"240": "MacGiant x1, Horseman x1",
			"281": "Searcher (summons MacGiant) x1"
		},
		{
			"71": "Horseman x1, Beamer x2",
			"110": "MacGiant x1",
			"142": "Searcher (summons Horseman) x1, Machine x2",
			"152": "Machine x2, Beamer x2",
			"168": "Horseman x1, Beamer x2",
			"174": "Horseman x1, Beamer x2",
			"198": "Machine x2, Beamer x2",
			"240": "MacGiant x1, Horseman x1",
			"281": "Searcher (summons MacGiant) x1"
		},
		{
			"71": "Horseman x1, Beamer x2",
			"107": "Horseman x2"
		},
		{
			"71": "Horseman x1, Beamer x2",
			"107": "Horseman x2"
		},
		{
			"107": "Horseman x1, Beamer x2"
		},
		{
			"107": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"107": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"107": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"83": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"83": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"83": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"83": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"83": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"83": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"83": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"83": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"83": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"105": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"75": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"75": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"75": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"75": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"75": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"75": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"75": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"75": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"75": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"95": "Searcher (summons Horseman) x1, Beamer x2",
			"171": "Searcher (summons Horseman) x1, Machine x2",
			"176": "Machine x2, Beamer x2",
			"189": "Horseman x1, Beamer x2",
			"196": "Horseman x1, Beamer x1, Machine x1",
			"204": "Horseman x1, Beamer x1, Machine x1",
			"265": "Horseman x1, Beamer x1, Machine x1",
			"277": "Machine x2, Beamer x2",
			"297": "MacGiant x1, Horseman x1",
			"319": "Horseman x1, Beamer x1, Machine x1",
			"401": "Searcher (summons Horseman) x1, Machine x2",
			"428": "Searcher (summons MacGiant) x1"
		},
		{
			"95": "Searcher (summons Horseman) x1, Beamer x2",
			"171": "Searcher (summons Horseman) x1, Machine x2",
			"176": "Machine x2, Beamer x2",
			"189": "Horseman x1, Beamer x2",
			"196": "Horseman x1, Beamer x1, Machine x1",
			"204": "Searcher (summons MacGiant) x1"
		},
		{
			"95": "Searcher (summons Horseman) x1, Beamer x2",
			"171": "Searcher (summons Horseman) x1, Machine x2",
			"176": "Machine x2, Beamer x2",
			"189": "Horseman x1, Beamer x2",
			"204": "Horseman x1, Beamer x1, Machine x1",
			"219": "Searcher (summons MacGiant) x1"
		},
		{
			"95": "Searcher (summons Horseman) x1, Beamer x2",
			"171": "Searcher (summons Horseman) x1, Machine x2",
			"176": "Machine x2, Beamer x2",
			"189": "Horseman x1, Beamer x2",
			"204": "Horseman x1, Beamer x1, Machine x1",
			"219": "Searcher (summons MacGiant) x1"
		},
		{
			"95": "Searcher (summons Horseman) x1, Beamer x2",
			"122": "Searcher (summons Horseman) x1, Machine x2",
			"171": "Machine x2, Beamer x2",
			"176": "Horseman x1, Beamer x2",
			"189": "Searcher (summons MacGiant) x1"
		},
		{
			"95": "Searcher (summons Horseman) x1, Beamer x2",
			"122": "Searcher (summons Horseman) x1, Machine x2",
			"165": "Machine x2, Beamer x2",
			"171": "Horseman x1, Beamer x2",
			"176": "Searcher (summons MacGiant) x1"
		},
		{
			"95": "Searcher (summons Horseman) x1, Beamer x2",
			"122": "Searcher (summons Horseman) x1, Machine x2",
			"165": "Machine x2, Beamer x2",
			"170": "Horseman x1, Beamer x2",
			"171": "Searcher (summons MacGiant) x1"
		},
		{
			"95": "Searcher (summons Horseman) x1, Beamer x2",
			"122": "Searcher (summons Horseman) x1, Machine x2",
			"165": "Machine x2, Beamer x2",
			"170": "Horseman x1, Beamer x2",
			"176": "Searcher (summons MacGiant) x1"
		},
		{
			"122": "Horseman x1, Beamer x2",
			"165": "Searcher (summons Horseman) x1, Machine x2",
			"170": "Machine x2, Beamer x2",
			"176": "Horseman x1, Beamer x2",
			"202": "Searcher (summons MacGiant) x1"
		},
		{
			"122": "Horseman x1, Beamer x2",
			"165": "Searcher (summons Horseman) x1, Machine x2",
			"170": "Machine x2, Beamer x2",
			"202": "Horseman x1, Beamer x1, Machine x1",
			"219": "Searcher (summons MacGiant) x1"
		},
		{
			"122": "Horseman x1, Beamer x2",
			"165": "Searcher (summons Horseman) x1, Machine x2",
			"170": "Machine x2, Beamer x2",
			"202": "Horseman x1, Beamer x1, Machine x1",
			"234": "Searcher (summons MacGiant) x1"
		},
		{
			"122": "Horseman x1, Beamer x2",
			"165": "Searcher (summons Horseman) x1, Machine x2",
			"170": "Horseman x1, Beamer x2",
			"187": "Horseman x1, Beamer x1, Machine x1",
			"202": "Searcher (summons MacGiant) x1"
		},
		{
			"122": "Horseman x1, Beamer x2",
			"165": "Searcher (summons Horseman) x1, Machine x2",
			"170": "Horseman x1, Beamer x2",
			"187": "Horseman x1, Beamer x1, Machine x1",
			"202": "Searcher (summons MacGiant) x1"
		},
		{
			"165": "Horseman x1, Beamer x2",
			"170": "Searcher (summons Horseman) x1, Machine x2",
			"187": "Horseman x1, Beamer x2",
			"202": "Horseman x1, Beamer x1, Machine x1",
			"234": "Searcher (summons MacGiant) x1"
		},
		{
			"145": "Horseman x1, Beamer x2",
			"170": "Searcher (summons Horseman) x1, Machine x2",
			"187": "Horseman x1, Beamer x2",
			"202": "Horseman x1, Beamer x1, Machine x1",
			"234": "Searcher (summons MacGiant) x1"
		},
		{
			"145": "Horseman x1, Beamer x2",
			"172": "Searcher (summons Horseman) x1, Machine x2",
			"187": "Horseman x1, Beamer x2",
			"202": "Horseman x1, Beamer x1, Machine x1",
			"234": "Searcher (summons MacGiant) x1"
		},
		{
			"145": "Horseman x1, Beamer x2",
			"172": "Searcher (summons Horseman) x1, Machine x2",
			"187": "Horseman x1, Beamer x2",
			"233": "Horseman x1, Beamer x1, Machine x1",
			"234": "Searcher (summons MacGiant) x1"
		},
		{
			"63": "Searcher (summons Horseman) x1, Beamer x2",
			"145": "Searcher (summons Horseman) x1, Machine x2",
			"172": "Horseman x1, Beamer x2",
			"187": "Horseman x1, Beamer x1, Machine x1",
			"233": "Searcher (summons MacGiant) x1"
		},
		{
			"63": "Searcher (summons Horseman) x1, Beamer x2",
			"145": "Searcher (summons Horseman) x1, Machine x2",
			"172": "Horseman x1, Beamer x2",
			"187": "Horseman x1, Beamer x1, Machine x1",
			"233": "Searcher (summons MacGiant) x1"
		},
		{
			"63": "Searcher (summons Horseman) x1, Beamer x2",
			"145": "Machine x2, Beamer x2",
			"172": "Horseman x1, Beamer x2",
			"187": "Horseman x1, Beamer x1, Machine x1",
			"191": "Searcher (summons MacGiant) x1"
		},
		{
			"63": "Searcher (summons Horseman) x1, Beamer x2",
			"104": "Horseman x1, Beamer x1, Machine x1",
			"145": "Horseman x1, Beamer x2",
			"172": "Horseman x1, Beamer x1, Machine x1",
			"191": "MacGiant x1",
			"233": "MacGiant x1",
			"252": "Searcher (summons MacGiant) x1"
		},
		{
			"63": "Machine x2, Beamer x3",
			"104": "Horseman x1, Beamer x1, Machine x1",
			"145": "Horseman x1, Beamer x2",
			"172": "Horseman x1, Beamer x1, Machine x1",
			"191": "MacGiant x1",
			"233": "MacGiant x1",
			"252": "Searcher (summons MacGiant) x1"
		},
		{
			"63": "Machine x2, Beamer x3",
			"104": "Horseman x1, Beamer x1, Machine x1",
			"145": "Horseman x1, Beamer x2",
			"172": "Horseman x1, Beamer x1, Machine x1",
			"191": "MacGiant x1",
			"214": "MacGiant x1",
			"233": "Searcher (summons MacGiant) x1"
		},
		{
			"63": "Machine x2, Beamer x3",
			"104": "Horseman x1, Beamer x1, Machine x1",
			"172": "Horseman x1, Beamer x2",
			"184": "Horseman x1, Beamer x1, Machine x1",
			"191": "MacGiant x1",
			"214": "MacGiant x1",
			"233": "Searcher (summons MacGiant) x1"
		},
		{
			"63": "Machine x2, Beamer x3",
			"104": "Horseman x1, Beamer x1, Machine x1",
			"106": "Searcher (summons Horseman) x1, Beamer x2",
			"184": "Horseman x1, Beamer x1, Machine x1",
			"191": "MacGiant x1",
			"214": "MacGiant x1",
			"233": "Searcher (summons MacGiant) x1"
		},
		{
			"63": "Machine x2, Beamer x3",
			"104": "Horseman x1, Beamer x1, Machine x1",
			"106": "Searcher (summons Horseman) x1, Beamer x2",
			"156": "Horseman x1, Beamer x1, Machine x1",
			"184": "MacGiant x1",
			"191": "MacGiant x1",
			"214": "Searcher (summons MacGiant) x1"
		},
		{
			"104": "Machine x2, Beamer x3",
			"106": "Horseman x1, Beamer x1, Machine x1",
			"156": "Horseman x1, Beamer x2",
			"184": "Horseman x1, Beamer x1, Machine x1",
			"191": "MacGiant x1",
			"214": "MacGiant x1",
			"278": "Searcher (summons MacGiant) x1"
		},
		{
			"104": "Machine x2, Beamer x3",
			"106": "Horseman x1, Beamer x1, Machine x1",
			"156": "Horseman x1, Beamer x2",
			"184": "Horseman x1, Beamer x1, Machine x1",
			"191": "MacGiant x1",
			"214": "MacGiant x1",
			"221": "Searcher (summons MacGiant) x1"
		},
		{
			"103": "Machine x2, Beamer x3",
			"104": "Horseman x1, Beamer x1, Machine x1",
			"106": "Searcher (summons Horseman) x1, Beamer x2",
			"156": "Horseman x1, Beamer x1, Machine x1",
			"184": "MacGiant x1",
			"214": "MacGiant x1",
			"221": "Searcher (summons MacGiant) x1"
		},
		{
			"103": "Machine x2, Beamer x3",
			"106": "Horseman x1, Beamer x1, Machine x1",
			"135": "Horseman x1, Beamer x2",
			"156": "Horseman x1, Beamer x1, Machine x1",
			"184": "MacGiant x1",
			"214": "MacGiant x1",
			"221": "Searcher (summons MacGiant) x1"
		},
		{
			"103": "Machine x2, Beamer x3",
			"106": "Horseman x1, Beamer x1, Machine x1",
			"109": "Horseman x1, Beamer x2",
			"135": "Horseman x1, Beamer x1, Machine x1",
			"156": "MacGiant x1",
			"184": "MacGiant x1",
			"214": "Searcher (summons MacGiant) x1"
		},
		{
			"103": "Machine x2, Beamer x3",
			"106": "Horseman x1, Beamer x1, Machine x1",
			"109": "Horseman x1, Beamer x2",
			"135": "Searcher (summons MacGiant) x1"
		},
		{
			"103": "Machine x2, Beamer x3",
			"106": "Horseman x1, Beamer x1, Machine x1",
			"109": "Horseman x1, Beamer x2",
			"135": "Searcher (summons MacGiant) x1"
		},
		{
			"103": "Machine x2, Beamer x3",
			"109": "Machine x2, Beamer x2",
			"135": "Horseman x1, Beamer x1, Machine x1",
			"151": "Searcher (summons MacGiant) x1"
		},
		{
			"103": "Machine x2, Beamer x3",
			"109": "Machine x2, Beamer x2",
			"135": "Horseman x1, Beamer x1, Machine x1",
			"151": "Searcher (summons MacGiant) x1"
		},
		{
			"70": "Machine x2, Beamer x3",
			"103": "Horseman x1, Beamer x1, Machine x1",
			"109": "Horseman x1, Beamer x1, Machine x1",
			"135": "Searcher (summons MacGiant) x1"
		},
		{
			"70": "Machine x2, Beamer x3",
			"103": "Horseman x1, Beamer x1, Machine x1",
			"109": "Horseman x1, Beamer x1, Machine x1",
			"135": "Searcher (summons MacGiant) x1"
		},
		{
			"70": "Machine x2, Beamer x3",
			"109": "Machine x2, Beamer x2",
			"134": "Horseman x1, Beamer x1, Machine x1",
			"135": "Searcher (summons MacGiant) x1"
		},
		{
			"70": "Machine x2, Beamer x3",
			"109": "Machine x2, Beamer x2",
			"134": "Horseman x1, Beamer x1, Machine x1",
			"151": "Searcher (summons MacGiant) x1"
		},
		{
			"70": "Machine x2, Beamer x3",
			"134": "Machine x2, Beamer x2",
			"151": "Horseman x1, Beamer x1, Machine x1",
			"199": "Searcher (summons MacGiant) x1"
		},
		{
			"70": "Machine x2, Beamer x3",
			"84": "Searcher (summons Horseman) x1, Beamer x2",
			"134": "Horseman x1, Beamer x1, Machine x1",
			"151": "Searcher (summons MacGiant) x1"
		},
		{
			"70": "Machine x2, Beamer x3",
			"84": "Searcher (summons Horseman) x1, Beamer x2",
			"134": "Horseman x1, Beamer x1, Machine x1",
			"139": "Searcher (summons MacGiant) x1"
		},
		{
			"70": "Machine x2, Beamer x3",
			"84": "Searcher (summons Horseman) x1, Beamer x2",
			"134": "Horseman x1, Beamer x1, Machine x1",
			"139": "Searcher (summons MacGiant) x1"
		},
		{
			"70": "Searcher (summons MacGiant) x1"
		},
		{
			"84": "Searcher (summons MacGiant) x1"
		},
		{
			"84": "Searcher (summons MacGiant) x1"
		},
		{
			"84": "Searcher (summons MacGiant) x1"
		},
		{
			"84": "Searcher (summons MacGiant) x1"
		},
		{
			"84": "Searcher (summons MacGiant) x1"
		},
		{
			"74": "Searcher (summons MacGiant) x1"
		},
		{
			"74": "Searcher (summons MacGiant) x1"
		},
		{
			"74": "Searcher (summons MacGiant) x1"
		},
		{
			"74": "Searcher (summons MacGiant) x1"
		},
		{
			"74": "Searcher (summons MacGiant) x1"
		},
		{
			"74": "Searcher (summons MacGiant) x1"
		},
		{
			"74": "Searcher (summons MacGiant) x1"
		},
		{
			"74": "Searcher (summons MacGiant) x1"
		},
		{
			"74": "Searcher (summons MacGiant) x1"
		},
		{
			"100": "Searcher (summons MacGiant) x1"
		},
		{
			"100": "Horseman x2",
			"128": "Horseman x1, Beamer x2",
			"132": "Searcher (summons MacGiant) x1"
		},
		{
			"100": "Horseman x2",
			"131": "Horseman x1, Beamer x2",
			"132": "Searcher (summons MacGiant) x1"
		},
		{
			"131": "MacGiant x1",
			"132": "Horseman x1, Beamer x2",
			"137": "Searcher (summons MacGiant) x1"
		},
		{
			"131": "MacGiant x1",
			"137": "Horseman x1, Beamer x1, Machine x1",
			"163": "Searcher (summons MacGiant) x1"
		},
		{
			"131": "MacGiant x1",
			"137": "Horseman x1, Beamer x1, Machine x1",
			"150": "Searcher (summons MacGiant) x1"
		},
		{
			"131": "MacGiant x1",
			"137": "Horseman x1, Beamer x1, Machine x1",
			"150": "Searcher (summons MacGiant) x1"
		},
		{
			"131": "MacGiant x1",
			"137": "Horseman x1, Beamer x1, Machine x1",
			"150": "Searcher (summons MacGiant) x1"
		},
		{
			"131": "MacGiant x1",
			"137": "Horseman x1, Beamer x1, Machine x1",
			"150": "Searcher (summons MacGiant) x1"
		},
		{
			"66": "Horseman x2",
			"131": "Horseman x1, Beamer x1, Machine x1",
			"137": "Searcher (summons MacGiant) x1"
		},
		{
			"66": "Horseman x2",
			"98": "Machine x2, Beamer x3",
			"131": "Searcher (summons MacGiant) x1"
		},
		{
			"66": "Horseman x2",
			"98": "Machine x2, Beamer x3",
			"113": "Searcher (summons MacGiant) x1"
		},
		{
			"66": "Horseman x2",
			"98": "Machine x2, Beamer x3",
			"113": "MacGiant x1",
			"150": "MacGiant x1",
			"162": "Machine x2, Beamer x2",
			"163": "Machine x2, Beamer x2",
			"227": "Searcher (summons Horseman) x1, Machine x2",
			"254": "Searcher (summons MacGiant) x1"
		},
		{
			"66": "Horseman x2",
			"98": "Machine x2, Beamer x3",
			"113": "MacGiant x1",
			"150": "MacGiant x1, Horseman x1",
			"162": "Machine x2, Beamer x2",
			"194": "Machine x2, Beamer x2",
			"227": "Searcher (summons Horseman) x1, Machine x2",
			"254": "Searcher (summons MacGiant) x1"
		},
		{
			"66": "Horseman x2",
			"98": "Machine x2, Beamer x3",
			"113": "MacGiant x1",
			"162": "MacGiant x1, Horseman x1",
			"194": "Machine x2, Beamer x2",
			"210": "Machine x2, Beamer x2",
			"227": "Searcher (summons Horseman) x1, Machine x2",
			"254": "Searcher (summons MacGiant) x1"
		},
		{
			"66": "Horseman x2",
			"98": "Machine x2, Beamer x3",
			"113": "MacGiant x1",
			"162": "Searcher (summons Horseman) x1, Machine x2",
			"194": "Machine x2, Beamer x2",
			"210": "Machine x2, Beamer x2",
			"254": "Searcher (summons Horseman) x1, Machine x2",
			"293": "Searcher (summons MacGiant) x1"
		},
		{
			"66": "Horseman x2",
			"98": "Machine x2, Beamer x3",
			"113": "MacGiant x1",
			"162": "Searcher (summons Horseman) x1, Machine x2",
			"179": "Machine x2, Beamer x2",
			"194": "Machine x2, Beamer x2",
			"210": "Searcher (summons Horseman) x1, Machine x2",
			"293": "Searcher (summons MacGiant) x1"
		},
		{
			"65": "MacGiant x1, Horseman x1"
		},
		{
			"65": "MacGiant x1, Horseman x1"
		},
		{
			"65": "MacGiant x1, Horseman x1"
		},
		{
			"65": "MacGiant x1, Horseman x1"
		},
		{
			"65": "MacGiant x1, Horseman x1"
		},
		{
			"65": "MacGiant x1, Horseman x1"
		},
		{
			"65": "MacGiant x1, Horseman x1"
		},
		{
			"65": "MacGiant x1, Horseman x1"
		},
		{
			"65": "D.Machin x1",
			"97": "Searcher (summons MacGiant) x1"
		},
		{
			"97": "D.Machin x1",
			"126": "Searcher (summons MacGiant) x1"
		},
		{
			"97": "Horseman x1, Beamer x2",
			"120": "Searcher (summons MacGiant) x1"
		},
		{
			"97": "Horseman x1, Beamer x2",
			"120": "Searcher (summons MacGiant) x1"
		},
		{
			"97": "Horseman x1, Beamer x2",
			"120": "Searcher (summons MacGiant) x1"
		}
	];

	_encounterData.giant_mouth_chest = [
		{
			"37": "Searcher (summons Horseman) x1, Machine x2",
			"87": "Searcher (summons MacGiant) x1"
		},
		{
			"37": "Searcher (summons Horseman) x1, Machine x2",
			"56": "Searcher (summons MacGiant) x1"
		},
		{
			"37": "Searcher (summons Horseman) x1, Machine x2",
			"56": "Searcher (summons MacGiant) x1"
		},
		{
			"37": "Searcher (summons Horseman) x1, Machine x2",
			"56": "Searcher (summons MacGiant) x1"
		},
		{
			"37": "Searcher (summons Horseman) x1, Machine x2",
			"56": "Searcher (summons MacGiant) x1"
		},
		{
			"56": "Searcher (summons Horseman) x1, Machine x2",
			"81": "Searcher (summons MacGiant) x1"
		},
		{
			"56": "Searcher (summons Horseman) x1, Machine x2",
			"81": "Searcher (summons MacGiant) x1"
		},
		{
			"56": "Searcher (summons Horseman) x1, Machine x2",
			"81": "Searcher (summons MacGiant) x1"
		},
		{
			"56": "Searcher (summons Horseman) x1, Machine x2",
			"81": "Searcher (summons MacGiant) x1"
		},
		{
			"35": "Searcher (summons Horseman) x1, Machine x2",
			"56": "Searcher (summons MacGiant) x1"
		},
		{
			"35": "Searcher (summons Horseman) x1, Machine x2",
			"81": "Searcher (summons MacGiant) x1"
		},
		{
			"35": "Searcher (summons Horseman) x1, Machine x2",
			"81": "MacGiant x1",
			"159": "Horseman x1, Beamer x2",
			"182": "Horseman x1, Beamer x1, Machine x1",
			"183": "Searcher (summons Horseman) x1, Beamer x2",
			"212": "Searcher (summons Horseman) x1, Beamer x2",
			"223": "Horseman x1, Beamer x1, Machine x1",
			"255": "MacGiant x1, Horseman x1",
			"308": "Searcher (summons MacGiant) x1"
		},
		{
			"35": "Searcher (summons Horseman) x1, Machine x2",
			"64": "MacGiant x1",
			"81": "Searcher (summons Horseman) x1, Machine x2",
			"159": "Horseman x1, Beamer x1, Machine x1",
			"183": "Searcher (summons Horseman) x1, Beamer x2",
			"212": "Searcher (summons Horseman) x1, Beamer x2",
			"223": "Horseman x1, Beamer x1, Machine x1",
			"255": "MacGiant x1, Horseman x1",
			"263": "Searcher (summons MacGiant) x1"
		},
		{
			"35": "Searcher (summons Horseman) x1, Machine x2",
			"64": "MacGiant x1",
			"158": "Horseman x1, Beamer x2",
			"159": "Horseman x1, Beamer x1, Machine x1",
			"183": "Searcher (summons Horseman) x1, Beamer x2",
			"212": "Searcher (summons Horseman) x1, Beamer x2",
			"223": "Horseman x1, Beamer x1, Machine x1",
			"255": "D.Machin x1",
			"263": "Searcher (summons MacGiant) x1"
		},
		{
			"29": "Searcher (summons Horseman) x1, Machine x2"
		},
		{
			"29": "Searcher (summons Horseman) x1, Machine x2"
		},
		{
			"29": "Searcher (summons Horseman) x1, Machine x2"
		},
		{
			"29": "Searcher (summons Horseman) x1, Machine x2"
		},
		{
			"29": "Machine x2, Beamer x2"
		},
		{
			"29": "Machine x2, Beamer x2"
		},
		{
			"29": "Machine x2, Beamer x2"
		},
		{
			"29": "Machine x2, Beamer x2"
		},
		{
			"29": "Machine x2, Beamer x2"
		},
		{
			"67": "Machine x2, Beamer x2"
		},
		{
			"67": "Machine x2, Beamer x2"
		},
		{
			"52": "Machine x2, Beamer x2"
		},
		{
			"52": "Machine x2, Beamer x2"
		},
		{
			"52": "Machine x2, Beamer x2"
		},
		{
			"52": "Machine x2, Beamer x2"
		},
		{
			"52": "Machine x2, Beamer x2"
		},
		{
			"52": "Machine x2, Beamer x2"
		},
		{
			"52": "Machine x2, Beamer x2"
		},
		{
			"52": "Machine x2, Beamer x2"
		},
		{
			"52": "Machine x2, Beamer x2"
		},
		{
			"60": "Machine x2, Beamer x2"
		},
		{
			"31": "Machine x2, Beamer x2"
		},
		{
			"31": "Machine x2, Beamer x2"
		},
		{
			"31": "Machine x2, Beamer x2"
		},
		{
			"31": "Machine x2, Beamer x2"
		},
		{
			"31": "Machine x2, Beamer x2"
		},
		{
			"31": "Horseman x1, Beamer x2"
		},
		{
			"26": "Horseman x1, Beamer x2",
			"31": "Searcher (summons Horseman) x1, Machine x2",
			"73": "Machine x2, Beamer x2",
			"94": "Horseman x1, Beamer x2",
			"121": "Machine x2, Beamer x3",
			"123": "Searcher (summons MacGiant) x1"
		},
		{
			"26": "Horseman x1, Beamer x2",
			"31": "Searcher (summons Horseman) x1, Machine x2",
			"73": "Machine x2, Beamer x2",
			"94": "Horseman x1, Beamer x2",
			"121": "Machine x2, Beamer x3",
			"123": "Searcher (summons MacGiant) x1"
		},
		{
			"26": "Horseman x1, Beamer x2",
			"31": "Searcher (summons Horseman) x1, Machine x2",
			"47": "Machine x2, Beamer x2",
			"73": "Horseman x1, Beamer x2",
			"94": "Horseman x1, Beamer x1, Machine x1",
			"123": "Searcher (summons MacGiant) x1"
		},
		{
			"26": "Horseman x1, Beamer x2",
			"47": "Searcher (summons Horseman) x1, Machine x2",
			"58": "Machine x2, Beamer x2",
			"73": "Horseman x1, Beamer x2",
			"94": "Searcher (summons MacGiant) x1"
		},
		{
			"26": "Horseman x1, Beamer x2",
			"47": "Searcher (summons Horseman) x1, Machine x2",
			"58": "Machine x2, Beamer x2",
			"61": "Horseman x1, Beamer x2",
			"73": "Searcher (summons MacGiant) x1"
		},
		{
			"26": "Horseman x1, Beamer x2",
			"47": "Searcher (summons Horseman) x1, Machine x2",
			"58": "Machine x2, Beamer x2",
			"61": "Horseman x1, Beamer x2",
			"73": "Searcher (summons MacGiant) x1"
		},
		{
			"26": "Horseman x1, Beamer x2",
			"27": "Searcher (summons Horseman) x1, Machine x2",
			"47": "Machine x2, Beamer x2",
			"58": "Horseman x1, Beamer x2",
			"61": "Searcher (summons MacGiant) x1"
		},
		{
			"26": "Horseman x1, Beamer x2",
			"27": "Searcher (summons Horseman) x1, Machine x2",
			"47": "Machine x2, Beamer x2",
			"58": "Horseman x1, Beamer x2",
			"61": "Searcher (summons MacGiant) x1"
		},
		{
			"26": "Horseman x1, Beamer x2",
			"27": "Searcher (summons Horseman) x1, Machine x2",
			"47": "Machine x2, Beamer x2",
			"58": "Horseman x1, Beamer x1, Machine x1",
			"61": "Searcher (summons MacGiant) x1"
		},
		{
			"27": "Horseman x1, Beamer x2",
			"47": "Searcher (summons Horseman) x1, Machine x2",
			"54": "Machine x2, Beamer x2",
			"58": "Horseman x1, Beamer x1, Machine x1",
			"61": "Searcher (summons MacGiant) x1"
		},
		{
			"27": "Horseman x1, Beamer x2",
			"47": "Searcher (summons Horseman) x1, Machine x2",
			"54": "Horseman x1, Beamer x2",
			"58": "Horseman x1, Beamer x1, Machine x1",
			"61": "Searcher (summons MacGiant) x1"
		},
		{
			"27": "Horseman x1, Beamer x2",
			"54": "Searcher (summons Horseman) x1, Machine x2",
			"58": "Horseman x1, Beamer x2",
			"61": "Horseman x1, Beamer x1, Machine x1",
			"89": "Searcher (summons MacGiant) x1"
		},
		{
			"27": "Horseman x1, Beamer x2",
			"54": "Searcher (summons Horseman) x1, Machine x2",
			"61": "Horseman x1, Beamer x2",
			"89": "Horseman x1, Beamer x1, Machine x1",
			"143": "Searcher (summons MacGiant) x1"
		},
		{
			"27": "Horseman x1, Beamer x2",
			"53": "Searcher (summons Horseman) x1, Machine x2",
			"54": "Horseman x1, Beamer x2",
			"89": "Horseman x1, Beamer x1, Machine x1",
			"143": "Searcher (summons MacGiant) x1"
		},
		{
			"27": "Horseman x1, Beamer x2",
			"53": "Searcher (summons Horseman) x1, Machine x2",
			"54": "Horseman x1, Beamer x2",
			"89": "Horseman x1, Beamer x1, Machine x1",
			"99": "Searcher (summons MacGiant) x1"
		},
		{
			"53": "Horseman x1, Beamer x2",
			"54": "Searcher (summons Horseman) x1, Machine x2",
			"89": "Horseman x1, Beamer x2",
			"99": "Horseman x1, Beamer x1, Machine x1",
			"143": "Searcher (summons MacGiant) x1"
		},
		{
			"24": "Horseman x1, Beamer x2",
			"53": "Searcher (summons Horseman) x1, Machine x2",
			"54": "Horseman x1, Beamer x2",
			"89": "Horseman x1, Beamer x1, Machine x1",
			"99": "Searcher (summons MacGiant) x1"
		},
		{
			"24": "Horseman x1, Beamer x2",
			"53": "Searcher (summons Horseman) x1, Machine x2",
			"54": "Horseman x1, Beamer x2",
			"89": "Horseman x1, Beamer x1, Machine x1",
			"99": "Searcher (summons MacGiant) x1"
		},
		{
			"24": "Horseman x1, Beamer x2",
			"53": "Machine x2, Beamer x2",
			"89": "Horseman x1, Beamer x2",
			"99": "Horseman x1, Beamer x1, Machine x1",
			"124": "Searcher (summons MacGiant) x1"
		},
		{
			"24": "Horseman x1, Beamer x2",
			"53": "Machine x2, Beamer x2",
			"68": "Horseman x1, Beamer x2",
			"99": "Horseman x1, Beamer x1, Machine x1",
			"124": "Horseman x2",
			"143": "Horseman x2",
			"232": "Searcher (summons MacGiant) x1"
		},
		{
			"24": "Horseman x1, Beamer x1, Machine x1",
			"53": "Machine x2, Beamer x2",
			"68": "Horseman x1, Beamer x2",
			"78": "Horseman x1, Beamer x1, Machine x1",
			"99": "MacGiant x1",
			"124": "Horseman x2",
			"232": "Searcher (summons MacGiant) x1"
		},
		{
			"24": "Horseman x1, Beamer x1, Machine x1",
			"28": "Machine x2, Beamer x2",
			"53": "Horseman x1, Beamer x2",
			"68": "Horseman x1, Beamer x1, Machine x1",
			"78": "MacGiant x1",
			"99": "MacGiant x1",
			"124": "Searcher (summons MacGiant) x1"
		},
		{
			"24": "Horseman x1, Beamer x1, Machine x1",
			"28": "Machine x2, Beamer x2",
			"30": "Horseman x1, Beamer x2",
			"68": "Horseman x1, Beamer x1, Machine x1",
			"78": "MacGiant x1",
			"99": "MacGiant x1",
			"124": "Searcher (summons MacGiant) x1"
		},
		{
			"24": "Horseman x1, Beamer x1, Machine x1",
			"28": "Machine x2, Beamer x2",
			"30": "Horseman x1, Beamer x2",
			"68": "Horseman x1, Beamer x1, Machine x1",
			"78": "MacGiant x1",
			"124": "Horseman x2",
			"232": "Searcher (summons MacGiant) x1"
		},
		{
			"24": "Horseman x1, Beamer x1, Machine x1",
			"28": "Machine x2, Beamer x2",
			"30": "Horseman x1, Beamer x2",
			"68": "Horseman x1, Beamer x1, Machine x1",
			"78": "MacGiant x1",
			"124": "Horseman x2",
			"178": "Searcher (summons MacGiant) x1"
		},
		{
			"28": "Horseman x1, Beamer x1, Machine x1",
			"30": "Machine x2, Beamer x2",
			"43": "Horseman x1, Beamer x2",
			"68": "Horseman x1, Beamer x1, Machine x1",
			"78": "MacGiant x1",
			"124": "Horseman x2",
			"178": "Searcher (summons MacGiant) x1"
		},
		{
			"28": "Horseman x1, Beamer x1, Machine x1",
			"30": "Machine x2, Beamer x2",
			"43": "Horseman x1, Beamer x2",
			"68": "Horseman x1, Beamer x1, Machine x1",
			"78": "MacGiant x1",
			"124": "Horseman x2",
			"153": "Searcher (summons MacGiant) x1"
		},
		{
			"28": "Horseman x1, Beamer x1, Machine x1",
			"30": "Machine x2, Beamer x2",
			"43": "Horseman x1, Beamer x2",
			"68": "Horseman x1, Beamer x1, Machine x1",
			"78": "MacGiant x1",
			"119": "Horseman x2",
			"153": "Searcher (summons MacGiant) x1"
		},
		{
			"28": "Horseman x1, Beamer x1, Machine x1",
			"30": "Machine x2, Beamer x2",
			"43": "Horseman x1, Beamer x2",
			"78": "Horseman x1, Beamer x1, Machine x1",
			"119": "Horseman x2",
			"153": "Horseman x2",
			"178": "Searcher (summons MacGiant) x1"
		},
		{
			"28": "Horseman x1, Beamer x1, Machine x1",
			"30": "Machine x2, Beamer x2",
			"43": "Horseman x1, Beamer x2",
			"72": "Horseman x1, Beamer x1, Machine x1",
			"119": "Horseman x2",
			"153": "Horseman x2",
			"178": "Searcher (summons MacGiant) x1"
		},
		{
			"30": "Horseman x1, Beamer x1, Machine x1",
			"43": "Machine x2, Beamer x2",
			"72": "Horseman x1, Beamer x2",
			"77": "Searcher (summons MacGiant) x1"
		},
		{
			"43": "Horseman x1, Beamer x1, Machine x1",
			"72": "Machine x2, Beamer x2",
			"77": "Horseman x1, Beamer x2",
			"119": "Searcher (summons MacGiant) x1"
		},
		{
			"43": "Horseman x1, Beamer x1, Machine x1",
			"72": "Machine x2, Beamer x2",
			"77": "Horseman x1, Beamer x1, Machine x1",
			"119": "Searcher (summons MacGiant) x1"
		},
		{
			"43": "Horseman x1, Beamer x1, Machine x1",
			"72": "Machine x2, Beamer x2",
			"77": "Horseman x1, Beamer x1, Machine x1",
			"119": "Searcher (summons MacGiant) x1"
		},
		{
			"48": "Horseman x1, Beamer x1, Machine x1",
			"72": "Machine x2, Beamer x2",
			"77": "Horseman x1, Beamer x1, Machine x1",
			"119": "Searcher (summons MacGiant) x1"
		},
		{
			"48": "Horseman x1, Beamer x1, Machine x1",
			"72": "Machine x2, Beamer x2",
			"77": "Horseman x1, Beamer x1, Machine x1",
			"118": "Searcher (summons MacGiant) x1"
		},
		{
			"48": "Horseman x1, Beamer x1, Machine x1",
			"72": "Machine x2, Beamer x2",
			"77": "Horseman x1, Beamer x1, Machine x1",
			"118": "Searcher (summons MacGiant) x1"
		},
		{
			"48": "Horseman x1, Beamer x1, Machine x1",
			"72": "Machine x2, Beamer x2",
			"77": "Horseman x1, Beamer x1, Machine x1",
			"118": "Searcher (summons MacGiant) x1"
		},
		{
			"48": "Horseman x1, Beamer x1, Machine x1",
			"77": "Machine x2, Beamer x2",
			"118": "Machine x2, Beamer x3",
			"127": "Searcher (summons MacGiant) x1"
		},
		{
			"48": "Horseman x1, Beamer x1, Machine x1",
			"118": "Searcher (summons Horseman) x1, Beamer x2",
			"127": "Machine x2, Beamer x3",
			"140": "Searcher (summons MacGiant) x1"
		},
		{
			"48": "Horseman x1, Beamer x1, Machine x1",
			"118": "Searcher (summons Horseman) x1, Beamer x2",
			"127": "Machine x2, Beamer x3",
			"140": "Searcher (summons MacGiant) x1"
		},
		{
			"48": "Horseman x1, Beamer x1, Machine x1",
			"118": "Searcher (summons Horseman) x1, Beamer x2",
			"140": "Machine x2, Beamer x3",
			"157": "Searcher (summons MacGiant) x1"
		},
		{
			"48": "Searcher (summons MacGiant) x1"
		},
		{
			"85": "Searcher (summons MacGiant) x1"
		},
		{
			"76": "Searcher (summons MacGiant) x1"
		},
		{
			"32": "Searcher (summons MacGiant) x1"
		},
		{
			"32": "Searcher (summons MacGiant) x1"
		},
		{
			"32": "Searcher (summons MacGiant) x1"
		},
		{
			"32": "Searcher (summons MacGiant) x1"
		},
		{
			"32": "Searcher (summons MacGiant) x1"
		},
		{
			"32": "Searcher (summons MacGiant) x1"
		},
		{
			"32": "Searcher (summons MacGiant) x1"
		},
		{
			"32": "Searcher (summons MacGiant) x1"
		},
		{
			"32": "Searcher (summons MacGiant) x1"
		},
		{
			"39": "Searcher (summons MacGiant) x1"
		},
		{
			"39": "Searcher (summons MacGiant) x1"
		},
		{
			"39": "Searcher (summons MacGiant) x1"
		},
		{
			"39": "Searcher (summons MacGiant) x1"
		},
		{
			"39": "MacGiant x1",
			"50": "Horseman x1, Beamer x2",
			"51": "Searcher (summons MacGiant) x1"
		},
		{
			"39": "MacGiant x1",
			"50": "Horseman x1, Beamer x2",
			"51": "Searcher (summons MacGiant) x1"
		},
		{
			"39": "MacGiant x1",
			"51": "Horseman x1, Beamer x2",
			"91": "Searcher (summons MacGiant) x1"
		},
		{
			"39": "MacGiant x1",
			"51": "Horseman x1, Beamer x1, Machine x1",
			"91": "Searcher (summons MacGiant) x1"
		},
		{
			"39": "MacGiant x1",
			"51": "Horseman x1, Beamer x1, Machine x1",
			"91": "Searcher (summons MacGiant) x1"
		},
		{
			"51": "MacGiant x1",
			"62": "Horseman x1, Beamer x1, Machine x1",
			"91": "Searcher (summons MacGiant) x1"
		},
		{
			"51": "MacGiant x1",
			"62": "Horseman x1, Beamer x1, Machine x1",
			"91": "Searcher (summons MacGiant) x1"
		},
		{
			"51": "MacGiant x1",
			"62": "Horseman x1, Beamer x1, Machine x1",
			"115": "Searcher (summons MacGiant) x1"
		},
		{
			"62": "MacGiant x1",
			"82": "Horseman x1, Beamer x1, Machine x1",
			"115": "Searcher (summons MacGiant) x1"
		},
		{
			"62": "MacGiant x1",
			"82": "Horseman x1, Beamer x1, Machine x1",
			"114": "Searcher (summons MacGiant) x1"
		},
		{
			"33": "MacGiant x1",
			"62": "Horseman x1, Beamer x1, Machine x1",
			"82": "Searcher (summons MacGiant) x1"
		},
		{
			"33": "MacGiant x1",
			"62": "Horseman x1, Beamer x1, Machine x1",
			"82": "MacGiant x1",
			"114": "MacGiant x1, Horseman x1",
			"116": "Horseman x1, Beamer x1, Machine x1",
			"136": "Horseman x1, Beamer x1, Machine x1",
			"218": "Horseman x1, Beamer x2",
			"235": "Searcher (summons MacGiant) x1"
		},
		{
			"33": "MacGiant x1",
			"62": "Horseman x1, Beamer x1, Machine x1",
			"82": "MacGiant x1",
			"114": "D.Machin x1",
			"116": "Horseman x1, Beamer x1, Machine x1",
			"136": "Horseman x1, Beamer x1, Machine x1",
			"218": "Horseman x1, Beamer x2",
			"226": "Searcher (summons MacGiant) x1"
		},
		{
			"33": "MacGiant x1",
			"62": "Horseman x1, Beamer x1, Machine x1",
			"82": "MacGiant x1",
			"114": "D.Machin x1",
			"116": "Horseman x1, Beamer x1, Machine x1",
			"136": "Horseman x1, Beamer x1, Machine x1",
			"166": "Horseman x1, Beamer x2",
			"218": "Searcher (summons MacGiant) x1"
		},
		{
			"33": "MacGiant x1",
			"82": "Horseman x1, Beamer x1, Machine x1",
			"114": "Horseman x2",
			"116": "Horseman x1, Beamer x2",
			"136": "Horseman x1, Beamer x1, Machine x1",
			"166": "Horseman x1, Beamer x1, Machine x1",
			"218": "Horseman x1, Beamer x2",
			"226": "Searcher (summons MacGiant) x1"
		},
		{
			"33": "MacGiant x1",
			"49": "Horseman x1, Beamer x1, Machine x1",
			"82": "MacGiant x1",
			"114": "Horseman x1, Beamer x2",
			"116": "Horseman x1, Beamer x1, Machine x1",
			"166": "Horseman x1, Beamer x1, Machine x1",
			"218": "Horseman x1, Beamer x2",
			"226": "Searcher (summons MacGiant) x1"
		},
		{
			"33": "MacGiant x1",
			"49": "Horseman x1, Beamer x1, Machine x1",
			"82": "MacGiant x1",
			"88": "Searcher (summons Horseman) x1, Machine x2",
			"114": "Horseman x1, Beamer x1, Machine x1",
			"166": "Horseman x1, Beamer x1, Machine x1",
			"218": "Horseman x1, Beamer x2",
			"226": "Searcher (summons MacGiant) x1"
		},
		{
			"33": "MacGiant x1",
			"49": "Horseman x1, Beamer x1, Machine x1",
			"59": "MacGiant x1",
			"88": "Searcher (summons Horseman) x1, Machine x2",
			"114": "Horseman x1, Beamer x1, Machine x1",
			"166": "Horseman x1, Beamer x1, Machine x1",
			"218": "Horseman x1, Beamer x2",
			"226": "Searcher (summons MacGiant) x1"
		},
		{
			"33": "MacGiant x1",
			"49": "Horseman x1, Beamer x1, Machine x1",
			"59": "MacGiant x1",
			"88": "Searcher (summons Horseman) x1, Machine x2",
			"166": "Horseman x1, Beamer x1, Machine x1"
		},
		{
			"49": "MacGiant x1"
		},
		{
			"49": "MacGiant x1"
		},
		{
			"23": "MacGiant x1"
		},
		{
			"23": "MacGiant x1"
		},
		{
			"23": "MacGiant x1"
		},
		{
			"23": "MacGiant x1, Horseman x1",
			"59": "Searcher (summons MacGiant) x1"
		},
		{
			"23": "MacGiant x1, Horseman x1",
			"59": "Searcher (summons MacGiant) x1"
		},
		{
			"23": "Searcher (summons Horseman) x1, Machine x2",
			"80": "Searcher (summons MacGiant) x1"
		},
		{
			"23": "Searcher (summons Horseman) x1, Machine x2",
			"80": "Searcher (summons MacGiant) x1"
		},
		{
			"23": "Searcher (summons Horseman) x1, Machine x2",
			"80": "Searcher (summons MacGiant) x1"
		},
		{
			"23": "Searcher (summons Horseman) x1, Machine x2",
			"46": "Searcher (summons MacGiant) x1"
		},
		{
			"46": "Searcher (summons Horseman) x1, Machine x2",
			"80": "Searcher (summons MacGiant) x1"
		},
		{
			"46": "Searcher (summons Horseman) x1, Machine x2",
			"80": "Searcher (summons MacGiant) x1"
		},
		{
			"46": "Searcher (summons Horseman) x1, Machine x2",
			"79": "Searcher (summons MacGiant) x1"
		},
		{
			"46": "Searcher (summons Horseman) x1, Machine x2",
			"79": "Searcher (summons MacGiant) x1"
		},
		{
			"46": "Searcher (summons Horseman) x1, Machine x2",
			"79": "Searcher (summons MacGiant) x1"
		},
		{
			"46": "Searcher (summons Horseman) x1, Machine x2",
			"79": "Searcher (summons MacGiant) x1"
		},
		{
			"46": "Searcher (summons Horseman) x1, Machine x2",
			"79": "Searcher (summons MacGiant) x1"
		},
		{
			"46": "Searcher (summons Horseman) x1, Machine x2",
			"71": "Searcher (summons MacGiant) x1"
		},
		{
			"71": "Searcher (summons Horseman) x1, Machine x2",
			"79": "Searcher (summons MacGiant) x1"
		},
		{
			"71": "Searcher (summons Horseman) x1, Machine x2",
			"79": "Searcher (summons MacGiant) x1"
		},
		{
			"71": "Searcher (summons Horseman) x1, Machine x2",
			"79": "MacGiant x1",
			"111": "Horseman x1, Beamer x2",
			"152": "Horseman x1, Beamer x1, Machine x1",
			"168": "Searcher (summons Horseman) x1, Beamer x2",
			"198": "Searcher (summons Horseman) x1, Beamer x2",
			"238": "Horseman x1, Beamer x1, Machine x1",
			"240": "MacGiant x1, Horseman x1",
			"281": "Searcher (summons MacGiant) x1"
		},
		{
			"71": "Searcher (summons Horseman) x1, Machine x2",
			"110": "Horseman x2",
			"111": "Horseman x1, Beamer x2",
			"152": "Horseman x1, Beamer x1, Machine x1",
			"168": "Searcher (summons Horseman) x1, Beamer x2",
			"198": "Searcher (summons Horseman) x1, Beamer x2",
			"238": "Horseman x1, Beamer x1, Machine x1",
			"240": "MacGiant x1, Horseman x1",
			"281": "Searcher (summons MacGiant) x1"
		},
		{
			"71": "Searcher (summons Horseman) x1, Machine x2",
			"110": "Horseman x2",
			"142": "Horseman x1, Beamer x2",
			"152": "Horseman x1, Beamer x1, Machine x1",
			"168": "Searcher (summons Horseman) x1, Beamer x2",
			"198": "Searcher (summons Horseman) x1, Beamer x2",
			"238": "Horseman x1, Beamer x1, Machine x1",
			"240": "D.Machin x1",
			"281": "Searcher (summons MacGiant) x1"
		},
		{
			"71": "Searcher (summons Horseman) x1, Machine x2",
			"110": "Horseman x2",
			"142": "Horseman x1, Beamer x2",
			"152": "Horseman x1, Beamer x1, Machine x1",
			"168": "Searcher (summons Horseman) x1, Beamer x2",
			"174": "Searcher (summons Horseman) x1, Beamer x2",
			"198": "Horseman x1, Beamer x1, Machine x1",
			"240": "D.Machin x1",
			"281": "Searcher (summons MacGiant) x1"
		},
		{
			"71": "Searcher (summons Horseman) x1, Machine x2",
			"107": "Horseman x2"
		},
		{
			"71": "Searcher (summons Horseman) x1, Machine x2",
			"107": "Horseman x2"
		},
		{
			"107": "Horseman x1, Beamer x2"
		},
		{
			"45": "Machine x2, Beamer x2"
		},
		{
			"45": "Machine x2, Beamer x2"
		},
		{
			"44": "Machine x2, Beamer x2"
		},
		{
			"44": "Machine x2, Beamer x2"
		},
		{
			"44": "Machine x2, Beamer x2"
		},
		{
			"44": "Machine x2, Beamer x2"
		},
		{
			"25": "Machine x2, Beamer x2"
		},
		{
			"25": "Machine x2, Beamer x2"
		},
		{
			"25": "Machine x2, Beamer x2"
		},
		{
			"25": "Machine x2, Beamer x2"
		},
		{
			"25": "Machine x2, Beamer x2"
		},
		{
			"25": "Machine x2, Beamer x2"
		},
		{
			"25": "Machine x2, Beamer x2"
		},
		{
			"25": "Machine x2, Beamer x2"
		},
		{
			"25": "Machine x2, Beamer x2"
		},
		{
			"75": "Machine x2, Beamer x2"
		},
		{
			"75": "Machine x2, Beamer x2"
		},
		{
			"75": "Machine x2, Beamer x2"
		},
		{
			"75": "Machine x2, Beamer x2"
		},
		{
			"75": "Machine x2, Beamer x2"
		},
		{
			"75": "Machine x2, Beamer x2"
		},
		{
			"75": "Machine x2, Beamer x2"
		},
		{
			"95": "Horseman x1, Beamer x2",
			"171": "Horseman x1, Beamer x2",
			"176": "Horseman x1, Beamer x1, Machine x1",
			"189": "Searcher (summons Horseman) x1, Beamer x2",
			"196": "Machine x2, Beamer x3",
			"204": "Machine x2, Beamer x3",
			"265": "Machine x2, Beamer x3",
			"277": "Horseman x1, Beamer x1, Machine x1",
			"297": "D.Machin x1",
			"319": "Machine x2, Beamer x3",
			"401": "Horseman x1, Beamer x2",
			"428": "Searcher (summons MacGiant) x1"
		},
		{
			"95": "Horseman x1, Beamer x2",
			"171": "Horseman x1, Beamer x2",
			"176": "Horseman x1, Beamer x1, Machine x1",
			"189": "Searcher (summons Horseman) x1, Beamer x2",
			"196": "Machine x2, Beamer x3",
			"204": "Searcher (summons MacGiant) x1"
		},
		{
			"42": "Horseman x1, Beamer x2",
			"95": "Searcher (summons Horseman) x1, Machine x2",
			"171": "Horseman x1, Beamer x1, Machine x1",
			"176": "Searcher (summons Horseman) x1, Beamer x2",
			"189": "Machine x2, Beamer x3",
			"204": "Searcher (summons MacGiant) x1"
		},
		{
			"42": "Horseman x1, Beamer x2",
			"95": "Searcher (summons Horseman) x1, Machine x2",
			"171": "Horseman x1, Beamer x1, Machine x1",
			"176": "Searcher (summons Horseman) x1, Beamer x2",
			"189": "Machine x2, Beamer x3",
			"204": "Searcher (summons MacGiant) x1"
		},
		{
			"42": "Horseman x1, Beamer x2",
			"95": "Searcher (summons Horseman) x1, Machine x2",
			"122": "Horseman x1, Beamer x1, Machine x1",
			"171": "Searcher (summons Horseman) x1, Beamer x2",
			"176": "Searcher (summons MacGiant) x1"
		},
		{
			"42": "Horseman x1, Beamer x2",
			"95": "Searcher (summons Horseman) x1, Machine x2",
			"122": "Horseman x1, Beamer x1, Machine x1",
			"165": "Searcher (summons Horseman) x1, Beamer x2",
			"171": "Searcher (summons MacGiant) x1"
		},
		{
			"42": "Horseman x1, Beamer x2",
			"95": "Searcher (summons Horseman) x1, Machine x2",
			"122": "Horseman x1, Beamer x1, Machine x1",
			"165": "Searcher (summons Horseman) x1, Beamer x2",
			"170": "Searcher (summons MacGiant) x1"
		},
		{
			"42": "Horseman x1, Beamer x2",
			"95": "Searcher (summons Horseman) x1, Machine x2",
			"122": "Horseman x1, Beamer x1, Machine x1",
			"165": "Searcher (summons Horseman) x1, Beamer x2",
			"170": "Searcher (summons MacGiant) x1"
		},
		{
			"42": "Horseman x1, Beamer x2",
			"122": "Horseman x1, Beamer x2",
			"165": "Horseman x1, Beamer x1, Machine x1",
			"170": "Searcher (summons Horseman) x1, Beamer x2",
			"176": "Searcher (summons MacGiant) x1"
		},
		{
			"42": "Horseman x1, Beamer x2",
			"122": "Horseman x1, Beamer x2",
			"165": "Horseman x1, Beamer x1, Machine x1",
			"170": "Machine x2, Beamer x3",
			"202": "Searcher (summons MacGiant) x1"
		},
		{
			"41": "Horseman x1, Beamer x2",
			"42": "Searcher (summons Horseman) x1, Machine x2",
			"122": "Horseman x1, Beamer x1, Machine x1",
			"165": "Machine x2, Beamer x3",
			"170": "Searcher (summons MacGiant) x1"
		},
		{
			"41": "Horseman x1, Beamer x2",
			"122": "Horseman x1, Beamer x2",
			"165": "Searcher (summons Horseman) x1, Beamer x2",
			"170": "Machine x2, Beamer x3",
			"187": "Searcher (summons MacGiant) x1"
		},
		{
			"41": "Horseman x1, Beamer x2",
			"122": "Horseman x1, Beamer x2",
			"165": "Searcher (summons Horseman) x1, Beamer x2",
			"170": "Machine x2, Beamer x3",
			"187": "Searcher (summons MacGiant) x1"
		},
		{
			"41": "Horseman x1, Beamer x2",
			"165": "Horseman x1, Beamer x2",
			"170": "Searcher (summons Horseman) x1, Beamer x2",
			"187": "Machine x2, Beamer x3",
			"202": "Searcher (summons MacGiant) x1"
		},
		{
			"41": "Horseman x1, Beamer x2",
			"145": "Horseman x1, Beamer x2",
			"170": "Searcher (summons Horseman) x1, Beamer x2",
			"187": "Machine x2, Beamer x3",
			"202": "Searcher (summons MacGiant) x1"
		},
		{
			"41": "Horseman x1, Beamer x2",
			"145": "Horseman x1, Beamer x2",
			"172": "Searcher (summons Horseman) x1, Beamer x2",
			"187": "Machine x2, Beamer x3",
			"202": "Searcher (summons MacGiant) x1"
		},
		{
			"41": "Horseman x1, Beamer x2",
			"145": "Horseman x1, Beamer x2",
			"172": "Searcher (summons Horseman) x1, Beamer x2",
			"187": "Machine x2, Beamer x3",
			"233": "Searcher (summons MacGiant) x1"
		},
		{
			"41": "Horseman x1, Beamer x2",
			"63": "Searcher (summons Horseman) x1, Machine x2",
			"145": "Searcher (summons Horseman) x1, Beamer x2",
			"172": "Machine x2, Beamer x3",
			"187": "Searcher (summons MacGiant) x1"
		},
		{
			"40": "Horseman x1, Beamer x2",
			"41": "Searcher (summons Horseman) x1, Machine x2",
			"63": "Horseman x1, Beamer x2",
			"145": "Machine x2, Beamer x3",
			"172": "Searcher (summons MacGiant) x1"
		},
		{
			"40": "Horseman x1, Beamer x2",
			"63": "Machine x2, Beamer x2",
			"145": "Searcher (summons Horseman) x1, Beamer x2",
			"172": "Machine x2, Beamer x3",
			"187": "Searcher (summons MacGiant) x1"
		},
		{
			"40": "Horseman x1, Beamer x2",
			"63": "Machine x2, Beamer x2",
			"104": "Searcher (summons Horseman) x1, Beamer x2",
			"145": "Machine x2, Beamer x3",
			"172": "Horseman x2",
			"191": "Horseman x2",
			"233": "Searcher (summons MacGiant) x1"
		},
		{
			"40": "Horseman x1, Beamer x1, Machine x1",
			"63": "Machine x2, Beamer x2",
			"104": "Searcher (summons Horseman) x1, Beamer x2",
			"145": "Machine x2, Beamer x3",
			"172": "Horseman x2",
			"191": "Horseman x2",
			"233": "Searcher (summons MacGiant) x1"
		},
		{
			"40": "Horseman x1, Beamer x1, Machine x1",
			"63": "Machine x2, Beamer x2",
			"104": "Searcher (summons Horseman) x1, Beamer x2",
			"145": "Machine x2, Beamer x3",
			"172": "Horseman x2",
			"191": "Horseman x2",
			"214": "Searcher (summons MacGiant) x1"
		},
		{
			"40": "Horseman x1, Beamer x1, Machine x1",
			"63": "Machine x2, Beamer x2",
			"104": "Searcher (summons Horseman) x1, Beamer x2",
			"172": "Machine x2, Beamer x3",
			"184": "Horseman x2",
			"191": "Horseman x2",
			"214": "Searcher (summons MacGiant) x1"
		},
		{
			"40": "Horseman x1, Beamer x1, Machine x1",
			"63": "Machine x2, Beamer x2",
			"104": "Searcher (summons Horseman) x1, Beamer x2",
			"106": "Machine x2, Beamer x3",
			"184": "Horseman x2",
			"191": "Horseman x2",
			"214": "Searcher (summons MacGiant) x1"
		},
		{
			"40": "Horseman x1, Beamer x1, Machine x1",
			"63": "Machine x2, Beamer x2",
			"104": "Searcher (summons Horseman) x1, Beamer x2",
			"106": "Machine x2, Beamer x3",
			"156": "Horseman x2",
			"184": "Horseman x2",
			"191": "Searcher (summons MacGiant) x1"
		},
		{
			"40": "Horseman x1, Beamer x1, Machine x1",
			"104": "Horseman x1, Beamer x1, Machine x1",
			"106": "Searcher (summons Horseman) x1, Beamer x2",
			"156": "Machine x2, Beamer x3",
			"184": "Horseman x2",
			"191": "Horseman x2",
			"214": "Searcher (summons MacGiant) x1"
		},
		{
			"104": "Machine x2, Beamer x3",
			"106": "Horseman x1, Beamer x1, Machine x1",
			"156": "Searcher (summons Horseman) x1, Beamer x2",
			"184": "Machine x2, Beamer x3",
			"191": "Horseman x2",
			"214": "Horseman x2",
			"221": "Searcher (summons MacGiant) x1"
		},
		{
			"103": "Horseman x1, Beamer x1, Machine x1",
			"104": "Horseman x1, Beamer x1, Machine x1",
			"106": "Searcher (summons Horseman) x1, Beamer x2",
			"156": "Machine x2, Beamer x3",
			"184": "Horseman x2",
			"214": "Horseman x2",
			"221": "Searcher (summons MacGiant) x1"
		},
		{
			"103": "Horseman x1, Beamer x1, Machine x1",
			"106": "Horseman x1, Beamer x1, Machine x1",
			"135": "Searcher (summons Horseman) x1, Beamer x2",
			"156": "Machine x2, Beamer x3",
			"184": "Horseman x2",
			"214": "Horseman x2",
			"221": "Searcher (summons MacGiant) x1"
		},
		{
			"103": "Horseman x1, Beamer x1, Machine x1",
			"106": "Horseman x1, Beamer x1, Machine x1",
			"109": "Searcher (summons Horseman) x1, Beamer x2",
			"135": "Machine x2, Beamer x3",
			"156": "Horseman x2",
			"184": "Horseman x2",
			"214": "Searcher (summons MacGiant) x1"
		},
		{
			"103": "Horseman x1, Beamer x1, Machine x1",
			"106": "Horseman x1, Beamer x1, Machine x1",
			"109": "Searcher (summons Horseman) x1, Beamer x2",
			"135": "Searcher (summons MacGiant) x1"
		},
		{
			"103": "Horseman x1, Beamer x1, Machine x1",
			"106": "Horseman x1, Beamer x1, Machine x1",
			"109": "Searcher (summons Horseman) x1, Beamer x2",
			"135": "Searcher (summons MacGiant) x1"
		},
		{
			"103": "Horseman x1, Beamer x1, Machine x1",
			"109": "Horseman x1, Beamer x1, Machine x1",
			"135": "Machine x2, Beamer x3",
			"151": "Searcher (summons MacGiant) x1"
		},
		{
			"38": "Horseman x1, Beamer x1, Machine x1",
			"103": "Machine x2, Beamer x2",
			"109": "Machine x2, Beamer x3",
			"135": "Searcher (summons MacGiant) x1"
		},
		{
			"38": "Horseman x1, Beamer x1, Machine x1",
			"70": "Machine x2, Beamer x2",
			"103": "Horseman x1, Beamer x1, Machine x1",
			"109": "Searcher (summons MacGiant) x1"
		},
		{
			"38": "Horseman x1, Beamer x1, Machine x1",
			"70": "Machine x2, Beamer x2",
			"103": "Horseman x1, Beamer x1, Machine x1",
			"109": "Searcher (summons MacGiant) x1"
		},
		{
			"38": "Horseman x1, Beamer x1, Machine x1",
			"70": "Machine x2, Beamer x2",
			"109": "Machine x2, Beamer x3",
			"134": "Searcher (summons MacGiant) x1"
		},
		{
			"38": "Horseman x1, Beamer x1, Machine x1",
			"70": "Machine x2, Beamer x2",
			"109": "Machine x2, Beamer x3",
			"134": "Searcher (summons MacGiant) x1"
		},
		{
			"38": "Horseman x1, Beamer x1, Machine x1",
			"70": "Machine x2, Beamer x2",
			"134": "Machine x2, Beamer x3",
			"151": "Searcher (summons MacGiant) x1"
		},
		{
			"38": "Horseman x1, Beamer x1, Machine x1",
			"70": "Horseman x1, Beamer x2",
			"84": "Horseman x1, Beamer x1, Machine x1",
			"134": "Searcher (summons MacGiant) x1"
		},
		{
			"38": "Horseman x1, Beamer x1, Machine x1",
			"70": "Horseman x1, Beamer x2",
			"84": "Horseman x1, Beamer x1, Machine x1",
			"134": "Searcher (summons MacGiant) x1"
		},
		{
			"38": "Horseman x1, Beamer x1, Machine x1",
			"70": "Horseman x1, Beamer x2",
			"84": "Horseman x1, Beamer x1, Machine x1",
			"134": "Searcher (summons MacGiant) x1"
		},
		{
			"22": "Searcher (summons MacGiant) x1"
		},
		{
			"22": "Searcher (summons MacGiant) x1"
		},
		{
			"22": "Searcher (summons MacGiant) x1"
		},
		{
			"22": "Searcher (summons MacGiant) x1"
		},
		{
			"22": "Searcher (summons MacGiant) x1"
		},
		{
			"22": "Searcher (summons MacGiant) x1"
		},
		{
			"22": "Searcher (summons MacGiant) x1"
		},
		{
			"22": "Searcher (summons MacGiant) x1"
		},
		{
			"22": "Searcher (summons MacGiant) x1"
		},
		{
			"36": "Searcher (summons MacGiant) x1"
		},
		{
			"36": "Searcher (summons MacGiant) x1"
		},
		{
			"36": "Searcher (summons MacGiant) x1"
		},
		{
			"36": "Searcher (summons MacGiant) x1"
		},
		{
			"36": "Searcher (summons MacGiant) x1"
		},
		{
			"36": "Searcher (summons MacGiant) x1"
		},
		{
			"36": "Searcher (summons MacGiant) x1"
		},
		{
			"55": "MacGiant x1",
			"100": "Horseman x1, Beamer x2",
			"128": "Searcher (summons MacGiant) x1"
		},
		{
			"55": "MacGiant x1",
			"100": "Horseman x1, Beamer x2",
			"131": "Searcher (summons MacGiant) x1"
		},
		{
			"55": "MacGiant x1",
			"131": "Searcher (summons Horseman) x1, Beamer x2",
			"132": "Searcher (summons MacGiant) x1"
		},
		{
			"55": "MacGiant x1",
			"131": "Machine x2, Beamer x3",
			"137": "Searcher (summons MacGiant) x1"
		},
		{
			"55": "MacGiant x1",
			"131": "Machine x2, Beamer x3",
			"137": "Searcher (summons MacGiant) x1"
		},
		{
			"131": "Horseman x2",
			"137": "Machine x2, Beamer x3",
			"150": "Searcher (summons MacGiant) x1"
		},
		{
			"131": "Horseman x2",
			"137": "Machine x2, Beamer x3",
			"150": "Searcher (summons MacGiant) x1"
		},
		{
			"34": "MacGiant x1",
			"131": "Machine x2, Beamer x3",
			"137": "Searcher (summons MacGiant) x1"
		},
		{
			"34": "MacGiant x1",
			"66": "Horseman x1, Beamer x1, Machine x1",
			"131": "Searcher (summons MacGiant) x1"
		},
		{
			"34": "MacGiant x1",
			"66": "Horseman x1, Beamer x1, Machine x1",
			"98": "Searcher (summons MacGiant) x1"
		},
		{
			"34": "MacGiant x1",
			"66": "Horseman x1, Beamer x1, Machine x1",
			"98": "Searcher (summons MacGiant) x1"
		},
		{
			"34": "MacGiant x1",
			"66": "Horseman x1, Beamer x1, Machine x1",
			"98": "MacGiant x1",
			"113": "MacGiant x1, Horseman x1",
			"150": "Horseman x1, Beamer x1, Machine x1",
			"162": "Horseman x1, Beamer x1, Machine x1",
			"163": "Horseman x1, Beamer x2",
			"227": "Searcher (summons MacGiant) x1"
		},
		{
			"34": "MacGiant x1",
			"66": "Horseman x1, Beamer x1, Machine x1",
			"98": "MacGiant x1",
			"113": "D.Machin x1",
			"150": "Horseman x1, Beamer x1, Machine x1",
			"162": "Horseman x1, Beamer x1, Machine x1",
			"194": "Horseman x1, Beamer x2",
			"227": "Searcher (summons MacGiant) x1"
		},
		{
			"34": "MacGiant x1",
			"66": "Horseman x1, Beamer x1, Machine x1",
			"98": "MacGiant x1",
			"113": "D.Machin x1",
			"162": "Horseman x1, Beamer x1, Machine x1",
			"194": "Horseman x1, Beamer x1, Machine x1",
			"210": "Horseman x1, Beamer x2",
			"227": "Searcher (summons MacGiant) x1"
		},
		{
			"34": "MacGiant x1",
			"57": "Horseman x1, Beamer x1, Machine x1",
			"66": "MacGiant x1",
			"98": "Searcher (summons Horseman) x1, Machine x2",
			"113": "Horseman x1, Beamer x1, Machine x1",
			"162": "Horseman x1, Beamer x1, Machine x1",
			"194": "Horseman x1, Beamer x2",
			"210": "Searcher (summons MacGiant) x1"
		},
		{
			"34": "MacGiant x1",
			"57": "Horseman x1, Beamer x1, Machine x1",
			"66": "MacGiant x1",
			"98": "Searcher (summons Horseman) x1, Machine x2",
			"113": "Horseman x1, Beamer x1, Machine x1",
			"162": "Horseman x1, Beamer x1, Machine x1",
			"179": "Horseman x1, Beamer x2",
			"194": "Searcher (summons MacGiant) x1"
		},
		{
			"57": "MacGiant x1"
		},
		{
			"57": "MacGiant x1"
		},
		{
			"57": "MacGiant x1"
		},
		{
			"57": "MacGiant x1"
		},
		{
			"57": "MacGiant x1"
		},
		{
			"57": "MacGiant x1"
		},
		{
			"57": "MacGiant x1"
		},
		{
			"65": "MacGiant x1"
		},
		{
			"65": "MacGiant x1, Horseman x1",
			"97": "Searcher (summons MacGiant) x1"
		},
		{
			"37": "MacGiant x1, Horseman x1",
			"97": "Searcher (summons MacGiant) x1"
		},
		{
			"37": "Searcher (summons Horseman) x1, Machine x2",
			"97": "Searcher (summons MacGiant) x1"
		},
		{
			"37": "Searcher (summons Horseman) x1, Machine x2",
			"97": "Searcher (summons MacGiant) x1"
		},
		{
			"37": "Searcher (summons Horseman) x1, Machine x2",
			"97": "Searcher (summons MacGiant) x1"
		}
	];

	var _mapData = {};

	_mapData.giant_save_stomach = [
		{
			"map": "30BA-0",
			"maxStep": 59,
			"origin": [0, 0],
			"stepRange": [1, 59]
		},
		{
			"map": "30B9-0",
			"maxStep": 108,
			"origin": [0, 0],
			"stepRange": [60, 108]
		},
		{
			"map": "30B7-0",
			"maxStep": 512,
			"origin": [0, 0],
			"stepRange": [109, 512]
		}
	];

	_mapData.giant_mouth_chest = [
		{
			"map": "30B5-0",
			"maxStep": 19,
			"origin": [0, 0],
			"stepRange": [1, 19]
		},
		{
			"map": "30B6-0",
			"maxStep": 21,
			"origin": [0, 0],
			"stepRange": [20, 21]
		},
		{
			"map": "30B7-0",
			"maxStep": 103,
			"origin": [0, 0],
			"stepRange": [22, 103]
		},
		{
			"map": "30B9-0",
			"maxStep": 512,
			"origin": [0, 0],
			"stepRange": [104, 256]
		}
	];

	var _stepData = {};

	_stepData.giant_save_stomach = {
		1: [15, 15],
		2: [16, 15],
		3: [17, 15],
		4: [18, 15],
		5: [19, 15],
		6: [20, 15],
		7: [21, 15],
		8: [22, 15],
		9: [23, 15],
		10: [24, 15],
		11: [25, 15],
		12: [25, 16],
		13: [25, 17],
		14: [25, 18],
		15: [25, 23],
		16: [24, 23],
		17: [24, 24],
		18: [24, 25],
		19: [24, 26],
		20: [23, 26],
		21: [22, 26],
		22: [21, 26],
		23: [20, 26],
		24: [19, 26],
		25: [18, 26],
		26: [17, 26],
		27: [16, 26],
		28: [16, 25],
		29: [15, 25],
		30: [14, 25],
		31: [13, 25],
		32: [12, 25],
		33: [11, 25],
		34: [10, 25],
		35: [10, 26],
		36: [9, 26],
		37: [8, 26],
		38: [7, 26],
		39: [6, 26],
		40: [5, 26],
		41: [5, 25],
		42: [5, 24],
		43: [4, 24],
		44: [4, 23],
		45: [3, 23],
		46: [3, 22],
		47: [3, 21],
		48: [3, 20],
		49: [3, 19],
		50: [3, 17],
		51: [3, 16],
		52: [3, 15],
		53: [3, 13],
		54: [3, 12],
		55: [3, 11],
		56: [3, 9],
		57: [3, 8],
		58: [3, 6],
		59: [3, 5],
		60: [3, 5],
		61: [3, 6],
		62: [3, 7],
		63: [4, 7],
		64: [5, 7],
		65: [6, 7],
		66: [6, 8],
		67: [6, 9],
		68: [6, 10],
		69: [7, 10],
		70: [8, 10],
		71: [9, 10],
		72: [10, 10],
		73: [11, 10],
		74: [12, 10],
		75: [13, 10],
		76: [13, 9],
		77: [13, 8],
		78: [13, 7],
		79: [14, 7],
		80: [15, 7],
		81: [15, 6],
		82: [15, 5],
		83: [16, 5],
		84: [17, 5],
		85: [18, 5],
		86: [19, 5],
		87: [20, 5],
		88: [21, 5],
		89: [22, 5],
		90: [22, 6],
		91: [22, 7],
		92: [22, 8],
		93: [23, 8],
		94: [23, 9],
		95: [23, 10],
		96: [23, 11],
		97: [23, 14],
		98: [23, 15],
		99: [23, 16],
		100: [23, 17],
		101: [23, 18],
		102: [23, 19],
		103: [22, 19],
		104: [21, 19],
		105: [20, 19],
		106: [19, 19],
		107: [18, 19],
		108: [17, 19],
		109: [19, 9],
		110: [19, 10],
		111: [19, 14],
		112: [19, 15],
		113: [20, 15],
		114: [21, 15],
		115: [22, 15],
		116: [23, 15],
		117: [23, 19],
		118: [24, 19],
		119: [24, 20],
		120: [24, 21],
		121: [24, 22],
		122: [24, 23],
		123: [24, 24],
		124: [24, 25],
		125: [24, 26],
		126: [23, 26],
		127: [22, 26],
		128: [21, 26],
		129: [20, 26],
		130: [19, 26],
		131: [18, 26],
		132: [17, 26],
		133: [17, 25],
		134: [16, 25],
		135: [15, 25],
		136: [14, 25],
		137: [14, 21],
		138: [13, 21],
		139: [12, 21],
		140: [11, 21],
		141: [10, 21],
		142: [9, 21],
		143: [9, 22],
		144: [9, 23],
		145: [9, 24],
		146: [9, 25],
		147: [9, 26],
		148: [8, 26],
		149: [7, 26],
		150: [6, 26],
		151: [5, 26],
		152: [4, 26],
		153: [4, 25],
		154: [4, 24],
		155: [4, 23],
		156: [4, 22],
		157: [4, 21],
		158: [4, 20],
		159: [3, 20],
		160: [3, 19],
		161: [2, 19],
		162: [2, 18],
		163: [2, 17],
		164: [2, 16],
		165: [2, 15],
		166: [2, 14],
		167: [2, 13],
		168: [2, 12],
		169: [2, 11],
		170: [3, 11],
		171: [4, 11],
		172: [5, 11],
		173: [5, 12],
		174: [5, 13],
		175: [5, 14],
		176: [5, 15],
		177: [6, 15],
		178: [6, 16],
		179: [7, 16],
		180: [8, 16],
		181: [9, 16],
		182: [9, 15],
		183: [9, 14],
		184: [9, 10],
		185: [10, 10],
		186: [11, 10],
		187: [12, 10],
		188: [13, 10],
		189: [13, 9],
		190: [13, 8],
		191: [14, 5]
	};

	_stepData.giant_mouth_chest = {
		1: [9, 19],
		2: [9, 18],
		3: [9, 17],
		4: [9, 16],
		5: [9, 13],
		6: [9, 12],
		7: [9, 11],
		8: [9, 10],
		9: [10, 10],
		10: [11, 10],
		11: [11, 9],
		12: [12, 9],
		13: [12, 8],
		14: [12, 7],
		15: [12, 6],
		16: [11, 6],
		17: [11, 5],
		18: [10, 5],
		19: [9, 5],
		20: [7, 5],
		21: [7, 6],
		22: [14, 4],
		23: [14, 5],
		24: [14, 9],
		25: [13, 9],
		26: [13, 10],
		27: [12, 10],
		28: [11, 10],
		29: [10, 10],
		30: [9, 10],
		31: [9, 14],
		32: [9, 15],
		33: [9, 16],
		34: [8, 16],
		35: [7, 16],
		36: [6, 16],
		37: [6, 15],
		38: [5, 15],
		39: [5, 14],
		40: [5, 13],
		41: [5, 12],
		42: [5, 11],
		43: [4, 11],
		44: [3, 11],
		45: [2, 11],
		46: [2, 12],
		47: [2, 13],
		48: [2, 14],
		49: [2, 15],
		50: [2, 16],
		51: [2, 17],
		52: [2, 18],
		53: [2, 19],
		54: [3, 19],
		55: [3, 20],
		56: [3, 21],
		57: [3, 22],
		58: [4, 22],
		59: [5, 22],
		60: [5, 23],
		61: [5, 24],
		62: [5, 25],
		63: [6, 25],
		64: [7, 25],
		65: [8, 25],
		66: [9, 25],
		67: [9, 24],
		68: [9, 23],
		69: [9, 22],
		70: [9, 21],
		71: [10, 21],
		72: [11, 21],
		73: [12, 21],
		74: [13, 21],
		75: [14, 21],
		76: [14, 25],
		77: [15, 25],
		78: [16, 25],
		79: [17, 25],
		80: [17, 26],
		81: [18, 26],
		82: [19, 26],
		83: [20, 26],
		84: [21, 26],
		85: [22, 26],
		86: [23, 26],
		87: [24, 26],
		88: [24, 25],
		89: [24, 24],
		90: [24, 23],
		91: [24, 22],
		92: [24, 21],
		93: [24, 20],
		94: [24, 19],
		95: [24, 18],
		96: [23, 15],
		97: [22, 15],
		98: [21, 15],
		99: [20, 15],
		100: [19, 15],
		101: [19, 14],
		102: [19, 10],
		103: [19, 9],
		104: [18, 20],
		105: [19, 20],
		106: [20, 20],
		107: [21, 20],
		108: [22, 20],
		109: [22, 19],
		110: [23, 19],
		111: [23, 18],
		112: [23, 17],
		113: [23, 16],
		114: [23, 15],
		115: [23, 14],
		116: [23, 11],
		117: [23, 10],
		118: [23, 9],
		119: [23, 8],
		120: [23, 7],
		121: [23, 6],
		122: [22, 6],
		123: [21, 6],
		124: [21, 5],
		125: [20, 5],
		126: [19, 5],
		127: [18, 5],
		128: [17, 5],
		129: [16, 5],
		130: [15, 5],
		131: [14, 5],
		132: [14, 6],
		133: [14, 7],
		134: [14, 8],
		135: [13, 8],
		136: [12, 8],
		137: [11, 8],
		138: [11, 9],
		139: [11, 10],
		140: [10, 10],
		141: [9, 10],
		142: [8, 10],
		143: [7, 10],
		144: [6, 10],
		145: [5, 10],
		146: [5, 9],
		147: [5, 8],
		148: [5, 7],
		149: [5, 6],
		150: [4, 6],
		151: [3, 6],
		152: [3, 5]
	};

	let routeMapSets = {
		"fe-macgiant-overworld": "giant_mouth_chest",
		"fe-macgiant-save-point": "giant_save_stomach"
	};

	let grindFightNames = {
		"fe-macgiant-overworld": "Searcher (summons MacGiant) x1",
		"fe-macgiant-save-point": "Searcher (summons MacGiant) x1"
	};

	let descriptions = {
		"fe-macgiant-overworld": "<p>Ensure encounters are off and save and reset immediately before boarding the Big Whale. Upon entering the Giant of Bab-il, ensure you walk directly across the stairs to avoid taking one fewer steps. (Skipping that step does not help in this case.) Once you reach the third map (labeled <em>Chest</em>), turn on encounters and begin tracking your encounters.</p><p>This version of the grind assumes that you intend to continue deeper into the Giant to check out the bosses, and is optimized as such. If you simply want to grind and get out, you can count your steps in place instead. However, do note that any encounter that occurs on step 104 or later may have a different formation than listed. (The encounter set does change between the <em>Chest</em> and <em>Stomach</em>, but the MacGiant grind is in the same location on both maps.</p><p>Not including any time you spend in the grind fight, on average, you will find the grind and make it to the end of the <em>Stomach</em> in about 111 seconds. The fastest possible is 65 seconds, and there is a 2.5% chance of taking longer than 233 seconds.</p>",
		"fe-macgiant-save-point": "<p>Ensure encounters are off and save and reset at the save point in the Giant of Bab-Il Passage. Walk to the second map (labeled as <i>Stomach</i>), turn on encounters and begin tracking your encounters.</p><p>This version of the grind assumes (primarily to simplify the maps) that you intend to continue to the entrance of the Giant after the grind. If you want to take on the Giant bosses after the grind, you can count your steps in place instead. However, do note that any encounter that occurs on step 109 or later may have a different formation than listed. (The encounter set does change between the <em>Chest</em> and <em>Stomach</em>, but the MacGiant grind is in the same location on both maps.</p><p>Not including any time you spend in the grind fight, on average, you will find the grind and make it to the beginning of the <em>Chest</em> in about 72 seconds. The fastest possible is 36 seconds, and there is a 2.5% chance of taking longer than 142 seconds. If you were only coming to the Giant for the grind, the activation of the Giant and initial trip to the save point costs you an additional 71 seconds.</p>"
	};

	/*
     * Global Variables
     */

	var currentMapSet = "giant_mouth_chest";
	var currentMapIndex = 0;
	var selectedSteps = new Set([]);
	var possibleNextSteps = new Set([]);
	var possibleSeeds = new Set([]);
	var setEncounters = {};

	/*
     * Functions
     */

	var onMapClick = function(e) {
		var mapData = getData(_mapData);
		var x = Math.floor(e.offsetX / 16) + mapData[currentMapIndex].origin[0];
		var y = Math.floor(e.offsetY / 16) + mapData[currentMapIndex].origin[1];
		var step = getStep(x, y);

		if (step > 0) {
			if (!selectedSteps.has(step) && possibleNextSteps.has(step)) {
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
		possibleNextSteps = new Set([]);
		setEncounters = {};

		updateDisplay();
	};

	var init = function() {
		var canvas = document.getElementById("map");
		canvas.addEventListener("click", onMapClick);

		var previous = document.getElementById("button-image-previous");
		previous.addEventListener("click", onPreviousImageClick);

		var next = document.getElementById("button-image-next");
		next.addEventListener("click", onNextImageClick);

		var reset = document.getElementById("button-reset");
		reset.addEventListener("click", onResetClick);

		var select = document.getElementById("route-select");
		select.addEventListener("change", onRouteChange);

		var route = document.getElementById("route-select").value;
		currentMapSet = routeMapSets[route];

		updateDisplay();
	};

	var drawStep = function(step, ctx, boxStyle, textStyle) {
		var mapData = getData(_mapData);
		var stepData = getData(_stepData);
		var x = stepData[step][0] - mapData[currentMapIndex].origin[0];
		var y = stepData[step][1] - mapData[currentMapIndex].origin[1];

		ctx.beginPath();
		ctx.fillStyle = "rgba(0, 0, 0, 0.4)";
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
			ctx.fillText(step, x * 16 + 7.5, y * 16 + 8, 14);
		}
	};

	var drawMap = function() {
		var mapData = getData(_mapData)[currentMapIndex];
		var stepData = getData(_stepData);
		var canvas = document.getElementById("map");
		var ctx = canvas.getContext("2d");

		var img = new Image();

		img.onload = function() {
			ctx.drawImage(img, mapData.origin[0] * 16, mapData.origin[1] * 16, 32 * 16, 32 * 16, 0, 0, 32 * 16, 32 * 16);

			var offScreenCanvas = document.createElement("canvas");
			offScreenCanvas.width = canvas.width;
			offScreenCanvas.height = canvas.height;
			var offScreenCtx = offScreenCanvas.getContext("2d");

			Object.entries(stepData).forEach(
				([step, [,]]) => {
					if (parseInt(step) >= mapData.stepRange[0] && parseInt(step) <= mapData.stepRange[1]) {
						if (possibleNextSteps.has(parseInt(step))) {
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

		img.src = "/static/img/maps/composite/" + mapData.map + ".png";
	};

	var getData = function(x) {
		var route = document.getElementById("route-select").value;
		return x[routeMapSets[route]];
	};

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
	};

	var onEncounterClick = function(e) {
		let tokens = this.id.split("-");
		setEncounter(parseInt(tokens[1]), tokens[2]);
		e.preventDefault();
	};

	var onPreviousImageClick = function() {
		if (currentMapIndex > 0) {
			currentMapIndex -= 1;
		}

		updateDisplay();
	};

	var onNextImageClick = function() {
		var mapData = getData(_mapData);
		if (currentMapIndex < mapData.length - 1) {
			currentMapIndex += 1;
		}

		updateDisplay();
	};

	var onResetClick = function() {
		reset();
	};

	var onRouteChange = function() {
		var route = document.getElementById("route-select").value;

		if (routeMapSets[route] != currentMapSet) {
			currentMapSet = routeMapSets[route];
			reset();
		} else {
			updateDisplay();
		}
	};

	var updateProbabilities = function() {
		var route = document.getElementById("route-select").value;
		var encounterData = getData(_encounterData);
		var e = document.getElementById("probabilities");
		e.innerHTML = "<h3>Possibilities</h3>";

		let possible = {};
		let steps = {};
		let reset = 0;
		let total = 0;

		for (var seed of possibleSeeds) {
			let seedData = [];
			let maxStep = 0;

			for (let step in encounterData[seed]) {
				seedData.push({step: step, encounter: encounterData[seed][step]});
				maxStep = Math.max(step, maxStep);
			}

			var lastEncounter = seedData[seedData.length - 1];

			if (lastEncounter.encounter == grindFightNames[route]) {
				if (!(seedData.length in possible)) {
					possible[seedData.length] = 0;
					steps[seedData.length] = new Set();
				}
				possible[seedData.length]++;
				total++;
				steps[seedData.length].add(maxStep);
			} else {
				reset++;
				total++;
			}
		}

		var list = document.createElement("ul");

		Object.keys(possible).sort((n1, n2) => n1 - n2).forEach(function(encounter,) {
			var item = document.createElement("li");
			var stepText = " on step ";

			if (steps[encounter].size < 4) {
				stepText = stepText + Array.from(steps[encounter]).sort((n1, n2) => n1 - n2).join(" or ");
			} else {
				stepText = " on many possible steps";
			}

			item.innerHTML = "Encounter " + encounter + stepText + " (" + (possible[encounter] * 100 / total).toFixed(2) + "%)";
			list.appendChild(item);
		});

		if (reset > 0) {
			var item = document.createElement("li");
			item.innerHTML = '<span style="color: brown;">Reset (' + (reset * 100 / total).toFixed(2) + "%)</span>";
			list.appendChild(item);
		}

		e.appendChild(list);
	};



	var updateEncounters = function() {
		var route = document.getElementById("route-select").value;
		var encounterData = getData(_encounterData);
		var mapData = getData(_mapData);
		var e = document.getElementById("encounters");
		e.innerHTML = "<h3>Encounters</h3>";
		let noEncounters = true;

		for (var step of selectedSteps) {
			if (step < mapData[currentMapIndex].stepRange[0] || step > mapData[currentMapIndex].stepRange[1]) {
				continue;
			}

			noEncounters = false;

			var header = document.createElement("h4");
			header.innerHTML = "Step " + step;
			e.appendChild(header);

			var badFormations = {};
			var formations = new Set([]);

			for (var seed of possibleSeeds) {
				let formation = encounterData[seed][step];
				let maxStep = Math.max.apply(null, Object.keys(encounterData[seed]));

				if (!(formation in badFormations)) {
					badFormations[formation] = true;
				}

				if (step < maxStep || formation == grindFightNames[route]) {
					badFormations[formation] = false;
				}

				if (!formations.has(formation)) {
					formations.add(formation);
				}
			}

			let list = document.createElement("ul");

			for (let formation of formations) {
				let item = document.createElement("li");
				let link = document.createElement("a");
				link.setAttribute("href", "#");
				link.setAttribute("id", "encounter-" + step + "-" + formation);

				let formationText = formation;

				if (formation == grindFightNames[route]) {
					formationText = '<span style="color: green">' + formation + "</span>";
				} else if (badFormations[formation]) {
					formationText = '<span style="color: brown">' + formation + " (Reset)</span>";
				}

				if (step in setEncounters) {
					link.innerHTML = "<strong>" + formationText + "</strong>";
				} else {
					link.innerHTML = formationText;
				}

				link.addEventListener("click", onEncounterClick);
				item.appendChild(link);
				list.appendChild(item);
			}

			e.appendChild(list);
		}

		if (noEncounters) {
			e.innerHTML += "<p>No steps selected on this map.</p>";
		}
	};

	var updateSeeds = function() {
		var encounterData = getData(_encounterData);
		var mapData = getData(_mapData);

		possibleSeeds = new Set([]);

		var maxStep = Math.max(...selectedSteps);

		if (currentMapIndex > 0) {
			maxStep = Math.max(mapData[currentMapIndex - 1].maxStep, maxStep);
		}

		Object.entries(encounterData).forEach(
			([seed, data]) => {
				var valid = true;

				for (var step = 1; step <= maxStep; step++) {
					if (step in data && !selectedSteps.has(step)) {
						valid = false;
					} else if (selectedSteps.has(step) && !(step in data)) {
						valid = false;
					} else if (step in data && selectedSteps.has(step) && step in setEncounters) {
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

		var e = document.getElementById("seeds");
		e.innerHTML = "";

		var possibleSeedsLinks = [];

		for (let seed of possibleSeeds) {
			possibleSeedsLinks.push('<span class="seed-link">' + seed + "</span>");
		}

		e.innerHTML += '<p class="seed-container">' + Array.from(possibleSeedsLinks).join("") + "</p>";
	};

	var updateSteps = function() {
		var encounterData = getData(_encounterData);
		possibleNextSteps = new Set([]);

		for (var seed of possibleSeeds) {
			let addSteps = true;

			Object.entries(encounterData[seed]).forEach(
				([step,]) => {
					if (addSteps) {
						if (!possibleNextSteps.has(parseInt(step))) {
							possibleNextSteps.add(parseInt(step));
						}

						if (selectedSteps.size == 0 || parseInt(step) > Math.max(...Array.from(selectedSteps))) {
							addSteps = false;
						}
					}
				}
			);
		}
	};

	var updateDisplay = function() {
		var mapData = getData(_mapData);

		updateSeeds();
		updateSteps();
		updateEncounters();
		updateProbabilities();
		drawMap();

		var previous = document.getElementById("button-image-previous");
		var next = document.getElementById("button-image-next");

		if (currentMapIndex == 0) {
			previous.setAttribute("disabled", true);
		} else {
			previous.removeAttribute("disabled");
		}

		if (currentMapIndex == mapData.length - 1) {
			next.setAttribute("disabled", true);
		} else {
			next.removeAttribute("disabled");
		}

		let description = document.getElementById("description");
		description.innerHTML = descriptions[document.getElementById("route-select").value];
	};

	/*
     * Public Definition
     */

	return {
		init: init
	};
}();
