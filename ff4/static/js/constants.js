/*
 * Global Variables
 */

var com = com || {};
com.aexoden = com.aexoden || {};
com.aexoden.ff4 = com.aexoden.ff4 || {};

/*
 * Module Definition
 */

com.aexoden.ff4.constants = function()
{
    /*
	 * Constants
	 */

    /* eslint-disable sort-keys */

    var PathFlags = {
        NONE:           0x00,
        STEPS:          0x01,
        YELLOW_CHOCOBO: 0x02,
        BLACK_CHOCOBO:  0x04,
        HUMMINGWAY:     0x08,
        SINGLE:         0x10,
    };

    var SegmentFlags = {
        NONE:     0x00,
        START:    0x01,
        END:      0x02,
        RETURN:   0x04,
        ANNOTATE: 0x08,
        VEHICLE:  0x10,
        VERTICAL: 0x20,
    };

    var VariableFlags = {
        NONE:   0x00,
        EXTRA:  0x01,
        CHOICE: 0x02,
    };

    /* eslint-enable sort-keys */

    /*
	 * Public Definition
	 */

    return {
        PathFlags: PathFlags,
        SegmentFlags: SegmentFlags,
        VariableFlags: VariableFlags,
    };
}();
