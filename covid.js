document.addEventListener("DOMContentLoaded", function(){
	settings = {};
	let d = new liteChart("chart", settings);

	// Set labels
	d.setLabels(["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]);

	// Set legends and values
	d.addLegend({"name": "Day", "stroke": "gray", "fill": "#fff", "values": [100, 200, 450, 400, 500, 300, 700, 800, 601, 705, 604, 803]});
	d.addLegend({"name": "Night", "stroke": "#3b95f7", "fill": "#fff", "values": [200, 150, 240, 180, 150, 240, 230, 300, 200, 150, 270, 200]});

	// Inject chart into DOM object
	let div = document.getElementById("graphic");
	d.inject(div);

	// Draw
	d.draw();
});

if(window.navigator.userAgent.toLowerCase().includes("mobi")){
    map.setAttribute('height', 700);
}