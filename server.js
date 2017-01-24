// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

/*app.get("/lunchPickerInfo", function (request, response) {
  var info = "Lunch Picker Info:<br/>";
  
  Object.keys(users).forEach(function (id) {
    var status = "Not Ready";
    if (users[id].status) {
      status = "Ready";
    }
    info += "Name: '" + users[id].name + "' Vote: '" + users[id].vote + "' Status: '" + status + "'<br/>";
  });
  
  response.send(info);
});*/

/*app.get("/oldIndex", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});*/

var server = app.listen(process.env.PORT);
var io = require('socket.io').listen(server);

var users = {};
var shotgunUsername = "";

    var defaultRestaurants = [
  { desire: 1, name: "Albatros", address:"23591 Rockfield Blvd., Ste G\nLake Forest, CA 92630" },
  { desire: 0, name: "Avila's El Ranchito Mexican Restaurant" , address: "24406 Muirlands Blvd\nLake Forest, CA 92630" },
  { desire: 1, name: "Bagels & Brew", address: "21771 Lake Forest Dr, #100\nLake Forest, CA 92630" },
  { desire: 2, name: "BJ'S Restaurant & Brewhouse", address: "24032 El Toro Road\nLaguna Hills, CA 92653" },
  { desire: 0, name: "Bravo Avo", address: "26696 Portola Pkwy, Ste B\nFoothill Ranch, CA 92610" },
  { desire: 6, name: "Buffalo Wild Wings", address: "23600 Rockfield Blvd., Ste. S5-E\nLake Forest, CA 92630" },
  { desire: 1, name: "Café Rio", address: "24312 Rockfield Blvd\nLake Forest, CA 92630" },
  { desire: 10, name: "California Fish Grill", address: "23704 El Toro Road,\nLake Forest, CA" },
  { desire: 1, name: "Chick-fil-A", address: "26792 Portola Pkwy\nFoothill Ranch, CA 92610" },
  { desire: 0, name: "Chili's", address: "26782 Portola Pkwy\nFoothill Ranch, CA 92610" },
  { desire: 1, name: "Din Ho", address: "21741 Lake Forest Dr\nEl Toro, CA 92630" },
  { desire: 1, name: "Empanada Man Pizzeria", address: "20761 Lake Forest Dr.\nLake Forest, CA 92630" },
  { desire: 4, name: "Five Guys", address: "24391 Alicia Parkway\nMission Viejo, CA 92691" },
  { desire: 0, name: "Flame Broiler", address: "45 Auto Center Dr #104\nLake Forest, CA 92610" },
  { desire: 3, name: "Food Court", address: "26612 Towne Center Drive\nFoothill Ranch, CA 92610" },
  { desire: 4, name: "Food Trucks", address: "20-40 Pacifica\nIrvine, CA 92618" },
  { desire: 5, name: "Fudruckers", address: "23621 El Toro Road\nLake Forest, CA 92630" },
  { desire: 2, name: "Genghis Khan Mongolian BBQ", address: "23615 El Toro Rd, Ste P\nLake Forest, CA 92630" },
  { desire: 2, name: "Hatam Fine Persian Cuisine", address: "25800 Jeronimo Rd., Suite 402\nMission Viejo, CA 92691" },
  { desire: 9, name: "In-N-Out", address: "24001 Avenida De La Carlota\nLaguna Hills, CA 92653" },
  { desire: 5, name: "Inka Mama’s Peruvian Cuisine", address: "26676 Portola Parkway #B\nLake Forest, CA 92610" },
  { desire: 3, name: "Islands", address: "26582 Towne Centre Drive\nFoothill Ranch, CA 92610" },
  { desire: 1, name: "La Perlita", address: "26771 Portola Pkwy\nFoothill Ranch, CA 92610" },
  { desire: 1, name: "Los Cabos Cantina", address: "20702 Lake Forest Dr.\nLake Forest, CA 92630" },
  { desire: 2, name: "Lucille's Smokehouse BBQ", address: "23760 El Toro Rd.\nLake Forest, CA 92630" },
  { desire: 2, name: "Miguel's Cocina", address: "26592 Towne Centre Drive\nFoothill Ranch, CA 92610" },
  { desire: 2, name: "Mountain Mike's Pizza", address: "22942 Ridge Route Dr, Ste 100\nLake Forest, CA 92630" },
  { desire: 0, name: "Natraj Cuisine of India", address: "24861 Alicia Pkwy\nLaguna Hills, CA 92653" },
  { desire: 3, name: "Nina's Indian & British Grocery Restaurant", address: "23542 El Toro Road\nLake Forest, CA 92630" },
  { desire: 1, name: "Outback Steakhouse", address: "26652 Portola Pkwy\nFoothill Ranch, CA 92610" },
  { desire: 7, name: "Pei Wei Asian Diner", address: "23632 El Toro Road\nLake Forest, CA 92630" },
  { desire: 4, name: "Philly's Best", address: "22722 Lambert St, Ste 1703\nLake Forest, CA 92630" },
  { desire: 1, name: "Pho Majestic", address: "21771 Lake Forest Dr. #114\nLake Forest, CA 92630" },
  { desire: 4, name: "Pieology", address: "81 Fortune Dr. Suite 157 (Irvine Spectrum between Barnes & Noble and Wahoo's Fish Tacos)\nIrvine, CA 92618" },
  { desire: 0, name: "Pita Grill", address: "3800 North Barranca Parkway, Suite N\nIrvine, CA 92606" },
  { desire: 0, name: "Red Brick Pizza", address: "27412 Portola Pkwy\nFoothill Ranch, CA 92610" },
  { desire: 1, name: "Red Robin", address: "26522 Towne Centre Drive\nFoothill Ranch, CA 92610" },
  { desire: 1, name: "Rocq Cafe", address: "22722 Lambert Street, Ste. 1702\nLake Forest, CA 92630" },
  { desire: 9, name: "Round Table Pizza", address: "27472 Portola Pkwy, Ste 201\nFoothill Ranch, CA 92610" },
  { desire: 3, name: "Slater's 50/50", address: "24356 Swartz Dr.\nLake Forest, CA 92630" },
  { desire: 7, name: "Souplantation", address: "26572 Towne Centre Dr.\nFoothill Ranch, CA 92610" },
  { desire: 0, name: "Spice India", address: "20651 Lake Forest Dr.\nLake Forest, CA 92630" },
  { desire: 5, name: "Spice Thai", address: "24301 Muirlands Blvd\nLake Forest, CA 92630" },
  { desire: 1, name: "Surfin' Donuts", address: "26861 Trabuco Rd, Ste G\nMission Viejo, CA 92691" },
  { desire: 3, name: "Taco Mesa", address: "22922 Los Alisos Blvd\nMission Viejo, CA 92691" },
  { desire: 1, name: "Texas Pit BBQ", address: "24601 Raymond Way #2\nLake Forest, CA 92630" },
  { desire: 4, name: "Thai Corner", address: "22371 El Toro Rd, Ste A\nLake Forest, CA 92630" },
  { desire: 0, name: "Thai Garden", address: "27472 Portola Pkwy\nFoothill Ranch, CA 92610" },
  { desire: 1, name: "The Habit Burger Grill", address: "23632 El Toro Road\nLake Forest, CA 92630" },
  { desire: 0, name: "The Hat: World Famous Patrami", address: "23641 Rockfield Blvd.\nLake Forest, CA 92630" },
  { desire: 1, name: "TK Burgers", address: "24902 Chrisanta Dr.\nMission Viejo, CA 92691" },
  { desire: 1, name: "Tommy Pastrami", address: "8685 Irvine Center Drive\nIrvine, CA 92618" },
  { desire: 0, name: "Wahoo's Fish Tacos", address: "27412 Portola Pkwy. Unit A\nLake Forest, CA 92610" },
  { desire: 6, name: "Wing Stop", address: "22611 Lake Forest Dr.\nLake Forest, CA 92630" }
];

var restaurant_list = [];
var Datastore = require('nedb'), 
    // Security note: the database is saved to the file `datafile` on the local filesystem. It's deliberately placed in the `.data` directory
    // which doesn't get copied if someone remixes the project.
    db = new Datastore({ filename: '.data/datafile', autoload: true });

db.count({}, function (err, count) {
  console.log("There are " + count + " restaurants in the database");
  if(err) console.log("There's a problem with the database: ", err);
  else if(count<=0){ // empty database so needs populating
    // default restaurants inserted in the database
    db.insert(defaultRestaurants, function (err, restaurantsAdded) {
      if(err) console.log("There's a problem with the database: ", err);
      else if(restaurantsAdded) console.log("Default restaurants inserted in the database");
    });
  }
});

db.find({}, function (err, restaurants) { // Find all restaurants in the collection
  restaurants.forEach(function(restaurant) {
    restaurant_list.push(restaurant.text);
  });
});


io.on('connection', function(socket){
  users[socket.id] = {};
  users[socket.id].id = socket.id;
  users[socket.id].name = "";
  users[socket.id].vote = "";
  users[socket.id].status = 2;

  io.emit('users', users, shotgunUsername);
  
  socket.on('disconnect', function(){
        delete users[socket.id];
        io.emit('users', users, shotgunUsername);
    });
    
    socket.on('updateName', function(name){
        users[socket.id].name = name;
        io.emit('users', users, shotgunUsername);
    });
    
    socket.on('updateVote', function(vote){
        users[socket.id].vote = vote;
        io.emit('users', users, shotgunUsername);
    });
    
    socket.on('updateStatus', function(status){
        users[socket.id].status = status;
        io.emit('users', users, shotgunUsername);
    });
    
    socket.on('shotgunCalled', function(){
        shotgunUsername = socket.id;
        io.emit('shotgunUpdated', shotgunUsername, users);
    });
    
    socket.on('cloud_item_picked', function(item){
        users[socket.id].vote = item;
    });
    
    socket.on('get_restaurant_list', function(){
      io.emit('restaurant_list_updated', restaurant_list);
    });
});