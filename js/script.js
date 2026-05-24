// additional code here
// toggle dark mode and horrible colors mode

const themeBtn = document.querySelector("#theme-toggle")
const badBtn = document.querySelector("#mode-toggle")
const hamburger = document.querySelector(".hamburger")
const mobileNav = document.querySelector(".mobile-nav")

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

themeBtn.addEventListener("keydown", (e)=>{
    if((e.key === "d" || e.key === "D")){
        toggleDarkMode()
    }
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

themeBtn.addEventListener("keydown", (e)=>{
    if((e.key === "b" || e.key === "B")){
        toggleBadMode()
    }
})

hamburger.addEventListener("click",()=>{
    mobileNav.classList.toggle("active")
})