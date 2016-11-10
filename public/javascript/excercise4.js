var numbers = [1,2,3,4,5,6,7,8,9,10];

var calculate = function(numbers,method,startingElement){
  var result = [startingElement];
  for (var i = 0; i < numbers.length; i++) {
    result.push(method(numbers[i]));
  }
  return result;
};

var createTableContent = function(){
  var squareOf = d3.scalePow().exponent(2);
  var logOf = d3.scaleLog();
  var thresholdOf = d3.scaleThreshold();

  var rowTwo = calculate(numbers,squareOf,"n square");
  var rowThree = calculate(numbers,logOf,"log(n)");
  rowThree.shift();
  var rowFour = calculate(rowThree,thresholdOf,"log(n) rounded");
  var rowOne = numbers.unshift("n");
  rowThree.unshift("log(n)");

  return [rowOne,rowTwo,rowThree,rowFour];
};

var drawTable = function(tableContent, column){
  var table = d3.select('body')
    .append('table'),
    thead = table.append('thead'),
    tbody = table.append('tbody');

   var tr = thead.append('tr');
       tr.selectAll('th')
       .data(column)
       .enter()
       .append('th')
       .text(function(d){return d});

  var row = tbody.selectAll('tr')
    .data(tableContent)
    .enter()
    .append('tr');

  var cells = row.selectAll('td')
    .data(function(row) {
      return column.map(function(col,i) {
        return row[i];
    })})
    .enter()
    .append('td')
    .text(function(d){return d});
};

var displayTable = function(){
  var tableContent = createTableContent();
  numbers.shift();
  numbers.unshift('Title');
  drawTable(tableContent, numbers);
};

window.onload = displayTable;
