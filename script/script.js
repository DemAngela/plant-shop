const mobailBtn = document.querySelector('.mobail-btn')
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("mobail").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})
