var table = document.getElementById("TransTable");
var select = document.getElementById("sort");

function clearTable() {
    table.replaceChild(document.createElement('TBODY'), table.tBodies[0]);
}

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

function sortTable() {
    if(select.selectedIndex == 0) {
        sortDate();
        updateItems();
    }
    else if(select.selectedIndex == 1) {
        sortType();
        updateItems();
    }
    else if(select.selectedIndex == 2) {
        sortLocation();
        updateItems();
    } 
}  

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
		TransDate.innerHTML = Trans.Transactions[i].TransDate;
		TransType.innerHTML = Trans.Transactions[i].TransType;
		row.id = Trans.Transactions[i].TransNo;    
    }

function updateItems() {  
    clearTable();
    for (i in Trans.Transactions) {	
        var row = table.insertRow(table.getElementsByTagName("tr").length);
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
		TransDate.innerHTML = Trans.Transactions[i].TransDate;
		TransType.innerHTML = Trans.Transactions[i].TransType;
		row.id = Trans.Transactions[i].TransNo;          
        }
}







