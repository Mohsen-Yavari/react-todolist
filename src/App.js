import React,{useState} from "react";

function App() {

  // Todolist State
  const [toDo,setTodo] = useState([
    {"id":1,"title":" کار1","status":false},
    {"id":2,"title":" کار2","status":false},
  ]); 

  const [newTask,setNewTask] = useState("");
  const [updateData,setUpdateData] = useState("");

  //Add task
  const addTask = () => {
    if(newTask) {
      let num = toDo.length + 1;
      let newEntry = {id:num,title:newTask,status:false};
      setTodo([...toDo,newEntry]);
      setNewTask("");
    }
  }

  //Delet task
  const deleteTask = (id) => {
    let newTasks = toDo.filter(task => task.id !==id);
    setTodo(newTasks);

  }

  //MarkDone task
  const markDone = (id) => {
      let newTask = toDo.map(task =>{
        if( task.id === id) {
          return ({...task,status: !task.status})
        }
        return task;
      });
      setTodo(newTask);
  }

  //Cancele update
  const cancelUpdate = () => {
    setUpdateData('');

  }

  //Change task for update
  const changeTask  = (e) => {
    let newAntry ={
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newAntry);
  }

  //Update task
  const updateTask = () => {
    let filterRecords = [...toDo].filter( task => task.id !== updateData.id );
    let updatedObject = [...filterRecords, updateData]
    setTodo(updatedObject);
    setUpdateData('');
  }



  return (
    <div className="container bg-dark text-light w-100 text-center p-5 vh-100 App">
        <br /><br />
        <h2>لیست انجام کارها</h2>
        <br /><br />

        {/* update task */}

        {updateData && updateData ? (
          <>
             <div className="row">
                <div className="col">
                <input
                value={updateData && updateData.title}
                onChange={ (e)=>changeTask(e)}
                className="form-control form-control-lg" />
                </div>
                <div className="col-auto">
                  <button 
                  onClick={updateTask}
                  className="btn btn-lg btn-success mb-20">
                    اپدیت
                  </button>
                  <button 
                  onClick={cancelUpdate}
                  className="btn btn-lg btn-warning text-light  mb-20">
                    کنسل
                  </button>
                </div>
              </div>
              <br />
          </>
        ) : (
            <>
               {/* add task */}
              <div className="row">
                <div className="col">
                  <input 
                  value={newTask}
                  onChange={ (e) => setNewTask(e.target.value)}
                  className="form-control form-control-lg" />
                </div>
                <div className="col-auto">
                  <button 
                  onClick={addTask}
                  className="btn btn-lg btn-success">
                    اضافه کردن
                  </button>
                </div>
              </div>
              <br />

            </>
        )};
       


       
        {/* Show toDos */}
        {toDo && toDo.length ? "" : " چییزی وجود ندارد ..."}
          
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

                    <span 
                    onClick={ (e)=> markDone(task.id)}
                    title="تایید " >
                     <i className="ri-checkbox-circle-fill" />

                    </span>
                    {task.status ? null : (
                      
                       <span 
                        onClick={ () => setUpdateData({
                        id: task.id,
                        title:task.title,
                        status: task.status ? true : false
                        })}
                       title="ویرایش">
                       <i className="ri-pencil-line" />
 
                     </span>
                    )}
                   
                    <span 
                    onClick={() => deleteTask(task.id)}
                    title="حذف"
                    
                    >
                    <i className="ri-delete-bin-line" />

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
