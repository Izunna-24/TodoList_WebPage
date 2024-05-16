
const taskList = document.getElementById('tasks');


taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete')) {
        const li = event.target.parentElement;
        li.remove();
    } else if (event.target.tagName === 'INPUT' && event.target.type === 'checkbox') {
        const li = event.target.parentElement;
        if (event.target.checked) {
            li.classList.add('completed');
        } else {
            li.classList.remove('completed');
        }
    }
});


document.getElementById('add-task').addEventListener('submit', function(event) {
    event.preventDefault();


    const input = document.querySelector('#add-task input');
    const taskName = input.value.trim();

    if (taskName !== '') {

        const li = document.createElement('li');
        const spanName = document.createElement('span');
        spanName.textContent = taskName;
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const spanDelete = document.createElement('span');
        spanDelete.textContent = 'delete';
        spanDelete.classList.add('delete');

        li.appendChild(checkbox);
        li.appendChild(spanName);
        li.appendChild(spanDelete);
        taskList.appendChild(li);


        input.value = '';
    }
});
