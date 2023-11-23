const search_bar_url = window.location.search;
const param = new URLSearchParams(search_bar_url);

const type = param.get('type');
const name = param.get('name');
console.log(name);

const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzFjNjc3MTI5Y2I1ZGQxNzM4OTRmNzQyZmNjNmMwZCIsInN1YiI6IjY1NWMzNjg4ZDRmZTA0MDBjNDI1N2QzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XM1rkMipIifqel9k6Q1xruUwaYDD7oy2g8ylt9kgkTw'
    }
  };
  
if(type == "name"){
    fetch(`https://api.themoviedb.org/3/search/multi?query=${name}&include_adult=false&language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => {
        ShowMovies(response);
    })
    .catch(err => console.error(err));
}
if(type == "genre"){
    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc&with_genres=${name}`, options)
    .then(response => response.json())
    .then(response => {
        ShowMovies(response);
    })
    .catch(err => console.error(err));
}


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
    window.location.replace(`search.html?name=${value}&type=name`)
}
function SearchByGenre(id){
    // let value = document.getElementById("search-content").value;
    window.location.replace(`search.html?name=${id}&type=genre`);
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
    for(i in response.results) console.log(response.results[i].first_air_date)
    ft_movies = response.results;
    let ft_movies_content = ''
    for(ele in ft_movies){
        if(ft_movies[ele].poster_path != null){
            title = ft_movies[ele].title;
            date = ft_movies[ele].release_date;
            if(ft_movies[ele].media_type == "tv"){
                title = ft_movies[ele].name;
                date = ft_movies[ele].first_air_date;
            }
            ft_movies_content += `
            <div class="film" id="${ft_movies[ele].id}">
                <a href="film.html?id=${ft_movies[ele].id}">
                    <div class="thumbnail" style="background-image: url('https://image.tmdb.org/t/p/w500${ft_movies[ele].poster_path}');background-size: contain;"></div>
                    <div class="film-des-show">
                        <p class="title">${title}</p>
                        <div class="other">${date}</div>
                    </div>
                </a>
            </div>`;
        }
    }
    document.getElementById("main").innerHTML = ft_movies_content
    console.log(ft_movies);
}