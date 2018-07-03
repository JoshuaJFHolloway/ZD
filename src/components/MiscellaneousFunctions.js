export function currencyConverter(state) {
  console.log("this is state");
  console.log(state);
  const rates = state.results;
  const GBP = rates.GBP;
  console.log("this is rates");
  console.log(rates);
  const EUR = rates.EUR;
  console.log(EUR);

  return EUR / GBP;
}

export function cheeseBlockCalculator(state) {
  const cheeseMoney = state.params.cheeseMoney;
  const euros = currencyConverter(state) * cheeseMoney;
  const cheeseBlock = 3.24;

  return euros / cheeseBlock;
}

