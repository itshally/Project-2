/* eslint-disable no-undef */
$(document).ready(function() {
  // This file just does a GET request to figure out which user is logged in
  // and updates the HTML on the page
  $.get("/api/user_data").then(function(data) {
    $(".member-name").text(data.username.substr(0, data.username.indexOf("@"))
    .toUpperCase());
  });

  $('#start-btn').click(() => {
    window.location.assign('/mood-track');
  });
});
