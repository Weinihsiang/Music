
var button = document.getElementById("websiteButton");
var list = document.getElementById("websiteList");

button.addEventListener("click", function() {
      if (list.style.display === "none") {
        list.style.display = "block";
      } 
      else {
        list.style.display = "none";
      }
    });

function scrollToMiddle() {
  var scrollHeight = document.documentElement.scrollHeight;
  var desiredHeight = scrollHeight * 0.91; // Adjust the value to fine-tune the scroll position
  window.scrollTo(0, desiredHeight);
}

function scrollToBottom() {
  var scrollHeight = document.documentElement.scrollHeight;
  var desiredHeight = scrollHeight * 0.09; // Adjust the value to fine-tune the scroll position
  window.scrollTo(0, desiredHeight);
}