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

function incrementValue(clicked) {
        
        if (clicked == 'inUR')
        {
                document.getElementById('kWh').value++;
                calcTotal()
        }
        else if (clicked == 'inHPD')
        {
            if (document.getElementById('hPd').value == 24)
            {
                calcTotal()
            }
            else
            {
                document.getElementById('hPd').value++;
                calcTotal()
            }
        }
        else if (clicked == 'inDPY')
        {
            if (document.getElementById('dPy').value == 365)
            {
                calcTotal()
            }
            else
            {
                document.getElementById('dPy').value++;
                calcTotal()
            }
        }
}

function decrementValue(clicked) { 
        if (clicked == 'deUR')
        {
            if (document.getElementById('kWh').value == 0)
            {
                calcTotal()
            }
            else
            {
                document.getElementById('kWh').value--;
                calcTotal()
            }
        }
        else if (clicked == 'deHPD')
        {
            if (document.getElementById('hPd').value == 0)
            {
                calcTotal()
            }
            else
            {
                document.getElementById('hPd').value--;
                calcTotal()
            }
        }
        else if (clicked == 'deDPY')
        {
            if (document.getElementById('dPy').value == 0)
            {
                calcTotal()
            }
            else
            {
                document.getElementById('dPy').value--;
                calcTotal()
            }
        }
}

function increaseFontSize() {
    var elements = document.getElementsByTagName("*");
    
    for(var i = 0; i < elements.length; i++) {
      var computedFontSize = window.getComputedStyle(elements[i]).fontSize;
      
      var newSize = parseFloat(computedFontSize) * 1.2;

      elements[i].style.fontSize = newSize + 'px';
    }
  } 

function decreaseFontSize() {
    var elements = document.getElementsByTagName("*");
    
    for(var i = 0; i < elements.length; i++) {
      
      var computedFontSize = window.getComputedStyle(elements[i]).fontSize;
      
      
      var newSize = parseFloat(computedFontSize) * 0.8;
      
      elements[i].style.fontSize = newSize + 'px';
    }
  } 

function increaseLetterSpacing() {
    var elements = document.getElementsByTagName("*");
    
    for(var i = 0; i < elements.length; i++) {
      var computedLetterSpacing = window.getComputedStyle(elements[i]).letterSpacing;
      
      if (computedLetterSpacing !== 'normal') {
        var newSize = parseFloat(computedLetterSpacing) + 1; 
        elements[i].style.letterSpacing = newSize + 'px';
      } else {
        elements[i].style.letterSpacing = '1px';
      }
    }
  }

function decreaseLetterSpacing() {
    var elements = document.getElementsByTagName("*");
    
    for(var i = 0; i < elements.length; i++) {
      var computedLetterSpacing = window.getComputedStyle(elements[i]).letterSpacing;
      
      if (computedLetterSpacing !== 'normal') {
        var newSize = parseFloat(computedLetterSpacing) - 1; 
        elements[i].style.letterSpacing = newSize + 'px';
      } else {
        elements[i].style.letterSpacing = '1px';
      }
    }
  }

function increaseLineHeight() {
    var elements = document.getElementsByTagName("*");
    
    for(var i = 0; i < elements.length; i++) {
      var computedLineHeight = window.getComputedStyle(elements[i]).lineHeight;
      
      if (computedLineHeight !== 'normal') {
        var newSize = parseFloat(computedLineHeight) + 0.001;
        elements[i].style.lineHeight = newSize;
      } else {
        elements[i].style.lineHeight = '0';
      }
    }
  }

function decreaseLineHeight() {
    var elements = document.getElementsByTagName("*");
    
    for(var i = 0; i < elements.length; i++) {
      var computedLineHeight = window.getComputedStyle(elements[i]).lineHeight;
      
      if (computedLineHeight !== 'normal') {
        var newSize = parseFloat(computedLineHeight) - 0.001;
        elements[i].style.lineHeight = newSize;
      } else {
        elements[i].style.lineHeight = '0';
      }
    }
  }

function changeFontStyle1() {
    var elements = document.getElementsByTagName("*");
    
    for(var i = 0; i < elements.length; i++) {
      elements[i].style.fontFamily = "Verdana, serif";
    }
  }

function changeFontStyle2() {
    var elements = document.getElementsByTagName("*");
    
    for(var i = 0; i < elements.length; i++) {
      elements[i].style.fontFamily = "Dyslexie, serif";
    }
  }
  
function changeFontStyle3() {
    var elements = document.getElementsByTagName("*");
    
    for(var i = 0; i < elements.length; i++) {
      elements[i].style.fontFamily = "Helvetica, serif";
    }
  }