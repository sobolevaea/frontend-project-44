import { generateNumber } from '../utils.js'
import runGame from '../index.js'

const description = 'What number is missing in the progression?'
const maxLength = 10
const maxStep = 20

const createSequence = (start, step, length) => {
  const sequence = []
  for (let index = 0; index < length; index += 1) {
    sequence[index] = start + index * step
  }

  return sequence
}

const generateRound = () => {
  const start = generateNumber()
  const step = generateNumber(1, maxStep)
  const sequence = createSequence(start, step, maxLength)

  const hiddenNumberIndex = generateNumber(0, sequence.length - 1)
  const answer = String(sequence[hiddenNumberIndex])
  const question = sequence.join(' ').replace(answer, '..')

  return [question, answer]
}

const runProgression = () => runGame(description, generateRound)

export default runProgression
