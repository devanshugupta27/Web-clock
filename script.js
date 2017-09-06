
var svg = d3.select("body").append("svg").attr("width",1250).attr("height",650);

var clock = svg.append("g")
                    .attr("viewBox","0 0 1250 650");

// The basic structure of clock.
var face = clock.append("g");

face.append("circle")
          .attr("class","circle")
          .attr("cx","625")
          .attr("cy","325")
          .attr("r","300");

face.append("circle")
          .attr("class","mid-circle")
          .attr("cx","625")
          .attr("cy","325")
          .attr("r","17");

face.append("path")
          .attr("class","hour-marks")
          .attr("d","M 625 610 L 625 580 M 340 325 L 370 325 M 910 325 L 880 325 M 625 40 L 625 70");

// Manipulating minute movement and structure.
var minute = svg.append("g").attr("id","minute");

minute.append("path")
          .attr("class","minute-arm")
//          .attr("transform","rotate(130 625 325)")
          .attr("d","M625.5 325V70");

// Manipulating hour movement and structure.
var hour = svg.append("g").attr("id","hour");

hour.append("path")
          .attr("class","hour-arm")
          .attr("d","M625.5 325V155")
//          .attr("transform","rotate(20 625 325)");

// Manipulating second movement and structure.
var second = svg.append("g").attr("id","second");

second.append("path")
          .attr("class","second-arm")
//          .attr("transform","rotate(267 625 325)")
          .attr("d","M625.5 375V50");
