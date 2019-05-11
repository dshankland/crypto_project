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
            categories: ['Bitcoin', 'Zcash', 'Ethereum', 'NikNaks', 'Scampi Fries']
        },
        yAxis: {
            title: {
                text: 'Portfolio assets'
            }
        },
        series: [{
            data: [13, 10, 4, 34, 2]
        }]
    });
});
export default {
}
</script>

<style lang="css" scoped>
.container {
  min-width: 300px;
  height: 300px;
  margin: 0 auto;
}
</style>
