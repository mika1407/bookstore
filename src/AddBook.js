import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

function AddTodo(props) {
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState({title: '', author: '', year: '', isbn: '', price: ''});

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSave = () => {
    props.addBook(todo);
    handleClose();
  }

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }


  return(
    <div>
       <Button variant="outlined" color="primary" onClick={handleOpen}>
        Add book
      </Button>
      <Dialog open={open}>
        <DialogTitle>New book</DialogTitle>
        <DialogContent>
          <TextField
            name="title"
            value={todo.title}
            onChange={inputChanged}
            margin="dense"
            label="Title"
            fullWidth
          /> 
          <TextField
            name="author"
            value={todo.author}
            onChange={inputChanged}
            margin="dense"
            label="Author"
            fullWidth
          /> 
          <TextField
            name="year"
            value={todo.year}
            onChange={inputChanged}
            margin="dense"
            label="Year"
            fullWidth
          /> 
          <TextField
            name="isbn"
            value={todo.isbn}
            onChange={inputChanged}
            margin="dense"
            label="Isbn"
            fullWidth
          /> 
          <TextField
            name="price"
            value={todo.price}
            onChange={inputChanged}
            margin="dense"
            label="Price"
            fullWidth
          /> 
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={handleClose}>Cancel</Button>
          <Button color="primary" onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog> 
    </div>
  );
}

export default AddTodo;