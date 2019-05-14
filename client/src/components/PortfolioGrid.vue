<template lang="html">
  <div id="portfolio-list">


    <!-- <button class="newAsset" v-on:click="postAsset(payload)">Add new</button> -->
    <div class="portfolio" v-for="asset in portfolio">


      <div id="asset-container">
        <div :id="asset._id">

        </div>

        <h2>{{asset.name}} ({{asset.code}})</h2>
        <h3>{{asset.amount}}</h3>
        <input type="number" name="amount" :value="asset.amount" :id="asset._id" v-on:change="increaseAsset"/>
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
    },
    increaseAsset: function(e) {
      const value = e.target.value;

      const id = e.target.id;
      console.log('id', id);

      const asset = {
        amount: value
      }

      PortfolioService.putAsset(id, asset)
      .then(res => {
        console.log('bus', res);
        eventBus.$emit('refresh-data')
      })
    }

  },
  watch: {
    poloniex_map: function(newValue, oldValue)  {
      // const poloniexArray = this.poloniex_map.entries(this.poloniex_map)
      // console.log('poloarray', poloniexArray);
      newValue.forEach(function(value, key, map) {
        // console.log("newValue ",newValue);
        // console.log("key", key);
        // console.log("value", value);
        // console.log("map", map);
        Highcharts.chart(key, {
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
            name: '',
            data:  value
          }]
        })
      });
    }
  },
  // added mounted section to trigger refresh-data, which in turn should trigger
  // the watch for poloniex_map
  mounted() {
    eventBus.$emit('refresh-data')
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
