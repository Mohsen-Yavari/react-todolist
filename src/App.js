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
  const addTask = () => {

  }

  //Delet task
  const deleteTask = (id) => {

  }

  //MarkDone task
  const markDone = (id) => {

  }

  //Cancele update
  const cancelUpdate = () => {

  }

  //Change task for update
  const changeTask  = (e) => {

  }

  //Update task
  const updateTask  = () => {

  }

  return (
    <div className="container bg-dark text-light w-100 text-center p-5 vh-100 App">
        <br /><br />
        <h2>لیست انجام کارها</h2>
        <br /><br />

        {/* update task */}
        <div className="row">
          <div className="col">
            
          </div>
        </div>


        {/* add task */}
        <div className="row">
          <div className="col">
            <input className="form-control form-control-lg" />
          </div>
          <div className="col-auto">
            <button className="btn btn-lg btn-success">
              اضافه کردن
            </button>
          </div>
        </div>

        {/* Show toDos */}
        {toDo && toDo.length ? "" : "...چیزی وجود ندارد"}
          
        {toDo && toDo
        .sort((a, b) => a.id > b.id ? 1 : -1)
        .map( (task,index) => {
            return(
              <React.Fragment key={task.id}>

                <div className="col taskBg">

                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="iconWrap">

                    <span title="تایید" >
                      <i  class="ri-checkbox-circle-fill"></i>
                    </span>
                    <span title="ویرایش">
                      <i class="ri-pencil-line"></i>
                    </span>
                    <span title="حذف">
                      <i class="ri-delete-bin-line"></i>
                    </span>
                  </div>

                </div>
               
              </React.Fragment>
            )
        })
        }
        
    </div>
  );
}

export default App;
