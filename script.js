let c = 0
let increment = document.getElementById("increase")
let decrement = document.getElementById("decrease")
let count = document.getElementById("counter")

function increase(){
    c++
    if(c==1000){
        c=0
    }
    count.textContent = c
}
function decrease(){
    c--
    if(c<0){
        c=0;
    }
    count.textContent = c
}
increment.addEventListener('click',increase)
decrement.addEventListener('click',decrease)

console.log(increment)
console.log(decrement)
console.log(count)