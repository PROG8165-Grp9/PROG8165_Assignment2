document.getElementById("lblAmntErr").style.display = "none";
if(typeof Trans !== 'undefined' && Trans !== null)
	{
		document.getElementById("tbxNTrans").value = Trans.Transactions.length + 1;
	}
	else
	{
		var Trans ={"Transactions": []};
		document.getElementById("tbxNTrans").value = Trans.Transactions.length + 1;
	}

function AddTrans() {
}

function goBack() {
    window.history.back();
}

document.getElementById("tbxNAmount").onblur =function (){ 
	var amnt = this.value;
    if(amnt.replace(/,/g, "") <= 10000 && amnt.replace(/,/g, "") >= -10000)
	{
		document.getElementById("lblAmntErr").style.display = "none";
		document.getElementById("tbxNAmount").value = parseFloat(amnt)
		.toFixed(2)
		.replace(/^\d{1,3}(\,\d{3})*(?:\.\d+)?$/g, ",");
	}
	else
	{
		document.getElementById("lblAmntErr").style.display = "block";
	}
	
	
}