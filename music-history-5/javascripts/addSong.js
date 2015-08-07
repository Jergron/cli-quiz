define(["jquery"], function($){
  $(document).ready(function() {
      $( "#addSong" ).click(function() {
        var list = {
          "album": {
            "name":$("#albumName").val(),
            "year":$("#albumYear").val()
          }, 
          "artist": $("#artistName").val(), 
          "title": $("#songTitle").val()
        };
      $.ajax({
        url: "https://blazing-heat-6599.firebaseio.com/songs.json",
        method: "POST",
        data: JSON.stringify(list)
      }).done(function(addSong){
      });
    });
  });
});

