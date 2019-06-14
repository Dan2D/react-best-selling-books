import React, { Component } from 'react'
import Nav from "./components/Nav";
import Content from "./components/Content";
import API_CALLS from "./components/Utils/APICalls";
import "./App.css";

const {NYT_API_KEY,
        NYT_API,
        OVRVW_QRY,
        GNRE_QRY, 
        GNRE_LST_QRY} = API_CALLS['NYT'];
const {GR_KEY, 
       GR_API, 
       GR_QRY } = API_CALLS['GR'];

export default class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      navGenres: [],
      books: [],
      genres: [],
      content: 'home',
      searchTxt: '',
      genreTxt: '',
      isLoading: false,
      error: null,
    }
  }

  fetchURL = (input, state, property, results='results') => {
      let stateObj = {};
      return fetch(input)
      .then(response => {
        if(response.ok)
          {return response.json()}
        else
          {throw new Error('Something went wrong...')}})
      .then(data => {
          stateObj[state] = property != null ? 
            data[results][property] :
            stateObj[state] = data[results];
          this.setState(stateObj);})
      }

  setLoadAndCatch = (fetchUrl) => {
      fetchUrl.then(() => this.setState({isLoading: false}))
      .catch(error => this.setState({error, isLoading: false}))
    }

  goHome = () => {
    this.setState({content: 'home', isLoading: true})
      this.fetchURL(NYT_API+OVRVW_QRY+'api-key='+NYT_API_KEY, 'genres', 'lists')
      .then(() => this.setState({isLoading: false}))
      .catch(error => this.setState({error, isLoading: false}))
    }
  
  componentDidMount() {
      let navGenres = this.fetchURL(NYT_API+GNRE_LST_QRY+'&api-key='+NYT_API_KEY, 'navGenres');
      let homeContent = this.fetchURL(NYT_API+OVRVW_QRY+'api-key='+NYT_API_KEY, 'genres', 'lists');
      this.setState({isLoading: true, content: 'home'})
      Promise.all([navGenres, homeContent])
      .then(() => this.setState({isLoading: false}))
      .catch(error => this.setState({error, isLoading: false}))
    }

  handleSearch = (searchTxt, pg=1) => {
    console.log(searchTxt, "SEARCHTXT")
    this.setState({searchTxt: searchTxt, content: 'search'});
    searchTxt = searchTxt.replace(/\s/g, "+").toLowerCase();
    console.log(searchTxt)
    console.log('https://www.goodreads.com/api/author_url/'+searchTxt+'?key='+GR_KEY);
    this.setState({isLoading: true});
    fetch('https://cors-anywhere.herokuapp.com/https://www.goodreads.com/api/author_url/'+searchTxt+'?key='+GR_KEY)
    .then(response => response.text())
    .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    .then(data => data.querySelector('author').getAttribute('id'))
    .then(id => fetch('https://cors-anywhere.herokuapp.com/'+GR_API+GR_QRY+id+'?format=xml&key='+GR_KEY+'&page='+pg)
          .then(response => response.text())
          .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
          .then(data => this.setState({books: data, isLoading: false})))};
    // fetch('https://cors-anywhere.herokuapp.com/'+GR_API+GR_QRY+'key='+GR_KEY+'&q='+searchTxt)
    // .then(response => response.text())
    // .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    // .then(data => console.log(data.querySelector('title')))

  // https://www.goodreads.com/api/author_url/Stephen%20King?key=dYOk0dlwaFMBnnKyNlv2EQ
  // https://www.goodreads.com/author/list/18541?format=xml&key=dYOk0dlwaFMBnnKyNlv2EQ
    
    handleSearchTxtUpdate = (text) => {
      this.setState({searchTxt: text});
    };
  
  handleGenreUpdate = (genreTxt) => {
    this.setState({genreTxt: genreTxt, content: 'genre', isLoading: true, searchTxt: ""});
    this.fetchURL(NYT_API+GNRE_QRY+genreTxt+'.json?api-key='+NYT_API_KEY, 'genres')
    .then(() => this.setState({isLoading: false}))
    .catch(error => this.setState({error, isLoading: false}))
  };

  render() {
    const {navGenres,
           books,
           genres,
           content,
           searchTxt, 
           isLoading, 
           error} = this.state;
    if (error) {return <p>{error.message}</p>}
    console.log(books, "BOOKS")
    return (
      <div className="App">
        <Nav
        searchTxt={searchTxt}
        onHomeClick={this.goHome}
        onSearchUpdate={this.handleSearchTxtUpdate}
        onSearchSubmit={this.handleSearch}
        onSubGenreClick={this.handleGenreUpdate}
        navGenres={navGenres}/>
        <Content
        content={content}
        books={books}
        isLoading={isLoading}
        onGenreClick={this.handleGenreUpdate}
        genres={genres}/>
      </div>
    )
  }
}

