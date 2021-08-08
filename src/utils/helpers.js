//
//  Validate that the input is alphabetical with a lenght of 2 or more words, and at least 1 character each word
//
export function validateAlphaInput(input) {
  if (input.length > 0) {
    return input.match(/^[a-zA-Z]\w*/g);
  } else return false;
}
//
//  Validate that the input is a valid email
//
export function validateEmail(input) {
  if (input.length > 0) {
    return input.match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  } else {
    return false;
  }
}
