<template lang="html">
  <div class="wishlist-wrapper">
    <h2> At todays prices you could cash the lot and buy:</h2>
    <div class="wishlist">

      <img src="@/../public/images/superyacht.png" alt="">
      <h3><strong>{{(totalValue/20000000) | toNiceNumber }}</strong> superyachts</h3>
      <img src="@/../public/images/ferrari.jpeg" alt="">
      <h3><strong>{{(totalValue/130000) | toNiceNumber }}</strong> Ferraris</h3>
      <img src="@/../public/images/rolex.jpeg" alt="">
      <h3><strong>{{(totalValue/5300) | toNiceNumber }}</strong> Rolexes</h3>
      <img src="@/../public/images/fendibag.jpeg" alt="">
      <h3><strong>{{(totalValue/3000) | toNiceNumber }}</strong> Fendi bags</h3>
      <img src="@/../public/images/cristal.jpeg" alt="">
      <h3><strong>{{(totalValue/200) | toNiceNumber }}</strong> bottles of Cristal</h3>
      <img src="@/../public/images/yumyum.jpeg" alt="">
      <h3><strong>{{(totalValue/0.8) | toNiceNumber }}</strong> yum-yums</h3>
    </div>
  </div>
</template>

<script>
export default {
  props: ['totalValue'],
  filters: {
    toNiceNumber: function (value) {
      return new Intl.NumberFormat('en-GB').format((value.toFixed(0)));
    }
  }
}
</script>

<style lang="css" scoped>

.wishlist-wrapper {
  max-width: 650px;
  max-height: 170px;
}

strong {

  font-size: 29px;
}


h3 {

  margin-right: 25px;
  margin-left: 3px;
}

.wishlist img {
  height: 60px;
  display: flex;
}

.wishlist {
  display: flex;
  max-height: 120px;
  max-width:650px;
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;
}

</style>
