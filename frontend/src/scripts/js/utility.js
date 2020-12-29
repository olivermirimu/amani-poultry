const tabUpButton = `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
 onclick="toggleTab(event)" viewBox="0 0 330 330"
style="enable-background:new 0 0 330 330;" xml:space="preserve">
<path data-target="#hens-dropdown" onclick="toggleTab(event)" id="XMLID_225_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394
l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393
C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z" /></svg>`;

function toggleModal(event) {
  event.preventDefault();
  let modalContainer = document.querySelector(".modal");
  let targetModalId = event.target.getAttribute("data-target");
  let targetModal = document.querySelector(targetModalId);
  targetModal.classList.toggle("hide");
  modalContainer.classList.toggle("fade");
}

function toggleTab(event) {
  event.preventDefault();
  let targetTabId = event.target.getAttribute("data-target");
  let targetTab = document.querySelector(targetTabId);

  document.querySelector(`${targetTabId}-svg-down`).classList.toggle("hide");
  document.querySelector(`${targetTabId}-svg-up`).classList.toggle("hide");
  targetTab.classList.toggle("hide");
}

function toggleMenu(event) {
  event.preventDefault();
  document.getElementById("side-nav").classList.toggle("hide-nav");
  document.querySelector("body").classList.toggle("dimmed");
  document.getElementById("nav-right-arrow").classList.toggle("hide");
  document.getElementById("nav-left-arrow").classList.toggle("hide");

}