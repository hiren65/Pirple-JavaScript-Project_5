# **About Application :**

It is Single page application has options of 7 working graphs (bar chart, pie chart, 
line chart, etc.) with colors and data set up to render decent looking charts.
you can copy and paste into your own projects, and quickly get going with 
customizing and fine-tuning to make them fit your style and purpose.
                It is Stand-alone client side application powers by chart.js
open sourse frame work linked 
`<script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>`
Optionaly you can link locally with 
`<script src="path/to/chartjs/dist/Chart.js"></script>` 
in index.html

**How Application uses Data For rendering Chart**

Application uses CSV file for data and one myFile1.csv is given as a default
use as an example. But you can import any *.csv file from local drive.
Tricky part is that it`s format should be as under:

`name  value title label`

in first row. And in second column need always value in Number.
Ypu can also manually add data in application to generate charts.

 Now, we can create a chart. We add a script to our page.
 Following are the basic under standing to generate line charts.
 Random number datasets are generated in this example.    
`
    var ctx = document.getElementById("myChart").getContext("2d");
     
     var chart = new Chart(ctx, {
     
       type: "line",
     
       data: {
     
         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
     
         datasets: [1, 2, 3].map(function(i) {
     
           return {
     
             label: 'Dataset ' + i,
     
             data: [0, 0, 0, 0, 0, 0, 0].map(Math.random),
     
             fill: false
     
           };
     
         })
     
       }
     
     });
 
`    
                
**Chart Display Configuration :** 

On left side of  app there is various input boxes and selection box for various
changes from font size to colors. You can edit/add heading (title), data fotn size,
graph transparency, graph start origin in y-axis, graph border color, tool tip mode,
tool tip font size, tool tip title font size, Legend alienation, it's font size, 
it's visibility etc.  

**Color Configuration for Display**

The Application, It is connected with plug-in _chartjs-plugin-colorschemes_ for
various color themes avilable. Connection as follows in index.html,
`<script src="https://cdn.jsdelivr.net/npm/chartjs-plugin-colorschemes"></script>`
Predefined color schemes for Chart.js available. 
Color selection box you can select various theme for it. Also there is
_`**random**`_ selection, that gives and generates random colors for rendering
charts and it is not part of plugins. 
Thre is one link for more themes "More Plugin Color", you can click to search more 
suitable color theme to find. Select one and copy and paste on given input box.
