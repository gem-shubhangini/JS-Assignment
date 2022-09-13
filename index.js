var z = document.getElementById("create-new-task-block");
 var savebtn=document.getElementById("save-button");
 var cancelbtn=document.getElementById("cancel-button");
 let form = document.getElementById("form");
var taskName = document.getElementById("task-name");
var statusbar = document.getElementById("task-status");
var msg =form.getElementsByClassName("msg");
var description = document.getElementById("task-description");
var date =document.getElementById("task-duedate");
function createTask(e) {
    statusbar.value=e.parentElement.parentElement.id
    z.style.display = "flex";
}


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
  
   //var iod =card.data-id;
 //var dataedit=JSON.stringify({ 
//   "status":id,
// });
    // var xhr = new XMLHttpRequest();
    // xhr.addEventListener("readystatechange", function() {
    //   if(this.readyState === 4) {
    //     console.log(this.responseText);
    //   }
    // }); 
    // xhr.open("PUT", "myURL/iod");
    // xhr.setRequestHeader("Content-Type", "application/json");   
    // xhr.send(dataedit);
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
        DueDate:date.value,
        status: statusbar.value
    };

    data.push(Data);
    // var datasend = JSON.stringify(data);
      
    //   var xhr = new XMLHttpRequest();
      
    //   xhr.addEventListener("readystatechange", function() {
    //     if(this.readyState === 4) {
    //       console.log(this.responseText);
    //     }
    //   });
      
    //   xhr.open("POST", "myURL");
    //   xhr.setRequestHeader("Content-Type", "application/json");
      
    //   xhr.send(datasend);
    localStorage.setItem('TaskData', JSON.stringify(data));
    saveTask();
}

let saveTask = () => {
//     var dataget = new FormData();

// var xhr = new XMLHttpRequest();
// xhr.withCredentials = true;

// xhr.addEventListener("readystatechange", function() {
//   if(this.readyState === 4) {
//     console.log(this.responseText);
//   }
// });

// xhr.open("GET", "myURl");

// xhr.send(dataget);
// dataget.forEach((object,index) => {
//     var todo = document.getElementById(`${object.status}`);
//         todo.innerHTML += `
//         <div class="card taskcard" data-id="${object["_id"]["$oid"]}" id="${object.taskName.toLowerCase().split(" ").join("")}" draggable="true" ondragstart="drag(event)">
//            <div class="taskFlex">
//            <h5 class="card-title">${object.taskName}</h5>
//            <span class="options">
//            <i onClick="editTask(this)" data-id="${object["_id"]["$oid"]}" class="fa-solid fa-pen-to-square"></i>
//          <i onClick="deleteTask(this)" data-id="${object["_id"]["$oid"]}" class="fas fa-trash-alt"></i>
//           </span>
//           </div>
//             <div class="card-body">
//             <div class="card-text">${object.DueDate}</div>
//             <div class="card-text">${object.description}</div>
           
//             <p class="status"><span class="test rounded-circle" id="${object.status}"></span>${object.status}</p>
//         </div>
//         </div> `
// });
var todo = document.getElementById(`${statusbar.value}`);
    if (data && data.length !== 0) {
        todo.innerHTML += `
        <div class="card taskcard" id="${taskName.value.toLowerCase().split(" ").join("")}" data-id="1" draggable="true" ondragstart="drag(event)">
           <div class="taskFlex">
           <h5 class="card-title">${taskName.value}</h5>
           <span class="options">
           <i onClick="editTask(this)" class="fa-solid fa-pen-to-square"></i>
         <i onClick="deleteTask(this)" class="fas fa-trash-alt"></i>
          </span>
          </div>
            <div class="card-body">
            <div class="card-text">${date.value}</div>
            <div class="card-text">${description.value}</div>
           
            <p class="status"><span class="test rounded-circle" id="${statusbar.value}"></span>${statusbar.value}</p>
        </div>
        </div> `
    }
}

let editTask =(e)=> {
   
    z.style.display = "flex";
  taskName.value=e.parentElement.previousElementSibling.innerHTML
  date.value=e.parentElement.parentElement.nextElementSibling.firstElementChild.innerHTML
  description.value=e.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.innerHTML
  statusbar.value=e.parentElement.parentElement.nextElementSibling.lastElementChild.firstElementChild.id
  savebtn.addEventListener('click',()=>{
    e.parentElement.parentElement.parentElement.remove();
})
//var id =e.attr('data-id');
 //var dataedit=JSON.stringify({
//   "taskName":taskName.value,
//   "description": description.value,
//   "status": statusbar.value,
//   "DueDate": stringdate.value,
// });
    // var xhr = new XMLHttpRequest();
   
    
    // xhr.addEventListener("readystatechange", function() {
    //   if(this.readyState === 4) {
    //     console.log(this.responseText);
    //   }
    // });
    
    // xhr.open("PUT", "myURL/id");
    // xhr.setRequestHeader("Content-Type", "application/json");
    
    // xhr.send(dataedit);
}
let deleteTask=(e)=>{
    //var id =e.attr('data-id');
  // var xhr = new XMLHttpRequest();
   
    
    // xhr.addEventListener("readystatechange", function() {
    //   if(this.readyState === 4) {
    //     console.log(this.responseText);
    //   }
    // });
    
    // xhr.open("DELETE", "myURL/id");
    // xhr.setRequestHeader("Content-Type", "application/json");
    
    // xhr.send();
  e.parentElement.parentElement.parentElement.remove();
}
