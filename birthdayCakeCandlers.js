function birthdayCakeCandles(candles) {
  let sortedCandlesHeight = candles.sort((a,b) => b - a);
  let heighestCandle = sortedCandlesHeight[0];
  let heighestCandleSum = 0;

  candles.forEach((candle) => {
    if (candle === heighestCandle) {
      heighestCandleSum++
    }
  })

  return heighestCandleSum
}

const candlesHeight = [3, 2, 1, 3]

console.log(birthdayCakeCandles(candlesHeight));