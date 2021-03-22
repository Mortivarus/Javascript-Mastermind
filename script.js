const correctColour = 0
const correctOrder = 0

const colourPicker = (array) => {
    const colours = ["black", "white", "red", "blue", "green", "yellow"]
   for(i = 0; i< 4; i++){
       j = Math.floor((Math.random()*6))
       array[i] = colours[j]
   }
   return array
}

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


let round = 12

while (round > 0) {
    const generatedColour = []
    const inputColour = []
    
    
    console.log(`It's round ${round}`)
    colourPicker(generatedColour)
    console.log(colourArray)

    for(i = 0; i < 4; i++){
        j = i + 1
        inputColour[i] = prompt(`What's your pick for colour ${j}? Hint: black, white, red, blue, green or yellow `).toLowerCase()
    }

    


    



    
    round--
    
}