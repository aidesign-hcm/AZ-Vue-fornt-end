export const state = () => ({
  cart:[],
  cartLength: 0
})

export const actions = {
  addProductToCart({state, commit}, product){
    const cartProduct = state.cart.find(prod => prod._id === product._id);
    if (!cartProduct){
      commit('pushProductToCart', product)
    } else {
      commit('incrementProductQty', cartProduct)
    }
    commit('incrementCartLength')
  }
}

export const mutations = {
  pushProductToCart(state, product) {
    product.quantity = 1,
    state.cart.push(product)
  },
  incrementProductQty(state, product){
    product.quantity++;
    let indexOfProduct = state.cart.indexOf(product);
    state.cart.splice(indexOfProduct, 1, product)
  },
  incrementCartLength(state){
    state.cartLength = 0;
    if(state.cart.length > 0){
      state.cart.map (product =>{
        state.cartLength += product.quantity
      })
    }
  },
  // 1. Find a product in the cart 
  // 2. Change the quantity of the product 
  // 3. UPdate the length of the cart
  // 4. Update product price, some thing like that
  changeQuantity(state, {product, qty}){
    const cartProduct =  state.cart.find(prod => prod._id === product._id)
    cartProduct.quantity = qty;
    state.cartLength = 0;
    if(state.cart.length > 0){
      state.cart.map (product => {
        state.cartLength += product.quantity
      })
    }
    let indexOfProduct = state.cart.indexOf(cartProduct);
    state.cart.splice(indexOfProduct, 1, cartProduct)
  },
  // 1. remove product quantity from the cartLength
  // 2. get the ID product want to delete
  // 3. remove that product using Spilce
  removeProduct(state, product){
    state.cartLength -= product.quantity;
    let indexOfProduct = state.cart.indexOf(product);
    state.cart.splice(indexOfProduct, 1)
  }
}

export const getters = {
  getCartlength(state){
    return state.cartLength
  },
  getCart(state){
    return state.cart
  },
  getCartTotal(state){
    let total = 0;
    state.cart.map (product => {
      total += product.price * product.quantity
    })
    return total
  }
}