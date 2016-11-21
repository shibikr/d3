var data = [1,1,2,2,1,2,1];

const WIDTH = 500,
    HEIGHT = 500,
    RADIOUS = Math.min(WIDTH, HEIGHT) / 2;

var color = d3.scaleOrdinal(d3.schemeCategory20);

var translate = function(x,y){
  return "translate("+x+","+y+")";
};

var arc = d3.arc()
    .outerRadius(RADIOUS - 10)
    .innerRadius(0);

var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d; });

var createPie = function(arc,pie){
  var svg = d3.select("body")
    .append("svg")
    .append("g")
    .attr("transform", translate(WIDTH/2 ,HEIGHT/2));

  var g = svg.selectAll(".arc")
  .data(pie(data))
  .enter().append("g")
  .attr("class", "arc");

  g.append("path")
  .attr("d", arc)
  .style("fill", function(d,i) { return color(i); });
};

var renderChart = function(){
  createPie(arc,pie);
};

window.onload = renderChart;
