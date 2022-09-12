var z = document.getElementById("create-new-task-block");
 var savebtn=document.getElementById("save-button");
 var cancelbtn=document.getElementById("cancel-button");
function createTask() {
 
    z.style.display = "flex";
}


let form = document.getElementById("form");
var taskName = document.getElementById("task-name");
var statusbar = document.getElementById("task-status");

var description = document.getElementById("task-description");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log("button clicked");
    formValidation();
    form.reset();
    z.style.display = "none";
});
let formValidation = () => {
    if (taskName.value === "") {

        console.log("failure");
    } else {
        console.log("successs");
        addData();
    }
};
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

}
function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var id = ev.currentTarget.id
    var data = ev.dataTransfer.getData("text");
    var card = document.getElementById(`${data}`)
    var body = card.querySelector('p')
    body.innerHTML = `<span class="test rounded-circle" id="${id}"></span>${id}`


    ev.currentTarget.appendChild(document.getElementById(data));

}


cancelbtn.addEventListener('click',function closeCard() {
     form.reset(); 
    z.style.display = "none";
 
})
let data = [];
let addData = () => {
    let Data = {
        taskName: taskName.value,
        description: description.value,
        statusbar: statusbar.value
    };

    data.push(Data);

    localStorage.setItem('TaskData', JSON.stringify(data));
    saveTask();
}

let saveTask = () => {
    var todo = document.getElementById(`${statusbar.value}`);
    if (data && data.length !== 0) {
        todo.innerHTML += `
        <div class="card taskcard" id="${taskName.value.toLowerCase().split(" ").join("")}" draggable="true" ondragstart="drag(event)">
           <div class="taskFlex">
           <h5 class="card-title">${taskName.value}</h5>
           <span class="options">
           <i onClick="editTask(this)" class="fa-solid fa-pen-to-square"></i>
         <i onClick="deleteTask(this)" class="fas fa-trash-alt"></i>
          </span>
          </div>
            <div class="card-body">
            <div class="card-text">${description.value}</div>
            <p class="status"><span class="test rounded-circle" id="${statusbar.value}"></span>${statusbar.value}</p>
        </div>
        </div> `
    }
}

let editTask =(e)=> {

    z.style.display = "flex";
  taskName.value=e.parentElement.previousElementSibling.innerHTML
  description.value=e.parentElement.parentElement.nextElementSibling.firstElementChild.innerHTML
  statusbar.value=e.parentElement.parentElement.nextElementSibling.lastElementChild.firstElementChild.id
  savebtn.addEventListener('click',()=>{
    e.parentElement.parentElement.parentElement.remove();
})
}
let deleteTask=(e)=>{
    
  e.parentElement.parentElement.parentElement.remove();
}
