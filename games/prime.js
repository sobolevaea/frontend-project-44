import generateNumber from '../src/utils.js'
import runGame from '../src/index.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const isPrime = (number) => {
  if (number === 2) {
    return true
  }

  if (number < 2 || number % 2 === 0) {
    return false
  }

  for (let i = 3; i < Math.sqrt(number); i += 1) {
    return (number % i === 0 ? false : true)
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
