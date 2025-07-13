function getInputValueById(id) {
    const getTheValue = document.getElementById(id).value;
    const newNumberValue = parseFloat(getTheValue)
    return newNumberValue;
}

function getTextValueById(text) {
    const textValue = document.getElementById(text).innerText;
    const newTextValue = parseFloat(textValue)
    return newTextValue;
}
function setTheValue(value) {
    document.getElementById('current_balance').innerText = value;
}
// add the transaction history
function setTheTransactionHistory(tx, num1, num2) {
    const section = document.getElementById('show-transection')
    const div = document.createElement('div');
    div.innerHTML = `
           <div class="p-2 bg-slate-400 black-600 mt-2 rounded">
            <h1 class="text-xl ">${tx}</h1><p>
        ${tx} is ${num1} and The current Amount is: ${num2} </p>
        </div>        `
    section.appendChild(div)
}
// cheak is isnan

function checkIsnan(check) {

    if (isNaN(check)) {
        alert("Text is invalid,Write the exact amount")
        return;
    }
}