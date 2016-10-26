
var createRandomNumbers = function(){
  var numbers = [];
  for (var i = 0; i < 10; i++) {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    numbers.push(randomNumber);
  }
  return numbers;
}

const WIDTH = 1000;
const HEIGHT = 750;
const MARGIN = 30;

const INNER_WIDTH = WIDTH - 2 * MARGIN;
const INNER_HEIGHT = HEIGHT - 2 * MARGIN;

var translate = function(x, y){
	return "translate("+x+","+y+")";
};

var loadChart = function(){
  var svg = d3.select('.container').append('svg')
              .attr('width',WIDTH)
              .attr('height',HEIGHT);

  var xScale = d3.scaleLinear()
	    .domain([0,10])
	    .range([0, INNER_WIDTH]);

	var yScale = d3.scaleLinear()
	    .domain([0,100])
	    .range([INNER_HEIGHT, 0]);

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
		.attr('transform',  translate(MARGIN, MARGIN));

  var drawLine = function(){
    var data = createRandomNumbers();
    var line = d3.line()
      .x(function(d,i){return xScale(i+1)})
      .y(function(d){return yScale(d)});

    g.append('path')
      .classed('random-numbers', true)
      .attr('d', line(data));

  };

  setInterval(function(){
    g.selectAll('path').remove();
    drawLine();
  }, 250);
}

window.onload = loadChart;
