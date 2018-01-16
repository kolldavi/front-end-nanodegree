//Put event listener on submit button
$('#submit-button').click(function(event) {
  event.preventDefault();
  makeGrid();
});

//get default color from color picker
let color = $('#color-picker').val();
let isDown = false; // Tracks status of mouse button

$(document).mousedown(function() {
  isDown = true; // When mouse goes down, set isDown to true
});

$(document).mouseup(function() {
  isDown = false; // When mouse goes up, set isDown to false
});

//update color
function updateColorPicker() {
  $('#color-picker').change(function() {
    color = $('#color-picker').val();
  });
}

//create grid
function makeGrid() {
  let rowNum = $('#grid-cols').val();
  let colNum = $('#grid-rows').val();
  const e = document.getElementById('error');
  if (rowNum < 1 || rowNum > 200 || colNum < 1 || colNum > 200) {
    e.innerHTML = 'cols and rows must be between 1 and 200';
    return false;
  }
  e.innerHTML = '';
  //get the table
  var table = $('#pixel-canvas');
  //Reset to empty table
  table.children().remove();

  for (var i = 0; i < rowNum; i++) {
    //create rows
    table.append('<tr></tr>');

    for (var j = 0; j < colNum; j++) {
      //create columns
      table
        .children()
        .last()
        .append('<td></td>');
    }
  }
  //add color to grid
  $(table).on('mousedown', 'td', function() {
    //add color for inital click
    $(this).css('background-color', color);
    //add color if click and move
    $('td').mouseover(function() {
      if (isDown) {
        // Only change css if mouse is down
        $(this).css({ background: color });
      }
    });
  });
}
