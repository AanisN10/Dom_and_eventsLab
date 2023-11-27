const enter = document.querySelector("#enter");
const list = document.querySelector("#list");
const showButton = document.querySelector("#show-button");
const dateOutput = document.querySelector("#date-output")
const completedList = document.querySelector("#completed-list");
// const newToDoList = document.querySelector("#new-todo");

// const textOutput = document.querySelector("text-output");

enter.addEventListener("click", (e)=>{
    e.preventDefault();
    const textInput = document.querySelector("#new-todo");
    const newListItem = document.createElement("li");
    newListItem.innerText = textInput.value;
    list.appendChild(newListItem); 

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.setAttribute("id","delete-button");
    deleteButton.setAttribute("class","buttons");
    newListItem.appendChild(deleteButton);
    deleteButton.addEventListener("click", () => {
        deleteButton.parentElement.remove();
    })

    const doneButton = document.createElement("button");
    doneButton.textContent = "Done";
    doneButton.setAttribute("id","done-button");
    newListItem.appendChild(doneButton);
    doneButton.addEventListener("click", () => {
        doneButton.parentElement.remove();
        completedList.appendChild(doneButton.parentElement);
        newListItem.setAttribute("id","new-item");
        doneButton.setAttribute("class","buttons");
        doneButton.remove();
        deleteButton.remove();
    })
});

showButton.addEventListener("click", (e) => {
    dateOutput.innerText = Date()
})





