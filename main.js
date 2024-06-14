import * as sc from './sc.js'

sc.addToCart('Bread', 10)

const getLastPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data.at(-1).body
}

const lastBody = await getLastPost()
console.log(lastBody)