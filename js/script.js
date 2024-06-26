{
  const tasks = [
    {
      content: "Wykonać TO DO list",
      done: false,
    },
    {
      content: "Napić się kawy :)",
      done: true,
    },
  ];

  const addNewTask = (newTaskContent) => {
    tasks.push({
      content: newTaskContent,
    });

    render();
  };

  const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
  };

  const toogleTaskDone = (taskIndex) => {
    tasks[taskIndex].done = !tasks[taskIndex].done;
    render();
  };

  const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
      removeButton.addEventListener("click", () => {
        removeTask(index);
      });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toogleDoneButton, index) => {
      toogleDoneButton.addEventListener("click", () => {
        toogleTaskDone(index);
      });
    });
  };

  const render = () => {
    let htmlString = "";

    for (const task of tasks) {
      htmlString += `
          <li class="container__list"
            ${task.done ? ' style="text-decoration: line-through"' : ""}>
            <button class="js-done">
            <img src="./pics/tick2.png">
            </button>

            ${task.content}   

            <button class="js-remove">
            <img src="./pics/delete.png">
            </button>            
          </li>     
          <HR> 
        `;
    }

    document.querySelector(".js-tasks").innerHTML = htmlString;

    bindEvents();
  };

  const onFormSubmit = (event) => {
    event.preventDefault();

    const newTaskContent = document.querySelector(".js-newTask").value.trim();
    console.log(newTaskContent);

    if (newTaskContent === "") {
      return;
    }

    addNewTask(newTaskContent);
  };

  const init = () => {
    render();

    const form = document.querySelector(".js-form");

    form.addEventListener("submit", onFormSubmit);
  };

  init();
}
