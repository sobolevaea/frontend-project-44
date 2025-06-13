import { generateNumber } from '../utils.js'
import runGame from '../index.js'

const description = ('What is the result of the expression?')
const operators = ['+', '-', '*']

const calc = (operand1, operand2, operator) => {
  switch (operator) {
    case '+':
      return operand1 + operand2
    case '-':
      return operand1 - operand2
    case '*':
      return operand1 * operand2
  }
}

const generateRound = () => {
  const operator = operators[generateNumber(0, operators.length - 1)]
  const number1 = generateNumber()
  const number2 = generateNumber()

  const question = `${number1} ${operator} ${number2}`
  const answer = String(calc(number1, number2, operator))

  return [question, answer]
}

const runCalc = () => runGame(description, generateRound)

export default runCalc
