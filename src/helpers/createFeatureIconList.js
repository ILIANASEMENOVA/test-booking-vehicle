export const createFeatureIconList = (details) =>
  ["adults", "transmission", "engine"].concat(
    details.map((detail) => Object.keys(detail)[0])
  );
