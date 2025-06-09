import generateNumber from '../src/utils.js'

const description = ('Find the greatest common divisor of given numbers.')

const findGcd = (number1, number2) => {
  if (number2 === 0) {
    return number1
  }

  while (number2 !== 0) {
    const temp = number1
    number1 = number2
    number2 = temp % number2
  }

  return number1
}

const runGcd = () => {
  const value1 = generateNumber()
  const value2 = generateNumber()
  const question = `${value1} ${value2}`
  const answer = String(findGcd(value1, value2))

  return [question, answer]
}

export { description, runGcd }
