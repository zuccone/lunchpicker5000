// First define your cloud data, using `text` and `size` properties:

var restaurant_list = [
  { desire: 1, text: "Albatros", address:"23591 Rockfield Blvd., Ste G\nLake Forest, CA 92630" },
  { desire: 0, text: "Avila's El Ranchito Mexican Restaurant" , address: "24406 Muirlands Blvd\nLake Forest, CA 92630" },
  { desire: 1, text: "Bagels & Brew", address: "21771 Lake Forest Dr, #100\nLake Forest, CA 92630" },
  { desire: 2, text: "BJ'S Restaurant & Brewhouse", address: "24032 El Toro Road\nLaguna Hills, CA 92653" },
  { desire: 0, text: "Bravo Avo", address: "26696 Portola Pkwy, Ste B\nFoothill Ranch, CA 92610" },
  { desire: 6, text: "Buffalo Wild Wings", address: "23600 Rockfield Blvd., Ste. S5-E\nLake Forest, CA 92630" },
  { desire: 1, text: "Café Rio", address: "24312 Rockfield Blvd\nLake Forest, CA 92630" },
  { desire: 10, text: "California Fish Grill", address: "23704 El Toro Road,\nLake Forest, CA" },
  { desire: 1, text: "Chick-fil-A", address: "26792 Portola Pkwy\nFoothill Ranch, CA 92610" },
  { desire: 0, text: "Chili's", address: "26782 Portola Pkwy\nFoothill Ranch, CA 92610" },
  { desire: 1, text: "Din Ho", address: "21741 Lake Forest Dr\nEl Toro, CA 92630" },
  { desire: 25, text: "Del Taco", address: "" },
  { desire: 1, text: "Empanada Man Pizzeria", address: "20761 Lake Forest Dr.\nLake Forest, CA 92630" },
  { desire: 4, text: "Five Guys", address: "24391 Alicia Parkway\nMission Viejo, CA 92691" },
  { desire: 0, text: "Flame Broiler", address: "45 Auto Center Dr #104\nLake Forest, CA 92610" },
  { desire: 3, text: "Food Court", address: "26612 Towne Center Drive\nFoothill Ranch, CA 92610" },
  { desire: 4, text: "Food Trucks", address: "20-40 Pacifica\nIrvine, CA 92618" },
  { desire: 5, text: "Fudruckers", address: "23621 El Toro Road\nLake Forest, CA 92630" },
  { desire: 2, text: "Genghis Khan Mongolian BBQ", address: "23615 El Toro Rd, Ste P\nLake Forest, CA 92630" },
  { desire: 2, text: "Hatam Fine Persian Cuisine", address: "25800 Jeronimo Rd., Suite 402\nMission Viejo, CA 92691" },
  { desire: 9, text: "In-N-Out", address: "24001 Avenida De La Carlota\nLaguna Hills, CA 92653" },
  { desire: 5, text: "Inka Mama’s Peruvian Cuisine", address: "26676 Portola Parkway #B\nLake Forest, CA 92610" },
  { desire: 3, text: "Islands", address: "26582 Towne Centre Drive\nFoothill Ranch, CA 92610" },
  { desire: 1, text: "La Perlita", address: "26771 Portola Pkwy\nFoothill Ranch, CA 92610" },
  { desire: 1, text: "Los Cabos Cantina", address: "20702 Lake Forest Dr.\nLake Forest, CA 92630" },
  { desire: 2, text: "Lucille's Smokehouse BBQ", address: "23760 El Toro Rd.\nLake Forest, CA 92630" },
  { desire: 2, text: "Miguel's Cocina", address: "26592 Towne Centre Drive\nFoothill Ranch, CA 92610" },
  { desire: 2, text: "Mountain Mike's Pizza", address: "22942 Ridge Route Dr, Ste 100\nLake Forest, CA 92630" },
  { desire: 0, text: "Natraj Cuisine of India", address: "24861 Alicia Pkwy\nLaguna Hills, CA 92653" },
  { desire: 3, text: "Nina's Indian & British Grocery Restaurant", address: "23542 El Toro Road\nLake Forest, CA 92630" },
  { desire: 1, text: "Outback Steakhouse", address: "26652 Portola Pkwy\nFoothill Ranch, CA 92610" },
  { desire: 7, text: "Pei Wei Asian Diner", address: "23632 El Toro Road\nLake Forest, CA 92630" },
  { desire: 4, text: "Philly's Best", address: "22722 Lambert St, Ste 1703\nLake Forest, CA 92630" },
  { desire: 1, text: "Pho Majestic", address: "21771 Lake Forest Dr. #114\nLake Forest, CA 92630" },
  { desire: 4, text: "Pieology", address: "81 Fortune Dr. Suite 157 (Irvine Spectrum between Barnes & Noble and Wahoo's Fish Tacos)\nIrvine, CA 92618" },
  { desire: 0, text: "Pita Grill", address: "3800 North Barranca Parkway, Suite N\nIrvine, CA 92606" },
  { desire: 0, text: "Red Brick Pizza", address: "27412 Portola Pkwy\nFoothill Ranch, CA 92610" },
  { desire: 1, text: "Red Robin", address: "26522 Towne Centre Drive\nFoothill Ranch, CA 92610" },
  { desire: 1, text: "Rocq Cafe", address: "22722 Lambert Street, Ste. 1702\nLake Forest, CA 92630" },
  { desire: 9, text: "Round Table Pizza", address: "27472 Portola Pkwy, Ste 201\nFoothill Ranch, CA 92610" },
  { desire: 3, text: "Slater's 50/50", address: "24356 Swartz Dr.\nLake Forest, CA 92630" },
  { desire: 7, text: "Souplantation", address: "26572 Towne Centre Dr.\nFoothill Ranch, CA 92610" },
  { desire: 0, text: "Spice India", address: "20651 Lake Forest Dr.\nLake Forest, CA 92630" },
  { desire: 5, text: "Spice Thai", address: "24301 Muirlands Blvd\nLake Forest, CA 92630" },
  { desire: 1, text: "Surfin' Donuts", address: "26861 Trabuco Rd, Ste G\nMission Viejo, CA 92691" },
  { desire: 3, text: "Taco Mesa", address: "22922 Los Alisos Blvd\nMission Viejo, CA 92691" },
  { desire: 1, text: "Texas Pit BBQ", address: "24601 Raymond Way #2\nLake Forest, CA 92630" },
  { desire: 4, text: "Thai Corner", address: "22371 El Toro Rd, Ste A\nLake Forest, CA 92630" },
  { desire: 0, text: "Thai Garden", address: "27472 Portola Pkwy\nFoothill Ranch, CA 92610" },
  { desire: 1, text: "The Habit Burger Grill", address: "23632 El Toro Road\nLake Forest, CA 92630" },
  { desire: 0, text: "The Hat: World Famous Patrami", address: "23641 Rockfield Blvd.\nLake Forest, CA 92630" },
  { desire: 1, text: "TK Burgers", address: "24902 Chrisanta Dr.\nMission Viejo, CA 92691" },
  { desire: 1, text: "Tommy Pastrami", address: "8685 Irvine Center Drive\nIrvine, CA 92618" },
  { desire: 0, text: "Wahoo's Fish Tacos", address: "27412 Portola Pkwy. Unit A\nLake Forest, CA 92610" },
  { desire: 6, text: "Wing Stop", address: "22611 Lake Forest Dr.\nLake Forest, CA 92630" }
];

socket.on('restaurant_list_updated', function(new_list){
  //restaurant_list = new_list;
});

function getRestaurantList() {
  return restaurant_list;
}

// Next you need to use the layout script to calculate the placement, rotation and size of each word:

var width = 800;
var height = 256;
var fill = d3.scale.category20();

    d3.layout.cloud()
    	.size([width, height])
    	.words(getRestaurantList())
    	.rotate(function() {
    		return ~~(Math.random() * 2) * 45 * (Math.random() > 0.5 ? -1 : 1);
    	})
    	.font("Impact")
    	.fontSize(function(d) {
    		return d.desire * 3;
    	})
    	.on("end", drawSkillCloud)
    	.start();

// Finally implement `drawSkillCloud`, which performs the D3 drawing:

    // apply D3.js drawing API
    function drawSkillCloud(words) {
    	d3.select("#cloud").append("svg")
    		.attr("width", width)
    		.attr("height", height)
    		.append("g")
    		.attr("transform", "translate(" + ~~(width / 2) + "," + ~~(height / 2) + ")")
    		.selectAll("text")
    		.data(words)
    		.enter().append("text")
    		.style("font-size", function(d) {
    			return d.desire * 3 + "px";
    		})
    		.style("-webkit-touch-callout", "none")
    		.style("-webkit-user-select", "none")
    		.style("-khtml-user-select", "none")
    		.style("-moz-user-select", "none")
    		.style("-ms-user-select", "none")
    		.style("user-select", "none")
    		.style("cursor", "default")
    		.style("font-family", "Impact")
    		.style("fill", function(d, i) {
    			return fill(i);
    		})
    		.attr("text-anchor", "middle")
    		.attr("transform", function(d) {
    			return "translate(" + [d.x, d.y] + ")rotate(" + d.rotate + ")";
    		})
    		.text(function(d) {
    			return d.text;
    		})
     		.attr("id", function(d) {return d.text})
	  		.attr("onclick", "onTagCloudClicked(this)");
    }
    
// set the viewbox to content bounding box (zooming in on the content, effectively trimming whitespace)

    var svg = document.getElementsByTagName("svg")[0];
    var bbox = svg.getBBox();
    var viewBox = [bbox.x, bbox.y, bbox.width, bbox.height].join(" ");
    svg.setAttribute("viewBox", viewBox);
