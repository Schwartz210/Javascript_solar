var WIDTH = 800;
var HEIGHT = 800;
var CENTER = [WIDTH/2, HEIGHT / 2]
var BUTTONDIMENSION = [80,20];
var SUNRADIUS = 60;
var AU = WIDTH / 4;
var earth = {'radius' : 10,
            'position' : [0,0],
            'distance' : [AU * 1.0155, AU * 0.9832],
            'orbitIndex' : 0,
            'color' : 'blue'};

var mars = {'radius' : 7,
            'position' : [0,0],
            'distance' : [AU * 1.666, AU * 1.3814],
            'orbitIndex' : 0,
            'color' : 'red'};

var venus = {'radius' : 7,
            'position' : [0,0],
            'distance' : [AU * 0.728, AU * 0.718],
            'orbitIndex' : 0,
            'color' : 'white'};

var mercury = {'radius' : 5,
            'position' : [0,0],
            'distance' : [AU * 0.466, AU * 0.3074],
            'orbitIndex' : 0,
            'color' : 'grey'};

var planets = [earth, mars, venus, mercury];
var flightPath = false;
