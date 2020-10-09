function NumberFormat({ value }) {
  return new Intl.NumberFormat("en-US").format(value);
}
function CurrencyFormat({ value }) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(value);
}
export { NumberFormat, CurrencyFormat };
