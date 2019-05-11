<template lang="html">
<div id="container">

</div>
</template>

<script>


    const myChart = setTimeout(function () {
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
                text: 'asset value in USD'
            }
        },
        series: [{
            name: 'Currency',
            data:  this.cryptoGraphValues
        }]
    });

 }, 2000);

export default {
  props: [
    "cryptoGraphLabels",
    "cryptoGraphValues"
  ]
}
</script>

<style lang="css" scoped>
.container {
  min-width: 300px;
  height: 300px;
  margin: 0 auto;
}
</style>
