const timerSec = document.querySelector("#sec")
const timerTen = document.querySelector("#ten")
const start = document.querySelector(".start")
const stop = document.querySelector(".stop")
const reset = document.querySelector(".reset")
let sec = 00
let tens = 00
let interval


start.addEventListener("click", () => {
    clearInterval(interval)
    interval = setInterval(() => {
        tens++
        if (tens <= 9) {
            timerTen.textContent = "0" + tens
        } 
        if (tens > 9) {
            timerTen.textContent = tens
        }

        if (tens > 99) {
            sec += 1
            timerSec.textContent = "0" + sec
            tens = 00
            timerTen.textContent = "0" + tens
        }

        if (sec > 9) {
            timerSec.textContent = sec
        }
    }, 10)
})

stop.addEventListener("click", e => {
    clearInterval(interval)
})

reset.addEventListener("click", e => {
    clearInterval(interval)
    sec = 00
    tens = 00
    timerSec.textContent = "00"
    timerTen.textContent = "00"
})