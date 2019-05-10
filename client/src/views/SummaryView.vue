<template lang="html">
  <div>
<h1>Summary View</h1>
<CryptoGraph/>
<Wishlist/>
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

}
</script>

<style lang="css" scoped>
</style>
