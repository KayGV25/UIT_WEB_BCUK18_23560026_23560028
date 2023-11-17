function Search(){
    let value = document.getElementById("search-content").value;
    alert(value);
}
function sidebar(){
    var bg = document.getElementById("dark-bg");
    var sidebar = document.getElementById("side-menu");
    bg.classList.toggle("hide");
    sidebar.classList.toggle("hide");
}
function ShowContent(){
    var drop = document.getElementById("drop");
    drop.classList.toggle("drop");
}

document.addEventListener("keydown",function(key){
    if(document.getElementById("search-content").value != ''){
        if(key.key == "Enter"){
            Search();
        }
    }
})