<template lang="html">
<h1>Hi Cruella, today your portfolio is worth .. {{ value | toCurrency }} !</h1>
</template>

<script>
export default {
  props: ['value'],
  filters: {
    toTwoDecPlaces: function (value) {
      return value.toFixed(2);
    },
    toCurrency: function (value) {
      return new Intl.NumberFormat('en-US',  { style: 'currency', currency: 'USD' }).format(value);
    }
  }
}
</script>

<style lang="css" scoped>
</style>
