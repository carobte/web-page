// Recomendaciones de café
const recomendaciones = [
    "Prueba un café latte con un toque de canela.",
    "¿Has intentado un café frío con leche de almendras?",
    "Un espresso doble puede ser justo lo que necesitas.",
    "Disfruta un capuchino con cacao espolvoreado.",
    "¿Qué tal un café moka para algo más dulce?"
];

document.getElementById("cafeButton").addEventListener("click", () => {
    const randomIndex = Math.floor(Math.random() * recomendaciones.length);
    document.getElementById("recomendacion").textContent = recomendaciones[randomIndex];
});
