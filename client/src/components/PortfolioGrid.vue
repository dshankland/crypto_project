<template lang="html">
  <div id="portfolio-list">


    <!-- <button class="newAsset" v-on:click="postAsset(payload)">Add new</button> -->
    <div class="portfolio" v-for="asset in portfolio">


      <div id="asset-container">
        <div :id="asset._id">

        </div>

        <h2>{{asset.name}} ({{asset.code}})</h2>
        <h3>{{asset.amount}}</h3>
        <h3>{{getPrice(asset.code)}}</h3>
        <img class="logo" :src="asset.url"> </img>
        <button v-on:click="deleteAsset(asset)">Remove Asset</button>
      </div>
    </div>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import PortfolioService from '@/services/PortfolioService.js'

export default {
  props: ["portfolio", "shrimpy", "poloniex", "poloniex_map"],
  data(){
    return {
      assets: [],

    };

  },
  methods: {
    deleteAsset: function(asset) {
      eventBus.$emit('delete-asset', asset._id)
    },
    getPrice(assetSymbol) {

      return this.shrimpy.get(assetSymbol.toLowerCase()).priceUsd;
    }

  },
  updated(){
    this.portfolio.forEach(function(asset) {
      Highcharts.chart(asset._id, {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Your asset values'
        },
        xAxis: {
            categories: []
        },
        yAxis: {
            title: {
                text: "US dollars"
            }
        },
        series: [{
            name: asset.name,
            data:  [10, 12, 35, 1, 5]
        }]
    })

  });

}
}

</script>

<style lang="css" scoped>

#portfolio-list{
  margin-top: 10%;
  display: contents;
  /* flex-direction: column;
  flex-wrap: wrap; */
  color: black;
}

#asset-container{
  background-color: lightblue;
}
.portfolio{
  background-color: white;
  display: inline-grid;
  width: 30%;
  margin: 10px;
  border-radius: 20px;
  text-align: center;
}

.newAsset{
  display: block;
  width: 15em;
  height: 2.5em;
  background-color: grey;
  color: white;
  border-radius: 20em;
}

#logo{

}
</style>
