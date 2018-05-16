var websiteTitleInput = document.querySelector(".website-title-field");
var websiteUrlInput = document.querySelector(".website-url-field");
var enterButton = document.querySelector(".enter-button");
var generatedField = document.querySelector(".card-container");
var counter = 0;
var inputForm = document.getElementById("form-fields");
var card = $(".card");

websiteTitleInput.addEventListener("keyup", enterButton);
websiteUrlInput.addEventListener("keyup", enterButton);
enterButton.addEventListener("click", createField);
generatedField.addEventListener("click", deleteLinkButton);



// ---------------- enter button functionality------------- //

function createField() {
  event.preventDefault();
  siteName = websiteTitleInput.value;
  siteUrl = websiteUrlInput.value;
  $('.card-container').append(`
      <article class="card">
          <h2>${siteName}</h2>
          <hr>
          <a href="${siteUrl}">
            <p>${siteUrl}</p>
          </a>
          <hr>
          <button class="read-button">Read</button>
          <button class="delete-button">Delete</button>
        </article>`);
  inputForm.reset();
  handleEnterButton();

}

function deleteLinkButton(event) {
  if (event.target.classList.contains("delete-button")) {
      event.target.parentNode.remove();
      counter--;
      $(".number-of-links").text(counter);
  }  
}

function handleEnterButton() {
  counter++;
  $(".number-of-links").text(counter);
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
