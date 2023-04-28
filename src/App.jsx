import React, { useState } from "react";
import "./index.css"
import TodoList from './TodoList';



const App = () =>{

    const [listvalue, updatedval] = useState("");
    const [arrinit, arrfinal] = useState([])
  
    const changing = (event) =>{
            updatedval(event.target.value)
    }

    const btnClk = () =>{
        if (listvalue !== ""){
            arrfinal( (modifiedarray)=>{
                return [...modifiedarray,listvalue]
            })
            updatedval('')
        }
        else {
            return;
        }
    }

    const delClk = (id)=>{
        console.log('deleted')   
        arrfinal( (modifiedarray)=>{
            return modifiedarray.filter((elementname, elementindex)=>{
                return elementindex!==id;
            })
        })  
    }

    return(
        <>
            <div className="main_div">
                <div className="center_div">
                    <br></br>
                    <h1> ToDo List</h1>
                    <br></br>
                    <input onChange={changing} type="text" placeholder="Add an item" value={listvalue}></input>
                    <button onClick={btnClk}>+</button>

                    <ol >
                        {/* <li >{listvalue}</li> */}
                        {/* <li>{arrinit}</li> */}
                        {arrinit.map((itemvalue, index) =>{
                            return <TodoList key={index} id={index} text={itemvalue} onselect={delClk}/>
                        })}
                    </ol>
                </div>         
            </div>
        </>
    );

}

export default App; 