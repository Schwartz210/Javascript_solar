function setOrbits(){
    for (var i = 0; i < planets.length; i++){
        var planet = planets[i];
        planet['orbit'] = getOrbit(planet['distance']);
    }
}

function setOnclickListener(canvas){
    canvas.addEventListener('click',function(event){
        var clickPosition = [event.pageX, event.pageY];
        if (clickPosition[0] > BUTTONDIMENSION[0]){ //too far to the right
            return false;
        } else if (clickPosition[1] < BUTTONDIMENSION[1]){ // first button
            toggleFlightPath(canvas);
        }

    }
    );
}


function setCanvas(){
    var canvas = document.createElement("CANVAS");
    canvas.id = "canvas";
    canvas.width = WIDTH;
    canvas.height = HEIGHT;
    setOnclickListener(canvas);
    var context = canvas.getContext("2d");
    document.body.appendChild(canvas);
}

function drawBackground(){
    var canvas = document.getElementById('canvas');
    var context = canvas.getContext("2d");
    context.beginPath();
    context.fillStyle = "black";
    context.fillRect(0, 0, canvas.width, canvas.height);
    context.fill();
    context.fillStyle = "yellow";
    context.arc(WIDTH/2,HEIGHT/2,50,0,2*Math.PI);
    context.fill();
    context.fillStyle = 'grey';
    context.fillRect(0,0,BUTTONDIMENSION[0], BUTTONDIMENSION[1]);
    context.fillStyle = "white";
    context.fillText("Flight Path", 5, BUTTONDIMENSION[1] * .75);
    context.fill();
    if (flightPath == true){
        drawFlighPath(context);
    }
    context.stroke();
}

function drawFlighPath(context){
    context.fillStyle = 'white';
    for (var i = 0; i < planets.length; i++){
        var planet = planets[i];
        var orbit = planet['orbit'];
        for (var j = 0; j < orbit.length; j++){
            var xy = orbit[j];
            context.fillRect(xy[0],xy[1],1,1);
        }
    }
}

function toggleFlightPath(canvas){
    if (flightPath == true) {
        flightPath = false;
    } else {
        flightPath = true;
    }
}

function randomizePositions(){
    for (var i = 0; i < planets.length; i++){
        var planet = planets[i];
        var randomIndex = Math.floor(Math.random() * planet['orbit'].length);
        planet['orbitIndex'] = randomIndex;
    }
}

function updatePosition(planet){
    if (planet['orbitIndex'] < planet['orbit'].length-1){
        planet['orbitIndex']++;
    } else {
        planet['orbitIndex'] = 0;
    }
    planet['position'] = planet['orbit'][planet['orbitIndex']];
}

function updatePlanetPositions(){
    for (var i = 0; i < planets.length; i++){
        var planet = planets[i];
        updatePosition(planet);
    }
}

function drawPlanets(){
    updatePlanetPositions();
    var c = document.getElementById("canvas");
    var context = c.getContext("2d");
    for (var i = 0; i < planets.length; i++){
        var planet = planets[i];
        context.beginPath();
        context.fillStyle = planet['color'];
        context.arc(planet['position'][0], planet['position'][1], planet['radius'], 0, 2 * Math.PI);
        context.fill();
        context.stroke();
    }
}

function execute(){
    var timer = setInterval(animate, 75);
    setOrbits();
    randomizePositions();
    setCanvas();
    drawBackground();
    animate();
}

function getOrbit(distance){
    var sides = Math.round(distance[0] / 1.5,0);
    var orbit = [];
    for (var i = 0; i < sides; i++){
        x = (distance[0] * Math.cos(i * 2 * Math.PI / sides)) + CENTER[0];
        y = (distance[1] * Math.sin(i * 2 * Math.PI / sides)) + CENTER[1];
        orbit.push([x, y]);
    }
    return orbit;
}

function animate(){
    drawBackground();
    drawPlanets();
}
