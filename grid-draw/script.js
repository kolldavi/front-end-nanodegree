const style = getComputedStyle(document.body);
const board = document.querySelector('.board');
let color = '#383';
let boardColor = '#ffffff';
let isDown = false;
let toggleLines = document.getElementById('toggle-lines');

toggleLines.addEventListener('click', function() {
  let tiles = document.querySelectorAll('.tile');
  tiles.forEach(tile => tile.classList.toggle('tile-border'));
});

//add event listeners for draw and drag function
board.addEventListener('mousedown', function() {
  isDown = true; // When mouse goes down, set isDown to true
});

//double click to erase tile
board.addEventListener('dblclick', function(e) {
  e.srcElement.style.backgroundColor = boardColor;
});
document.addEventListener('mouseup', function() {
  isDown = false; // When mouse goes up, set isDown to false
});

function makeGrid() {
  board.innerHTML = '';

  rows = document.getElementById('grid-rows').value;
  cols = document.getElementById('grid-cols').value;
  board.style.setProperty('--height', rows);

  for (let i = 0; i < cols; i++) {
    let row = document.createElement('div');
    row.className = 'row';
    for (let j = 0; j < rows; j++) {
      let tempCol = document.createElement('div');
      tempCol.className = 'tile tile-border';
      tempCol.style.backgroundColor = boardColor;
      row.append(tempCol);
    }
    board.append(row);
  }
  let tiles = document.querySelectorAll('.tile');
  tiles.forEach(function(tile) {
    tile.addEventListener('mousedown', updateTile);
    tile.addEventListener('mouseover', function(e) {
      if (isDown) {
        this.style.backgroundColor = color;
      }
    });
  });
}

function updateTile(e) {
  this.style.backgroundColor = color;
}
function updateColorPicker() {
  color = document.getElementById('color-picker').value;
}

// convert rgb colour values to hex, e.g. rgb(255, 255, 255) to #ffffff;
function rgbToHex(rgb) {
  var re = /^rgb\(.*\)$/;
  var bits;
  function z(n) {
    return (n < 10 ? '0' : '') + n;
  }

  if (re.test(rgb)) {
    bits = rgb.match(/\d+/g);
    return (
      '#' +
      z((+bits[0]).toString(16)) +
      z((+bits[1]).toString(16)) +
      z((+bits[2]).toString(16))
    );
  }
  return rgb;
}

function updateColorBoard() {
  setTimeout(function() {
    let tiles = document.querySelectorAll('.tile');
    let newBoardColor = document.getElementById('board-color').value;
    tiles.forEach(function(tile) {
      let current = rgbToHex(tile.style.backgroundColor);
      if (current === boardColor) {
        tile.style.backgroundColor = newBoardColor;
      }
    });
    boardColor = newBoardColor;
  }, 200);
}

makeGrid();
