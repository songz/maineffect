
const sum = (a, b) => a + b

const sumAsync = async (a, b) => {
    const result = await new Promise((resolve) => {
        setTimeout(() => resolve(a + b), 500)
    })
    return result
}

const sumAsync = async (a, b) => {
    const result = await new Promise((resolve) => {
        setTimeout(() => resolve(a + b), 500)
    })
    return result
}

const pitcher = message => {
    throw new Error(message) 
}

const pitcherAsync = async (message) => {
    return await new Promise((resolve, reject) => {
        return reject(message)
    })
}
