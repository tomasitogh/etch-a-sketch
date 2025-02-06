const container = document.querySelector("#grid-container");
const inpt = document.querySelector("#input");
const btn = document.querySelector("#input-button");

//event listener tu submit the number in the input value
btn.addEventListener("click", () => {
    if (inpt.value > 100){
        alert("Try again, no more than 100");
        return;
    }
    createGrid();
});


//Function that receives de amount of grids inserted by  user 
// and creates and inserts the div grids
function createGrid(){
    const numberGrids = parseInt(inpt.value) || 16;
    inpt.value = '';

    container.textContent = '';

    let totalSize = 500;
    let gridSize = totalSize / numberGrids; 

    for (i = 0; i < numberGrids * numberGrids; i++){
        const grids = document.createElement("div");
        grids.classList.add("grid-squares");
        grids.style.cssText = `width: ${gridSize}px; height: ${gridSize}px;`;
        grids.style.flex = `0 0 ${gridSize}px`; 
        grids.addEventListener("mouseover", () => {
            grids.style.backgroundColor = "black";
        })
        container.appendChild(grids);
    };
};

