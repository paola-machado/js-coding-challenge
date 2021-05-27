const APIURL = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");
const search_button = document.getElementById("search_button");

getUser("paola-machado");

async function getUser(username) {
  const response = await fetch(APIURL + username);
  const responseData = await response.json();

  createUserCard(responseData);
  getRepos(username);
}

async function getRepos(username) {
  const response = await fetch(APIURL + username + "/repos");
  const responseData = await response.json();

  addReposToCard(responseData);
}

function addReposToCard(repos) {
  const reposElement = document.getElementById("repos");

  repos
    .sort((a, b) => b.stargazers_count - a.stargazers_count)
    .slice(0, 10)
    .forEach((repo) => {
      const repoElement = document.createElement("a");
      repoElement.classList.add("repo");

      repoElement.href = repo.html_url;
      repoElement.target = "_blank";
      repoElement.innerText = repo.name;

      reposElement.appendChild(repoElement);
    });
}

function createUserCard(user) {
  const cardHTML = `
    <div class="card">
        <div class="image-container">
          <img class="avatar" src="${user.avatar_url}" alt="${user.name}" />
        </div>
        <div class="user-info">
          <h2>${user.name}</h2>
          <p>${user.bio}</p>
          <ul class="info">
            <li>${user.followers} followers</li>
            <li>${user.following} following</li>
            <li>${user.public_repos} repos</li>
          </ul>
          <div id="repos"></div>
        </div>
    </div>
  `;

  main.innerHTML = cardHTML;
}

search.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});

search_button.addEventListener("click", (e) => {
  e.preventDefault();

  const user = search.value;

  if (user) {
    getUser(user);
    search.value = "";
  }
});
