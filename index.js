  let saveEl=document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0
console.log(saveEl)
function increment() {
  count = count + 1
  countEl.textContent = count

}
// let countSave = document.getElementById("save-btn")
// console.log(countSave)

function save() {

  let countStr=count+"-"
  saveEl.innerText+=countStr
  console.log(count)
  countEl.textContent=0
  count=0;
}
var welcomeEl = document.getElementById("welcome-el")
let name = "Markhabokhon"
let greeting = "Welcome back "
welcomeEl.innerText = greeting + name
