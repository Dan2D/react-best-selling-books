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
       GR_GNRL_QRY, 
       GR_QRY } = API_CALLS['GR'];

export default class App extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      date: new Date(),
      dateMin: new Date('2010-01-01'),
      dateMax: new Date(),
      navGenres: [],
      books: [],
      genres: [],
      content: 'home',
      searchTxt: '',
      searchTyp: '',
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
    this.setState({content: 'home', isLoading: true, searchTxt: ""})
      this.fetchURL(NYT_API+OVRVW_QRY+'current/&api-key='+NYT_API_KEY, 'genres', 'lists')
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

  handleSelectUpdate = (srchTyp) => {
      this.setState({searchTyp: srchTyp})
  }

  handleSearch = (srchTxt, srchTyp, pg=1) => {
    this.setState({searchTxt: srchTxt, content: 'search', searchTyp: srchTyp});
    srchTxt = srchTxt.replace(/\s/g, "+").toLowerCase();
    srchTxt = srchTxt.replace(/'/g, "%27s");
    this.setState({isLoading: true});
    if (srchTyp === 'title')
      {fetch('https://cors-anywhere.herokuapp.com/'+GR_API+GR_GNRL_QRY+GR_KEY+'&search[field]=title&q='+srchTxt+'&page='+pg)
      .then(response => response.text())
      .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
      .then(data => this.setState({books: data, isLoading: false}))}
    else 
      {fetch('https://cors-anywhere.herokuapp.com/https://www.goodreads.com/api/author_url/'+srchTxt+'?key='+GR_KEY)
      .then(response => response.text())
      .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
      .then(data => {
          if (data.querySelector('author') === null) 
            {return this.setState({books: data, isLoading: false})}
            else 
              {return data.querySelector('author').getAttribute('id')}}
          )
      .then(id => {return fetch('https://cors-anywhere.herokuapp.com/'+GR_API+GR_QRY+id+'?format=xml&key='+GR_KEY+'&page='+pg)
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => {this.setState({books: data, isLoading: false})})})}
  }

  handleSearchTxtUpdate = (text) => {
      this.setState({searchTxt: text});
    };

  handleDateUpdate = (date) => {
      let data;
      if (this.state.content === 'home')
        {this.setState({isLoading: true, searchTxt: "", date: new Date(date)});
        data = this.fetchURL(NYT_API+OVRVW_QRY+'published_date='+date+'&api-key='+NYT_API_KEY, 'genres', 'lists')}
      else  
        {this.setState({genreTxt: this.state.genreTxt, isLoading: true, searchTxt: "", date: new Date(date)});
        data = this.fetchURL(NYT_API+GNRE_QRY+date+'/'+this.state.genreTxt+'.json?api-key='+NYT_API_KEY, 'genres')
        }
      data.then(() => this.setState({isLoading: false}))
      .catch(error => this.setState({error, isLoading: false}))
    }

  handleGenreUpdate = (genreTxt, dateMin, dateMax) => {
    this.setState({genreTxt: genreTxt, content: 'genre', isLoading: true, searchTxt: "", dateMin: new Date(dateMin), dateMax: new Date(dateMax), date: new Date(dateMax)});
    this.fetchURL(NYT_API+GNRE_QRY+'current/'+genreTxt+'.json?api-key='+NYT_API_KEY, 'genres')
    .then(() => this.setState({isLoading: false}))
    .catch(error => this.setState({error, isLoading: false}))
  };

  render() {
    const {date, 
           dateMin,
           dateMax,
           navGenres,
           books,
           genres,
           genreTxt,
           content,
           searchTxt,
           searchTyp, 
           isLoading, 
           error} = this.state;
    if (error) 
      {return <p>{error.message}</p>}
    return (
      <div className="App">
      <Nav
        onHomeClick={this.goHome}
        onSelectUpdate={this.handleSelectUpdate}
        onSearchUpdate={this.handleSearchTxtUpdate}
        onSearchSubmit={this.handleSearch}
        onGenreClick={this.handleGenreUpdate}
        onDateChange={this.handleDateUpdate}
        content={content}
        searchTyp={searchTyp}
        searchTxt={searchTxt}
        genreTxt={genreTxt}
        navGenres={navGenres}
        date={date}
        dateMin={dateMin}
        dateMax={dateMax}/>
        <Content
        onAuthClick={this.handleSearch}
        onGenreClick={this.handleGenreUpdate}
        onPgClick={this.handleSearch}
        content={content}
        srchTyp={searchTyp}
        books={books}
        isLoading={isLoading}
        dateMin={dateMin}
        dateMax={dateMax}
        genres={genres}/>
      </div>
    )
  }
}
