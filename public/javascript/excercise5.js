var createNumbers = function(limit){
  var numbers = [];
  for (var i = 0; i <= 10; i++) {
    numbers.push(i);
  }
  return numbers;
};

var numbers = createNumbers(10);

var sizeScale1 = d3.scaleLinear()
  .domain([0,10])
  .range([12,120]);

var sizeScale2 = d3.scaleLinear()
  .domain([0,10])
  .range([30,180]);

var createRectangles = function(values){
  var numbers = d3.select('.numbers')
    .selectAll('.number')
    .data(values)
    .enter()
    .append('div')
    .classed('number',true)
    .text(function(d){return d})
    .style('font',function(d){return 'italic bold '+sizeScale1(d)+'px/'+sizeScale2(d)+'px Georgia, serif'});

  numbers.exit().remove();
};

var loadChart = function(){
  createRectangles(numbers);
};

window.onload = loadChart;
