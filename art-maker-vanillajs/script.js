//set defaults
let color = 'black',
  width,
  height;

//get table
let table = document.getElementById('pixel-canvas');

//change color to draw with
function updateColorPicker() {
  color = document.getElementById('color-picker').value;
}

function makeGrid() {
  width = document.getElementById('grid-width').value;
  height = document.getElementById('grid-height').value;
  var e = document.getElementById('error');
  if (width < 1 || width > 200 || height < 1 || height > 200) {
    e.innerHTML = 'height and width must be between 1 and 200';
    return false;
  } else {
    e.innerHTML = '';
    table.innerHTML = '';
    for (let i = 0; i < height; i++) {
      let row = document.createElement('tr');
      //Create rows
      table.appendChild(row);
      for (let j = 0; j < width; j++) {
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
