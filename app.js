window.addEventListener('DOMContentLoaded', () => {
  const rain = document.querySelector('.rain');

  function showRain(){
    return String.fromCharCode(0x30A0 + Math.round(Math.random()*96));
  }

  function stream(){
    const streamLength = Math.floor(Math.random()*20);
    let stream ='';
    for (let i = 0; i < streamLength; i++) {
      stream += showRain();
    }
    return stream;
  }

  rain.innerHTML = stream();

});
