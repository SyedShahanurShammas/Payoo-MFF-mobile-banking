document.getElementById('Add-amount-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const addAmount = getInputValueById('add-amount-form')
    const pinNumber = getInputValueById('add-input-pin-number')

    chekIsnan(addAmount);

    if (pinNumber === 12) {
        const currentAmount = getTextValueById('current_balance')
        const newAddAmount = addAmount + currentAmount;
        setTheValue(newAddAmount)
        //    Add to transaction history
        setTheTransactionHistory('The Adding amount', addAmount, newAddAmount)
    }
    else {
        alert = 'Wrong pin number'
    }
})
// Add Bonus


// cashOut

document.getElementById('cashOut-amount-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const cashOutAmount = getInputValueById('CashOut-amount-form')
    const CashOutPin = getInputValueById('CashOut-input-pin-number')
    chekIsnan(cashOutAmount)

    if (CashOutPin === 12) {
        const currentAmount = getTextValueById('current_balance')
        const NewBalance = currentAmount - cashOutAmount;
        setTheValue(NewBalance)

        if (currentAmount < cashOutAmount) {
            alert('you dont have sufficent Balance')
            return;

        }
        // add to transection history
        setTheTransactionHistory('Cash out amount', cashOutAmount, NewBalance)

    }

})
// transfer amount section
document.getElementById('tranfer-amount-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const transferAmount = getInputValueById('transfer-amount-form');
    const transferPin = getInputValueById('transfer-input-pin-number');
    // cheak is not a number
    chekIsnan(transferAmount)

    if (transferPin === 12) {
        const currentAmount = getTextValueById('current_balance')
        if (currentAmount < transferAmount) {
            alert('You Do not have sufficient amount.')
            return;
        }
        const newAmount = currentAmount - transferAmount;
        setTheValue(newAmount);

        setTheTransactionHistory('Transfer Amount', transferAmount, newAmount)
    }


})