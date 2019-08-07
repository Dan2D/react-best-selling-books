import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-container__left">
        <h5>Resources</h5>
        <a
          href="https://www.nytimes.com/books/best-sellers/"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://www.nytimes.com/books/best-sellers/
        </a>
        <a
          href="https://www.goodreads.com"
          rel="noopener noreferrer"
          target="_blank"
        >
          https://www.goodreads.com
        </a>
      </div>
      <div className="footer-container__right">
        <h4><strong>Best Seller Books</strong></h4>
        <p>(202) 555-0114</p>
        <p>Pacific Place, 600 Pine St Suite 107,</p>
        <p>Seattle, WA 98101</p>
        <p className="copyright">&copy; 2019 Best Selling Books, Seattle, WA</p>
      </div>
    </div>
  );
}

export default Footer;
