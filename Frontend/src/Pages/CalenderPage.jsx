import React, { useState, useEffect } from 'react';
import './CalenderPage.css';
import NavBare from "../Components/NavBar";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { StaticDatePicker } from '@mui/x-date-pickers/StaticDatePicker';
import { TextField, Button, List, ListItem, ListItemText } from '@mui/material';
import axios from 'axios';

const Calendar = () => {
  const [value, setValue] = useState(dayjs()); // Initialize with Dayjs
  const [tasks, setTasks] = useState([]);
  const [taskDescription, setTaskDescription] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = () => {
    axios.get('http://localhost:8081/api/getTasks')
      .then(response => { 
        const formattedTasks = response.data.map(task => ({
        ...task,
        date: dayjs(task.date).format('YYYY-MM-DD'),
      }));
      setTasks(formattedTasks);
      })
      .catch(error => console.error('Error fetching tasks:', error));
  };
  

  const handleAddTask = (e) => {
    e.preventDefault();
    if (taskDescription.trim() !== '') {
      const newTask = {
        description: taskDescription.trim(),
        date: value.format('YYYY-MM-DD'),
      };

      console.log(newTask.date);
      setTasks([newTask,...tasks]);
      setTaskDescription('');


  
      // Send the new task to the server
      axios.post('http://localhost:8081/api/addTask', newTask)
        .then(response => {
          console.log(response.data.message); // Log server response
        })
        .catch(error => console.error('Error adding task:', error));
    }
    
  };

  const handleDeleteTask = (index) => {
    const taskToDelete = tasks[index];
  
    axios.delete(`http://localhost:8081/api/deleteTask/${taskToDelete.id}`)
      .then(response => {
        console.log(response.data.message); // Log server response
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
      })
      .catch(error => console.error('Error deleting task:', error));
  };

  return (
    <div className='container_general'>
        <NavBare></NavBare>
      <div className='container'>
        <div className='container1'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <StaticDatePicker
              orientation="landscape"
              openTo='day'
              value={value}
              onChange={(newValue) => setValue(newValue)}
              textField={(props) => (
                <TextField 
                  {...props} 
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                  label="Task Description"
                />
              )}
              
            />
          </LocalizationProvider>
        </div>
        <div className='container2'>
          <div className='input_task'>
            <form className='from' onSubmit={handleAddTask} >

            <div className="input-container">
               <input
                  type='text'
                  className='enter_task'
                  placeholder='Add your appointment'
                  value={taskDescription}
                  onChange={(e) => setTaskDescription(e.target.value)}
                />

                <Button type='submit' className='button' variant='outlined'>
                   Add 
                </Button>
              </div>
            </form>
          </div>
          <div className='div_lists'>
          <List>
            {tasks.map((task, index) => (
              <ListItem key={index} className='task-item'>
                <ListItemText 
                  primary={
                  <>
                      <span className="styleDate">
                       {dayjs(task.date).format('YYYY-MM-DD')}
                        </span>
                         {' : '}
                        {task.description}
                  </>
                }
                />
                <Button onClick={() => handleDeleteTask(index)} className='delete-button'  >
                    Delete
                </Button>
              </ListItem>
            ))}
          </List>
          </div>
          </div>
        </div>
      

    </div>
  );
};

export default Calendar;
