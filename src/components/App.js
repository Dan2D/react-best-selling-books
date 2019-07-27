import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Content/Home/Home';
import GenreBks from './Content/Genre-View/GenreBks';
import SnglBk from './Content/Books/Single-View/SingleBk';
import Nav from "./Header/Nav";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";


class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/genre/:genre"  component={GenreBks} />
        <Route path="/book/:id"  component={SnglBk} />
      </Switch>
        <div className="App">
          <Nav />
          {/* <Content /> */}
          <Footer />
        </div>
        </Router>
    );
  }
}


export default App