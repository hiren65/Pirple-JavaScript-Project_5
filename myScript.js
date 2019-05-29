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
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
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