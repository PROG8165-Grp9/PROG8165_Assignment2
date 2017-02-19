/// <reference path="Dir_JS.js" />
var Trans =
    {
        "Transactions": [
           { "TransNo": 1, "TransDesc": "TD Canada Trust: Initial Deposit", "TransLocation":"Toronto", "TransDate": "12/1/2016", "TransType": "Deposit", "TransAmount": 0.00 },
           { "TransNo": 2, "TransDesc": "Conestoga College ATM Withdrawal", "TransLocation": "Kitchener", "TransDate": "18/4/2016", "TransType": "Withdrawal", "TransAmount": 0.00 },
           { "TransNo": 3, "TransDesc": "TD Canada Trust: ATM Deposit", "TransLocation":"Toronto", "TransDate": "21/6/2016", "TransType": "TD Canada Trust: Pioneer Dr. Branch Deposit", "TransAmount": 0.00 },
           { "TransNo": 4, "TransDesc": "Deposit", "TransLocation":"Kitchener", "TransDate": "12/7/2016", "TransType": "Deposit", "TransAmount": 0.00 },
           { "TransNo": 5, "TransDesc": "Fairview Park Mall ATM Withdrawal", "TransLocation":"Waterloo", "TransDate": "10/12/2016", "TransType": "Withdrawal", "TransAmount": 0.00 }
        ]
    };

    var table = document.getElementById("TransTable");
    


	for (i in Trans.Transactions) {
		//document.getElementById("TransTable")
		//.innerHTML = document.getElementById("demo").innerHTML + Trans.Transactions[i].TransDesc + "\n";
	    var row = table.insertRow(table.getElementsByTagName("tr").length);
	    row.id = Trans.Transactions[i].TransNo;
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

	
