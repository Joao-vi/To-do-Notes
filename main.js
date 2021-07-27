// Selectors

const addNoteBtn = document.querySelector("#add-btn ");
const gridCards = document.querySelector(".grid-cards");
const warningWindow = document.querySelector(".warning-window-container");
let deleteBtn = document.querySelector(".delete");
const cancelBtn = document.querySelector(".cancel");

// Events

addNoteBtn.addEventListener("click", addNewNote);

function changeColor(target) {
  let color = target.classList[1];
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

function addNewNote() {
  const card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `  <div class="title-card">
                  <textarea class="title-card-box" cols="0" rows="1" maxlength="28" placeholder="Note's Title"></textarea>
                </div>
                <div class="text-area-card">
                  <textarea class="text-cards" placeholder="Type anything..."></textarea>
                  <div class="wrraper-btn-color">
                  <i class="fas fa-trash-alt trashBtn"></i>
                    <i class="fas fa-fill-drip icon-pos colorBtnIcon"></i>
                    <div class="colors-pos">
                      <div class="colors">
                        <li class="colorBtn darkOrange"></li>
                        <li class="colorBtn  darkBlue"></li>
                        <li class="colorBtn lightBlue"></li>
                        <li class="colorBtn mediumGreen"></li>
                      </div>
                    </div>
                  </div>
                  </div>

`;
  const textArea = card.querySelector(".text-cards");
  const trashBtn = card.querySelector(".trashBtn");
  const colorBtnIcon = card.querySelector(".colorBtnIcon");
  const colorBtns = card.querySelectorAll(".colorBtn");

  colorBtnIcon.addEventListener("click", (event) => {
    event.target.nextElementSibling.classList.toggle("show");
  });

  colorBtns.forEach((colorBtn) => {
    colorBtn.addEventListener("click", (event) => {
      changeColor(event.target);
    });
  });

  trashBtn.addEventListener("click", (event) => {
    warningWindow.classList.add("show-warning-window");
    verificantion(card);
    refreshMasonry();
  });

  autosize(textArea);

  textArea.addEventListener("autosize:resized", refreshMasonry);
  gridCards.appendChild(card);
  refreshMasonry();
}

function refreshMasonry() {
  const msnry = new Masonry(gridCards, {
    itemSelector: ".card",
  });
}

function verificantion(card) {
  deleteBtn.addEventListener("click", () => {
    card.remove();
    warningWindow.classList.remove("show-warning-window");
    console.log("remove");
  });
  cancelBtn.addEventListener("click", () => {
    warningWindow.classList.remove("show-warning-window");
    console.log("cancel");
  });
}
