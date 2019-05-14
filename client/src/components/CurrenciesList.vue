<template lang="html">
  <div v-if="shrimpy_old[0]" class="currencies-list">
    <h2>Currencies List</h2>
    <table id="currencies-table">
      <thead>
        <tr>
        <th>Currency</th>
        <th>Price Usd</th>
        <th>Amount</th>
        <th> </th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <CurrencyListItem v-for="(currency, index) in shrimpy_old" :currency="currency" :key="index" :shrimpy_icons="shrimpy_icons" :portfolio="portfolio"/>
      </tr>
    </tbody>
    </table>
  </div>
</template>

<script>
import CurrencyListItem from '@/components/CurrencyListItem';

export default {
  props: ['shrimpy_old', 'shrimpy_icons', 'portfolio'],
  components: {CurrencyListItem}
}
</script>

<style lang="css" scoped>

.currencies-list {
  max-height: 300px;
  overflow: auto;
}

table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

</style>
