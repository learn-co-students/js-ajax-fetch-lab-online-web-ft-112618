const BASE_URL = 'https://api.github.com';

const postData = {
  body: 'Great stuff'
};

// fetch(
//   'https://github.com/JoeQuattrone/j_travel/commits/master',
//   {
//     method: 'POST',
//     body: JSON.stringify(postData),
//     headers: {
//       Authorization: `token ${token}`
//     }
//   }
// ).then(res => console.log(res));

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}

function forkRepo() {
  const repo = 'learn-co-curriculum/js-ajax-fetch-lab';
  link = BASE_URL +"/repos/" + repo + "/forks"
  fetch(link,
  {
    method: 'POST',
    headers: {
      Authorization: `token ${getToken()}`
    }
  })
    .then(res => res.json())
    .then(json => showResults(json))
}

function showResults(json) {
  // debugger
  url = json.html_url
  document.querySelector("#results").innerHTML = `<a href="${url}">${json.name}</a>`
  //use this function to display the results from forking via the API
}

function createIssue() {
  const link = `${BASE_URL}/repos/JoeQuattrone/js-ajax-fetch-lab/issues`
  const title1 = document.querySelector('#title').value
  const body1 = document.querySelector('#body').value
  const postData = {
    title: title1,
    body: body1
  }

  fetch(link,
    {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(res => res.json())
    .then(json => getIssues())
}

function getIssues() {
  const link = `${BASE_URL}/repos/JoeQuattrone/js-ajax-fetch-lab/issues`
  fetch(link,
    {
      method: 'GET',
      headers: {
        Authorization: `token ${getToken()}`
      }
    })
    .then(res => res.json())
    .then(json => json.map(issue =>
      document.querySelector("#issues").append(document.createElement('h3').innerHTML = issue.body)
    ).join(""))
  //once an issue is submitted, fetch all open issues to see the issues you are creating
}
