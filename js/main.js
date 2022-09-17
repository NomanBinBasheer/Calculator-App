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
          return;
     }
     else{
          calculator.parseInput(value)
     }
     
})

const calculator = {
     displayText: '0',
     prevTotal: null,


     parseInput(value){
         

     //    Have any of the "special buttons" been clicked?

      switch (value) {
          case '=' :
               this.calculateAnswer(this.displayText)
               break;
          case 'AC' : 
               this.allClear()
               break;
          case '.' :
           if (this.displayText == '0'){
               this.addText('0.')
           }
           else if (this.displayText == '0.' || this.displayText == '1.' || this.displayText == '2.' || this.displayText == '3.' || this.displayText == '4.' || this.displayText == '5.' || this.displayText == '6.' || this.displayText == '7.' || this.displayText == '8.' || this.displayText == '9.'){
               return;
           }
           else{
               this.addText(value)
           }
           break;

           default: 
           this.addText(value)
           break;
      }
      
      

     },

     addText(value){
          if (this.displayText == '0'){
               this.displayText = ''
          }
          else if(this.prevTotal !== null){
              this.displayText = this.prevTotal
              this.prevTotal = null
          }
          if(isNaN(+(value)) && isNaN(+(this.displayText))){
               if(isNaN(this.displayText.slice(-1))){
                    return;
               }
          }
          this.displayText += value
          this.outputText(this.displayText)
     },

     outputText(text){
        document.querySelector('.calculatorScreen').value = text
     },
     calculateAnswer(equation){
          let result = Function('return ' + equation)()
          this.outputText(result)
          this.prevTotal = result

     },
     allClear(){
          this.displayText = '0'
          this.prevTotal = null
          this.outputText(this.displayText)
     },
}