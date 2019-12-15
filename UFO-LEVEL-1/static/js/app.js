// from data.js
var tableData = data;

// YOUR CODE HERE!
// Get a reference to the table body
var tbody = d3.select("tbody");

// // Step 5: Use d3 to update each cell's text with
// // weather report values (weekday, date, high, low)
data.forEach(function(ufoSightings) {
  //console.log(ufoSightings);
  var row = tbody.append("tr");
  Object.entries(ufoSightings).forEach(function([key, value]) {
    //console.log(key, value);
    // Append a cell to the row for each value
    // in the weather report object
    var cell = row.append("td");
    cell.text(value);
  });
});

// BONUS: Refactor to use Arrow Functions!
// data.forEach((weatherReport) => {
//   var row = tbody.append("tr");
//   Object.entries(weatherReport).forEach(([key, value]) => {
//     var cell = row.append("td");
//     cell.text(value);
//   });

 
var button = d3.select("#filter-btn");
var tbodydata = d3.select("tbody");

button.on("click", function() {
    //tbody.remove(); 
    //tbody.innerHTML = "";
    
    d3.select("tbody")
    .selectAll("tr")
    .remove(); 
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    //console.log(filteredData)
    var tbody = d3.select("tbody");
    filteredData.forEach(function(sightingData){
        var row = tbody.append("tr");
        Object.entries(sightingData).forEach(function([key, value]) {
            //console.log(key, value);
            // Append a cell to the row for each value
            // in the weather report object
            var cell = row.append("td");
            cell.text(value);
        });
    });
});
