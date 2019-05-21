<template lang="html">
  <div v-if="shrimpy_old[0]" class="currencies-list">
    <!-- <h3 @click='toggle = !toggle'>Click here to add more currencies to your portfolio.</h3> -->
      <button class="add-more-button" @click='toggle = !toggle'> Click here to add more currencies to your portfolio. </button>
      <div v-show='!toggle'>
        &emsp;<br>
      </div>
      <div v-show='toggle'>
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
  </div>
</template>

<script>
import CurrencyListItem from '@/components/CurrencyListItem';

export default {
  data () {
  return {
    toggle: false
  }
},
  props: ['shrimpy_old', 'shrimpy_icons', 'portfolio'],
  components: {CurrencyListItem}
}
</script>

<style lang="css" scoped>

.currencies-list {
  /* max-height: 300px; */
  text-align: center;
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

table {
  margin: 0 auto;
}
table  tbody{
  display:block;
  height:300px;
  overflow:auto;
}

.add-more-button {
  /* font-family: 'Merriweather', serif; */
  background-color: #84CEEB;
  border-color: darkblue;
  color: black;
  text-align: center;
  /* height: 15px; */
  /* width: 25%; */
  border-radius: 15px;
  padding-bottom: 3px;
  padding-top: 3px;
  font-size: 20px;
  display: center;
  position: center;
  margin-bottom: 10px;
}
</style>
