//select elements
const inputBox = document.querySelector("#inputBox");
const buttons = document.querySelectorAll("button");

//inputvalue start from empty
let inputValue = "";

//function clear
function clearInput(){
    inputValue = "";
    inputBox.value = "";
}

//function remove last digit
function removeLastDigit(){
    inputValue = inputValue.slice(0,-1);
    inputBox.value = inputValue;
}

//function solving expression
function solveExpression(){
    try{
        inputBox.value = eval(inputValue);
    }
    catch{
        inputBox.value = "Error";
        inputValue = "";
    }
}

// function for button text add to input
function addToInput(text){
    inputValue = inputValue + text;
    inputBox.value = inputValue;
}

buttons.forEach(button => {
    button.addEventListener("click", function(){
        const text = button.innerHTML;

        if(text === "AC"){
            clearInput();
        }
        else if(text === "DEL"){
            removeLastDigit();
        }
        else if(text === "="){
            solveExpression();
        }
        else{
            addToInput(text);
        }
    });
})