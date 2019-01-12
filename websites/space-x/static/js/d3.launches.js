// D3 Table with all Launches data:
/*============================================================================*/
var tbody = d3.select("tbody");

d3.json("http://127.0.0.1:5000/db/launches")
  .then(function(data) {

      console.log(data);

      let total = d3.entries(data).length

      let total2006 = d3.values(data, (d)=>{
        return d.launch_year
      }).filter((d)=>{return d.launch_year === "2006";}).length

      let total2007 = d3.values(data, (d)=>{
        return d.launch_year
      }).filter((d)=>{return d.launch_year === "2007";}).length

      let total2008 = d3.values(data, (d)=>{
        return d.launch_year
      }).filter((d)=>{return d.launch_year === "2008";}).length

      let total2009 = d3.values(data, (d)=>{
        return d.launch_year
      }).filter((d)=>{return d.launch_year === "2009";}).length

      let total2010 = d3.values(data, (d)=>{
        return d.launch_year
      }).filter((d)=>{return d.launch_year === "2010";}).length

      let total2011 = d3.values(data, (d)=>{
        return d.launch_year
      }).filter((d)=>{return d.launch_year === "2011";}).length

      let total2012 = d3.values(data, (d)=>{
        return d.launch_year
      }).filter((d)=>{return d.launch_year === "2012";}).length

      let total2013 = d3.values(data, (d)=>{
        return d.launch_year
      }).filter((d)=>{return d.launch_year === "2013";}).length

      let total2014 = d3.values(data, (d)=>{
        return d.launch_year
      }).filter((d)=>{return d.launch_year === "2014";}).length

      let total2015 = d3.values(data, (d)=>{
        return d.launch_year
      }).filter((d)=>{return d.launch_year === "2015";}).length

      let total2016 = d3.values(data, (d)=>{
        return d.launch_year
      }).filter((d)=>{return d.launch_year === "2016";}).length

      let total2017 = d3.values(data, (d)=>{
        return d.launch_year
      }).filter((d)=>{return d.launch_year === "2017";}).length

      let total2018 = d3.values(data, (d)=>{
        return d.launch_year
      }).filter((d)=>{return d.launch_year === "2018";}).length

      let total2019 = d3.values(data, (d)=>{
        return d.launch_year
      }).filter((d)=>{return d.launch_year === "2019";}).length

      let tr = d3.select("tbody")
        .selectAll("tr")
        .data(data)
        .enter()
        .append("tr")
        .attr("class",function(d){
          if (d.launch_success===true)
          {
              return "table-success";
          }else if (d.launch_success===false) {
              return "table-danger";
          }else{
            return "table-warning";
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

      let launchInfo = d3.selectAll("#launchinfo").append("Div")
      let launchInfo2 = d3.selectAll("#launchinfo2").append("Div")
      let launchInfo3 = d3.selectAll("#launchinfo3").append("Div")

      launchInfo.append("h5").classed("text-info",true)
        .text("Total Launches: ")
        .append("span")
        .classed("text-dark", true)
        .text(total)

      launchInfo.append("h5").classed("text-info",true)
        .text("2006: ")
        .append("span")
        .classed("text-dark", true)
        .text(total2006)

      launchInfo.append("h5").classed("text-info",true)
        .text("2007: ")
        .append("span")
        .classed("text-dark", true)
        .text(total2007)

      launchInfo.append("h5").classed("text-info",true)
        .text("2008: ")
        .append("span")
        .classed("text-dark", true)
        .text(total2008)

      launchInfo.append("h5").classed("text-info",true)
        .text("2009: ")
        .append("span")
        .classed("text-dark", true)
        .text(total2009)

      launchInfo.append("h5").classed("text-info",true)
        .text("2010: ")
        .append("span")
        .classed("text-dark", true)
        .text(total2010)

      launchInfo.append("h5").classed("text-info",true)
        .text("2011: ")
        .append("span")
        .classed("text-dark", true)
        .text(total2011)

      launchInfo.append("h5").classed("text-info",true)
        .text("2012: ")
        .append("span")
        .classed("text-dark", true)
        .text(total2012)

      launchInfo.append("h5").classed("text-info",true)
        .text("2013: ")
        .append("span")
        .classed("text-dark", true)
        .text(total2013)

      launchInfo.append("h5").classed("text-info",true)
        .text("2014: ")
        .append("span")
        .classed("text-dark", true)
        .text(total2014)

      launchInfo.append("h5").classed("text-info",true)
        .text("2015: ")
        .append("span")
        .classed("text-dark", true)
        .text(total2015)

      launchInfo.append("h5").classed("text-info",true)
        .text("2016: ")
        .append("span")
        .classed("text-dark", true)
        .text(total2016)

      launchInfo.append("h5").classed("text-info",true)
        .text("2017: ")
        .append("span")
        .classed("text-dark", true)
        .text(total2017)

      launchInfo.append("h5").classed("text-info",true)
        .text("2018: ")
        .append("span")
        .classed("text-dark", true)
        .text(total2018)

      launchInfo.append("h5").classed("text-info",true)
        .text("2019: ")
        .append("span")
        .classed("text-dark", true)
        .text(total2019)
    });
