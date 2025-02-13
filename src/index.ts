import {v4 as uuidV4} from "uuid"

type Task = {
  id: string,
  title: string,
  completed: boolean,
  createdAt: Date
}

const list = document.querySelector<HTMLUListElement>("#list")
// const form = document.querySelector<HTMLFormElement>("#new-task-form")
const form = document.getElementById("new-task-form") as HTMLFormElement | null
const input = document.querySelector<HTMLInputElement>("#new-task-title")

form?.addEventListener("submit", e => {
  e.preventDefault()

  if (input?.value == "" || input?.value == null) {
    return
  }

  const newTask: Task = {
    id: uuidV4(),
    title: input.value,
    completed: false,
    createdAt: new Date(),   
  }
  
  addListItem(newTask)
  // input.value = "";
})

function addListItem(task: Task){
  console.log("task.title = " + task.title);
  const item = document.createElement("li")
  const label = document.createElement("label")
  const checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  label.append(checkbox, task.title)
  item.append(label)
  list?.append(item)
}

