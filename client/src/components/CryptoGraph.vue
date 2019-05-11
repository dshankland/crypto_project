<template lang="html">
<div id="container" style="min-width: 300px; height: 300px; margin: 0 auto">

</div>
</template>

<script>

document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('container', {
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
            data: this.cryptoGraphValues
        }]
    });
});
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
