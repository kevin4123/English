const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('results');

console.log(searchInput);
console.log(resultsContainer);

searchInput.addEventListener('input', function() {
  const query = this.value.toLowerCase().trim();

  // console.log('query', query);

  if (query === '') {
    resultsContainer.innerHTML = '';
    return;
  }

  const filteredEntries =
      wordEntries.filter(entry => entry.word.toLowerCase().includes(query));

  displayResults(filteredEntries);
});

function displayResults(results) {
  // console.log('results', results);

  resultsContainer.innerHTML = '';

  if (results.length === 0) {
    resultsContainer.innerHTML = `
      <div class="no-results">
        No matching entries found 🤔
      </div>`;
    return;
  }

  let html = '<ul class="results-list">';

  results.forEach(entry => {
    html += `
      <li class="result-item">
        <a href="${entry.path}" class="result-link">
          <span class="result-word">${entry.word}</span>
        </a>
      </li>`;
  });

  html += '</ul>';

  resultsContainer.innerHTML = html;
}
