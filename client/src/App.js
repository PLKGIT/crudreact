/*  React  */
import React, { Component } from "react";

/*  React Router  */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

/*  Styling  */


/*  Components  */
import Home from "./pages/home";

/*  Create App  */
class App extends Component {

  render() {

    return (
      <Router>
          <div className="container">
            <Switch>
              <Route exact path={["/","/home"]} component={Home} />
            </Switch>
          </div>
      </Router>
    );
  }
}


/*  Export App  */
export default App;
