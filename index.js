const grid = document.querySelector(".grid");

function createGrid(gridSize){
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
