// plik scripts.js
var buttonText = document.getElementsByClassName('button');
var j = (buttonText.length);
for (var k = 0; k < j; k++) {
  alert('wartoœæ buttonText.innerText to: ' + buttonText[k].innerText);
  console.log('wartoœæ k teraz to: ' + k + ' z '+ j);
  console.log('wartoœæ buttonText.innerText to: ' + buttonText[k].innerText);
  console.log(buttonText);
}