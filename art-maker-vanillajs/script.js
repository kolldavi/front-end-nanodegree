//set defaults
let color = '#383',
  rows,
  cols;

//get table
let table = document.getElementById('pixel-canvas');
let isDown = false;

//add event listeners for draw and drag function
document.addEventListener('mousedown', function() {
  isDown = true; // When mouse goes down, set isDown to true
});

document.addEventListener('mouseup', function() {
  isDown = false; // When mouse goes up, set isDown to false
});

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

        td.onmousedown = () => {
          td.style.backgroundColor = color;
        };
        td.onmouseover = () => {
          if (isDown) {
            td.style.backgroundColor = color;
          }
        };
      }
    }
  }
}
