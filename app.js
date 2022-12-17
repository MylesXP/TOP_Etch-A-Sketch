let pixel = document.querySelectorAll('.div-pixel');

pixel.forEach( px => {
    px.addEventListener('click', () => {
        px.classList.add('selected');
    });
});