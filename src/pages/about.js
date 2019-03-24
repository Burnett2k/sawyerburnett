import React from "react";

export default () => (
  <div>
    <p>Sawyer Burnett</p>
    <ul>
      <li>
        <a
          href="http://github.com/burnett2k"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </li>
      <li>
        <a
          href="http://linkedin.com/in/sawyer-burnett-9176411b"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </li>
    </ul>

    <p>Recommended Reading:</p>
    <ul>
      <li>
        {" "}
        <a
          href="https://www.goodreads.com/book/show/25744928-deep-work?from_search=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          Deep Work
        </a>{" "}
        by Cal Newport
      </li>
      <li>
        {" "}
        <a
          href="https://www.goodreads.com/book/show/27968891-site-reliability-engineering?from_search=true"
          target="_blank"
          rel="noopener noreferrer"
        >
          Site Reliability Engineering
        </a>{" "}
        by Google
      </li>
    </ul>
  </div>
);
