
callHistory = [];

function numberOfHeart(){
    const available = document.getElementById('hear-count');
    let availableConverted = parseInt(available.innerText);
    availableConverted += 1;
    available.innerText = availableConverted;
    return availableConverted;
}

function numberOfCopy(){
    const available = document.getElementById("copy");
    let availableConverted = parseInt(available.innerText);
    availableConverted += 1;
    available.innerText = availableConverted;
    return availableConverted;
}

function coinChange(){
    const available = document.getElementById('coin-count');
    let availableConverted = parseInt(available.innerText);
    if(availableConverted < 20){
        alert('Not enough coin');
        return false;
    }
    availableConverted -= 20;
    available.innerText = availableConverted;
    return true;
}

// Heart Button functionality
const hearts = document.getElementsByClassName("heart");
for (let heart of hearts){
  heart.addEventListener("click", function () {
    numberOfHeart();
  });
}


// Copy Button Functionality
const copyBtn = document.getElementsByClassName("copy-btn");
for(let copy of copyBtn){
    copy.addEventListener('click', function(){
        numberOfCopy();
        const card = copy.parentElement.parentElement;
        const serviceNumber = card.querySelector(".service-number").innerText;
        navigator.clipboard.writeText(serviceNumber).then(() => {
            alert("Copied Successfully: " + serviceNumber);
        })
    })
}


// call Button clicked
const calls = document.getElementsByClassName("call-btn");
for(let call of calls){
    call.addEventListener('click', function(){
        const b = coinChange();
        if(b){
            const card = call.parentElement.parentElement;
            const serviceName = card.querySelector(".service-name").innerText;
            const serviceNumber = card.querySelector(".service-number").innerText;

            alert(serviceName + "\n" + serviceNumber);
        }
    })
}


