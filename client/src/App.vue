<template lang="html">
 <div id="main">
   <Greeting :value="totalValue"/>
   <NavBar/>
   <router-view :shrimpy="shrimpy" :portfolio="portfolio" id="view"/>
 </div>
</template>

<script>
import NavBar from '@/components/NavBar';
import Greeting from '@/components/Greeting';
import * as fetchMethods from "@/FetchMethods";
import PortfolioService from "@/services/PortfolioService"
import {eventBus} from '@/main.js'

export default {
  components: { NavBar, Greeting},
  data() {
    return {
      shrimpy: new Map(),
      poloniex: [],
      portfolio: [],
      totalValue: 1000,
    }
  },
  methods: fetchMethods.default,
  mounted(){

    this.fetchAll();

    eventBus.$on('delete-asset', (assetId) => {
      PortfolioService.deleteAsset(assetId).then(res => {

        this.fetchAll();

      });

    })
  }
}
</script>

<style lang="css" scoped>
/* @import url('https://fonts.googleapis.com/css?family=Gugi'); */

#view {
    }
</style>
