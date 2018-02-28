var pic = document.getElementById("vimage");
var old = [-1, -1];

var change = function(e) {
    e.preventDefault();
    this.setAttribute("fill", "green");
};

var clicked = function(e) {
    if (e.toElement == this) {
	draw(e.offsetX, e.offsetY);
    }
};

var clearRect = function(e) {
    var rect = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"rect"
    );
    rect.setAttribute("x", 0);
    rect.setAttribute("y", 0);
    rect.setAttribute("width", pic.getAttribute("width"));
    rect.setAttribute("height", pic.getAttribute("height"));
    rect.setAttribute("fill", "white");
    pic.appendChild(rect);
    old[0] = -1;
};

var draw = function(x, y) {
    var cl = document.createElementNS(
	"http://www.w3.org/2000/svg",
	"circle"
    );

    cl.setAttribute("cx", x);
    cl.setAttribute("cy", y);
    cl.setAttribute("r", 20);
    cl.setAttribute("fill", "red");
    cl.setAttribute("stroke", "black");

    pic.appendChild(cl);
    if (old[0] != -1) {
	var line = document.createElementNS(
	    "http://www.w3.org/2000/svg",
	    "line"
	);
	line.setAttribute("x1", old[0]);
	line.setAttribute("y1", old[1]);
	line.setAttribute("x2", x);
	line.setAttribute("y2", y);
	line.setAttribute("style", "stroke:red;stroke-width:2");
	pic.appendChild(line);
    }
    old[0] = x;
    old[1] = y;	
};

var click = function(e) {
    draw(e.offsetX, e.offsetY);
};

document.getElementById("clear").addEventListener("click", clearRect);
pic.addEventListener("click", click);
