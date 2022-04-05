var ratingBox = document.getElementById("rating-box");
var thankYouBox = document.getElementById("thankYou-box");
var reviewOption = document.getElementsByClassName("review-option");
var submitButton = document.getElementsByTagName("button");
var selectedRatingElement = document.getElementById("selected");

thankYouBox.style.display = "none";

for ( var option of reviewOption ) {
    option.addEventListener( "click", function(){
        localStorage.setItem("numberSelected", this.innerHTML );
    })
}

submitButton[0].addEventListener( "click", function(){
    thankYouBox.style.display = "block";
    ratingBox.style.display = "none";
    selectedRatingElement.innerHTML = localStorage.getItem("numberSelected");
    localStorage.clear();
})


