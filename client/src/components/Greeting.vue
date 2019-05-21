<template lang="html">
<h1>Hi Cruella, today your portfolio is worth {{ value | toCurrency }}</h1>
</template>

<script>
export default {
  props: ['text']
}
</script>

<style lang="css" scoped>

h1 {
  font-size: 30px;
  max-width: 95%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  margin-bottom: 10px;

}
</style>
