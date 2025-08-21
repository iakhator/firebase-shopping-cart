const capitalize = (name) => {
  return name == null ? void 0 : name.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};
const countryMap = {
  us: "United States",
  ca: "Canada",
  na: "Nigeria",
  uk: "United Kingdom"
};

export { capitalize as a, countryMap as c };
//# sourceMappingURL=index-C_WjPGsK.mjs.map
