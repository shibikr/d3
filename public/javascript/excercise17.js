var pi = Math.PI;

var donutArc = d3.arc()
    .outerRadius(RADIOUS - 10)
    .innerRadius(100);

var halfPie = d3.pie()
    .sort(null)
    .value(function(d) { return d; })
    .startAngle(0 * (pi/180))
    .endAngle(180 * (pi/180));

var renderChart = function(){
  createPie(donutArc, halfPie);
};

window.onload = renderChart;
