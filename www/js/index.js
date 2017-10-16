var key = "pen";
var value = "blue";

window.localStorage.setItem(key, value);





var trigger = document.getElementById('trigger');
function outputFunction(){
    document.getElementById('key').innerHTML="<br/><hr><span>Your key is:&nbsp</span>" + key + "<br/><hr>";
    document.getElementById('value').innerHTML="<span>Your value is:&nbsp</span>" + value + "<br/><hr>";
}
function numberFunction(){
    document.getElementById('numbers').innerHTML="<span>Your local storage contains:&nbsp</span>" + window.localStorage.length + "<span>&nbspitems.</span><br/><hr>";
}