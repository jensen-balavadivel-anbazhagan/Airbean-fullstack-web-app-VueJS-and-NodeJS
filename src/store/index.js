import Vue from 'vue';
import Vuex from 'vuex';

import menuService from "../store/MenuService";
import cartService from "../store/CartService";
import userService from "../store/UserService";

Vue.use(Vuex);

export default new Vuex.Store({

    state: {
    },
 
    mutations: {
    },
    actions: {
    },
    modules: {
        menuService,
        cartService,
        userService
    }
})
