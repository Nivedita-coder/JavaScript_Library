window.addEventListener("keypress",(e)=>{
    let letter = document.getElementById(e.key);
    let sound = document.querySelector(`audio[data-key=${e.key}]`);
    if(letter != null) {
        letter.classList.add("press");
        sound.currentTime = 0;
        sound.play();
        letter.ontransitionend = () => {
            letter.classList.remove("press");
        }
        // console.log(`${e.keyCode} - ${e.key}`);
    }
});