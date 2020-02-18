/**
 *
 * @param {*} path
 * @param {*} params
 * @param {*} method
 */
export default function base(path, params, method) {
  const options = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    method: method,
  };

  return requestAPI(path, options);
}

/**
 *
 * @param {*} path
 * @param {*} options
 */
export async function requestAPI(path, options) {
  let response = {};
  let jsonData = {};

  try {
    response = await fetch(path, options);
    const responseCopy = response.clone();

    jsonData = await responseCopy.json().catch(_ => response.text());
  } catch (e) {}

  return jsonData;
}
