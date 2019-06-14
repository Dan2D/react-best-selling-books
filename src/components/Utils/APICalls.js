
const API_CALLS = {
    NYT: {
        NYT_API_KEY: process.env.REACT_APP_NYT_API_KEY,
        NYT_API: 'https://api.nytimes.com/svc/books/v3/',
        OVRVW_QRY: 'lists/overview.json?',
        ATHR_QRY: 'reviews.json?author=',
        TTL_QRY: 'reviews.json?title=',
        GNRE_QRY: 'lists/current/',
        GNRE_LST_QRY: 'lists/names.json?'
    },
    GR: {
        GR_KEY: process.env.REACT_APP_GR_API_KEY,
        GR_API: 'https://www.goodreads.com/',
        GR_RVW_QRY: 'book/review_counts.json?isbns=',
        GR_ISBN_QRY: 'book/isbn/',
        GR_RTNG_QRY: 'book/show/',
        GR_QRY: 'author/list/'
    }
}
// https://www.goodreads.com/search/index.xml?key=dYOk0dlwaFMBnnKyNlv2EQ&q=Stephen+King

export default API_CALLS
