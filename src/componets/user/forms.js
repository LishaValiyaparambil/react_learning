import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

  function FormData({ addLogDesc }) {
    const [LogDesc, setLogDesc] = useState();
    const [name, setName] = useState();
    const [date, setDate] = useState();
    const handleSubmit= (e) => {
      addLogDesc([LogDesc, name, date])
      e.preventDefault();
    }
  
    return (
      <div style={{ marginTop: 50, marginLeft: 50 }}>
      <form onSubmit={e => { handleSubmit(e) }}>
      
        <TextField
          id="outlined-multiline-flexible"
          label="User Login description"
          multiline
          maxRows={4}
          name='LogDesc' 
          type='text'
          value={LogDesc}
          onChange={e => setLogDesc(e.target.value)}
          margin="dense"
          style={{marginLeft: 40 , marginBottom: 18}}
        />
        
        <TextField
          id="outlined-multiline-flexible"
          label="Name"
          multiline
          maxRows={4}
          name='name' 
          type='text' 
          value={name}
          onChange={e => setName(e.target.value)}
          margin="dense"
          style={{marginLeft: 40 , marginBottom: 18}}
        />
        
        <TextField
          id="outlined-multiline-flexible"
          label="Date"
          multiline
          maxRows={4}
          name='date' 
          type='date'
          value={date}
          onChange={e => setDate(e.target.value)}
          margin="dense"
          style={{marginLeft: 40 , marginBottom: 18}}
        />
       <Button variant="contained" color="success" type='submit' margin="dense" style={{ marginTop: 18, marginLeft: 40 , marginBottom: 18}}
           >
        Add Log
      </Button>
      </form>
    
      </div>
    )
  }

  export default FormData;