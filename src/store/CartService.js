import http from "./http-common";

export default {
  state: {
    cart: [],
    counter: 0,
    load: false,
    activeOrder: {}
  }, 
  mutations: {
    
    orderStatus(state, order){
      state.activeOrder = order;
      },
      emptyCart(state) {
        state.cart = [];
    },
    add(state, item) {
      state.cart.push({
          id: item.id,
          price: item.price,
          title: item.title,
          quantity: 1
      })

  },

  updateItem(state, id) {
      state.cart.find(item => item.id == id).quantity++;
  },

  removeItem(state, id) {
     let tempCart = state.cart;
     state.cart = [];
     tempCart.filter(item => item.id != id).forEach( item =>
        state.cart.push({
          id: item.id,
          price: item.price,
          title: item.title,
          quantity: 1
      })
      );
  }
  },
  actions: {
  async sendOrder(ctx, data) {
    ctx.state.activeOrder = {};
    ctx.state.load = true;
   
    http.post("/orderhistory",data).then(
      response => {
        ctx.state.load = false;
        ctx.commit('orderStatus',response.data.data);
      }).catch(e => {
        console.log(e);
      });
  
  // Empty cart
  ctx.commit('emptyCart');
  },
  addToCart(context, item) {
    let checkItem = context.state.cart.filter(check => check.id === item.id)

    if (checkItem.length > 0) {
        context.commit('updateItem', checkItem[0].id)
    } else {
        context.commit('add', item)
    }
}
  }
}