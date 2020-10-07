import http from "../store/http-common";

export default {
  state: {
    user: {},
    orderHistory: []
  }, 
  mutations: {
    addUser(state, userData) {
      state.user = userData;
    },
    getUser(state, userData) {
      
      state.user = userData;
    },
    
    addUserOrderHistory(state, data) {
      state.orderHistory = [];
      data.forEach(order => {
        state.orderHistory.push( {
          order
      })
      });
     
    }
  },
  actions: {
  async createUser(ctx, user) {
    http.post("/user",user).then(
      response => {
        ctx.commit("addUser", response.data.data);
      }).catch(e => {
        console.log(e);
      });
  },
  async getUser(ctx, email) {
    http.get("/user/"+email).then(
      response => {
        ctx.commit("getUser", response.data.data);
      }).catch(e => {
        console.log(e);
      });
  },
  async getUserOrderHistory(ctx, email) {
    http.get("/orderhistory/"+email).then(
        response => {
          ctx.commit("addUserOrderHistory", response.data.data);
        }).catch(e => {
          console.log(e);
        });
  }
  }
}