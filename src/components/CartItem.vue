<template>
  <div class="cart-item">
      <h3 class="item">
        {{item.title}} 
      <div class="dots"></div>
      </h3>
      <p class="total">{{totalamount}} kr</p>
     <div class="amount">
    <img class="arrow" src="./../assets/graphics/arrow-up.svg" alt="arrowup" @click="increase" />
    <h3>{{item.quantity}}</h3>
    <img class="arrow" src="./../assets/graphics/arrow-down.svg" alt="arrowdown" @click="decrease" />
     </div>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    item: Object
  },
  computed: {
    totalamount() {
      return this.item.price * this.item.quantity;
    }
  },
  methods: {
    increase() {
      this.item.quantity++;
    },
    decrease() {
      if(this.item.quantity>1){
        
      this.item.quantity--;
    }else{
      this.$store.commit('removeItem', this.item.id)
    }
    }
  }
};
</script>

<style lang="scss" scoped>
.cart-item {
   display: grid;
  grid-template-rows: 1.5 rem 1.5 rem;
  grid-template-columns: 3rem 1fr 4rem;
  margin: 2rem 0 2rem 0;
.item {
    grid-column: 1/3;
    grid-row: 1/2;
    font-size: 1.3rem;
    display: flex;
    margin: 0;
    padding: 0;
   
}

.dots {
   grid-column: 2/3;
    grid-row: 1/2;
      display: flex;
      margin-bottom: 25px;
      flex: 1;
      border-bottom: 2px dotted rgb(189, 171, 171);
      margin: 0;
    padding: 0;
   }


img{
  height: 6px;
  cursor: pointer;
  margin:1px;
  padding:1px;
}
.total{
    font-size: 15px;
    grid-row: 2/2;
    grid-column: 1/3;
     display: flex;
    margin: 0;
    padding: 0;
}
.arrow {
  transition: ease-out 0.2s;
}

.arrow:active {
  transform: scale(1.5);
}
.amount {
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  grid-area: amount;
  font-weight: 100;
grid-row: 1/2;
    grid-column: 3/3;
  img {
    color: black;
  }
}
}
</style>