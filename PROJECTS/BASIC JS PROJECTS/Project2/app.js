let count = 0;
const valueText = document.getElementById("value");
const increaseButton = document.querySelector(".increase");

increaseButton.addEventListener("click", function () {
  count++;
  valueText.textContent = count;
  if (count === 0) {
    valueText.style.color = "black";
  } else if (count > 0) {
    valueText.style.color = "green";
  } else {
    valueText.style.color = "red";
  }
});
const decreaseButton = document.querySelector(".decrease");
decreaseButton.addEventListener("click", function () {
  count--;
  valueText.textContent = count;
  if (count === 0) {
    valueText.style.color = "black";
  } else if (count > 0) {
    valueText.style.color = "green";
  } else {
    valueText.style.color = "red";
  }
});
const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", function () {
  count = 0;
  valueText.textContent = count;
  valueText.style.color = "black"
});

