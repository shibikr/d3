var chartTypes = [
                  {'curveType':d3.curveLinearClosed,'chartName':'curveLinearClosed'},
                  {'curveType':d3.curveStepAfter,'chartName':'curveStepAfter'},
                  {'curveType':d3.curveBasisOpen,'chartName':'curveBasisOpen'},
                  {'curveType':d3.curveCardinalClosed,'chartName':'curveCardinalClosed'},
                  {'curveType':d3.curveCardinal,'chartName':'curveCardinal'}
                ];


var renderChart = function(){
  chartTypes.forEach(function(chart){
    line.curve(chart.curveType);
    area.curve(chart.curveType);
    drawChart(chart.chartName);
    drawArea(data, 'area', chart.chartName);
    createLine(data,'line',chart.chartName);
    drawCircles(data,'line',chart.chartName);
  });
};

window.onload = renderChart;
