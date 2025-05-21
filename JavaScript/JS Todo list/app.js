let todos = [];

// Initialize the app
document.addEventListener('DOMContentLoaded', function() {
    toGetLocalStorage();
    renderTodos();
    
    // Add event listener for Enter key
    document.getElementById('todo-input').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            handleAdd();
        }
    });
});

function toStoreLocalStorage() {
    window.localStorage.setItem('todos', JSON.stringify(todos));
}

function toGetLocalStorage() {
    let data = JSON.parse(window.localStorage.getItem('todos'));
    if (data) {
        todos = data;
    }
}

function renderTodos() {
    todoBox = document.querySelector(".todoBox");
    todoBox.innerHTML = '';

    if (todos.length < 1) {
        let emptyDiv = document.createElement("div");
        emptyDiv.className = "empty-state";
        emptyDiv.innerText = 'No todos yet. Add one above!';
        todoBox.appendChild(emptyDiv);
        return;
    }

    todos.forEach((todo, index) => {
        let todoDiv = document.createElement("div");
        let todoSpan = document.createElement("span");
        let todoDelete = document.createElement("button");
        
        todoDelete.innerText = 'Delete';
        todoDelete.addEventListener('click', function(e) {
            // Add delete animation
            e.target.parentElement.style.transform = 'translateX(100px)';
            e.target.parentElement.style.opacity = '0';
            
            setTimeout(() => {
                todos.splice(index, 1);
                toStoreLocalStorage();
                renderTodos();
            }, 300);
        });

        // Add click to mark as complete
        todoSpan.addEventListener('click', function() {
            todoDiv.classList.toggle('todo-complete');
        });

        todoDiv.className = "todo";
        todoSpan.innerText = todo;

        todoDiv.appendChild(todoSpan);
        todoDiv.appendChild(todoDelete);
        todoBox.appendChild(todoDiv);
    });
}

function handleAdd() {
    let input = document.querySelector("#todo-input");
    let inpValue = input.value.trim();

    if (inpValue.length < 1) {
        // Add error animation
        input.style.borderColor = 'var(--danger-color)';
        setTimeout(() => {
            input.style.borderColor = '#e9ecef';
        }, 1000);
        return;
    }

    todos.push(inpValue);
    toStoreLocalStorage();
    renderTodos();
    
    // Clear input and focus
    input.value = '';
    input.focus();
}
