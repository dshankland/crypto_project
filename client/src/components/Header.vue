<template lang="html">
<div class="header">
  <img src="@/../public/images/knight.png" alt="">
  <span><h1>Crypto Knight</h1></span>
  <h3>Leading your quest for riches</h3>
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

.header  {
  font-family: 'Medieval Sharp', cursive;
  position: relative;
  background-color: #84ceeb;
  font-size: 45px;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  height: 180px;
}

h1 {
  position: absolute;
  top: 0px;
  left: 150px;
  margin-top: 0px;
  margin-bottom: 0px;
  padding-top: 0px;
}

h3 {
  position: absolute;
  font-size: 20px;
  margin: 0;
  left: 305px;
  top: 115px;
}

.header img {
  height: 180px;
}

</style>
