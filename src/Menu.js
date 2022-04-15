import React from 'react';

class Menu extends React.Component {
    constructor(props) {
      super(props);
      this.notes = props.notes
    }

  render() {
    const notesList = this.notes.map((note) => <li>{note}</li>);
    return (
      <div>
        <h2>Your Nootles</h2>
        <ul>
          {notesList}
        </ul>
      </div>
    );
  }
}

export default Menu;
