window.onload = function (TransTable) {
        var typeselect = document.getElementById("typeselect");
        var ops = typeselect.getElementsByTagName("option");
        var arrOps = Array.prototype.slice.call(ops, 0);
        arrOps.sort(function (a, b) {
            return a.value - b.value;
        });
        typeselect.options.length = 0;
        arrOps.map(function (op) {
            typeselect.appendChild(op);
        });
    } 