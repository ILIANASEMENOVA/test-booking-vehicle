export const createFeatureList = (features, adults, transmission, engine) =>
  [`${adults} adults`, transmission, engine].concat(features);
