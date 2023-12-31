import './App.css';
import { useState,useEffect} from 'react';

function App() {
  const initialTasks=JSON.parse(localStorage.getItem('tasks')) || [];
  const [tasks,setTasks]=useState(initialTasks);

  useEffect(()=>{
    localStorage.setItem('tasks',JSON.stringify(tasks));
  },[tasks]);
  
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
    <div className="App">
      <div className='inner title-parent'>
        <div className='title'>
          <h1>Todo List</h1>
          <button className='new' onClick={handleNew}>+</button>
        </div>
      </div>

      {
        tasks.map((data,index)=>{
          return(
            <div className='inner inputArea' key={index}>
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