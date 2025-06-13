import { generateNumber } from '../utils.js'
import runGame from '../index.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (number) => {
  if (number < 2) {
    return false
  }

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false
    }
  }

  return true
}

const generateRound = () => {
  const number = generateNumber()
  const question = String(number)
  const answer = isPrime(number) ? 'yes' : 'no'

  return [question, answer]
}

const runPrime = () => runGame(description, generateRound)

export default runPrime
