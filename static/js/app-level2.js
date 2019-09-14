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
var button2 = d3.select("#reset-btn");
button.on("click", function() {

    // Select the input element and get the raw HTML node
    var inputDateElement = d3.select("#datetime");
    var inputCityElement = d3.select("#citysighting");
    var inputCountryElement = d3.select("#countrysighting");
    var inputShapeElement = d3.select("#shapesighting");
  
    // Get the value property of the input element
    var inputDateValue = inputDateElement.property("value");
    var inputCityValue = inputCityElement.property("value");
    var inputCountryValue = inputCountryElement.property("value");
    var inputShapeValue = inputShapeElement.property("value");

  
    console.log(inputDateValue);
    console.log(inputCityValue);
    console.log(inputCountryValue);
    console.log(inputShapeValue);

    if (inputCityValue.length == 0) {
      var cityFilteredData = tableData;
    } else {
      var cityFilteredData = tableData.filter(sighting => sighting.city === inputCityValue);
    };
    if (inputDateValue.length == 0) {
      var dateFilteredData = cityFilteredData;
    } else {
      var dateFilteredData = cityFilteredData.filter(sighting => sighting.datetime === inputDateValue);
    };
    if (inputCountryValue.length == 0) {
      var countryFilteredData = dateFilteredData;
    } else {
      var countryFilteredData = dateFilteredData.filter(sighting => sighting.country === inputCountryValue);
    };
    if (inputShapeValue.length == 0) {
      var finalFilteredData = countryFilteredData;
    } else {
      var finalFilteredData = countryFilteredData.filter(sighting => sighting.shape === inputShapeValue);
    };
    console.log(cityFilteredData)
    console.log(dateFilteredData)
    console.log(countryFilteredData)
    console.log(finalFilteredData)
    var filteredData = tableData.filter(sighting => sighting.city === inputCityValue);
    
    var tableHeaderRowCount = 1;
    var table = document.getElementById('ufo-table');
    var rowCount = table.rows.length;
    for (var i = tableHeaderRowCount; i < rowCount; i++) {
        table.deleteRow(tableHeaderRowCount);
    };

    console.log(finalFilteredData);
    finalFilteredData.forEach((sighting) => {
      var row = tbody.append("tr");
      Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
      });
    });
});
button2.on("click", function(){
  var tableHeaderRowCount = 1;
  var table = document.getElementById('ufo-table');
  var rowCount = table.rows.length;
  for (var i = tableHeaderRowCount; i < rowCount; i++) {
      table.deleteRow(tableHeaderRowCount);
  };
  data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });
})
