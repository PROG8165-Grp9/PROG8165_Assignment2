function sort() {
var dateOption = document.getElementById("sort");

if(dateOption.selectedIndex == 0) {
    sortDate();
}
else if(dateOption.selectedIndex == 1) {
    sortType();
}
else if(dateOption.selectedIndex == 2) {
    sortLocation();
}
location.reload();
}