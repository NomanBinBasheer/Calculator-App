// Required abillities of a calculator:

// should accept inputs of numbers, operators and another number
// should accept decimal numbers
// store inputs
// recognize inputs and perform calculations 
// returb a result

// Optional features:

// should accept longer arithematic operations
// display all inputs as it is being entered.
// store previous total as start of next operation
// clear button should clear all enteries
// should prevent invalid inputs (e.g. operators next to each other, two decimal points)


const keys = document.querySelector('.buttonContainer');

keys.addEventListener('click', buttonPressed =>{
     const {target} = buttonPressed
     const {value}  = target
     if (!target.matches('button')) {
          return
     }
     else{
          parseInput(value)
     }
     
})

const calculator = {
     displayText: '0',
     prevTotal: null,


     parseInput(value){
          if (this.displayText == '0'){
               this.displayText = ''
          }

     //    Have any of the "special buttons" been clicked?

      switch (value) {
          case '=' :
          //   calculate the answer
               break;
          case 'AC' : 
          //  clear screen and all values
               break;
          case '.' :
           if (this.displayText == '0'){
               // pass '0.' to the text
           }
           else{
               // add value (.) to the text string
           }
           break;

           default: 
          //  add value to the text string
      }
      
      addText(value){
          
      }

     }
}