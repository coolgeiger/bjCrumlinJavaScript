// JavaScript source code
// Im going to put an advanced function here which will be an object so to speak.

// Global variables:
var myBtnA, myBtnB, flag;

function mOver(obj) {
    obj.innerHTML = "Thanks, Mouse Is Now Over Me!"
}

function mouseoverResponse() {
    obj.innerHTML = "Mouse Over Me"
}


function init() {


    myBtnA = document.getElementById("myBtnA").addEventListener("mouseover", mouseOver);
    myBtnB = document.getElementById("myBtnB").addEventListener("mouseover", mouseOver);

    // myBtnA.innerHTML = "Click Me, Button A &gt;<br>";
    // myBtnB.innerHTML = "Click Me, Button B &gt;<br>";

    myBtnA.innerHTML = "Move Mouse over Me Button A";
    myBtnB.innerHTML = "Move Mouse over Me Button B";

    document.onmousemove = onmousemoveResponse;
    myBtnA.innerHTML.onmouseover = mouseoverResponse;
    myBtnA.innerHTML.onmouseover = mouseoutResponse;
    
}
document.addEventListener("DOMContentLoaded", init, false);
//window.onload = init;