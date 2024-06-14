const shipping = 10
const cart = []

export const addToCart = (product, quantity) => {
    cart.push({product, quantity})
    console.log(`${quantity}x ${product} added to the cart.`)
}