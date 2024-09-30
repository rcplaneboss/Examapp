
var button = document.getElementsByClassName("calculator-button");
var functionButtons = document.getElementsByClassName("functions");
var screenArray = [];
var AnsHistory = [];
var char;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        calc(this)
    }, false)
}

for (let i = 0; i < functionButtons.length; i++) {
    functionButtons[i].addEventListener('click', function () {
        calc(this)
    }, false)
}


function openCalc() {
    let calculator = document.getElementsByClassName('dropdown-calculator')[0];
    if (!calculator.style.display) {
        calculator.style.display = "block";
    } else {
        calculator.style.display = "none";
        calculator.style.display = "";
    }
}


function calc(params) {
    var screen = document.getElementById('screen');
    screen.style.fontSize = "large";
    try {

        if (params.getAttribute('data-button') === 'solve') {
            if (screen.value !== "Syntax Error") {

                if (eval(screen.value).toString().length > 15) {
                    screen.value = Math.round(eval(screen.value))
                } else {
                    screen.value = eval(screen.value);
                }


            } else {
                screen.value = eval(screen.value);
            }
        } else if (params.getAttribute('data-button') === 'AC') {
            screen.value = 0;
        } else if (params.getAttribute("data-button") == "pow") {
            screen.value = Math.pow(screen.value, 2)
        }
        else if (params.getAttribute("data-button") == "EXP") {
            screen.value = Math.exp(screen.value)
        } else if (params.getAttribute("data-button") == "SQR") {
            screen.value = Math.sqrt(screen.value)
        } else {
            if (screen.value == 0 || screen.value === "Syntax Error") {
                screen.value = params.getAttribute("data-button");
                console.log(screen.value);
            } else if (screen.value != 0) {
                screen.value += params.getAttribute("data-button");
                console.log(screen.value)
            }
        }
    } catch (err) {
        screen.style.fontSize = "10px";
        screen.value = "Syntax Error";
    }
}