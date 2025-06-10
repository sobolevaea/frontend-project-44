import generateNumber from '../src/utils.js'
import runGame from '../src/index.js'

const description = ('Find the greatest common divisor of given numbers.')

const findGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1
  }

  let operand1 = number1
  let operand2 = number2

  while (operand2 !== 0) {
    const temp = operand1
    operand1 = operand2
    operand2 = temp % operand2
  }

  return operand1
}

const generateRound = () => {
  const value1 = generateNumber()
  const value2 = generateNumber()
  const question = `${value1} ${value2}`
  const answer = String(findGcd(value1, value2))

  return [question, answer]
}

const runGcd = () => runGame(description, generateRound)

export default runGcd
