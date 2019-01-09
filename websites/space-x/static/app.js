// API Docs: https://documenter.getpostman.com/view/2025350/RWaEzAiG#e520e500-0421-4774-8bcb-8d07b7dfa222
// URLs:
// let allCapsules = d3.json("https://api.spacexdata.com/v3/capsules");
// let allCores = d3.json("https://api.spacexdata.com/v3/cores");
// let allDragons = d3.json("https://api.spacexdata.com/v3/dragons");
// let allHistEvents = d3.json("https://api.spacexdata.com/v3/history");
// let companyInfo = d3.json("https://api.spacexdata.com/v3/info");
// let landingPads = d3.json("https://api.spacexdata.com/v3/landpads");
// let allLaunches = d3.json("https://api.spacexdata.com/v3/launches");
// let allLaunchPads = d3.json("https://api.spacexdata.com/v3/launches");
// let allMissions = d3.json("https://api.spacexdata.com/v3/missions");
// let allPayloads = d3.json("https://api.spacexdata.com/v3/payloads");
// let allRockets = d3.json("https://api.spacexdata.com/v3/rockets");
// let roadster = d3.json("https://api.spacexdata.com/v3/roadster");
// let allShips = d3.json("https://api.spacexdata.com/v3/ships");
// API Response Test

// console.log(allCapsules);
// console.log(allCores);
// console.log(allDragons);
// console.log(allHistEvents);
// console.log(companyInfo);
// console.log(landingPads);
// console.log(allLaunches);
// console.log(allLaunchPads);
// console.log(allMissions);
// console.log(allPayloads);
// console.log(allRockets);
// console.log(roadster);
// console.log(allShips);

// let allMissions = d3.json("https://api.spacexdata.com/v3/missions")
//   .then((data)=>{
//     console.log(data);
//   });

var tbody = d3.select("tbody");

d3.json("https://api.spacexdata.com/v3/launches?pretty=true")
  .then(function(missions) { //Data manipulation after promise resolves
    console.log(missions);
    // Mission Table
    let tr = d3.select("tbody") //Create Table Rows
      .selectAll("tr")
      .data(missions)
      .enter()
      .append("tr")
      .attr("class",function(d){
        if (d.launch_success === false){
          return "table-danger"
        } else {
          return "table-success"
        }
      });

    let td = tr.selectAll("td") //Create Table Colums
      .data(function (d) {
        // console.log(d);
        return [d.launch_year,d.mission_name,d.rocket.rocket_name,d.launch_success];
      })
      .enter()
      .append("td")
      .text(function (d) { //Add text
        return d;
      });
    //Info Section
    d3.select("#info")
      .selectAll("p")
      .data(missions)
      .enter()
      .append("p")
      .text((d)=>{return d.details})
      .attr("class","text-warning");
    });



// d3.json("https://api.spacexdata.com/v3/launches?filter=launch_date_utc,mission_name,rocket/rocket_name,launch_success")
//   .then((data) => {
    // data.forEach((mission) => {
    //   var row = tbody.append("tr");
    //   Object.entries(mission).forEach(([key, value]) => {
    //     var cell = tbody.append("td");
    //     cell.text(value);
    //   });
    // });
  // });
