//alert();
let myType;
let createChart;
let title = 'Predicted world population (millions) in 2050';

let arrA = ["Africa", "Asia", "Europe", "Latin America", "North America"];
let arrColor = ["rgba(255,99,132,0.6)",
    "rgba(54,162,232,0.6)",
    "rgba(255,206,66,0.6)",
    "rgba(75,192,192,0.6)",
    "rgba(55,99,32,0.6)"];
let arrData = [2478,5267,734,784,100];

let strArr = [];

let selected = document.getElementById("select");
let mode = 'point';

let legendPosition = "top";
let borderColor = 'black';
let toolTip_bodyFont_size = 12;
let legend_fontSize = 14;
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
                labels: arrA,
                datasets: [
                    {
                        label: "Population (millions)",
                        backgroundColor: arrColor,
                        data: arrData,
                        borderWidth:1,
                        borderColor:borderColor,
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
                    mode: mode,
                    bodyFontSize:toolTip_bodyFont_size

                },
                legend:{
                    display:true,
                    position:legendPosition,
                    fontColor: 'black',
                    labels:{fontSize:legend_fontSize}
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
                     <br>
                     <span class="allSpan">Tooltip Mode:</span>
                     <label>
                         <select id="tooltips">
                             <option value="point">point</option>
                             <option value="nearest">nearest</option>
                             <option value="index">index</option>
                             <option value="dataset">dataset</option>
                         </select>
                     </label>
                     <br>
                     <span class="allSpan">Tooltip Font size:</span>
                    <input type="number" id="toolTip-fontSize" value="12"><br>
                    
                     <span class="allSpan">Legand:</span>
                     <label>
                         <select id="legend">
                             <option value="top">top</option>
                             <option value="left">left</option>
                             <option value="bottom">bottom</option>
                             <option value="right">right</option>
                         </select>
                     </label>
                     <br>
                     <span class="allSpan">Legend Font size:</span>
                     <input type="number" id="legend-fontSize" value="12" ><br>
                     
                     
                     <button id="btn01">Apply</button>
    `;
    let apply = document.getElementById("btn01");
    apply.addEventListener("click",pushChange);
}

let dataF = document.getElementById("dataFill");
let dataApplyBtn = document.getElementById("dataApplyBtn");
dataApplyBtn.addEventListener("click",createDataAdd);
function createDataAdd() {
    //alert();
    //clearAllData();
    strArr = [];arrColor = [];arrData = [];
    let input11 = document.getElementById("input11").value;
    arrA = input11.split(",");

    let input22 = document.getElementById("input22").value;
    arrColor = input22.split(",");

    let realData = document.getElementById("realData").value;
    arrData = realData.split(",");
    console.log(arrData);
    //alert(newValue);


    drawMe();
    //alert(arr);
}


function pushChange() {

    title = document.getElementById("tlt1").value;
    if (title === "" || title === null){
        alert("Field can't be blank");
        return;
    }

    mode = document.getElementById("tooltips").value;
    legendPosition = document.getElementById("legend").value;

    borderColor = document.getElementById("border-color").value;
    //////////////////////////////////////////////////////////
    legend_fontSize = parseInt( document.getElementById("legend-fontSize").value);
    /////////////////////////////////////////////////////////
    //alert(tooltip);
    //createDataAdd();
     drawMe();
}
let addColor = document.getElementById("addColor");
addColor.addEventListener("click",addColorFromPicker);
function addColorFromPicker() {
    let myColor = document.getElementById("myColor");
    let newValue = myColor.value;

    strArr.push(newValue);
    document.getElementById("input22").value = strArr;
}

let dataClear = document.getElementById("dataClearBtn");
dataClear.addEventListener("click",clearAllData);
function clearAllData(){
    strArr = [];arrColor = [];arrData = [];
    //document.getElementById("realData").value = "";
    //document.getElementById("input22").value = "";
    //document.getElementById("input11").value = "";
}