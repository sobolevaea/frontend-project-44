import generateNumber from '../src/utils.js'
import runGame from '../src/index.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = number => number % 2 === 0

const generateRound = () => {
  const randomNumber = generateNumber()
  const question = String(randomNumber)
  const answer = isEven(randomNumber) ? 'yes' : 'no'

  return [question, answer]
}

const runEven = () => runGame(description, generateRound)

export default runEven
