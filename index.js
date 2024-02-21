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
//};

const state={
    tasklist:[],
};
// DOM OPerations
const taskContents = document.querySelector(".task__contents");
const taskModal = document.querySelector(".Task__modal__body");

// console.log(taskContents);
// console.log(taskModal);

const htmlTaskContent = ({id,title,description,type,url})=>{};