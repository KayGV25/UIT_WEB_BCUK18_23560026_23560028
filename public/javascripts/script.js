const user = window.localStorage.getItem("user");

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzFjNjc3MTI5Y2I1ZGQxNzM4OTRmNzQyZmNjNmMwZCIsInN1YiI6IjY1NWMzNjg4ZDRmZTA0MDBjNDI1N2QzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XM1rkMipIifqel9k6Q1xruUwaYDD7oy2g8ylt9kgkTw'
    }
  };


// Search db for movies -> return none page if none is found
function Search(){
    let value = document.getElementById("search-content").value;
    window.location.replace(`/search?name=${value}&type=name`)
}
function SearchByGenre(id){
    // let value = document.getElementById("search-content").value;
    window.location.replace(`/search?name=${id}&type=genre`);
}
// function to activate side menu
function sidebar(){
    var bg = document.getElementById("dark-bg");
    var sidebar = document.getElementById("side-menu");
    bg.classList.toggle("hide");
    sidebar.classList.toggle("hide");
}
// general function to show ddrop down content (not show on hover)
function ShowContent(id){
    var drop = document.getElementById(id);
    drop.classList.toggle("drop");
}
//Press enter to search
document.addEventListener("keydown",function(key){
    if(document.getElementById("search-content").value != ''){
        if(key.key == "Enter"){
            Search();
        }
    }
})
/* Fetch Fav data from DB */
fetch('add_to_fav/data', {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        user: user
    }),
    })
  .then(response => response.json())
  .then(response => {
    ShowFav(response,"fav-movies")
  })
  .catch(error => console.error(error));
/* Show Fav */
function ShowFav(response,id){
    fav_movies = response;
    let fav_movies_content = ''
    for(ele in fav_movies){
        fav_movies_content += `
        <div class="film" id="${fav_movies[ele].movieId}">
            <a href="/film?id=${fav_movies[ele].movieId}">
                <div class="thumbnail" style="background-image: url('https://image.tmdb.org/t/p/w500${fav_movies[ele].urlImage}');background-size: contain;"></div>
                <div class="film-des-show">
                    <p class="title">${fav_movies[ele].filmName}</p>
                    <div class="other">${fav_movies[ele].releaseDate}</div>
                </div>
            </a>
        </div>`;
    }
    console.log(fav_movies);
    document.getElementById(id).innerHTML += fav_movies_content;
}

// show featured movie
function ShowMovies(response,id){
    ft_movies = response.results;
    let ft_movies_content = ''
    for(ele in ft_movies){
        ft_movies_content += `
        <div class="film" id="${ft_movies[ele].id}">
            <a href="/film?id=${ft_movies[ele].id}">
                <div class="thumbnail" style="background-image: url('https://image.tmdb.org/t/p/w500${ft_movies[ele].poster_path}');background-size: contain;"></div>
                <div class="film-des-show">
                    <p class="title">${ft_movies[ele].title}</p>
                    <div class="other">${ft_movies[ele].release_date}</div>
                </div>
            </a>
        </div>`;
    }
    console.log(ft_movies);
    document.getElementById(id).innerHTML += ft_movies_content;
}

for(i=1; i<=3;i++){
    fetch(`https://api.themoviedb.org/3/movie/popular?language=en-US&page=${i}`, options)
    .then(response => response.json())
    .then(response => {
        ShowMovies(response,"ft-movies");
    })
    .catch(err => console.error(err));
}

const search_bar_url = window.location.search;
const param = new URLSearchParams(search_bar_url);
// resultCode=0&message=Successful
const Rc = param.get('resultCode');
const Msg = param.get('message');
if(Rc == '0' && Msg == 'Successful.'){
    AddPaymentToDB(uid);
}
else{
    // window.location.replace('/index');
    console.log(uid);
}
function AddPaymentToDB(id){
    console.log(id);
    window.location.replace('/index');
}
function loginsignout(){
    window.localStorage.clear();
    fetch('/logout', {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      }).then(() => {
        window.location.reload();
      })
}