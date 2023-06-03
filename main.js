let btn = document.querySelector("button");
let success = document.querySelector(".success");
let container = document.querySelector(".container");
let input = [];
btn.addEventListener("click", validEmail);

function validEmail(e) {
  e.preventDefault();

  input = document.getElementById("email").value;

  // first
  if (
    input.indexOf("@") == -1 ||
    input.indexOf(".") == -1 ||
    input == null ||
    input.indexOf("@") == 0 ||
    input.indexOf(".") == 0
  ) {
    document.querySelector(".checkEmail").innerHTML = "Invalid email address!";
    return false;
  } else {
    container.classList.add("hide");
    success.classList.remove("hide");
    document.querySelector(".success span").innerHTML = input;
  }
  input.innerHTML = [];
}
