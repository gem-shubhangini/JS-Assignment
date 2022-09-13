xhr.addEventListener("readystatechange", function() {
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
//             <div class="card-text">Date:<span>${object.DueDate}</span></div>
//             <div class="card-text">Description: <span>${object.description}</span></div>
//             <div class="card-text">Assignee: <span>${object.Asssignee}</span></div>
//             <p class="status">Status: <span class="test rounded-circle" id="${object.status}"></span>${object.status}</p>
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
            <div class="card-text">Date: <span>${date.value}</span> </div>
                    <div class="card-text">Description: <span>${description.value}</span></div>
                    <div class="card-text">Assignee: <span>${assign.value}</span></div>
            <p class="status">Status: <span class="test rounded-circle" id="${statusbar.value}"></span>${statusbar.value}</p>
        </div>
        </div> `
    }
}

let editTask =(e)=> {
   
    z.style.display = "flex";
  taskName.value=e.parentElement.previousElementSibling.innerHTML
  date.value=e.parentElement.parentElement.nextElementSibling.firstElementChild.lastElementChild.innerHTML
  description.value=e.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.lastElementChild.innerHTML
  assign.value=e.parentElement.parentElement.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.innerHTML
  statusbar.value=e.parentElement.parentElement.nextElementSibling.lastElementChild.lastElementChild.id
  console.log(statusbar.value)
  savebtn.addEventListener('click',()=>{
    e.parentElement.parentElement.parentElement.remove();
   
})
//var id =e.attr('data-id');
 //var dataedit=JSON.stringify({
//   "taskName":taskName.value,
//   "description": description.value,
//   "status": statusbar.value,
//   "DueDate": stringdate.value,
//   "Assignee":assign.value
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
