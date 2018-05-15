var websiteTitleInput = document.querySelector(".website-title-field");
var websiteUrlInput = document.querySelector(".website-url-field");
var enterButton = document.querySelector(".enter-button");
var generatedField = document.querySelector(".card-container");
var counter = 0;
var inputForm = document.querySelector(".form-fields")

websiteTitleInput.addEventListener("keyup", enterButton);
websiteUrlInput.addEventListener("keyup", enterButton);
enterButton.addEventListener("click", createField);

// ---------------- enter button functionality------------- //

function createField() {
  event.preventDefault();
  siteName = websiteTitleInput.value;
  siteUrl = websiteUrlInput.value;
  generatedField.innerHTML += `
      <article class="card">
          <h2>${siteName}</h2>
          <hr>
          <a href="${siteUrl}">
            <p>${siteUrl}</p>
          </a>
          <hr>
          <button class="read-button">Read</button>
          <button class="delete-button">Delete</button>
        </article>`;
  // var deleteButton = document.querySelector(".delete-button");
  // deleteButton.addEventListener("click", reset);
  inputForm.reset();
  handleEnterButton();
  newDeleteFunction();
}

function newDeleteFunction() {
  var deleteButton = document.querySelectorAll(".delete-button");
  console.log(deleteButton.length)
  deleteButton[deleteButton.length - 1].addEventListener("click", deleteLinkButton);
}
//figure out how to select each card

function deleteLinkButton() {
  // generatedField.innerHTML = "";
  // clearInputFields();
  // counter--;
  console.log(this.parentNode)
  this.parentNode.parentNode.removeChild();

}

function handleEnterButton() {
  document.querySelector(".number-of-links").innerText = counter;
  counter++;
}


//------------------- READ BUTTON --------------------------//

// var readButton = document.querySelector(".read-button");
// var readCounter = 0;

// readButton.addEventListener("click", function() {
//   toggleReadLink();
// });

// function addOneToReadCounter() {
//   document.querySelector(".number-of-read").innerText = readCounter;
//   readCounter++;

//   function toggleReadLink() {
//     var element = document.querySelector(".card-mockup");
//     element.classList.toggle("card-marked-as-read");
//     addOneToReadCounter();
//   }
// }
// ----------------------CLEAR ALL READ LINKS----------------------//

var clearButton = document.querySelector(".clear-all-links");
clearButton.addEventListener("click", clearAllLinks);

function clearAllLinks() {
  (document.querySelector(".number-of-links").innerText = 0), (counter = 0);
  (document.querySelector(".number-of-read").innerText = 0), (readCounter = 0);
}

//pseudo code. doesn't actually do anything yet. This code will display an error if the user doesn't fill in the fields properly.

// function noTextEntered(event){
//   event.preventDefault();
//   if(titlefield.value == "" && urlField.value == ""){
//     alert("please fill in all the fields");
//   }
//   else if (titleField.value == ""){
//     alert("fill in the title field");
//   }
//   else if (urlField.value == "");
//     alert("fill in the url field");
// } else {
//   createCard();
// }

/* indicate a time stamp*/
/* Date.now , set this somewhere on our template literal with vanilla or jquery*/
