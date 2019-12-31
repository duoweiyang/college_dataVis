// The JavaScript/D3 code for the graphs and charts

d3.csv("./assets/colleges.csv", function(error, data) {

	// This will be the x-axis
	var regions = ["Far West", "Great Lakes", "Great Plains", "Mid-Atlantic", "New England",
	"Outlying Areas", "Rocky Mountains", "Southeast", "Southwest"];

	var races = ["White", "Black", "Hispanic", "Asian", "American_Indian", "Pacific_Islander", "Biracial"];

	var farWest_mean = [];
	var greatLakes_mean = [];
	var greatPlains_mean = [];
	var midAtlantic_mean = [];
	var greatLakes_mean = [];
	var greatPlains_mean = [];

	// Filtering out the data based on region
	farWest_data = data.filter(function (d) { return d.Region === 'Far West'; });
	greatLakes_data = data.filter(function (d) { return d.Region === 'Great Lakes'; });
	greatPlains_data = data.filter(function (d) { return d.Region === 'Great Plains'; });
	midAtlantic_data = data.filter(function (d) { return d.Region === 'Mid-Atlantic'; });
	newEngland_data = data.filter(function (d) { return d.Region === 'New England'; });
	outLying_data = data.filter(function (d) { return d.Region === 'Outlying Areas'; });
	rockyMountains_data = data.filter(function (d) { return d.Region === 'Rocky Mountains'; });
	southEast_data = data.filter(function (d) { return d.Region === 'Southeast'; });
	southWest_data = data.filter(function (d) { return d.Region === 'Southwest'; });

	// Finding the mean of each race depending on the region
	farWest_mean = [d3.mean(farWest_data.map(function(d){ return d.White})),
       		d3.mean(farWest_data.map(function(d){ return d.Black})),
       		d3.mean(farWest_data.map(function(d){ return d.Hispanic})),
       		d3.mean(farWest_data.map(function(d){ return d.Asian})),
       		d3.mean(farWest_data.map(function(d){ return d.American_Indian})),
       		d3.mean(farWest_data.map(function(d){ return d.Pacific_Islander})),
       		d3.mean(farWest_data.map(function(d){ return d.Biracial}))];

    greatLakes_mean = [d3.mean(greatLakes_data.map(function(d){ return d.White})),
       	d3.mean(greatLakes_data.map(function(d){ return d.Black})),
       	d3.mean(greatLakes_data.map(function(d){ return d.Hispanic})),
       	d3.mean(greatLakes_data.map(function(d){ return d.Asian})),
       	d3.mean(greatLakes_data.map(function(d){ return d.American_Indian})),
       	d3.mean(greatLakes_data.map(function(d){ return d.Pacific_Islander})),
       	d3.mean(greatLakes_data.map(function(d){ return d.Biracial}))];


    greatPlains_mean = [d3.mean(greatPlains_data.map(function(d){ return d.White})),
       	d3.mean(greatPlains_data.map(function(d){ return d.Black})),
       	d3.mean(greatPlains_data.map(function(d){ return d.Hispanic})),
       	d3.mean(greatPlains_data.map(function(d){ return d.Asian})),
       	d3.mean(greatPlains_data.map(function(d){ return d.American_Indian})),
       	d3.mean(greatPlains_data.map(function(d){ return d.Pacific_Islander})),
       	d3.mean(greatPlains_data.map(function(d){ return d.Biracial}))];

    midAtlantic_mean = [d3.mean(midAtlantic_data.map(function(d){ return d.White})),
       	d3.mean(midAtlantic_data.map(function(d){ return d.Black})),
       	d3.mean(midAtlantic_data.map(function(d){ return d.Hispanic})),
       	d3.mean(midAtlantic_data.map(function(d){ return d.Asian})),
       	d3.mean(midAtlantic_data.map(function(d){ return d.American_Indian})),
       	d3.mean(midAtlantic_data.map(function(d){ return d.Pacific_Islander})),
       	d3.mean(midAtlantic_data.map(function(d){ return d.Biracial}))];

    newEngland_mean = [d3.mean(newEngland_data.map(function(d){ return d.White})),
       	d3.mean(newEngland_data.map(function(d){ return d.Black})),
       	d3.mean(newEngland_data.map(function(d){ return d.Hispanic})),
       	d3.mean(newEngland_data.map(function(d){ return d.Asian})),
       	d3.mean(newEngland_data.map(function(d){ return d.American_Indian})),
       	d3.mean(newEngland_data.map(function(d){ return d.Pacific_Islander})),
       	d3.mean(newEngland_data.map(function(d){ return d.Biracial}))];

    outLying_mean = [d3.mean(outLying_data.map(function(d){ return d.White})),
       	d3.mean(outLying_data.map(function(d){ return d.Black})),
       	d3.mean(outLying_data.map(function(d){ return d.Hispanic})),
       	d3.mean(outLying_data.map(function(d){ return d.Asian})),
       	d3.mean(outLying_data.map(function(d){ return d.American_Indian})),
       	d3.mean(outLying_data.map(function(d){ return d.Pacific_Islander})),
       	d3.mean(outLying_data.map(function(d){ return d.Biracial}))];

    rockyMountains_mean = [d3.mean(rockyMountains_data.map(function(d){ return d.White})),
       	d3.mean(rockyMountains_data.map(function(d){ return d.Black})),
       	d3.mean(rockyMountains_data.map(function(d){ return d.Hispanic})),
       	d3.mean(rockyMountains_data.map(function(d){ return d.Asian})),
       	d3.mean(rockyMountains_data.map(function(d){ return d.American_Indian})),
       	d3.mean(rockyMountains_data.map(function(d){ return d.Pacific_Islander})),
       	d3.mean(rockyMountains_data.map(function(d){ return d.Biracial}))];

	southEast_mean = [d3.mean(southEast_data.map(function(d){ return d.White})),
	    d3.mean(southEast_data.map(function(d){ return d.Black})),
	    d3.mean(southEast_data.map(function(d){ return d.Hispanic})),
	    d3.mean(southEast_data.map(function(d){ return d.Asian})),
	    d3.mean(southEast_data.map(function(d){ return d.American_Indian})),
	    d3.mean(southEast_data.map(function(d){ return d.Pacific_Islander})),
	    d3.mean(southEast_data.map(function(d){ return d.Biracial}))];


	southWest_mean = [d3.mean(southWest_data.map(function(d){ return d.White})),
	    d3.mean(southWest_data.map(function(d){ return d.Black})),
	    d3.mean(southWest_data.map(function(d){ return d.Hispanic})),
	    d3.mean(southWest_data.map(function(d){ return d.Asian})),
	    d3.mean(southWest_data.map(function(d){ return d.American_Indian})),
	    d3.mean(southWest_data.map(function(d){ return d.Pacific_Islander})),
	    d3.mean(southWest_data.map(function(d){ return d.Biracial}))];

	meanArray = []; 
	meanArray.push(farWest_mean);
    meanArray.push(greatLakes_mean);
    meanArray.push(greatPlains_mean);
    meanArray.push(midAtlantic_mean);
    meanArray.push(newEngland_mean);
    meanArray.push(outLying_mean);
    meanArray.push(rockyMountains_mean);
    meanArray.push(southEast_mean);
    meanArray.push(southWest_mean);

	// The means are correct
    /*console.log(farWest_mean);
    console.log(greatLakes_mean);
    console.log(greatPlains_mean);
    console.log(midAtlantic_mean);
    console.log(newEngland_mean);
    console.log(outLying_mean);
    console.log(rockyMountains_mean);
    console.log(southEast_mean);
    console.log(southWest_mean);*/

    //console.log(meanArray);

    // { region: [ whiteMean, blackMean, ... ] }
    var regionMap = {};
    regions.forEach((key, i) => regionMap[key] = meanArray[i]);
	console.log(regionMap);


     // Define dimensions of vis
     var margin = { top: 50, right: 50, bottom: 30, left: 50 },
        width  = 750 - margin.left - margin.right,
        height = 450 - margin.top  - margin.bottom;
 

    var makeVis = function(regionMap) {

     // Define dimensions of vis
     var margin = { top: 50, right: 50, bottom: 30, left: 50 },
        width  = 750 - margin.left - margin.right,
        height = 450 - margin.top  - margin.bottom;
 	// Make x scale
    var xScale = d3.scaleBand()
        .domain(races)
        .rangeRound([0, width])
        .padding(0.1);


    // Make y scale, the domain will be defined on bar update
        var yScale = d3.scaleLinear()
        .range([height, 0]);

    // Create canvas
        var canvas = d3.select("#vis-container")
            .append("svg")
	            .attr("width",  width  + margin.left + margin.right)
	            .attr("height", height + margin.top  + margin.bottom)
            .append("g")
            	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

     // Make x-axis and add to canvas
        var xAxis = d3.axisBottom()
                	.scale(xScale)

      canvas.append("g")
                   .attr("class", "x axis")
                    .attr("transform", "translate(0," + height + ")")
                    .call(xAxis);

      // Make y-axis and add to canvas
                var yAxis = d3.axisLeft()
                    .scale(yScale)

                var yAxisHandleForUpdate = canvas.append("g")
                    .attr("class", "y axis")
                    .call(yAxis);

                yAxisHandleForUpdate.append("text")
                    .attr("transform", "rotate(-90)")
                    .attr("x", -150)
                    .attr("y", -50)
                    .attr("dy", ".71em")
                    .attr("fill", "white")
                    .style("text-anchor", "end")
                    .text("Value");

	                var updateBars = function(data) {
	                    // First update the y-axis domain to match data
	                    yScale.domain( d3.extent(data) );
	                    yAxisHandleForUpdate.call(yAxis);

	                    var bars = canvas.selectAll(".bar").data(data);

  // Add bars for new data
                    bars.enter()
                      .append("rect")
                        .attr("class", "bar")
                        .attr("x", function(d,i) { return xScale( races[i] ); })
                        .attr("width", xScale.bandwidth())
                        .attr("y", function(d,i) { return yScale(d); })
                        .attr("height", function(d,i) { return height - yScale(d) });

                    // Update old ones, already have x / width from before
                    bars
                        .transition().duration(250)
                        .attr("y", function(d,i) { return yScale(d); })
                        .attr("height", function(d,i) { return height - yScale(d); });

 // Remove old ones
                    bars.exit().remove();
                };



// Handler for dropdown value change
                var dropdownChange = function() {
                    var newRegion = d3.select(this).property('value'),
                        newData   = regionMap[newRegion];

                    updateBars(newData);
                };

                // Get names of regions, for dropdown
                var regions = Object.keys(regionMap).sort();

                var dropdown = d3.select("#vis-container")
                    .insert("select", "svg")
                    .on("change", dropdownChange);

                dropdown.selectAll("option")
                    .data(regions)
                  .enter().append("option")
                    .attr("value", function (d) { return d; })
                    .text(function (d) {
                        return d[0].toUpperCase() + d.slice(1,d.length); // capitalize 1st letter
                    });

                var initialData = regionMap[ regions[0] ];
                updateBars(initialData);
            };

	makeVis(regionMap);

// Failed attempts

	/*data.forEach(function(d) {
		// conditionals for bar graph 1
		
			farWest_mean = [d3.mean(data.map(function(d){ return d.White})),
       		d3.mean(data.map(function(d){ return d.Black})),
       		d3.mean(data.map(function(d){ return d.Hispanic})),
       		d3.mean(data.map(function(d){ return d.Asian})),
       		d3.mean(data.map(function(d){ return d.American_Indian})),
       		d3.mean(data.map(function(d){ return d.Pacific_Islander})),
       		d3.mean(data.map(function(d){ return d.Biracial}))];
		if (d.Region == "Great Lakes") {
			greatLakes_mean = [d3.mean(data.map(function(d){ return d.White})),
       		d3.mean(data.map(function(d){ return d.Black})),
       		d3.mean(data.map(function(d){ return d.Hispanic})),
       		d3.mean(data.map(function(d){ return d.Asian})),
       		d3.mean(data.map(function(d){ return d.American_Indian})),
       		d3.mean(data.map(function(d){ return d.Pacific_Islander})),
       		d3.mean(data.map(function(d){ return d.Biracial}))];
		}
});
console.log(farWest_mean);
console.log(greatLakes_mean);
*/

/*
	var filterCollege = d3.nest()
	  .key(function(d) { 
	  	if (d.Control == "Private") {
	  		return d;
	  		}; 
	  	})
	  .entries(data);

	var privateCollege = filterCollege[0].values;
	var publicCollege = filterCollege[1].values;

	//console.log(filterCollege[0].values);
	//console.log(filterCollege[1].values);

	// This will be the x-axis
	var regions = ["Far West", "Great Lakes", "Great Plains", "Mid-Atlantic", "New England",
	"Outlying Areas", "Rocky Mountains", "Southeast", "Southwest"];

	var races = ["White", "Black", "Hispanic", "Asian", "American_Indian", "Pacific_Islander", "Biracial"];
	
	var farWest_white = [];
	var farWest_black = [];
	var farWest_hispanic = [];
	var farWest_asian = [];
	var farWest_americanIndian = [];
	var farWest_pacificIslander = [];
	var farWest_biRacial = [];

	var greatLakes_white = 0;
	var greatLakes_black = 0;
	var greatLakes_hispanic = 0;

	var farWestArray = [];
	var greatLakesArray = [];

	data.forEach(function(d) {
		// conditionals for bar graph 1
		if (d.Region == "Far West") {
			d.White = +d.White;
			farWest_white.push(d.White);

			d.Black = +d.Black;
			farWest_black.push(d.Black);

			d.Hispanic = +d.Hispanic;
			farWest_hispanic.push(d.Hispanic);


		} else if (d.Region == "Great Lakes") {

		
		}
	});	
	var farWest_whiteAvg = d3.mean(farWest_white);
	var farWest_blackAvg = d3.mean(farWest_black);
	var farWest_hispanicAvg = d3.mean(farWest_black);

	console.log(farWest_whiteAvg);
	*/


	/*// This will be the x-axis
	var regions = ["Far West", "Great Lakes", "Great Plains", "Mid-Atlantic", "New England",
	"Outlying Areas", "Rocky Mountains", "Southeast", "Southwest"];

	var races = ["White", "Black", "Hispanic", "Asian", "American_Indian", "Pacific_Islander", "Biracial"];
	
	var farWest_white = [];
	var farWest_black = [];
	var farWest_hispanic = [];
	var farWest_asian = [];
	var farWest_americanIndian = [];
	var farWest_pacificIslander = [];
	var farWest_biRacial = [];

	var greatLakes_white = [];
	var greatLakes_black = [];
	var greatLakes_hispanic = [];
	var greatLakes_asian = [];
	var greatLakes_americanIndian = [];
	var greatLakes_pacificIslander = [];
	var greatLakes_biRacial = [];

	var greatPlains_white = [];
	var greatPlains_black = [];
	var greatPlains_hispanic = [];
	var greatPlains_asian = [];
	var greatPlains_americanIndian = [];
	var greatPlains_pacificIslander = [];
	var greatPlains_biRacial = [];	

	var farWestArray = [];
	var greatLakesArray = [];

	data.forEach(function(d) {
		// conditionals for bar graph 1
		if (d.Region == "Far West") {
			d.White = +d.White;
			farWest_white.push(d.White);

			d.Black = +d.Black;
			farWest_black.push(d.Black);

			d.Hispanic = +d.Hispanic;
			farWest_hispanic.push(d.Hispanic);

			d.Asian = +.d.Asian;
			farWest_asian.push(d.Asian);

			d.American_Indian = +.d.American_Indian;
			farWest_americanIndian.push(d.American_Indian);

			d.Pacific_Islander = +.d.Pacific_Islander;
			farWest_pacificIslander.push(d.Pacific_Islander);

			d.Biracial = +.d.Biracial;
			farWest_biRacial.push(d.Biracial);

		} else if (d.Region == "Great Lakes") {
			d.White = +d.White;
			greatLakes_white.push(d.White);

			d.Black = +d.Black;
			greatLakes_black.push(d.Black);

			d.Hispanic = +d.Hispanic;
			greatLakes_hispanic.push(d.Hispanic);

			d.Asian = +.d.Asian;
			greatLakes_asian.push(d.Asian);

			d.American_Indian = +.d.American_Indian;
			greatLakes_americanIndian.push(d.American_Indian);

			d.Pacific_Islander = +.d.Pacific_Islander;
			greatLakes_pacificIslander.push(d.Pacific_Islander);

			d.Biracial = +.d.Biracial;
			greatLakes_biRacial.push(d.Biracial);
					
		}
	});	
	var farWest_whiteAvg = d3.mean(farWest_white);
	var farWest_blackAvg = d3.mean(farWest_black);
	var farWest_hispanicAvg = d3.mean(farWest_black);
	var farWest_whiteAvg = d3.mean(farWest_white);
	var farWest_blackAvg = d3.mean(farWest_black);
	var farWest_hispanicAvg = d3.mean(farWest_black);*/



//Nandan's code starts here
width = 1000;
height = 760;

var colorscale = d3.scaleOrdinal().domain(regions).range(d3.schemeCategory10);

var svgbubble = d3.select("#NaNo_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
 var tooltip = d3.select("#NaNo_dataviz")
    .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "black")
      .style("border-radius", "5px")
      .style("padding", "10px")
      .style("color", "white")

   
   var showTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
    tooltip
      .style("opacity", 1)
      .html("College: " + d.Name + "<br />"
      	 + "Population: " + d["Undergrad Population"] + "<br />"
      	+  "Poverty:" + d["Poverty Rate"])
      .style("left", (d3.mouse(this)[0]+30) + "px")
      .style("top", (d3.mouse(this)[1]+30) + "px");
  }
  
  var hideTooltip = function(d) {
    tooltip
      .transition()
      .duration(200)
      .style("opacity", 0)
  }
  var moveTooltip = function(d) {
    tooltip
      .style("left", (d3.mouse(this)[0]+30) + "px")
      .style("top", (d3.mouse(this)[1]+30) + "px")
  }
var bubbleXaxis = d3.scaleLinear()
	.domain([0, 100])
	.range([0, width]);

var bubbleYaxis = d3.scaleLinear()
	.domain([0, 60])
	.range([height, 0]);

svgbubble.append("g").attr("transform", "translate(0," + height + ")").call(d3.axisBottom(bubbleXaxis));
svgbubble.append("g").call(d3.axisLeft(bubbleYaxis));
svgbubble.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top + 20) + ")")
      .text("Percent Minority (Non-White)");
svgbubble.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .text("Value");      

svgbubble.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "bubble")
      .attr("cx", function (d) { return bubbleXaxis(100 - (d["White"] * 100)); })
      .attr("cy", function (d) { return bubbleYaxis(d["Poverty Rate"]); } )
      .attr("r", function (d) { 
      	var size = (((d["Poverty Rate"] / 100.0) * d["Undergrad Population"]) / 225);
      		if (size < 2.1) {
      			return 2.1;
      		} else {
      			return size;
      		}
      	 })
      .style("fill", function (d) { 
      		return colorscale(d.Region);
      }).on("mouseover", showTooltip)
      .on("mouseleave", hideTooltip)
      .on("mousemove", moveTooltip);

      var dropbox = d3.select("#NaNo_dataviz").append('p').append('select').attr('id', 'dropbox');
		dropbox.append('option').attr('value', 'all').text('All Regions');
		dropbox.append('option').attr('value', 'Far West').text('Far West');
        dropbox.append('option').attr('value', 'Great Lakes').text('Great Lakes');
        dropbox.append('option').attr('value', 'Great Plains').text('Great Plains');
        dropbox.append('option').attr('value', 'Mid-Atlantic').text('Mid-Atlantic');
        dropbox.append('option').attr('value', 'New England').text('New England');
        dropbox.append('option').attr('value', 'Outlying Areas').text('Outlying Areas');
        dropbox.append('option').attr('value', 'Rocky Mountains').text('Rocky Mountains');
        dropbox.append('option').attr('value', 'Southeast').text('Southeast');
        dropbox.append('option').attr('value', 'Southwest').text('Southwest');
        
        var toprow = d3.select("#NaNo_dataviz").append('p');
        toprow.append('b').append('text').text('Population \xa0 \xa0');
        toprow.append('text').text(' \xa0 min:');
         toprow.append('input').attr('type', 'number')
        	.attr('id', 'lessthan').attr('width', '6').attr('min', 0);
        	toprow.append('text').text('  \xa0    max:');
        	toprow.append('input').attr('type', 'number')
        	.attr('id', 'greaterthan').attr('width', '6').attr('min', 0);

        var bottomrow = d3.select("#NaNo_dataviz").append('p');
         var text = bottomrow.append('b').append('text').text('Poverty % \xa0 \xa0');
         bottomrow.append('text').text(' \xa0 min:');
         bottomrow.append('input').attr('type', 'number')
        	.attr('id', 'lessthanpov').attr('width', '6').attr('step', 0.01)
        	.attr('min', 0);
        	bottomrow.append('text').text('   \xa0     max:');
        	bottomrow.append('input').attr('type', 'number')
        	.attr('id', 'greaterthanpov').attr('width', '6').attr('step', 0.01)
        	.attr('min', 0);

    d3.select("#NaNo_dataviz")
        .append('p')
        .append('button')
            .style("border", "1px solid black")
        .text('Filter Data')
        .on('click', function() {
        	var userregion  = document.getElementById('dropbox').value;
        	var lessthan;
        	var greaterthan;
        	var lessthanpov;
        	var greaterthanpov;
        if(document.getElementById('lessthan').value == "") {
        	lessthan = 0;
        } else {
        	lessthan = parseInt(document.getElementById('lessthan').value);
        }
        
        if("" == document.getElementById('greaterthan').value) {
        	greaterthan = 60000;
        } else {
        	greaterthan = parseInt(document.getElementById('greaterthan').value);
        }

        if(document.getElementById('lessthanpov').value == "") {
        	lessthanpov = 0.0;
        } else {
        	lessthanpov = parseFloat(document.getElementById('lessthanpov').value);
        }
        
        if("" == document.getElementById('greaterthanpov').value) {
        	greaterthanpov = 100.0;
        } else {
        	greaterthanpov = parseFloat(document.getElementById('greaterthanpov').value);
        }
        console.log(lessthan);
        console.log(greaterthan);
        console.log(lessthanpov);
        console.log(greaterthanpov);
        	if (lessthan > greaterthan) {
        		alert("Population min cannot be greater than max.");
        	} else if(greaterthan <= 0) {
        		alert("Population max has to be at least 1");
        	} else if(lessthanpov > greaterthanpov) {
        		alert("Poverty % min cannot be greater than max.");
        	} else if(greaterthanpov <= 0) {
        		alert("Poverty % max has to be greater than 0");
        	} else {
        		svgbubble.selectAll("circle").each(function(d) {
        			if ((d.Region == userregion || userregion == "all") 
        				&& (d["Undergrad Population"] >= lessthan && d["Undergrad Population"] <= greaterthan)
        				&& (d["Poverty Rate"] >= lessthanpov && greaterthanpov >= d["Poverty Rate"])) {
        					d3.select(this).transition().style("opacity", "1.0").duration(400);
        					d3.select(this).style("pointer-events", "all");
        			} else {
        					d3.select(this).style("pointer-events", "none");
        					d3.select(this).transition().style("opacity", "0.0").duration(400);
        			}	
        		});
        	}

        });
		var radius = Math.min(width, height) / 2 - margin
       	var piechart = d3.select("#NaNo_Pie")
  		.append("svg")
    	.attr("width", width)
    	.attr("height", height)
  		.append("g")
    	.attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
		var colorofperson = d3.scaleOrdinal().domain(races).range(d3.schemeCategory10);
		var pie = d3.pie()
  		.value(function(d) {return d.value; });
  		var data_ready = pie(d3.entries(data));

  		piechart
  		.selectAll('whatever')
  		.data(data_ready)
  		.enter()
  		.append('path')
  		.attr('d', d3.arc()
    		.innerRadius(0)
    		.outerRadius(radius)
  		)
  		.attr('fill', function(d){ return(colorofperson(d.data.key)) })
  		.attr("stroke", "black")
  		.style("stroke-width", "2px")
  		.style("opacity", 0.7)
	
});