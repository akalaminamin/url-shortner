// const url = 'https://www.google.com/search?client=firefox-b-d&q=google+search';
const longUrl = document.getElementById("longUrl").value;
console.log(longUrl)
const obj = {};
const urlShortener = (longURL = "asdfas") => {
    console.log(longUrl)
  let shortURL = "bit.ly/" + longURL.replace(/[^a-z]/g, "").slice(-4);
  if (!obj[shortURL]) {
    obj[shortURL] = longURL;
  }
  console.log(shortURL)
  return shortURL;
};

const urlRedirector = (shortURL = "") => {
  return obj[shortURL];
};
const short = urlShortener(longUrl);
const original = urlRedirector(short);

console.log(short);
console.log(original);
