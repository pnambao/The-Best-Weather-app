
$(document).ready(function () {
    //search button feature
    $("#search-button").on("click", function () {
        //grab value in input search-value.
        var searchTerm = $("#search-value").val();
        //empty input field.
        $("#search-value").val("");
        weatherFunction(searchTerm);
        weatherForecast(searchTerm);
    });

    