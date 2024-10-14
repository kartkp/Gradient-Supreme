const hexNumbers = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"]
let hex1 = "", hex2 = ""
let prevHex1 = "", prevHex2 = ""

document.querySelector("#generate").addEventListener("click", () => {
  generateRandomHex()
})

document.querySelector("#copy").addEventListener("click", () => {
  copyHex()
})

document.querySelector("#previous").addEventListener("click", () => {
  applyPreviousGradient()
})

function generateRandomHex(){
  prevHex1 = hex1
  prevHex2 = hex2
  hex1 = "", hex2 = ""
  for(let i = 0; i < 6; i++){
    hex1 += hexNumbers[Math.floor(Math.random() * hexNumbers.length)]
    hex2 += hexNumbers[Math.floor(Math.random() * hexNumbers.length)]
  }
  document.querySelector("#hex1").innerHTML = hex1
  document.querySelector("#hex2").innerHTML = hex2
  document.body.style.background = `linear-gradient(45deg, #${hex1}, #${hex2})`
}

function copyHex(){
  const displayedHex1 = document.querySelector("#hex1").innerHTML
  const displayedHex2 = document.querySelector("#hex2").innerHTML
  const gradient = `background: linear-gradient(45deg, #${displayedHex1}, #${displayedHex2})`
  navigator.clipboard.writeText(gradient)
}


function applyPreviousGradient(){
  if (prevHex1 && prevHex2) {
    document.querySelector("#hex1").innerHTML = prevHex1
    document.querySelector("#hex2").innerHTML = prevHex2
    document.body.style.background = `linear-gradient(45deg, #${prevHex1}, #${prevHex2})`
  }
}
