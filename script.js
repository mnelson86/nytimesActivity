var articlesDiv = $("#articles");
var apiKey = "aHb0UUpGMSgyydcQJ7wKxYaoB2lFT0A4";
var searchTerm = "";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?" + searchTerm + "key=" + apiKey; 

$("#submitButton").click( function() {
    searchTerm = $("search-term").value;
    $.ajax({
        url: queryURL
        method: "GET"
    }).then(function (response) {

    })
})