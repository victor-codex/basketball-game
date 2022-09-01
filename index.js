let homeEL = document.getElementById("home-el");
let guestEL = document.getElementById("guest-el");

let homeCount = 0;
let guestCount = 0;
// let count = 0;

function home1Btn() {
  homeCount += 1;
  homeEL.textContent = homeCount;
}
function home2Btn() {
  homeCount += 2;
  homeEL.textContent = homeCount;
}
function home3Btn() {
  homeCount += 3;
  homeEL.textContent = homeCount;
}

function guest1Btn() {
  guestCount += 1;
  guestEL.textContent = guestCount;
}
function guest2Btn() {
  guestCount += 2;
  guestEL.textContent = guestCount;
}
function guest3Btn() {
  guestCount += 3;
  guestEL.textContent = guestCount;
}

function resetBtn() {
  homeEL.textContent = 0;
  guestEL.textContent = 0;
  homeCount = 0;
  guestCount = 0;
}
