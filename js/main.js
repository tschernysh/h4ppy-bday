// import {august} from '../poems/august.mp3'
let heartsField = document.getElementsByClassName('hearts')[0]
let content = document.getElementsByClassName('content')[0]
let start = document.getElementsByClassName('start')[0]
start.addEventListener('click', () => setPhase('start'))

document.onmouseup = (e) => {
    createHeart(e.clientX, e.clientY)
    setTimeout(() => {
        heartsField.removeChild(heartsField.children[0])
    }, 1000)
}


const createHeart = (x, y) => {
    let heartBlock = document.createElement('div')
    let leftPiece = document.createElement('div')
    let rightPiece = document.createElement('div')
    let heart = document.createElement('div')
    let scale = Math.random() * 2
    heart.className = 'heart'
    heartBlock.className = 'heart__block'
    leftPiece.className = 'left__piece'
    rightPiece.className = 'right__piece'
    heartBlock.style.filter = `hue-rotate(${Math.random()*360}deg)`
    heartsField.append(heartBlock)
    heartBlock.append(heart)
    heart.append(leftPiece)
    heart.append(rightPiece)
    heartsField.append(heartBlock)
    if(x && y){
        heartBlock.style.transform = `scale(1, 1)`
        heartBlock.style.left = x - (heartBlock.scrollWidth / 2) + 'px'
        heartBlock.style.top = y - (heartBlock.scrollHeight / 2) + 'px'    
        heartBlock.classList.add('heart__click')
    }else {
        heartBlock.style.right = Math.random() * 100 + '%'
        heartBlock.style.bottom = Math.random() * 50 + '%'
        heartBlock.style.transform = `scale(${scale}, ${scale})`
        heartBlock.classList.add('heart__fly')
    }
}

setInterval(() => {
    createHeart()
    setTimeout(() => {
        heartsField.removeChild(heartsField.children[0])
    }, 3000)
}, 100)

let phase = ''

const poems = [
    {
        author: 'Твій зайчик пише',
        poem: '200 разів за хвилину',
        path: './poems/your_bunny.mp3',
    }
]

const letter = `
ґуд морнінг чудо в пірʼях💋 
  гугл каже що сьогодні день супу і чистої карми, але то все хуйня, бо сьогодні день народження у справжньої зірки гарного настрою😍
  щира, добра, неймовірна, йобнутись яка гарна, кумедна квітка яка пускає свій пилок не тільки в своєму саду, а ще й на відстань 2600 км🥹
щастя здоровля багацтва і діточк к н нб...... і бла бла бла, займайся те від чого кайфуєш і не думай про наслідки ( вік дозволяє😂 ) всіх тобі зірок і благ✨ і сто одну розу 🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹🌹

from: кицік😇
`

const setPhase = (phase) => {
    let poem = poems[0]
    switch (phase) {
        case 'start':
            let poemInfo = document.createElement('p')
            let myLetter = document.createElement('p')
            let audio = document.createElement('audio')
            let topPhoto = document.createElement('img')
            content.removeChild(content.children[0])
            content.removeChild(content.children[0])
            content.removeChild(content.children[0])
            myLetter.innerText = letter
            poemInfo.innerText = 'пісня: ' + poem.author + ' - ' + poem.poem
            topPhoto.src = './media/menkatrin.jpg'
            audio.src = poem.path
            console.log(audio.baseURI);
            audio.onerror = e => alert(e.srcElement.error.message);
            audio.autoplay = true
            content.append(myLetter)
            content.append(topPhoto)
            content.append(poemInfo)
            content.append(audio);
            
            return
        default:
            return
    }
}
