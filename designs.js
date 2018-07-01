//I was able to solve this problem by consulting my Udacity course content, StackOverflow, friends from the ALC slack group and codepen...

function makeGrid() {
	//variables definition
	var color, gridHeight, gridWidth, canvas, cell, rows;

	color = $("#colorPicker").val();
	gridHeight = $('#input_height').val();
	gridWidth = $('#input_width').val();
	canvas = $('#pixel_canvas');

	//Removes element of table and it's children
	canvas.children().remove()

    //Add column(s)/height to table
    for (x = 0; x < gridHeight; x++) {
    	canvas.append('<tr></tr>');
    }
    
    rows = $('tr');
    //Adds row(s) to table
    for (y = 0; y < gridWidth; y++) {
    	rows.append('<td></td>');
    } 
    
    cell = canvas.find('td');

 	// When a cell is clicked by the user, change color of the cell
 	cell.click(function() {
 		color = $("#colorPicker").val();
 		$(this).attr('bgcolor', color);
 	});

}

 // When size is submitted by the user, call makeGrid()
$('#submit').click(function(event) {
 	event.preventDefault();
 	makeGrid();
});