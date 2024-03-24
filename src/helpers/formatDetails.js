export const formatDetails = (details) =>
  details.map((detail) => {
    const [feature, qty] = Object.entries(detail)[0];
    if (qty === 1) return feature;
    return `${qty} ${feature}`;
  });
