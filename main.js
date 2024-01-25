var rigester = document.querySelector(".registerForm")
var exchange = document.querySelector(".exchange")
var input = document.querySelector(".input")
var coins = ""
rigester.onsubmit = function (e) {
    e.preventDefault();
    var elements = e.target.elements;
    var selcet = exchange.value;
    if (selcet == "dollar")
        coins = input.value * "3.7";
    else if (selcet == "dinar")
        coins = input.value * "5.2";
    else
        coins = input.value;
    let p=document.querySelector(".result");
    p.textContent = (
        `
    ${input.value} = ${coins} ${selcet}
    `
    );
    input.value = "";
}
