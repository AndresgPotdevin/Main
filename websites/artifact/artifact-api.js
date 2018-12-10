var url = "https://steamcdn-a.akamaihd.net/apps/583950/resource/card_set_1.D7F0218A9EB22B71000F1E53740E1A6DE1196BD5.json";

function printData() {
  d3.json(url).then(function(data) {
    console.log(data);
  })
};

printData()
