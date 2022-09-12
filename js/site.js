function runTheApp(){

    let input = getUserInput();

    if(isValidInput(input)){
        let numbersArray = generateNumbers(input);
        displayEvensBold(numbersArray);
    }
}

function getUserInput(){
    let start = document.getElementById("startingValue").value;
    let end = document.getElementById("endingValue").value;

    return [start,end];
}

function isValidInput(input){
    if (!parseInt(input[0]) || !parseInt(input[1])){
        alert("Inputs must be integers!");
        return false;
    }

    if (input[0] > input[1]){
        alert("Starting number must be less than or equal to ending number!");
        return false;
    }

    return true;
}

function generateNumbers(input){
    let numbers = [];
    for(let i = input[0]; i <= input[1]; i++){
        numbers.push(i);
    }
    return numbers;
}

function displayEvensBold(numbersArray){

    let tableBody = document.getElementById("result");
    let html = "";

    for(let i of numbersArray){
        if (i % 2 == 0){
            html += "<tr><td><strong>" + i.toString() + "</strong></td></tr>";
        }
        else{
            html += "<tr><td>" + i.toString() + "</td></tr>"
        }      
    }

    tableBody.innerHTML = html;
}