function getSlug(title) {
  return title.toLowerCase().split(" ").join("-");
}

console.log(getSlug("Arrays for begginers")); // "arrays-for-begginers"
console.log(getSlug("English for developer")); // "english-for-developer"
console.log(getSlug("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
console.log(getSlug("How to become a JUNIOR developer in TWO WEEKS")); // Output: "how-to-become-a-junior-developer-in-two-weeks"
