document.getElementById("lblAmntErr").style.display = "none";
document.getElementById("descrlabel").style.display = "none";
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

document.getElementById("txtaDesc").onblur =function (){ 
	var des = this.value;
	var reg = /^[A-Za-z0-9 _-]{10,}$/;
    if(!reg.test(des))
	{
		descrlabel.innerHTML = "Description must be at least 10 characters!";
		document.getElementById("descrlabel").style.display = "block";
	}
	else
	{
		descrlabel.innerHTML = "";
		document.getElementById("descrlabel").style.display = "none";
	}
}


document.getElementById("tbxNAmount").onblur =function (){ 
	var amnt = this.value;
    if(amnt.replace(/,/g, "") <= 10000 && amnt.replace(/,/g, "") >= -10000)
	{
		document.getElementById("lblAmntErr").style.display = "none";
		document.getElementById("tbxNAmount").value = parseFloat(amnt)
		.toFixed(2);
	}
	else
	{
		document.getElementById("lblAmntErr").style.display = "block";
	}
	
	
}
function validateTransForm(form) {
	var TransDesc = document.getElementById("txtaDesc").value;
	var TransAmt = document.getElementById("tbxNAmount");
	
	var reg = /^[A-Za-z0-9 _-]{10,}$/;
    if(!reg.test(TransDesc))
	{
		descrlabel.innerHTML = "Description must be at least 10 characters!";
		document.getElementById("descrlabel").style.display = "block";
		return false;
	}
	else
	{
		document.getElementById("descrlabel").style.display = "none";
	}
	
	if(TransAmt.value.replace(/,/g, "") <= 10000 && TransAmt.value.replace(/,/g, "") >= -10000)
	{
       document.getElementById("lblAmntErr").style.display = "none"; 
       return false;        
    }
    else {
       document.getElementById("lblAmntErr").style.display = "block";
    }
	return true;
}