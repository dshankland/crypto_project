<template lang="html">
  <div id="portfolio-trend">

  </div>
</template>

<script>
export default {
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
          data:  [30000, 25000, 24000, 27000, 33000, 48000]
      }]
  });
}
}
</script>

<style lang="css" scoped>
</style>
