
var list = document.getElementById('list');
var button = document.getElementById('addElem');
button.addEventListener('click', function() {
  var x = list.getElementsByTagName('li');
  var itemNumber = x.length;
  list.innerHTML += '<li>item ' + itemNumber + '</li>'
});