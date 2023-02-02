let countLeft = document.getElementById("count-left")
let countRight = document.getElementById("count-right")
let saveElL = document.getElementById("save-elL")
let saveElR = document.getElementById("save-elR")
let countL1= 0
let countR1= 0

function plus1() {
    countL1 += 1 
    countLeft.textContent = countL1

}

function plus2() {
    countL1 += 2
    countLeft.textContent = countL1
    
}

function plus3() {
    countL1 += 3
    countLeft.textContent = countL1
    
}



function plus1Right() {
    countR1 += 1 
    countRight.textContent = countR1
}

function plus2Right() {
    countR1 += 2
    countRight.textContent = countR1
}

function plus3Right() {
    countR1 += 3
    countRight.textContent = countR1
}