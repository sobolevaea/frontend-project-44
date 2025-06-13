import { generateNumber } from '../utils.js'
import runGame from '../index.js'

const description = ('Find the greatest common divisor of given numbers.')

const findGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1
  }

  let a = number1
  let b = number2

  while (b !== 0) {
    const temp = a
    a = b
    b = temp % b
  }

  return a
}

const generateRound = () => {
  const number1 = generateNumber()
  const number2 = generateNumber()
  const question = `${number1} ${number2}`
  const answer = String(findGcd(number1, number2))

  return [question, answer]
}

const runGcd = () => runGame(description, generateRound)

export default runGcd
