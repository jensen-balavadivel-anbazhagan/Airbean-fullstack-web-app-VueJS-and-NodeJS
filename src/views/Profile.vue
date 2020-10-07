<template>

  <section class="order_history">
   <header>
    <NavList v-bind:nav="visible" v-on:closeNav="navClose" />
    <Navicon  class="icon" v-bind:nav="visible" v-on:openNav="navOpen" />
   </header>
    <Login v-if="Object.keys(user).length === 0" />
    <div v-else>
    <div class="profile">
      <img class="portrait" src="../assets/graphics/user.png" alt />
      <h1 class="name">{{ user.name }}</h1>
      <p class="email">{{ user.email }}</p>
    </div>
    <h1 class="old_orders">Orderhistorik</h1>
    <br>
    <section class="history">
      <ul class="history_scroll">
        <li
          class="orders"
          v-for="(item, index) in orderHistory"
          :key="index">
          <p class="order_nr">#{{ item.order.id }}</p>
          <p class="date">{{ item.order.timestamp }}</p>

          <p class="sum">total ordersumma</p>
          <p class="total_price">{{ item.order.totalPrice }} kr</p>
        </li>
         <li class="total">
        <h5 class="total_spent">Totalt spenderat</h5>
        <p class="total_pr">{{ totalPriceHistory }} kr</p>
      </li>
      </ul>

      

     
    </section>
    </div>
  </section>
</template>

<script>
import Login from "@/components/Login";
import Navicon from './../components/Navicon';
import NavList from './../components/NavList';

export default {
  data() {
    return {
       visible: true
    };
  },
  components: {
    Login,
    Navicon,
    NavList,
  },

  mounted() {
    let promise = new Promise(resolve => {
      resolve(this.getUser(this.user.email));
    });
    promise.then(() => {
      this.getUserOrderHistory(this.user.email);
    });
  },
  computed: {
      showMenu() { 
      return this.$store.state.userService.showMenu
        },
      user() { 
        return this.$store.state.userService.user
      },
      orderHistory() { 
        console.log(this.$store.state.userService.orderHistory);
        return this.$store.state.userService.orderHistory
      },
      totalPriceHistory() {
       var totalPriceHis = 0;
      this.$store.state.userService.orderHistory.forEach(item => {
        totalPriceHis = totalPriceHis + item.order.totalPrice;
      });
      return totalPriceHis;
    }
  },
  methods: {
     navOpen() {
      this.visible = false;
    },
    navClose() {
      this.visible = true;
    },
 getUser(email) {
this.$store.dispatch('getUser',email);
 }, 
 getUserOrderHistory(email) {
this.$store.dispatch('getUserOrderHistory',email);
 }
    
  }
};
</script>


<style lang="scss" scoped>
li {
  margin-bottom: 10px;
}

.total_spent {
  font-family:  "Work Sans", sans-serif;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

.total_pr {
  font-family:  "Work Sans", sans-serif;
  font-size: 0.9rem;
  font-weight: bold;
  justify-self: end;
  color: rgba(255, 255, 255, 0.8);
}

.orders {
  margin-left: 1.8rem;
  margin-right: 1.8rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
}
li:last-child {
  border-bottom: 0;
}

.total {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-left: 1.8rem;
  margin-right: 1.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.6);
  padding-top: 0.5rem;
}

.total_price,
.date {
  justify-self: end;
}

.order_nr,
.sum {
  justify-self: start;
}

.order_nr {
  cursor: pointer;
  font-family:  "Work Sans", sans-serif;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
}

.date {
  font-size: 0.9rem;
  font-family:  "Work Sans", sans-serif;
  color: rgba(255, 255, 255, 0.7);
}

.sum {
  font-size: 0.75rem;
  font-family:  "Work Sans", sans-serif;
  color: rgba(255, 255, 255, 0.5);
}

.total_price {
  font-size: 0.75rem;
  font-family:  "Work Sans", sans-serif;
  color: rgba(255, 255, 255, 0.5);
}

.order_history {
  max-width: 480px;
   padding:2.5rem 1.3rem;
   background-image: url('../assets/graphics/graphics-header.svg'), url('../assets/graphics/graphics-footer.svg');
   background-position: top center, bottom center;
   background-repeat: no-repeat, no-repeat;
   background-size: 100%, 100%;
   background-color: #2F2926;
   color: white;
}

.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.name {
  font-family: "PT Serif", serif;
  text-align: center;
  font-size: 1.75rem;
  font-weight: 900;
}

.email {
  font-family: "Work Sans", sans-serif;
  color: rgba(255, 255, 255, 0.8);
  font-size: 1rem;
}
.portrait {
  border-radius: 50%;
  width: 4.3rem;
  background:  #FFFFFF;
}

.history_scroll {
  width: 100%;
  height: 25rem;
  overflow: auto;
  overflow-x: hidden;
}

.history_scroll::-webkit-scrollbar {
  background: #3a322e;
  border-radius: 6px;
}
.history_scroll::-webkit-scrollbar-thumb {
  background: #534a46;
  border-radius: 6px;
}

.old_orders {
  font-size: 1.4rem;
  font-family: "PT Serif", serif;
  font-weight: 900;
  line-height: 120%;
  text-align: left;
  width: 85%;
  padding-top: 3rem;
}



li {
  list-style: none;
}
</style>
