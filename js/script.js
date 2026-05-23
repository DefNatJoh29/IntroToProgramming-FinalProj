// additional code here
// toggle dark mode and horrible colors mode

themeBtn = document.querySelector("#theme-toggle")

function toggleDarkMode(){
    document.body.classList.toggle("dark-mode")

    if (document.body.classList.contains('dark-mode')){
        themeBtn.textContent = "Light Mode"
    }else {
        themeBtn.textContent = "Dark Mode"
    }
}

themeBtn.addEventListener("click",(e)=>{
    toggleDarkMode(e)
})