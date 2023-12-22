function ShowGenre(response){
    let genre_content = '';
    let genres = response.genres;
    for(ele in genres){
        genre_content += `
        <a id="${genres[ele].id}" onclick="SearchByGenre(id)">${genres[ele].name}</a>`;
    }
    document.getElementById("genre").innerHTML += genre_content;
}
fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(response => response.json())
    .then(response => {
        console.log(response);
        ShowGenre(response);
    })
    .catch(err => console.error(err));