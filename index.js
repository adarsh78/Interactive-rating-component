const mainCard = document.querySelector(".main-card");
const thankyouCard = document.querySelector(".thankyou-card");
const ratings = document.querySelectorAll(".btn");
const submitButton = document.getElementById("btn-submit-id");
const finalRating = document.getElementById("rate");

ratings.forEach((rate) => {
    rate.addEventListener("click", () => {

      finalRating.innerHTML = rate.innerHTML
    })
  })

submitButton.addEventListener("click", () => {
    mainCard.style.display = "none"
    thankyouCard.classList.remove("thankyou-card-hidden")
})

