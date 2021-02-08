/*
 * Global Variables
 */

var com = com || {};
com.aexoden = com.aexoden || {};
com.aexoden.ff4 = com.aexoden.ff4 || {};

/*
 * Module Definition
 */

com.aexoden.ff4.route = function()
{
    /*
     * Data Import
     */

    let PathFlags = com.aexoden.ff4.constants.PathFlags;
    let SegmentFlags = com.aexoden.ff4.constants.SegmentFlags;
    let VariableFlags = com.aexoden.ff4.constants.VariableFlags;

    let data = com.aexoden.ff4.route_data.data;

    data.pathVariables = {};

    let choiceVariables = {};

    Object.entries(data.variables).forEach(
        ([variable, varData]) => {
            let paths = Object.keys(varData.paths);

            if (varData.type == VariableFlags.CHOICE) {
                paths = new Set();

                Object.values(varData.paths).forEach(
                    (pathData) => {
                        Object.keys(pathData).forEach(
                            (path) => {
                                paths.add(path);
                            },
                        );
                    },
                );
            }

            paths.forEach(
                (pathName) => {
                    if (!(pathName in data.pathVariables)) {
                        data.pathVariables[pathName] = [];
                        choiceVariables[pathName] = [];
                    }

                    if (variable[0] == "C" || varData.lowPriority) {
                        choiceVariables[pathName].push(variable);
                    } else {
                        data.pathVariables[pathName].push(variable);
                    }
                },
            );
        },
    );

    Object.entries(choiceVariables).forEach(
        ([pathName, variables]) => {
            variables.forEach(
                (variable) => {
                    data.pathVariables[pathName].push(variable);
                },
            );
        },
    );

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

    var drawPath = function(canvas, pathMetadata, path, vars) {
        var ctx = canvas.getContext("2d");

        var img = new Image();

        img.onload = function() {
            if (path.mapRange) {
                ctx.drawImage(img, path.mapRange[0] * 16, path.mapRange[1] * 16, path.mapRange[2] * 16, path.mapRange[3] * 16, 0, 0, path.mapRange[2] * 16, path.mapRange[3] * 16);

                var testValue = 224;
                var maxValue = 256;

                if (path.map == "2000-0") {
                    testValue = 32;
                    maxValue = 64;
                }

                var both = true;

                if (path.mapRange[0] > testValue) {
                    ctx.drawImage(img, 0, path.mapRange[1] * 16, path.mapRange[2] * 16, path.mapRange[3] * 16, (maxValue - path.mapRange[0]) * 16, 0, path.mapRange[2] * 16, path.mapRange[3] * 16);
                } else {
                    both = false;
                }

                if (path.mapRange[1] > testValue) {
                    ctx.drawImage(img, path.mapRange[0] * 16, 0, path.mapRange[2] * 16, path.mapRange[3] * 16, 0, (maxValue - path.mapRange[1]) * 16, path.mapRange[2] * 16, path.mapRange[3] * 16);
                } else {
                    both = false;
                }

                if (both) {
                    ctx.drawImage(img, 0, 0, path.mapRange[2] * 16, path.mapRange[3] * 16, (maxValue - path.mapRange[0]) * 16, (maxValue - path.mapRange[1]) * 16, path.mapRange[2] * 16, path.mapRange[3] * 16);
                }
            } else {
                ctx.drawImage(img, 0, 0);
            }

            var offScreenCanvas = document.createElement("canvas");
            offScreenCanvas.width = canvas.width;
            offScreenCanvas.height = canvas.height;

            var offScreenCtx = offScreenCanvas.getContext("2d");

            drawSegments(offScreenCtx, pathMetadata, path, vars);

            ctx.drawImage(offScreenCanvas, 0, 0);
        };

        var drawOverlay = document.getElementById("option-overlay").checked;

        img.src = "/static/img/maps/" + (drawOverlay ? "composite" : "base") + "/" + path.map + ".png";
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

    var drawSegments = function(ctx, pathMetadata, path, vars) {
        var xOffset = 0;
        var yOffset = 0;

        if (path.mapRange) {
            xOffset = path.mapRange[0] * -16;
            yOffset = path.mapRange[1] * -16;
        }

        Object.entries(path.segments).forEach(
            ([key, segments]) => {
                var fields = key.split("-");
                var draw = false;
                var fillStyle = "#FFFFFF";

                if (fields[0] == "boundary") {
                    fillStyle = "#FFA500";
                }

                if (fields[0] == "extra" || fields[0] == "optional" || fields[0] == "alternate") {
                    fillStyle = "#00FF00";

                    if (vars) {
                        if (pathMetadata.name in data.pathVariables) {
                            data.pathVariables[pathMetadata.name].forEach(
                                (index) => {
                                    var varData = data.variables[index];
                                    var value = vars[index];

                                    if (typeof value === "undefined") {
                                        value = 0;
                                    }

                                    if (varData.type == VariableFlags.EXTRA) {
                                        if (varData.paths[pathMetadata.name].index == fields[2]) {
                                            var specialIndex = getSpecial(varData, value, vars);
                                            var delta = value - specialIndex;

                                            if (specialIndex > 0 && fields[0] == "optional" && parseInt(fields[1]) == varData.routes[specialIndex][pathMetadata.name]) {
                                                draw = true;
                                            } else if (fields[0] == "extra" && fields[1] == "2" && delta - delta % 2 > 0) {
                                                draw = true;
                                            } else if (fields[0] == "extra" && fields[1] == "1" && (delta % 2 == 1 || (path.flags & PathFlags.SINGLE) > 0) && delta > 0) {
                                                draw = true;
                                            }
                                        }
                                    } else if (varData.type == VariableFlags.CHOICE && value in varData.paths) {
                                        if (pathMetadata.name in varData.paths[value] && varData.paths[value][pathMetadata.name].index == fields[1]) {
                                            draw = true;
                                        }
                                    }
                                },
                            );
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
            },
        );
    };

    var getSpecial = function(varData, steps, vars) {
        let maxEven = 0;
        let maxOdd = 0;
        let maxOptional = 0;

        if (varData.maxOptional) {
            let value = 0;

            if (varData.maxOptional.variable in vars) {
                value = vars[varData.maxOptional.variable];
            }

            maxOptional = varData.maxOptional.values[value];
        }

        Object.keys(varData.routes).forEach(
            (key) => {
                let varIndex = parseInt(key);

                if (varIndex <= steps && (!varData.maxOptional || varIndex <= maxOptional)) {
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
            },
        );

        if (steps % 2 == 0) {
            return maxEven;
        } else {
            return maxOdd;
        }
    };

    var drawMaps = function(parent, vars, battles, repaint) {
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

        for (let i = 0; i < data.route.length; i++) {
            let pathMetadata = data.route[i];
            let path = data.paths[pathMetadata.name];

            let displayMap = true;

            if (pathMetadata.condition) {
                let value = 0;

                if (pathMetadata.condition.variable in vars) {
                    value = vars[pathMetadata.condition.variable];
                }

                if (!pathMetadata.condition.values.includes(value)) {
                    displayMap = false;
                }
            }

            let battleText = "";

            if (displayMap) {
                displayMap = false;

                if (pathMetadata.name in data.pathVariables) {
                    data.pathVariables[pathMetadata.name].forEach(
                        (variable) => {
                            if (vars[variable] > 0 || data.variables[variable].descriptions && 0 in data.variables[variable].descriptions) {
                                displayMap = true;
                            }
                        },
                    );
                }

                if (path.description in battles) {
                    battleText = "<h5>Important Battles</h5><ul>";

                    for (const [step, style, formation] of battles[path.description]) {
                        battleText += '<li class="' + style + '">Step ' + step + ": " + formation + "</li>";
                    }

                    battleText += "</ul>";
                    displayMap = true;
                }

                if (drawAll) {
                    displayMap = true;
                }
            }

            if (displayMap) {
                var canvas_id = "path-" + i;
                var canvas = document.getElementById(canvas_id);
                var caption = document.getElementById(canvas_id + "-caption");
                let continueDraw = false;

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

                    if ((path.flags & PathFlags.STEPS) == 0) {
                        caption.innerHTML += "<p><em>Steps on this map do not matter.</em></p>";
                    }

                    var yellow = (path.flags & PathFlags.YELLOW_CHOCOBO) > 0;
                    var black = (path.flags & PathFlags.BLACK_CHOCOBO) > 0;

                    if (black && yellow) {
                        caption.innerHTML += "<p>Leave by picking up a <strong>yellow or black</strong> chocobo.</p>";
                    } else if (yellow) {
                        caption.innerHTML += "<p>Leave by picking up a <strong>yellow</strong> chocobo.</p>";
                    } else if (black) {
                        caption.innerHTML += "<p>Leave by picking up a <strong>black</strong> chocobo.</p>";
                    }

                    if ((path.flags & PathFlags.HUMMINGWAY) > 0) {
                        caption.innerHTML += "<p>Track down the shop Hummingway as pointed to by the arrow, and then leave, making sure to take a total of 16 steps, plus any extras below.</p>";
                    }

                    caption.innerHTML += '<dl class="dl">';

                    if (pathMetadata.name in data.pathVariables) {
                        data.pathVariables[pathMetadata.name].forEach(
                            (variable) => {
                                var varData = data.variables[variable];
                                var value = vars[variable];

                                if (typeof value === "undefined") {
                                    value = 0;
                                }

                                if (varData.type == VariableFlags.EXTRA) {
                                    var extraEven = false;
                                    var extraOdd = false;

                                    for (const key of Object.keys(path.segments)) {
                                        var fields = key.split("-");

                                        if (fields[0] == "extra") {
                                            if (fields[1] == "2") {
                                                extraEven = true;
                                            } else if (fields[1] == "1") {
                                                extraOdd = true;
                                            }
                                        }
                                    }
                                }

                                if (varData) {
                                    if (varData.type == VariableFlags.EXTRA) {
                                        var specialIndex = getSpecial(varData, value, vars);
                                        var delta = value - specialIndex;

                                        if (specialIndex > 0) {
                                            value = varData.routes[specialIndex][pathMetadata.name];

                                            if (extraEven) {
                                                value += delta - delta % 2;
                                            }

                                            if (extraOdd) {
                                                value += delta % 2;
                                            }
                                        } else {
                                            if (!extraEven && (path.flags & PathFlags.SINGLE) == 0) {
                                                value = value % 2;
                                            }

                                            if (!extraOdd) {
                                                value = value - value % 2;
                                            }
                                        }

                                        if (value > 0) {
                                            caption.innerHTML += "<dt>" + varData.paths[pathMetadata.name].location + "</dt><dd>Take " + value + " extra step" + (value > 1 ? "s" : "") + varData.paths[pathMetadata.name].disambiguation + ".</dd>";
                                            continueDraw = true;
                                        }
                                    } else if (varData.type == VariableFlags.CHOICE && value in varData.paths) {
                                        if (pathMetadata.name in varData.paths[value]) {
                                            caption.innerHTML += "<dt>" + varData.paths[value][pathMetadata.name].location + "</dt><dd>" + varData.paths[value][pathMetadata.name].instruction + ".</dd>";
                                            continueDraw = true;
                                        }
                                    }
                                }

                                caption.innerHTML += "</dl>";
                            },
                        );
                    }

                    if (continueDraw || drawAll) {
                        caption.innerHTML += battleText;
                        canvas_container.appendChild(canvas);
                        row.appendChild(canvas_container);
                        row.appendChild(caption);
                        container.appendChild(row);
                    }
                }

                drawPath(canvas, pathMetadata, path, vars, activeMaps[path]);
            }
        }

        parent.appendChild(container);
    };

    var printSummary = function(target, vars, battles) {
        target.innerHTML += '<div class="bs-callout bs-callout-info"><span class="fas fa-info-circle"></span><h4>Information</h4><p>This summary should include all critical information needed to follow the route. The encounter information might be a little useless if it refers to a map you visit multiple times. This is a known issue that may or may not ever be fixed. I recommend scanning ahead a couple of items, as entries are occasionally not listed in the best possible order. If you have any other problems, please contact me.</p></div>';
        target.innerHTML += "<h3>Instructions</h3>";

        Object.keys(vars).forEach(
            (variable) => {
                if (!(variable in data.variables)) {
                    console.log("DEBUG: Variable " + variable + " does not exist in route data.");
                }
            },
        );

        if (Object.keys(vars).length == 0) {
            target.innerHTML = '<div class="bs-callout bs-callout-success"><span class="fas fa-thumbs-up"></span><h4>Easy!</h4><p>There are no extra steps to take!</p></div>';
        } else {
            let list = "<ul>";

            let completedVars = {};

            data.route.forEach(
                (pathMetadata) => {
                    let mapActive = true;

                    if (pathMetadata.condition) {
                        let value = 0;

                        if (pathMetadata.condition.variable in vars) {
                            value = vars[pathMetadata.condition.variable];
                        }

                        if (!pathMetadata.condition.values.includes(value)) {
                            mapActive = false;
                        }
                    }

                    if (mapActive) {
                        if (pathMetadata.name in data.pathVariables) {
                            data.pathVariables[pathMetadata.name].forEach(
                                (variable) => {
                                    if (!completedVars[variable]) {
                                        completedVars[variable] = true;

                                        let output = "";
                                        let output_class = "";
                                        let varData = data.variables[variable];

                                        if (variable in vars || "descriptions" in varData && 0 in varData.descriptions) {
                                            let value = 0;

                                            if (variable in vars) {
                                                value = vars[variable];
                                            }

                                            if (varData.type == VariableFlags.EXTRA) {
                                                var description = varData.description;
                                                let totalSteps = "";

                                                if (!description) {
                                                    var path = varData.paths[pathMetadata.name];
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
                                },
                            );
                        }
                    }
                },
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
        printSummary: printSummary,
    };
}();
