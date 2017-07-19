

$(document).ready(function() {
    $("#albumbtn").click(loadAlbums());
    $("body").on('click', ".album" , loadPhotos());
});

  function getToken(name){
    var results = new RegExp('[\/#]' + name + '=([^&#]*)').exec(window.location.href);
    if (results!=null && results[1]) {
    return decodeURIComponent(results[1]);
    }
    return null;
  }

  function getUrl(method, params) {
  if (!method) throw new Error('вы не указали метод');
  params = params || {};
  params['access_token'] = getToken('access_token');
  return 'https://api.vk.com/method/' + method + '?' + $.param(params);
  }

  function sendRequest(method,params,func) {
  $.ajax({
    url: getUrl(method,params),
    method: 'GET',
    dataType: 'JSONP',
    success: func,
    error: function(){
      console.log('error!');
    }
  })
  }

  function loadAlbums() {
    $("#albumbtn").click(function(){
    $("#albums").show();
    $(".photos").hide();
    sendRequest('photos.getAlbums' ,{need_covers:1}, function(data){
    getAlbums(data.response);
    });
  });
  }

  function getAlbums(albums) {
  var html = '';
  for (var i = 0; i < albums.length; i++) {
    var a = albums[i];
    html += '<li class="album" id="' + a.aid + '">' + '<img src="' + a.thumb_src+'" id="' + a.aid + '"/>' + '<h3 id="' + a.aid + '">' + a.title + '</h3>' + '</li>';
    $('#albums').html(html);

  }
  }

  function loadPhotos() {
    $("body").on("click", ".album" , function() {
      $(".photos").show();
      var ida = ($(this).attr("id"));
      $("#albums").hide();
      sendRequest('photos.get' , {album_id:ida}, function(data){
      getPhotos(data.response);
    })
    })
  }

  function getPhotos(photos) {
      var html = '';
    for (var i=0; i < photos.length; i++ ) {
      var p = photos[i];
      var url = p.src;
      var fname = url.substr(url.lastIndexOf("/")+1);
      html += '<li class="photo" id="'+ p.pid + '">' + '<img src="'+ p.src_big +'" data-desc="'+p.text+'" data-fname="'+fname+'"/>' + '</li>';
      $("#photos").html(html);
    }
  }
