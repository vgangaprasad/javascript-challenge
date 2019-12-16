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
    console.log(tbodydata)
    console.log(button)
    d3.select("tbody")
    .selectAll("tr")
    .remove(); 
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");
    var selDataset = d3.select("#selDataset");
    var selInput = selDataset.property("value");
    var arraylength = 0;
    console.log("Seletec Dataset");
    console.log(selInput);

    switch(selInput) {
      case "datetime":
      var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
      if(filteredData.length === 0){
         alert("No Rows Found - Enter the date in MM/DD/YYYY format")
      } else {
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
      }

        break;
  
      case "city":
        var filteredData = tableData.filter(sighting => sighting.city === inputValue);
        //console.log(filteredData)
        var tbody = d3.select("tbody");
        if(filteredData.length === 0){
          alert("No Rows Found - Enter a different city")
        } else {
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
        };
         break;
  
      case "state":
        var filteredData = tableData.filter(sighting => sighting.state === inputValue);
        //console.log(filteredData)
        var tbody = d3.select("tbody");
        if(filteredData.length === 0){
          alert("No Rows Found - Enter a different state in 2 char format")
        } else {
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
        };
        break;

      case "country":
        var filteredData = tableData.filter(sighting => sighting.country === inputValue);
        //console.log(filteredData)
        var tbody = d3.select("tbody");
        if(filteredData.length === 0){
          alert("No Rows Found - Enter a different country in 2 char")
        } else {
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
        };
        break;

      case "shape":
        var filteredData = tableData.filter(sighting => sighting.shape === inputValue);
        //console.log(filteredData)
        var tbody = d3.select("tbody");
        if(filteredData.length === 0){
          alert("No Rows Found - Enter a different shape")
        } else {
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
        };
        break;
  
      default:
        alert("default");
        break;
    }

var resbutton = d3.select("#reset-btn");
var tbodydata = d3.select("tbody");

resbutton.on("click", function() {

    d3.select("tbody")
    .selectAll("tr")
    .remove(); 
    //tbody.remove(); 
    //tbody.innerHTML = "";
    var resetData = tableData
    //console.log(filteredData)
    var tbody = d3.select("tbody");
    if(resetData.length === 0){
      alert("No Rows Found")
    } else {
     var tbody = d3.select("tbody");
     resetData.forEach(function(sightingData){
         var row = tbody.append("tr");
         Object.entries(sightingData).forEach(function([key, value]) {
             //console.log(key, value);
             // Append a cell to the row for each value
             // in the weather report object
             var cell = row.append("td");
             cell.text(value);
         });
     });
  };
});
});