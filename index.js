const nameBtn = document.getElementById('nameBtn')
const nameInput = document.getElementById('nameInput')
const clrBtn = document.getElementById('clrBtn')
const swapInput = document.getElementById('swapInput')
const swapBtn = document.getElementById('swapBtn')
const counterBtn = document.getElementById('counter')
const list = document.getElementById('list')

const content = document.querySelectorAll('body *:not(#hideBtn)');
const hideBtn = document.getElementById('hideBtn')
const checkBtn = document.getElementById('checkBtn')
const textInputs = document.querySelectorAll('div > input')
const timer = document.getElementById('timer')
const startBtn = document.getElementById('start')
const stopBtn = document.getElementById('stop')
const resetBtn = document.getElementById('reset')

const errorText = document.createElement("span");
errorText.innerText = "Text should be longer than 4 characters";

counterBtn.innerText = '0'
const colors = ['red', 'purple', 'orange', 'blue', 'brown']
let str = nameInput.value
let count = 0

const nameDiv = document.createElement('div')
const typeDiv = document.createElement('div')
document.body.appendChild(nameDiv)

nameBtn.addEventListener('click', () => {
    if(!nameDiv.innerText) {
        nameDiv.innerText = `Hello, ${nameInput.value}!`
    } else {
        nameDiv.innerText = ''
    }
})

clrBtn.addEventListener('click', () => {
    nameDiv.style.color = colors[Math.floor(Math.random() * colors.length)]
})

swapBtn.addEventListener('click', () => {
    [nameInput.value, swapInput.value] = [swapInput.value, nameInput.value]
})

nameInput.addEventListener('focus', () => {
    nameInput.value = str
})

// nameInput.addEventListener('blur', () => {
//     str = nameInput.value
//     nameInput.value = 'click here'
// })

counterBtn.addEventListener('click', () => {
    counterBtn.innerText = `${++count}`
})

// list.addEventListener('click', e => {
//     typeDiv.innerText = e.target.dataset.type
//     e.target.appendChild(typeDiv)
// })

hideBtn.addEventListener('click', e => {
    content.forEach(item => {
        item.classList.toggle("hidden")
    });
    content[0].className ? hideBtn.innerText = "Show all" : hideBtn.innerText = "Hide all"
})
checkBtn.addEventListener('click', () => {
    textInputs.forEach(item => {
        if(item.value.trim().length < 4){
            if(!(item.nextElementSibling)) {
                item.classList.add("error");
                item.after(errorText.cloneNode(true));
                setTimeout(()=>{
                    item.nextElementSibling.remove();
                    item.classList.remove("error");
                }, 3000)
            }
        }
    });
})

let intervalId = null;
startBtn.addEventListener('click', () => {
    intervalId = setInterval(()=>{timer.innerText++;},1000); 
})
stopBtn.addEventListener('click', () => {
    clearInterval(intervalId);
    intervalId = null;
})
resetBtn.addEventListener('click', ()=>{
    if(!intervalId){
        timer.innerText = 0; 
    }
})