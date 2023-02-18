// Returns The area value in 2 decimal point.
function twoDecimal(a) {
    return (Math.round(a * 100) / 100).toFixed(2);
}

// Common Rules for some Geometric Calculations
function commonAreaRule(a, b) {
    return 0.5 * a * b;
}
//Checks if the input is a Positive Number or not.
function isPosNumber(a, b) {
    if (isNaN(a) || isNaN(b)) {
      return false;
    }
    
    if (a >= 0 && b >= 0) {
      return true;
    } else {
      alert("Please enter a positive number.");
      return false;
    }
  }
  
  
//If the Input is a negative number or NaN then will display the Modal.
function notPosNumber(){
    const modal = document.getElementById("myModal");
    const modalMessage = document.getElementById("modalMessage");
    modalMessage.innerHTML = "Please enter positive numbers for base and height.";
    modal.style.display = "block";
}

/*  At the bottom of the page all Calculations will be listed for you. 
    You can also convert the value in m^2 form */
let count = 0;
function areaDisplay(name, area) {
    area = twoDecimal(area);
    const ulElement = document.getElementById("areaShow");
    let newLi = document.createElement("li");
    newLi.classList.add('list-group-item', 'd-flex', 'text-center','justify-content-center');
    let newLiText = document.createTextNode(count + ". " + name + " " + twoDecimal(area) + "cm");

    console.log(newLiText);
    newLi.appendChild(newLiText);
    console.log(newLi);
    ulElement.appendChild(newLi);

    const newSup = document.createElement("sup");
    const newSupText = document.createTextNode("2");
    newSup.appendChild(newSupText)
    newLi.appendChild(newSup);

    let mBtn = document.createElement("button");
    let mBtnText = document.createTextNode("Convert to m")
    mBtn.appendChild(mBtnText)
    mBtn.appendChild(newSup)
    mBtn.classList.add('btn-primary', 'rounded')
    newLi.appendChild(mBtn);
    console.log(mBtn)

    mBtn.addEventListener('click', function () {
        newLi.innerText = count + ". " + name + " " + twoDecimal(area/10)  + "m";
        newLi.appendChild(newSup);
    });
}
//Calculation Function for all the Shapes.
function calculateTriangleArea() {
    const b = document.getElementById("tri-b").value;
    const h = document.getElementById("tri-h").value;
    if (isPosNumber(b,h)) {
        const area = commonAreaRule(b, h);
        document.getElementById("tri-area").innerHTML = "Area = " + twoDecimal(area) + " sq.cm";
        count++;
        areaDisplay('Triangle', area);
    }
    else {
       notPosNumber();
    }
}



function calculateRectangleArea() {
    const l = document.getElementById("rec-l").value;
    const w = document.getElementById("rec-w").value;
    if (isPosNumber(l, w)) {
        const area = l * w;
        document.getElementById("rec-area").innerHTML = "Area = " + twoDecimal(area) + " sq.cm";
        count++;
        areaDisplay('Rectangle', area);
    } else {
        notPosNumber();
    }
}

function calculateParallelogramArea() {
    const b = document.getElementById("par-b").value;
    const h = document.getElementById("par-h").value;
    if (isPosNumber(b, h)) {
        const area = b * h;
        document.getElementById("par-area").innerHTML = "Area = " + twoDecimal(area) + " sq.cm";
        count++;
        areaDisplay('Parallelogram', area);
    } else {
        notPosNumber();
    }
}

function calculateRhombusArea() {
    const d1 = document.getElementById("rom-d1").value;
    const d2 = document.getElementById("rom-d2").value;
    if (isPosNumber(d1, d2)) {
        const area = commonAreaRule(d1, d2);
        document.getElementById("rom-area").innerHTML = "Area = " + twoDecimal(area) + " sq.cm";
        count++;
        areaDisplay('Rhombus', area);
    } else {
        notPosNumber();
    }
}

function calculatePentagonArea() {
    const p = document.getElementById("pen-p").value;
    const d = document.getElementById("pen-d").value;
    if (isPosNumber(p, d)) {
        const area = commonAreaRule(p, d);
        document.getElementById("pen-area").innerHTML = "Area = " + twoDecimal(area) + " sq.cm";
        count++;
        areaDisplay('Pentagon', area);
    } else {
        notPosNumber();
    }
}

function calculateEllipseArea() {
    const a = document.getElementById("ell-a").value;
    const b = document.getElementById("ell-b").value;
    if (isPosNumber(a, b)) {
        const area = Math.PI * a * b;
        twoDecimal(area)
        document.getElementById("ell-area").innerHTML = "Area = " + twoDecimal(area) + " sq.cm";
        count++;
        areaDisplay('Ellipse', twoDecimal(area));
    } else {
        notPosNumber();
    }
}
// Will generate random color on hover over the cards.
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBgColor(element) {
    element.style.backgroundColor = getRandomColor();
}

function resetBgColor(element) {
    element.style.backgroundColor = "";
}
