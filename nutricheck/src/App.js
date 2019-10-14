import React from "react";
import { Route } from "react-router-dom";

import Options from "./components/Options";
import Headbar from "./components/Headbar";

class App extends React.Component {
  render() {
    return (
      <div>
        <Headbar />
        <div>
          <Route path="/" component={Options} />
        </div>
      </div>
    );
  }
}

export default App;
