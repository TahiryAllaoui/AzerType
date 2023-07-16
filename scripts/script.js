const listeMots = ["Maman", "Famille", "interlocution"];
const listePhrase = ["Annie, are you OK?", "Smooth criminal is hitting", "Mickel Jackson is a Pop Star"];
let currentList = listeMots;
let score = 0;
let currentIndex = 0;
let selectedOption = document.querySelector("#zone-choix");
selectedOption.value = "mots"

let keyword = document.querySelector("#mot-a-entrer");
let userInput = document.querySelector("#user-input");
let validateButton = document.querySelector("#validate-button");
keyword.textContent = currentList[currentIndex];
let paragraphScore = document.createElement("p");
let divScore = document.getElementById("score");
divScore.appendChild(paragraphScore);


selectedOption.addEventListener("change", (e) => {
    console.log(e.target);
    currentList = (e.target.value === "mots") ? listeMots : listePhrase;
    keyword.textContent = currentList[currentIndex];
})

validateButton.addEventListener("click", () => {
    if (currentList[currentIndex] === userInput.value)
        score++;
    currentIndex++;
    keyword.textContent = currentList[currentIndex];
    paragraphScore.textContent = `Votre score: ${score} / ${currentList.length}`;
})

document.addEventListener("keypress", (e) => {
    let type = e.key;
    if (type == "Enter") {
        if (currentList[currentIndex] === userInput.value)
            score++;
        currentIndex++;
        keyword.textContent = currentList[currentIndex];
        paragraphScore.textContent = `Votre score: ${score} / ${currentList.length}`;
        userInput.value = "";
    }
})