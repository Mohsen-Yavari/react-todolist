import React,{useState} from "react";

function App() {

  // Todolist State
  const [toDo,setTodo] = useState([
    {"id":1,"title":" کار1","status":false},
    {"id":1,"title":" کار2","status":false},
  ]); 

  const [newTask,setNewTask] = useState("");
  const [updateDate,setUpdateDate] = useState("");

  //Add task
  const 

  return (
    <div className="container App">
        <br /><br />
        <h2>لیست انجام کارها</h2>
        <br /><br />
        
    </div>
  );
}

export default App;
