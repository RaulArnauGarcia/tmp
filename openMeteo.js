// URL de la API que deseas consultar

const city = {
  ComunidadesAutonomas: [
    "Álava",
    "Albacete",
    "Alicante",
    "Almería",
    "Asturias",
    "Ávila",
    "Badajoz",
    "Barcelona",
    "Burgos",
    "Cáceres",
    "Cádiz",
    "Cantabria",
    "Castellón",
    "Ciudad Real",
    "Córdoba",
    "La Coruña",
    "Cuenca",
    "Gerona",
    "Granada",
    "Guadalajara",
    "Guipúzcoa",
    "Huelva",
    "Huesca",
    "Baleares",
    "Jaén",
    "León",
    "Lérida",
    "Lugo",
    "Madrid",
    "Málaga",
    "Murcia",
    "Navarra",
    "Orense",
    "Palencia",
    "Las Palmas",
    "Pontevedra",
    "La Rioja",
    "Salamanca",
    "Segovia",
    "Sevilla",
    "Soria",
    "Tarragona",
    "Tenerife",
    "Teruel",
    "Toledo",
    "Valencia",
    "Valladolid",
    "Vizcaya",
    "Zamora",
    "Zaragoza",
  ],
  latitude_prov: [
    43.3606, 38.9942, 38.3452, 36.8381, 43.3603, 40.6572, 38.8779, 41.3888,
    42.3411, 39.4765, 36.5267, 43.4647, 39.9857, 38.9863, 37.8916, 43.3713,
    40.0667, 42.4106, 37.1882, 40.6286, 43.5667, 37.2664, 42.1362, 39.6078,
    37.7692, 42.6, 41.6167, 43.0099, 40.4165, 36.7202, 37.987, 42.8169, 42.3367,
    42.0095, 42.0095, 42.431, 42.4667, 40.9688, 40.9481, 37.3828, 41.764,
    41.1167, 28.4682, 40.3456, 39.8581, 39.4697, 41.6552, 43.2627, 41.5063,
    41.6561,
  ],
  longitude_prov: [
    -6.1995, -1.8564, -0.4815, -2.4597, -5.8448, -4.6995, -6.9706, 2.159,
    -3.7018, -6.3722, -6.2891, -3.8044, -0.0493, -3.9291, -4.7728, -8.396,
    -2.9703, 2.8249, -3.6067, -3.1618, -5.9, -6.94, -0.4087, 3.012, -3.7903,
    -5.5703, 0.6222, -7.556, -3.7026, -4.4203, -1.13, -1.6432, -7.8641, -4.5241,
    -15.5869, -8.6443, -2.45, -5.6639, -4.1184, -5.9732, -2.4688, 1.25,
    -16.2546, -1.1065, -0.3774, -4.7237, -2.9253, -5.7446, -0.8773,
  ],
};

const getImg = (n) => {
  switch (n) {
    case 0:
      return "./img/sol.png";

    case 1:
    case 2:
    case 3:
    case 45:
    case 48:
      return "./img/nublado.png";
  }
  if (n[1] > 48) {
    return "./img/lluvia.png";
  }
};

function mananaTarde(hora) {
  if (hora === 0 || hora < 12) {
    return "AM";
  } else {
    return "PM";
  }
}
const input = document.querySelector(".location");

const main = async () => {
  try {
    //leer de localstorage la lat y long
    const latitude = localStorage.getItem("latitude");
    const longitude = localStorage.getItem("longitude");

    // Realiza una solicitud GET a la API
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,weather_code&daily=temperature_2m_max,temperature_2m_min&forecast_days=1`
    );
    if (response.status !== 200) {
      throw new Error("Error en la solicitud a la API");
    }
    const data = await response.json();

    // Trabaja con los datos de la API aqui

    let horaActual = new Date();
    let hora = horaActual.getHours();

    const itemMeteo = {
      temperatura: data.hourly.temperature_2m[hora],
      weatherCode: data.hourly.weather_code[hora],
    };

    const temp = document.querySelector(".temp");
    temp.textContent = `${parseInt(itemMeteo.temperatura)}ºc`;
    const cielo = document.querySelector(".max_min");

    switch (itemMeteo.weatherCode) {
      case 0:
        cielo.textContent = `Soleado ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 1:
        cielo.textContent = `Despejado ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 2:
        cielo.textContent = `Nublado ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 3:
        cielo.textContent = `Nublado ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 45:
        cielo.textContent = `Niebla ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 48:
        cielo.textContent = `Escarcha ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 51:
        cielo.textContent = `Llovizna ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 53:
        cielo.textContent = `Llovizna Moderada ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 55:
        cielo.textContent = `Llovizna densa ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 56:
      case 57:
        cielo.textContent = `Llovizna helada ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 61:
        cielo.textContent = `Lluvia ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 63:
        cielo.textContent = `Lluvia moderada ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 65:
        cielo.textContent = `Lluvia fuerte ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 66:
      case 67:
        cielo.textContent = `Lluvia helada ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
      case 71:
        cielo.textContent = `Nieve ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 73:
        cielo.textContent = `Nieve moderada ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 75:
        cielo.textContent = `Nieve fuerte ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 77:
        cielo.textContent = `Granos de nieve ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 80:
      case 81:
      case 82:
        cielo.textContent = `Lluvias ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 85:
      case 86:
        cielo.textContent = `Lluvia y nieve ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 95:
        cielo.textContent = `Tormenta ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
        break;
      case 96:
      case 99:
        cielo.textContent = `Granizo ${parseInt(
          data.daily.temperature_2m_min
        )}ºc / ${parseInt(data.daily.temperature_2m_max)}ºc`;
    }

    const codigos = data.hourly.weather_code;
    let siguientesCodigos = [];
    const horas = [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23,
    ];
    const cantidad = 9;
    var siguientesHoras = [];
    for (var i = 0; i < cantidad; i++) {
      let indice = (hora + i) % horas.length;
      siguientesHoras.push(horas[indice]);
      let code = codigos.length;
      siguientesCodigos.push(codigos[indice]);
    }

    const estaHora = document.querySelector(".horaActual");
    const estaHora1 = document.querySelector(".horaActual1");
    const estaHora2 = document.querySelector(".horaActual2");
    const estaHora3 = document.querySelector(".horaActual3");
    const estaHora4 = document.querySelector(".horaActual4");
    const estaHora5 = document.querySelector(".horaActual5");
    const estaHora6 = document.querySelector(".horaActual6");
    const estaHora7 = document.querySelector(".horaActual7");

    estaHora.textContent = `${siguientesHoras[1]}:00 ${mananaTarde(
      siguientesHoras[1]
    )}`;
    estaHora1.textContent = `${siguientesHoras[2]}:00 ${mananaTarde(
      siguientesHoras[2]
    )}`;
    estaHora2.textContent = `${siguientesHoras[3]}:00 ${mananaTarde(
      siguientesHoras[3]
    )}`;
    estaHora3.textContent = `${siguientesHoras[4]}:00 ${mananaTarde(
      siguientesHoras[4]
    )}`;
    estaHora4.textContent = `${siguientesHoras[5]}:00 ${mananaTarde(
      siguientesHoras[5]
    )}`;
    estaHora5.textContent = `${siguientesHoras[6]}:00 ${mananaTarde(
      siguientesHoras[6]
    )}`;
    estaHora6.textContent = `${siguientesHoras[7]}:00 ${mananaTarde(
      siguientesHoras[7]
    )}`;
    estaHora7.textContent = `${siguientesHoras[8]}:00 ${mananaTarde(
      siguientesHoras[8]
    )}`;

    for (let i = 1; i < 9; i++) {
      const urlImg = getImg(siguientesCodigos[i]);
      const imgN = document.querySelector(".img" + i);
      imgN.src = urlImg;
    }
  } catch (error) {
    //throw error;
    console.error("Hubo un error: " + error);
  }
};

main();
