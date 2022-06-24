/*
File: tValidatejs
Samin_basir@student.uml.edu
Computer Science Student UMass Lowell GUI Programming I
Date: 6/23/2022
Updated: 6/23/2022 by Samin Basir
created a table completely dynamically based on parameters entered
in an HTML form
tools used for help w3schools.com
https://stackoverflow.com/questions/8749236/create-table-with-jquery-append
*/

document.querySelector("#submitBtn").onclick = function() {

    if ($("#inputForm").valid() != true) {// only generate table if form is valid
        // clear any mult table that might already be there
        $("#multTable").empty();

        return false;
    }
/*
restricting number only: source: https://stackoverflow.com/questions/891696/jquery-what-is-the-best-way-to-restrict-number-only-input-for-textboxes-all
*/

    // getting values
    var firstC = Number(document.getElementById("firstC").value);
    var lastC = Number(document.getElementById("lastC").value);
    var firstR = Number(document.getElementById("firstR").value);
    var lastR = Number(document.getElementById("lastR").value);

    // if min> max
    if (firstC > lastC) {
        var tempCol = firstC;
        firstC = lastC;
        lastC = tempCol;
        document.getElementById("firstC").value = firstC;
        document.getElementById("lastC").value = lastC;
    }
    // if min> max
    if (firstR > lastR) {
        var tempRow = firstR;
        firstR = lastR;
        lastR = tempRow;
        document.getElementById("firstR").value = firstR;
        document.getElementById("lastR").value = lastR;
    }

/* get data of multiplier and multiplicand from user input */
    // getting row and column lengths
    var colSize = lastC - firstC + 1
    var rowSize = lastR - firstR + 1
    var arr = new Array(rowSize);
    for (var i = 0; i < rowSize; i++) {
        arr[i] = new Array(colSize);
    }
/* add table header line to html */
    // fill matrix
    var x = firstC;
    var y = firstR;
    var product;
    var prodCommas;
    for (var i = 0; i < rowSize; i++) {
        for (var j = 0; j < colSize; j++) {
            product = x * y;
            if (product >= 1000 || product <= -1000) {	// insert commas
                prodCommas = product.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                arr[i][j] = prodCommas;
            }
            else {
                arr[i][j] = product;
            }
            x++;
        }
        x = firstC;
        y++;
    }


    // adding the table data to html
    var table = "<table>";
    table += "<tr>";
    table += "<th>*</th>";
    for (var i = firstC; i <= lastC; i++) {
        table += "<th>" + i + "</th>";
    }
    table += "</tr>";

    var rowNum = firstR;
    for (var i = 0; i < rowSize; i++) {
        table += "<tr>";
        table += "<td>" + rowNum++ + "</td>";
        for (var j = 0; j < colSize; j++) {
            table += "<td>" + arr[i][j] + "</td>";
        }
        table += "</tr>";
    }

    table += "</table>";

    /* output to screen*/
    document.getElementById("multTable").innerHTML = table;

    return false;
}
