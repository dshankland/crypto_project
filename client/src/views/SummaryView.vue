<template lang="html">
  <div>
<h1>Summary View</h1>
<CryptoGraph v-if="cryptoGraphLabels.length> 1 && cryptoGraphValues.length> 1" :cryptoGraphLabels="cryptoGraphLabels" :cryptoGraphValues="cryptoGraphValues"/>
<Wishlist :totalValue="totalValue"/>
</div>
</template>

<script>
import CryptoGraph from '@/components/CryptoGraph.vue';
import Wishlist from '@/components/Wishlist.vue';

export default {
  components: {
    CryptoGraph,
    Wishlist
  },

  props: [
    "cryptoGraphLabels",
    "cryptoGraphValues",
    "totalValue"
  ]
}
</script>

<style lang="css" scoped>
</style>
