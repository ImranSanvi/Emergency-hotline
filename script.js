

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
    })
}


