import './App.css';
import { useState} from 'react';

function App() {
  const [tasks,setTasks]=useState([]);
  
  const handleNew=()=>{
    // setTasks([...tasks," "])
    setTasks(old=>[...old,""]);
  }

  const handleChange=(e,currindex)=>{
    const newTasks=tasks.map((data,index)=>{
      // console.log("index = ",index," currindex = ",currindex);
      if(index===currindex){
        return e.target.value;
      }
      else{
        return data;
      }
    })

    setTasks(newTasks);
  }

  const handleDelete=(e,currindex)=>{
    const newTasks=tasks.filter((data,index)=>{
      return index!==currindex;
    })

    setTasks(newTasks);
  }

  return (
    <div class="App">
      <div class='inner title-parent'>
        <div class='title'>
          <h1>Todo List</h1>
          <button class='new' onClick={handleNew}>+</button>
        </div>
      </div>

      {
        tasks.map((data,index)=>{
          return(
            <div class='inner inputArea'>
              <input name='task' id='task' value={data} placeholder='Task' onChange={(e)=>{handleChange(e,index)}}></input>
              <button onClick={(e)=>{handleDelete(e,index)}}>X</button>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;