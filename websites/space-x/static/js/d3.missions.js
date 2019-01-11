// D3 Mission Data descriptions:
/*============================================================================*/
let allMissions = d3.json("http://127.0.0.1:5000/db/missions")
  .then((data)=>{
    let dataBinding = d3.selectAll("#mission-data").selectAll("div")
        .data(data)
      .enter().append("div")
        // .attr("id", (data)=>{return data.});
    dataBinding.append("h3").classed("text-warning",true)
      .text((data)=>{
      return data.mission_name
    });
    dataBinding.append("p")
      .text((data)=>{
      return data.description
    })
  });
