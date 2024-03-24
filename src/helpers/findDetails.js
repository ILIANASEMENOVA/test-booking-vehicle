export const findDetails = (details, count) => {
  const detailsEntries = Object.entries(details);
  const results = [];

  let i = 0;
  while (i < count) {
    const randomIndex = Math.floor(Math.random() * detailsEntries.length);
    const [detail, qty] = detailsEntries[randomIndex];

    const keys = [];
    results.forEach((result) => keys.push(...Object.keys(result)));

    if (!keys.includes(detail) && typeof qty === "number" && qty > 0) {
      results.push({ [detail]: qty });
      i++;
    }
  }

  return results;
};
