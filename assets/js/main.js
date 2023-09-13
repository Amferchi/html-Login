const changeColspan = () => {
  const screenWidth = window.innerWidth;
  const titleLength = document.getElementsByClassName('colspan-title').length;
  const highlightLength = document.getElementsByClassName('colspan-highlight').length;

  if (screenWidth <= 1016) {
    for (let i = 0; i < titleLength; i++) {
      document.getElementsByClassName('colspan-title')[i].colSpan = '2'
    }
    for (let i = 0; i < highlightLength; i++) {
      document.getElementsByClassName('colspan-highlight')[i].colSpan = '1'
    }
  } else {
    console.log("desktop")
    for (let i = 0; i < titleLength; i++) {
      document.getElementsByClassName('colspan-title')[i].colSpan = '8'
    }
    for (let i = 0; i < highlightLength; i++) {
      document.getElementsByClassName('colspan-highlight')[i].colSpan = '7'
    }
  }
}
window.addEventListener("load", changeColspan)
window.addEventListener("resize", changeColspan)

document.addEventListener("DOMContentLoaded", function() {
  var userImages = document.getElementsByClassName("user-image");
  
  for (var i = 0; i < userImages.length; i++) {
      userImages[i].addEventListener("click", function() {
          var dropdown = this.nextElementSibling;
          toggleDropdown(dropdown);
      });
  }
});

function toggleDropdown(dropdown) {
  if (dropdown.style.display === "block") {
      dropdown.style.display = "none";
  } else {
      dropdown.style.display = "block";
  }
}
