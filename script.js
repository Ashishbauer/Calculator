//select elements
const inputBox = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

// button joh value store kare dabane par
let inputValue = "";

buttons.forEach(function(button){
    button.addEventListener("click", function(){
        const text = button.innerHTML;

        if(text === "AC"){
            inputValue = "";
            inputBox.value = inputValue;
        }
        else if(text === "DEL"){
            inputValue = inputValue.slice(0,-1);
            inputBox.value = inputValue;
        }
        else if(text === "="){
            inputValue = eval(inputValue);
            inputBox.value = inputValue;
        }
        else{
            inputValue = inputValue + text;
            inputBox.value = inputValue;
        }
    });
})