// Create the 'basemap' tile layer that will be the background of our map.
//let background = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
//  attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
//});
// OPTIONAL: Step 2
// Create the 'street' tile layer as a second background of the map
let street = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
})



// Create the map object with center and zoom options.
let myMap = L.map("map-id", {
  center: [34.03, -118.15],
  zoom: 15,
});

// Then add the 'basemap' tile layer to the map.
//background.addTo(myMap);
street.addTo(myMap);
