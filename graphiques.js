const labels=[
"10:00",
"10:10",
"10:20",
"10:30",
"10:40",
"10:50"
];


function createGraph(id,label,data,color){


new Chart(document.getElementById(id),{

type:"line",


data:{

labels:labels,

datasets:[{

label:label,

data:data,

borderColor:color,

backgroundColor:color,

tension:0.4,

fill:false

}]

},


options:{

responsive:true,


plugins:{

legend:{

labels:{

color:"white"

}

}

},


scales:{


x:{

ticks:{
color:"white"
}

},


y:{

ticks:{
color:"white"
}

}


}


}


});


}




createGraph(
"voltageChart",
"Tension V",
[228,230,229,231,230,228],
"#00eaff"
);



createGraph(
"currentChart",
"Courant A",
[40,42,45,43,46,45],
"#22c55e"
);



createGraph(
"powerChart",
"Puissance kW",
[9,10,10.2,11,10.5,10.8],
"#f59e0b"
);



createGraph(
"temperatureChart",
"Température °C",
[35,36,38,39,38,37],
"#ef4444"
);



createGraph(
"pfChart",
"Cos φ",
[0.91,0.92,0.90,0.93,0.92,0.91],
"#a855f7"
);



createGraph(
"frequencyChart",
"Fréquence Hz",
[50,50,49.9,50,50,50],
"#38bdf8"
);