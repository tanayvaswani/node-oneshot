const url = require("url");
const myURL = new URL(
  "https://tanayvaswani.com:6000/hello.html?id=24&status=active"
);

// Serialized URL
console.log(myURL.href);
console.log(myURL.toString());

// Host or root domain => Includes port number
console.log(myURL.host);

// Hostname => Does not include port number
console.log(myURL.hostname);

// Pathname
console.log(myURL.pathname);

// Serializeed query
console.log(myURL.search);

// Params objects
console.log(myURL.searchParams);

// Add Param
myURL.searchParams.append("abc", "123");
console.log(myURL.searchParams);

// Loop through the parameters (params)
myURL.searchParams.forEach((value, name) => {
  console.log(`${name}: ${value}`);
});
