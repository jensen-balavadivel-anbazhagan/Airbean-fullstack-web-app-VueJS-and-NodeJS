<template>
  <div class="menulist" @click="hidden" :class="{ close : nav }">
    <button>
      <img  src="@/assets/graphics/close.svg" alt="close" width="20px">
      </button>
    <router-link class="link" to="/menu">Meny</router-link>
    <hr />
    <router-link class="link" to="/about">Vårt Kaffe</router-link>
    <hr />
    <router-link class="link" to="/status">OrderStatus</router-link>
    <hr />
    <router-link class="link" to="/profile">Profile</router-link>

  </div>
</template>

<script>


export default {
name: 'MenuList',
props:{
  nav : Boolean
},
methods: {
  hidden() {
    this.$emit("closeNav");
  }
}
};

</script>

<style>
.menulist {
  position: absolute;
  display: flex;
  flex-direction: column;
  font-size:30px;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: #2F2926;
   height: 130vh;
}
button{
  height: 40px;
  width: 40px;
  background-color: white;
  border-radius: 40px;
  border: none;
  margin-left:45px;
  margin-top:30px;
}
.link{
text-decoration: none;
margin-top:50px;
margin-left:46%;
color: white;
}
hr{
  color:rgb(207, 191, 191);
  width: 30%;
  margin-left:36%;
  margin-top:50px;
}
.close {
  display: none;
}


</style>