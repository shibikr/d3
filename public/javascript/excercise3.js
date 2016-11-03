var studentsData = [
                  	{name:'ramesh',subject:'maths',score:87},
                  	{name:'suresh',subject:'maths',score:45},
                  	{name:'pokemon',subject:'english',score:65},
                  	{name:'mary',subject:'kannada',score:44},
                  	{name:'riya',subject:'science',score:72},
                  	{name:'katie',subject:'social studies',score:82},
                  	{name:'katie',subject:'maths',score:98},
                  	{name:'ramesh',subject:'bengali',score:25},
                  	{name:'suresh',subject:'science',score:55},
                  	{name:'riya',subject:'tamil',score:75},
                  	{name:'pokemon',subject:'sports',score:95},
                  	{name:'pokemon',subject:'social studies',score:32}
                  ];

var subjects = function(){
  return studentsData.map(function(studentData){
            return studentData.subject;
          }).filter(function(data,index,array){
            return array.indexOf(data) === index;
          });
};

var colors = d3.scaleOrdinal(d3.schemeCategory10)
               .domain(subjects);

var loadSubjects = function(){
  d3.select('.subjectNames').selectAll('.subject')
    .data(subjects)
    .enter().append('div')
    .classed('subject',true)
    .text((d)=>d)
    .style('background-color',function(d){return colors(d)});
};

var createStudentDetails = function(data){
  var details = d3.select('.container').selectAll('.details')
                  .data(data,function(d){return d;});

  details.enter().append('div')
         .classed('details',true)
         .style('width',function(d){return d.score*5+'px'})
         .text(function(d){return d.name +" "+ d.score})
         .style('background-color',function(d){return colors(d.subject)})
         .transition();

  details.exit().remove();
};

var sortDetails = function(sortValue){
   d3.select('.container').selectAll('.details')
     .sort(function (a,b) {return d3.ascending(a[sortValue],b[sortValue]); });
};

var loadChart = function(){
  loadSubjects();
  createStudentDetails(studentsData);
};

window.onload = loadChart;
