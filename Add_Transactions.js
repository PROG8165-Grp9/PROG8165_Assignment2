var Trans =
    {
        "Transactions": [
           { "TransNo": 1, "TransDesc": "Deposit", "TrasDate": "", "TrasType": "Deposit", "TransAmount": 0.00 },
           { "TransNo": 2, "TransDesc": "Withdrawal", "TrasDate": "", "TrasType": "Withdrawal", "TransAmount": 0.00 },
           { "TransNo": 3, "TransDesc": "Deposit", "TrasDate": "", "TrasType": "Deposit", "TransAmount": 0.00 },
           { "TransNo": 4, "TransDesc": "Deposit", "TrasDate": "", "TrasType": "Deposit", "TransAmount": 0.00 },
           { "TransNo": 5, "TransDesc": "Withdrawal", "TrasDate": "", "TrasType": "Withdrawal", "TransAmount": 0.00 }
        ]
    };

for (i in Trans.Transactions) {
    var obj = Trans[i];
    document.getElementById("demo").innerHTML = document.getElementById("demo").innerHTML + Trans.Transactions[i].TransDesc + "\n";
}