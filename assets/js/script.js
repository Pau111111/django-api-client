// Event listeners
$("#btnCallTest").on("click", djangoApiCall);

//Functions
function djangoApiCall() {
  var url1 = "http://127.0.0.1:8000/api/company/1";
  var url2 = "https://jsonplaceholder.typicode.com/posts";

  var settings = {
    url: url1,
    method: "GET",
    timeout: 0,
    headers: {
      Authorization: "Api-Key 0N2xnFU1.SYDx1uMbGsyqAQ3s0gJlNJio1npfaJn1",
      //   "Access-Control-Allow-Origin": "*",
      //   "Access-Control-Allow-Credentials": "true",
      //   "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
      //   "Access-Control-Allow-Headers":
      // "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, accept, Content-type",
    },
  };

  $.ajax(settings)
    .done(function (response, textStatus, request) {
      console.log(response);
      console.log(textStatus);
      console.log(request);
      console.log(request.getResponseHeader("File-Name"));
      console.log(request.getAllResponseHeaders());

      var fileName = request.getResponseHeader("File-Name");

      if (fileName == null) {
        var now = new Date();
        fileName =
          "file-" +
          now.getDate() +
          "-" +
          (now.getMonth() + 1) +
          "-" +
          now.getFullYear();
      }

      download(fileName, response);
    })
    .fail(function (request, status, error) {
      alert("Request failed");
    });
}

function download(filename, text) {
  var element = document.createElement("a");
  element.setAttribute(
    "href",
    "data:text/plain;charset=utf-8," + encodeURIComponent(text)
  );
  element.setAttribute("download", filename);

  element.style.display = "none";
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}
