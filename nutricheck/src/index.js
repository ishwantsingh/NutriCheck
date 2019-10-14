// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import * as serviceWorker from "./serviceWorker";
// import { Provider } from "react-redux";
// import { createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";
// import { reduxFirestore, getFirestore } from "redux-firestore";
// import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
// import fbConfig from "./config/fbConfig";
// import rootReducer from "./state/reducers/rootReducer";

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
//     reactReduxFirebase(fbConfig, {
//       userProfile: "users",
//       userFirestoreForProfile: true,
//       attachAuthIsReady: true
//     }),
//     reduxFirestore(fbConfig)
//   )
//   // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() //used for redux devtools
// );

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./state/reducers/rootReducer";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { reduxFirestore, getFirestore } from "redux-firestore";
import { reactReduxFirebase, getFirebase } from "react-redux-firebase";
import fbConfig from "./config/fbConfig";
import * as serviceWorker from "./serviceWorker";

// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk),
//     // reactReduxFirebase(fbConfig),
//     reduxFirestore(fbConfig), // redux bindings for firestore
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
    reactReduxFirebase(fbConfig, {
      userProfile: "users",
      useFirestoreForProfile: true,
      attachAuthIsReady: true
    }),
    reduxFirestore(fbConfig), // redux bindings for firestore
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
});

serviceWorker.unregister();
