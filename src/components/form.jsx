import React from "react";
import { TextField,Button } from "@mui/material";
import { useState } from 'react';
import { borderRadius } from "@mui/system";





export default function Form({AddTodo, inputRef}){
    const [text,setText]=useState(null)
    const [id,setId]=useState(0)
  


    const todoCreate=(text)=>{
        const todoObj={text:text,id:id}
        setId(id+1)
       AddTodo(todoObj)

    }
  




    return(
        <>
        <div className="texth1">
        <h1>Lista De Tarefas</h1>
        </div>
      
        <div className="Form">
           
           <TextField id="outlined-basic" label="Tarefa" variant="outlined" onChange={(e) =>setText(e.target.value)} inputRef={inputRef}  
             className="myTextField"/>
           <Button variant="outlined" onClick={()=>todoCreate(text)}>Add</Button>
                   </div>
        </>
        
    )
}