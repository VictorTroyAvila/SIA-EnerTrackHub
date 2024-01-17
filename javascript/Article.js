function accessability() {
    var x = document.getElementById("accessButton");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }
    
    var y = document.getElementById("AP");
    if (y.style.display === "block") {
    y.style.display = "none";
    } else {
    y.style.display = "block";
    }
}

function closeButton() {
    var x = document.getElementById("AP");
    if (x.style.display === "none") {
    x.style.display = "block";
    } else {
    x.style.display = "none";
    }

    var y = document.getElementById("accessButton");
    if (y.style.display === "block") {
    y.style.display = "none";
    } else {
    y.style.display = "block";
    }
}

function AFSp() {
    var y = document.getElementById("AFSpbtngrp");
    if (y.style.display === "none") {
    y.style.display = "block";
    } else {
    y.style.display = "none";
    }
}

function AD() {
    var y = document.getElementById("ADbtngrp");
    if (y.style.display === "none") {
    y.style.display = "block";
    } else {
    y.style.display = "none";
    }
}

function AFSi() {
    var y = document.getElementById("AFSibtngrp");
    if (y.style.display === "none") {
    y.style.display = "block";
    } else {
    y.style.display = "none";
    }
}

function LH() {
    var y = document.getElementById("LHbtngrp");
    if (y.style.display === "none") {
    y.style.display = "block";
    } else {
    y.style.display = "none";
    }
}

function incrementValue()
{
    var i = 0;
    function buttonClick() {
        document.getElementById('inc').value = ++i;
    }
}

function decrementValue()
{
    var i = 0;
    function buttonClick() {
        document.getElementById('inc').value = --i;
    }
}