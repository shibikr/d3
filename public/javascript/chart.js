
var generateRandomNumbers = function(){
  var numbers = [];
  for (var i = 0; i < 10; i++) {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNumber);
  }
  return numbers;
};

var randomNumbers = generateRandomNumbers();

var updateRandomNumbers = function(numbers){
  numbers.shift();
  var randomNumber = Math.floor(Math.random() * 100) + 1;
  numbers.push(randomNumber);
  return numbers;
};

const WIDTH = 650;
const HEIGHT = 550;
const MARGIN = 30;

const INNER_WIDTH = WIDTH - 2 * MARGIN;
const INNER_HEIGHT = HEIGHT - 2 * MARGIN;

var translate = function(x, y){
	return "translate("+x+","+y+")";
};

var xScale = d3.scaleLinear()
    .domain([0,10])
    .range([0, INNER_WIDTH]);

var yScale = d3.scaleLinear()
    .domain([0,100])
    .range([INNER_HEIGHT, 0]);

var line = d3.line()
  .x(function(d,i){return xScale(i)})
  .y(function(d){return yScale(d)});


var createChart = function(idName){
  var svg = d3.select('#'+idName).append('svg')
              .attr('width',WIDTH)
              .attr('height',HEIGHT);

	var xAxis = d3.axisBottom(xScale).ticks(10);
	var yAxis = d3.axisLeft(yScale).ticks(10);

  svg.append('g')
		.attr('transform', translate(MARGIN, HEIGHT - MARGIN))
		.call(xAxis)
		.classed('xAxis', true);

	svg.append('g')
		.attr('transform', translate(MARGIN, MARGIN))
    .call(yAxis)
		.classed('yAxis', true);

	var g = svg.append('g')
		.attr('transform',  translate(MARGIN, MARGIN))
    .classed(idName,true);
};

var createLine = function(data,className){
    d3.select('.'+className).append('path')
    .classed('random-numbers', true)
    .attr('d', line(data));
};

var updateLine = function(data, className){
  d3.select('.'+className).selectAll('path')
  .attr('d', line(data));
};

var createBar = function(data,className){
    var rects = d3.select('.'+className).selectAll('rect')
      .data(data);

      rects.enter().append('rect')
      .attr('width',20)

      rects.attr('x',function(d,i){return xScale(i)})
        .attr('y',function(d){return yScale(d)})
        .attr('height',function(d){return INNER_HEIGHT - yScale(d)});
};

var loadChart = function(){
  createChart('line-chart');
  createChart('bar-chart');
  createLine(randomNumbers,'line-chart');
  setInterval(function(){
    var data = updateRandomNumbers(randomNumbers);
    updateLine(data,'line-chart');
    createBar(data,'bar-chart');
  }, 250);
};

window.onload = loadChart;
