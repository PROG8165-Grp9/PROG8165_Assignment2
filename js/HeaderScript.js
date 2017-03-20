function LoadDash() {
    document.location.href='Directory.html';
}
function CreateTrans() {
    document.location.href = 'NewTransaction.html';
}
function LogOut() {
    document.location.href = 'LogIn.html';
}

function SelectionChange()
{
	var selType = document.getElementById("selectType").value;
	var selections= document.getElementById("selectOption");
	if(selType == "Month Range")
	{
		var option = document.createElement("option");
		option.text = "For the last 3 Months";
		selections.add(option);
		option.text = "For the last 6 Months";
		selections.add(option);
		option.text = "For the last year";
		selections.add(option);
	}
	else if (selType =="Type")
	{
		var option = document.createElement("option");
		option.text = "For the last 3 Months";
		selections.add(option);
		option.text = "For the last 6 Months";
		selections.add(option);
	}
	else if(selType == "Location")
	{
	}
}

