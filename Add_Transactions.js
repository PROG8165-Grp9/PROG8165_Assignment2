
var Trans =
    {
        "Transactions": [
           { "TransNo": 1, "TransDesc": "TD Canada Trust: Initial Deposit", "TransLocation":"Toronto", "TransDate": "12/01/2016", "TransType": "Deposit", "TransAmount": 100.00 },
           { "TransNo": 2, "TransDesc": "Conestoga College ATM Withdrawal", "TransLocation": "Kitchener", "TransDate": "18/04/2016", "TransType": "Withdrawal", "TransAmount": 20.00 },
           { "TransNo": 3, "TransDesc": "TD Canada Trust: ATM Deposit", "TransLocation":"Toronto", "TransDate": "21/06/2016", "TransType": "Deposit", "TransAmount": 150.00 },
           { "TransNo": 4, "TransDesc": "TD Canada Trust: Pioneer Dr. Branch Deposit", "TransLocation":"Kitchener", "TransDate": "12/07/2016", "TransType": "Deposit", "TransAmount": 200.00 },
           { "TransNo": 5, "TransDesc": "Fairview Park Mall ATM Withdrawal", "TransLocation":"Waterloo", "TransDate": "10/12/2016", "TransType": "Withdrawal", "TransAmount": 70.00 }
        ]
	};

<<<<<<< HEAD
var mystring = "[";
var obj = Trans;
for (var x in obj.Transactions){
  var thisstring = "[" + obj.Transactions[x].TransNo + ", \"" + 
  obj.Transactions[x].TransDesc + "\", \"" + 
  obj.Transactions[x].TransLocation + "\", \"" + 
  obj.Transactions[x].TransDate + "\", \"" + 
  obj.Transactions[x].TransType + "\", " + 
  obj.Transactions[x].TransAmount + "]"
  mystring = mystring + thisstring;
}
mystring = mystring + "];";


//var Transac =
//    [
//           [ 1, "TD Canada Trust: Initial Deposit", "Toronto",  "12/01/2016", "Deposit", 0.00 ],
//           [ 2, "Conestoga College ATM Withdrawal", "Kitchener", "18/04/2016", "Withdrawal", 0.00 ],
//           [ 3, "TD Canada Trust: ATM Deposit", "Toronto", "21/06/2016", "Deposit", 0.00 ],
//           [ 4, "TD Canada Trust: Pioneer Dr. Branch Deposit", "Kitchener", "12/07/2016", "Deposit", 0.00 ],
//           [ 5, "Fairview Park Mall ATM Withdrawal", "Waterloo", "10/12/2016", "Withdrawal", 0.00 ]
//        ];
=======
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
    
>>>>>>> e612fbd812d9941892e5d54c2a5f96ee06708c8f
