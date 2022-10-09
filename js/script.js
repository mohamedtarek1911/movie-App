// let myHttp = new XMLHttpRequest();
// myHttp.open(
//   "GET",
//   `https://api.themoviedb.org/3/trending/all/day?api_key=713e5b505cc52f5aa68161a6f9c471c1`
// );
// myHttp.send();

// let posts = [];
// myHttp.addEventListener("readystatechange", function () {
//   if (myHttp.readyState == 4 && myHttp.status == 200) {
//     posts = JSON.parse(myHttp.response).results;
//     console.log(posts);
//     displayData(posts);
//   }
// });

// function displayData(list) {
//   console.log(posts);
//   let temple = ``;
//   for (let i = 0; i < list.length; i++) {
//     temple += `
//     <div class="col">
//           <div class="card h-100 position-relative overflow-hidden">
//             <img
//               src="https://image.tmdb.org/t/p/w500${list[i].poster_path}"
//               class="card-img-top"
//               alt="..."
//             />
//             <div class="card-body position-absolute bg-light d-flex">
//               <h5 class="card-title text-dark">OverView</h5>
//               <p class="card-text text-dark lead">
//                 ${list[i].overview}
//               </p>
//             </div>
//             <div
//               class="card-footer d-flex flex-row justify-content-between align-content-center h-25"
//             >
//               <small class="text-info">${
//                 list[i].title == undefined
//                   ? ` ${list[i].name}`
//                   : `${list[i].title}`
//               }</small>
//               <p class="lead">${list[i].vote_average.toFixed(1)}</p>
//             </div>
//           </div>
//         </div>`;
//   }
//   document.querySelector("#showData").innerHTML = temple;
// }

// let search = document.querySelector("#seaching-input");

// function searching(term) {
//   let searchingTerm = [];
//   console.log(posts);
//   for (let i = 0; i < posts.length; i++) {
//     if (
//       posts[i].name?.toLowerCase().includes(term.toLowerCase()) == true ||
//       posts[i].title?.toLowerCase().includes(term.toLowerCase()) == true
//     ) {
//       searchingTerm.push(posts[i]);
//     }
//   }
//   displayData(searchingTerm);
// }

// search.addEventListener("keydown", function () {
//   searching(this.value);
// });

// console.log(posts);

"use strict";

let generes = [
  {
    id: 28,
    name: "Action",
  },
  {
    id: 12,
    name: "Adventure",
  },
  {
    id: 16,
    name: "Animation",
  },
  {
    id: 35,
    name: "Comedy",
  },
  {
    id: 80,
    name: "Crime",
  },
  {
    id: 99,
    name: "Documentary",
  },
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10751,
    name: "Family",
  },
  {
    id: 14,
    name: "Fantasy",
  },
  {
    id: 36,
    name: "History",
  },
  {
    id: 27,
    name: "Horror",
  },
  {
    id: 10402,
    name: "Music",
  },
  {
    id: 9648,
    name: "Mystery",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 878,
    name: "Science Fiction",
  },
  {
    id: 10770,
    name: "TV Movie",
  },
  {
    id: 53,
    name: "Thriller",
  },
  {
    id: 10752,
    name: "War",
  },
  {
    id: 37,
    name: "Western",
  },
];

let posts = [];
async function start() {
  let result = await fetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=713e5b505cc52f5aa68161a6f9c471c1`
  );

  let finalResult = await result.json();
  posts = finalResult.results;
  console.log(finalResult);
  displayData(posts);
  console.log(posts);
}

start();
console.log(posts);

function displayData(list) {
  console.log(posts);
  let temple = ``;
  for (let i = 0; i < list.length; i++) {
    temple += `
      <div class="col">
            <div class="card h-100 position-relative overflow-hidden">
              <img
                src="https://image.tmdb.org/t/p/w500${
                  list[i].poster_path == null
                    ? `../imgs/download.png`
                    : `${list[i].poster_path}`
                }"
                class="card-img-top"
                alt="..."
              />
              <div class="card-body position-absolute bg-light d-flex">
                <h5 class="card-title text-dark">OverView</h5>
                <p class="card-text text-dark lead">
                  ${list[i].overview}
                </p>
              </div>
              <div
                class="card-footer d-flex flex-row justify-content-between align-content-center h-25"
              >
                <small class="text-info">${
                  list[i].title == undefined
                    ? ` ${list[i].name}`
                    : `${list[i].title}`
                }</small>
                <p class="lead">${list[i].vote_average.toFixed(1)}</p>
              </div>
            </div>
          </div>`;
  }
  document.querySelector("#showData").innerHTML = temple;
}

let search = document.querySelector("#seaching-input");

function searching(term) {
  let searchingTerm = [];
  console.log(posts);
  for (let i = 0; i < posts.length; i++) {
    if (
      posts[i].name?.toLowerCase().includes(term.toLowerCase()) == true ||
      posts[i].title?.toLowerCase().includes(term.toLowerCase()) == true
    ) {
      searchingTerm.push(posts[i]);
    }
  }
  displayData(searchingTerm);
}

search.addEventListener("keydown", function () {
  searching(this.value);
});

async function searchi(term) {
  let searchingTerm = [];
  let searchingTerm2 = [];

  let result = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=b743efb40c92290c908bcb203dd71625&query=${term}`
  );
  // let result = await fetch(
  //   `https://api.themoviedb.org/3/discover/movie?api_key=b743efb40c92290c908bcb203dd71625&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
  // );
  let finalResult = await result.json();
  searchingTerm = finalResult.results;
  console.log(searchingTerm);
  displayData(searchingTerm);

  for (let i = 0; i < searchingTerm.length; i++) {
    if (
      searchingTerm[i].name?.toLowerCase().includes(term.toLowerCase()) ==
        true ||
      searchingTerm[i].title?.toLowerCase().includes(term.toLowerCase()) == true
    ) {
      searchingTerm2.push(searchingTerm[i]);
    }
  }
  displayData(searchingTerm2);
}

search.addEventListener("keydown", function () {
  searching(this.value);
  searchi(this.value);
  if (search.valu == null || search.value == "") {
    start();
  }
});

let tagsEl = document.querySelector("#tags");
// console.log(tagsEl);

function getGenere() {
  tagsEl.innerHTML = "";
  let selectedGenre = [];
  generes.forEach((genere) => {
    let t = document.createElement("div");

    t.classList.add("tag");
    t.id = genere.id;
    t.innerText = genere.name;
    tagsEl.append(t);
    t.addEventListener("click", function () {
      if (selectedGenre.length == 0) {
        selectedGenre.push(genere.id);
      } else {
        if (selectedGenre.includes(genere.id)) {
          selectedGenre.forEach((id, idx) => {
            if (id == genere.id) {
              selectedGenre.splice(idx, 1);
            }
          });
        } else {
          selectedGenre.push(genere.id);
        }
      }

      console.log(selectedGenre);
      getFilterMovie(selectedGenre);
      // getFilterMovie1();
    });
  });
}
getGenere();

async function getFilterMovie(arr) {
  let filtarArr = [];
  // let result = await fetch(
  //   `https://api.themoviedb.org/3/discover/movie?api_key=b743efb40c92290c908bcb203dd71625&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
  // );
  let result = await fetch(
    `https://api.themoviedb.org/3/discover/movie?&sort_by=popularity.desc&api_key=b743efb40c92290c908bcb203dd71625&with_genres=${arr.join(
      ","
    )}`
  );

  let finalResult = await result.json();
  filtarArr = finalResult.results;
  console.log(finalResult);
  console.log(filtarArr);

  displayData(filtarArr);
}

let logo = document.querySelector(".navbar-brand");
// console.log(logo);
logo.addEventListener("click", function () {
  start();
});
