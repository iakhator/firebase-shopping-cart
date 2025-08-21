const notFound = (res, data) => {
  return res.status(404).json({
    data
  });
};
const foundSuccess = (res, data) => {
  return res.status(200).json({
    data
  });
};

export { foundSuccess, notFound };
//# sourceMappingURL=errorHandlers.mjs.map
