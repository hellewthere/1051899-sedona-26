'use strict';
/** @type {(Element|null)} */
var searchButton = document.querySelector(".search-form-open");
/** @type {(Element|null)} */
var popup = document.querySelector(".modal-search");
/** @type {(Element|null)} */
var form = popup.querySelector("form");
/** @type {(Element|null)} */
var appointment-date = popup.querySelector("[name=appointment-date]");
/** @type {(Element|null)} */
var appointment-date-sec = popup.querySelector("[name=appointment-date-sec]");
document.documentElement.classList.replace("no-js", "js"), searchButton.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.toggle("modal-show");
  popup.classList.remove("modal-error");
  appointment-date.focus();
}), form.addEventListener("submit", function(event) {
  if (!(appointment-date.value && appointment-date-sec.value && !adults.value)) {
    event.preventDefault();
    popup.classList.add("modal-error");
  }
});
