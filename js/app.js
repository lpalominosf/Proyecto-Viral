// API KEY AIzaSyCieqwTyi9PwFlNRTb99Ok0AGVEw0cOaXE

$(function() {
  $("form").on("submit", function(e) {
    e.preventDefault();
    // prepare the request
    var request = gapi.client.youtube.search.list({
      part: "snippet",
      type: "video",
      q: encodeURIComponent($("#search").val()).replace(/%20/g, "+"),
    });
  });
});

function init() {
  gapi.client.setApiKey("AIzaSyCieqwTyi9PwFlNRTb99Ok0AGVEw0cOaXE");
  gapi.client.load("youtube", "v3", function() {
    // yt api is ready
  });
}