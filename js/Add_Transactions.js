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

function json2array(json){ 
var result = []; 
var keys = Object.keys(json); 
keys.forEach(function(key){ 
result.push(json[key]); 
}); 
return result; 
} 

if(typeof Trans !== 'undefined' && Trans !== null)
	{
		var arr = json2array(Trans);
	}
else
	{
		var Trans ={"Transactions": []};
		var arr = json2array(Trans);
	}




