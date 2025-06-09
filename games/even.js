import generateNumber from '../src/utils.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

const isEven = number => number % 2 === 0

const runEven = () => {
  const randomNumber = generateNumber()
  const question = `Question: ${randomNumber}`
  const answer = isEven(randomNumber) ? 'yes' : 'no'

  return [question, answer]
}

export { description, runEven }
