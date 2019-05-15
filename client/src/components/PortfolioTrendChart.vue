<template lang="html">
  <div id="portfolio-trend">

  </div>
</template>

<script>
export default {
  props: ["cryptoGraphTotalValues"],

  mounted(){
    Highcharts.chart('portfolio-trend', {
      chart: {
          type: 'line'
      },
      title: {
          text: 'Your portfolio performance'
      },
      xAxis: {
          categories: []
      },
      yAxis: {
          title: {
              text: 'value in USD'
          }
      },
      series: [{
          name: 'Currency',
          data:  this.cryptoGraphTotalValues
      }]
  });
}
}
</script>

<style lang="css" scoped>
</style>
