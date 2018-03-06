window.addEventListener('DOMContentLoaded', () => {
  const rain = document.querySelector('.rain');

  function showRain(){
    return String.fromCharCode(0x30A0 + Math.round(Math.random()*96));
  }

  rain.innerHTML = showRain();

});
