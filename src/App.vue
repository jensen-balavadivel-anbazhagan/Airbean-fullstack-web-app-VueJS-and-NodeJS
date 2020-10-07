<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style>
*{
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
#app {
 box-sizing: border-box;
 max-width: 480px;
 margin-left: 30%;
background-color: rgb(228, 207, 214);

}
</style>
