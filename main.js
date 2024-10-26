
var amount;
var result ;


var form = document.querySelector(".exchangeForm");
form.onsubmit = function (e) {
  e.preventDefault();
  var elements = e.target.elements;
  amount = elements[0].value;
  //console.log(amount);
  //console.log(elements);
  var selected = document.querySelector(`.exchange`);
  var exchange = elements[`exchange`];
  var options = exchange.options[exchange.selectedIndex].value;
  //console.log(options);
  console.log(options);
  if (options == "dollar") {
    dolar(amount);
  }else if (options == "dinar"){
    dinar(amount);
  }else{
    nis(amount);  
  }
  var data =``;
  data += `
  <h2>${result}</h2>
  `;
  document.querySelector(".result").innerHTML = data;
};
function dolar(amount) {
  amount = amount * 3.5;
  console.log(amount);
  result = amount;
}
function dinar(amount) {
  amount = amount * 5;
  console.log(amount);
  result = amount;
}

function nis(amount) {
  amount = amount;
  console.log(amount);
  result = amount;
}
