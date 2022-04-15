import React from 'react';
import Button from '@mui/material/Button';
import './Button.css';

class Menu extends React.Component {
    constructor(props) {
      super(props);
      this.notes = props.notes
    }
  
  handleNewNote() {
    console.log("Button was clicked");
  }

  render() {
    const notesList = this.notes.map((note) => <li>{note}</li>);
    return (
      <div>
        <h2>Your Nootles</h2>
        <ul>
          {notesList}
        </ul>
        <Button onClick={this.handleNewNote}>+</Button>
      </div>
    );
  }
}

export default Menu;
