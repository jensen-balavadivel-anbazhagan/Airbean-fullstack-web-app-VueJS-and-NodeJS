<template>
<section class="background">
  <div class="order">
    <h1 v-if="loading">Brewing</h1>
    <div class="loading" v-if="loading">
      <img src="../assets/graphics/loader.png" alt="loading icon" />
    </div>

    <h1 class="orderNumber" v-if="order.id">
      Ordernumber:
      <strong>#{{order.id}}</strong>
    </h1>
    <div class="drone" v-if="order.id">
      <img src="../assets/graphics/drone.svg" alt="drone svg" />
      <h1>Din beställning är påväg!</h1>
    </div>

    <div class="eta" v-if="order.id">
      <p>{{order.eta}} minuter</p>
    </div>

<div class="button"  @click="$router.push('/menu')">
  OK, Cool!
    </div>
  </div>
</section>
</template>

<script>
export default {
  name: "Status", 
 
   computed: {
    order() {
      return this.$store.state.cartService.activeOrder;
    },
    loading() {
      return this.$store.state.cartService.load;
    }
  }
};
</script>

<style lang="scss">
.background {
  width: 100%;
  margin: auto;
  background: #E5674E;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.order {
   height: 80%;
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;

  .drone {
    img {
      width: 300px;
      animation: hover 4s linear infinite;
      padding-top: 25px;
    }
    @keyframes hover {
      0% {
        transform: translateY(0) rotateZ(0deg);
      }
      25% {
        transform: translateY(0.25rem) rotateZ(1deg);
      }
      50% {
        transform: translateY(0.5rem) rotateZ(0deg);
      }
      75% {
        transform: translateY(0.25rem) rotateZ(-1deg);
      }
      100% {
        transform: translateY(0) rotateZ(0deg);
      }
    }
    h1 {
      font-family: Georgia, "Times New Roman", Times, serif;
      font-size: 30px;
      color: white;
    }
  }
  .eta {
    font-family: Georgia, "Times New Roman", Times, serif;
  }
  .button {
    width: 8.5rem;
    height: 1.5rem;
    border-radius: 50px;
    color: black;
    background-color: white;
    outline: none;
    border: none;
    font-family: "PT Serif", serif;
    font-size: 1rem;
    align-items: center;
  }
}
.loading {
  padding-top: 250px;
  animation: none;

  img {
    width: 100px;
    padding-top: 25px;
  }
}
.orderNumber {
  font-size: 15px;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  color: white;
  padding-top: 20px;
}
</style>