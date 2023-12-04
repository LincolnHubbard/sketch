const grid = document.getElementById("grid");

function populateGrid(){
    for (let i = 0; i < 256; i++){
        let div = document.createElement("div");
        div.style.width = "25px";
        div.style.height = "25px";
        div.style.border = "2px solid black";
        div.className = "square";
        console.log("Square " + (i + 1) + " created");
        grid.appendChild(div);
    }
}

populateGrid();