<template lang="html">
  <div v-if="shrimpy_old[0]" class="currencies-list">
    <h3>Buy more currencies :-</h3>
    <table id="currencies-table">
      <thead>
        <tr>
          <th>Currency&emsp;&emsp;&emsp;&emsp;&emsp;Price USD&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Amount&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Buy</th>
          <!-- <th>Price Usd</th>
          <th>Amount</th>
          <th>BUY</th> -->
        </tr>
      </thead>
      <tbody>
          <CurrencyListItem v-for="(currency, index) in shrimpy_old" :currency="currency" :key="index" :shrimpy_icons="shrimpy_icons" :portfolio="portfolio"/>
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
  /* max-height: 300px; */
  overflow: auto;
}

table {
  /* width: 65/0px; */
  border-collapse: collapse;
  border: 2px solid #44475C;
  margin: 10px 10px 0 10px;
}

table thead th {
  text-transform: uppercase;
  text-align: left;
  background: #44475C;
  color: #FFF;
  padding: 8px;
}

.currency-list-item {
  display: flex;
  justify-content: space-around;
}

table  tbody{
  display:block;
  height:300px;
  overflow:auto;
}
</style>
