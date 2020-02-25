var data = [{
  label: "Feb 22",
  sales: 10
},{
  label: "Feb 23",
  sales: 13
},{
  label: "Feb 24",
  sales: 16
},{
  label: "Feb 25",
  sales: 10
}, {
  label: "Feb 26",
  sales: 7
}, {
  label: "Feb 27",
  sales: 9
}, {
  label: "Feb 28",
  sales: 3
}, {
  label: "Feb 29",
  sales: 3
}, {
  label: "Mar 1",
  sales: 2
}
]

var g = d3.select('#chart')
  .selectAll("g")
  .data(data)
  .enter()
  .append('g')
g.append("circle")
  .attr('cy', 40)
  .attr('cx', (d, i)=> (i+1) * 50)
  .attr('r', (d)=> d.sales)
g.append("text")
  .attr('y', 90)
  .attr('x', (d, i)=> (i+1) * 50)
  .text((d)=> d.label)
