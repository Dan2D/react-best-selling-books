import React, { Component } from "react";
import Nav from "./Header/Nav";
import Content from "./Content/Content";
import Footer from "./Footer/Footer";


class App extends Component {

  render() {
    return (
      <div className="App">
        <Nav />
        <Content />
        <Footer />
      </div>
    );
  }
}


export default App