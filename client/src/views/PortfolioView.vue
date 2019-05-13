<template lang="html">
<div><h1>Portfolio View</h1>

  <PortfolioGrid :shrimpy="shrimpy" :portfolio="portfolio"/>
  <CurrenciesList v-bind:shrimpy_old="shrimpy_old"/>

</div>

</template>

<script>
import PortfolioGrid from '@/components/PortfolioGrid.vue';
import CurrenciesList from '@/components/CurrenciesList.vue';

export default {
  components: {
    PortfolioGrid,
    CurrenciesList,
  },

  props: ["portfolio", "shrimpy", "shrimpy_old"]

}
</script>

<style lang="css" scoped>
</style>
