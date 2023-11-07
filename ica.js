const longitude = localStorage.getItem("longitude");
const latitude = localStorage.getItem("latitude");

fetch(
  `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&forecast_days=1`
)
  .then((response) => {
    // Verifica si la solicitud se completó con éxito (código de respuesta 200)
    if (response.ok) {
      // Convierte la respuesta a JSON
      return response.json();
    } else {
      throw new Error("Error al realizar la solicitud");
    }
  })
  .then((data) => {
    const wind = document.querySelector(".wind");
    wind.textContent = `ICA ${data.elevation}`;
  })
  .catch((error) => {
    // Maneja errores de la solicitud
    console.error("Error:", error);
  });
