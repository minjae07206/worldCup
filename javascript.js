const worldCupSelectButton = document.querySelector("#world-cup-select-button");
const worldCupForm = document.querySelector("#submit-world-cup");
const whichWorldCup = document.querySelector("#world-cup-choice");
const qatar2022 = document.querySelector(".qatar-2022");
const russia2018 = document.querySelector(".russia-2018");
const brazil2014 = document.querySelector(".brazil-2014");
const southafrica2010 = document.querySelector(".south-africa-2010");
const germany2006 = document.querySelector(".germany-2006");
const koreajapan2002 = document.querySelector(".korea-japan-2002");
const countries = document.querySelector(".countries");
const worldCupClassList = [];
worldCupClassList.push(qatar2022);
worldCupClassList.push(russia2018);
worldCupClassList.push(brazil2014);
worldCupClassList.push(southafrica2010);
worldCupClassList.push(germany2006);
worldCupClassList.push(koreajapan2002);
const worldCupList = ["Qatar 2022", "Russia 2018", "Brazil 2014", "South Africa 2010", "Germany 2006", "Korea Japan 2002"];
let previousWorldCup = whichWorldCup.value;
let currentWorldCup;
let flagClicked = false;
function submitWorldCup (event) {
    event.preventDefault();
    currentWorldCup = whichWorldCup.value;
    switchingWorldCup();
}

function switchingWorldCup () {
    for (let i = 0; i < worldCupList.length; i++){
        if (worldCupList[i] === currentWorldCup){
            worldCupClassList[i].classList.remove("hidden");
            
        }
        else if (worldCupList[i] === previousWorldCup){
            worldCupClassList[i].classList.add("hidden");
        }
    } 
    previousWorldCup = currentWorldCup;
}
function showCard(event){
    console.log(event);
    event.preventDefault();
    if (flagClicked === true){
        return null;
    } else {
        //creatingNextButton();
        creatingCloseButton();
        const playerCard = document.createElement("img");
        playerCard.className = "playercard";
        //playerCard.src = "Country cards in png/brazil-2022.png";
        //finding the src image
        const worldCupClassName = event.target.offsetParent.className;
        for (let i=0; i < worldCupClassName.length; i++){
            if (worldCupClassName[i] === "-"){
                var playerCardImageName = worldCupClassName.slice(i);
                break;
            }
        }
        playerCard.src = `Country cards in png/${event.target.alt}${playerCardImageName}.png`;
        document.body.appendChild(playerCard);
        flagClicked = true;
        //making the background dark
        countries.style.filter = "brightness(40%)";
        countries.style.background = "grey";
    }
}    
function creatingNextButton() {
    const nextButton = document.createElement("div");
    const leftNextButton = document.createElement("div");
    leftNextButton.style.width = "30px";
    leftNextButton.style.height = "30px";

    const rightNextButton = document.createElement("div")
    nextButton.appendChild(leftNextButton);
    nextButton.appendChild(rightNextButton);
    document.body.appendChild(nextButton);
    nextButton.className = "nextButton";

}    
function creatingCloseButton(){
    const closeButton = document.createElement("div");
    closeButton.className = "closeButton";
    document.body.appendChild(closeButton);
    closeButton.addEventListener("click", clickCloseButton);

}
function clickCloseButton(event){
    event.preventDefault();
    console.log(event);
    const closeButton = document.querySelector(".closeButton");
    const playerCard = document.querySelector(".playercard");

    playerCard.remove();
    closeButton.remove();
    flagClicked = false;
    // making the background back lighter
    countries.style.filter = "brightness(100%)";
    countries.style.background = "white";


}

worldCupForm.addEventListener("submit", submitWorldCup);

qatar2022.addEventListener("click", showCard);
russia2018.addEventListener("click", showCard);
brazil2014.addEventListener("click", showCard);
southafrica2010.addEventListener("click", showCard);
germany2006.addEventListener("click", showCard);
koreajapan2002.addEventListener("click", showCard);