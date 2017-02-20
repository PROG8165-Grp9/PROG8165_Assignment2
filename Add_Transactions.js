
var Trans =
    {
        "Transactions": [
           { "TransNo": 1, "TransDesc": "TD Canada Trust: Initial Deposit", "TransLocation":"Toronto", "TransDate": "12/01/2016", "TransType": "Deposit", "TransAmount": 0.00 },
           { "TransNo": 2, "TransDesc": "Conestoga College ATM Withdrawal", "TransLocation": "Kitchener", "TransDate": "18/04/2016", "TransType": "Withdrawal", "TransAmount": 0.00 },
           { "TransNo": 3, "TransDesc": "TD Canada Trust: ATM Deposit", "TransLocation":"Toronto", "TransDate": "21/06/2016", "TransType": "Deposit", "TransAmount": 0.00 },
           { "TransNo": 4, "TransDesc": "TD Canada Trust: Pioneer Dr. Branch Deposit", "TransLocation":"Kitchener", "TransDate": "12/07/2016", "TransType": "Deposit", "TransAmount": 0.00 },
           { "TransNo": 5, "TransDesc": "Fairview Park Mall ATM Withdrawal", "TransLocation":"Waterloo", "TransDate": "10/12/2016", "TransType": "Withdrawal", "TransAmount": 0.00 }
        ]
    };

window.onload = function (Trans) {
        var typeselect = document.getElementById("typeselect");
        var ops = typeselect.getElementsByTagName("option");
        var arrOps = Array.prototype.slice.call(ops, 0);
        arrOps.sort(function (a, b) {
            return a.attributes["data-flag"].value - b.attributes["data-flag"].value;
        });
        typeselect.options.length = 0;
        arrOps.map(function (op) {
            typeselect.appendChild(op);
        });
    } 
    