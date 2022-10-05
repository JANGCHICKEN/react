import React from 'react';
import { Route } from 'react';
import './App.css';

import Full from './containers/Full'
import EventList from './pages/EventList/EventList';

function App() {
  return (
    <Full>
      {/* <Route path="/" component={EventList} /> */}
      {/* <EventList/> */}
      </Full>
  );
}

export default App;
