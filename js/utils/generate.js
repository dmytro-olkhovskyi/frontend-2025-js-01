import getRandomColor from "./random.js";

function generateColorBlock() {
    const colorDiv = document.createElement("div");
    const color = getRandomColor();
    
    colorDiv.classList.add("color-div");
    colorDiv.textContent = color;
    colorDiv.style.backgroundColor = color;
    colorDiv.dataset.color = color;

    // colorDiv.addEventListener("click", () => {
    //     navigator.clipboard.writeText(color);
    //     colorDiv.textContent = "Copied!";
    //     setTimeout(() => { colorDiv.textContent = color }, 1000);
    // });

    return colorDiv;
}

export default function generateColors(colorsDiv, count = 5) {
    if (!colorsDiv) return;

    colorsDiv.innerHTML = "";

    for (let i = 0; i < count; i++) {
        colorsDiv.appendChild(generateColorBlock());
    }

    localStorage.removeItem("last-color");
}