import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {connect} from 'react-redux';
import Loading from "./Loading";
import Home from './Content/Home/Home';
import GenreBks from './Content/Genre-View/GenreBks';
import SnglBk from './Content/Books/Single-View/SingleBk';
import SrchRslt from './Content/SearchResults/SrchRslt';
import Nav from "./Header/Nav";
import Footer from "./Footer/Footer";
import './App.css';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Nav />
          {/* <Loading isLoading={this.props.isLoading}/> */}
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/genre/:genre"  component={GenreBks} />
                  <Route path="/book/:id"  component={SnglBk} />
                  <Route path="/search/:text" component={SrchRslt} />
                </Switch>
          {this.props.isLoading ? null : <Footer />}
        </div>
        </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLoading: state.page.isLoading
  }
}

export default connect(mapStateToProps)(App)