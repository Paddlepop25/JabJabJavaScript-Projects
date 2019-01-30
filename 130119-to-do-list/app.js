const todoInputEl = document.querySelector(".todo__input");
const todoListEl = document.querySelector(".todo__list");
const todoItemEls = document.querySelectorAll(".todo__item");
// const toDeleteEls = document.querySelector(".to__delete");
const todoBodyEl = document.querySelector(".todo__body");
// const listUl = todoBodyEl.querySelector("ul");

function addListItem() { 
    todoInputEl.addEventListener("keypress", function(event) {
        if (event.keyCode === 13) {
            let newListItem = createListItem(todoInputEl.value);
            todoListEl.insertBefore(newListItem, todoListEl.childNodes[0]);
            todoInputEl.value = "";
        }
    })    
    
}

// doesn't work. research on bubbling and propogration
// function toggleDone() {
//     for (let elem of todoItemEls) {
//         elem.addEventListener("click", function() {
//             elem.classList.toggle("done");
//         })
//     }
// }

function toggleDone() {
    todoListEl.addEventListener("click", function (event) {
        if (event.target.classList.contains("todo__item")) {
            event.target.classList.toggle("done")
        }
    })
}

function createListItem(text) {
    const newListElement = document.createElement("li");
    newListElement.textContent = text;
    newListElement.setAttribute("class", "todo__item")

    function createDeleteX(todoItemEls) {
        const newDeleteX = document.createElement("span");
        newDeleteX.className= "to__delete";
        newDeleteX.textContent = "X";
        todoItemEls.appendChild(newDeleteX);
        return newDeleteX;
    }
    createDeleteX(newListElement);
    return newListElement;


}

todoBodyEl.addEventListener("click", (event) => {
    if (event.target.tagName === "SPAN") {
      let li = event.target.parentNode;
      let ul = li.parentNode;
      ul.removeChild(li);
    }
  });

addListItem();
toggleDone();


































