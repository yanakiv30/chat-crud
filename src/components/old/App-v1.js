
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import PeopleList from "./components/PeopleList";
import ChatMessages from "./components/ChatMessages";

function App() {
  return (
    <Router>
      <div>
        <Route path="/people" component={PeopleList} />
        <Route path="/people/:id" component={ChatMessages} />
      </div>
    </Router>
  );
}

export default App;
