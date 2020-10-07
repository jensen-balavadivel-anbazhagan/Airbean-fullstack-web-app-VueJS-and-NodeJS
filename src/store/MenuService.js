import http from "../store/http-common";
export default {
  state: {
    menu: {}
  }, 
  mutations: {
    showMenu(state, menu) {
      state.menu = menu
  }
  },
  actions: {
    async getAllProducts(ctx) {
    http.get("/menu").then(
      response => {
        ctx.commit('showMenu', response.data.data)
      }).catch(e => {
        console.log(e);
      });
  }

}
}