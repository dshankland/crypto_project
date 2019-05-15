<template lang="html">
<div>
  <PortfolioTrendChart :cryptoGraphTotalValues="cryptoGraphTotalValues"/>
  <PortfolioGrid v-if="portfolio" :shrimpy="shrimpy" :portfolio="portfolio" :poloniex="poloniex" :poloniex_map="poloniex_map"/>
  <CurrenciesList v-bind:shrimpy_old="shrimpy_old" :shrimpy_icons="shrimpy_icons" :portfolio="portfolio"/>

</div>

</template>

<script>
import PortfolioGrid from '@/components/PortfolioGrid.vue';
import CurrenciesList from '@/components/CurrenciesList.vue';
import PortfolioTrendChart from '@/components/PortfolioTrendChart.vue';

export default {
  components: {
    PortfolioGrid,
    CurrenciesList,
    PortfolioTrendChart
  },

  props: ["portfolio", "shrimpy", "shrimpy_old", "shrimpy_icons", "poloniex", "poloniex_map", "cryptoGraphTotalValues"]

}
</script>

<style lang="css" scoped>
</style>
