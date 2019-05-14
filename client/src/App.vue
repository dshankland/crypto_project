<template lang="html">
 <div id="main">
  <Header/>
  <Greeting :value="totalValue"/>
  <NavBar/>

  <router-view id="view" :poloniex="poloniex" :totalValue="totalValue" :shrimpy="shrimpy"
  :shrimpy_old="shrimpy_old" :shrimpy_icons="shrimpy_icons" :portfolio="portfolio"
  :cryptoGraphLabels="cryptoGraphLabels" :cryptoGraphValues="cryptoGraphValues"
  :poloniex_map="poloniex_map"/>

 </div>
</template>

<script>
import Header from '@/components/Header'
import NavBar from '@/components/NavBar';
import Greeting from '@/components/Greeting';
import * as fetchMethods from "@/FetchMethods";
import PortfolioService from "@/services/PortfolioService"
import {eventBus} from '@/main.js'

export default {
  components: { Header, NavBar, Greeting},
  data() {
    return {
      shrimpy_old: [],
      shrimpy: new Map(),
      shrimpy_icons: new Map(),
      poloniex: [],
      portfolio: [],
      totalValue: 0,
      cryptoGraphLabels: [],
      cryptoGraphValues: [],
      cryptoGraphCodes: [],
      poloniex_map: null
    }
  },
  methods: fetchMethods.default,
  mounted(){

    this.fetchPoloniex();
    this.fetchAll();
    eventBus.$on('refresh-data', this.fetchAll);
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
