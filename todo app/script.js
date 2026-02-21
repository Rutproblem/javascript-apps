const taskInput = document.getElementById('taskInput');
const addBtn = document.getElementById('addBtn');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

let tasks = [];

addBtn.addEventListener('click', () => {
    const taskText = taskInput.value.trim();

    if(taskText === '') return;

    tasks.push(taskText);

    taskInput.value = '';
});

function randomTasks() {
    const li = document.createElement('li');
    li.classname = "list-group-tem d-flex justify-content-between align-items-center";
    li.innterHTML = `
        <span>${task}</span>
        <button class="btn btn-outline-danger btn-sm">🚮</button>
    `;
};