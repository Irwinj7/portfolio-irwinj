let goButton = document.getElementById(`go-button`)
let todaysResultsDiv = document.getElementsByClassName(`results-div`)
const baseUrl = "https://tradestie.com/api/v1/apps/reddit"
let firstResults = document.getElementById(`h1-1results`)

goButton.addEventListener("click", (event) => {
    event.preventDefault();
    
    fetch(baseUrl)
    .then((response) => response.json())
    .then((json) => {displayCard(json)})
    .catch(displayError);
})

function displayCard(json){
    for (let i = 0; i < json.length; i++) {
        firstResults.toggleAttribute('hidden')
        let newP = document.createElement('p')
        newP.textContent = json[i].no_of_comments
        firstResults.append(newP)
    }
   
    // let stocks = json
    // for (const stock of stocks) {
    //     let numberOfComm = obj.no_of_comments.value

    //     comm[obj] = document.createElement(`p`)
    //     comm[obj].textContent = numberOfComm

    // }
}



function displayError(error) {
    console.log(error)
    // let body = document.getElementsByTagName(`body`)
    // let footer = document.createElement("footer")
    // body.append(footer)
    // body.style.display = "block";
  
    // const paragraph = document.createElement("p");
    // paragraph.textContent = "Something went wrong!";
  
    // const errorMessage = document.createElement("p");
    // errorMessage.classList.add("error-message");
    // errorMessage.textContent = error;
  
    // body.append(paragraph, errorMessage);
}