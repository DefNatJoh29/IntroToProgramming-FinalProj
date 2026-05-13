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



