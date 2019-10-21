FullScreenMario.FullScreenMario.settings.input = {
    "InputWritrArgs": {
        "aliases": {
            // Keyboard aliases
            "left":   [37],     // left
            "right":  [39],     // right
            "up":     [38],     // up
            "down":   [40],     // down
            "sprint": [16],     // shift
            "pause":  [80],     // p (pause)
            // Mute and Luigi disabled because there's a GUI for them now
            // "mute":   [77],         // m (mute)
            // "l":      [76],         // l (luigi)
            // Mouse aliases
            "rightclick": [3],
        },
        "triggers": {
            "onkeydown": {
                "left": FullScreenMario.FullScreenMario.prototype.keyDownLeft,
                "right": FullScreenMario.FullScreenMario.prototype.keyDownRight,
                "up": FullScreenMario.FullScreenMario.prototype.keyDownUp,
                "down": FullScreenMario.FullScreenMario.prototype.keyDownDown,
                "sprint": FullScreenMario.FullScreenMario.prototype.keyDownSprint,
                "pause": FullScreenMario.FullScreenMario.prototype.keyDownPause,
                "mute": FullScreenMario.FullScreenMario.prototype.keyDownMute,
            },
            "onkeyup": {
                "left": FullScreenMario.FullScreenMario.prototype.keyUpLeft,
                "right": FullScreenMario.FullScreenMario.prototype.keyUpRight,
                "up": FullScreenMario.FullScreenMario.prototype.keyUpUp,
                "down": FullScreenMario.FullScreenMario.prototype.keyUpDown,
                "sprint": FullScreenMario.FullScreenMario.prototype.keyUpSprint,
                "pause": FullScreenMario.FullScreenMario.prototype.keyUpPause
            },
            "onmousedown": {
                "rightclick": FullScreenMario.FullScreenMario.prototype.mouseDownRight
            },
            "oncontextmenu": {},
            "ondevicemotion": {
                "devicemotion": FullScreenMario.FullScreenMario.prototype.deviceMotion
            }
        }
    }
};
