use crypto_knight;
db.dropDatabase();

db.portfolio.insertMany([
  {
    code: 'DASH',
    name: 'Dash',
    amount: 10,
    url: ''
  },
  {
    code: 'BTC',
    name: 'Bitcoin',
    amount: 5,
    url: ''
  },
  {
    code: 'DGB',
    name: 'DigiByte',
    amount: 8,
    url: ''
  },
  {
    code: 'ETH',
    name: 'Ethereum',
    amount: 2,
    url: ''
  },
  {
    code: 'ZEC',
    name: 'Zcash',
    amount: 3,
    url: ''
  },
]);
