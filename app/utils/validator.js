const typeObject = {
  email: {
    regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  },
  fullName: {
    regex: /.*\S.*/,
  },
};

export const inputTypes = {
  email: 'email',
  fullName: 'fullName',
};
/**
 * Validate function.
 *
 * @param {*} text
 * @param {*} type
 */
export function validate(text, type) {
  const regex = typeObject[type].regex;

  return RegExp(regex).test(text);
}
