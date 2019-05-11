<template lang="html">
  <div class="wishlist-wrapper">
    <h2> At todays prices you could cash it all in and buy:</h2>
    <div class="wishlist">
      <div class="wish">
        <img src="@/../public/images/superyacht.png" alt="">
        <div class="figure">{{(totalValue/20000000).toFixed(0)}}</div>
          <div class="words">superyachts</div>
      </div>

      <div class="wish"><img src="@/../public/images/ferrari.jpeg" alt="">
      {{(totalValue/130000).toFixed(0)}} Ferrari 488s</div>
      <div class="wish"><img src="@/../public/images/rolex.jpeg" alt="">
      {{(totalValue/5300).toFixed(0)}} Rolex Oyster Perpetuals</div>
      <div class="wish"><img src="@/../public/images/fendibag.jpeg" alt="">
      {{(totalValue/3000).toFixed(0)}} Fendi bags</div>
      <div class="wish"><img src="@/../public/images/cristal.jpeg" alt="">
      {{(totalValue/200).toFixed(0)}} bottles of Cristal</div>
      <div class="wish"><img src="@/../public/images/yumyum.jpeg" alt="">
      {{(totalValue/0.8).toFixed(0)}} yum-yums</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['totalValue']
}
</script>

<style lang="css" scoped>
.wishlist-wrapper {
  max-width: 650px;
  max-height: 170px;

}




.wishlist img {
  height: 50px;
  display: flex;
}

.wishlist div {
  display: inline-flex;
}

.wishlist {
  display: flex;
  max-height: 120px;
  max-width:650px;
  overflow-x: auto;
  overflow-y: hidden;
  flex-wrap: nowrap;
}

.wish {
  display: inline-block;
}
</style>
