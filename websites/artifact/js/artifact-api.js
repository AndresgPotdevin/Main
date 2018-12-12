var set_00 = JSON.parse("js/set_00_card_data");

function printData() {
  d3.json(set_00).then(function(data) {
    console.log(data);
  })
};


// printData()
