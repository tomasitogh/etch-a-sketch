const container = document.querySelector("#grid-container");
const inpt = document.querySelector("#input");
const btn = document.querySelector("#input-button");

//event listener tu submit the number in the input value
btn.addEventListener("click", () => {
    const currentValue = inpt.value;
    inpt.value = '';
    createGrid(currentValue);
});


//Function that receives de amount of grids inserted by  user 
// and creates and inserts the div grids
function createGrid(number){
    for (i = 1; i <= number * number; i++){
        const grids = document.createElement("div");
        grids.classList.add("grid-squares");
        container.appendChild(grids);
    };
};

