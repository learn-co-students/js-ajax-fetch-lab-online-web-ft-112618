function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  const url = `https://api.github.com/repos/${repo}/forks`
  fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(response => response.json())
  .then(repositories => {
    showResults(repositories)
  })
}


function showResults(json) {
  document.getElementById('results').innerHTML = `<a href=${json.html_url}> Go to - ${json.name}</a>`
}

function createIssue() {
  const username = 'NInman112'
  const repo = `${username}/js-ajax-fetch-lab`
  const url = `https://api.github.com/repos/${repo}/issues`
  const postData = {
    title: document.getElementById('title').value,
    body: issueBody = document.getElementById('body').value
  }
  // const issueTitle = document.getElementById('title').value
  // const issueBody = document.getElementById('body').value
  fetch(url, {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
  .then(response => response.json())
  .then(json => getIssues());
}

function getIssues() {
  const username = 'NInman112'
  const repo = `${username}/js-ajax-fetch-lab`;
  const url = `https://api.github.com/repos/${repo}/issues`;
  fetch(url, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(response => response.json())
    .then(json => showIssues(json));
}

function showIssues(json) {
  showIssues = document.getElementById('issues')
  for (var i = 0, len = json.length; i < len; i++) {
    showIssues.innerHTML +=
    `<p>${json[i].body}</p>` +
    `<p>${json[i].user.log}</p>`
  }
}
