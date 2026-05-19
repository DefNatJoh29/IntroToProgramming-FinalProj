// Event listener park

// click event on remove button
// click event on submit button
// keydown (enter key) event on search even
// ========== EVENT LISTENERS ==========
searchBtn.addEventListener("click", fetchFavs);

searchInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        fetchFavs();
    }
});

//start the app: load saved watchlist
loadWatchlist()