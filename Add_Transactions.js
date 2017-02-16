/// <reference path="Dir_JS.js" />
var Trans =
    {
        "Transactions": [
           { "TransNo": 5, "TransDesc": "Deposit", "TransLocation":"Toronto", "TransDate": "12/5/2016", "TransType": "Deposit", "TransAmount": 0.00 },
           { "TransNo": 4, "TransDesc": "Withdrawal", "TransLocation": "Kitchener", "TransDate": "12/5/2016", "TransType": "Withdrawal", "TransAmount": 0.00 },
           { "TransNo": 3, "TransDesc": "Deposit", "TransLocation":"Toronto", "TransDate": "12/5/2016", "TransType": "Deposit", "TransAmount": 0.00 },
           { "TransNo": 2, "TransDesc": "Deposit", "TransLocation":"Kitchener", "TransDate": "12/5/2016", "TransType": "Deposit", "TransAmount": 0.00 },
           { "TransNo": 1, "TransDesc": "Withdrawal", "TransLocation":"Waterloo", "TransDate": "12/5/2016", "TransType": "Withdrawal", "TransAmount": 0.00 }
        ]
    };

    var table = document.getElementById("TransTable");
    


	for (i in Trans.Transactions) {
		//document.getElementById("TransTable")
		//.innerHTML = document.getElementById("demo").innerHTML + Trans.Transactions[i].TransDesc + "\n";
		var row = table.insertRow(1);
		var TransNum = row.insertCell(0);
		var TransDesc = row.insertCell(1);
		var TransLoc = row.insertCell(2);
		var TransDate = row.insertCell(3);
		var TransType = row.insertCell(4);
		var TransAmount = row.insertCell(5);
		TransNum.innerHTML = Trans.Transactions[i].TransNo;
		TransDesc.innerHTML = Trans.Transactions[i].TransDesc;
		TransLoc.innerHTML = Trans.Transactions[i].TransLocation;
		TransDate.innerHTML = Trans.Transactions[i].TransDate;
		TransType.innerHTML = Trans.Transactions[i].TransType;
		TransAmount.innerHTML = Trans.Transactions[i].TransAmount;
		
	}

	
