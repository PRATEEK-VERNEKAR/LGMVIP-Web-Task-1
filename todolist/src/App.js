import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';

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
        console.log('he')
        return e.target.value;
      }
      else{
        return data;
      }
    })

    setTasks(newTasks);
  }


  return (
    <div class="App">
      <div class='inner title-parent'>
        <div class='title'>
          <h1>Todo List</h1>
          <p>Organise all your work here</p>
        </div>
      </div>
      <div class='inner'>
        <button onClick={handleNew}>Plux</button>
      </div>
      {
        tasks.map((data,index)=>{
          return(
            <div class='inner inputArea'>
              <input name='task' id='task' value={data} placeholder='Task' onChange={(e)=>{handleChange(e,index)}}></input>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;