// additional code here
// toggle dark mode and horrible colors mode

const themeBtn = document.querySelector("#theme-toggle")
const badBtn = document.querySelector("#mode-toggle")
const hamburger = document.querySelector(".hamburger")
const mobileNav = document.querySelector(".mobile-nav")
const formClass = document.querySelector("#form-class")
const feedback = document.querySelector(".form-feedback")

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

formClass.addEventListener("submit",(e)=>{
    e.preventDefault()
    const username = document.querySelector("#username").value.trim()
    const email = document.querySelector("#email").value.trim()
    const phone = document.querySelector("#phone").value.trim()
    const message = document.querySelector("#message").value.trim()
    
    if(username.length === 0){
        feedback.textContent = "❌ Please Enter Your Name!"
        feedback.style.color = "#E74C3C"
        return
    }

    if(!email.includes("@")){
        feedback.textContent = "❌ Please Enter a Valid Email"
        feedback.style.color = "#E74C3C"
        return
    }

    if(!phone){
        feedback.textContent = "❌ Please Enter a Phone Number"
        feedback.style.color = "#E74C3C"
        return
    }

    if(message.length < 10){
        feedback.textContent = "❌ Message must be longer than 10 characters "
        feedback.style.color = "#E74C3C"
        return
    }


    feedback.textContent = `✅ Thanks, "${username}! We got your message.`
    feedback.style.color = "#2ECC71"
    formClass.reset();

})