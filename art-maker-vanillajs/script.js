//set defaults
let color = 'black',
  rows,
  cols;

//get table
let table = document.getElementById('pixel-canvas');

//change color to draw with
function updateColorPicker() {
  color = document.getElementById('color-picker').value;
}

function makeGrid() {
  rows = document.getElementById('grid-rows').value;
  cols = document.getElementById('grid-cols').value;
  var e = document.getElementById('error');
  if (rows < 1 || rows > 200 || cols < 1 || cols > 200) {
    e.innerHTML = 'cols and rows must be between 1 and 200';
    return false;
  } else {
    e.innerHTML = '';
    table.innerHTML = '';
    for (let i = 0; i < cols; i++) {
      let row = document.createElement('tr');
      //Create rows
      table.appendChild(row);
      for (let j = 0; j < rows; j++) {
        //Create columns
        let td = document.createElement('td');
        row.appendChild(td);
        td.onclick = () => {
          td.style.backgroundColor = color;
        };
      }
    }
  }
}
