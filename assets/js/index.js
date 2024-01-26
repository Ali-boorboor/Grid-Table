// constants
const $ = document;
const submitBtn = $.getElementById("submit-btn");

// submit button => click event
submitBtn.addEventListener("click", (e) => {
  // constants for event function of submit button
  const rowInputReciever = $.getElementById("row-input-reciever");
  const columnInputReciever = $.getElementById("column-input-reciever");
  const gridItemsBox = $.getElementById("grid-box");   // selector of the box (container) of grid items => grid table
  const alertModalBox = $.getElementById("alert-modal");
  const rowInputValue = rowInputReciever.value;
  const columnInputValue = columnInputReciever.value;

  e.preventDefault();    // event object => preventDefault method to prevent submiting form on submit

  if ( ( rowInputValue > 0 && rowInputValue <= 10 ) && ( columnInputValue > 0 && columnInputValue <= 10 ) ) {
    gridItemsBox.style.gridTemplateRows = `repeat(${rowInputValue}, minmax(min-content, 1fr))`;
    gridItemsBox.style.gridTemplateColumns = `repeat(${columnInputValue}, minmax(min-content, 1fr))`;

    gridItemsBox.innerHTML = "";
    rowInputReciever.value = "";
    columnInputReciever.value = "";

    for ( let element = 0; element < ( rowInputValue * columnInputValue ); element++ ) {
      gridItemsBox.insertAdjacentHTML("beforeend", `<p class="grid-box__items"></p>`);
    };
  } else {
    alertModalBox.style.display = "block";

    setTimeout( () => ( alertModalBox.style.display = "none" ), 3000 );
  };
});