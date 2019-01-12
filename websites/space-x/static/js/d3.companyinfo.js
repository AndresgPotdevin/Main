// D3 Company Info:
/*============================================================================*/
const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

let info = d3.json("http://127.0.0.1:5000/db/info")
  .then((data)=>{
    let dataBinding1 = d3.selectAll("#companyinfo").selectAll("div")
        .data(data)
      .enter().append("div")

    let dataBinding2 = d3.selectAll("#companyinfo2").selectAll("div")
        .data(data)
      .enter().append("div")

    dataBinding1.append("h5").classed("text-info",true)
      .text("CEO: ")
      .append("span")
      .classed("text-dark", true)
      .text((data)=>{
      return data.ceo
    })

    dataBinding1.append("h5").classed("text-info",true)
      .text("COO: ")
      .append("span")
      .classed("text-dark", true)
      .text((data)=>{
      return data.coo
    })

    dataBinding1.append("h5").classed("text-info",true)
      .text("CTO: ")
      .append("span")
      .classed("text-dark", true)
      .text((data)=>{
      return data.cto
    })

    dataBinding1.append("h5").classed("text-info",true)
      .text("CTO of Propulsion: ")
      .append("span")
      .classed("text-dark", true)
      .text((data)=>{
      return data.cto_propulsion
    })

    dataBinding2.append("h5").classed("text-info",true)
      .text("Employees: ")
      .append("span")
      .classed("text-dark", true)
      .text((data)=>{
      return data.employees
    })

    dataBinding2.append("h5").classed("text-info",true)
      .text("Founded: ")
      .append("span")
      .classed("text-dark", true)
      .text((data)=>{
      return data.founded
      })

    dataBinding2.append("h5").classed("text-info",true)
      .text("Valuation: ")
      .append("span")
      .classed("text-dark", true)
      .text((data)=>{
      return formatter.format(data.valuation)
      })

    dataBinding2.append("h5").classed("text-info",true)
      .text("Headquarters: ")
      .append("span")
      .classed("text-dark", true)
      .text((data)=>{
      return `${data.headquarters.city}, ${data.headquarters.state}`
      })
  });
