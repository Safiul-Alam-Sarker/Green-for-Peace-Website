//Create function to select elements
const selectElement = (element) => document.querySelector(element);
//Open and close nav on click
selectElement(".menu-icons").addEventListener("click", () => {
  selectElement("nav").classList.toggle("active");
});

// // see more feature in blogs
function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
