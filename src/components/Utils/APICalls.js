const NYT_API_KEY=process.env.REACT_APP_NYT_API_KEY;
const NYT_API = 'https://api.nytimes.com/svc/books/v3/';
const OVERVIEW_QRY = 'lists/overview.json?'
const AUTHOR_QRY= 'reviews.json?author=';
const TITLE_QRY = 'reviews.json?title='
const GENRE_QRY = 'lists/current/';
const GENRE_LST_QRY = 'lists/names.json?'


export default [NYT_API_KEY, NYT_API, OVERVIEW_QRY, AUTHOR_QRY, TITLE_QRY, GENRE_QRY, GENRE_LST_QRY]
