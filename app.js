
// Declaring Variables
let pixelContainer = document.getElementById('div_container');
// let userInput = prompt('Enter a Number Up to 32');
let userInput = function() {
    pixelContainer.innerHTML = '';
    let input = prompt('Enter a Number Up to 32');
    for (let i = 0; i < input; i++) {
        createPixels(input);
    };
};

// Creating Div 'Pixels' for 16x16 Grid
function createPixels (Input) {
    let pixelLine = document.createElement('div');
    for (let i = 0; i < Input; i++) {
        let pixel = document.createElement('div');
        pixelLine.appendChild(pixel);
        pixel.classList.add('div-pixel');
        
    };
    pixelLine.classList.add('div-line');
    pixelLine.style = `grid-template-columns: repeat(${Input}, auto)`
    pixelContainer.appendChild(pixelLine);
    pixelContainer.style = `grid-template-rows: repeat(${Input}, auto)`

    // Adding 'Drawing' Logic
    let pixelLineChildren = pixelLine.children
    for (const child of pixelLineChildren){
        child.addEventListener('mouseover', () => {
            child.classList.add('selected');
        });
    }
};








// // Declaring Variables
// let pixelContainer = document.getElementById('div_container');
// // let userInput = prompt('Enter a Number Up to 32');
// let userInput;

// function getUserInput() {
//     userInput = prompt('Enter a Number Up to 32');
// }

// getUserInput();

// // Creating 16 Different Lines of Pixels, Containing 16 Pixels Each
// for (let i = 0; i < userInput; i++) {
//     createPixels(userInput);
// };

// // Creating Div 'Pixels' for 16x16 Grid
// function createPixels (Input) {
//     let pixelLine = document.createElement('div');
//     for (let i = 0; i < Input; i++) {
//         let pixel = document.createElement('div');
//         pixelLine.appendChild(pixel);
//         pixel.classList.add('div-pixel');
        
//     };
//     pixelLine.classList.add('div-line');
//     pixelLine.style = `grid-template-columns: repeat(${Input}, auto)`
//     pixelContainer.appendChild(pixelLine);
//     pixelContainer.style = `grid-template-rows: repeat(${Input}, auto)`

//     // Adding 'Drawing' Logic
//     let pixelLineChildren = pixelLine.children
//     for (const child of pixelLineChildren){
//         child.addEventListener('mouseover', () => {
//             child.classList.add('selected');
//         });
//     }
// };