export const getAllDetails = (details) => {
  const detailsEntries = Object.entries(details);
  const results = [];

  for (const detailEntries of detailsEntries) {
    const [detail, qty] = detailEntries;

    if (typeof qty === "number" && qty > 0) {
      results.push({ [detail]: qty });
    }
  }

  return results;
};
