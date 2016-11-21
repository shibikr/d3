var createTensions = function(){
  var tensions = [];
  for (var i = -2; i <= 1 ; i++) {
    var tension = i * 20 / 100;
    tensions.push(tension);
  }
  tensions.push(1);
  return tensions;
}

var renderChart = function(){
  var points = createPoints(10);
  var tensions = createTensions();
  tensions.forEach(function(tension,i){
    line.curve(d3.curveCardinal.tension(tension));
    drawChart('tension'+i);
    createLine(points,'points','tension'+i);
    drawCircles(points,'points','tension'+i);
  });
};

window.onload = renderChart;
