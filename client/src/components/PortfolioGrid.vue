<template lang="html">
  <div id="portfolio-list">
    <link href="https://fonts.googleapis.com/css?family=Graduate|Merriweather" rel="stylesheet">

    <!-- <button class="newAsset" v-on:click="postAsset(payload)">Add new</button> -->
    <div class="portfolio" v-for="asset in portfolio">

      <div id="asset-container">
        <div :id="asset._id">

        </div>
        <img class="logo" :src="asset.url"> </img>
        <h2 id="assetName">{{asset.name}}</h2><h4 id="assetCode">({{asset.code}})</h4>
        <label class="label" for="id">You are currently holding</label>
        <input id="USD" type="number" name="amount" :value="asset.amount" :id="asset._id" v-on:change="increaseAsset"/>
        <h4>Price USD: {{getPrice(asset.code) | toCurrency}}</h4>
        <button id="RmvBtn" v-on:click="deleteAsset(asset)">Remove</button>

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
  filters: {
    toCurrency: function (value) {
      return new Intl.NumberFormat('en-US',  { style: 'currency', currency: 'USD' }).format(value);
  }},
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

      PortfolioService.putAsset(id, asset) // need id to tell it which object to update, asset is the full object that was getting passed in
      // of which the value (in the input box) was setting the amount key in asset object. The putAsset then updates the full asset object
      .then(res => {
        console.log('bus', res);
        eventBus.$emit('refresh-data') // sends data back to portfolioView .. refreshing page, asset will be updated
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
            backgroundColor: '#C1C8E4',
            type: 'line',
            borderColor: '#000000',
          },
          title: {
            text: 'Your asset values',

          },
          xAxis: {
            categories: [-7,-6,-5,-4,-3,-2,-1,0],
            title: {text: "days"}
          },
          yAxis: {
            title: {
              text: "US dollars"
            }
          },
          series: [{
            name: '',
            data:  value
          }],

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
  font-family: 'Merriweather', serif;
}

#asset-container{
  background-color: #5680E9;
  position: relative;
  font-family: 'Merriweather', serif;
  border-radius: 15px;
  padding-bottom: 30px;

}
.portfolio{
  background-color: white;
  display: inline-grid;
  width: 30%;
  margin: 10px;
  border-radius: 20px;
  text-align: center;
  font-family: 'Merriweather', serif;

}

/* .newAsset{
  display: block;
  width: 15em;
  height: 2.5em;
  background-color: grey;
  color: white;
  border-radius: 20em;
  font-family: 'Merriweather', serif;
} */

input[type="number"]{
    font-size:20px;
    border: 2px lightblue;
    border-radius: 4px;
    background-color: darkblue;
    color: white;
    text-align: center;
    font-family: 'Merriweather', serif;
    /* height: 45px; */
    /* width: 45px; */
    max-width: 60%;
    min-width: 10%;
    margin-top: 5px;
}

#RmvBtn {
  font-family: 'Merriweather', serif;
  background-color: #84CEEB;
  border-color: darkblue;
  color: black;
  text-align: center;
  height: 15px;
  width: 25%;
  border-radius: 15px;
  padding-bottom: 20px;
  font-size: 12px;
  display: inline-block;
}

.logo{
  padding-top: 20px
}

.label {
  font-size: 12px;
  color: white;
  font-style: italic;
}

/* #assetName {
  display: inline-block;
} */






</style>
