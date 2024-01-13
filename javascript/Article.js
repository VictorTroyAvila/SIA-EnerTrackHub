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