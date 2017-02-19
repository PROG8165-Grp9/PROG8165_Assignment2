var table = document.getElementById("TransTable");
	for (i in Trans.Transactions) {
	    var row = table.insertRow(table.getElementsByTagName("tr").length);
	    var TransNum = row.insertCell(0);	    
		var TransDesc = row.insertCell(1);
		var TransLoc = row.insertCell(2);
		var TransDate = row.insertCell(3);
		var TransType = row.insertCell(4);
		var TransAmount = row.insertCell(5);
		var link = document.createElement('a');
		link.setAttribute('href', "TransacDetails.html?TransNo=" + Trans.Transactions[i].TransNo);
		TransNum.appendChild(link);
		link.setAttribute('target', "TransacDetails.html");
		link.innerHTML = Trans.Transactions[i].TransNo;
		//TransNum.innerHTML = Trans.Transactions[i].TransNo;
		TransDesc.innerHTML = Trans.Transactions[i].TransDesc;
		TransLoc.innerHTML = Trans.Transactions[i].TransLocation;
		TransDate.innerHTML = Trans.Transactions[i].TransDate;
		TransType.innerHTML = Trans.Transactions[i].TransType;
		TransAmount.innerHTML = Trans.Transactions[i].TransAmount;

		row.id = Trans.Transactions[i].TransNo;
		
	}

	
