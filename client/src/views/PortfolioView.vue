<template lang="html">
<div><h1>Portfolio View</h1>
  <PortfolioGrid/>
  <CurrenciesList/>
</div>
</template>

<script>
import PortfolioGrid from '@/components/PortfolioGrid.vue';
import CurrenciesList from '@/components/CurrenciesList.vue';

export default {
  components: {
    PortfolioGrid,
    CurrenciesList,
  }
}
</script>

<style lang="css" scoped>
</style>
