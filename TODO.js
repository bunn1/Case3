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

// Function för att ta bort bild
content.addEventListener("dblclick", function (event) {
    console.log(event.target);
    //Ta bort med metoden remove
    if (event.target === content) {
        return;
    }
    event.target.remove();

})

















// let removeButton = getElementById("content");



//  // Skapar knapp
//  let removeButton = document.createElement("button");

//  //Ger knappen ett kryss
//  removeButton.innerHTML = "&#10008";

//  // Appendar en knapp 
//  li.appendChild(removeButton);

//  //ger input fältet ett nollvärde efter man tryckt Add
//  input.value = ""





// content.addEventListener("click", function(event){

//     // är det aktuella elementet "innehållselementet" så returnera direkt

//     let elementToRemove = event.target.parentElement;
//     console.log(event.target, event.target.parentElement);
//     elementToRemove.remove();
// })



//lägga till en bild - img elementet

// Knappen för att lägga till en bild

// const removeImg = document.getElementById("imgAdd");

// listan.appendChild(imgAdd);

// const url = document.getElementById("url");



// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//     // förhindra förvald händelse
//     event.preventDefault();

// if (input.value.length > 0) {
//     ul.appendChild(li);
// }
// // Skapar knapp
// let removeButton = document.createElement("button");

// //Ger knappen ett kryss
// removeButton.innerHTML = "&#10008";

// // Appendar en knapp 
// li.appendChild(removeButton);

// //ger input fältet ett nollvärde efter man tryckt Add
// input.value = ""
// })










// function add_img() {
//     var img = document.createElement('img');
//     img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png';
//     document.getElementById('body').appendChild(img);
// }




// let Image = document.createElement("#Image");
// let body = document.querySelector("#content");
// content.appendChild(Image)


// // Händelselyssnare för knappen addImage
// addImage.addEventListener("click", function(){

//     // skapa ett bild element med JS - new instansierar ett objekt
//     // I JS finns det inbyggda objekt - Image är ett av dem (skall skrivas med stor bokstav)
//     let img = new Image();
//     console.log("img", img);

// });

// // ange src - källan till bilden (högerklicka på bild och kopiera bildadress)
//     image.src = url.value;

// content.appendChild(img);


// const ulLista = document.createElement("ul");
// let bodyElement = document.querySelector("body")
// newElement.textContent = "hej o hå";
// bodyElement.appendChild(ul);

// let newElement = document.createElement("p");
// let bodyElement = document.querySelector("body");

// newElement.textContent = "Or do I exist entirely in your imagination?";

// bodyElement.appendChild(newElement);



// var img = document.getElementsByTagName("img");

// function add_img() { 
// 	var img = document.createElement('img'); 
//     img.src = 'https://media.geeksforgeeks.org/wp-content/uploads/20190529122828/bs21.png'; 
// 	document.get.querySelector('body').appendChild(img);
// }








// const img = document.createElement("img");
// img.src = "";
// document.body.appendChild(img);






// skapa list element
// stopp li elementet i ul listan
//skapa ett div element
//stoppa in div elementet i list elementet
//få en funktion att köras när man trycker på div elementet


//skapar ett image elementet
//ger den src /länk
//appendar till listitem = li med image item inuti
// efter skapat list item skall bild inkluderas