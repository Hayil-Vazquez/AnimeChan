const quoteDiv = document.getElementById("quote");
const btn = document.getElementById("newQuote");

async function fetchRandomQuote() {
    quoteDiv.textContent = "Cargando...";

    try {
        const response = await fetch("https://animechan.xyz/api/random");

        if (!response.ok) {
            throw new Error("Error en la API");
        }

        const data = await response.json();

        quoteDiv.innerHTML = `
            <p>"${data.quote}"</p>
            <small>- ${data.character} (${data.anime})</small>
        `;
    } catch (error) {
        quoteDiv.textContent = "No se pudo cargar la frase 😢";
        console.error(error);
    }
}

btn.addEventListener("click", fetchRandomQuote);

// Cargar al iniciar
fetchRandomQuote();
