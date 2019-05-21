<template lang="html">
<div>
  <PortfolioTrendChart :cryptoGraphTotalValues="cryptoGraphTotalValues"/>
  <PortfolioGrid v-if="portfolio" :shrimpy="shrimpy" :portfolio="portfolio" :poloniex="poloniex" :poloniex_map="poloniex_map"/>
  <CurrenciesList v-bind:shrimpy_old="shrimpy_old" :shrimpy_icons="shrimpy_icons" :portfolio="portfolio"/>

</div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
