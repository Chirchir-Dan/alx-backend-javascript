// Export a const instance of WeakMap and name it weakMap
export const weakMap = new WeakMap();

/**
 * queryAPI function accepts an endpoint object and tracks the number of times it is queried.
 * If the number of queries reaches 5 or more, it throws an error "Endpoint load is high".
 *
 * @param {Object} endpoint - The endpoint to query.
 * @throws {Error} When the number of queries reaches 5 or more.
 */
export function queryAPI(endpoint) {
  // Get the current count from the weakMap for the given endpoint
  const count = weakMap.get(endpoint) || 0;

  // If the count reaches 5, throw an error
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }

  // Otherwise, increment the count for the endpoint and update the weakMap
  weakMap.set(endpoint, count + 1);
}
