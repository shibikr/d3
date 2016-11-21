var pi = Math.PI;

var pie = d3.pie()
    .sort(null)
    .value(function(d) { return d; })
    .startAngle(0 * (pi/180))
    .endAngle(180 * (pi/180));

var renderChart = function(){
  createPie(arc,pie);
};

window.onload = renderChart;
