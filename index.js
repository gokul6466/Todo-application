//var state={
//    tasklist:[
//        {
//            imageUrl:"",
//            taskTitle:"",
//            taskType:"",
//            taskDescription:"",
//        },
//        {
//            imageUrl:"",
//            taskTitle:"",
//            taskType:"",
//            taskDescription:"",
//        },
//        {
//            imageUrl:"",
//            taskTitle:"",
//            taskType:"",
//            taskDescription:"",
//        },
//        {
//            imageUrl:"",
//            taskTitle:"",
//            taskType:"",
//            taskDescription:"",
//        },
//        {
//            imageUrl:"",
//            taskTitle:"",
//            taskType:"",
//            taskDescription:"",
//        },
//    ],
//}
const state={
    tasklist:[],
};
// DOM OPerations
const taskContents = document.querySelector(".task__contents");
const taskModal = document.querySelector(".task__modal__body");
//console.log(taskContents);
//console.log(taskModal);  

const htmlTaskContent = ({ id, title, description, type, url }) => `
  <div class="col-md-3 col-lg-3 mt-3 " id=${id}>
    <div class='card shadow-sm task__card'>
    
      <div class='card-header d-flex justify-content-end task__card__header'>
          <button type='button' class='btn btn-outline-primary mr-1.5' name=${id} onclick="editTask.apply(this,arguments)">
              <i class='fas fa-pencil-alt name=${id}'></i>
          </button>
           <button type='button' class='btn btn-outline-danger mr-1.5' name=${id} onclick="deleteTask.apply(this,arguments)">
              <i class='fas fa-trash-alt name=${id}'></i>
          </button>
      </div>
      <div class='card-body'>
          ${
  //          url &&
 //           `<img width='100%' src=${url} alt='Card Image' class='card-img-top md-3 rounded-lg' />`
              url ?
              `<img width='100%' src=${url} alt='Card Image' class='card-img-top md-3 rounded-lg' />`
              :`<img width='100%' src=data:image/png;base64,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 alt='Card Image' class='card-img-top md-3 rounded-lg' />`
          }
          <h4 class='card-title task__card__title'>${title}</h4>
          <p class='description trim-3-lines text-muted'>${description}</p>
          <div class='tags text-white d-flex flex-wrap'>
            <span class='badge text-bg-info '>${type}</span>
          </div>
      </div>
      <div class='card-footer'>
          <button type='button' class='btn btn-outline-primary float-right' data-bs-toggle="modal" data-bs-target="#showTask" onclick="openTask.apply(this,arguments)"id=${id}>Open Task</button>
      </div>
    </div>
  </div>
  `;

// Modal Body on >> Clk of Open Task
const htmlModalContent = ({ id, title, description, url,type}) => {
  const date = new Date(parseInt(id));
  return `
  <div   id=${id}>
     ${
       url &&
       //  `<img width='100%' src=${url} alt='Card Image' class='img-fluid place__holder__image mb-3' />`
      // `<img width='100%' src=${url} alt='Card Image' class='img-fluid place__holder__image mb-3' />`
      url ?
      `<img width='100%' src=${url} alt='Card Image' class='card-img-top md-2 rounded-lg' />`
      :`<img width='100%' src=data:image/png;base64,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 alt='Card Image' class='card-img-top md-2 rounded-lg' />`
     }
     <strong class='text-muted text-sm'>Created on: ${date.toDateString()}</strong>
     <h2 class='my-3'>${title}</h2>
     <p class='text-muted'>${description}</p>
     <span class='badge bg-primary m-1 trim-3-lines'>${type}</span>
  </div>
  `;
}; 

// where we convert json > str( for local storage)

const updateLocalStorage = () => {
  localStorage.setItem(
    "task",
    JSON.stringify({
      tasks: state.tasklist,
    })
  );
};

// where we convert str > json(for rendering the cards on the screen)
const loadInitialData = () =>{
  const localStorageCopy=JSON.parse(localStorage.task);

  if(localStorageCopy) state.tasklist = localStorageCopy.tasks;
  state.tasklist.map((cardDate) =>{
    taskContents.insertAdjacentHTML("beforeend",htmlTaskContent(cardDate));
  });
};

// when we update or edit
const handleSubmit= (event) =>{
  console.log("event triggered");
  const id =`${Date.now()}`;
  const input={
    url:document.getElementById("imageurl").value,
    title:document.getElementById("tasktitle").value,
    type:document.getElementById("tasktype").value,
    description:document.getElementById("taskdesc").value,
  };
  if(input.title===""|| input.type===""|| input.description===""){
    return alert("please fill all the fields");
  }
taskContents.insertAdjacentHTML(
  "beforeend",
  htmlTaskContent({ ...input,id})
);
state.tasklist.push({ ...input,id});
updateLocalStorage();
};
//open task
const openTask =(e)=>{
 if(!e) e=window.event;

  const getTask = state.tasklist.find(({id}) => id ===e.target.id);
  taskModal.innerHTML=htmlModalContent(getTask)
}
//delete task

const deleteTask =(e) =>{
  if(!e) e = window.event;
  const targetId= e.target.getAttribute("name");
  const type = e.target.tagName;
  const removeTask = state.tasklist.filter(({id})=> id !== targetId);
  updateLocalStorage();
 
  if (type ==="BUTTON"){
    return e.target.parentNode.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode.parentNode
    );
  } else if (type === "I")
  {
    return e.target.parentNode.parentNode.parentNode.parentNode.parentNode.removeChild(
      e.target.parentNode.parentNode.parentNode.parentNode
    );
  }

};
// edit task
const editTask = (e) =>{
  if(!e) e = window.event;

const targetId =(e).target.id;
const type = e.target.tagName;

let parentNode;
let taskTitle;
let taskDescription;
let taskType;
let submitButton;

if (type ==="BUTTON"){
  parentNode=e.target.parentNode.parentNode;
}else{
  parentNode = e.target.parentNode.parentNode.parentNode;
}
 // taskTitle = parentNode.childNodes[3].childNodes[7].childNodes;
  // console.log(taskTitle);

taskTitle=parentNode.childNodes[3].childNodes[3];
taskDescription=parentNode.childNodes[3].childNodes[5];
taskType=parentNode.childNodes[3].childNodes[7];
submitButton=parentNode.childNodes[5].childNodes[1];

 // console.log(taskTitle, taskDescription, taskType, submitButton);

taskTitle.setAttribute("contenteditable","true");
taskDescription.setAttribute("contenteditable","true");
taskType.setAttribute("contenteditable","true");

submitButton.setAttribute("onclick","saveEdit.apply(this,arguments)");
submitButton.removeAttribute("data-bs-toggle");
submitButton.removeAttribute("data-bs-target");
submitButton.innerHTML="save Changes";
};

// save edit
const saveEdit = (e) =>{
  if(!e) e = window.event;

const targetId =(e).target.id;
const parentNode = e.target.parentNode.parentNode;
 // console.log(parentNode.childNodes)

const taskTitle=parentNode.childNodes[3].childNodes[3];
const taskDescription=parentNode.childNodes[3].childNodes[5];
const taskType=parentNode.childNodes[3].childNodes[7];
const submitButton=parentNode.childNodes[5].childNodes[1];

const updateData = {
  taskTitle:taskTitle.innerHTML,
  taskDescription:taskDescription.innerHTML,
  taskType:taskType.innerHTML,
};
let stateCopy=state.tasklist;

stateCopy = stateCopy.map((task)=>
task.id===targetId
? 
{
  id:task.id,
  title:updateData.taskTitle,
  description:updateData.taskDescription,
  type:updateData.taskType,
  url:task.url,
}
: task
);
state.tasklist=stateCopy;
updateLocalStorage();

taskTitle.setAttribute("contenteditable","false");
taskDescription.setAttribute("contenteditable","false");
taskType.setAttribute("contenteditable","false");

submitButton.setAttribute("onclick","openTask.apply(this,arguments)");
submitButton.setAttribute("data-bs-toggle","modal");
submitButton.setAttribute("data-bs-target","#showTask");
submitButton.innerHTML = "Open Task";
};

//search

const searchTask =(e) => {
  if (!e) e = window.event;
  while(taskContents.firstChild){
    taskContents.removeChild(taskContents.firstChild);
  }
  const resultData = state.tasklist.filter(({title})=>
  title.toLowerCase().includes(e.target.value.toLowerCase())
    
  );
   // console.log(resultData);
   resultData.map((cardData)=>
   // taskContents.insertAdjacentHTML("beforeend",htmlModalContent(cardData))
    taskContents.insertAdjacentHTML("beforeend",htmlTaskContent(cardData))
   );
};