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
  fetchPortfolio: function () {
    PortfolioService.getPortfolio()
    .then(portfolio => this.portfolio = portfolio)
  },
  fetchPoloniex: function (){
    const promises = this.cryptoGraphCodes.map(code => {
      const end = ((new Date).getTime())/1000;
      const start = end - 604800
      return fetch(`https://poloniex.com/public?command=returnChartData&currencyPair=USDT_${code}&start=${start}&end=${end}&period=86400`)
      .then(res => res.json())
    })

    Promise.all(promises)
    .then((data) => {
      this.poloniex = data;
      this.poloniex_map = new Map(data.map((currency, index) => [this.portfolio[index]._id, currency.map(current => current.open)]));
      this.calculateHistoricalTotalVal();

    })
  },


  calculateTotalVal: function () {
    this.cryptoGraphCodes = [];
    this.cryptoGraphLabels = [];
    this.cryptoGraphValues = [];
    var totalValue = 0;
    for (var asset of this.portfolio) {
      for (var currency of this.shrimpy_old) {
        if (currency.symbol === asset.code) {
          this.cryptoGraphLabels.push(asset.name);
          this.cryptoGraphValues.push(asset.amount * currency.priceUsd);
          this.cryptoGraphCodes.push(asset.code);
          totalValue += (asset.amount * currency.priceUsd)
        }
      }
    }
    this.totalValue = totalValue;
  },

  calculateHistoricalTotalVal: function () {
    this.cryptoGraphTotalLabels = [];
    this.cryptoGraphTotalValues = [];
    for (let i = 0; i < 9; i++) {
      var index = 0;
      var totalDailyValue = 0;
      for (var asset of this.portfolio) {
        totalDailyValue += (asset.amount * this.poloniex[index][i].open)
        index += 1;
      }
      this.cryptoGraphTotalValues.push(totalDailyValue);
    }
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
        console.log('fetching all', portfolio);
        this.portfolio = portfolio;
        this.calculateTotalVal();
        this.fetchPoloniex();
        // this.calculateHistoricalTotalVal();
      })


    })
    }
}
