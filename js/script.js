const searchTermElem = document.querySelector('#searchTerm');
const searchResultElem = document.querySelector('#searchResult');

searchTermElem.select();

searchTermElem.addEventListener('input', function (event) {
    const query = event.target.value.trim();
    if (query.length > 0) {
        search(query);
    } else {
        searchResultElem.innerHTML = ''; // Clear results if input is empty
    }
});

const search = async (searchTerm) => {
    try {
        const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info|extracts&inprop=url&utf8=&format=json&origin=*&srlimit=10&srsearch=${encodeURIComponent(searchTerm)}`;
        const response = await fetch(url);
        const data = await response.json();

        // Render the results into the DOM
        renderResults(data.query.search);

    } catch (error) {
        console.error('Search error:', error);
        searchResultElem.innerHTML = `<p class="error">Something went wrong while searching.</p>`;
    }
};

const renderResults = (results) => {
    // Clear previous results
    searchResultElem.innerHTML = '';

    if (!results || results.length === 0) {
        searchResultElem.innerHTML = '<p>No results found.</p>';
        return;
    }

    // Map results to HTML templates
    const resultItems = results.map(item => {
        const pageUrl = `https://en.wikipedia.org/?curid=${item.pageid}`;
        return `
            <article class="result-item">
                <h2 class="result-title">
                    <a href="${pageUrl}" target="_blank" rel="noopener noreferrer">${item.title}</a>
                </h2>
                <a href="${pageUrl}" class="result-link" target="_blank" rel="noopener noreferrer">${pageUrl}</a>
                <p class="result-snippet">${item.snippet}...</p>
            </article>
        `;
    }).join('');

    searchResultElem.innerHTML = resultItems;
};