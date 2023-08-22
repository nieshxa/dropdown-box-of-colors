const colorOptions = [
  "cyan",
  "grey",
  "blue",
  "yellow",
  "orange",
  "black",
  "magenta",
  "green",
];

const boxesContainer = document.getElementById("boxes-container");

for (let i = 0; i < 10; i++) {
  const box = document.createElement("div");
  box.className = "box";
  box.addEventListener("click", toggleDropdown);

  const dropdownContent = document.createElement("div");
  dropdownContent.className = "dropdown-content";

  for (const color of colorOptions) {
    const colorOption = document.createElement("div");
    colorOption.className = "color-option";
    // colorOption.textContent =
    //   color.charAt(0).toUpperCase() + color.slice(1);
    colorOption.style.backgroundColor = color;
    colorOption.addEventListener("click", () => changeColor(box, color));
    dropdownContent.appendChild(colorOption);
  }

  box.appendChild(dropdownContent);
  boxesContainer.appendChild(box);
}

function toggleDropdown(event) {
  const clickedBox = event.currentTarget;
  const openBox = boxesContainer.querySelector(".box.open");

  if (openBox && openBox !== clickedBox) {
    openBox.classList.remove("open");
  }

  clickedBox.classList.toggle("open");
}

function changeColor(box, color) {
  box.style.backgroundColor = color;
  toggleDropdown({ currentTarget: box });
  box.classList.toggle("open");
}
