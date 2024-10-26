const grid = document.querySelector(".grid");
const body = document.querySelector("body");
const pixel = document.getElementsByClassName("pixel");
createGrid(10);

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





function eraseGrid(){
    while(grid.firstChild){
    grid.removeChild(grid.firstChild);
    }
}



const grid_Button = document.querySelector(".createGrid");
grid_Button.addEventListener("click", (e) =>{
    let size = prompt("Enter A number 1-100.");
    gridReset = true;
    eraseGrid();
    createGrid(size);

})

const rainbowButton = document.querySelector(".randomColor");
const reset = document.querySelector(".reset");
const colors = [ "brown", "red", "orange", "yellow", "green", "blue", "indigo", "violet", "black"]
const colorinput = document.querySelector("input");

colorinput.addEventListener("input", (e) =>{
    console.log(e);
    brush(e.target.value);
})


function rainbow(){
    let randomnum = Math.floor(Math.random() * 8);
    return colors[randomnum];
}

reset.addEventListener("click", (e) =>{
    for(const x of pixel){
        x.style.backgroundColor = "white";
    }
})

function brush(color){
    for (const x of pixel){
        x.addEventListener("mousedown", (e) => {
            x.style.backgroundColor = `${color}`;
        })
}
}


rainbowButton.addEventListener("click", (e) =>{
    for (const x of pixel){
        x.addEventListener("mouseover", (e) => {
            x.style.backgroundColor = `${rainbow()}`;
        })
}
})