import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import './Button.css';

// Form Dialog
//export function FormDialog() {
  //const [open, setOpen] = React.useState(false);

  //const handleClickOpen = () => {
    //setOpen(true);
  //};

  //const handleClose = () => {
    //setOpen(false);
  //}
//};

//class FormDialog {
  //constructor(open) {
    //this.open = open;
  //}

  //handleClickOpen() {
    //this.open = true;
  //}

  //handleClose() {
    //this.open = false;
  //}
//}

class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.notes = props.notes
    //this.formDialog = FormDialog();
    //this.formDialog = new FormDialog(false);

    //const [open, setOpen] = React.useState(false);
    //const [open, setOpen] = React.useState(true);
    //this.open = open;
    //this.setOpen = setOpen;
    this.open = true;
  }

  setOpen(value) {
    this.open = value;
  }

  handleCreateNewNote() {
    this.setOpen(true);
  }

  handleCancelNewNote() {
    this.setOpen(false);
  }
  
  //handleNewNote() {
    //this.formDialog.handleClickOpen();
    ////console.log("Button was clicked");
  //}

  render() {
    const notesList = this.notes.map((note) => <li>{note}</li>);
    return (
      <div>
        <h2>Your Nootles</h2>
        <ul>
          {notesList}
        </ul>
        <Button onClick={this.handleCreateNewNote}>+</Button>
        <Dialog open={this.open} onClose={this.handleCancelNewNote}>
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
          <Button onClick={this.handleCancelNewNote}>Cancel</Button>
          <Button onClick={this.handleCancelNewNote}>Create</Button>
        </DialogActions>
      </Dialog>
      </div>
    );
  }
}

export default Menu;
