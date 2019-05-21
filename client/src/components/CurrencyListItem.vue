<template lang="html">
  <div v-if="shouldDisplayCurrency" class="currency-list-item">
    <td>
      {{ currency.name }}
    </td>
    <td>
      {{ currency.priceUsd | toCurrency }}
    </td>
    <td>
      <input type="number" name="amount" min="1" v-model="amount" placeholder="enter amount">
    </td>
    <td>
      <button v-on:click="handleBuy()">BUY</button>
    </td>
  </div>
</template>

<script>
import PortfolioService from '@/services/PortfolioService';
import { eventBus } from '@/main';

export default {
  props: ['currency', 'shrimpy_icons', 'portfolio'],
  data() {
    return {
      amount: 0
    }
  },
  filters: {
    toTwoDecPlaces: function (value) {
      return parseFloat(value).toFixed(2);
    },
    toCurrency: function (value) {
      return new Intl.NumberFormat('en-US',  { style: 'currency', currency: 'USD' }).format(value);
    }
  },
  methods: {
    handleBuy(){
      // event.preventDefault();
      const icon_id = this.shrimpy_icons.get(this.currency.symbol.toLowerCase()).id;
      const icon_url = `https://assets.shrimpy.io/cryptoicons/png/${icon_id.toString()}.png`
      // console.log(icon_url);
      const payload = {
        amount: this.amount,
        code: this.currency.symbol,
        name: this.currency.name,
        url: icon_url
      };
      PortfolioService.postAsset(payload)
      .then(response => {
        eventBus.$emit('refresh-data');
      })
    }
  },
  computed: {
    shouldDisplayCurrency: function () {
      let contains = false;
      for (var asset of this.portfolio) {
        if (this.currency.symbol === asset.code) {
          contains = true;
        };
      };
      return !contains
    }
  }
}
</script>

<style lang="css" scoped>

td {
  width: 160px;
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}

</style>
