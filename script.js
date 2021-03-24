// //GAME LOGIC
// const colourPicker = () => {  //Select a random colour and push that to an array
//     const colours = ["black", "white", "red", "blue", "green", "yellow"]
//     const output = []

//    for(i = 0; i< 4; i++){
//        j = Math.floor((Math.random()*6))
//        output[i] = colours[j]
//    }
//    return output
// }

// const colourSummarizer = (array) => { //Calculate the totals of the six colours and push these values to an array
//     const output = [] 
    
//     const colourCounter = {
//         black: 0,
//         white: 0,
//         red: 0,
//         blue: 0,
//         green: 0,
//         yellow: 0
//     }

//     for(let i in colourCounter){
//         const countNumber = array.filter(colour => colour == i).length
//         colourCounter[i] = countNumber
//         output.push(colourCounter[i])
//     }

//     return output
// }

// const amountCompare = (array1, array2) => { //Compare the amount of equal values in two arrays
//     let amountPoints = 0

//     Length = Math.min(array1.length, array2.length)

//     for(i = 0; i < Length; i++){
//         if(array1[i] > 0 && array2[i] > 0){
//             if(array1[i] === array2[i]){
//                 amountPoints += array1[i]
//             } else{
//                 amountPoints += Math.min(array1[i], array2[i])
//             }
//         }
//     }
//     return amountPoints
// }

// const orderCompare = (array1, array2) => { //Compare the amount of correctly ordered values in two arrays
//     let orderPoints = 0

//     Length = Math.min(array1.length, array2.length)

//     for(i = 0; i < Length; i++){
//         if(array1[i] === array2[i]){
//             orderPoints++
//         }
//     }
//     return orderPoints
// }

// let round = 12
// const generatedColour = colourPicker()
// console.log(generatedColour)

// while (round > 0) {
    
//     const inputColour = []
    
//     console.log(`It's round ${round}`)
    
//     for(i = 0; i < 4; i++){
//         j = i + 1
//         inputColour[i] = prompt(`What's your pick for colour ${j}? Hint: black, white, red, blue, green or yellow `).toLowerCase()
//     }

//     const correctColour = amountCompare(colourSummarizer(generatedColour), colourSummarizer(inputColour))

//     const correctOrder = orderCompare(generatedColour, inputColour)
    
//     console.log(`Number of correct colours is ${correctColour}`)
//     console.log(`Number of correctly ordered colours is ${correctOrder}`)

//     if(correctOrder === 4 && correctColour === 4){
//         console.log("You win!")
//         break
//     }

//     round--   
// }

// console.log("Game over!")

//GUI

const canvas = document.getElementById('canvas').getContext('2d')


const rectColour = (x, y, width, height, colour) => {
    canvas.moveTo(x, y)
    canvas.fillStyle = colour
    canvas.fillRect(x, y, width, height)
}

rectColour(0,0, 400, 1200, '#cacfd2')

rectColour(400, 0, 100, 1200, '#797d7f')


const black = '#2C3E50'
const white = '#ECF0F1'
const red = '#C0392B'
const blue = '#2980B9'
const green = '#27AE60'
const yellow = '#F1C40F'

const circColour = (x, y, radius, colour) => {
    canvas.beginPath()
    canvas.moveTo(x, y)
    canvas.fillStyle = colour
    canvas.arc(x, y, radius, 0, 2*Math.PI)
    canvas.fill()
}


const colourConvertor = (array) =>{
    for(i=0; i< array.length; i++){
        if(array[i] === 'black'){
            array[i] = black
        } else if(array[i] === 'white'){
            array[i] = white

        }
    }
}


// Circle 1 x = 50, circle 2 x = 150, circle 3 x = 250, circle 4 x = 350
// Every round y should add 100, so 50 -> 150 -> 250 etc







