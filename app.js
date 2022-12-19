
// Declaring Variables
let pixelContainer = document.getElementById('div_container');

// Defining & Initializing Default Grid Size
function defaultGrid () {
    for (let i = 0; i < 16; i++) {
        createPixels(16);
    };
};

defaultGrid();

// Logic for Reset Button
function resetButton () {
    let pixelContainerPixels = document.querySelectorAll(".div-pixel")
    for (const child of pixelContainerPixels){
        child.classList.remove('selected')
    };
};

// Capturing User Input & Passing it to the createPixels Function to Create Grid
let userInput = function() {
    pixelContainer.innerHTML = '';
    let input = Number(prompt('Enter a Number Up to 100'));
    if (input > 100) {
        alert('Enter a valid number');
        defaultGrid();
    } else if (!input) {
        alert('Enter a number');
        defaultGrid();
    } else if (input === 0) {
        alert('0 is invalid. Please Enter a Valid Number');
        defaultGrid();
    }  else if (typeof input === 'string') {
        alert('Enter a number');
        defaultGrid();
    }
    else {
        for (let i = 0; i < input; i++) {
            createPixels(input);
        };
    };
};


// Function for Creating Div 'Pixels' & its Rows for 16x16 Grid
function createPixels (Input) {
    let pixelLine = document.createElement('div');

    // Pixel Creation
    for (let i = 0; i < Input; i++) {
        let pixel = document.createElement('div');
        pixelLine.appendChild(pixel);
        pixel.classList.add('div-pixel');
    };

    // Grid Creation Logic
    pixelLine.classList.add('div-line');
    pixelLine.style = `grid-template-columns: repeat(${Input}, auto)`;
    pixelContainer.appendChild(pixelLine);
    pixelContainer.style = `grid-template-rows: repeat(${Input}, auto)`;

    // 'Drawing' Logic
    let pixelLineChildren = pixelLine.childNodes;
    for (const child of pixelLineChildren){
        child.addEventListener('mouseover', () => {
            child.classList.add('selected');
        });
    };
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