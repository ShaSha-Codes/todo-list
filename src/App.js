import React from 'react'
import './App.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';
import Task from './components/Task';



function App() {

  const styles={
    MainBox:{
      backgroundColor: 'white',
      width: '30%',
      minHeight: '70vh',
      borderRadius:"5%",
      color:'black'
  },

  MainText:{
    margin: '1em'
  },
}

const [taskList,setTaskList]=React.useState([])
const [newTask,setNewTask]=React.useState('')
const [click,setClick]=React.useState(0)

React.useEffect(()=>{
  if(click!==0){
    setTaskList(taskList=>[...taskList,<Task task={newTask}/>])
  }
  setNewTask('')
},[click])

const clickHandler=()=>{
  setClick((prevValue)=>prevValue+1)
  
}




  return (
    <div className="App">
      <header className="App-header">
          <Box sx={styles.MainBox}>
              <Typography sx={styles.MainText} variant="h3" component="h1">
                 ToDo List
              </Typography>
             
              <Box sx={{height:'2em'}} >
                <TextField id="outlined-basic"  value={newTask} onChange={(event)=>{setNewTask(event.target.value)}} label="Task Name" name='New Task' variant="outlined" />
                <Button sx={{height:'90%'}}  onClick={()=>clickHandler()} variant="contained">Add <AddIcon/></Button>
              </Box>
              <hr style={{margin:'0.6em 0 1em 0'}}/>
              <Stack sx={{alignItems:'center'}} spacing={1}>
                {taskList}
              </Stack>
             
              
          </Box>
      </header>
    </div>
  );
}

export default App;
