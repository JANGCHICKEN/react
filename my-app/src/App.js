import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";

import Full from "./containers/Full";
import EventList from "./pages/EventList/EventList";

function App() {
  return (
    <Full>
      <Routes>
        <Route path="/" element={<EventList />}></Route>
      </Routes>
      {/* <EventList /> */}
    </Full>
  );
}

export default App;
