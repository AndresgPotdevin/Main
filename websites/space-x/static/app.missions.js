let allMissions = d3.json("https://api.spacexdata.com/v3/missions")
  .then((data)=>{
    console.log(data);

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
