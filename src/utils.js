const generateNumber = (min = 0, max = 20) => Math.floor(Math.random() * (max - min + 1)) + min

export default generateNumber
