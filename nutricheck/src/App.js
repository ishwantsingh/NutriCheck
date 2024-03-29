import React from "react";
import { Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

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

const mapStateToProps = state => {
  console.log(state);
  return {
    dishes: state.firestore.ordered.dishes
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "dishes" }])
)(App);
