var websiteTitleInput = document.querySelector(".website-title-field");
var websiteUrlInput = document.querySelector(".website-url-field");
var enterButton = $(".enter-button");
var generatedField = $(".card-container");
var counter = 0;
var readCounter = 0;
var card = $(".card");

websiteTitleInput.addEventListener("keyup", enterButton);
websiteUrlInput.addEventListener("keyup", enterButton);
enterButton.on("click", createField);
generatedField.on("click", deleteLinkButton);


function createField() {
  event.preventDefault();
  siteName = websiteTitleInput.value;
  siteUrl = websiteUrlInput.value;
  $('.card-container').prepend(`
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
  handleEnterButton();
};

function deleteLinkButton(event) {
  if (event.target.classList.contains("delete-button")) {
      event.target.parentNode.remove();
      counter--;
      $(".number-of-links").text(counter);
  }  
};

function handleEnterButton() {
  counter++;
  $(".number-of-links").text(counter);
};

$('.right-side').on('click', '.read-button', function() {
  $(this).parent().toggleClass('card-marked-as-read');
});

function disableButtons(){
  enterButton.disabled = true;
};

$('.website-title-field').on("keyup", action);
function action() {
    if($('.website-title-field').val().length > 0) {
     $('.enter-button').prop("disabled", false);
  }else {
     $('.enter-button').prop("disabled", true);
     disableButtons();
  }
};

$('.website-url-field').on("keyup", action);
function action() {
    if($('.website-url-field').val().length > 0) {
     $('.enter-button').prop("disabled", false);
  }else {
     $('.enter-button').prop("disabled", true);
  }
};
