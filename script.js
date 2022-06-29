const timer = document.querySelector(".timer")
const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const reset = document.querySelector(".reset")

start.addEventListener("click", e => {
    timer.textContent = 'start'
})

stop.addEventListener("click", e => {
    timer.textContent = 'stop'
})

reset.addEventListener("click", e => {
    timer.innerText = "00:00"
})