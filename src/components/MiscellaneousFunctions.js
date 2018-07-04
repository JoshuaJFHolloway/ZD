export function currencyConverter(rates) {
  const { GBP, EUR } = rates;
  let convertedCurrency = null;

  if (rates) {
    console.log("Rates:", rates);
    console.log("EUR", EUR);
    console.log("GBP", GBP);

    convertedCurrency = EUR / GBP;
  }

  return convertedCurrency;
}

export function cheeseBlockCalculator(amount, rates) {
  const euros = currencyConverter(rates) * amount;
  const cheeseBlock = 3.24;

  return euros / cheeseBlock;
}

