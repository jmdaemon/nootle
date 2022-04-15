import React from 'react';
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
        <button class="button circle-button" onClick={this.handleNewNote}>+</button>
      </div>
    );
  }
}

export default Menu;
