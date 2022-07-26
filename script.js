const startwatch = document.querySelector('.watch');
const start = document.querySelector('.Play');
const pause = document.querySelector('.stop');
const parent = document.querySelector('.parent')
let milisec = 0, sec = 0, min = 0;
let clear;
const Play = () => {
    if (start.innerHTML == '▶️') {
        start.innerHTML = '⏸️';
        clear = setInterval(() => {
            startwatch.innerHTML = `${min > 9 ?min : "0" +min}:${sec > 9 ? sec : '0' + sec}:${milisec > 9 ? milisec : '0' +milisec}`;
            milisec++;
            if (milisec == 100) {
                milisec = 0;
                sec++;
            }
            if (sec == 60) {
                sec = 0;
                min++;
            }

        }, 10)
    }
    else {
        start.innerHTML = '▶️';
        clearInterval(clear);

    }

}

const Stop = () => {

    clearInterval(clear);
    hours = min = sec = 0;
    startwatch.innerHTML = `${hours > 9 ? hours : "0" + hours}:${min > 9 ? min : '0' + min}:${sec > 9 ? sec : '0' + sec}`;

}

start.addEventListener('click', Play);
pause.addEventListener('click', Stop);



// setInterval(() => {
//     let r = Math.floor(Math.random() * 256);
//     let g = Math.floor(Math.random() * 256);
//     let b = Math.floor(Math.random() * 256);
//       parent.style.setProperty(
//       "background-color",
//       `rgb(${r}, ${g}, ${b})`
//     );
//   }, 1000);


  setInterval(() => {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    document.body.style.setProperty(
      "background-color",
      `rgb(${r}, ${g}, ${b})`
    );
  }, 1000);
