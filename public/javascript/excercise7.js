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

var xScale = d3.scaleLinear()
  .domain([0,1])
  .range([0,INNER_WIDTH]);

var yScale = d3.scaleLinear()
  .domain([0,1])
  .range([INNER_WIDTH,0]);

var line = d3.line()
  .x(function(d){return xScale(d.x/10);})
  .y(function(d){return yScale(d.y/10);});

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

  svg.append('g')
    .attr('transform',  translate(MARGIN, MARGIN))
    .classed('points',true);
};

var createLine = function(data){
    d3.select('.points').append('path')
    .classed('line', true)
    .attr('d', line(data));
};

var renderChart = function(){
  var sineValues = createSineValues(points);
  drawChart();
  createLine(points);
  createLine(sineValues);
};

window.onload = renderChart;
