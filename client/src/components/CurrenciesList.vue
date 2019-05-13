<template lang="html">
  <div v-if="shrimpy_old[0]" class="currencies-list">
    <h2>Currencies List</h2>
    <CurrencyListItem v-for="(currency, index) in shrimpy_old" :currency="currency" :key="index"/>
  </div>
</template>

<script>
import CurrencyListItem from '@/components/CurrencyListItem';

export default {
  props: ['shrimpy_old'],
  components: {CurrencyListItem}
}
</script>

<style lang="css" scoped>
</style>
