import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import './Button.css';

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.notes = props.notes
    this.state = {
      open: false
    };
  }

  setOpen(value) {
    //this.state.open = value;
    this.setState({open: value});
  }

  handleCreateNewNote() {
    this.setOpen(true);
  }

  handleCancelNewNote() {
    this.setOpen(false);
  }
  
  render() {
    const notesList = this.notes.map((note) => <li>{note}</li>);
    return (
      <div>
        <h2>Your Nootles</h2>
        <ul>
          {notesList}
        </ul>
        <Button onClick={() => {this.handleCreateNewNote()}}>+</Button>
        <Dialog open={this.state.open} onClose={() => {this.handleCancelNewNote()} }>
        <DialogTitle>Make New Note</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="File name of your new note"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => {this.handleCancelNewNote()} }>Cancel</Button>
          <Button onClick={() => {this.handleCancelNewNote()} }>Create</Button>
        </DialogActions>
      </Dialog>
      </div>
    );
  }
}

export default Menu;
