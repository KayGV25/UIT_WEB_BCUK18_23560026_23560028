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