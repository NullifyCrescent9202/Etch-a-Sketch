const grid = document.querySelector(".grid");
createGrid(8);

function createGrid(gridSize){
    if(gridSize > 100){
        createGrid(8);
        alert("That is too large try a smaller number.")
    } else {
        for(let i = 0; i < gridSize; i++){
            const row = document.createElement("div");
            row.className = "row";
            grid.append(row);
    
            for(let j = 0; j < gridSize; j++){
                const pixel = document.createElement("div");
                pixel.className= "pixel";
                row.append(pixel);
            }
        }
    }
}



let gridReset = true


function eraseGrid(){
    if(gridReset === true){
        while(grid.firstChild){
            grid.removeChild(grid.firstChild);
        }
    gridReset = false;
    }
}



const grid_Button = document.querySelector(".createGrid");
grid_Button.addEventListener("click", (e) =>{
    let size = prompt("Enter A number 1-100.");
    gridReset = true;
    eraseGrid();
    createGrid(size);

})