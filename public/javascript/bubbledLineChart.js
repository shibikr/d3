const HEIGHT = 650;
const WIDHT = 650;
const MARGIN = 30;
const INNER_WIDTH = WIDHT - (MARGIN * 2);
const INNER_HEIGHT = HEIGHT - (MARGIN * 2);

var divisor = 10;

var translate = function(x,y){
  return "translate("+x+","+y+")";
};

var xScale = d3.scaleLinear()
  .domain([0,10])
  .range([0,INNER_WIDTH]);

var yScale = d3.scaleLinear()
  .domain([0,10])
  .range([INNER_WIDTH,0]);

var drawChart = function(svgName){
  var svg = d3.select('body')
    .append('svg')
    .classed(svgName,true);

  var xAxis = d3.axisBottom(xScale).ticks(10);
	var yAxis = d3.axisLeft(yScale).ticks(10);

  svg.append('g')
		.attr('transform', translate(MARGIN, HEIGHT - MARGIN))
		.call(xAxis);

	svg.append('g')
		.attr('transform', translate(MARGIN-1, MARGIN))
    .call(yAxis);

};

var createLine = function(data, className, svgName){
  d3.select('.'+svgName)
    .append('g')
    .attr('transform',  translate(MARGIN, MARGIN))
    .classed(className,true)
    .append('path')
    .classed('line', true)
    .attr('d', line(data));
};

var drawCircles = function(data,className,svgName){
  d3.select('.'+svgName).select('.'+className)
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', function(d){return xScale(d.x/10)})
    .attr('cy', function(d){return yScale(d.y/10)})
    .attr('r',5);
};
