export default function getRandomColor() {
    const symbols = "0123456789abcdef";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        const index = Math.floor(Math.random() * symbols.length);
        color += symbols[index];
    }

    return color;
}