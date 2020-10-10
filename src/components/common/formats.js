function NumberFormat({ value }) {
  return new Intl.NumberFormat("en-US").format(value);
}
function CurrencyFormat({ value, signDisplay = "auto" }) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    signDisplay,
  }).format(value);
}
export { NumberFormat, CurrencyFormat };
