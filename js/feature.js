document.getElementById('Add-amount-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const addAmount = getInputValueById('add-amount-form')
    const pinNumber = getInputValueById('add-input-pin-number')

    checkIsnan(addAmount);

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
    checkIsnan(cashOutAmount)

    if (CashOutPin === 12) {
        const currentAmount = getTextValueById('current_balance')
        if (currentAmount < cashOutAmount) {
            alert('you dont have sufficent Balance')
            return;
        }
        const NewBalance = currentAmount - cashOutAmount;
        setTheValue(NewBalance)

        // add to transection history
        setTheTransactionHistory('Cash out amount', cashOutAmount, NewBalance)

    }
    else {
        alert('incorrect pin number');
        return;
    }

})
// transfer amount section
document.getElementById('tranfer-amount-btn').addEventListener('click', function (event) {
    event.preventDefault();
    const transferAmount = getInputValueById('transfer-amount-form');
    const transferPin = getInputValueById('transfer-input-pin-number');
    // check is not a number
    checkIsnan(transferAmount)

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
    else {
        alert('incorrect pin number')
        return;
    }
})
//Bonus coupon code:

document.getElementById('bonus-amount-btn').addEventListener('click', (event) => {
    event.preventDefault();
    const addCoupon = getInputValueById('bonus-amount-form');
    const bonusPin = getInputValueById('bonus-input-pin-number');

    if (addCoupon === 786) {
        let currentAmount = getTextValueById('current_balance');
        currentAmount += 100;
        if (bonusPin === 12) {
            setTheValue(currentAmount)
            setTheTransactionHistory('Your Bonus', 100, currentAmount)
        }
        else {
            alert('incorrect pin number')
            return;
        }
    }
    else {
        alert('Coupon code isnt match..DGM')
        return;
    }

})
// payBill
document.getElementById('payBill-amount-btn').addEventListener('click', (event) => {
    event.preventDefault()
    const payAmount = getInputValueById('paybill-amount-form');
    const paybillPin = getInputValueById('payBill-input-pin-number');
    checkIsnan(payAmount);

    if (paybillPin === 12) {
        const currentAmount = getTextValueById('current_balance');
        const newAmount = currentAmount - payAmount;
        if (currentAmount < payAmount) {
            alert('You dont have sufficient amount')
            return;
        }
        setTheValue(newAmount)
        // add to transaction history
        setTheTransactionHistory('PayBill Amount', payAmount, newAmount)
    }
    else {
        alert('incorrect pin number')
    }
})