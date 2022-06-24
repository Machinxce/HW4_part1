/*
File: hw4.validate.js
Samin_basir@student.uml.edu
Computer Science Student UMass Lowell GUI Programming I
Date: 6/23/2022
Updated: 6/15/2022 by Samin Basir
created a table completely dynamically based on parameters entered
in an HTML form

tools used for help w3schools.com
https://stackoverflow.com/questions/8749236/create-table-with-jquery-append
*/

/* This checks if the box is empty
- checks to see if its an integer within the range of -50- 50
- checks wether max is greater than min */
$(function() {

    $("#inputForm").validate({
        // setting the rules
        rules: {
            firstC: {
                required: true,
                number: true,
                integer: true,
                min: -50,
                max: 50
            },
            lastC: {
                required: true,
                number: true,
                integer: true,
                min: -50,
                max: 50
            },
            firstR: {
                required: true,
                number: true,
                integer: true,
                min: -50,
                max: 50
            },
            lastR: {
                required: true,
                number: true,
                integer: true,
                min: -50,
                max: 50
            }
        },

        //all the error messages to be displayed
        messages: {
            firstC: {
                required: " Error: This box cannot be empty!",
                number: "Please enter a valid number for the minimum column value",
                integer: "Error: cannot be a decimal value",
                min: "Error! Enter a number greater or equal to -50",
                max: "Error! Enter a number that is not bigger than 50"
            },
            lastC: {
              required: " Error: This box cannot be empty!",
              number: "Please enter a valid number for the minimum column value",
              integer: "Error: cannot be a decimal value",
              min: "Error! Enter a number greater or equal to -50",
              max: "Error! Enter a number that is not bigger than 50"
            },
            firstR: {
              required: " Error: This box cannot be empty!",
              number: "Please enter a valid number for the minimum column value",
              integer: "Error: cannot be a decimal value",
              min: "Error! Enter a number greater or equal to -50",
              max: "Error! Enter a number that is not bigger than 50"
            },
            lastR: {
              required: " Error: This box cannot be empty!",
              number: "Please enter a valid number for the minimum column value",
              integer: "Error: cannot be a decimal value",
              min: "Error! Enter a number greater or equal to -50",
              max: "Error! Enter a number that is not bigger than 50"
            }
        }
    });

});
