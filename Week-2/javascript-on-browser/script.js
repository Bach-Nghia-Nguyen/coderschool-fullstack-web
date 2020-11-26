// Section 1
function sectionOne() {
  var btnChangeContent = document.getElementById("s1-btn-content");
  btnChangeContent.addEventListener("click", function () {
    document.getElementById("s1-text").innerHTML =
      "by adding Event Listener to the button.";
  });

  var btnChangeAttribute = document.getElementById("s1-btn-attribute");
  btnChangeAttribute.addEventListener("click", function () {
    var icon = document.getElementById("s1-icon");
    console.log(icon.classList);
    if (icon.className === "far fa-heart") {
      icon.className = "fas fa-heart";
    } else {
      icon.className = "far fa-heart";
    }
  });
}
function hideSectionOne() {
  // Select all the buttons in section one
  var buttons = document.querySelectorAll("#s1 .btn");
  console.log(buttons);
  // Add .invisible to the button className
  for (var i = 0; i < buttons.length; i++) {
    buttons[i].classList.add("invisible");
    // buttons[i].style.display = "none";
  }
}
sectionOne();

// Section 2
function sectionTwo() {
  document
    .getElementById("s2-input-name")
    .addEventListener("keyup", function (event) {
      var input = event.target;
      var span = input.parentNode.childNodes[3];
      var firstName = input.value.split(" ")[0];
      span.innerHTML = "First Name: " + firstName;
    });

  var maxLength = 10;

  document
    .getElementById("s2-input-email")
    .addEventListener("keydown", function (event) {
      var input = event.target;
      var span = input.parentNode.childNodes[3];

      if (event.key === " ") {
        span.innerHTML = "Space is invalid";
        span.style.color = "red";
        input.value = input.value.trim();
        return;
      }

      if (input.value.length <= maxLength) {
        span.style.color = "#2ecc71";
        span.innerHTML = `${maxLength - input.value.length} characters left`;
      } else {
        input.value = input.value.slice(0, maxLength);
      }
    });

  document
    .getElementById("s2-btn-reset")
    .addEventListener("click", function (event) {
      var resetBtn = event.target;
      var inputName = resetBtn.parentNode.childNodes[1].childNodes[1];
      var spanName = resetBtn.parentNode.childNodes[1].childNodes[3];
      var inputEmail = resetBtn.parentNode.childNodes[3].childNodes[1];
      var spanEmail = resetBtn.parentNode.childNodes[3].childNodes[3];

      inputName.value = "";
      inputEmail.value = "";
      spanName.innerHTML = "First Name: ";
      spanEmail.innerHTML = "Maximum 10 characters";
      spanEmail.style.color = "black";
    });
}
sectionTwo();

// Section 3
function addItem() {
  var item = document.createElement("li");
  var checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  var label = document.createElement("label");
  label.innerHTML = "New Item";
  label.insertBefore(checkbox, label.childNodes[0]);

  item.appendChild(label);

  document.getElementById("s3-list").appendChild(item);
}
function sectionThree() {
  document.getElementById("s3-btn-add").addEventListener("click", addItem);
}
sectionThree();
