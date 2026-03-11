// Six ways to do Conditional Rendering: If, Ternary and AND OR

//conditional rendering : 3 ternary 
//Condition ? true : false

// export default function ToDo({ task, isDone, time }) {
//     return isDone ?
//         <li>Done: {task} time:
//             {time}</li> : <li>Not Done: {task} time: {time}</li>
// }

// conditional rendering : 4 AND
// condition && expression

// export default function ToDo({ task, isDone, time }) {
//     return isDone && <li>Done Task: {task} time: {time}</li>

// }

// conditional rendering : 5 OR
// condition || expression
// export default function ToDo({ task, isDone, time }) {
//     return isDone || <li>Not Done Task: {task} time: {time}</li>

// }


// conditional rendering : 6 use variables

export default function ToDo({ task, isDone, time }) {
    const displayTime = time > 30 ? 
    "Long Task" : "Short Task";

    let taskElement;
    if(isDone === true) {
        taskElement = <li>Done Task: {task} time: {time} DisplayTime :{displayTime}</li>
    }else{
        taskElement = <li>Not Done Task: {task} time: {time}</li>
    }
    return taskElement;
} 

