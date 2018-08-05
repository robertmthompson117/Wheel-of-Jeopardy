import Winwheel from '../modules/Winwheel';
module.exports = class Wheel {
    constructor(category1, category2, category3, category4, category5, category6) {
        this.wheelSpinning = false;
        this.theWheel = new Winwheel.Winwheel({
            'outerRadius'     : 212,        // Set outer radius so wheel fits inside the background.
            'innerRadius'     : 75,         // Make wheel hollow so segments dont go all way to center.
            'textFontSize'    : 24,         // Set default font size for the segments.
            'textOrientation' : 'horizontal', // Make text vertial so goes down from the outside of wheel.
            'textAlignment'   : 'center',    // Align text to outside of wheel.
            'numSegments'     : 12,         // Specify number of segments.
            'segments'        :             // Define segments including colour and text.
                [                               // font size and text colour overridden on backrupt segments.
                    {'fillStyle' : '#ee1c24', 'text' : category1},
                    {'fillStyle' : '#fff200', 'text' : 'PLAYER\'S\nCHOICE', 'textFontSize' : 16, 'textFillStyle' : '#ffffff'},
                    {'fillStyle' : '#3cb878', 'text' : category2},
                    {'fillStyle' : '#f6989d', 'text' : 'OPPONENT\'S\nCHOICE', 'textFontSize' : 16, 'textFillStyle' : '#ffffff'},
                    {'fillStyle' : '#3d2ef6', 'text' : category3},
                    {'fillStyle' : '#000000', 'text' : 'BANKRUPT', 'textFontSize' : 16, 'textFillStyle' : '#ffffff'},
                    {'fillStyle' : '#00aef0', 'text' : category4},
                    {'fillStyle' : '#ee1c24', 'text' : 'DOUBLE\nSCORE', 'textFontSize' : 16, 'textFillStyle' : '#ffffff'},
                    {'fillStyle' : '#f26522', 'text' : category5},
                    {'fillStyle' : '#000000', 'text' : 'FREE TURN', 'textFontSize' : 16, 'textFillStyle' : '#ffffff'},
                    {'fillStyle' : '#e70697', 'text' : category6},
                    {'fillStyle' : '#ffffff', 'text' : 'LOOSE\nTURN', 'textFontSize' : 16}
                ],
            'animation' :           // Specify the animation to use.
                {
                    'type'     : 'spinToStop',
                    'duration' : 5,
                    'spins'    : 9,
                    'callbackFinished' : this.spinnerCallback
                }
        });
    }

    setupSpinningListener(spinButton, wheel) {
        spinButton.click(() => {
            wheel.startSpin();
            spinButton.prop("disabled",true);
        });
    }
    // -------------------------------------------------------
    // Click handler for spin button.
    // -------------------------------------------------------
    startSpin()
    {
        // Ensure that spinning can't be clicked again while already running.
        if (this.wheelSpinning === false)
        {
            this.theWheel.startAnimation();
            // this.theWheel.stopAnimation(true);
            this.wheelSpinning = true;
            // setTimeout(this.theWheel.stopAnimation(true), 3000);
            // this.wheelSpinning = false;
        }
    }
    // -------------------------------------------------------
    // Function for reset button.
    // -------------------------------------------------------
    resetWheel()
    {
        this.theWheel.stopAnimation(true);
        theWheel.rotationAngle = 0;     // Re-set the wheel angle to 0 degrees.
        this.theWheel.draw();                // Call draw to render changes to the wheel.
        this.wheelSpinning = false;          // Reset to false to power buttons and spin can be clicked again.
    }

    // -------------------------------------------------------
    // Called when the spin animation has finished by the callback feature of the wheel because I specified callback in the parameters.
    // -------------------------------------------------------
    spinnerCallback(indicatedSegment)
    {
        alert("Spin Result is: " + indicatedSegment.text);
    }
};


