
let todos = [];
let selectedTodoIndex;

function submitTodo() {
    let task = document.getElementById("task").value;
    let date = document.getElementById("date").value;
    let comments = document.getElementById("comments").value;

    if (task == "" || date == "" || comments == "") {
        alert("All fields are required!!");
        return;
    }

    let todo = { task, date, comments };

    if (selectedTodoIndex == undefined || selectedTodoIndex == null ) {
        todos.push(todo);
    } else {
        todos[selectedTodoIndex] = todo;
        selectedTodoIndex = null;
    }

    displayTodo();

    document.getElementById("task").value = "";
    document.getElementById("date").value = "";
    document.getElementById("comments").value = "";
}

function displayTodo() {
    let show = "";

    for (let i = 0; i < todos.length; i++) {
        show += `
            <tr>
                <td>${i + 1}</td>
                <td>${todos[i].task}</td>
                <td>${todos[i].date}</td>
                <td>${todos[i].comments}</td>
                <td><button onClick="editTodo(${i})">Edit</button></td>
                <td><button onClick="deleteTodo(${i})">Delete</button></td>
            </tr>
        `;
    }

    let table = document.getElementById("todoTable");
    table.innerHTML = `
        <tr>
            <th>S/N</th>
            <th>Task</th>
            <th>Date</th>
            <th>Comments</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
        ${show}
    `;
}

function editTodo(index) {
    selectedTodoIndex = index;
    let todo = todos[index];
    document.getElementById("task").value = todo.task;
    document.getElementById("date").value = todo.date;
    document.getElementById("comments").value = todo.comments;
}

function deleteTodo(index) {
    todos.splice(index, 1);
    displayTodo();
}