
function getValues(){
    let startValue = parseInt(document.getElementById("startingValue").value);
    let endValue = parseInt(document.getElementById("endingValue").value);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)){
        if (startValue <= endValue){
            let numbers = generateNumbers(startValue, endValue);
            displayNumbers(numbers);
        }
        else{
            alert("Start value must be less than or equal to end value!");
        }
    }
    else{
        alert("You must enter integers!");
    }
}

function generateNumbers(start, end){
    let numbers = [];
    for(let i = start; i <= end; i++){
        numbers.push(i);
    }
    return numbers;
}

function displayNumbers(numbers){

    let tableBody = document.getElementById("result");
    let html = "";

    for(let i of numbers){
        html += "<tr><td>" + i.toString() + "</td></tr>"
    }

    tableBody.innerHTML = html;
}