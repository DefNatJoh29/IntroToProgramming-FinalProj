const searchInput = document.querySelector("#search-input")
const searchBtn = document.querySelector("#search-btn")
const resultsContainer = document.querySelector("#results")
const favListContainer = document.querySelector("#favlist-container")
const removeBtn = document.querySelector("#clear-all-btn")
const favListCount = document.querySelector("#favlist-count")

let favList = []
let currentResults = []

function loadfavlist() {
    const saved = localStorage.getItem("tennisFavlist")

    if (saved !== null) {
        favList = JSON.parse(saved)
    }

    renderfavList()
    updatefavListCount()
}

function savefavlist() {
    localStorage.setItem(
        "tennisFavlist",
        JSON.stringify(favList)
    )

    updatefavListCount()
}

function fetchFavs() {

    const query = searchInput.value.trim()

    if (query === "") {
        resultsContainer.innerHTML =
            '<div class="empty-state">Please enter a tennis player name!</div>'
        return
    }

    resultsContainer.innerHTML =
        '<div class="empty-state">Loading...</div>'

    const url =
        "https://www.thesportsdb.com/api/v1/json/3/searchplayers.php?p=" + query

    fetch(url)
        .then(function(response) {
            return response.json()
        })
        .then(function(data) {

            if (!data.player) {
                resultsContainer.innerHTML =
                    '<div class="empty-state">No players found!</div>'
                return
            }

            const tennisPlayers = data.player.filter(function(player) {
                return player.strSport === "Tennis"
            })

            currentResults = tennisPlayers

            displayPlayers(tennisPlayers)
        })
}

function displayPlayers(data) {

    resultsContainer.innerHTML = ""

    if (data.length === 0) {
        resultsContainer.innerHTML =
            '<div class="empty-state">No tennis players found!</div>'
        return
    }

    for (let i = 0; i < data.length; i++) {

        const player = data[i]

        let imageUrl =
            "https://placehold.co/300x200?text=No+Image"

        if (player.strThumb) {
            imageUrl = player.strThumb
        }

        let isSaved = false

        for (let j = 0; j < favList.length; j++) {

            if (favList[j].id === player.idPlayer) {
                isSaved = true
                break
            }
        }

        const heartIcon = isSaved
            ? "❤️ Saved"
            : "🤍 Save"

        const card = document.createElement("div")

        card.className = "show-card"

        card.innerHTML = `
            <img src="${imageUrl}" alt="${player.strPlayer}">
            
            <div class="info">
                <h3>${player.strPlayer}</h3>
                <p>${player.strNationality}</p>
                <button class="heart-btn">${heartIcon}</button>
            </div>
        `

        resultsContainer.appendChild(card)

        const heartBtn = card.querySelector(".heart-btn")

        heartBtn.addEventListener("click", function() {
            togglefavList(player)
        })
    }
}

function renderfavList() {

    if (favList.length === 0) {

        favListContainer.innerHTML = `
            <div class="empty-state">
                No saved players yet! Click ❤️ to add!
            </div>
        `

        return
    }

    favListContainer.innerHTML = ""

    for (let i = 0; i < favList.length; i++) {

        const player = favList[i]

        let imageUrl =
            player.image ||
            "https://placehold.co/300x200?text=No+Image"

        const card = document.createElement("div")

        card.className = "watchlist-card"

        card.innerHTML = `
            <img src="${imageUrl}" alt="${player.name}">
            
            <div class="info">
                <h3>${player.name}</h3>
                <button class="remove-btn">
                    ❌ Remove
                </button>
            </div>
        `

        favListContainer.appendChild(card)

        const removeBtn = card.querySelector(".remove-btn")

        removeBtn.addEventListener("click", function() {
            togglefavList(player)
        })
    }
}

function togglefavList(player) {

    let found = false

    for (let i = 0; i < favList.length; i++) {

        if (
            favList[i].id === player.idPlayer ||
            favList[i].id === player.id
        ) {

            found = true
            break
        }
    }

    if (found) {

        const newfavList = []

        for (let i = 0; i < favList.length; i++) {

            if (
                favList[i].id !== player.idPlayer &&
                favList[i].id !== player.id
            ) {
                newfavList.push(favList[i])
            }
        }

        favList = newfavList

    } else {

        let imageUrl = null

        if (player.strThumb) {
            imageUrl = player.strThumb
        }

        favList.push({
            id: player.idPlayer,
            name: player.strPlayer,
            image: imageUrl
        })
    }

    savefavlist()

    renderfavList()

    displayPlayers(currentResults)
}

function updatefavListCount() {

    const count = favList.length

    let word =
        (count === 1)
        ? "player"
        : "players"

    favListCount.textContent =
        `🎾 You have ${count} saved ${word}`
}

function clearAllfavList() {

    if (favList.length === 0) {
        return
    }

    const confirmed = confirm(
        `Remove all ${favList.length} saved players?`
    )

    if (confirmed) {

        favList = []

        savefavlist()

        renderfavList()

        if (currentResults.length > 0) {
            displayPlayers(currentResults)
        }
    }
}



// Event listener park

// click event on remove button
// click event on submit button
// keydown (enter key) event on search even

// ========== EVENT LISTENERS ==========

searchBtn.addEventListener("click", fetchFavs)

searchInput.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        fetchFavs()
    }
})

removeBtn.addEventListener("click", clearAllfavList)

loadfavlist()

