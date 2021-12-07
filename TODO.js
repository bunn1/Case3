// Hämtar ett element mha dess id
let ul = document.getElementById("content");

//Hämtar element form
let form = document.querySelector("form");

// Funktionen letar/lyssnar efter lägga till text 
form.addEventListener("submit", function (event) {
    // förhindra förvald händelse
    event.preventDefault();

    //Hämtar upp element mha id 
    let input = document.getElementById("text");
    console.log(input, input.value);

    // skapar list element

    let li = document.createElement("li");

    // Sätter värdet på mitt list item

    li.innerText = input.value;

    // Om värdet i boxen är 0 läggs inget till på listan när du trycker på knappen
    if (input.value.length > 0) {
        ul.appendChild(li);
    }
    // Skapar knapp
    let removeButton = document.createElement("button");

    //Ger knappen ett kryss
    removeButton.innerHTML = "&#10008";

    // Appendar en knapp 
    li.appendChild(removeButton);

    //ger input fältet ett nollvärde efter man tryckt Add
    input.value = ""
})


let ulList = document.getElementById("content")

//Lyssnar efter om ngn trycker på remove button el streck över text
ulList.addEventListener("click", function (event) {

    // remove list item
    if (event.target.nodeName === "BUTTON") {
        event.target.parentElement.remove();

        // markering sker och streck kommer över text
    } else {
        event.target.classList.toggle("highlight")
    }
})


// Händelselyssnare för knappen addImage
imgAdd.addEventListener("click", function () {

    // skapa ett bild element 

    let img = new Image(100, 100);
    console.log("img", img);

    //Hämtar upp id med url
    let url = document.getElementById("url");

    // ange src - källan till bild
    img.src = url.value;
    let li = document.createElement("li");
    li.appendChild(img)
    // Skapar knapp
    let removeButton = document.createElement("button");

    //Ger knappen ett kryss
    removeButton.innerHTML = "&#10008";
    li.appendChild(removeButton);
    ul.appendChild(li);

});















