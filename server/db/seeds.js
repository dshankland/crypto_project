use crypto_knight;
db.dropDatabase();

db.portfolio.insertMany([
  {
    code: 'DASH',
    name: 'Dash',
    amount: 10,
    url: 'https://assets.shrimpy.io/cryptoicons/png/108.png'
  },
  {
    code: 'BTC',
    name: 'Bitcoin',
    amount: 5,
    url: 'https://assets.shrimpy.io/cryptoicons/png/38.png'
  },
  {
    code: 'GNT',
    name: 'Golem',
    amount: 8,
    url: 'https://assets.shrimpy.io/cryptoicons/png/183.png'
  },
  {
    code: 'ETH',
    name: 'Ethereum',
    amount: 2,
    url: 'https://assets.shrimpy.io/cryptoicons/png/153.png'
  },
  {
    code: 'ZEC',
    name: 'Zcash',
    amount: 3,
    url: 'https://assets.shrimpy.io/cryptoicons/png/415.png'
  },
]);
