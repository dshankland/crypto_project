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
        categories: ["-7 days","-6 days","-5 days","-4 days","-3 days","-2 days","-1 days","today"]
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
  },
  // added watch for cryptoGraphTotalValues to trigger redraw of chart
  watch: {
    cryptoGraphTotalValues: function(newValue, oldValue){
      Highcharts.chart('portfolio-trend', {
        chart: {
          type: 'line'
        },
        title: {
          text: 'Your portfolio performance'
        },
        xAxis: {
          categories: ["-7 days","-6 days","-5 days","-4 days","-3 days","-2 days","-1 days","today"]
        },
        yAxis: {
          title: {
            text: 'value in USD'
          }
        },
        series: [{
          name: 'Currency',
          data:  newValue
        }]
      });
    }
  }
}
</script>

<style lang="css" scoped>
</style>
