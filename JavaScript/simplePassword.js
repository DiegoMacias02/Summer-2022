var password = "wordpass";
var response;
var maxEntries = 3;
var count = 0
var error = false;
while(response!= password && !error) {
    response = window.prompt("Enter password");
    count ++;
    if(count > maxEntries) {
        error = true;
    }
}
if (error) {
    alert("Too many times");
} else {
    alert("Good shit");
}