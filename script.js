//create calculator class
class Calculator
{
    constructor(previousOperandTextElement, currentOperandTextElement) 
    {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.clear()
    }
    //functions for operations 
    clear() 
    {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    appendNumber(number) 
    {
        this.currentOperand = number
    }

    chooseOperation(operation) 
    {

    }

    compute() 
    {

    }

    updateDiplay() 
    {
        this.currentOperandTextElement.innerText = this.currentOperand
    }
}

window.onload = function() 
{
    //variables for buttons
    const numberButtons = document.querySelectorAll('[data-number]')
    const operationButtons = document.querySelectorAll('[data-operation]')
    const equalsButton = document.querySelector('[data-equals]')
    const allClearButton = document.querySelector('[data-all-clear]')
    const previousOperandTextElement = document.querySelector('[data-previous-operand]')
    const currentOperandTextElement = document.querySelector('[data-current-operand]')

    //create calculator
    const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

    numberButtons.forEach(button => 
        {
            button.addEventListener('click', () => 
            {
            console.log("funkar")
            calculator.appendNumber(button.innerText)
            calculator.updateDisplay()
            })
        })

    }

//calculator button click func
