//alert();
let myType;
let createChart;
let title = 'Predicted world population (millions) in 2050';

let arrA = ["Africa", "Asia", "Europe", "Latin America", "North America"];
let arrColor = ["#ff008050","#b6e9c850","#c1afef50","#c68f6f50","#127dcd50"];
let arrData = [2478,5267,734,784,100];

let strArr = [];

let selected = document.getElementById("select");
let mode = 'point';

let legendPosition = "top";
let borderColor = 'black';
let toolTip_bodyFont_size = 12;
let legend_fontSize = 14;
let datasetFont_size = 14;
let transparencyOfGraph = "50";
let tooltip_TitleFont_size = 12;
let yaxisBeginAtZero = true;
window.onload = function(){
     drawMe();
};

selected.addEventListener("click",drawMe);



function drawMe() {

        //alert();
        if (arrColor.length === 0){
            alert("No Data");
            return;
        }
        let myV = selected.options[selected.selectedIndex].value;
        var grapharea = document.getElementById("myChart").getContext("2d");
        if (createChart){
            createChart.destroy();
        }
        Chart.defaults.global.defaultFontFamily = 'Lato';
        Chart.defaults.global.defaultFontSize = datasetFont_size;
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
                    fontSize:23,
                },
                scales: {
                    yAxes:[{
                        ticks: {

                            beginAtZero: yaxisBeginAtZero
                        }
                    }]
                },
                tooltips: {
                    mode: mode,
                    bodyFontSize:toolTip_bodyFont_size,
                    titleFontSize:tooltip_TitleFont_size

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
                     <span class="allSpan" id="title_1">Title:</span>
                     <input type="text" id="tlt1" value="Predicted world population (millions) in 2050">
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
                    
                    <span class="allSpan">Tooltip Title Font-size:</span>
                    <input type="number" id="toolTip-title-fontSize" value="12"><br>
                    
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
    if (input11 === ""){
        alert("no Data found");
        return;
    }
    arrA = input11.split(",");

    let input22 = document.getElementById("input22").value;
    if (input22 === ""){
        alert("no Data found");
        return;
    }
    arrColor = input22.split(",");

    let realData = document.getElementById("realData").value;
    if (realData === ""){
        alert("no Data found");return;
    }
    arrData = realData.split(",");
    console.log(arrData);
    //alert(newValue);

    drawMe();
    //alert(arr);
}

// config
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
    datasetFont_size = parseInt( document.getElementById("dataset-font-size").value);

    tooltip_TitleFont_size =parseInt( document.getElementById("toolTip-title-fontSize").value);
    transparencyOfGraph = String (document.getElementById("transparency-graph").value);

    let yaxisBeginAtZero1 =  document.getElementById("selectYaxis").value;
    if (yaxisBeginAtZero1 === "yes"){
        yaxisBeginAtZero = true;
    } else {
        yaxisBeginAtZero = false;
    }
    //alert(yaxisBeginAtZero);

     //alert(transparencyOfGraph);
     changeTransparencyInarrayColor(arrColor);
     console.log("push "+arrColor);

     drawMe();
}
let addColor = document.getElementById("addColor");
addColor.addEventListener("click",addColorFromPicker);
function addColorFromPicker() {
    let myColor = document.getElementById("myColor");

    transparencyOfGraph = String (document.getElementById("transparency-graph").value);
    if (document.getElementById("transparency-graph").value<10){
        transparencyOfGraph = "0"+String (document.getElementById("transparency-graph").value);
    }
    let newValue = myColor.value + transparencyOfGraph;

    strArr.push(newValue);
    document.getElementById("input22").value = strArr;
}

let dataClear = document.getElementById("dataClearBtn");
dataClear.addEventListener("click",clearAllData);
function clearAllData(){
    strArr = [];arrColor = [];arrData = [];
    document.getElementById("realData").value = "";
    document.getElementById("input22").value = "";
    document.getElementById("input11").value = "";
}
// remove last two character from string
let getStringMinusTransparent = function removeLatTwoChar(oldStr) {
            var newStr = oldStr.substring(0, oldStr.length-2);
            console.log("newstring " + newStr);
            return newStr;
        };

function changeTransparencyInarrayColor(myArray){
    if (myArray.length === 0){
        alert("NO Data");
        return;
    }
    let aaa1 = [];
    for (let ii=0; ii<myArray.length; ii++){
        transparencyOfGraph = String (document.getElementById("transparency-graph").value);
        if (document.getElementById("transparency-graph").value<10){
            transparencyOfGraph = "0"+String (document.getElementById("transparency-graph").value);
        }

        let aaa = getStringMinusTransparent(myArray[ii]) + transparencyOfGraph;
        aaa1.push(aaa);
        console.log(aaa1);
    }
    arrColor = aaa1;
    document.getElementById("input22").value = arrColor;
}

