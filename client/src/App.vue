<template lang="html">
 <div id="main">



   <Greeting :value="totalValue"/>
   <NavBar/>
   <router-view id="view"/>
 </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Greeting from '@/components/Greeting';
import PortfolioService from '@/services/PortfolioService';

export default {
  components: { NavBar, Greeting},
  data() {
    return {
      shrimpy: [],
      poloniex: [],
      portfolio: [],
      totalValue: 1000,
    }
  },
  methods: {
    fetchShrimpyTicker: function (){
      fetch('https://cors-anywhere.herokuapp.com/https://dev-api.shrimpy.io/v1/exchanges/poloniex/ticker')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.shrimpy = data;
      })
    },
    fetchPoloniex: function (){
      fetch('https://poloniex.com/public?command=returnChartData&currencyPair=USDT_BTC&start=1546300800&end=1546646400&period=14400')
      .then(res => res.json())
      .then(data => {
        this.poloniex = data;
      })
    },
    fetchPortfolio: function () {
      PortfolioService.getPortfolio()
      .then(portfolio => this.portfolio = portfolio)
    },
    calculateTotalVal: function () {
      var totalValue = 0;
      for (var asset in this.portfolio) {
        for (var currency in this.shrimpy) {
          if (currency.symbol === asset.code) {
            totalValue += (asset.amount * currency.priceUsd)
          }
        }
      }
      this.totalValue = totalValue;
    },
    fetchAll: function () {
      fetch('https://cors-anywhere.herokuapp.com/https://dev-api.shrimpy.io/v1/exchanges/poloniex/ticker')
      .then(res => res.json())
      .then(data => {
        console.log(data);
        this.shrimpy = data;
        PortfolioService.getPortfolio()
        .then(portfolio => this.portfolio = portfolio)
      })
      }
  },
  mounted(){
    // this.fetchShrimpyTicker();
    this.fetchPoloniex();
    // this.fetchPortfolio();
    // this.calculateTotalVal();
  }
}
</script>

<style lang="css" scoped>
/* @import url('https://fonts.googleapis.com/css?family=Gugi'); */

#view {
    }
</style>
