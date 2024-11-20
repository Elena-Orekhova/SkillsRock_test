const taskInput = document.querySelector("#task-input");
const addTaskButton = document.querySelector("#add-task-button");
const taskList = document.querySelector("#task-list");
const filtersSelect = document.querySelector("#filters");
const tasks = [];

let filterStatus = "all"; 

// Функция добавления задачи
const addTask = () => {
  const taskText = taskInput.value;

  if (!taskText) {
    return;
  }

  tasks.push({ text: taskText, completed: false });

  taskInput.value = "";

  renderTasks();
};

// Функция для рендеринга задач
const renderTasks = () => {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  // Фильтр задач
  let filteredTasks = tasks;
  if (filterStatus === "completed") {
    filteredTasks = tasks.filter(task => task.completed);
  } else if (filterStatus === "unfulfilled") {
    filteredTasks = tasks.filter(task => !task.completed);
  }

  // Отображение задач
  filteredTasks.forEach((task, index) => {
    const taskItem = document.createElement("li");
    const taskSpan = document.createElement("p");
    const deleteButton = document.createElement("button");

    taskItem.className = "task-item";
    taskSpan.textContent = task.text;
    deleteButton.type = "button";
    deleteButton.className = "button button-delete";        
    deleteButton.textContent = "➖";

    // Отметка задачи как выполненной
    const checkMark = document.createElement("span");
    checkMark.className = "check-mark";
    checkMark.textContent = "✔";
    if (task.completed) {
      taskItem.classList.add("completed");
      checkMark.classList.add("visible");
    }

    // Обработчик для отметки задачи как выполненной
    taskSpan.addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks();
    });

    // Обработчик для кнопки удаления
    deleteButton.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    // Добавляем элементы
    taskItem.appendChild(taskSpan);
    taskItem.appendChild(checkMark);
    taskItem.appendChild(deleteButton);
    taskList.appendChild(taskItem);
  });
};

// Обработчик для изменения фильтра
filtersSelect.addEventListener("change", (event) => {
  filterStatus = event.target.value;
  renderTasks();
});

// Обработчик для кнопки добавления задачи
addTaskButton.addEventListener("click", addTask);
