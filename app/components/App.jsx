import React from 'react';

import uuid from 'uuid';
import Notes from './Notes';

export default class App extends React.Component {
  constructor(props) {
    super(props); //passing props to super by convention.  Otherwise this.props doesn't get set

    this.state = { //App owns the State.  That is demonstrated here on this line.
      notes: [
        {
          id: uuid.v4(),
          task: 'Learn React'
        },
        {
          id: uuid.v4(),
          task: 'Do laundry'
        }
      ]
    }
  }
  render() {
    const {notes}  = this.state;  // We set the state to {notes} and then it is returned and rendered six lines below

    return (
        <div>
          <button onClick={this.addNote}>+</button>
          <Notes notes={notes} onDelete={this.deleteNote} /> // the rendering of notes which as described above, is the rendering of the current state

        </div>
    )
  }

  addNote = () => {
    this.setState({
      notes: this.state.notes.concat([{
        id: uuid.v4(),
        task: 'New Task'
      }])
    });
  }

  deleteNote = (id, e) => {
    e.stopPropagation();

    this.setState({
      notes: this.state.notes.filter(note => note.id !== id)
    })
  }

}
