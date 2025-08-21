const useCurrency = () => {
  const toUSD = (value) => {
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    });
    return formatter.format(value);
  };
  return {
    toUSD
  };
};

export { useCurrency as u };
//# sourceMappingURL=useCurrency-jRJRFhrU.mjs.map
