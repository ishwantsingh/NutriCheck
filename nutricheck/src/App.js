import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Options from "./components/Options";
import Headbar from "./components/Headbar";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Headbar />
        <div>
          <Route exact path="/" component={Options} />
        </div>
      </Router>
    );
  }
}

export default App;
