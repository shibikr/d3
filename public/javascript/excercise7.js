var points = [{'x':0, 'y':5},{'x':1, 'y':9},{'x':2, 'y':7},{'x':3, 'y':5},
              {'x':4, 'y':3},{'x':6, 'y':4},{'x':7, 'y':2},{'x':8, 'y':3},{'x':9, 'y':2}];

var createSineValues = function(points){
  var shiftedValue = 5;
  return points.map(function(point){
    return {"x":point.x, "y": Math.sin(point.x)+shiftedValue};
  });
};

const HEIGHT = 650;
const WIDHT = 650;
const MARGIN = 30;
const INNER_WIDTH = WIDHT - (MARGIN * 2);
const INNER_HEIGHT = HEIGHT - (MARGIN * 2);

var divisor = 10;

var xScale = d3.scaleLinear()
  .domain([0,1])
  .range([0,INNER_WIDTH]);

var yScale = d3.scaleLinear()
  .domain([0,1])
  .range([INNER_WIDTH,0]);

var line = d3.line()
  .x(function(d){return xScale(d.x/divisor);})
  .y(function(d){return yScale(d.y/divisor);});

var translate = function(x,y){
  return "translate("+x+","+y+")";
};

var drawChart = function(){
  var svg = d3.select('body')
    .append('svg');

  var xAxis = d3.axisBottom(xScale).ticks(10);
	var yAxis = d3.axisLeft(yScale).ticks(10);

  svg.append('g')
		.attr('transform', translate(MARGIN, HEIGHT - MARGIN))
		.call(xAxis);

	svg.append('g')
		.attr('transform', translate(MARGIN, MARGIN))
    .call(yAxis);

};

var createLine = function(data, className){
  d3.select('svg')
    .append('g')
    .attr('transform',  translate(MARGIN, MARGIN))
    .classed(className,true)
    .append('path')
    .classed('line', true)
    .attr('d', line(data));
};

var drawCircles = function(data,className){
  d3.select('.'+className)
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', function(d){return xScale(d.x/divisor)})
    .attr('cy', function(d){return yScale(d.y/divisor)})
    .attr('r',5);
};

var renderChart = function(){
  var sineValues = createSineValues(points);
  drawChart();
  createLine(points,'points');
  createLine(sineValues,'sine');
  drawCircles(points,'points');
  drawCircles(sineValues,'sine');
};

window.onload = renderChart;
