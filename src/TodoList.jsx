import './TodoList.css'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export default function TodoList() {

    let[Todo,setTodo] = useState([{task:"sample task" ,key: uuidv4(),isComp:false}]);
    
    const [inputValue,setInputValue]=useState("");


    function userInput(){

        console.log(inputValue);

   setTodo([...Todo, { task: inputValue, key: uuidv4() ,isComp:false}]);
        setInputValue("");
    }



function handleDelete(key) {
  setTodo((prev) => Deletetask(prev, key));  // ✅ Corrected spelling
}



    function deletetask(deleteKey){
  setTodo(Todo.filter((item) => item.key !== deleteKey));
  console.log("Task deleted");
}

const allComp = () => {
  setTodo((prevTasks) =>
    prevTasks.map((todo) => ({
      ...todo,
      isComp:true,
    }))
  );
};

function isComp(singleKey) {

  setTodo((prevTasks) =>
    prevTasks.map((todo) => {
      // Step 1: Check key match
      if (todo.key === singleKey) {
        // Step 2: Return updated task
        return {
          ...todo,
          isComp : true,
        };
      } else {
        // Step 3: Return unmodified task
        return todo;
      }
    })
  );
}


function isNotComp(singleKey) {

  setTodo((prevTasks) =>
    prevTasks.map((todo) => {
      // Step 1: Check key match
      if (todo.key === singleKey) {
        // Step 2: Return updated task
        return {
          ...todo,
          isComp : false,
        };
      } else {
        // Step 3: Return unmodified task
        return todo;
      }
    })
  );
}













    return(

        <div>
                <h1>Todo list in React</h1>
<input
  placeholder="Enter your task"
  name="user Input"
  value={inputValue}
  onChange={(e) => setInputValue(e.target.value)}
  onKeyDown={(e) => {
    if (e.key === 'Enter') {
      userInput();
    }
  }}
/>

&nbsp;&nbsp;


<button onClick={userInput}>Add+</button>
<br></br>


 <ol>
        {Todo.map((item) => (
          <li key={item.key} className={item.isComp ? "done" : ""}>
            {item.task}
            <div className="btn-group">
              <button onClick={() => deletetask(item.key)}>Delete</button>
              <button onClick={() => isComp(item.key)}>Done</button>
              <button onClick={() => isNotComp(item.key)}>Undo</button>
            </div>
          </li>
        ))}
        <button onClick={allComp}>All Task Comp</button>
      </ol>
    </div>
    )
}