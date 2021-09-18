const btn = document.querySelector(".btn-toggle");
const theme = document.querySelector("#theme-link");

btn.addEventListener("click", function() {
  if (theme.getAttribute("href") == "websitestyle.css") {
    theme.href = "websitestyle2.css";
  } else {
    theme.href = "websitestyle.css";
  }
});