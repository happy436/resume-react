let num = 0
let count = 10

let interval

if (num === count) {
    clearInterval(interval)
} else {
    interval = setInterval(() => {
        num++
    }, 1000)
}

console.log(interval)