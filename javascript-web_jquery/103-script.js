$(document).ready(function() {
  function fetchTranslation() {
    var languageCode = $("#language_code").val();
    var url = "https://www.fourtonfish.com/hellosalut/hello/";

    $.getJSON(url, { lang: languageCode })
      .done(function(response) {
        $("#hello").text(response.hello);
      })
      .fail(function() {
        $("#hello").text("Error fetching translation.");
      });
  }

  $("#btn_translate").click(fetchTranslation);

  $("#language_code").keypress(function(event) {
    if (event.which === 13) {
      fetchTranslation();
    }
  });
});
