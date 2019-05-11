<template lang="html">
<div class="currency-list-item">
  {{ currency.name }} {{ currency.priceUsd | toTwoDecPlaces }} <input type="number" name="amount" min="1" v-model="amount" placeholder="enter amount"> <button v-on:click="handleBuy()">BUY</button>
</div>
</template>

<script>
import PortfolioService from '@/services/PortfolioService';
import { eventBus } from '@/main';

export default {
  props: ['currency'],
  data() {
    return {
      amount: 0
    }
  },
  filters: {
    toTwoDecPlaces: function (value) {
      return parseFloat(value).toFixed(2);
    }
  },
  methods: {
    handleBuy(){
      // event.preventDefault();

      const payload = {
        amount: this.amount,
        code: this.currency.symbol,
        name: this.currency.name,
        url: ""
      };
      PortfolioService.postAsset(payload)
      .then(response => {
        eventBus.$emit('refresh-data');
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
