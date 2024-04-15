// Width and height
const width = 960;
const height = 500;

// Create SVG element
const svg = d3.select("#map")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

// Define map projection
const projection = d3.geoMercator()
    .translate([width / 2, height / 2])
    .scale(100);

// Define path generator
const path = d3.geoPath()
    .projection(projection);

// Load and display the World Atlas JSON
d3.json("data/world.geojson").then(function(data) {
    svg.selectAll("path")
        .data(data.features)
        .enter()
        .append("path")
        .attr("d", path)
        .attr("fill", "#ccc")
        .attr("stroke", "#333");
});


