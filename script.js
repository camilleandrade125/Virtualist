const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


let tasks = [];


function renderTasks() {
    taskList.innerHTML = '';

    tasks.forEach((task, index) => {
        const li = document.createElement('li');
        li.textContent = task.name;
        if (task.completed) {
            li.classList.add('completed');
        }

        const completeButton = document.createElement('button');
        completeButton.textContent = 'Concluir';
        completeButton.addEventListener('click', () => {
            tasks[index].completed = !tasks[index].completed;
            renderTasks();
        });

        const editButton = document.createElement('button');
        editButton.textContent = 'Editar';
        editButton.addEventListener('click', () => {
            const newName = prompt('Editar tarefa', tasks[index].name);
            if (newName !== null && newName.trim() !== '') {
                tasks[index].name = newName.trim();
                renderTasks();
            }
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Apagar';
        deleteButton.addEventListener('click', () => {
            tasks.splice(index, 1);
            renderTasks();
        });

       
        li.appendChild(completeButton);
        li.appendChild(editButton);
        li.appendChild(deleteButton);

       
        taskList.appendChild(li);
    });
}

taskForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const taskName = taskInput.value.trim();
    if (taskName !== '') {
        tasks.push({ name: taskName, completed: false });
        taskInput.value = '';
        renderTasks();
    }
});

renderTasks();
