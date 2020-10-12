function getNoCircleStringify(json) {
  let cache = [];
  let result = JSON.stringify(json, (key, value) => {
    if (typeof value === "object" && value !== null) {
      // Duplicate reference found, discard key
      if (cache.includes(value)) return;

      // Store value in our collection
      cache.push(value);
    }
    return value;
  });
  cache = null;
  return result;
}

export { getNoCircleStringify };
