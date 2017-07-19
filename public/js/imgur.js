$(document).ready(function() {
  $.urlParam = function(name)
  {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    return results[1] || 0;
  }
})

$('.login').click( function() {
  var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://api.imgur.com/3/account/" + $.urlParam('account_username'),
  "method": "GET",
  "headers": {
    "authorization": "Client-ID 53a51d30675430d"
  }
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
})
$('#btn').click( function() {
  var form = new FormData();
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.imgur.com/oauth2/token",
    "method": "POST",
    "headers": {},
    "processData": false,
    "contentType": false,
    "mimeType": "multipart/form-data",
    "data": form
  }

  $.ajax(settings).done(function (response) {
    console.log(response);
  }).error(function (request, status, error) {
        alert(request.responseText);
})
})
