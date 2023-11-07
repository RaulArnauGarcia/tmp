const swith = document.querySelector(".button_mode");
const labeltext = document.querySelector(".name_mode");
let text1 = false;
const storedMode = localStorage.getItem("mode");
const page = document.title;
if (storedMode === "night") {
  applyNightMode();
}
swith.addEventListener("click", async (e) => {
  if (page === "Lloverá") {
    swith.classList.toggle("active");
    document.body.classList.toggle("nightBody");
    const title2 = document.querySelector(".title_name2");
    title2.classList.toggle("nightTitle2");
    const title1 = document.querySelector(".title_name");
    title1.classList.toggle("nightTitle");
    const button = document.querySelector(".button_main");
    button.classList.toggle("nightButtonMain");
    labeltext.classList.toggle("labelNight");
    if (text1) {
      labeltext.textContent = "Day Mode";
      localStorage.setItem("mode", "day");
    } else {
      labeltext.textContent = "Night Mode";
      localStorage.setItem("mode", "night");
    }

    text1 = !text1;
  } else {
    swith.classList.toggle("active");
    document.body.classList.toggle("nightBody");
    const location = document.querySelector(".location");
    location.classList.toggle("locationNight");
    const temp = document.querySelector(".temp");
    temp.classList.toggle("tempNight");
    const max_min = document.querySelector(".max_min");
    max_min.classList.toggle("maxMinNight");
    const wind = document.querySelector(".wind");
    wind.classList.toggle("windNight");
    const moreHouers = document.querySelector(".more_houers");
    moreHouers.classList.toggle("moreHouersNight");
    if (text1) {
      localStorage.setItem("mode", "day");
    } else {
      localStorage.setItem("mode", "night");
    }

    text1 = !text1;
  }
});

function applyNightMode() {
  if (page === "Lloverá") {
    swith.classList.toggle("active");
    document.body.classList.toggle("nightBody");
    const title2 = document.querySelector(".title_name2");
    title2.classList.toggle("nightTitle2");
    const title1 = document.querySelector(".title_name");
    title1.classList.toggle("nightTitle");
    const button = document.querySelector(".button_main");
    button.classList.toggle("nightButtonMain");
    labeltext.classList.toggle("labelNight");
    if (text1) {
      labeltext.textContent = "Day Mode";
      localStorage.setItem("mode", "day");
    } else {
      labeltext.textContent = "Night Mode";
      localStorage.setItem("mode", "night");
    }
    text1 = !text1;
  } else {
    swith.classList.toggle("active");
    document.body.classList.toggle("nightBody");
    const location = document.querySelector(".location");
    location.classList.toggle("locationNight");
    const temp = document.querySelector(".temp");
    temp.classList.toggle("tempNight");
    const max_min = document.querySelector(".max_min");
    max_min.classList.toggle("maxMinNight");
    const wind = document.querySelector(".wind");
    wind.classList.toggle("windNight");
    const moreHouers = document.querySelector(".more_houers");
    moreHouers.classList.toggle("moreHouersNight");
    if (text1) {
      localStorage.setItem("mode", "day");
    } else {
      localStorage.setItem("mode", "night");
    }

    text1 = !text1;
  }
}
