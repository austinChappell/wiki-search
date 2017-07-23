$(document).ready(function(){

  var liOpen = '<li class="article">';
  var liClose = '</li>';
  var aOpen = '<a href=' + wikiURL + '>'
  var h3Open = '<h3 class="article-title">';
  var h3Close = '</h3>';
  var pOpen = '<p class="snippet">';
  var pClose = '</p>';
  var wikiURL = 'https://en.wikipedia.org/wiki/';

  $('#form').submit(function(e){
    e.preventDefault();
    var search = $('#wiki-search').val();
    $('#wiki-search').val('');
    $('.article').remove();
    $('#container').removeClass('container');
    $('#container').addClass('search-container');

    $.getJSON('https://en.wikipedia.org/w/api.php?format=json&action=query&list=search&srsearch=' + search + '&srlimit=10&prop=revisions&callback=?', function(json){
      for(var i = 0; i < json.query.search.length; i++) {
        var title = json.query.search[i].title;
        var snippet = json.query.search[i].snippet;
        var titleURL = title.replace(/ /gi, '_');
        $('.search-results').append('<div id="wrapper"><a href=' + wikiURL + titleURL + ' target="_blank">' + liOpen + h3Open + title + h3Close + pOpen + snippet + pClose + liClose + '</a></div>');
      }
    });
  });
});
