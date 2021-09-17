const thumb = document.querySelector('.thumb');
const progressBar = document.querySelector('.slider');
const progressBarInside = document.querySelector('.progress-bar');
const sliderContainerWidth = document.querySelector('.slider-container').offsetWidth;
progressBar.setAttribute("max", sliderContainerWidth);
const updateSlider = (e)=>{
   console.log(e.target.value)
    thumb.style.transform = `translateX(${progressBar.value}px)`;
}
progressBar.value = 0;

progressBar.addEventListener("input", updateSlider);
