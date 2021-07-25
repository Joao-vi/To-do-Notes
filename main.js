// Selectors
let textAreas = document.querySelectorAll(".text-cards");
const addNoteBtn = document.querySelector("#add-btn ");
const gridCards = document.querySelector(".grid-cards");
let colorBtn = document.querySelectorAll(".colorBtn");

// -- Colors
let darkOrange = document.querySelectorAll(".darkOrange");
let darkBlue = document.querySelectorAll(".darkBlue");
let lightBlue = document.querySelectorAll(".lightBlue");
let mediumGreen = document.querySelectorAll(".mediumGreen");

// Events

addNoteBtn.addEventListener("click", addNote);

// Functions
function refeshColorsBtn() {
  //btns
  colorBtn = document.querySelectorAll(".colorBtn");
  colorBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      show(event.target);
    });
  });
  //colors
  darkOrange = document.querySelectorAll(".darkOrange");
  darkBlue = document.querySelectorAll(".darkBlue");
  lightBlue = document.querySelectorAll(".lightBlue");
  mediumGreen = document.querySelectorAll(".mediumGreen");

  darkOrange.forEach((darkOrange) => {
    darkOrange.addEventListener("click", (event) => {
      changeColor(event.target);
    });
  });
  darkBlue.forEach((darkBlue) => {
    darkBlue.addEventListener("click", (event) => {
      changeColor(event.target);
    });
  });
  lightBlue.forEach((lightBlue) => {
    lightBlue.addEventListener("click", (event) => {
      changeColor(event.target);
    });
  });
  mediumGreen.forEach((mediumGreen) => {
    mediumGreen.addEventListener("click", (event) => {
      changeColor(event.target);
    });
  });
}
function show(target) {
  target.nextElementSibling.classList.toggle("show");
}
function changeColor(target) {
  let color = target.classList[0];
  console.log(color);
  switch (color) {
    case "darkOrange": {
      target.closest(".card").style.backgroundColor = "#fe7f2d";
      target.closest(".card").style.color = "hsl(240, 24%, 94%)";
      break;
    }
    case "darkBlue": {
      target.closest(".card").style.backgroundColor = "#233d4d";
      target.closest(".card").style.color = "hsl(240, 24%, 94%)";
      break;
    }
    case "lightBlue": {
      target.closest(".card").style.backgroundColor = "#b0e3ff";
      target.closest(".card").style.color = "var(--black)";
      break;
    }
    case "mediumGreen": {
      target.closest(".card").style.backgroundColor = "#329f5b";
      target.closest(".card").style.color = "var(--black)";
      break;
    }
    default: {
      return;
    }
  }
}
function refreshTextAreas() {
  textAreas = document.querySelectorAll(".text-cards");

  textAreas.forEach((textArea) => {
    textArea.addEventListener("keydown", (keyEvent) => {
      if (keyEvent.key == "Enter") {
        countEnter();
      } else {
        return;
      }
    });
  });
}

let count = 1;
function countEnter() {
  if (count === 2) {
    refeshMasonry();
    count = 1;
  } else {
    count++;
  }
}

function addNote() {
  //creating tags

  let card = document.createElement("div");
  card.classList.add("card");

  let titleCard = document.createElement("div");
  titleCard.classList.add("title-card");

  let textAreaCard = document.createElement("div");
  textAreaCard.classList.add("text-area-card");

  let textContent = document.createElement("TEXTAREA");
  textContent.classList.add("text-area-card", "text-cards");
  textContent.setAttribute("placeholder", "Type here...");

  let textTitle = document.createElement("TEXTAREA");
  textTitle.classList.add("title-card-box");

  let wrapperBtnColor = document.createElement("div");
  wrapperBtnColor.classList.add("wrraper-btn-color");

  let icon = document.createElement("i");
  icon.classList.add("fas", "fa-fill-drip", "icon-pos", "colorBtn");
  wrapperBtnColor.appendChild(icon);

  let colorsPos = document.createElement("div");
  colorsPos.classList.add("colors-pos");
  wrapperBtnColor.appendChild(colorsPos);

  let colors = document.createElement("div");
  colors.classList.add("colors");

  let darkOrange = document.createElement("li");
  darkOrange.classList.add("darkOrange");

  let darkBlue = document.createElement("li");
  darkBlue.classList.add("darkBlue");

  let lightBlue = document.createElement("li");
  lightBlue.classList.add("lightBlue");

  let mediumGreen = document.createElement("li");
  mediumGreen.classList.add("mediumGreen");

  colors.appendChild(darkOrange);
  colors.appendChild(darkBlue);
  colors.appendChild(lightBlue);
  colors.appendChild(mediumGreen);

  colorsPos.appendChild(colors);

  textAreaCard.appendChild(wrapperBtnColor);

  textTitle.setAttribute("cols", "0");
  textTitle.setAttribute("rows", "1");
  textTitle.setAttribute("placeholder", "Note's title");
  textTitle.setAttribute("maxlength", "24");

  textTitle.setAttribute("wrap", "off");

  //nesting tags
  gridCards.appendChild(card);
  card.appendChild(titleCard);
  titleCard.appendChild(textTitle);
  card.appendChild(textAreaCard);
  textAreaCard.appendChild(textContent);
  autosize(textContent);
  refreshTextAreas();
  refeshMasonry();
  refeshColorsBtn();
}

// Masonry Library
function refeshMasonry() {
  let msnry = new Masonry(gridCards, {
    itemSelector: ".card",
  });
}
