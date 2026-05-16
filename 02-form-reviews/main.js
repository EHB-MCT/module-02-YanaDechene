// 1. Setup Data: Array of Objects
// We start with some dummy data to simulate existing reviews
let reviews = [
    {
        name: "Mike Derycke",
        rating: 5,
        text: "Great course. Come study MCT at EHB!"
    },
    {
        name: "P. Dickx",
        rating: 2,
        text: "I liked the orignal more."
    },
    {
        name: "Student 1",
        rating: 1,
        text: "Hard."
    }
];

// 2. Select DOM Elements
let reviewsCon = document.querySelector("#reviews-container");
let reviewForm = document.querySelector("#review-form");
let nameInput = document.querySelector("#name");
let ratingInput = document.querySelector("#rating");
let reviewInput = document.querySelector("#review");
// 3. Render Function
// This function should render the reviews array, based on the template in the HTML file.
function renderReviews() {
    console.log("Render the reviews");
    reviewsCon.innerHTML = " ";
    reviews.forEach(function(review) {
        let stars = "⭐".repeat(review.rating);

        reviewsCon.innerHTML += `<div class="review-item">
                <div class="review-header">
                    <span class="review-name">${review.name}</span>
                    <span class="review-rating">${stars}</span>
                </div>
                <p class="review-text">${review.text}</p>
            </div>`;
    });
}

// 4. Initial Render
// Call the function once on load to show the initial data
renderReviews();

// 5. Handle Form Submission
// 5.1 Stop the page from reloading!
reviewForm.addEventListener("submit", function(e){
    e.preventDefault();
    // 5.2 Create a new object from input values
    let newReviews = {
        name: nameInput.value,
        rating: ratingInput.value,
        text: reviewInput.value
    };
    // 5.3 Add (push) the new object to our data array
    reviews.push(newReviews);

    // 5.4 Re-render the list to show the new item
    renderReviews();

    // Optional: Clear the form fields
    nameInput.value = "";
    ratingInput.value = "";
    reviewInput.value = "";
});