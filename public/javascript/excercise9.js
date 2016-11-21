  var points = [{'x':0, 'y':5},{'x':1, 'y':9},{'x':2, 'y':7},{'x':3, 'y':5},
              {'x':4, 'y':3},{'x':6, 'y':4},{'x':7, 'y':2},{'x':8, 'y':3},{'x':9, 'y':2}];

var createSineValues = function(points){
  var shiftedValue = 5;
  return points.map(function(point){
    return {"x":point.x, "y": Math.sin(point.x)+shiftedValue};
  });
};

var chartTypes = [
                  {'curveType':d3.curveLinearClosed,'chartName':'curveLinearClosed'},
                  {'curveType':d3.curveStepAfter,'chartName':'curveStepAfter'},
                  {'curveType':d3.curveBasis,'chartName':'curveBasis'},
                  {'curveType':d3.curveBundle,'chartName':'curveBundle'},
                  {'curveType':d3.curveCardinalClosed,'chartName':'curveCardinalClosed'},
                  {'curveType':d3.curveCardinal,'chartName':'curveCardinal'},
                  {'curveType':d3.curveMonotoneX,'chartName':'curveMonotonex'}
                ];

var xScale = d3.scaleLinear()
  .domain([0,1])
  .range([0,INNER_WIDTH]);

var yScale = d3.scaleLinear()
  .domain([0,1])
  .range([INNER_WIDTH,0]);

var line = d3.line()
  .x(function(d){return xScale(d.x/divisor);})
  .y(function(d){return yScale(d.y/divisor);});

var renderChart = function(){
  var sineValues = createSineValues(points);
  drawChart('chart1');
  createLine(points,'points','chart1');
  createLine(sineValues,'sine','chart1');
  drawCircles(points,'points','chart1');
  drawCircles(sineValues,'sine','chart1');

  chartTypes.forEach(function(chart){
    line.curve(chart.curveType);
    drawChart(chart.chartName);
    createLine(points,'points',chart.chartName);
    createLine(sineValues,'sine',chart.chartName);
    drawCircles(points,'points',chart.chartName);
    drawCircles(sineValues,'sine',chart.chartName);
  });
};

window.onload = renderChart;
