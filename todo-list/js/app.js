const form = document.querySelector('.main-form');
const taskList = document.querySelector('.task-list');

form.addEventListener('submit', function(e) {
    e.preventDefault();
})

form.addEventListener('click', function(e) {
    const el = e.target;
    
    if (el.classList.contains('add-task')) {
        const inputTask = form.querySelector('.input-task');
        const inputText = inputTask.value;
        
        if (inputText !== '') {
            createTask(inputText);
            saveTask();
        }

        clearInput(inputTask);
    }
});

taskList.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains('delete-task')) {
        const li = el.parentElement;
        li.remove();
        saveTask();
    }
})

function createTask(task) {
    const li = document.createElement('li');
    li.innerText = task;
    li.appendChild(createButton());
    taskList.appendChild(li);
}

function createButton() {
    const button = document.createElement('button');
    button.innerText = 'Excluir';
    button.classList.add('second-button', 'delete-task');
    return button
}

function clearInput(input) {
    input.value = '';
    input.focus();
}

function saveTask() {
    const elements = document.querySelectorAll('li');
    const taskList = [];

    for (const element of elements) {
        let text = element.innerText;
        text = text.replace('Excluir', '').trim();
        taskList.push(text);
    }

    const taskListJSON = JSON.stringify(taskList);
    localStorage.setItem('tasks', taskListJSON);
}

function loadTask() {
    const tasks = localStorage.getItem('tasks');
    const taskList = JSON.parse(tasks);

    for(const task of taskList) {
        createTask(task);
    }
}

loadTask();