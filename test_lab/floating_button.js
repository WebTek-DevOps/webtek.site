function buttanim() {
    //Will animate a button's width & height
    //Get the button from the doc
    var theButtonAnim = document.getElementById('buttonn');
    //get both button's width & height
    var theButtonWidth = theButtonAnim.offsetWidth;
    var theButtonHeight = theButtonAnim.offsetHeight;
    //animTrig is used to trigger between inc and dec in values
    var animTrig = 0;
    //this one acts as a counter
    var mov = 0;
    //Start the first interval which is the last (should fix this :P)
    var first = setInterval(StartAnim, 50);

    //this is where everything happens
    function StartAnim() {
        if (animTrig == 0) {
            //decrease width and height incase animTrig is zero
            theButtonWidth -= 1;
            theButtonHeight -= 1;
            //decrease the counter
            mov--;
        } else {
            //increase the sizes incase animTrig is not zero
            theButtonWidth += 1;
            theButtonHeight += 1;
            //increase the counter
            mov++;
        }
        //this says to change the trigger on every 20 steps which is 20 pixels
        if (mov == 20) {
            mov = 0;
            animTrig = 0;
        } else if (mov == -20) {
            mov = 0;
            animTrig = 1;
        }

        //Here is where the magic happens
        theButtonAnim.style.width = theButtonWidth + "px";
        theButtonAnim.style.height = theButtonHeight + "px";

    }
}