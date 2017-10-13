var WIDTH = 800;
var HEIGHT = 800;
var CENTER = [WIDTH / 2, HEIGHT / 2]
var BUTTONDIMENSION = [80, 20];
var SUNRADIUS = 60;
var AU = WIDTH / 4;
var LD = AU / 10;


var earth = {'name' : 'earth',
            'radius' : 10,
            'position' : [0,0],
            'distance' : [AU * 1.0155, AU * 0.9832],
            'orbitIndex' : 0,
            'color' : 'blue'};

var mars = {'name' : 'mars',
            'radius' : 7,
            'position' : [0,0],
            'distance' : [AU * 1.666, AU * 1.3814],
            'orbitIndex' : 0,
            'color' : 'red'};

var venus = {'name' : 'venus',
            'radius' : 7,
            'position' : [0,0],
            'distance' : [AU * 0.728, AU * 0.718],
            'orbitIndex' : 0,
            'color' : 'white'};

var mercury = {'name' : 'mercury',
            'radius' : 5,
            'position' : [0,0],
            'distance' : [AU * 0.466, AU * 0.3074],
            'orbitIndex' : 0,
            'color' : 'grey'};

var luna = {'name' : 'luna',
            'radius' : 3,
            'position' : [0,0],
            'distance' : [LD * 1.054432319, LD * 0.9431109],
            'orbitIndex' : 0,
            'color' : 'white',
            'parent' : earth};

var phobos = {'name' : 'phobos',
            'radius' : 2,
            'position' : [0,0],
            'distance' : [LD, LD],
            'orbitIndex' : 0,
            'color' : '#635957',
            'parent' : mars};

var deimos = {'name' : 'deimos',
            'radius' : 2,
            'position' : [0,0],
            'distance' : [LD, LD],
            'orbitIndex' : 0,
            'color' : '#C6AD95',
            'parent' : mars};

var planets = [earth, mars, venus, mercury];
var moons = [luna, phobos, deimos];
var celestialObjects = moons.concat(planets);
var flightPath = true;
