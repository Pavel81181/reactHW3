import * as React from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


export default function TodoList() {
 
    const [todo, setTodo] = useState('');
    const [todoId, setTodoId] = useState(1)
    const [todos, setTodos] = useState([]);
    const [deleteTodo, setDeleteTodo] = useState([])

    const updateId = () => {
        setTodoId(todoId + 1)
    }
    const updateTodo = (e) => {
        setTodo(todo => e.target.value)   
    }
    
    const addTodo = () => {
        if (todo !== '') {
            setTodos([...todos, {id: todoId, text: todo}]);
            updateId();
            setTodo('');
        } 
    };

    const deleteTodoEl = (id) => {
        setDeleteTodo((prevTodo) => {
            return [...prevTodo, id];
        });
    };


  return (
    <div className='todo-box'>
       
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div"> Список дел </Typography>

        <div>
        <TextField
            label="Новая задача"
            variant="standard"
            color="warning"
            focused
            value={todo}
            onChange={updateTodo}
        />
        <Button variant="outlined" onClick={addTodo} size="small" color="secondary">Добавить</Button>
        </div>
        <Box  sx={{display: 'inline-block',  width: 500, maxWidth: '100%' }}>
            {todos.filter((todo) => !deleteTodo.includes(todo.id))
            .map((todo) => (
                <Card  sx={{ minWidth: 275 }} key={todo.id}>
                    <CardContent>
                        <Typography variant="h5" sx={{ color: 'text.secondary', fontSize: 14 }} component={'div'}>
                        • {todo.text}
                        </Typography>
                    </CardContent>

                    <IconButton edge="end" aria-label="delete" onClick={() => deleteTodoEl(todo.id)}>
                    <DeleteIcon />
                 </IconButton>
                </Card>
            ))}
      </Box>
        
          
      </div>
    
  );
}