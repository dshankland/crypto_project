<template lang="html">
<h1>Hi Cruella, today your portfolio is worth .. ${{ value | toTwoDecPlaces }} !</h1>
</template>

<script>
export default {
  props: ['value'],
  filters: {
    toTwoDecPlaces: function (value) {
      return value.toFixed(2);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
