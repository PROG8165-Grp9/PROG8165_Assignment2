var myParam = location.search.split('TransNo=')[1];
document.getElementById("tbxTrans").value = myParam;
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"];

for (i in Trans.Transactions) {
    if (Trans.Transactions[i].TransNo == myParam) {
        var parts = (Trans.Transactions[i].TransDate).split('/');
        var mydate = new Date(parts[2], parts[1] - 1, parts[0]);
        document.getElementById("tbxDate").value = Trans.Transactions[i].TransDate;
        document.getElementById("txtaDesc").value = Trans.Transactions[i].TransDesc;
        document.getElementById("tbxType").value = Trans.Transactions[i].TransType;
        document.getElementById("tbxLoc").value = Trans.Transactions[i].TransLocation;
        document.getElementById("tbxAmount").value = Trans.Transactions[i].TransAmount;
    }

}

function goBack() {
    window.history.back();
}

