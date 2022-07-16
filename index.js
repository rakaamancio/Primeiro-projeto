const navbar = document.querySelector('.navbar')
const allli = document.querySelectorAll('li')
console.log(navbar)
console.log(allli)

allli.forEach( (li, index) => {//
    li.addEventListener("click", e => {
        navbar.querySelector(".active-list").classList.remove("active-list")
        li.classList.add("active-list")

        const indicator = document.querySelector(".indicator")
        indicator.style.transform = `translateX(calc(${index * 90}px))`
       
    
    })
})
