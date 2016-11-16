
var drawLine = function(){
  d3.select('svg')
    .append('line')
    .attr('x1',25)
    .attr('y1',125)
    .attr('x2',125)
    .attr('y2',25);
};

var drawCircle = function(){
  d3.select('svg')
    .append('circle')
    .attr('cx',225)
    .attr('cy',75)
    .attr('r',50);
};

var drawSquare = function(){
  d3.select('svg')
    .append('rect')
    .attr('x',325)
    .attr('y',25)
    .attr('width',100)
    .attr('height',100)
    .attr('rx',5);
};

var drawTriangle = function(){
  d3.select('svg')
    .append('polygon')
    .attr('points','474,125 575,125 525,25');
};

var renderShapes = function(){
  d3.select('body')
    .append('svg');

  drawLine();
  drawCircle();
  drawSquare();
  drawTriangle();
};

window.onload = renderShapes;
