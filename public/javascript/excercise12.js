var createData = function(startValue,endValue,method){
  var values = [];
  for (var i = startValue; i <= endValue; i++) {
    values.push({"x":i,"y": method(i)});
  }
  return values;
};

var findY = function(x){
  return 3*Math.sin(x)+5;
};

var data = createData(0,10,findY);

var xScale = d3.scaleLinear()
  .domain([0,1])
  .range([0,INNER_WIDTH]);

var yScale = d3.scaleLinear()
  .domain([0,1])
  .range([INNER_WIDTH,0]);

var line = d3.line()
  .x(function(d){return xScale(d.x/10);})
  .y(function(d){return yScale(d.y/10);});

var area = d3.area()
    .x(function(d) { return xScale(d.x/10); })
    .y0(INNER_HEIGHT)
    .y1(function(d) { return yScale(d.y/10); });

var drawArea = function(data, className, svgName){
  d3.select('.'+svgName)
    .append('g')
    .attr('transform',  translate(MARGIN, MARGIN))
    .classed(className, 'true')
    .append("path")
    .classed('path',true)
    .attr("d", area(data));
};

var renderChart = function(){
  drawChart('sine');
  drawArea(data, 'area', 'sine');
  createLine(data,'line','sine');
  drawCircles(data,'line','sine');
};

window.onload = renderChart;
