function gauge(id, value, max, unit, color){

new Chart(document.getElementById(id),{

type:"doughnut",

data:{

datasets:[{

data:[value, max-value],

backgroundColor:[color,"#374151"],

borderWidth:0

}]

},


options:{

cutout:"78%",

plugins:{

legend:{
display:false
},

title:{

display:false

}

}

},


plugins:[{

id:"centerText",

beforeDraw(chart){

let ctx = chart.ctx;

let width = chart.width;

let height = chart.height;


ctx.restore();


ctx.font = "bold 18px Arial";

ctx.fillStyle = "white";

ctx.textAlign="center";

ctx.textBaseline="middle";


ctx.fillText(

value + " " + unit,

width/2,

height/2

);


ctx.restore();

}

}]


});

}




gauge(
"volt",
230,
250,
"V",
"#00eaff"
);



gauge(
"amp",
45,
100,
"A",
"#22c55e"
);



gauge(
"power",
10.2,
50,
"kW",
"#f59e0b"
);



gauge(
"temp",
38,
100,
"°C",
"#ef4444"
);