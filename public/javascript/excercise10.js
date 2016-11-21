var createPoints = function(limit){
  var points = [];
  for (var i = 0; i < limit; i++) {
    var yValue = (Math.sin(3*i)+1)/2;
    points.push({"x":i,"y":yValue});
  }
  return points;
};

var xScale = d3.scaleLinear()
 .domain([0,10])
 .range([0,INNER_WIDTH]);

var yScale = d3.scaleLinear()
 .domain([0,1])
 .range([INNER_WIDTH,0]);

var line = d3.line()
  .x(function(d){return xScale(d.x);})
  .y(function(d){return yScale(d.y);});

var drawCircles = function(data,className,svgName){
  d3.select('.'+svgName).select('.'+className)
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', function(d){return xScale(d.x)})
    .attr('cy', function(d){return yScale(d.y)})
    .attr('r',5);
};

var renderChart = function(){
  var points = createPoints(10);
  drawChart('chart');
  createLine(points,'points','chart');
  drawCircles(points,'points','chart');
};

window.onload = renderChart;
