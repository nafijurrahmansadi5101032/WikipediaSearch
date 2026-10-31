# Wikipedia Search App

A fast, responsive vanilla JavaScript web application that performs real-time searches against the Wikipedia OpenSearch API and dynamically renders formatted results with excerpts and direct links.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

## Overview

This project provides an instant search interface for Wikipedia. As a user inputs text, the application queries the MediaWiki API, handles asynchronous data responses, and renders search result cards featuring page titles, canonical URLs, and context snippets.

---

## Key Features

- **Live Asynchronous Querying**: Performs network requests using the native Fetch API with `async/await`.
- **Query Parameter Encoding**: Uses `encodeURIComponent()` to safely format arbitrary text and special characters.
- **Dynamic DOM Injection**: Maps incoming JSON payloads directly into semantic `<article>` cards.
- **State Cleanup**: Instantly clears rendered results when the search bar is emptied.
- **Built-in Error Handling**: Intercepts failed network calls and server-side errors, displaying a fallback alert to the user.
- **Zero External Dependencies**: Pure HTML, CSS, and modern JavaScript without build steps or third-party libraries.

---

## Project Structure

```text
wikipedia-search-app/
├── img/
│   └── wikipedia-logo.png
├── js/
│   └── script.js
├── css/
│   └── style.css
├── index.html
└── README.md
