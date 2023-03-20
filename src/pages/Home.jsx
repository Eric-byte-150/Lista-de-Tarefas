
import '../App.css';
import Form from '../components/form'
import TodoItem from '../components/TodoItem';
import { Container } from '@mui/system';
import List from '@mui/material/List';
import { useState ,useRef} from 'react';


export default function Home() {
   const [todos,setTodos]=useState([])
   const inputRef = useRef(null); 
   
   const AddTodo=(todo)=>{
   
   
   setTodos([...todos,todo])
   inputRef.current.value = "";

   }

   const deleteTodo=(id)=>{
    
    var filtered =todos.filter((todo)=>todo.id!==id)
    setTodos(filtered)
   }
   const editTodo = (id, editedText) => {
      var todosArray = todos;
  
      for (var i in todosArray) {
        if (todosArray[i].id == id) {
          todosArray[i].text = editedText;
        }
      }
  
      // console.log(todosArray);
      // todosArray.splice(todosArray.id, 1, { text: editedText, id: id });
      // console.log(todosArray);
      setTodos(todosArray);
    };
    return(
        <Container maxWidth="sm" className="container" style={{ width: '550px' }}>
   <Form AddTodo={AddTodo}  inputRef={inputRef}/>
   
   <List sx={{ width: '100%', bgcolor: 'background.paper'}}>
     
{todos.map((todo)=>(

<div key={todo.id} style={{marginTop:"1rem"}}>
<TodoItem editTodo={editTodo} todo={todo} deleteTodo={deleteTodo}/>
</div>

))}


   </List>
  
    </Container>
    )
}