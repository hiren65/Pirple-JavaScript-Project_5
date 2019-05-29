//alert();
let myType;
let createChart;
let title = 'Predicted world population (millions) in 2050';


let selected = document.getElementById("select");
window.onload = function(){
     drawMe();
};

selected.addEventListener("click",drawMe);



function drawMe() {

        //alert();

        let myV = selected.options[selected.selectedIndex].value;
        var grapharea = document.getElementById("myChart").getContext("2d");
        if (createChart){
            createChart.destroy();
        }
        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = 18;
        Chart.defaults.global.defaultColor = '#777';
        createChart =   new Chart(grapharea, {
            type: myV,
            data: {
                labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                datasets: [
                    {
                        label: "Population (millions)",
                        backgroundColor: ["rgba(255,99,132,0.6)",
                                          "rgba(54,162,232,0.6)",
                                          "rgba(255,206,66,0.6)",
                                          "rgba(75,192,192,0.6)",
                                          "rgba(255,99,132,0.6)"],
                        data: [2478,5267,734,784,100],
                        borderWidth:1,
                        borderColor:"silver",
                        hoverBorderColor:"blue",
                        hoverBorderWidth:"1"
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: title,
                    fontColor: 'olive',
                    fontSize:23

                },
                tooltips: {
                    mode: 'point'
                },
                legend:{
                    display:true,
                    position:'right',
                    fontColor: 'black'
                }
            }

        });


}

let ccc = document.getElementById("config-div");
let pressBtn1 = document.getElementById("config-btn");
pressBtn1.addEventListener("click",showConfig);
function showConfig() {
    ccc.innerHTML = `
                     <span>Title</span>
                     <input type="text" id="tlt1">
                     
                     <button id="btn01">Apply</button>
    `;
    let apply = document.getElementById("btn01");
    apply.addEventListener("click",pushChange);
}


function pushChange() {

    title = document.getElementById("tlt1").value;
    if (title === "" || title === null){
        alert("Field can't be blank");
        return;
    }
   drawMe();
}