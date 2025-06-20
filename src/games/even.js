import { generateNumber } from '../utils.js'
import runGame from '../index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = number => number % 2 === 0

const generateRound = () => {
  const number = generateNumber()
  const question = String(number)
  const answer = isEven(number) ? 'yes' : 'no'

  return [question, answer]
}

const runEven = () => runGame(description, generateRound)

export default runEven
