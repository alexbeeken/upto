import React from 'react';
import Event from './event';
import './App.css';
import { events } from './event-data';

function App() {
  const eventObjs = [];
  let key = 0;
  events.forEach((event) => {
    key = key + 1;
    eventObjs.push(<Event event={event} key={key} />);
  });	   
  return (
    <div className="App">
      <header className="App-header">
	<div className='main-title'>
          Alex's Upcoming Shows
	</div>
	{eventObjs}
      </header>
    </div>
  );
}

export default App;
