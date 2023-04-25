export const Task = (props) => {
   return(
        <div className="task" style={{ backgroundColor: props.completed ? "green": "white" }}>
            <h1>{props.taskName}</h1>
            <button onClick={() => props.completeTask(props.id)} className="b1">Complete</button>
            <button onClick={() => props.deleteTask(props.id)} className="b2">X</button>
        </div>
    );
}
