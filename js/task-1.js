function slugify(title) {
  return title.toLowerCase().split(" ").join("-");
}

console.log(slugify("Arrays for begginers")); // Output: "arrays-for-begginers"
console.log(slugify("English for developer")); // Output: "english-for-developer"
console.log(slugify("Ten secrets of JavaScript")); // Output: "ten-secrets-of-javascript"
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // Output: "how-to-become-a-junior-developer-in-two-weeks"
