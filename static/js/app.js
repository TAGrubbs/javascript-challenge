// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
var button = d3.select("#filter-btn");
button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
  
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
     
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue);
    var tableHeaderRowCount = 1;
    var table = document.getElementById('ufo-table');
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    };

    console.log(filteredData);
    filteredData.forEach((sighting) => {
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
});
