import PortfolioService from '@/services/PortfolioService';

export default {

  fetchShrimpyTicker: function (){
    fetch('https://cors-anywhere.herokuapp.com/https://dev-api.shrimpy.io/v1/exchanges/poloniex/ticker')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      this.shrimpy = data;
    })
  },
  fetchPoloniex: function (){
    fetch('https://poloniex.com/public?command=returnChartData&currencyPair=USDT_BTC&start=1546300800&end=1546646400&period=14400')
    .then(res => res.json())
    .then(data => {
      this.poloniex = data;
    })
  },
  fetchPortfolio: function () {
    PortfolioService.getPortfolio()
    .then(portfolio => this.portfolio = portfolio)
  },
  calculateTotalVal: function () {
    var totalValue = 0;
    for (var asset of this.portfolio) {
      for (var currency of this.shrimpy_old) {
        if (currency.symbol === asset.code) {
          this.cryptoGraphLabels.push(asset.name);
          this.cryptoGraphValues.push(asset.amount * currency.priceUsd)
          totalValue += (asset.amount * currency.priceUsd)
        }
      }
    }
    this.totalValue = totalValue;
  },
  fetchAll: function () {
    fetch('https://cors-anywhere.herokuapp.com/https://dev-api.shrimpy.io/v1/exchanges/poloniex/ticker')
    .then(res => res.json())
    .then(data => {
      this.shrimpy_old = data;
      this.shrimpy = new Map(data.map(i => [i.symbol.toLowerCase(), i]));

      fetch('https://cors-anywhere.herokuapp.com/https://dev-api.shrimpy.io/v1/exchanges/poloniex/assets')
      .then(res => res.json())
      .then(data => {
        this.shrimpy_icons = new Map(data.map(i => [i.tradingSymbol.toLowerCase(), i]));

      })
      PortfolioService.getPortfolio()
      .then((portfolio) => {
        this.portfolio = portfolio;
        this.calculateTotalVal();

      })
    })
    }
}
