selectors

const searchInput = document.querySelector("#search-input")
const searchBtn = document.querySelector("#search-btn")
const resultsContainer = document.querySelector("#results")
const favListContainer = document.querySelector("favlist-container")
const removeBtn = document.querySelector("#clear-all-btn")
const favListCount = document.querySelector("#favlist-count")

// global data and stuff


// set up the local storage
let favList = []
let currentResults = []

function loadfavlist() {
    const saved = localStorage.getItem("tennisFavlist")
    if(saved !== null){
        watchlist = JSON.parse(saved)
    }
    renderfavList()
    updatefavListCount()
}

function savefavlist(){
    localStorage.setItem("tennisfavlist", JSON.stringify(favList))
    updatefavListCount()
}






//  event listeners


searchBtn.addEventListener("click", fetchFavs);

searchInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        fetchFavs();
    }
});

//start the app: load saved watchlist
loadWatchlist()

// fetching the stuff

function fetchFavs(){
    const query = searchInput.value.trim()

    if(query === ""){
        resultsContainer.innerHTML = '<div class = "empty-state"> Loading.... </div>'
        return
    }
    resultsContainer.innerHTML = '<div class = "empty-state"> Loading... </div>'
    
    const url = "https://www.thesportsdb.com/api/v1/json/123"
    
    fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        currentResults = data
        displayFavs(data);
    });
}

function displayFavs(data){
    resultsContainer.innerHTML = ""

    if(data.length === 0){
        resultsContainer.innerHTML = '<div class="empty-state">No favorites found. Try again!</div>';
        return;
    }

    for(let i=0; i < data.length; i++){
        const fav = data[i].show
        let imageUrl = "https://via.placeholder.com/300x200?text=No+Image";
        if(fav.image && fav.image.medium){
            imageUrl = image.medium
        }
        
        let isSaved = false
        for(let z=0; z < favList.length; z++){
            if(favList[j].id === fav.id){
                isSaved = true
                break
            }
        }

        const heartIcon = isSaved? "❤️Saved":"❤️Save"
        const card = document.createElement("div")
        card.className = "fav-card"
        card.innerHTML = `
            <img src="${imageUrl}" alt="${fav.name}">
            <div class="info">
                <h3>${fav.name}</h3>
                <button class="heart-btn"> ${heartIcon} </button>
            </div>`
    }
    resultsContainer.appendChild(card)
    const heartBtn = document.querySelector(".heart-btn")
    heartBtn.addEventListener("click",(e)=>{
        toggleFavList(fav)
    })
}

// localstorage stuff

function renderFavs(){
    if(!favList){
        resultsContainer.innerHTML = `
        <div class="empty-state"> No saved shows yet! Click 💓to add! </div>
        `
        return
    }

    favListContainer.innerHTML = ""
    
}
    

