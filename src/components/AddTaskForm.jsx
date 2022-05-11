

const AddTaskForm = ({newTask,setNewTask,addTask }) => {
    return (
        <>
               {/* add task */}
              <div className="row">
                <div className="col">
                  <input 
                  value={newTask}
                  placeholder="تسکی وارد کنید ..."
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
    );
};

export default AddTaskForm;