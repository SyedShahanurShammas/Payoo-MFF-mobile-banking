document.getElementById('add-btn-display').addEventListener('click', function () {
    showSection('form-show-add-money')
})
document.getElementById('addBonus-btn-display').addEventListener('click', function () {
    showSection('form-show-addBonus-money')
})

document.getElementById('cashOUt-btn-display').addEventListener('click', function () {
    showSection('form-show-cash-out')
})

document.getElementById('transfer-btn-display').addEventListener('click', function () {
    showSection('form-show-transferMoney-out')
})
document.getElementById('PayBill-btn-display').addEventListener('click', function () {
    showSection('form-show-payBill-out')
})
document.getElementById('Transaction-btn-display').addEventListener('click', function () {
    showSection('show-transection')

})

function showSection(id) {
    document.getElementById('form-show-add-money').classList.add('hidden')
    document.getElementById('form-show-cash-out').classList.add('hidden')
    document.getElementById('form-show-addBonus-money').classList.add('hidden')
    document.getElementById('form-show-transferMoney-out').classList.add('hidden')
    document.getElementById('form-show-payBill-out').classList.add('hidden')
    document.getElementById('show-transection').classList.add('hidden')

    document.getElementById(id).classList.remove('hidden')
}