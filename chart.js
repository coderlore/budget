 
const chart = document.querySelector(".chart");

const canvas = document.createElement("canvas");
canvas.width = 50;
canvas.height = 50;

// Append canvas to chart element
chart.appendChild(canvas);

// Context of the cavas
const ctx = canvas.getContext("2d");

// Change the line width of the chart
ctx.lineWidth = 8;

// Circle radius
const R = 20;

function drawCircle(color, ratio, anticlockwise){
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.arc( canvas.width/2, canvas.height/2, R, 0, ratio * 2 * Math.PI, anticlockwise);
    ctx.stroke();
}

function updateChart( income, outcome){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let ration = income/ (income+outcome);
    drawCircle("#FFFFFF", - ration, true)
    drawCircle("#F0624D", 1 - ration, false)
}