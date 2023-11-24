const search_bar_url = window.location.search;
const param = new URLSearchParams(search_bar_url);

const id = param.get('id');
console.log(id);

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzFjNjc3MTI5Y2I1ZGQxNzM4OTRmNzQyZmNjNmMwZCIsInN1YiI6IjY1NWMzNjg4ZDRmZTA0MDBjNDI1N2QzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XM1rkMipIifqel9k6Q1xruUwaYDD7oy2g8ylt9kgkTw'
    }
  };
  
  fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, options)
    .then(response => response.json())
    .then(response => {
        ShowMovies(response);
        console.log(response);
    })
    .catch(err => console.error(err));



//Press enter to search
document.addEventListener("keydown",function(key){
    if(document.getElementById("search-content").value != ''){
        if(key.key == "Enter"){
            Search();
        }
    }
})
// Search db for movies -> return none page if none is found
function Search(){
    let value = document.getElementById("search-content").value;
    alert(value);
}
// function to activate side menu
function sidebar(){
    var bg = document.getElementById("dark-bg");
    var sidebar = document.getElementById("side-menu");
    bg.classList.toggle("hide");
    sidebar.classList.toggle("hide");
}
function ShowContent(id){
    var drop = document.getElementById(id);
    drop.classList.toggle("drop");
}
function ShowMovies(response){
    let content = `        
    <div class="show-container">
        <div class="poster" id="poster">
            <img src="https://image.tmdb.org/t/p/w500${response.poster_path}" alt="">
        </div>
        <div class="show-des">
            <h1 class="movie-name" id="movie-name">${response.title}</h1>
            <p class="movie-des" id="movie-des">${response.overview}</p>
            <div class="icon-container">
                <span class="material-symbols-outlined" id="favorite" onclick="add_to_fav()">favorite</span>
                <div class="Upgrd-plan"><p class="film-btn">Watch now</p></div>
                <div class="Upgrd-plan"><p class="film-btn" onclick="add_to_wl()">Watch later</p></div>
            </div>
        </div>
    </div>`;
    document.getElementById("main").innerHTML = content;
}

function add_to_wl(){
    
}