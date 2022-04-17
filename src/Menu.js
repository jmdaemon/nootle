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
    this.logger = props.logger;
  }

  setOpen(value) {
    this.setState({open: value});
    this.logger.info(`New Note Form Dialog is ${ this.state.open ? 'visible' : 'not visible'}`);
  }

  // Create a new note with the filename specified
  // and open the file editor
  handleCreateNewNote() {
    this.setOpen(false);
  }

  // Close the new note dialog
  handleCancelNewNote() {
    this.setOpen(false);
  }

  // Open the new note dialog
  openNewNoteDialog() {
    this.setOpen(true);
  }
  
  // Show the main menu
  render() {
    // Show all the notes as a list
    const notesList = this.notes.map((note) => <li>{note}</li>);
    this.logger.info(`Notes available:\n${this.notes}`);
    return (
      <div>
        <h2>Your Nootles</h2>
        <ul>
          {notesList}
        </ul>
        <Button onClick={() => {this.openNewNoteDialog()}}>+</Button>
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
          <Button onClick={() => {this.handleCreateNewNote()} }>Create</Button>
        </DialogActions>
      </Dialog>
      </div>
    );
  }
}

export default Menu;
