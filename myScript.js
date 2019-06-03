//alert();
let myType;
let createChart;
let title = 'Predicted world population (millions) in 2050';
let subTitleLabel = "Population (millions)";

let arrA = ["Africa", "Asia", "Europe", "Latin America", "North America"];
let arrColor = ["#ff008050","#b6e9c850","#c1afef50","#c68f6f50","#127dcd50"];
let arrData = [2478,5267,734,784,100];

let strArr = [];

let selected = document.getElementById("select");
let mode = 'point';

let legendPosition = "top";
let legendDisplay = true;

let borderColor = 'black';
let toolTip_bodyFont_size = 12;
let legend_fontSize = 14;
let datasetFont_size = 14;
let transparencyOfGraph = "50";
let tooltip_TitleFont_size = 12;
let yaxisBeginAtZero = true;

let filePath = "myFile1.csv";
window.onload = function(){
     drawMe();
};

selected.addEventListener("click",drawMe);



function drawMe() {

        //alert();
        if (arrColor.length === 0){
            alert("No Data?");
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
                        label: subTitleLabel,
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
                    display:legendDisplay,
                    position:legendPosition,
                    fontColor: 'black',
                    labels:{fontSize:legend_fontSize}
                }
            }

        });
    createChart.canvas.parentNode.style.height = 'auto';
}


let ccc = document.getElementById("config-div");
let pressBtn1 = document.getElementById("config-btn");
pressBtn1.addEventListener("click",showConfig);
function showConfig() {
    apply1.remove();
    console.log("1....... "+title);
    ccc.innerHTML = `
                     <span class="allSpan" id="title_1">Title:</span>
                     <input type="text" id="tlt1" value=${String(title)}>
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
                     <span>Legend Visible:</span>
                     <label>
                         <select id="legend-display">
                             <option value="true">true</option>
                             <option value="false">false</option>
                         </select>
                     </label><br>
                     <button id="btn01">Apply</button>
    `;
    document.getElementById("tlt1").value = title;
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

    let ldVis =  document.getElementById("legend-display").value;
    if (ldVis === "true"){
        legendDisplay = true;
    } else {
        legendDisplay = false;
    }
    //alert(yaxisBeginAtZero);

     //alert(transparencyOfGraph);
     changeTransparencyInarrayColor(arrColor);
     console.log("push "+arrColor);

     drawMe();
}
let apply1 = document.getElementById("btn011");
apply1.addEventListener("click",pushChange1);

function pushChange1(){

    //mode = document.getElementById("tooltips").value;
    //legendPosition = document.getElementById("legend").value;



    borderColor = document.getElementById("border-color").value;
    //////////////////////////////////////////////////////////
    //legend_fontSize = parseInt( document.getElementById("legend-fontSize").value);
    /////////////////////////////////////////////////////////
    datasetFont_size = parseInt( document.getElementById("dataset-font-size").value);

    //tooltip_TitleFont_size =parseInt( document.getElementById("toolTip-title-fontSize").value);
    transparencyOfGraph = String (document.getElementById("transparency-graph").value);
    changeTransparencyInarrayColor(arrColor);
    console.log("push "+arrColor);
    let yaxisBeginAtZero1 =  document.getElementById("selectYaxis").value;
    if (yaxisBeginAtZero1 === "yes"){
        yaxisBeginAtZero = true;
    } else {
        yaxisBeginAtZero = false;
    }
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


///////////
let countryArr = [];
let valueArr = [];

let arrTempColor = [];

///////////
let dataImp = document.getElementById("dataImport");
dataImp.addEventListener("click",getCsvData);
function getCsvData(){
    countryArr = [];
    valueArr = [];
    //filePath = "myFile1.csv";
    //strArr = [];arrColor = [];arrData = [];
    d3.csv(filePath, function(data) {
        for (var i = 0; i < data.length; i++) {
            //console.log(data[i].Country);
            countryArr.push(data[i].Country);
            valueArr.push(data[i].Value);
            //console.log(data[i].Value);
            let c1 = getRandomColor();
            arrTempColor.push(c1);
            arrColor = addTransfarencyInRndomColorArr(arrTempColor);
            title = data[0].title;
            subTitleLabel = data[0].label;
            //alert(title);
            document.getElementById("input11").value = countryArr;
            document.getElementById("realData").value = valueArr;
        }
    });
    console.log(countryArr);
    console.log(valueArr);

    strArr = [];arrColor = [];arrData = [];
    arrA = countryArr;arrData = valueArr;
    document.getElementById("input11").value = countryArr;
        //arrColor = randomColor(arrA);

    console.log(arrColor);
    console.log(title);
    //drawMe();
    setTimeout(drawMe,3000);
}

function randomColor(arr) {
    let arrTemp = [];
    for (let i=0;i<arr.length;i++){
        //let c1 = "#"+((1<<24)*Math.random()|0).toString(16);
        let c1 = getRandomColor();
        arrTemp.push(c1);
    }
    return arrTemp;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function addTransfarencyInRndomColorArr(arr) {
    let tt = [];
    for (let i=0;i<arr.length;i++){
        let cc1 = arr[i]+ transparencyOfGraph;
        tt.push(cc1);
    }
    return tt;
}


var fileInput = document.getElementById("csvFileInput");

    readFile = function () {
        var reader = new FileReader();
        reader.onload = function () {
            document.getElementById('out').innerHTML = reader.result;
        };
        // start reading the file. When it is done, calls the onload event defined above.
        reader.readAsBinaryString(fileInput.files[0]);

    };

//fileInput.addEventListener('change', readFile);


function handleFileSelect(evt) {
    var files = evt.target.files; // FileList object

    // files is a FileList of File objects. List some properties.
    var output = [];
    for (var i = 0, f; f = files[i]; i++) {
        output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
            f.size, ' bytes, last modified: ',
            f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
            '</li>');
        filePath = f.name;
    }
    document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
}

//document.getElementById('csv').addEventListener('change', handleFileSelect, false);


//check for file
let charArr = [];
let nn = 0;
window.onkeypress = function (e) {
    if (nn === 4){
        console.log(charArr);
        let aa = charArr.join("");
        console.log(aa);
        if (aa === "unit"){
            filePath = "unit.csv";
            charArr = [];
            nn = 0;
            return;
        }else{
            charArr = [];
            filePath = "myFile1.csv";
            console.log(filePath);
            nn = 0;
        }
        return;
    }
    nn++;
  console.log(event.key);
  charArr.push(event.key);
};


/*
window.onload = function() {
    var fileInput = document.getElementById('fileInput');
    var fileDisplayArea = document.getElementById('fileDisplayArea');

    fileInput.addEventListener('change', function(e) {
        var file = fileInput.files[0];
        var textType = /text.*!/;

        if (file.type.match(textType)) {
            var reader = new FileReader();

            reader.onload = function(e) {
                fileDisplayArea.innerText = reader.result;
            }

            reader.readAsText(file);
        } else {
            fileDisplayArea.innerText = "File not supported!"
        }
    });
};*/
function handleFiles(files) {
    // Check for the various File API support.
    if (window.FileReader) {
        // FileReader are supported.
        getAsText(files[0]);
        //loadHandler();

    } else {
        alert('FileReader are not supported in this browser.');
    }
}


function getAsText(fileToRead) {
    var reader = new FileReader();
    // Handle errors load
    reader.onload = loadHandler;
    reader.onerror = errorHandler;
    // Read file into memory as UTF-8
    reader.readAsText(fileToRead);
}

function loadHandler(event) {
    var csv = event.target.result;
    processData(csv);
}

function processData(csv) {
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];
    while (allTextLines.length) {
        lines.push(allTextLines.shift().split(','));
    }
    console.log(lines);
    console.log(lines[0]);
    let pp =[];
    let dd = [];
    countryArr = [];
    valueArr = [];
    arrColor = [];
    arrTempColor = [];arrA = [];arrData = [];
    //filePath = null;

    for (let i=1;i<lines.length;i++) {
        pp.push(lines[i][0]);
        dd.push(lines[i][1]);

        countryArr.push(lines[i][0]);
        valueArr.push(lines[i][1]);
        //console.log(data[i].Value);
        let c1 = getRandomColor();
        arrTempColor.push(c1);


        title = lines[1][2];
        subTitleLabel = lines[1][3];
        //alert(title);


    }
    arrColor = addTransfarencyInRndomColorArr(arrTempColor);
    console.log("ffff     "+arrColor);
    document.getElementById("input11").value = countryArr;
    document.getElementById("realData").value = valueArr;
    document.getElementById("input22").value = arrColor;
    //strArr = [];arrColor = [];arrData = [];
    arrA = countryArr; arrData = valueArr;
    //countryArr = pp;valueArr = dd;
    //drawMe();
    setTimeout(drawMe,3000);
    //console.log(countryArr);console.log(valueArr);
    //console.log(arrColor);
    drawOutput(lines);
}

//if your csv file contains the column names as the first line
function processDataAsObj(csv){
    var allTextLines = csv.split(/\r\n|\n/);
    var lines = [];

    //first line of csv
    var keys = allTextLines.shift().split(',');

    while (allTextLines.length) {
        var arr = allTextLines.shift().split(',');
        var obj = {};
        for(var i = 0; i < keys.length; i++){
            obj[keys[i]] = arr[i];
        }
        lines.push(obj);
    }
    console.log(lines);
    drawOutputAsObj(lines);
}

function errorHandler(evt) {
    if(evt.target.error.name == "NotReadableError") {
        alert("Canno't read file !");
    }
}

function drawOutput(lines){
    //Clear previous data
    document.getElementById("output").innerHTML = "";
    var table = document.createElement("table");
    for (var i = 0; i < lines.length; i++) {
        var row = table.insertRow(-1);
        for (var j = 0; j < lines[i].length; j++) {
            var firstNameCell = row.insertCell(-1);
            firstNameCell.appendChild(document.createTextNode(lines[i][j]));
        }
    }
    document.getElementById("output").appendChild(table);
}

//draw the table, if first line contains heading
function drawOutputAsObj(lines){
    //Clear previous data
    document.getElementById("output").innerHTML = "";
    var table = document.createElement("table");

    //for the table headings
    var tableHeader = table.insertRow(-1);
    Object.keys(lines[0]).forEach(function(key){
        var el = document.createElement("TH");
        el.innerHTML = key;
        tableHeader.appendChild(el);
    });

    //the data
    for (var i = 0; i < lines.length; i++) {
        var row = table.insertRow(-1);
        Object.keys(lines[0]).forEach(function(key){
            var data = row.insertCell(-1);
            data.appendChild(document.createTextNode(lines[i][key]));
        });
    }
    document.getElementById("output").appendChild(table);
}
