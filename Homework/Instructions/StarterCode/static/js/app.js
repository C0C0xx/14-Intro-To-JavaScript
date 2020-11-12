// from data.js
var tableData = data;

// YOUR CODE HERE!

var tbody = d3.select("tbody");
tableData. forEach(
    function(row) 
    { 
        // console.log(row);
        var tf = tbody.append("tr") 

        Object.entries(row).forEach(
            function(cell){
                // console.log(cell);
                var td = tf.append("td");
                td.text(cell[1]);
            }
        )



    }

);
function filterData()
    {
        tbody.html("")
    var date = d3.select("#datetime").property("value")
    var fData = tableData
    if (date)
    {
       var fData = tableData.filter(row => row.datetime == date)
    }
console.log(date)
console.log(tableData)
    fData. forEach(
            function(row) 
            { 
                // console.log(row);
                var tf = tbody.append("tr") 
        
                Object.entries(row).forEach(
                    function(cell)
                    {
                        // console.log(cell);
                        var td = tf.append("td");
                        td.text(cell[1]);
                    }
                )
        
        
        
            })
    }

d3.select("#filter-btn").on("click", filterData)