window.addEventListener('DOMContentLoaded', () => {
  const rain = document.querySelector('.rain');

  function stream(length){
    const streamLength = Math.floor(Math.random()*length);
    let stream ='';
    for (let i = 0; i < streamLength; i++) {
      stream += String.fromCharCode(0x30A0 + Math.round(Math.random()*96));
    }
    return stream;
  }

  class RainDrop {
    constructor(length) {
      this.length = length;
    }
    drop() {
      rain.style.left = `${Math.floor(Math.random()*window.innerWidth)}px`;
      rain.innerHTML = stream(this.length);
    }
  }

  const rainy = new RainDrop(50);
  rainy.drop();

});
