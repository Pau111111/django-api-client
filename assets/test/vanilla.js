var url1 = "http://127.0.0.1:8000/api/company/1";
var url2 = "https://jsonplaceholder.typicode.com/posts";

var myHeaders = new Headers();
myHeaders.append(
  "Authorization",
  "Api-Key 0N2xnFU1.SYDx1uMbGsyqAQ3s0gJlNJio1npfaJn1"
);

// myHeaders.append("Access-Control-Allow-Origin", "*");

var requestOptions = {
  method: "GET",
  headers: myHeaders,
  // mode: "cors",
};

fetch(url1, requestOptions)
  .then((response) => response.text())
  .then((result) => console.log(result))
  .catch((error) => console.log("error", error));
