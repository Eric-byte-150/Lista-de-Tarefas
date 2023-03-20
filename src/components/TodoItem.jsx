import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditTodoDialog from './EditTodoDialog';
import EditIcon from '@mui/icons-material/Edit';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Baloo+2:wght@500&family=Inter&family=Montserrat&family=Mukta:wght@200;300&family=Noto+Sans&family=Open+Sans:wght@500&family=Poppins:wght@500&family=Roboto+Serif:ital,opsz,wght@0,8..144,100;1,8..144,200&display=swap');
</style>
export default function TodoItem({todo,deleteTodo, editTodo}) {
const [openDialog,SetOpenDialog]=React.useState(false)
const dialogHandle =()=>{
SetOpenDialog(!openDialog)
}
  return (
    <>
    <EditTodoDialog editTodo={editTodo}  open={openDialog} dialogHandle={dialogHandle} todo={todo} />
     <ListItem
     className='List'
  
   secondaryAction={
     <IconButton edge="end" aria-label="delete" onClick={()=>deleteTodo(todo.id)}>
       <DeleteIcon className="ListText"/>
     </IconButton>
    
   }
   disablePadding
 >     
   <ListItemButton role={undefined} dense>
     <ListItemIcon >
       <Checkbox
         edge="start"
         className="check"
         tabIndex={-1}
         disableRipple
         style={{ color: 'white' }} 
       />
     </ListItemIcon>
     <ListItemText primary={todo.text} onClick={()=>SetOpenDialog(true)} className="ListText" />
   </ListItemButton>
 </ListItem>
    </>
   
  );
}
