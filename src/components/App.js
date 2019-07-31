import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Content/Home/Home';
import GenreBks from './Content/Genre-View/GenreBks';
import SnglBk from './Content/Books/Single-View/SingleBk';
import SrchBk from './Content/Books/Search-Veiw/SrchBk';
import Nav from "./Header/Nav";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/genre/:genre"  component={GenreBks} />
            <Route path="/book/:id"  component={SnglBk} />
            <Route path="/search/:text" component={SrchBk} />
          </Switch>
          {/* <Content /> */}
          <Footer />
        </div>
        </Router>
    );
  }
}


export default App