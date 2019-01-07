var svgWidth = 800;
var svgHeight = 450;

var margin = {
  top: 20,
  right: 40,
  bottom: 60,
  left: 100
};

var width = svgWidth - margin.left - margin.right;
var height = svgHeight - margin.top - margin.bottom;

var svg = d3.select("#scatter")
  .append("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight);

var chartGroup = svg.append("g")
  .attr("transform", `translate(${margin.left}, ${margin.top})`);

d3.csv("assets/data/data.csv")
  .then(function(data) {
    //Print Data to console:
      console.log(data);

      data.forEach(function(data){
        data.age= +data.age;
        data.obesity= +data.obesity;
        data.poverty= +data.poverty;
        data.income= +data.income;
      });
    //Scales:
      var xLinearScale = d3.scaleLinear()
        .domain([35000, d3.max(data, d => d.income)])
        .range([0, width]);

      var yLinearScale = d3.scaleLinear()
        .domain([20, d3.max(data, d => d.obesity)])
        .range([height, 0]);
    //Axis:
      var bottomAxis = d3.axisBottom(xLinearScale);
      var leftAxis = d3.axisLeft(yLinearScale);

      chartGroup.append("g")
        .attr("transform", `translate(0, ${height})`)
        .call(bottomAxis);

      chartGroup.append("g")
        .call(leftAxis);

       //Create Circles
      var circlesGroup = chartGroup.selectAll("circle")
        .data(data)
        .enter()
        .append("circle")
        .attr("cx", d => xLinearScale(d.income))
        .attr("cy", d => yLinearScale(d.obesity))
        .attr("r", "15")
        .attr("fill", "pink")
        .attr("opacity", ".5");

      chartGroup.selectAll("text")
        .data(data)
        .enter()
        .append("text")
        .attr("x",(d) => xLinearScale(d.income))
        .attr("y",(d) => yLinearScale(d.obesity))
        .attr("text-anchor", "middle")
        .attr("font-size", "12px")
        .style("fill","Black")
        .text((d) => d.abbr);

        //Initialize tool tip
        var toolTip = d3.tip()
          .attr("class", "tooltip")
          .offset([80, -60])
          .html(function(d) {
            return (`${d.state}<br>Income: ${d.income}<br>Obesity: ${d.obesity}`);
          });


        //Create tooltip in the chart
        chartGroup.call(toolTip);

        circlesGroup.on("click", function(data) {
          toolTip.show(data, this);
        })
          .on("mouseout", function(data, index) {
            toolTip.hide(data);
          });


        // Create axes labels
        chartGroup.append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 0 - margin.left + 40)
          .attr("x", 0 - (height * 1.2 / 2))
          .attr("dy", "1em")
          .attr("class", "axisText")
          .text("Obesity per State");

        chartGroup.append("text")
          .attr("transform", `translate(${width * .7 / 2}, ${height + margin.top + 20})`)
          .attr("class", "axisText")
          .text("Average Income per State");
  })
  .catch(function(error){
     // handle error
  });
