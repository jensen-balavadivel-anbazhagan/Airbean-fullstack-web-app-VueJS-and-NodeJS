<template>
  <div class="cart-bag">
      <div class="number">{{numberOfOrders}}</div>
 <button>
     <img src="./../assets/graphics/bag.svg" alt="bag">
 </button>
  </div>
</template>

<script>
export default {
 name: 'CartBag',
 components: {
 },
 computed:{
     cart(){
         return this.$store.state.cartService.cart
     },
     numberOfOrders(){
         let total = 0;
         this.$store.state.cartService.cart.forEach(item => {
             total +=item.quantity;
         });
         return total;
     }
 },


}
</script>

<style scoped>
button {
  height: 40px;
  width: 40px;
  background-color: black;
  border-radius: 40px;
  border: none;
  margin-top:-35px;
  margin-right:30px;
  float:right;
  display: flex;
  justify-content: center;
  align-items: center;

}
.number{
    background-color: orange;
    width: 23px;
    height: 23px;
    color: white;
    border-radius: 50px;
    margin-left:408px;
    margin-top:-40px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>