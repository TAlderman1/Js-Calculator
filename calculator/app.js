let currentNums = [];
let mergeNums = 0;
let numButtons = document.querySelectorAll("#numBtn");
let opButtons = document.querySelectorAll("#opBtn");
let h1 = document.getElementById("displayNums");
let result = 0;
displayResult();
let currentOp;
let i = 0;

function getEvent() {
    
    numButtons.forEach(button => button.addEventListener("click", (e) => {
        
        currentNums.push(button.value);
        mergeNums = parseInt(currentNums.join(""));
        h1.textContent = mergeNums;

    }));

    opButtons.forEach(button => button.addEventListener("click", (e) => {

        if (i === 0) {
            result += mergeNums;
            clearArrays();
            displayResult();
            currentOp = button.value;
            i++;
        } else {
            getOperation(result, mergeNums);
            if(button.value !== "equals") {
                clearArrays();
                displayResult(); 
                currentOp = button.value;
            } else {
                clearArrays();
                displayResult();
                i = 0;
            }
        }

    }));

    document.getElementById("clrBtn").addEventListener("click", (e) => {

        clearArrays();
        result = 0;
        displayResult();
        i = 0;
        currentOp = "";

    });

}

function getOperation(a, b) {

    if (currentOp === "+") {
        result = (a += b);
    } else if (currentOp === "-") {
        result = (a -= b);
    } else if (currentOp === "*") {
        result = (a *= b);
    } else if (currentOp === "div") {
        if (a !== 0 && b !== 0) {
            result = (a /= b);
        } else {
            alert("NO DIVIDING BY ZERO!!!");
            location.reload();
        }
    } else {
        return "error getOperation()";
    }

}

function displayResult() {

    if ((result % 1) === 0) {
        h1.textContent = result.toFixed(0)
    }   
    else if ((result % 1) !== 0) {
        h1.textContent = result.toFixed(3)
    } else {
        console.log("error displayResult()");
    }
}



function clearArrays() {

    currentNums = [];
    mergeNums = 0;

}

getEvent();


