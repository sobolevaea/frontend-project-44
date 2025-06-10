import generateNumber from '../src/utils.js'
import runGame from '../src/index.js'

const description = ('Find the greatest common divisor of given numbers.')

const findGcd = (value1, value2) => {
  if (value2 === 0) {
    return value1
  }

  let a = value1
  let b = value2

  while (b !== 0) {
    const temp = a
    a = b
    b = temp % b
  }

  return a
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
