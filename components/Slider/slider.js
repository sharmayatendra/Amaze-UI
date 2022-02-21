const sliderValue = document.querySelector(".slider");
const maxValue = document.querySelector(".max-val");

maxValue.innerText = sliderValue.value;

sliderValue.addEventListener("input" , () => {
    maxValue.innerText = sliderValue.value;
})