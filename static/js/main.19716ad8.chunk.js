(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,n){},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(24),c=n.n(o),l=(n(92),n(35)),i=n(36),s=n(47),u=n(37),h=n(48);var m=r.a.memo(function(e){var t=function(){var t=document.getElementsByClassName("search__type")[0].value;return e.onSearchSubmit(e.searchTxt,t)};return r.a.createElement("div",{className:"search"},r.a.createElement("input",{className:"search search__input",type:"text",placeholder:"Search...",onChange:function(t){return e.onSearchUpdate(t.target.value)},onKeyDown:function(e){if(13===e.keyCode)return e.target.blur(),t(e.target.value)},value:e.searchTxt}),r.a.createElement("select",{className:"search search__type",value:e.searchTyp,onChange:function(t){return e.onSelectUpdate(t.target.value)},name:"search-options"},r.a.createElement("option",{value:"title"},"Title"),r.a.createElement("option",{value:"author"},"Author")),r.a.createElement("button",{className:"search search__btn",onClick:t},"Search"))},function(e,t){return e===t}),A=n(46),d=n(66);n(99);var g=function(e){var t=Object(a.useState)(e.date),n=Object(A.a)(t,2),o=n[0],c=n[1];if(Object(a.useEffect)(function(){return c(e.date)},[e.dateMax,e.date]),"search"===e.content)return r.a.createElement(r.a.Fragment,null);function l(e,t,n){return"add"===n?new Date(e.getTime()+1e3*t*60*60*24):new Date(e.getTime()-1e3*t*60*60*24)}function i(t){var n;if("prev"===t.target.dataset.name){var a=l(e.dateMin,7,"add");if(e.date<a)return null;n=l(e.date,7,"subtract")}else{var r=l(e.dateMax,7,"subtract");if(e.date>r)return null;n=l(e.date,7,"add")}return e.onDateChange(n.toISOString().substr(0,10))}return r.a.createElement("div",{className:"date-picker"},r.a.createElement("button",{onClick:i,"data-name":"prev"},r.a.createElement("div",{className:"fas fa-caret-left fa-reg"})," Prev Week"),r.a.createElement(d.a,{selected:o,onChange:function(e){c(e)},minDate:e.dateMin,maxDate:e.dateMax,peekNextMonth:!0,onFocus:function(e){return e.target.readOnly=!0},showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select"}),r.a.createElement("button",{onClick:i,"data-name":"next"},"Next Week ",r.a.createElement("div",{className:"fas fa-caret-right fa-reg"})),r.a.createElement("button",{className:"date-picker__go-btn",onClick:function(){var t=o.toISOString().substr(0,10);return"home"===e.content?e.onDateChange(t,e.content):e.onDateChange(t,e.content,e.genreTxt)}},"GO"))};var k=function(e){function t(t){var n=t.target.dataset.name,a=t.target.dataset.minDate,r=t.target.dataset.maxDate;return e.onGenreClick(n,a,r)}return r.a.createElement("div",{className:"genre-menu__btns","data-ref":e.title},e.subGenres.map(function(e){return r.a.createElement("button",{key:e.display_name,"data-name":e.list_name_encoded,"data-min-date":e.oldest_published_date,"data-max-date":e.newest_published_date,onClick:t},e.display_name)}))};var E=function(e){return r.a.createElement("div",{className:"genre-menu"},e.genreLst.map(function(t){var n="";return"Misc."!==t.title&&"Children's Books"!==t.title||(n=" sub-genre--left"),r.a.createElement("div",{key:t.title,className:"genre-menu__sub-genre"+n},r.a.createElement("button",null,r.a.createElement("h5",null,t.title)),r.a.createElement(k,{key:t.title+" sub-genre-title",onGenreClick:function(t,n,a){return e.onGenreClick(t,n,a)},title:t.title,subGenres:t.array}))}))};var p=function(e){var t={navSubGenres:[]};function n(t,n,a){var r=new RegExp(t,n);return a?e.genreLst.filter(function(e){return r.test(e.display_name)}):e.genreLst.filter(function(e){return!r.test(e.display_name)})}function a(e,n){t.navSubGenres.push(function(e,t){var n={};return n.title=e,n.array=t,n}(e,n))}return a("Fiction/Non-Fiction",n(".fiction","i",!0)),a("Young Adult",n("adult","i",!0)),a("Children's Books",n("children","i",!0)),a("Misc.",n(".fiction|children|adult","i",!1)),r.a.createElement("div",{className:"genres"},r.a.createElement(E,{onGenreClick:function(t,n,a){return e.onGenreClick(t,n,a)},genreLst:t.navSubGenres}))};var f=r.a.memo(function(e){return console.log("NAV LOADED"),r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"nav__title-corner"},r.a.createElement("button",{className:"nav__home-btn",onClick:function(){return e.onHomeClick()}},r.a.createElement("div",{className:"fas fa-home fa-lg"})),r.a.createElement("h1",{className:"nav__site-title"},"BSB")),r.a.createElement(m,{onSelectUpdate:function(t){return e.onSelectUpdate(t)},onSearchUpdate:function(t){return e.onSearchUpdate(t)},onSearchSubmit:function(t,n){return e.onSearchSubmit(t,n)},searchTyp:e.searchTyp,searchTxt:e.searchTxt}),r.a.createElement(p,{onGenreClick:function(t,n,a){return e.onGenreClick(t,n,a)},genreLst:e.navGenres}),r.a.createElement(g,{onDateChange:function(t){return e.onDateChange(t)},date:e.date,dateMin:e.dateMin,dateMax:e.dateMax,content:e.content,genreTxt:e.genreTxt}))},function(e,t){return e.genreTxt===t.genreTxt&&e.date===t.date&&e.navGenres===t.navGenres&&e.searchTxt===t.searchTxt&&e.searchTyp===t.searchTyp&&e.content===t.content}),C=n(85),b=n.n(C);var v=function(e){if(e.author)var t=e.author.split(/,|\sand\s|\swith\s/),n=t.map(function(n,a){return a<t.length-1?r.a.createElement("span",{key:n},r.a.createElement("button",{className:"author-btn",onClick:function(){return e.onAuthClick(n,"author")}},n,",")):r.a.createElement("button",{key:n,className:"author-btn",onClick:function(){return e.onAuthClick(n,"author")}},n)});var a=null!==e.bkImg?e.bkImg:b.a,o=r.a.createElement("div",{className:"book-container__description"},r.a.createElement("h4",null,"Description"),r.a.createElement("p",null,e.dscrpt?e.dscrpt:"No Description Available..."));return r.a.createElement("div",{className:"book-container__gen-info","data-ref":e.type},"book"===e.type?null:r.a.createElement("div",null,r.a.createElement("strong",null,"#",e.rank)),r.a.createElement("div",{className:"book-container__cover","data-ref":e.type},r.a.createElement("img",{src:a,alt:e.title}),"genre"===e.type||"book"===e.type?o:r.a.createElement(r.a.Fragment,null)),r.a.createElement("button",{className:"book-title",onClick:function(){return e.onTtlClick(e.book)}},e.title),r.a.createElement("div",{className:"book-container__author-info"},r.a.createElement("p",null,"by"),r.a.createElement("div",{className:"book-container__author-btns","data-ref":e.type},n)))};var y=function(e){return r.a.createElement("div",{className:"book-container__week-list"},r.a.createElement("p",{className:"book-list-duration"},1!==e.wksOnLst?e.wksOnLst+" Weeks On List...":"New This Week"))},_=n(86),w={NYT:{NYT_API_KEY:"gNZ6mtTmPrJA6NjGGJseCZdoFRcv1t9q",NYT_API:"https://api.nytimes.com/svc/books/v3/",OVRVW_QRY:"lists/overview.json?",ATHR_QRY:"reviews.json?author=",TTL_QRY:"reviews.json?title=",GNRE_QRY:"lists/",GNRE_LST_QRY:"lists/names.json?"},GR:{GR_KEY:"dYOk0dlwaFMBnnKyNlv2EQ",GR_API:"https://www.goodreads.com/",GR_RVW_QRY:"book/review_counts.json?isbns=",GR_ISBN_QRY:"book/isbn/",GR_GNRL_QRY:"search/index.xml?key=",GR_RTNG_QRY:"book/show/",GR_QRY:"author/list/"}},T=w.GR,x=T.GR_KEY,N=T.GR_API,S=T.GR_ISBN_QRY,I=T.GR_RVW_QRY,B="https://cors-anywhere.herokuapp.com/",Q=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={rating:0,id:""},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.isbn;"book"===this.props.type?fetch(B+N+S+t+"?key="+x).then(function(t){if(t.ok)return t.text();var n=e.props.author.replace(/\s/g,"+"),a=e.props.title.replace(/\s/g,"+");return fetch(B+N+"book/title.xml?author="+n+"&key="+x+"&title="+a).then(function(e){return e.text()})}).then(function(e){return(new window.DOMParser).parseFromString(e,"text/xml")}).then(function(t){var n=t.querySelector("book id").textContent,a=t.querySelector("average_rating").textContent;e.setState({rating:a,id:n})}):fetch(B+N+I+t+"&key="+x).then(function(e){return e.json()}).then(function(t){var n=t.books[0].id,a=t.books[0].average_rating;e.setState({rating:a,id:n})})}},{key:"render",value:function(){return 0!==this.props.rating&&this.props.isBkRdy(),r.a.createElement("div",{className:"book-container__sub-info"},r.a.createElement("a",{className:"book-buy-link",href:this.props.buyLnk.url,rel:"noopener noreferrer",target:"_blank"},"Buy this Book"),r.a.createElement("div",null,0===this.state.rating?"No Rating Available":r.a.createElement("div",null,r.a.createElement(_.a,{className:"book-container__ratings",initialRating:this.state.rating,emptySymbol:"far fa-star fa-lg",fullSymbol:"fas fa-star fa-lg",fractions:2,readonly:!0})," ",this.state.rating)),r.a.createElement("a",{href:"https://www.goodreads.com/book/show/"+this.state.id,rel:"noopener noreferrer",target:"_blank"},"Read Reviews"))}}]),t}(a.Component),R=n(43);n(100);var G=function(e){var t=e.book.primary_isbn13;if("genre"===e.type){var n=e.book.isbns.filter(function(t,n){return n===e.book.isbns.length-1});void 0!==n[0]&&null!==n&&(t=n[0].isbn13)}var a=document.getElementsByClassName("book-placeholder"),o=document.getElementsByClassName("book-hide"),c=r.a.createElement(R.a,{className:"book-placeholder",style:{display:"overview"===e.type?"none":"block"},height:550,width:300,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},r.a.createElement("rect",{x:"0",y:"0",rx:"4",ry:"4",width:"40",height:"39"}),r.a.createElement("rect",{x:"0",y:"515",rx:"4",ry:"4",width:"250",height:"13"}),r.a.createElement("rect",{x:"0",y:"50",rx:"4",ry:"4",width:"300",height:"450"}),r.a.createElement("rect",{x:"0",y:"535",rx:"4",ry:"4",width:"150",height:"13"}),r.a.createElement("rect",{x:"0",y:"555",rx:"4",ry:"4",width:"100",height:"13"}));return r.a.createElement("div",{className:"book-container","data-ref":e.type},c,r.a.createElement("div",{className:"book-hide",style:{display:"overview"===e.type?"block":"none"}},r.a.createElement(v,{key:e.book.title+"main-info",onTtlClick:function(t){return e.onTtlClick(t)},onAuthClick:function(t,n){return e.onAuthClick(t,n)},type:e.type,book:e.book,title:e.book.title,author:e.book.author,bkImg:e.book.book_image,dscrpt:e.book.description,rank:e.book.rank}),"overview"===e.type?r.a.createElement(y,{key:e.book.title+"min-sub-info",wksOnLst:e.book.weeks_on_list}):r.a.createElement(Q,{key:e.book.title+"sub-info",isBkRdy:function(){arguments.length>0&&void 0!==arguments[0]&&arguments[0];for(var e=0;e<a.length;e++)a[e].style.display="none",o[e].style.display="block"},buyLnk:e.book.buy_links[1],title:e.book.title,author:e.book.author,type:e.type,isbn:t})))};var O=function(e){var t=e.books.map(function(t){return r.a.createElement(G,{key:e.genre.display_name+"-"+t.title,onTtlClick:function(t){return e.onTtlClick(t)},onAuthClick:function(t,n){return e.onAuthClick(t,n)},type:"overview",book:t})});return r.a.createElement("div",{className:"overview-genre"},r.a.createElement("button",{className:"overview-genre__title",onClick:function(){var t=document.querySelector("button[data-name="+e.genre.list_name_encoded+"]"),n=t.dataset.name,a=t.dataset.minDate,r=t.dataset.maxDate;return e.onGenreClick(n,a,r)}},e.genre.display_name),r.a.createElement("div",{className:"overview-books"},t))};var D=function(e){if(e.genreLst.length>0){console.log("HOME LOADED");var t=e.genreLst.slice(0,5),n=[];!function(t){for(var a=0;a<5;a++)n.push(r.a.createElement(O,{key:t[a].display_name,onTtlClick:function(t){return e.onTtlClick(t)},onAuthClick:function(t,n){return e.onAuthClick(t,n)},books:t[a].books,genre:t[a],onGenreClick:function(t,n,a){return e.onGenreClick(t,n,a)}}))}(t)}return r.a.createElement("div",null,n)};var M=function(e){console.log("GENRE BOOKS LOADED");var t=document.querySelector(".search__input");t.click(),console.log(t);var n=e.genre.books.map(function(t,n){return r.a.createElement(G,{key:t.title+"-"+n,onTtlClick:function(t){return e.onTtlClick(t)},onAuthClick:function(t,n){return e.onAuthClick(t,n)},type:"genre",book:t})});function a(e){if(e>=new Date)return"Current";var t=e.toISOString().substr(0,10);return(t=t.split("-")).push(t.shift()),t=t.join("/")}var o=a(e.dateMin),c=a(e.dateMax);return r.a.createElement("div",{className:"genre-container"},r.a.createElement("div",{className:"genre-container__title-block"},r.a.createElement("h3",null,e.genre.display_name),r.a.createElement("p",null,o," to  ",c)),r.a.createElement("div",{className:"booklist-container"},n))};var L=r.a.memo(function(e){return r.a.createElement("div",{className:"srch-author-container"},r.a.createElement("h2",{className:"srch-author-container__auth-name"},e.author),r.a.createElement("img",{src:e.authImg,alt:e.author}),r.a.createElement("a",{href:e.authLnk,rel:"noopener noreferrer",target:"_blank"},"More on the author..."))},function(e,t){return e.author===t.author});var Y=function(e){var t,n,o,c;function l(t){return e.book.querySelector(t).textContent}Object(a.useEffect)(function(){console.log("TRUE");for(var e=document.getElementsByClassName("srch-book-placeholder"),t=document.getElementsByClassName("book-hide"),n=0;n<e.length;n++)e[n].style.display="none",t[n].style.display="block"}),"title"===e.srchTyp?(t=l("best_book title"),n=l("best_book image_url"),o="https://www.goodreads.com/book/show/"+l("best_book id"),c=l("original_publication_year")):(t=l("title_without_series"),n=l("image_url"),o=l("link"),c=l("publication_year"));var i=r.a.createElement(R.a,{className:"srch-book-placeholder",style:{display:"block"},height:550,width:300,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},r.a.createElement("rect",{x:"0",y:"0",rx:"4",ry:"4",width:"40",height:"39"}),r.a.createElement("rect",{x:"0",y:"515",rx:"4",ry:"4",width:"250",height:"13"}),r.a.createElement("rect",{x:"0",y:"50",rx:"4",ry:"4",width:"300",height:"450"}),r.a.createElement("rect",{x:"0",y:"535",rx:"4",ry:"4",width:"150",height:"13"}),r.a.createElement("rect",{x:"0",y:"555",rx:"4",ry:"4",width:"100",height:"13"}));return r.a.createElement("div",{className:"srch-bk-container","data-ref":e.srchTyp},i,r.a.createElement("div",{className:"book-hide",style:{display:"none"}},r.a.createElement("div",null,e.indx+"."),r.a.createElement("img",{className:"srch-bk-container__cover",src:n,alt:t}),r.a.createElement("h5",{className:"srch-bk-container__title"},t),"title"===e.srchTyp?r.a.createElement("div",{className:"srch-bk-container__author-info"},r.a.createElement("p",null,"by: "),r.a.createElement("button",{className:"srch-bk-container__author-btns",onClick:function(){return e.onAuthClick(e.author,"author")}},e.author)):null,r.a.createElement("p",null,"Published: ",c),r.a.createElement("a",{href:o,rel:"noopener noreferrer",target:"_blank"},"...more info")))},j=n(44),U=n.n(j);var P=function(e){var t=Object(a.useState)(1),n=Object(A.a)(t,2),o=n[0],c=n[1],l=document.getElementsByClassName("srch-book-placeholder"),i=document.getElementsByClassName("book-hide"),s=[];function u(t){for(var n=0;n<l.length;n++)l[n].style.display="block",i[n].style.display="none";window.scrollTo(0,0);var a=document.getElementsByClassName("search__input")[0].value;return e.onPgClick(a,e.srchTyp,t)}return U.a.polyfill(),o!==parseInt(e.pg)&&c(parseInt(e.pg)),function(e){var t=o+4,n=o-4;for(n<0&&t<10&&(n=1,t=9),t>e&&(t=e,n=e-8);n<=t;n++)s.push(r.a.createElement("button",{key:n,className:n===o?"current-pg":null,onClick:function(e){return u(e.target.innerText)}},n))}(e.pgTotal),r.a.createElement("div",{className:"srch-pagination"},o>4?r.a.createElement("button",{onClick:function(){return u(1)}},"<"):null,s,o+4<e.pgTotal?r.a.createElement("button",{onClick:function(){return u(e.pgTotal)}},">"):null)};var q=function(e){return r.a.createElement("div",null,"No Results Found...")};var F=function(e){if(null==e.books.querySelector("author name"))return r.a.createElement(q,null);var t,n,a,o,c,l=[],i=e.books.querySelector("author name").textContent;"title"===e.srchTyp&&(a=e.books.querySelector("results-start").textContent,a=parseInt(a),o=e.books.querySelector("search total-results").textContent,c=20,e.books.querySelectorAll("search results work").forEach(function(e){return l.push(e)})),"author"===e.srchTyp&&(n=e.books.querySelector("authors author image_url").textContent,t=e.books.querySelector("author link").textContent,a=e.books.querySelector("books").getAttribute("start"),a=parseInt(a),o=e.books.querySelector("books").getAttribute("total"),c=30,e.books.querySelectorAll("author books book").forEach(function(e){return l.push(e)})),o=Math.ceil(o/c);var s=l.map(function(t,n){return r.a.createElement(Y,{key:i+n,onAuthClick:function(t,n){return e.onAuthClick(t,n)},srchTyp:e.srchTyp,author:i,indx:a+n,book:t})});return r.a.createElement("div",{className:"srch-container"},"author"===e.srchTyp?r.a.createElement(L,{author:i,authLnk:t,authImg:n}):r.a.createElement("h2",null,"TITLE SEARCH RESULTS"),r.a.createElement("div",{className:"srch-bk-list"},s),r.a.createElement(P,{onPgClick:function(t,n,a){return e.onPgClick(t,n,a)},srchTyp:e.srchTyp,pg:e.pg,pgTotal:o}))};var J=r.a.memo(function(e){console.log(document.activeElement,"CONTENT LOADED"),U.a.polyfill(),window.scrollTo(0,0);var t,n=document.querySelector(".search__input");function a(t,n){return e.onAuthClick(t,n)}return console.log(n),t="home"===e.content?r.a.createElement(D,{onTtlClick:function(t){return e.onTtlClick(t)},onAuthClick:a,onGenreClick:function(t,n,a){return e.onGenreClick(t,n,a)},genreLst:e.genres}):"genre"===e.content?r.a.createElement(M,{onTtlClick:function(t){return e.onTtlClick(t)},onAuthClick:a,dateMin:e.dateMin,dateMax:e.dateMax,genre:e.genres}):"search"===e.content?r.a.createElement(F,{onPgClick:function(t,n,a){return e.onPgClick(t,n,a)},onAuthClick:a,pg:e.pg,srchTyp:e.srchTyp,books:e.books}):r.a.createElement("div",{className:"book-single-container"},r.a.createElement("h4",null,e.books.title),r.a.createElement(G,{type:"book",onAuthClick:function(t,n){return e.onAuthClick(t,n)},book:e.books})),r.a.createElement("div",{className:"content-container"},t)},function(e,t){return e.genres===t.genres&&e.books===t.books}),V=(n(101),w.NYT),Z=V.NYT_API_KEY,K=V.NYT_API,W=V.OVRVW_QRY,H=V.GNRE_QRY,X=V.GNRE_LST_QRY,z=w.GR,$=z.GR_KEY,ee=z.GR_API,te=z.GR_GNRL_QRY,ne=z.GR_QRY,ae="https://cors-anywhere.herokuapp.com/",re=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).fetchXML=function(e,t){var a={};return n.setState({isLoading:!0}),fetch(e).then(function(e){if(e.ok)return e.text();throw new Error("Bad Response")}).then(function(e){return(new window.DOMParser).parseFromString(e,"text/xml")}).then(function(r){if(console.log(e),void 0===t)return r;a[t]=r,a.isLoading=!1,n.setState(a)})},n.fetchJSON=function(e,t,a){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"results",o={};return n.setState({isLoading:!0}),fetch(e).then(function(e){if(e.ok)return e.json();throw new Error("Something went wrong...")}).then(function(e){o[t]=null!=a?e[r][a]:o[t]=e[r],o.isLoading=!1,n.setState(o)}).catch(function(e){return n.setState({error:e,isLoading:!1})})},n.goHome=function(){n.setState({content:"home",searchTxt:"",searchTyp:"Title",date:new Date,dateMin:new Date("2008-06-08"),dateMax:new Date}),n.fetchJSON(K+W+"current/&api-key="+Z,"genres","lists")},n.handleSelectUpdate=function(e){n.setState({searchTyp:e})},n.handleSearch=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;n.setState({searchTxt:e,content:"search",searchTyp:t,pg:a}),e=(e=e.replace(/\s/g,"+").toLowerCase()).replace(/'/g,"%27s"),"title"===t?n.fetchXML(ae+ee+te+$+"&search[field]=title&q="+e+"&page="+a,"books"):n.fetchXML(ae+ee+"api/author_url/"+e+"?key="+$).then(function(e){return null===e.querySelector("author")?n.setState({books:e}):e.querySelector("author").getAttribute("id")}).then(function(e){return n.fetchXML(ae+ee+ne+e+"?format=xml&key="+$+"&page="+a,"books")})},n.handleSearchTxtUpdate=function(e){n.setState({searchTxt:e})},n.handleDateUpdate=function(e){"home"===n.state.content?(n.setState({searchTxt:"",date:new Date(e)}),n.fetchJSON(K+W+"published_date="+e+"&api-key="+Z,"genres","lists")):(n.setState({genreTxt:n.state.genreTxt,searchTxt:"",date:new Date(e)}),n.fetchJSON(K+H+e+"/"+n.state.genreTxt+".json?api-key="+Z,"genres"))},n.handleGenreUpdate=function(e,t,a){n.setState({genreTxt:e,content:"genre",searchTxt:"",dateMin:new Date(t),dateMax:new Date(a),date:new Date(a)}),n.fetchJSON(K+H+"current/"+e+".json?api-key="+Z,"genres")},n.state={date:new Date,dateMin:new Date("2008-06-08"),dateMax:new Date,navGenres:[],books:[],genres:[],content:"home",pg:1,searchTxt:"",searchTyp:"",genreTxt:"",isLoading:!1,error:null},n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this.fetchJSON(K+X+"&api-key="+Z,"navGenres"),t=this.fetchJSON(K+W+"api-key="+Z,"genres","lists");this.setState({content:"home"}),Promise.all([e,t])}},{key:"render",value:function(){var e=this;console.log(this.state.pg,"APP");var t=this.state,n=t.date,a=t.dateMin,o=t.dateMax,c=t.navGenres,l=t.books,i=t.genres,s=t.genreTxt,u=t.content,h=t.pg,m=t.searchTxt,A=t.searchTyp,d=t.isLoading,g=t.error;return g?r.a.createElement("p",null,g.message):r.a.createElement("div",{className:"App"},r.a.createElement(f,{onHomeClick:this.goHome,onSelectUpdate:this.handleSelectUpdate,onSearchUpdate:function(t){e.setState({searchTxt:t})},onSearchSubmit:this.handleSearch,onGenreClick:this.handleGenreUpdate,onDateChange:this.handleDateUpdate,content:u,searchTyp:A,searchTxt:m,genreTxt:s,navGenres:c,date:n,dateMin:a,dateMax:o}),r.a.createElement(J,{onTtlClick:function(t){e.setState({books:t,content:"book"})},onAuthClick:this.handleSearch,onGenreClick:this.handleGenreUpdate,onPgClick:this.handleSearch,content:u,srchTyp:A,pg:h,books:l,isLoading:d,dateMin:a,dateMax:o,genres:i}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(re,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},85:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAG4CAMAAAADj87sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRFXFxcgICApKSklZWVr6+vAAAAelZTvAAAAAZ0Uk5T//////8As7+kvwAAA6FJREFUeNrs3UFugzAQBVDw4Ptfue2mUgu0UJMaPO9LLCJl9TQS409EpipNmeo8z0eu+evnUktJdZU9wFkOBuBLBAECBAgQ4PFEWSeSAC4XAG75vccEHs22X5IZvABwZwCTjOArAQMgQIAAx19jTCBAgACfD/l5ATyVaSMAAfYFnJyF/xUwdxtzBWDqPvAKwNSNdHykFTBzyvKeMgNsAlwKwDbAZQbYBhiX30SemegCOI7fH5avKwBH8js9gxcADjWAp0cQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAdwSch/KLDoCReAAvARxI8Oz8XQSYOQABAgQIsBkwbpqHAMZIe4lFunEzdpT73xlMUCYABAgQIECAAAECBAgQoKOcMiHXUzmF6s0bVZU+QIAAAbYCxlO2tpsCPus52vAPldIBxrPOXgnOwgABAgQIECBAa8wzG+mER7nI63e/Rlqdpc4CCBAgQIACECBAgAIQIECAAhAgQIACECBAgPIKwBglfQC9wdJLaP8uCBAgQIAAAQIECBAgwD6AQwlGh6OcNgYgwIcDRpS0jaC/BGq8i1hj7IEAAQIECBAgQIAAO9VZTiLtZ+G8P47RxqizhqizQp3lJqLOsgcCBAgQIECAAAECVGeps9RZAhAgQIACECBAgAIQIECAAhAgQIACECBAgAIQIECAAhAgQICJE8smYN36qmxk2QGs0yqL/JAVYAUIsC9gBdgI+F0wKP2Q6XdAgvsp8xbgStAms5fVDaNuC8rRVIIAbwFIsBWQIMDOgARbAQkC7AxI8DzfV0CCp8fvTYABABR6UHR9Gz88AAAAAElFTkSuQmCC"},87:function(e,t,n){e.exports=n(102)},92:function(e,t,n){}},[[87,1,2]]]);
//# sourceMappingURL=main.19716ad8.chunk.js.map