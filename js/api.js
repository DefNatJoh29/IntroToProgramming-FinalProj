function fetchFavs(){
    const query = searchInput.value.trim()

    if(query === ""){
        resultsContainer.innerHTML = '<div class = "empty-state"> You need to put something in the query </div>'
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
        displayShows(data);
    });
}

    

