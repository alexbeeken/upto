import React from 'react';

class Event extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.event.name,
      date: props.event.date,
    };
  }

  render() {
    return <div className='event'>
      <div className='title'>{this.state.date} - {this.state.name}</div>
    </div>
  }
}

export default Event;
