/**
 * Beat class that keeps track of playing the audio
 */
class Beat {
    constructor(audioSrc){
        this.fileType = new Audio(audioSrc);
    }
    playAudio = (audioSrc) => {
        this.fileType.currentTime = 0;
        this.fileType.play(audioSrc);
    }
}

/**
 * Button class that keeps track of the button color based on a press
 */
class Button {
    constructor(color, buttonName){
        this.element = document.getElementById(buttonName);
        this.color = color;

        // call these function too, whenever an object is created using this class
        this.setButtonColorInHTML();
    }
    /**
     * Setting the button color based on color specified
     */
    setButtonColorInHTML = () => {
        this.element.style.borderColor = this.color;
    }

    /**
     * Select function to set the background color and boxShadow
     * horizontal: 0px, vertical: 0px, blur: 17px, spread: 0px, color: #FFFFFF
     */
    select = () => {
        this.element.style.backgroundColor = this.color;
        this.element.style.boxShadow = "0px 0px 17px 0px #FFFFFF";
    }

    /**
     * Deselect function to reset background color and boxShadow
     */
    deselect = () => {
        this.element.style.backgroundColor = "transparent";
        this.element.style.boxShadow = "none";
    }
}