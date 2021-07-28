document.querySelector(".email-input").addEventListener("focus", () => {
  document.querySelector(".email-class").style.color = "#3498db";
});
document.querySelector(".email-input").addEventListener("blur", () => {
  document.querySelector(".email-class").style.color = "grey";
});
document.querySelector(".password-input").addEventListener("focus", () => {
  document.querySelector(".password-class").style.color = "#3498db";
});
document.querySelector(".password-input").addEventListener("blur", () => {
  document.querySelector(".password-class").style.color = "grey";
});
