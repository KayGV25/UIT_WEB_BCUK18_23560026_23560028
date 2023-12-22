const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlYzFjNjc3MTI5Y2I1ZGQxNzM4OTRmNzQyZmNjNmMwZCIsInN1YiI6IjY1NWMzNjg4ZDRmZTA0MDBjNDI1N2QzYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XM1rkMipIifqel9k6Q1xruUwaYDD7oy2g8ylt9kgkTw'
    }
  };

//   uid = window.localStorage.getItem('uid');
//   if(uid != '0') document.getElementById('Li_SoVal').innerText = 'Sign out';
//   else document.getElementById('Li_SoVal').innerText = 'Sign in'; 
// window.localStorage.setItem('uid', '1')
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
    uid = window.localStorage.getItem('uid');
    if(uid == null){
        document.getElementById('Li_SoVal').innerText = 'Sign in'
    }
    else{
        document.getElementById('Li_SoVal').innerText = 'Sign out'
    }
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
// function loginsignout(){
//     uid = window.localStorage.getItem('uid');
//     decider = document.getElementById('Li_SoVal').innerText;
//     console.log(decider);
//     if(decider == 'Sign out'){
//         window.localStorage.setItem('uid','0');
//         document.getElementById('Li_SoVal').innerText = 'Sign in';
//         console.log(document.getElementById('Li_SoVal').innerText);
//     }
//     else{
//         window.localStorage.setItem('uid','1');
//         window.location.reload();
//         // window.location.href = '/login';
//     }
// }
// function CheckifLogin(){
//     uid = window.localStorage.getItem('uid');
//     if(uid != '0'){
//         window.location.href = 'upgrade-plan';
//     }
//     else alert("Please Login");
// }