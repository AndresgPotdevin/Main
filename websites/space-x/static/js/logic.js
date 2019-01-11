// Create a map object
var myMap = L.map("map", {
  center: [27.09, -115.71],
  zoom: 4
});

const API_KEY = "pk.eyJ1Ijoia3VsaW5pIiwiYSI6ImNpeWN6bjJ0NjAwcGYzMnJzOWdoNXNqbnEifQ.jEzGgLAwQnZCv9rA6UTfxQ";

// Add a tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: API_KEY
}).addTo(myMap);

// An array containing each site's name, location, and general info
var sites = [{
  location: [33.9164, -118.3526],
  name: "Hawthorne,CA",
  launches: "0",
  info: "SpaceX Headquarters"
},
{
  location: [28.3922, -80.6077],
  name: "Cape Canaveral, FL",
  launches: "37",
  info: "This site is used for Falcon 9 launches to low Earth and geostationary orbits. SLC-40 is not capable of supporting Falcon Heavy launches. As part of SpaceX's booster reusability program, the former Launch Complex 13 at Cape Canaveral, now renamed Landing Zone 1, has been designated for use for Falcon 9 first-stage booster landings.Falcon 9 Flight 20 landing on Landing Zone 1 in December 2015"
},
{
  location: [34.7420, -120.5724],
  name: "Vandenburg AFB",
  launches: "13",
  info: "This site is used for payloads to polar orbits. The Vandenberg site can launch both Falcon 9 and Falcon Heavy,[154] but cannot launch to low inclination orbits."
},
{
  location: [28.5729, -80.6490],
  name: "Kennedy Space Center",
  launches: "15",
  info: "The pad was subsequently modified to support Falcon 9 and Falcon Heavy launches. SpaceX has launched 13 Falcon 9 missions from Launch Pad 39A and more recently the Falcon Heavy, on February 6, 2018."
},
{
  location: [8.7167, -167.7333],
  name: "Kwajalein Atoll",
  launches: "5",
  info: "Was the site of the first  SpaceX launch on March 24, 2006"
}

];


for (var i = 0; i < sites.length; i++) {
  var city = sites[i];
  L.marker(city.location)
    .bindPopup("<h1>" + city.name + "</h1> <hr> <h3> Number of Launches " + city.launches + "</h3> <hr> <h3> Info on Launch Site: " + city.info + "</h3>")
    .addTo(myMap);
}
