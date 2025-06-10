import generateNumber from '../src/utils.js'
import runGame from '../src/index.js'

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
  const value1 = generateNumber()
  const value2 = generateNumber()

  const question = `${value1} ${operator} ${value2}`
  const answer = String(calc(value1, value2, operator))

  return [question, answer]
}

const runCalc = () => runGame(description, generateRound)

export default runCalc
