const baseUrl = 'https://api.github.com'

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';

  fetch(baseUrl + `/repos/${repo}/forks`, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json())
    .then(json => showResults(json))

}

function showResults(json) {
  const forkHtml = json.html_url
  const forkLink = document.createElement('a')
  forkLink.href = forkHtml
  forkLink.innerText = "Link to New Fork"
  document.querySelector('#results').appendChild(forkLink)
}

function createIssue() {
  const repo = 'aaj3f/js-ajax-fetch-lab';
  const postData = {
    title: document.querySelector('#title').value,
    body: document.querySelector('#body').value
  }

  fetch(baseUrl + `/repos/${repo}/issues`, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => getIssues())
}

function getIssues() {
  const repo = 'aaj3f/js-ajax-fetch-lab'

  fetch(baseUrl + `/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(resp => resp.json())
    .then(json => console.log(json))
}
