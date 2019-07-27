export const initialState = {
  menu: [],
  date: {
    dateCurr: new Date(),
    dateMin: new Date("2008-06-08"),
    dateMax: new Date()
  },
  page: {
    content: "home",
    genreTxt: "",
    genres: {},
    books: {
      bookArr: [],
      results: 0,
       pg: 1,
       author: {},
       cover: '',
    },
    isLoading: false
  },
  search: {
    toggle: false,
    searchTxt: "",
    searchType: "title",
  }
};
