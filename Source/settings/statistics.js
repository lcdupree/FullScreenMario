FullScreenMario.FullScreenMario.settings.statistics = {
    "prefix": "FullScreenMario",
    "doMakeContainer": true,
    "displayChanges": {
        "Infinity": "INF"
    },
    "containersArguments": [
        ["table", {
            "id": "dataDisplay",
            "style": {
                "position": "absolute",
                "top": 0,
                "width": "100%",
                "color": "white",
                "fontSize": "21px",
                "textTransform": "uppercase",
            }
        }],
        ["tr", {
            "style": {
                "padding": "7px 14px 0 14px",
                "textAlign": "right"
            }
        }]
    ],
    "defaults": {
        "elementTag": "td"
    },
    "values": {
        "volume": {
            "valueDefault": 1
        },
        "muted": {
            "valueDefault": true
        },
        "power": {
            "valueDefault": 1,
            "storeLocally": false
        },
        "traveled": {
            "valueDefault": 0
        },
        "score": {
            "valueDefault": 0,
            "digits": 6,
            "hasElement": true,
            "modularity": 100000,
            "onModular": function (EightBitter) {
                EightBitter.gainLife();
            }
        },
        "time": {
            "valueDefault": 0,
            "digits": 3,
            //"hasElement": true,
            "minimum": 0,
            "triggers": {
                "100": function (EightBitter) {
                    if (!EightBitter.MapScreener.notime) {
                        EightBitter.AudioPlayer.playThemePrefixed("Hurry");
                    }
                }
            },
            "onMinimum": function (EightBitter) {
                EightBitter.killPlayer(EightBitter.player, true);
            }
        },
        "world": {
            "valueDefault": 0,
            //"hasElement": true
        },
        "coins": {
            "valueDefault": 0,
            //"hasElement": true,
            "modularity": 100,
            "onModular": function (EightBitter) {
                EightBitter.gainLife();
            }
        },
        "lives": {
            "valueDefault": 99,
            //"hasElement": true
        },
        "luigi": {
            "valueDefault": 0,
            "storeLocally": true
        }
    }
};
