import React from "react";
import { Route } from "react-router-dom";
import Options from "../src/components/Options";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        {/* <Headbar /> */}
        <div>
          <Route path="/" component={Options} />
        </div>
      </div>
    );
  }
}

export default App;
