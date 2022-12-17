// Declaring Variables
let pixelContainer = document.getElementById('div_container');


// Creating Div 'Pixels' for 16x16 Grid
function createPixels () {
    let pixelLine = document.createElement('div');
    for (let i = 0; i < 16; i++) {
        let pixel = document.createElement('div');
        pixelLine.appendChild(pixel);
        pixel.classList.add('div-pixel');
        pixel.textContent = '1';
    };
    pixelLine.classList.add('div-line');
    pixelContainer.appendChild(pixelLine);


    // Adding 'Drawing' Logic
    let pixelLineChildren = pixelLine.children
    for (const child of pixelLineChildren){
        child.addEventListener('mouseover', () => {
            child.classList.add('selected');
        });
    }
};


// Creating 16 Different Lines of Pixels, Containing 16 Pixels Each
for (let i = 0; i < 16; i++) {
    createPixels();
};







// pixel.forEach( px => {
//     px.addEventListener('mouseover', () => {
//         px.classList.add('selected');
//     });
// });