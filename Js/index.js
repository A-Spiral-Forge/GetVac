const scg=document.querySelector('.scoviguide');
const svg=document.querySelector('.svacguide');
const svd=document.querySelector('.svacdetails');
const cg=document.querySelector('.coviguide');
const vg=document.querySelector('.vacguide');
const vd=document.querySelector('.vacdetails');
const vac1=document.querySelector('.vac1');

svg.addEventListener('click',function()
{
    vac1.style.display = "none";
    cg.style.display = "none";
    vd.style.display = "none";
    vg.style.display = "block";
});

svd.addEventListener('click',function()
{
    vac1.style.display = "none";
    cg.style.display = "none";
    vd.style.display = "block";
    vg.style.display = "none";
});

scg.addEventListener('click',function()
{
    vac1.style.display = "none";
    cg.style.display = "block";
    vd.style.display = "none";
    vg.style.display = "none";
});



google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Number of peoples','Number of Doses'],
  ['First Dose',298700000],
  ['Second Dose',70300000],
  ['Left Population',997400000]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {
    'title':'Vaccination Data of India', 'width':500, 'height':400,
    'backgroundColor':'#5286e7','fontSize':16,
    legend:
    {
        textStyle:
        {
            fontSize:13,
        }
    },
    pieSliceTextStyle:
    {
        color:'black',
        bold: true,
    },
    slices:
    {
        0: {color:'yellow'},
        1: {color:'green'},
        2: {color:'red'},
    }
    };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}