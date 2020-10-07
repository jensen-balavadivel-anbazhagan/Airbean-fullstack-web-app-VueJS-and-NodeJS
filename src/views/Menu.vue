<template>
  <div class="menu">
    <header>
      <Navicon v-bind:nav="visible" v-on:openNav="navOpen" />
      <CartBag @click.native="show" />
    </header>
    <main>
      <NavList v-bind:nav="visible" v-on:closeNav="navClose" />
      <Cart v-if="cartStatus" />
    </main>
<div v-if="visible">
    <h1 >Meny</h1>
    <Menuitem v-for="item in items" :key="item.id" :item="item" />
</div>
  </div>
</template>

<script>
import Menuitem from "../components/Menuitem";
import Navicon from "../components/Navicon";
import NavList from "../components/NavList";
import CartBag from "../components/CartBag";
import Cart from "../components/Cart";

export default {
  name: "Menu",
  data() {
    return {
      visible: true,
      cartStatus: false
    };
  },
  components: {
    Menuitem,
    Navicon,
    NavList,
    CartBag,
    Cart
  },
 computed: {
    items(){
      return this.$store.state.menuService.menu;
    },
  },
  mounted() {
    this.$store.dispatch('getAllProducts');
  },
  methods: {
    navOpen() {
      this.visible = false;
      this.cartStatus = false;
    },
    navClose() {
      this.visible = true;
    },

    show() {
      this.cartStatus = !this.cartStatus;
    }
  }
};
</script>

<style scoped>
.menu {
  height: 130vh;
  width: 100%;
  padding: 1rem 1rem;
  box-sizing: border-box;
  background-image: url('../assets/graphics/graphics-header.svg'), url('../assets/graphics/graphics-footer.svg');
  background-repeat: no-repeat,no-repeat;
  background-position: top center , bottom center;
  background-size: 100%, 100%;
  
}
h1{
  font-size: 1.5rem;
  margin-top: 1rem;
}
</style>
