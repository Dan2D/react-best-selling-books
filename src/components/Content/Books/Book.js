import React, {Suspense, lazy} from "react";
import BkPlaceholder from './Book-Components/BkPlaceholder';
import "./Books.css"

function Book(props) {
  const LazyBkMain = lazy(() =>  import('./Book-Components/BookMainInfo'));
  const LazyMinBkSub = lazy(() => import('./Overview/MinBookSubInfo'));
  const LazyBkSub = lazy(() => import('./Book-Components/BookSubInfo'));

  return (
    <div className="book-container" data-ref={props.type}>
      <Suspense fallback={<BkPlaceholder type={props.type}/>}>
        <LazyBkMain
          key={props.book.title + "main-info"}
          type={props.type}
          isbn={props.isbn}
          buyLnk={props.book.buy_links[2]}
          title={props.book.title}
          author={props.book.author}
          bkImg={props.book.book_image}
          dscrpt={props.book.description}
          rank={props.book.rank}
        />
        {props.type === "overview" ? (
          <LazyMinBkSub
            key={props.book.title + "min-sub-info"}
            wksOnLst={props.book.weeks_on_list}
          />
        ) : (
          <LazyBkSub
            key={props.book.title + "sub-info"}
            buyLnk={props.book.buy_links[1]}
            title={props.book.title}
            author={props.book.author}
            isbn={props.isbn}
          />
        )}
        </Suspense>
      </div>
  );
}

export default Book;
