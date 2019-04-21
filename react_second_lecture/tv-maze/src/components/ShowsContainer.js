import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import ShowList from "./ShowList";
import Show from "./Show";

class ShowsContainer extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/shows" exact component={ShowList} />
          <Route path="/shows/:id" exact component={Show} />
        </Switch>
      </div>
    );
  }
}

export default ShowsContainer;
