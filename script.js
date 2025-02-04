const container = document.querySelector("#container");
const inpt = document.querySelector("#input");
const btn = document.querySelector("#input-button");

//event listener tu submit the number in the input value
btn.addEventListener("click", () => {
    const currentValue = inpt.value;
    inpt.value = '';
});


//Function that receives de amount of grids inserted by  user 
// and creates and inserts the div grids
function createGrid(number){
    const grids = document.createElement("div");
    container.appendChild(grids);

}