<template lang="html">
<div><h1>Portfolio View</h1>
  <PortfolioGrid :portfolio="portfolio"/>
  <CurrenciesList v-bind:shrimpy="shrimpy"/>
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
  props: ['shrimpy', 'portfolio']
}
</script>

<style lang="css" scoped>
</style>
