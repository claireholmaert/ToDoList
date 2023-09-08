document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById('inputField');
    const btn = document.getElementById('addTask');
    const toDo = document.getElementById('toDoContainer');

    btn.addEventListener('click', () => {
        let task;
        if(input.value != "") {
            task = document.createElement('p');
        }
        task.innerText = input.value;
        task.classList.add('wish');
        
        toDo.appendChild(task);
        
        input.value = "";

        task.addEventListener('click', () => {
            task.classList.add('wish_click');
        });

        task.addEventListener('dblclick', () => {
            toDo.removeChild(task);
            alert(task.innerText + ' supprimer');
        });
        
    });
});

