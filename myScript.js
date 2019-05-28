//alert();
let myType;
let createChart; // = "polarArea";

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
        createChart =   new Chart(grapharea, {
            type: myV,
            data: {
                labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
                datasets: [
                    {
                        label: "Population (millions)",
                        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
                        data: [2478,5267,734,784,100]
                    }
                ]
            },
            options: {
                title: {
                    display: true,
                    text: 'Predicted world population (millions) in 2050'
                }
            }

        });




}