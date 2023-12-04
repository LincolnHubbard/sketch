const grid = document.getElementById("grid");
const blackButton = document.getElementById("black");
const eraseButton = document.getElementById("erase");
const sizeButton = document.getElementById("sizeselect");
let colorChoice = "black";

function populateGrid(input){
    let squareSize = (1000 / input);
    let gridSize = input * input;
    console.log(squareSize)
    console.log(gridSize)
    for (let i = 0; i < gridSize; i++){
        let div = document.createElement("div");
        div.style.width = squareSize + "px";
        div.style.height = squareSize + "px";
        div.style.border = "1px dotted black";
        div.style.boxSizing = "border-box";
        div.className = "square";
        //console.log("Square " + (i + 1) + " created");
        grid.appendChild(div);
    }

   let allSquares = grid.querySelectorAll("div");
   allSquares.forEach(square => square.addEventListener('mouseover', colorSquare));


}

function colorSquare(){
    switch (colorChoice) {
        case "black":
            this.style.backgroundColor = "black";
            break;
        case "erase":
            this.style.backgroundColor = "white";
            break;
        default:
            break;
    }
}

function eraseGrid(){
    let allSquares = grid.querySelectorAll("div");
   allSquares.forEach(square => square.style.backgroundColor = "white");
}

if(blackButton){
    blackButton.addEventListener('click', () => colorChoice = "black");
}

eraseButton.addEventListener('click', eraseGrid);
sizeButton.addEventListener('click', () => {
   let newSize =  prompt("Select new size");
   while (grid.firstChild){
    grid.removeChild(grid.firstChild);
   }
   if (newSize > 100){
    newSize = 100;
   }
   if (newSize <= 0 || newSize == null){
    newSize = 1;
   }
   populateGrid(newSize);

})

populateGrid(25);