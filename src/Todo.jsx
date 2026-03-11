// Only Props two ways of Conditional Rendering

// 1. String Prop
// export default function Todo({ task ,isDone }) {
//     return (
//         <li>Task : {task}</li>

//     )
// }

// export default function ToDo({ task, isDone }) {

//     if (isDone === true) {
//         return <li>Done : {task} is Done</li>
//     } else {
//         return <li>Pendding : {task} is Not Done</li>
//     }

// }

// export default function Todo({ task, isDone, time }) {

//     if (isDone === true) {
//         return <li>Done : {task} is Done. Duration : {time} minutes</li>
//     } 
//     return <li>To be done : {task} is Not Done</li>

// }