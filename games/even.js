import readlineSync from 'readline-sync'

const roundsCount = 3
const runEven = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  for (let i = 0; i < roundsCount; i += 1) {
    const minRandomNumber = 1
    const maxRandomNumber = 20

    const randomNumber = Math.floor(Math.random() * maxRandomNumber + minRandomNumber)
    const isEven = (randomNumber % 2 === 0 ? 'yes' : 'no')
    const userAnswer = readlineSync.question(`Question: ${randomNumber}\nYour answer: `)
    if (userAnswer !== isEven) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${isEven}'`)
      return
    }
    console.log('Correct!')
  }
  console.log(`Congratulations, ${userName}!`)
}

export default runEven
