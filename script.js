//Setup gamefield
const canvas = document.getElementById('canvas').getContext('2d')


//Function for drawing a filled rectangle
const rectColour = (x, y, width, height, colour) => {
    canvas.moveTo(x, y)
    canvas.fillStyle = colour
    canvas.fillRect(x, y, width, height)
}

//Function for drawing a filled circle
const circColour = (x, y, radius, colour) => {
    canvas.beginPath()
    canvas.moveTo(x, y)
    canvas.fillStyle = colour
    canvas.arc(x, y, radius, 0, 2*Math.PI)
    canvas.fill()
}

//Draw some rectangles for the playing field
rectColour(0,0, 400, 1200, '#cacfd2')

rectColour(400, 0, 100, 1200, '#797d7f')

//Select four random unique colours and push them to an array
const colourPicker = () => {  
    const colours = ["black", "white", "red", "blue", "green", "yellow"]
    const output = []

   for(i = 0; i< 4; i++){
        j = Math.floor((Math.random()*6))

       while(output.includes(colours[j])){ //Checks if the value is already in the array. If so, redraw j. 
            j = Math.floor((Math.random()*6))
        }

       output[i] = colours[j]
   }
   return output
}

//Calculate the totals of the six colours and push these values to an array
const colourSummarizer = (array) => { 
    const output = [] 
    
    const colourCounter = {
        black: 0,
        white: 0,
        red: 0,
        blue: 0,
        green: 0,
        yellow: 0
    }

    for(let i in colourCounter){
        const countNumber = array.filter(colour => colour == i).length
        colourCounter[i] = countNumber
        output.push(colourCounter[i])
    }

    return output
}

//Compare the amount of equal values in two arrays
const amountCompare = (array1, array2) => { 
    let amountPoints = 0

    Length = Math.min(array1.length, array2.length)

    for(i = 0; i < Length; i++){
        if(array1[i] > 0 && array2[i] > 0){
            if(array1[i] === array2[i]){
                amountPoints += array1[i]
            } else{
                amountPoints += Math.min(array1[i], array2[i])
            }
        }
    }
    return amountPoints
}

//Compare the amount of correctly ordered values in two arrays
const orderCompare = (array1, array2) => { 
    let orderPoints = 0

    Length = Math.min(array1.length, array2.length)

    for(i = 0; i < Length; i++){
        if(array1[i] === array2[i]){
            orderPoints++
        }
    }
    return orderPoints
}

//Draws an input array with colours to the playing field
const drawInput = (colourArray, yRel) => {
    yRel += 50
    for(i=0; i< colourArray.length; i++){
        let xRel = [i] * 100 + 50
        circColour(xRel, yRel, 40, colourArray[i]) 
    }
} 

//Converts written colour to a predefined colour code
const colourConvertor = (arrayInput) =>{
    let arrayOutput = []

    for (i=0; i< arrayInput.length; i++){
        if(arrayInput[i] === 'black'){
            arrayOutput[i] = '#2C3E50'
        } else if(arrayInput[i] === 'white'){
            arrayOutput[i] = '#ECF0F1'
        } else if(arrayInput[i] === 'red'){
            arrayOutput[i] = '#C0392B'
        } else if(arrayInput[i] === 'blue'){
            arrayOutput[i] = '#2980B9'
        } else if(arrayInput[i] === 'green'){
            arrayOutput[i] = '#27AE60'
        } else if(arrayInput[i] === 'yellow'){
            arrayOutput[i] = '#F1C40F'
        }
    }
    return arrayOutput
}

//Fill an array with the correct colours based on score
const scoreArray = (colourScore, orderScore) => {
    let score = []

    if(colourScore > 0){
        score = score.concat(Array(Math.min(colourScore, orderScore)).fill('red'))
    }
    if(colourScore - orderScore > 0){
        score = score.concat(Array(colourScore-orderScore).fill('white'))
    }
    if(4 - colourScore > 0){
        score = score.concat(Array(4 - colourScore).fill('black'))
    }
    return score
}

//Draw the score on the playing field
const drawScore = (xRel, yRel, colourArray) =>{
    const xCoord = [33, 33, 66, 66]
    const yCoord = [33, 66, 33, 66]

    for(i = 0; i < colourArray.length; i++){
        circColour(xRel + xCoord[i], yRel + yCoord[i], 15, colourArray[i])
    }
}

// //Main game loop
// let round = 12
// let yRel = 0

// const generatedColour = colourPicker()
// console.log(generatedColour)

// while (round > 0) {
    
//     const inputColour = []

//     const colours = ["black", "white", "red", "blue", "green", "yellow"]

//     let input = ''
    
//     console.log(`It's round ${round}`)
    
//     //Ask four times for a colour input, check if colour is only used once and if input is a valid colour
//     for(i = 0; i < 4; i++){
//         j = i + 1
//         input = prompt(`What's your pick for colour ${j}? Hint: black, white, red, blue, green or yellow `).toLowerCase()

//         while(colours.includes(input) === false || inputColour.includes(input)){
//             if(colours.includes(input) === false){
//                 input = prompt(`Invalid colour. Please select either black, white, red, blue, green or yellow. `).toLowerCase()
//             } else if (inputColour.includes(input)){
//                 input = prompt(`You can only use this colour once, please use another colour.`).toLowerCase()
//             }
//         }
//         inputColour[i] = input
//     }
    
//     //Convert the input colour to predefined HTML codes, and then draw the input to the game field
//     drawInput(colourConvertor(inputColour), yRel)

//     //Compare the input to the randomly generated code
//     const correctColour = amountCompare(colourSummarizer(generatedColour), colourSummarizer(inputColour))

//     const correctOrder = orderCompare(generatedColour, inputColour)

//     //Draw the points to the screen
//     drawScore(400, yRel, colourConvertor(scoreArray(correctColour, correctOrder)))

//     console.log(`Number of correct colours is ${correctColour}`)
//     console.log(`Number of correctly ordered colours is ${correctOrder}`)

//     //If both colours and order are correct, end the loop
//     if(correctOrder === 4 && correctColour === 4){
//         console.log("You win!")
//         break
//     }

//     round--   
//     yRel += 100
// }

// console.log("Game over!")









