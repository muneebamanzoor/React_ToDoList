import React, { useState } from "react";
import "./ChallengeIndex.css"

const ChallengeApp = () =>{
    const [countervalue, updatedvalue] = useState(0)

    const incValue = ()=>{
            updatedvalue(countervalue+1)
    }

    const decValue = ()=>{
        if(countervalue>0){
            updatedvalue(countervalue-1)
        }
        else{
            alert("Reached limit")
        }
    }

    return(
    <>
        <div className="main_div">
        <div className="center_div">
        <label>{countervalue}</label><br></br>
            <button onClick={incValue}>Increment</button><br></br>
            <button onClick={decValue}>Decrement</button>
        </div>

        </div>
    </>
    );
}

export default ChallengeApp; 