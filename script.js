let beats = {
    "a": {
        beat: new Beat("./assets/a.mp3"),
        button: new Button('#00fffe', 'a')
    },
    "s": {
        beat: new Beat("./assets/s.mp3"),
        button: new Button('#00fffe', 's')
    },
    "d": {
        beat: new Beat("./assets/d.mp3"),
        button: new Button('#00fffe', 'd')
    },
    "f": {
        beat: new Beat("./assets/f.mp3"),
        button: new Button('#FF00FF', 'f')
    },
    "g": {
        beat: new Beat("./assets/g.mp3"),
        button: new Button('#FF00FF', 'g')
    },
    "h": {
        beat: new Beat("./assets/h.mp3"),
        button: new Button('#FF00FF', 'h')
    },
    "j": {
        beat: new Beat("./assets/j.mp3"),
        button: new Button('#FF00FF', 'j')
    },
    "k": {
        beat: new Beat("./assets/k.mp3"),
        button: new Button('#FFFFFF', 'k')
    },
    "l": {
        beat: new Beat("./assets/l.mp3"),
        button: new Button('#FFFFFF', 'l')
    }
}

/**
 * Function to play the beat upon a press of key
 */
triggerBeat = (event) => {
    buttonName = event.key;

    if (buttonName in beats) {
        // do this
        beats[buttonName].beat.playAudio();

        // for changing the CSS when button is pressed
        beats[buttonName].button.select(); 

        document.addEventListener('keyup',() => {
            beats[buttonName].button.deselect();
        })
        
    }
    
}

/**
 * Keydown listener to fire triggerBeat function
 */
document.addEventListener('keydown',triggerBeat);
