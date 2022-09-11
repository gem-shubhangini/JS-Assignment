
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
   
}
function allowDrop(ev) {
    ev.preventDefault();
}

function drop(ev) {
    ev.preventDefault();
    var id =ev.currentTarget.id
    var data = ev.dataTransfer.getData("text");
    var card = document.getElementById(`${data}`)
    var body =card.querySelector('p')
    body.innerHTML=`<span class="test rounded-circle" id="${id}"></span>${id}`
    
       
    ev.currentTarget.appendChild(document.getElementById(data));
 
}

function createTask(){
    
    var z = document.getElementById("create-new-task-block");
    z.style.display = "flex";
}

function closeCard(){
    
    var z = document.getElementById("create-new-task-block");
    console.log("display:none")
    z.style.display = "none";
}

function saveTask(){

    


    var statusbar = document.getElementById("task-status").value;
    var todo = document.getElementById(`${statusbar}`);
    var taskName = document.getElementById("task-name").value;
    
        var description =document.getElementById("task-description").value;
        todo.innerHTML += `
        <div class="card taskcard" id="${taskName.toLowerCase().split(" ").join("")}" draggable="true" ondragstart="drag(event)">
            <h5 class="card-title">${taskName}</h5>
            <div class="card-body">
            <div class="card-text">${description}</div>
            <p class="status"><span class="test rounded-circle" id="${statusbar}"></span>${statusbar}</p>
        </div>
        </div>
        `
        data=[]
        let Data = {
            taskName:taskName,
            description:description,
            statusbar:statusbar
        };
      
        data.push(Data);
        
        localStorage.setItem('TaskData', JSON.stringify(data));

   
    
 
    
}

function editTask(){
    var saveButton = document.getElementById("save-button");
    var editButton = document.getElementById("edit-button");
    if (saveButton.style.display === "none") {
        saveButton.style.display = "block";
        editButton.style.display = "none";
    } else{
        saveButton.style.display = "none";
        editButton.style.display = "block";
    }
}
