

function numberOfHeart(){
    const available = document.getElementById('hear-count');
    let availableConverted = parseInt(available.innerText);
    availableConverted += 1;
    available.innerText = availableConverted;
    return availableConverted;
}
const hearts = document.getElementsByClassName("heart");

for (let heart of hearts) {
  heart.addEventListener("click", function () {
    numberOfHeart();
  });
}


