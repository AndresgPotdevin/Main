// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Step 2:  Use d3 to append one table row `tr` for each weather report object
data.forEach((ufoSighting) => {
  console.log(ufoSighting);
  var row = tbody.append("tr");
});

// Step 3:  Use `Object.entries` to console.log each weather report value
data.forEach((ufoSighting) => {
  console.log(ufoSighting);
  var row = tbody.append("tr");

  Object.entries(ufoSighting).forEach(([key, value]) => {
    console.log(key, value);
  });
});

// Step 4: Use d3 to append 1 cell per weather report value (weekday, date, high, low)
data.forEach((ufoSighting) => {
  console.log(ufoSighting);
  var row = tbody.append("tr");

  Object.entries(ufoSighting).forEach(([key, value]) => {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = tbody.append("td");
  });
});

// Step 5: Use d3 to update each cell's text with
data.forEach((ufoSighting) => {
  console.log(ufoSighting);
  var row = tbody.append("tr");
  Object.entries(ufoSighting).forEach(function([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = tbody.append("td");
    cell.text(value);
  });
});
