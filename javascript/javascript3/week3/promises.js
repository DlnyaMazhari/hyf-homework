"use strict";
let promise1 = fetch(
  "https://api.github.com/search/repositories?q=user:cph-kiwi"
);
let promise2 = fetch(
  " https://api.github.com/search/repositories?q=user:qamarfj"
);
let promise3 = fetch(
  "https://api.github.com/search/repositories?q=user:sandhana14"
);
let promise4 = fetch(
  "https://api.github.com/search/repositories?q=user:aijazraja"
);
let promise5 = fetch(
  "https://api.github.com/search/repositories?q=user:sofiiadidovych"
);
let promise6 = fetch(
  "https://api.github.com/search/repositories?q=user:Enqira"
);
let promise7 = fetch(
  "https://api.github.com/search/repositories?q=user:TITHI1244"
);

Promise.all([
  promise1,
  promise2,
  promise3,
  promise4,
  promise5,
  promise6,
  promise7,
])
  .then((responses) => responses.forEach((response) => render(response.json())))
  //   .then((repos) => repos.forEach((data) => render(data)))
  .catch((error) => console.log("error"));

function render(prom) {
  prom.then((data) => {
    console.log(data);
    let li = document.createElement("li");
    let ul = document.getElementById("ul");
    let h2 = document.createElement("h2");
    h2.innerHTML = `${data.items[0].owner.login}'s Repositores`;

    li.textContent = `FullName:${data.items[0].full_name} 
         Owner:${data.items[0].owner.login} 
         ReposUrl:${data.items[0].owner.repos_url}`;
    ul.appendChild(h2);
    ul.appendChild(li);
  });
}
