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

function onValueChanged()
{
	tbxNAmount.Text = tbxNAmount.value.ToString("#0.00");
}

function goBack() {
    window.history.back();
}