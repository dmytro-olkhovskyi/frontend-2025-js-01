const colorsDiv = document.getElementById("colors");
const regenBtn = document.getElementById("regenerate-btn");
const clearBtn = document.getElementById("clear-btn");

colorsDiv.addEventListener("click", (event) => {
    const block = event.target;
    // console.log(block);

    if (!block.classList.contains("color-div")) {
        console.log("Not a color div!");
        return;
    }

    const color = block.dataset.color;

    navigator.clipboard.writeText(color);

    block.textContent = "Copied!";
    setTimeout(() => block.textContent = color, 1000);
})

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

function generateColors(count = 5) {
    colorsDiv.innerHTML = "";

    for (let i = 0; i < count; i++) {
        colorsDiv.appendChild(generateColorBlock());
    }
}

function getRandomColor() {
    const symbols = "0123456789abcdef";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * symbols.length);
        color += symbols[index];
    }

    return color;
}

regenBtn.addEventListener("click", () => {
    generateColors(30);
});

clearBtn.addEventListener("click", () => {
    colorsDiv.innerHTML = "";
});

generateColors(30);