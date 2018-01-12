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
  let rowNum = $('#grid-height').val();
  let colNum = $('#grid-width').val();

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
