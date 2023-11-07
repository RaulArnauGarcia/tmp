const button = document.querySelector(".button_main");
const latitude = localStorage.getItem("latitude");
const longitude = localStorage.getItem("longitude");

button.addEventListener("click", function () {
  if (latitude && longitude) {
    if ("geolocation" in navigator) {
      button.disabled = true;
      navigator.geolocation.getCurrentPosition(function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        localStorage.setItem("latitude", latitude);
        localStorage.setItem("longitude", longitude);
        window.location.href = "forecast.html";
      });
      function mensgeError(error) {
        console.error("Error al obtener la ubicación: ", error.message);
      }
    } else {
      console.error("La geolocalización no esta disponible en este navegador.");
    }
  } else {
    window.location.href = "forecast.html";
  }
});
