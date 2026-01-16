const quoteDiv = document.getElementById("quote");
const btn = document.getElementById("newQuote");

async function fetchRandomQuote() {
    try {
        const res = await fetch("https://animechan.vercel.app/api/random");
        const data = await res.json();
        
        quoteDiv.innerHTML = `
            <p>"${data.quote}"</p>
            <small>- ${data.character} (${data.anime})</small>
        `;
    } catch (error) {
        quoteDiv.textContent = "Error al cargar la frase...";
        console.error(error);
    }
}

btn.addEventListener("click", fetchRandomQuote);

// Cargar 1ra frase
fetchRandomQuote();
