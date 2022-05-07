let selectedRatingButton = null;
const ratingButtons = document.getElementsByClassName("btn__rate");

for (ratingButton of ratingButtons) {
    ratingButton.addEventListener('click', (event) => {
        const target = event.target;
        //Adding this check because if a user clicks on the already selected button no action should be taken
        //To understand remove this if statement and click on the already selecting rating button.
        if (target != selectedRatingButton) { 
            target.classList.remove('btn__rate__hover');
            target.classList.add('selected');

            if (selectedRatingButton != null) {
                selectedRatingButton.classList.add('btn__rate__hover');
                selectedRatingButton.classList.remove('selected');
            }

            selectedRatingButton = target;
        }
    });
}

//SUBMIT Button action
const button = document.querySelector("button");

button.addEventListener('click', () => {
    if(selectedRatingButton != null) {
        document.getElementById("card__rating").classList.add("hide");
        document.getElementById("card__thanks").classList.remove("hide");
        document.getElementById("rating__selected").innerText = "You selected " + selectedRatingButton.innerText + " out of 5";
        selectedRatingButton = null;
    } 
});