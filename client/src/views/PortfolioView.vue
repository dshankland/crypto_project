<template lang="html">
<div><h1>Portfolio View</h1>
  <PortfolioTrendChart/>
  <PortfolioGrid v-if="portfolio" :shrimpy="shrimpy" :portfolio="portfolio" :poloniex="poloniex"/>
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

  props: ["portfolio", "shrimpy", "shrimpy_old", "shrimpy_icons", "poloniex"]


}
</script>

<style lang="css" scoped>
</style>
