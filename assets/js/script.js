

function myMoveHeader() {
    // elementToMove identifies the "red box" whose id is animate
    var elementToMove = document.getElementById("navbar-header");

    // Set some variable called pos to 0. 
    var pos = -70;

    // This code defines a function called frame. It is just written differently
    var frame = function () {
        // if pos is 350 (probably position) 
        if (pos == -5) 
        {    // Stop the function from being call once the pos is 350
            clearInterval(id);
        } 
        //  
        else 
        {   // If not a pos 350, keep increasing the position by 1 
            pos++;  // increasing pos by 1 
            elementToMove.style.top = pos + "px";  // Find the red square and move it 1 px to the right by increasing its distance the distance from the left
        }
    }

    // setInterval calls a function (frame) every 5 milliseconds 
    var id = window.setInterval(frame, 20);
}

myMoveHeader()

