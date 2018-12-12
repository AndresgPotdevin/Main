// Grab data from data.js
var filteredData = data;

// Get a reference for the filter Button
var submit = d3.select("#filter-btn");

// Get a reference to the table body
var tbody = d3.select("tbody");


submit.on("click", function() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);

  var filteredData = data.filter(date => date.datetime === inputValue);

  console.log(filteredData);

  // filteredData.forEach((ufoSighting) => {
  //   if (filteredData.datetime != inputValue) {
  //     tbody.removeChild("tr");
  //   }
  // });

  filteredData.forEach((ufoSighting) => {
    tbody.append("tr");
    Object.entries(ufoSighting).forEach(function([key, value]) {
      console.log(key, value);
      tbody.append("td").text(value);
    });
  });
});
