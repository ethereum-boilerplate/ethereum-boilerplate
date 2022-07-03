const isSnapArEnabled = () => {
  const queryParams = window.location.href.split("?");
  if (queryParams.length < 2) return undefined;
  const param = queryParams[1];
  return param === "lensathon";
};

export { isSnapArEnabled };
