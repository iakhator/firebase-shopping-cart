const capitalize = (name) => {
  return name == null ? void 0 : name.toLowerCase().split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
};

export { capitalize as c };
//# sourceMappingURL=index-qUEO24gb.mjs.map
