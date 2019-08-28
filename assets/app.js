const API_KEY = 'kJOiAvWAUX8EQeuLZVl9PP1vXBYxhkIw'

var searchTerm = $('#searchTerm');
let numbersToRetrive = $('#recordsToRetrieve');
let startYear = $('#startYear');
let endYear = $('#endYear');

let queryURL = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=Obama&api-key=kJOiAvWAUX8EQeuLZVl9PP1vXBYxhkIw`;

function clearTheInputs() {
  searchTerm = '';
  numbersToRetrive = '';
  startYear = '',
  endYear = ''
};

function searchForResults() {
// Testing for Inputs
  console.log(searchTerm.val());
  console.log(numbersToRetrive.val());
  console.log(startYear.val());
  console.log(endYear.val());
// ------------------------
// ajax parameters for api call.
  let options = {
    url: queryURL,
    method: 'GET'
  } 

 // Actual Ajax call 
  $.ajax(options).then(function(response){
    console.log(response);
  });
};



$('#search').on('click', searchForResults);
$('#clear').on('click', clearTheInputs);