function fetchFavs(){
    const query = searchInput.value.trim()

    if(query === "")
    resultsContainer.innerHTML = '<div class = "empty-state"> You need to put something in the query </div>'
return
}
resultsContainer.innerHTML = '<div class = "empty-state"> Loading... </div>'