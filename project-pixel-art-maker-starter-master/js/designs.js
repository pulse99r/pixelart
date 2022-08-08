/*******
 *                **** INSTRUCTIONS *****
 * 1. Define your variables by selecting the DOM elements that the user 
 * will interact with. This is where your JavaScript variables can 
 * come into play! For instance, the submit button, the table, and 
 * the color picker need to be accessed. The value of the color selected 
 * needs to be stored as well, since the clicked cell in the table needs 
 * to be set to the selected color.
 * 
 * 2. Add event listeners to the relevant DOM elements, so that user input 
 * can be color values and table sizes can be dynamically set by the user.
 * 
 * 3. Set the size of the cross stitch canvas as an _N_ by _M_ grid with the 
 * makeGrid() function. Use your knowledge of JavaScript loops to dynamically 
 * clear and create the table based on user input. Each cell should have an 
 * event listener that sets the background color of the cell to the selected 
 * color.
 */

const theTable = document.getElementById("pixelCanvas");

// Select color input

let selectColor = document.getElementById("colorPicker");
let newColor = selectColor.value;


// Select size input
const submitGridSize = document.getElementById('submit');

// Confirm that the table is to be cleared, then clears
// the table when the Clear Table button is clicked, or
// when a new table size is submitted.

function clearGrid() {
    let x = confirm("Delete Existing Table?");
    if (x === true){
        const previousTable = document.getElementById("pixelCanvas");    
        previousTable.innerHTML = "";
    }
    //remove method learned from w3cschools: 
    //https://www.w3schools.com/jsref/met_element_remove.asp
    const element = document.getElementById("clear-btn");
    element.remove();
}

// When size is submitted by the user, call makeGrid()  

submitGridSize.addEventListener("click", (makeGrid) => {

    // Your code goes here!  

        makeGrid.preventDefault();
    // });
    const numRows = document.getElementById('inputHeight');
    const numCols = document.getElementById('inputWidth');
 
    //If there are one or more existing rows in the table
    //this code removes them by blanking out the innerHTML 
    //of the table.
    if(theTable.rows.length >= 1) {
        clearGrid();
        }

    for (let i = 0; i < numRows.value; i++) {
       
            var currRow = theTable.insertRow(i);
            
        for (let j = 0; j < numCols.value; j++) {
            var cell = currRow.insertCell(j);
            //assignColor = (event,target);
            // cell.addEventListener("click",assignColor);
            cell.addEventListener("click",(event)=> {
                if(event.target.style.backgroundColor=== "white"){
                    event.target.style.backgroundColor = selectColor.value;
                } else {
                    event.target.style.backgroundColor = "white";
                }    
            })
        }
    }
    //Add a "clear table" button to the page after a table has been created
    const btnDiv = document.getElementById("clear-button-div");
    const clearBtn = document.createElement("button");
    clearBtn.setAttribute("id", "clear-btn");
    clearBtn.setAttribute("name", "clear-btn");
    clearBtn.onclick = clearGrid;
    clearBtn.innerHTML = "Clear Table";
    btnDiv.appendChild(clearBtn);
});

