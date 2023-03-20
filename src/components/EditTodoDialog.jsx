import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function EditTodoDialog({ open, dialogHandle, todo, editTodo }) {
  const [editedText, setEditedText] = React.useState(todo.text);

  const textHandler = () => {
    editTodo(todo.id, editedText);
    dialogHandle();
  };
 
  

  

  return (
    <div>
      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={dialogHandle}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Edite sua tarefa"}</DialogTitle>
        <DialogContent>
        <TextField
        fullWidth
        defaultValue={editedText}
        onChange={(e)=>setEditedText(e.target.value)}
       
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={dialogHandle }>Cancelar</Button>
          <Button onClick={textHandler} editTodo={editTodo} >Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}