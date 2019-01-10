// D3 Table with all Launches data:
/*============================================================================*/
var tbody = d3.select("tbody");

d3.json("http://127.0.0.1:5000/db/launches")
  .then(function(data) {
    console.log(data);
    let tr = d3.select("tbody")
      .selectAll("tr")
      .data(data)
      .enter()
      .append("tr")
      .attr("class",function(d){
        if (d.launch_success === false){
          return "table-danger"
        } else {
          return "table-success"
        }
      });

    let td = tr.selectAll("td")
      .data(function (d) {
        return [d.launch_year,d.mission_name,d.rocket.rocket_name,d.launch_success];
      })
      .enter()
      .append("td")
      .text(function (d) {
        return d;
      });
    });
