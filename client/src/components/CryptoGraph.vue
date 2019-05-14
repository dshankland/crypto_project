<template lang="html">
<div id="container">

</div>
</template>

<script>


export default {
  props: [
    "cryptoGraphLabels",
    "cryptoGraphValues"
  ],
  mounted(){
    Highcharts.chart('container', {
      chart: {
          type: 'column'


      },
      title: {
          text: 'Your asset values'
      },
      xAxis: {
          categories: this.cryptoGraphLabels
      },
      yAxis: {
          title: {
              text: 'US dollars'
          }
      },
      series: [{
          name: 'Currency',
          data:  this.cryptoGraphValues
      }]
  });
}
}
</script>

<style lang="css" scoped>
.container {
  min-width: 300px;
  height: 300px;
  margin: 0 auto;
}
</style>
