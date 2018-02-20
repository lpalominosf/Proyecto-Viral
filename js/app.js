// API KEY AIzaSyCieqwTyi9PwFlNRTb99Ok0AGVEw0cOaXE

$(function() {
  $("#formulario").on("submit", function(e) {
    e.preventDefault();
    // prepare the request
    var request = 'https://developers.google.com/apis-explorer/#p/youtube/v3/youtube.search.list?';
        part = snippet,
        order = viewCount,
        q = skateboarding+dog,
        type = video,
        videoDefinition = high
        // execute the request
        request.execute(function(response){
        console.log(response);
      });
    })
  });

function init() {
  gapi.client.setApiKey("AIzaSyCieqwTyi9PwFlNRTb99Ok0AGVEw0cOaXE");
  gapi.client.load("youtube", "v3", function() {
    // yt api is ready
  });
}