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

function accordion(clicked) {
       
        if (clicked == 'idsp')
        {
            var y = document.getElementById("AFSpbtngrp");
            if (y.style.display === "none") {
            y.style.display = "block";
            } else {
            y.style.display = "none";
            }
        }
        else if (clicked == 'idd')
        {
            var y = document.getElementById("ADbtngrp");
            if (y.style.display === "none") {
            y.style.display = "block";
            } else {
            y.style.display = "none";
            }
        }
        else if (clicked == 'idfsi')
        {
            var y = document.getElementById("AFSibtngrp");
            if (y.style.display === "none") {
            y.style.display = "block";
            } else {
            y.style.display = "none";
            }
        }
        else if (clicked == 'idlh')
        {
            var y = document.getElementById("LHbtngrp");
            if (y.style.display === "none") {
            y.style.display = "block";
            } else {
            y.style.display = "none";
            }
        }
}

function APPLCS() {
    var y = document.getElementById("choices");
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

function calcTotal() {
    var total = document.getElementById('ttl');

    var watts = +document.getElementById('wtz').value;
    
    var utilityRate = +document.getElementById('kWh').value;
    
    var hrs = +document.getElementById('hPd').value;

    var days = +document.getElementById('dPy').value;

    var product = (watts * utilityRate * hrs * days)/1000;

    total.value = product + " php/yr";
}

function applianceChoices(clicked) 
{
    document.getElementById(clicked).addEventListener('click', function() {
        var text = document.getElementById('apl');
        var txtWatts = document.getElementById('wtz');

        if (text.value == '')
        {
            text.value += clicked;
        }
        else
        {
            text.value = '';
            text.value += clicked;
        }

        if (text.value == 'Refrigerator')
        {
            txtWatts.value = 430 
        }
        else if (text.value == 'Air Conditioner')
        {
            txtWatts.value = 3000 
        }
        else if (text.value == 'Television')
        {
            txtWatts.value = 150 
        }
        else if (text.value == 'Blender')
        {
            txtWatts.value = 400 
        }
        else if (text.value == 'Microwave')
        {
            txtWatts.value = 1200 
        }
        else if (text.value == 'Oven')
        {
            txtWatts.value = 2400 
        }

        calcTotal();
    });
}



// Enter Event Listener
// function enter() {
//     var input = document.getElementById("kWh");
    
//     input.addEventListener("keypress", function(event) {
//         if (event.key == "Enter") {
//         event.preventDefault();
//         input.value = '';
//         }
//         else
//         {
//             input.value = 'did not work';
//         }
// });
// }

function incrementValue(clicked) {
    document.getElementById(clicked).addEventListener('click', function() {
        
        if (clicked == 'inUR')
        {
            document.getElementById('kWh').value++;
            calcTotal()
        }
        else if (clicked == 'inHPD')
        {
            document.getElementById('hPd').value++;
            calcTotal()
        }
        else if (clicked == 'inDPY')
        {
            document.getElementById('dPy').value++;
            calcTotal()
        }
    });
}

function decrementValue() {

}