
var Trans =
    {
        "Transactions": [
           { "TransNo": 1, "TransDesc": "TD Canada Trust: Initial Deposit", "TransLocation":"Toronto", "TransDate": "March 12, 2014 13:00", "TransType": "Deposit", "TransAmount": 100.00 },
           { "TransNo": 2, "TransDesc": "Conestoga College ATM Withdrawal", "TransLocation": "Kitchener", "TransDate": "September 12, 2014 13:00", "TransType": "Withdrawal", "TransAmount": 20.00 },
           { "TransNo": 3, "TransDesc": "TD Canada Trust: ATM Deposit", "TransLocation":"Toronto", "TransDate": "June 12, 2014 13:00", "TransType": "Deposit", "TransAmount": 150.00 },
           { "TransNo": 4, "TransDesc": "TD Canada Trust: Pioneer Dr. Branch Deposit", "TransLocation":"Kitchener", "TransDate": "March 12, 2017 13:00", "TransType": "Deposit", "TransAmount": 200.00 },
           { "TransNo": 5, "TransDesc": "Fairview Park Mall ATM Withdrawal", "TransLocation":"Waterloo", "TransDate": "March 12, 2004 13:00", "TransType": "Withdrawal", "TransAmount": 70.00 }
        ]
	};

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

function json2array(json){ 
var result = []; 
var keys = Object.keys(json); 
keys.forEach(function(key){ 
result.push(json[key]); 
}); 
return result; 
} 

var arr = json2array(Trans); 

function sortDate() { 
   arr["0"].sort(function(a, b){
    var dateA=new Date(a.TransDate), dateB=new Date(b.TransDate)
    return dateA-dateB //sort by date ascending
});   
}
function sortType() {
    arr["0"].sort(function(a, b){ 
    var x = a.TransType.toLowerCase(); 
    var y = b.TransType.toLowerCase(); 
    if (x < y) {return -1;} 
    if (x > y) {return 1;} 
    return 0; 
    });
}
function sortLocation() {
    arr["0"].sort(function(a, b){ 
    var x = a.TransLocation.toLowerCase(); 
    var y = b.TransLocation.toLowerCase(); 
    if (x < y) {return -1;} 
    if (x > y) {return 1;} 
    return 0; 
    });
}
function sort() {
var dateOption = document.getElementById("sort");

if(dateOption.selectedIndex == 0) {
    sortDate();
}
else if(dateOption.selectedIndex == 1) {
    sortType();
}
else if(dateOption.selectedIndex == 2) {
    sortLocation();
}
location.reload();
}
//var Transac =
//    [
//           [ 1, "TD Canada Trust: Initial Deposit", "Toronto",  "12/01/2016", "Deposit", 0.00 ],
//           [ 2, "Conestoga College ATM Withdrawal", "Kitchener", "18/04/2016", "Withdrawal", 0.00 ],
//           [ 3, "TD Canada Trust: ATM Deposit", "Toronto", "21/06/2016", "Deposit", 0.00 ],
//           [ 4, "TD Canada Trust: Pioneer Dr. Branch Deposit", "Kitchener", "12/07/2016", "Deposit", 0.00 ],
//           [ 5, "Fairview Park Mall ATM Withdrawal", "Waterloo", "10/12/2016", "Withdrawal", 0.00 ]
//        ];



