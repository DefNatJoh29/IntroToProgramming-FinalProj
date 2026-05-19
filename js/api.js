

// fetching the stuff

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
        displayFavs(data);
    });
}

function displayFavs(data){
    resultsContainer.innerHTML = ""

    if(data.length === 0){
        resultsContainer.innerHTML = '<div class="empty-state">No shows found. Try again!</div>';
        return;
    }
}

// localstorage stuff

function renderFavs(){
    
}
    

