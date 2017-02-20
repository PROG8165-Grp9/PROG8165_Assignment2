var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

/**$(document).ready(function() {
    $('#TransTable').DataTable({
        data: Transac,
        columns: [
            { title: "No." },
            { title: "Transaction Month" },
            { title: "Type" },
            { title: "Location." }
            
        ]
    });
});**/

var table = document.getElementById("TransTable");
	for (i in Trans.Transactions) {
	    var row = table.insertRow(table.getElementsByTagName("tr").length-1);
	    var TransNum = row.insertCell(0);
		var TransDesc = row.insertCell(1);
		var TransDate = row.insertCell(2);
		var TransType = row.insertCell(3);
		var TransLoc = row.insertCell(4);
		var link = document.createElement('a');
		link.setAttribute('href', "TransacDetails.html?TransNo=" + Trans.Transactions[i].TransNo);
		TransNum.appendChild(link);
		link.setAttribute('target', "_self");
		link.innerHTML = Trans.Transactions[i].TransNo;
		TransDesc.innerHTML = Trans.Transactions[i].TransDesc;
		TransLoc.innerHTML = Trans.Transactions[i].TransLocation;
		var parts = (Trans.Transactions[i].TransDate).split('/');
        var mydate = new Date(parts[2], parts[1] - 1, parts[0]);
		TransDate.innerHTML = monthNames[mydate.getMonth()];
		TransType.innerHTML = Trans.Transactions[i].TransType;

		row.id = Trans.Transactions[i].TransNo;
		
	}
<<<<<<< HEAD
	
=======

window.onload = function (TransTable) {
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
