(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(25),c=n.n(o),i=(n(94),n(36)),s=n(37),l=n(49),u=n(38),h=n(6),m=n(50);var d=r.a.memo(function(e){function t(){var t=document.getElementsByClassName("search__type")[0].value;return e.onSearchSubmit(e.searchTxt,t)}return r.a.createElement("div",{className:"search"},r.a.createElement("input",{className:"search search__input",type:"text",placeholder:"Search...",onChange:function(t){return e.onSearchUpdate(t.target.value)},onKeyDown:function(e){if(13===e.keyCode)return e.target.blur(),t(e.target.value)},value:e.searchTxt}),r.a.createElement("select",{className:"search search__type",value:e.searchTyp,onChange:function(t){return e.onSelectUpdate(t.target.value)},name:"search-options"},r.a.createElement("option",{value:"title"},"Title"),r.a.createElement("option",{value:"author"},"Author")),r.a.createElement("button",{className:"search search__btn",onClick:t},"Search"))},function(e,t){return e===t}),g=n(48),f=n(68);n(101);var A=function(e){var t=Object(a.useState)(e.date),n=Object(g.a)(t,2),o=n[0],c=n[1];if(Object(a.useEffect)(function(){return c(e.date)},[e.dateMax,e.date]),"search"===e.content||"book"===e.content)return r.a.createElement(r.a.Fragment,null);function i(e,t,n){return"add"===n?new Date(e.getTime()+1e3*t*60*60*24):new Date(e.getTime()-1e3*t*60*60*24)}function s(t){var n;if("prev"===t.target.dataset.name){var a=i(e.dateMin,7,"add");if(e.date<a)return null;n=i(e.date,7,"subtract")}else{var r=i(e.dateMax,7,"subtract");if(e.date>r)return null;n=i(e.date,7,"add")}return e.onDateChange(n.toISOString().substr(0,10))}return r.a.createElement("div",{className:"date-picker"},r.a.createElement("button",{onClick:s,"data-name":"prev"},r.a.createElement("div",{className:"fas fa-caret-left fa-reg"})," Prev Week"),r.a.createElement(f.a,{selected:o,onChange:function(e){c(e)},minDate:e.dateMin,maxDate:e.dateMax,peekNextMonth:!0,onFocus:function(e){return e.target.readOnly=!0},showMonthDropdown:!0,showYearDropdown:!0,dropdownMode:"select"}),r.a.createElement("button",{onClick:s,"data-name":"next"},"Next Week ",r.a.createElement("div",{className:"fas fa-caret-right fa-reg"})),r.a.createElement("button",{className:"date-picker__go-btn",onClick:function(){var t=o.toISOString().substr(0,10);return"home"===e.content?e.onDateChange(t,e.content):e.onDateChange(t,e.content,e.genreTxt)}},"GO"))};var k=function(e){function t(t){var n=t.target.dataset.name,a=t.target.dataset.minDate,r=t.target.dataset.maxDate;e.onGenreClick(n,a,r),t.target.parentElement.style.visibility="hidden"}return r.a.createElement("div",{className:"genre-menu__btns","data-ref":e.title,tabIndex:"-1",onBlur:function(e){return function(e){e.target.style.visibility="hidden",e.target.parentElement.firstChild.firstChild.style.color="",e.target.parentElement.firstChild.style.background=""}(e)}},e.subGenres.map(function(e){return r.a.createElement("button",{key:e.display_name,"data-name":e.list_name_encoded,"data-min-date":e.oldest_published_date,"data-max-date":e.newest_published_date,onMouseDown:t},e.display_name)}))};var b=function(e){return r.a.createElement("div",{className:"genre-menu"},e.genreLst.map(function(t){var n="";return"Misc."!==t.title&&"Children's Books"!==t.title||(n=" sub-genre--left"),r.a.createElement("div",{key:t.title,className:"genre-menu__sub-genre"+n},r.a.createElement("button",{onClick:function(e){return function(e){e.currentTarget.querySelector("h5").style.color="white",e.currentTarget.style.background="#AAA58E";var t=document.querySelector('[data-ref="'+e.target.innerText+'"]');t.style.visibility="visible",t.focus()}(e)}},r.a.createElement("h5",null,t.title)),r.a.createElement(k,{key:t.title+" sub-genre-title",onGenreClick:function(t,n,a){return e.onGenreClick(t,n,a)},title:t.title,subGenres:t.array}))}))};var p=function(e){var t={navSubGenres:[]};function n(t,n,a){var r=new RegExp(t,n);return a?e.genreLst.filter(function(e){return r.test(e.display_name)}):e.genreLst.filter(function(e){return!r.test(e.display_name)})}function a(e,n){t.navSubGenres.push(function(e,t){var n={};return n.title=e,n.array=t,n}(e,n))}var o=n(".fiction","i",!0),c=n("adult","i",!0),i=n("children","i",!0),s=n(".fiction|children|adult","i",!1);return a("Fiction/Non-Fiction",o),a("Young Adult",c),a("Children's Books",i),a("Misc.",s),r.a.createElement("div",{className:"genres"},r.a.createElement(b,{onGenreClick:function(t,n,a){return e.onGenreClick(t,n,a)},genreLst:t.navSubGenres}))};n(102);var E=r.a.memo(function(e){return console.log("NAV LOADED"),r.a.createElement("nav",{className:"nav"},r.a.createElement("div",{className:"nav__title-corner"},r.a.createElement("button",{className:"nav__home-btn",onClick:function(){return e.onHomeClick()}},r.a.createElement("div",{className:"fas fa-home fa-lg"})),r.a.createElement("h1",{className:"nav__site-title"},"BSB")),r.a.createElement(d,{onSelectUpdate:function(t){return e.onSelectUpdate(t)},onSearchUpdate:function(t){return e.onSearchUpdate(t)},onSearchSubmit:function(t,n){return e.onSearchSubmit(t,n)},searchTyp:e.searchTyp,searchTxt:e.searchTxt}),r.a.createElement(p,{onGenreClick:function(t,n,a){return e.onGenreClick(t,n,a)},genreLst:e.navGenres}),r.a.createElement(A,{onDateChange:function(t){return e.onDateChange(t)},date:e.date,dateMin:e.dateMin,dateMax:e.dateMax,content:e.content,genreTxt:e.genreTxt}))},function(e,t){return e.genreTxt===t.genreTxt&&e.date===t.date&&e.navGenres===t.navGenres&&e.searchTxt===t.searchTxt&&e.searchTyp===t.searchTyp&&e.content===t.content}),v=n(87),C=n.n(v);var y=function(e){if(e.author)var t=e.author.split(/,|\sand\s|\swith\s/),n=t.map(function(n,a){return a<t.length-1?r.a.createElement("span",{key:n},r.a.createElement("button",{className:"author-btn",onClick:function(){return e.onAuthClick(n,"author")}},n,",")):r.a.createElement("button",{key:n,className:"author-btn",onClick:function(){return e.onAuthClick(n,"author")}},n)});var a=null!==e.bkImg?e.bkImg:C.a,o=r.a.createElement("div",{className:"book-container__description"},r.a.createElement("h4",null,"Description"),r.a.createElement("p",null,e.dscrpt?e.dscrpt:"No Description Available..."));function c(){return e.onBkClick(a)}return r.a.createElement("div",{className:"book-container__gen-info","data-ref":e.type},r.a.createElement("div",{className:"book-container__rank"},r.a.createElement("strong",null,"#",e.rank)),r.a.createElement("div",{className:"book-container__cover","data-ref":e.type},r.a.createElement("img",{onClick:c,src:a,alt:e.title}),"genre"===e.type?o:r.a.createElement(r.a.Fragment,null)),r.a.createElement("div",{className:"book-container__title-author"},r.a.createElement("button",{className:"book-title",onClick:c},e.title),r.a.createElement("div",{className:"book-container__author-info"},r.a.createElement("p",null,"by"),r.a.createElement("div",{className:"book-container__author-btns","data-ref":e.type},n))))};var w=function(e){return r.a.createElement("div",{className:"book-container__week-list"},r.a.createElement("p",{className:"book-list-duration"},1!==e.wksOnLst?e.wksOnLst+" Weeks On List...":"New This Week"))},_=n(44),S={NYT:{NYT_API_KEY:"gNZ6mtTmPrJA6NjGGJseCZdoFRcv1t9q",NYT_API:"https://api.nytimes.com/svc/books/v3/",OVRVW_QRY:"lists/overview.json?",ATHR_QRY:"reviews.json?author=",TTL_QRY:"reviews.json?title=",GNRE_QRY:"lists/",GNRE_LST_QRY:"lists/names.json?"},GR:{GR_KEY:"dYOk0dlwaFMBnnKyNlv2EQ",GR_API:"https://www.goodreads.com/",GR_RVW_QRY:"book/review_counts.json?isbns=",GR_ISBN_QRY:"book/isbn/",GR_GNRL_QRY:"search/index.xml?key=",GR_BK_QRY:"book/show/",GR_QRY:"author/show/"}},N=S.GR,B=N.GR_KEY,x=N.GR_API,T=N.GR_ISBN_QRY,I=N.GR_RVW_QRY,Q="https://cors-anywhere.herokuapp.com/",D=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={rating:0,id:""},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props.isbn;"book"===this.props.type?fetch(Q+x+T+t+"?key="+B).then(function(t){if(t.ok)return t.text();var n=e.props.author.replace(/\s/g,"+"),a=e.props.title.replace(/\s/g,"+");return fetch(Q+x+"book/title.xml?author="+n+"&key="+B+"&title="+a).then(function(e){return e.text()})}).then(function(e){return(new window.DOMParser).parseFromString(e,"text/xml")}).then(function(t){var n=t.querySelector("book id").textContent,a=t.querySelector("average_rating").textContent;e.setState({rating:a,id:n})}):fetch(Q+x+I+t+"&key="+B).then(function(e){return e.json()}).then(function(t){var n=t.books[0].id,a=t.books[0].average_rating;e.setState({rating:a,id:n})})}},{key:"render",value:function(){return 0!==this.props.rating&&this.props.isBkRdy(),r.a.createElement("div",{className:"book-container__sub-info"},r.a.createElement("a",{className:"book-buy-link",href:this.props.buyLnk.url,rel:"noopener noreferrer",target:"_blank"},"Buy this Book"),r.a.createElement("div",{className:"sub-info__rating"},0===this.state.rating?"No Rating Available":r.a.createElement("div",null,r.a.createElement(_.a,{className:"book-container__ratings",initialRating:this.state.rating,emptySymbol:"far fa-star fa-lg",fullSymbol:"fas fa-star fa-lg",fractions:2,readonly:!0}),this.state.rating)),r.a.createElement("a",{href:"https://www.goodreads.com/book/show/"+this.state.id,rel:"noopener noreferrer",target:"_blank"},"Read Reviews"))}}]),t}(a.Component),O=n(45);n(103);var R=function(e){var t=e.book.primary_isbn13;if("genre"===e.type){var n=e.book.isbns.filter(function(t,n){return n===e.book.isbns.length-1});void 0!==n[0]&&null!==n&&(t=n[0].isbn13)}var a=document.getElementsByClassName("book-placeholder"),o=document.getElementsByClassName("book-hide"),c=r.a.createElement(O.a,{className:"book-placeholder",style:{display:"overview"===e.type?"none":"block"},height:550,width:300,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},r.a.createElement("rect",{x:"0",y:"0",rx:"4",ry:"4",width:"40",height:"39"}),r.a.createElement("rect",{x:"0",y:"515",rx:"4",ry:"4",width:"250",height:"13"}),r.a.createElement("rect",{x:"0",y:"50",rx:"4",ry:"4",width:"300",height:"450"}),r.a.createElement("rect",{x:"0",y:"535",rx:"4",ry:"4",width:"150",height:"13"}),r.a.createElement("rect",{x:"0",y:"555",rx:"4",ry:"4",width:"100",height:"13"}));return r.a.createElement("div",{className:"book-container","data-ref":e.type},c,r.a.createElement("div",{className:"book-hide",style:{display:"overview"===e.type?"flex":"none"}},r.a.createElement(y,{key:e.book.title+"main-info",onBkClick:function(n){return function(n){return e.onBkClick(n,t)}(n)},onAuthClick:function(t,n){return e.onAuthClick(t,n)},type:e.type,book:e.book,title:e.book.title,author:e.book.author,bkImg:e.book.book_image,dscrpt:e.book.description,rank:e.book.rank}),"overview"===e.type?r.a.createElement(w,{key:e.book.title+"min-sub-info",wksOnLst:e.book.weeks_on_list}):r.a.createElement(D,{key:e.book.title+"sub-info",isBkRdy:function(){for(var e=0;e<a.length;e++)a[e].style.display="none",o[e].style.display="flex"},buyLnk:e.book.buy_links[1],title:e.book.title,author:e.book.author,type:e.type,isbn:t})))};var G=function(e){var t=e.books.map(function(t){return r.a.createElement(R,{key:e.genre.display_name+"-"+t.title,onBkClick:function(t,n){return e.onBkClick(t,n)},onAuthClick:function(t,n){return e.onAuthClick(t,n)},type:"overview",book:t})});return r.a.createElement("div",{className:"overview-genre"},r.a.createElement("button",{className:"overview-genre__title",onClick:function(){var t=document.querySelector("button[data-name="+e.genre.list_name_encoded+"]"),n=t.dataset.name,a=t.dataset.minDate,r=t.dataset.maxDate;return e.onGenreClick(n,a,r)}},e.genre.display_name),r.a.createElement("div",{className:"overview-books"},t))};var M=function(e){if(e.genreLst.length>0){console.log("HOME LOADED");var t=e.genreLst.slice(0,5),n=[];!function(t){for(var a=0;a<5;a++)n.push(r.a.createElement(G,{key:t[a].display_name,onBkClick:function(t,n){return e.onBkClick(t,n)},onAuthClick:function(t,n){return e.onAuthClick(t,n)},books:t[a].books,genre:t[a],onGenreClick:function(t,n,a){return e.onGenreClick(t,n,a)}}))}(t)}return r.a.createElement("div",null,n)};var L=function(e){console.log("GENRE BOOKS LOADED"),document.querySelectorAll("genre-menu__btns").forEach(function(e){return e.style.visibility="hidden"});var t,n=c(e.dateMin),a=c(e.dateMax),o=e.genre.books.map(function(t,n){return r.a.createElement(R,{key:t.title+"-"+n,onBkClick:function(t,n){return e.onBkClick(t,n)},onAuthClick:function(t,n){return e.onAuthClick(t,n)},type:"genre",book:t})});function c(e){if(e>=new Date-7)return"Current";var t=e.toISOString().substr(0,10);return(t=t.split("-")).push(t.shift()),t=t.join("/")}return(e.genre.display_name.includes("Audio")||"Business"===e.genre.display_name||"Science"===e.genre.display_name||"Sports and Fitness"===e.genre.display_name)&&(t="(List is updated monthly)"),r.a.createElement("div",{className:"genre-container"},r.a.createElement("div",{className:"genre-container__title-block"},r.a.createElement("h3",null,e.genre.display_name),r.a.createElement("p",null,"Active from: ",n," to ",a),r.a.createElement("p",null,t)),r.a.createElement("div",{className:"booklist-container"},o))};var j=r.a.memo(function(e){return Object(a.useEffect)(function(){var t=e.authorDscrpt;0===e.authorDscrpt.length&&(t="No Description Available"),document.getElementById("authorInfo").innerHTML=t}),r.a.createElement("div",{className:"srch-author-container"},r.a.createElement("div",{className:"author-main"},r.a.createElement("img",{src:e.authImg,alt:e.author}),r.a.createElement("h2",{className:"srch-author-container__auth-name"},e.author),r.a.createElement("p",null,"Home: ",e.homeTown),r.a.createElement("a",{href:e.authLnk,rel:"noopener noreferrer",target:"_blank"},"More on the author...")),r.a.createElement("div",{id:"authorInfo"}))},function(e,t){return e.author===t.author||e.authorDscrpt===t.authorDscrpt});var Y=function(e){var t,n,o,c,i;function s(t){return null==e.book.querySelector(t)?"No Info Found":e.book.querySelector(t).textContent}Object(a.useEffect)(function(){for(var e=document.getElementsByClassName("srch-book-placeholder"),t=document.getElementsByClassName("book-hide"),n=0;n<e.length;n++)e[n].style.display="none",t[n].style.display="flex"}),"title"===e.srchTyp?((t=s("best_book title")).length>60&&(t=t.substr(0,60)+"..."),n=s("author name"),o=s("best_book image_url"),c="https://www.goodreads.com/book/show/"+s("best_book id"),i=s("original_publication_year")):(t=s("title_without_series"),o=s("image_url"),c=s("link"),i=s("publication_year"));var l=r.a.createElement(O.a,{className:"srch-book-placeholder",style:{display:"block"},height:550,width:300,speed:2,primaryColor:"#f3f3f3",secondaryColor:"#ecebeb"},r.a.createElement("rect",{x:"0",y:"0",rx:"4",ry:"4",width:"40",height:"39"}),r.a.createElement("rect",{x:"0",y:"515",rx:"4",ry:"4",width:"250",height:"13"}),r.a.createElement("rect",{x:"0",y:"50",rx:"4",ry:"4",width:"300",height:"450"}),r.a.createElement("rect",{x:"0",y:"535",rx:"4",ry:"4",width:"150",height:"13"}),r.a.createElement("rect",{x:"0",y:"555",rx:"4",ry:"4",width:"100",height:"13"}));return r.a.createElement("div",{className:"srch-bk-container","data-ref":e.srchTyp},l,r.a.createElement("div",{className:"book-hide",style:{display:"none"}},r.a.createElement("div",null,r.a.createElement("div",{className:"srch-bk-container__indx"},e.indx?e.indx+".":null),r.a.createElement("img",{className:"srch-bk-container__cover",src:o,alt:t}),r.a.createElement("h5",{className:"srch-bk-container__title"},t),"title"===e.srchTyp?r.a.createElement("div",{className:"srch-bk-container__author-info"},r.a.createElement("p",null,"by: "),r.a.createElement("button",{className:"srch-bk-container__author-btns",onClick:function(t){return function(t){return e.onAuthClick(t.target.innerText,"author")}(t)}},n)):null,r.a.createElement("p",null,"Published: ",i)),r.a.createElement("a",{href:c,rel:"noopener noreferrer",target:"_blank"},"...more info")))},P=n(46),U=n.n(P);var F=function(e){var t=Object(a.useState)(1),n=Object(g.a)(t,2),o=n[0],c=n[1];U.a.polyfill();var i=document.getElementsByClassName("srch-book-placeholder"),s=document.getElementsByClassName("book-hide"),l=[];function u(t){for(var n=0;n<i.length;n++)i[n].style.display="block",s[n].style.display="none";window.scrollTo(0,0);var a=document.getElementsByClassName("search__input")[0].value;return e.onPgClick(a,e.srchTyp,t)}return o!==parseInt(e.pg)&&c(parseInt(e.pg)),function(e){var t=o+4,n=o-4;for(n<=0&&(n=1,t=9),e<10&&(t=e),t>e&&(t=e,n=e-8);n<=t;n++)l.push(r.a.createElement("button",{key:n,className:n===o?"current-pg":null,onClick:function(e){return u(e.target.innerText)}},n))}(e.pgTotal),r.a.createElement("div",{className:"srch-pagination"},o>4?r.a.createElement("button",{onClick:function(){return u(1)}},"<"):null,l,o+4<e.pgTotal?r.a.createElement("button",{onClick:function(){return u(e.pgTotal)}},">"):null)},q=n(88),J=n.n(q);var W=function(){return r.a.createElement("div",{className:"no-results"},r.a.createElement("img",{src:J.a,alt:"book-stack"}),r.a.createElement("p",null,"Sorry, We Couldn't Find What You're Looking For...."))};n(104);var H=function(e){if(null==e.books.querySelector("author name"))return r.a.createElement(W,null);function t(t){return null==e.books.querySelector(t)?"No Info Found":e.books.querySelector(t).textContent}var n,a,o,c,i,s,l,u=[],h=t("author name");"title"===e.srchTyp&&(i=t("results-start"),i=parseInt(i),s=t("search total-results"),l=20,e.books.querySelectorAll("search results work").forEach(function(e){return u.push(e)})),"author"===e.srchTyp&&(c=t("author image_url"),o=t("author link"),n=t("author about"),a=t("author hometown"),e.books.querySelectorAll("author books book").forEach(function(e){return u.push(e)})),s=Math.ceil(s/l);var m=u.map(function(t,n){return r.a.createElement(Y,{key:h+n,onAuthClick:function(t,n){return e.onAuthClick(t,n)},srchTyp:e.srchTyp,author:h,indx:i+n,book:t})});return r.a.createElement("div",{className:"srch-container"},"author"===e.srchTyp?r.a.createElement(j,{author:h,authorDscrpt:n,homeTown:a,authLnk:o,authImg:c}):r.a.createElement("h2",null,"TITLE SEARCH RESULTS"),r.a.createElement("div",{className:"srch-bk-list"},m),"author"===e.srchTyp?null:r.a.createElement(F,{onPgClick:function(t,n,a){return e.onPgClick(t,n,a)},srchTyp:e.srchTyp,pg:e.pg,pgTotal:s}))};var V=function(e){function t(t){return null==e.book.querySelector(t)?"No Info Found":e.book.querySelector(t).textContent}Object(a.useEffect)(function(){document.getElementById("bk-description").innerHTML=i});var n=t("book title"),o=[],c=e.book.querySelector("authors");(c=c.querySelectorAll("author name")).forEach(function(t,n){var a="";console.log(c.length,"LENGTH"),n<c.length-1&&(a=","),o.push(r.a.createElement("button",{onClick:function(t){return e.onAuthClick(t.target.textContent,"author")}},t.textContent+a))});var i=t("book description"),s=t("book original_publication_year"),l=t("book original_publication_month"),u=t("book original_publication_day"),h=t("book num_pages"),m=t("book average_rating"),d=t("book isbn13");return console.log(o),r.a.createElement("div",{className:"sngl-bk-container"},r.a.createElement("div",{className:"sngl-bk-main"},r.a.createElement("div",{className:"sngl-bk-main__cover-title"},r.a.createElement("img",{src:e.bkCover,alt:n}),r.a.createElement("h3",null,n),r.a.createElement("p",null,"By ",o)),r.a.createElement("div",{className:"sngl-bk-main__dscrpt"},r.a.createElement("h5",null,"Description"),r.a.createElement("p",{id:"bk-description"}))),r.a.createElement("div",{className:"sngl-bk-sub"},0===m?"No Rating Available":r.a.createElement("div",null,r.a.createElement(_.a,{className:"book-container__ratings",initialRating:m,emptySymbol:"far fa-star fa-lg",fullSymbol:"fas fa-star fa-lg",fractions:2,readonly:!0}),m),r.a.createElement("p",null,"Total Pg: ".concat(h)),r.a.createElement("p",null,"ISBN13: ".concat(d)),r.a.createElement("p",null,"Published: ".concat(l,"/").concat(u,"/").concat(s))))};n(105);var K=r.a.memo(function(e){var t;function n(t,n){return e.onAuthClick(t,n)}return console.log("CONTENT LOADED"),U.a.polyfill(),window.scrollTo(0,0),t="home"===e.content?r.a.createElement(M,{onBkClick:function(t,n){return e.onBkClick(t,n)},onAuthClick:n,onGenreClick:function(t,n,a){return e.onGenreClick(t,n,a)},genreLst:e.genres}):"genre"===e.content?r.a.createElement(L,{onBkClick:function(t,n){return e.onBkClick(t,n)},onAuthClick:n,dateMin:e.dateMin,dateMax:e.dateMax,genre:e.genres}):"search"===e.content?r.a.createElement(H,{onPgClick:function(t,n,a){return e.onPgClick(t,n,a)},onAuthClick:n,pg:e.pg,srchTyp:e.srchTyp,books:e.books}):r.a.createElement("div",{className:"book-single-container"},r.a.createElement("h4",null,e.books.title),r.a.createElement(V,{type:"book",onAuthClick:function(t,n){return e.onAuthClick(t,n)},bkCover:e.bkCover,book:e.books})),r.a.createElement("div",{className:"content-container"},t)},function(e,t){return e.genres===t.genres&&e.books===t.books});n(106);var X=function(){return r.a.createElement("div",{className:"footer-container"},r.a.createElement("div",{className:"footer-container__left"},r.a.createElement("h5",null,"About The App"),r.a.createElement("p",{className:"footer-container__description"},"I created this app to help find more books to read and expand my horizons. It gives a complete history of the NYT Best Sellers list and shows ratings and search results from Good Reads so you find out more about the books you\u2019re interested in."),r.a.createElement("h5",null,"Resources"),r.a.createElement("a",{href:"https://www.nytimes.com/books/best-sellers/",rel:"noopener noreferrer",target:"blank"},"https://www.nytimes.com/books/best-sellers/"),r.a.createElement("a",{href:"https://www.goodreads.com",rel:"noopener noreferrer",target:"blank"},"https://www.goodreads.com")),r.a.createElement("div",{className:"footer-container__right"},r.a.createElement("h4",null,"Best Seller Books"),r.a.createElement("p",null,"(202) 555-0114"),r.a.createElement("p",null,"Pacific Place, 600 Pine St Suite 107,"),r.a.createElement("p",null,"Seattle, WA 98101"),r.a.createElement("p",{className:"copyright"},"\xa9 2019 Best Selling Books, Seattle, WA")))},Z=S.NYT.NYT_API_KEY,z=S.GR.GR_KEY,$="https://cors-anywhere.herokuapp.com/";var ee=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).goHomeNow=function(){console.log(n.state.content),n.setState({content:"home",searchTxt:"",searchTyp:"Title",date:new Date,dateMin:new Date("2008-06-08"),dateMax:new Date}),n.goHome()},n.handleSelectUpdate=function(e){n.setState({searchTyp:e})},n.handleSearch=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;e=e.replace(/,/g,""),n.setState({searchTxt:e,content:"search",searchTyp:t,pg:a}),e=(e=e.replace(/\s/g,"+").toLowerCase()).replace(/'/g,"%27s"),"title"===t?n.searchTitle(e,a):n.searchAuthor(e)},n.handleSearchTxtUpdate=function(e){n.setState({searchTxt:e})},n.handleDateUpdate=function(e){"home"===n.state.content?(n.setState({searchTxt:"",date:new Date(e)}),n.setDateHome(e)):(n.setState({genreTxt:n.state.genreTxt,searchTxt:"",date:new Date(e)}),n.setDateGenre(e,n.state.genreTxt))},n.handleGenreUpdate=function(e,t,a){n.setState({genreTxt:e,content:"genre",searchTxt:"",dateMin:new Date(t),dateMax:new Date(a),date:new Date(a)}),n.genreView(e)},n.handleBkClick=function(e,t){console.log(e),n.setState({content:"book",bkCover:e}),n.bookDetailView(t)},n.goHome=function(){var e=this;return this.fetchJSON("".concat($,"https://api.nytimes.com/svc/books/v3/lists/overview.json?current/&api-key=").concat(Z)).then(function(t){return e.setStateDataJSON(t,"genres","lists")}).catch(function(t){return e.setState({error:t})})}.bind(Object(h.a)(n)),n.getGenres=function(){var e=this;return this.fetchJSON("".concat($,"https://api.nytimes.com/svc/books/v3/lists/names.json?&api-key=").concat(Z)).then(function(t){return e.setStateDataJSON(t,"navGenres")}).catch(function(t){return e.setState({error:t})})}.bind(Object(h.a)(n)),n.bookDetailView=function(e){var t=this;this.fetchXML("".concat($,"https://www.goodreads.com/book/isbn/").concat(e,"?key=").concat(z)).then(function(e){return function(e){return e.querySelector("book id").textContent}(e)}).then(function(e){return t.fetchXML("".concat($,"https://www.goodreads.com/book/show/").concat(e,"?key=").concat(z))}).then(function(e){return t.setStateDataXML(e,"books")}).catch(function(e){return t.setState({error:e})})}.bind(Object(h.a)(n)),n.genreView=function(e){var t=this;return this.fetchJSON("".concat($,"https://api.nytimes.com/svc/books/v3/lists/").concat(e,".json?api-key=").concat(Z)).then(function(e){return t.setStateDataJSON(e,"genres")}).catch(function(e){return t.setState({error:e})})}.bind(Object(h.a)(n)),n.searchTitle=function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return this.fetchXML("".concat($,"https://www.goodreads.com/search/index.xml?key=").concat(z,"&search[field]=title&q=").concat(e,"&page=").concat(n)).then(function(e){return t.setStateDataXML(e,"books")}).catch(function(e){return t.setState({error:e})})}.bind(Object(h.a)(n)),n.searchAuthor=function(e){var t=this;return this.fetchXML("".concat($,"https://www.goodreads.com/api/author_url/").concat(e,"?key=").concat(z)).then(function(e){return function(e){return e.querySelector("author").getAttribute("id")}(e)}).then(function(e){return t.fetchXML("".concat($,"https://www.goodreads.com/author/show/").concat(e,"?format=xml&key=").concat(z))}).then(function(e){return t.setStateDataXML(e,"books")}).catch(function(e){return t.setState({error:e})})}.bind(Object(h.a)(n)),n.setDateHome=function(e){var t=this;return this.fetchJSON("".concat($,"https://api.nytimes.com/svc/books/v3/lists/overview.json?published_date=").concat(e,"&api-key=").concat(Z)).then(function(e){return t.setStateDataJSON(e,"genres","lists")}).catch(function(e){return t.setState({error:e})})}.bind(Object(h.a)(n)),n.setDateGenre=function(e,t){var n=this;return this.fetchJSON("https://api.nytimes.com/svc/books/v3/lists/".concat(e,"/").concat(t,".json?api-key=").concat(Z)).then(function(e){return n.setStateDataJSON(e,"genres")}).catch(function(e){return n.setState({error:e})})}.bind(Object(h.a)(n)),n.fetchXML=function(e){return this.isLoadingToggle(!0),fetch(e).then(function(e){if(e.ok)return e.text();throw new Error("Bad Response")}).then(function(e){return(new window.DOMParser).parseFromString(e,"text/xml")})}.bind(Object(h.a)(n)),n.fetchJSON=function(e){return this.isLoadingToggle(!0),fetch(e).then(function(e){if(e.ok)return e.json();throw new Error("Something went wrong...")})}.bind(Object(h.a)(n)),n.isLoadingToggle=function(e){return this.setState({isLoading:e})}.bind(Object(h.a)(n)),n.setStateDataXML=function(e,t){var n={};if(void 0===t)return e;n[t]=e,this.setState(n),this.isLoadingToggle(!1)}.bind(Object(h.a)(n)),n.setStateDataJSON=function(e,t,n){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"results",r={};if(void 0===t)return e;r[t]=null!=n?e[a][n]:r[t]=e[a],this.setState(r),this.isLoadingToggle(!1)}.bind(Object(h.a)(n)),n.state={date:new Date,dateMin:new Date("2008-06-08"),dateMax:new Date,navGenres:[],books:[],bkCover:"",genres:[],content:"home",pg:1,searchTxt:"",searchTyp:"",genreTxt:"",isLoading:!1,error:null},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setState({content:"home"}),Promise.all([this.getGenres(),this.goHome()])}},{key:"render",value:function(){var e=this;return this.state.error?r.a.createElement("p",null,this.state.error.message):r.a.createElement("div",{className:"App"},r.a.createElement(E,{onHomeClick:this.goHomeNow,onSelectUpdate:this.handleSelectUpdate,onSearchUpdate:function(t){e.setState({searchTxt:t})},onSearchSubmit:this.handleSearch,onGenreClick:this.handleGenreUpdate,onDateChange:this.handleDateUpdate,content:this.state.content,searchTyp:this.state.searchTyp,searchTxt:this.state.searchTxt,genreTxt:this.state.genreTxt,navGenres:this.state.navGenres,date:this.state.date,dateMin:this.state.dateMin,dateMax:this.state.dateMax}),r.a.createElement(K,{onBkClick:this.handleBkClick,onAuthClick:this.handleSearch,onGenreClick:this.handleGenreUpdate,onPgClick:this.handleSearch,content:this.state.content,srchTyp:this.state.searchTyp,pg:this.state.pg,books:this.state.books,bkCover:this.state.bkCover,isLoading:this.state.isLoading,dateMin:this.state.dateMin,dateMax:this.state.dateMax,genres:this.state.genres}),r.a.createElement(X,null))}}]),t}(a.Component),te=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function ne(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}c.a.render(r.a.createElement(ee,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/react-best-selling-books",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/react-best-selling-books","/service-worker.js");te?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):ne(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):ne(t,e)})}}()},87:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUAAAAG4CAMAAAADj87sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAABJQTFRFXFxcgICApKSklZWVr6+vAAAAelZTvAAAAAZ0Uk5T//////8As7+kvwAAA6FJREFUeNrs3UFugzAQBVDw4Ptfue2mUgu0UJMaPO9LLCJl9TQS409EpipNmeo8z0eu+evnUktJdZU9wFkOBuBLBAECBAgQ4PFEWSeSAC4XAG75vccEHs22X5IZvABwZwCTjOArAQMgQIAAx19jTCBAgACfD/l5ATyVaSMAAfYFnJyF/xUwdxtzBWDqPvAKwNSNdHykFTBzyvKeMgNsAlwKwDbAZQbYBhiX30SemegCOI7fH5avKwBH8js9gxcADjWAp0cQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAAAECBAgQIECAdwSch/KLDoCReAAvARxI8Oz8XQSYOQABAgQIsBkwbpqHAMZIe4lFunEzdpT73xlMUCYABAgQIECAAAECBAgQoKOcMiHXUzmF6s0bVZU+QIAAAbYCxlO2tpsCPus52vAPldIBxrPOXgnOwgABAgQIECBAa8wzG+mER7nI63e/Rlqdpc4CCBAgQIACECBAgAIQIECAAhAgQIACECBAgPIKwBglfQC9wdJLaP8uCBAgQIAAAQIECBAgwD6AQwlGh6OcNgYgwIcDRpS0jaC/BGq8i1hj7IEAAQIECBAgQIAAO9VZTiLtZ+G8P47RxqizhqizQp3lJqLOsgcCBAgQIECAAAECVGeps9RZAhAgQIACECBAgAIQIECAAhAgQIACECBAgAIQIECAAhAgQICJE8smYN36qmxk2QGs0yqL/JAVYAUIsC9gBdgI+F0wKP2Q6XdAgvsp8xbgStAms5fVDaNuC8rRVIIAbwFIsBWQIMDOgARbAQkC7AxI8DzfV0CCp8fvTYABABR6UHR9Gz88AAAAAElFTkSuQmCC"},88:function(e,t,n){e.exports=n.p+"static/media/404.ab11e70c.png"},89:function(e,t,n){e.exports=n(107)},94:function(e,t,n){}},[[89,1,2]]]);
//# sourceMappingURL=main.6cba44f7.chunk.js.map