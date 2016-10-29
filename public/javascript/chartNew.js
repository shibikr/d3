var numbers = [1,5,8,2,4,10,11,24,14,8];

var colors = d3.scaleLinear()
               .domain([1,100])
               .range(['darkblue','steelblue']);

var generateRandomNumber = function(){
  return Math.floor(Math.random() * 100) + 1;
};

var createUniqueValue = function(d){
    return new Date() + d;
};

var drawChart = function(data){
  var bars = d3.select('.container').selectAll('.bar')
              .data(data,(d) => createUniqueValue(d));

  bars.enter().append('div')
      .attr('class','bar')
      .attr('style',(d)=>"width:"+d*10+"px")
      .text((d)=>d)
      .style('background-color',(d)=> colors(d))
      .transition();

  bars.exit().remove();
};

var updateChart = function(){
  drawChart(numbers);
  setInterval(function(){
    numbers.shift();
    numbers.push(generateRandomNumber());
    drawChart(numbers);
  },1000);
};

window.onload = updateChart;
