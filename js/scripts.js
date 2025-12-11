// import Swiper JS
//import Swiper from 'swiper';
// import Swiper styles
//import 'swiper/css';

import generateColors from "./utils/generate.js"

const colorsDiv = document.getElementById("colors");
const regenBtn = document.getElementById("regenerate-btn");
const clearBtn = document.getElementById("clear-btn");

colorsDiv && colorsDiv.addEventListener("click", (event) => {
    const block = event.target;
    // console.log(block);

    if (!block.classList.contains("color-div")) {
        console.log("Not a color div!");
        return;
    }

    const color = block.dataset.color;

    navigator.clipboard.writeText(color);
    localStorage.setItem("last-color", color);

    block.textContent = "Copied!";
    setTimeout(() => block.textContent = color, 1000);
})

regenBtn.addEventListener("click", () => {
    generateColors(colorsDiv, 30);
});

clearBtn.addEventListener("click", () => {
    if (!colorsDiv) return;

    colorsDiv.innerHTML = "";
    localStorage.removeItem("last-color");
});

generateColors(colorsDiv, 30);