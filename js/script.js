// additional code here
// toggle dark mode and horrible colors mode

themeBtn = document.querySelector("#theme-toggle")
badBtn = document.querySelector("#mode-toggle")

function toggleDarkMode(){
    document.body.classList.remove("bad-mode")
    document.body.classList.toggle("dark-mode")

    if (document.body.classList.contains('dark-mode')){
        themeBtn.textContent = "Light Mode"
    } else {
        themeBtn.textContent = "Dark Mode"
    }
}

themeBtn.addEventListener("click",(e)=>{
    toggleDarkMode(e)
})


function toggleBadMode(){
    document.body.classList.remove("dark-mode")

    document.body.classList.toggle("bad-mode")

    if(document.body.classList.contains('bad-mode')){
        badBtn.textContent = "Good Colors Mode"
    } else {
        badBtn.textContent = "Bad Colors Mode"
    }
}

badBtn.addEventListener("click",(e)=>{
    toggleBadMode(e)
})