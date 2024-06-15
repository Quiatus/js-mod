import * as sc from './sc.js'
import cloneDeep from './node_modules/lodash-es/cloneDeep.js'

sc.addToCart('Bread', 10)

const getLastPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data.at(-1).body
}

const lastBody = await getLastPost()
//console.log(lastBody)

const state = {
    cart: [
        {product: 'pizza', qty: 5},
        {product: 'pread', qty: 2}
    ],
    user: { loggedIn: true }
}

const stateClone = Object.assign({}, state)

const stateDeepClone = cloneDeep(state)
state.user.loggedIn = false

console.log(stateClone.user.loggedIn)
console.log(stateDeepClone.user.loggedIn)