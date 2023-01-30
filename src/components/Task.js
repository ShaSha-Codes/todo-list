import React from 'react'
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';


const Task = (props) => {
    const [open, setOpen] = React.useState(true);
  return (
    <Box sx={{ width: '80%' }}>
      <Collapse in={open}>
        <Alert 
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {props.task}
        </Alert>
      </Collapse>
    </Box>
    
  )
}

export default Task