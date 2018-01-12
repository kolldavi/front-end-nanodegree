//Put event listener on submit button
$('#submit-button').click(function(event) {
  event.preventDefault();
  makeGrid();
});

//get default color from color picker
let color = $('#color-picker').val();

//update color
function updateColorPicker() {
  $('#color-picker').change(function() {
    console.log('change');
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
  //Reset to empty table --- in case one already created
  table.children().remove();

  for (var i = 0; i < rowNum; i++) {
    //Create rows
    table.append('<tr></tr>');

    for (var j = 0; j < colNum; j++) {
      //Create columns
      table
        .children()
        .last()
        .append('<td></td>');
    }
  }
  //Add color to grid
  $(table).on('click', 'td', function() {
    $(this).css('background-color', color);
  });
}
