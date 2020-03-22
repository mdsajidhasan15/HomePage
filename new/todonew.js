// function createTable() {
//     var strTableData = '';
//     strTableData += '<table id="myTable" class="table table-hover">';
//     strTableData += '<thead>';
//     //strTableData += '<tr>';
//     strTableData += '<th>Line Number</th>';
//     strTableData += '<th>Todo Name</th>';
//     strTableData += '<th>Todo Date</th>';
//     strTableData += '<th>Todo Description</th>';
//     strTableData += '<th>Todo Priority</th>';
//     strTableData += '<th>Options</th>';

//     //strTableData += '</tr>'; 		
//     strTableData += '</thead>';


//     strTableData += '<tbody>'
//     for (var i = 0; i < AllTodos.length; i++) {
//         var val = AllTodos[i];
//         var line_num = i++;

//         strTableData += '<tr>';
//         strTableData += '<td>' + line_num + '</td>';
//         strTableData += '<td>' + val.TodoName + '</td>';
//         strTableData += '<td>' + moment(val.TodoDate).format('M-D-Y') + '</td>';
//         strTableData += '<td>' + val.TodoDesc + '</td>';
//         strTableData += '<td>' + val.TodoPrio + '</td>';



//         var Edit = '<a href="#" class="BTN_Edit_Entry" rec_id="' + val.rec_id + '">Edit</a> / ';
//         var Delete = '<a href="#" class="BTN_Delete_Entry" rec_id="' + val.rec_id + '" todo_name="' + val.TodoName + '">Delete</a>';


//         strTableData += '<td>' + Edit + Delete + '<td>';
//         strTableData += '</tr>';

//     };
//     strTableData += '<tbody>'
//     strTableData += '</table>';

// }

// function addDataInTodo() {

// }

// function addTodo() {
//     document.getElementsByClassName('.BTN_Add_New').innerHTML = createTable();
// }

function addNew() {

}